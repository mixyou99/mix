from __future__ import annotations

import argparse
import json
import socket
import subprocess
import uuid
import webbrowser
from http import HTTPStatus
from http.server import SimpleHTTPRequestHandler, ThreadingHTTPServer
from pathlib import Path
from urllib.parse import parse_qs, urlparse

from datetime import datetime

from core import BuildRequest, ExcludedPeriod, build, parse_timestamp


APP_DIR = Path(__file__).resolve().parent
UPLOAD_DIR = Path.home() / "Library" / "Application Support" / "WordRevisionBuilderMac" / "uploads"


class AppHandler(SimpleHTTPRequestHandler):
    def __init__(self, *args, **kwargs):
        super().__init__(*args, directory=str(APP_DIR / "static"), **kwargs)

    def do_GET(self) -> None:
        parsed = urlparse(self.path)
        if parsed.path == "/api/choose-file":
            self.choose_file(parsed)
            return
        if parsed.path == "/":
            self.path = "/index.html"
        super().do_GET()

    def do_POST(self) -> None:
        parsed = urlparse(self.path)
        if parsed.path == "/api/upload":
            self.upload_file(parsed)
            return

        if parsed.path != "/api/build":
            self.send_error(HTTPStatus.NOT_FOUND)
            return

        try:
            length = int(self.headers.get("Content-Length", "0"))
            payload = json.loads(self.rfile.read(length).decode("utf-8"))
            request = payload_to_request(payload)
            result = build(request)
            self.write_json(
                {
                    "ok": True,
                    "result_document_path": str(result.result_document_path),
                    "json_report_path": str(result.json_report_path),
                    "csv_report_path": str(result.csv_report_path),
                    "execution_log_path": str(result.execution_log_path),
                    "revision_count": result.revision_count,
                    "warnings": result.warnings,
                }
            )
        except Exception as exc:
            self.write_json({"ok": False, "error": str(exc)}, status=HTTPStatus.BAD_REQUEST)

    def choose_file(self, parsed) -> None:
        try:
            query = parse_qs(parsed.query)
            role = query.get("role", ["document"])[0]
            prompt = "Choose original DOCX" if role == "original" else "Choose revised DOCX"
            script = f'POSIX path of (choose file with prompt "{prompt}")'
            result = subprocess.run(["osascript", "-e", script], capture_output=True, text=True, check=True)
            path = Path(result.stdout.strip()).expanduser()
            if path.suffix.lower() != ".docx":
                raise ValueError("Please choose a .docx file.")
            self.write_json({"ok": True, "path": str(path), "name": path.name})
        except subprocess.CalledProcessError:
            self.write_json({"ok": False, "error": "File selection was cancelled."}, status=HTTPStatus.BAD_REQUEST)
        except Exception as exc:
            self.write_json({"ok": False, "error": str(exc)}, status=HTTPStatus.BAD_REQUEST)

    def upload_file(self, parsed) -> None:
        try:
            length = int(self.headers.get("Content-Length", "0"))
            content_type = self.headers.get("Content-Type", "")
            if content_type.startswith("application/json"):
                payload = json.loads(self.rfile.read(length).decode("utf-8"))
                filename = Path(payload.get("filename", "document.docx")).name
                data_url = payload.get("data_url", "")
                marker = "base64,"
                if marker not in data_url:
                    raise ValueError("Upload payload is invalid.")
                import base64

                raw = base64.b64decode(data_url.split(marker, 1)[1])
            else:
                query = parse_qs(parsed.query)
                filename = Path(query.get("filename", ["document.docx"])[0]).name
                raw = self.rfile.read(length)

            if not filename.lower().endswith(".docx"):
                raise ValueError("Only .docx files are supported.")
            if not raw:
                raise ValueError("Uploaded file is empty.")

            UPLOAD_DIR.mkdir(parents=True, exist_ok=True)
            upload_id = uuid.uuid4().hex
            stored_path = UPLOAD_DIR / upload_id / filename
            stored_path.parent.mkdir(parents=True, exist_ok=True)
            stored_path.write_bytes(raw)
            self.write_json({"ok": True, "upload_id": upload_id, "name": filename, "path": str(stored_path)})
        except Exception as exc:
            self.write_json({"ok": False, "error": str(exc)}, status=HTTPStatus.BAD_REQUEST)

    def write_json(self, body: dict, status: HTTPStatus = HTTPStatus.OK) -> None:
        encoded = json.dumps(body, ensure_ascii=False, indent=2).encode("utf-8")
        self.send_response(status)
        self.send_header("Content-Type", "application/json; charset=utf-8")
        self.send_header("Content-Length", str(len(encoded)))
        self.end_headers()
        self.wfile.write(encoded)

    def log_message(self, format: str, *args) -> None:
        print(format % args)


def payload_to_request(payload: dict) -> BuildRequest:
    original = resolve_document(payload, "original")
    revised = resolve_document(payload, "revised")
    result = resolve_result_path(payload, original)

    execution_mode = payload.get("execution_mode", "Actual Audit Mode")
    requested_start = None
    requested_end = None
    if execution_mode == "Simulation Manifest Mode":
        requested_start = parse_timestamp(payload.get("requested_start", ""))
        requested_end = parse_timestamp(payload.get("requested_end", ""))

    excluded_periods: list[ExcludedPeriod] = []
    for item in payload.get("excluded_periods", []):
        start = item.get("start", "").strip()
        end = item.get("end", "").strip()
        if not start and not end:
            continue
        excluded_periods.append(
            ExcludedPeriod(
                start=parse_timestamp(start),
                end=parse_timestamp(end),
                description=item.get("description", ""),
            )
        )

    minimum_interval = int(payload.get("minimum_interval_minutes") or 1)
    return BuildRequest(
        original_path=original,
        revised_path=revised,
        result_path=result,
        reviewer_name=(payload.get("reviewer_name", "").strip() or "Reviewer"),
        execution_mode=execution_mode,
        requested_start=requested_start,
        requested_end=requested_end,
        excluded_periods=excluded_periods,
        minimum_interval_minutes=minimum_interval,
        random_seed=(payload.get("random_seed") or "").strip() or None,
        granularity=payload.get("granularity", "word-level"),
        compare_options=payload.get("compare_options", {}),
    )


def resolve_document(payload: dict, role: str) -> Path:
    path_value = (payload.get(f"{role}_path") or "").strip()
    if path_value:
        return Path(path_value).expanduser()

    upload_path = (payload.get(f"{role}_upload_path") or "").strip()
    if upload_path:
        path = Path(upload_path).expanduser()
        if UPLOAD_DIR not in path.parents:
            raise ValueError("Uploaded document path is outside the application upload directory.")
        return path

    raise ValueError(f"{role.title()} document is required.")


def resolve_result_path(payload: dict, original: Path) -> Path:
    raw_result = (payload.get("result_path") or "").strip()
    if raw_result:
        return Path(raw_result).expanduser()

    output_location = payload.get("output_location", "same-folder")
    original_is_upload = UPLOAD_DIR in original.parents
    if output_location == "desktop" or original_is_upload:
        base_directory = Path.home() / "Desktop"
    else:
        base_directory = original.parent

    folder_name = f"{original.stem}_WordRevisionBuild_{datetime.now().strftime('%Y%m%d_%H%M%S')}"
    result_directory = unique_directory(base_directory / folder_name)
    return result_directory / f"{original.stem}_Tracked.docx"


def unique_directory(path: Path) -> Path:
    if not path.exists():
        return path
    for index in range(2, 1000):
        candidate = path.with_name(f"{path.name}_{index}")
        if not candidate.exists():
            return candidate
    raise ValueError(f"Could not find an available output folder name near {path}.")


def find_free_port(preferred: int) -> int:
    with socket.socket(socket.AF_INET, socket.SOCK_STREAM) as probe:
        if probe.connect_ex(("127.0.0.1", preferred)) != 0:
            return preferred

    with socket.socket(socket.AF_INET, socket.SOCK_STREAM) as probe:
        probe.bind(("127.0.0.1", 0))
        return int(probe.getsockname()[1])


def main() -> None:
    parser = argparse.ArgumentParser(description="Word Revision Builder for Mac")
    parser.add_argument("--port", type=int, default=8765)
    parser.add_argument("--no-open", action="store_true", help="Do not open the browser automatically.")
    args = parser.parse_args()

    port = find_free_port(args.port)
    server = ThreadingHTTPServer(("127.0.0.1", port), AppHandler)
    url = f"http://127.0.0.1:{port}"
    print(f"Word Revision Builder Mac is running at {url}")
    print("Press Ctrl+C to stop.")
    if not args.no_open:
        webbrowser.open(url)
    try:
        server.serve_forever()
    except KeyboardInterrupt:
        print("\nStopping.")
    finally:
        server.server_close()


if __name__ == "__main__":
    main()
