const excludedBody = document.querySelector("#excludedBody");
const output = document.querySelector("#output");
const validation = document.querySelector("#validation");
const buildButton = document.querySelector("#buildButton");
const resetButton = document.querySelector("#resetButton");

const selectedFiles = {
  original: { path: "", uploadPath: "", name: "" },
  revised: { path: "", uploadPath: "", name: "" },
};

function pad2(value) {
  return String(value).padStart(2, "0");
}

function datetimeControls(value = "") {
  const match = value.match(/^(\d{4}-\d{2}-\d{2})T(\d{2}):(\d{2})$/);
  const date = match ? match[1] : "";
  const hour = match ? match[2] : "09";
  const minute = match ? match[3] : "00";
  const hours = Array.from({ length: 24 }, (_, index) => {
    const item = pad2(index);
    return `<option value="${item}" ${item === hour ? "selected" : ""}>${item}</option>`;
  }).join("");
  const minutes = Array.from({ length: 60 }, (_, index) => {
    const item = pad2(index);
    return `<option value="${item}" ${item === minute ? "selected" : ""}>${item}</option>`;
  }).join("");
  return `
    <div class="picker-row">
      <input class="date-part" type="date" value="${date}">
      <select class="hour-part" aria-label="Hour">${hours}</select>
      <span>:</span>
      <select class="minute-part" aria-label="Minute">${minutes}</select>
    </div>
    <input class="manual-datetime" placeholder="Or type: 20260716 18:30">
  `;
}

function initializeDatetimeCombos() {
  document.querySelectorAll("[data-datetime]").forEach((container) => {
    container.innerHTML = datetimeControls();
  });
}

function datetimeValue(container, fallbackDate = "") {
  const manual = container.querySelector(".manual-datetime").value.trim();
  if (manual) return manual;

  const date = container.querySelector(".date-part").value;
  const resolvedDate = date || fallbackDate;
  if (!resolvedDate) return "";
  const hour = container.querySelector(".hour-part").value;
  const minute = container.querySelector(".minute-part").value;
  return `${resolvedDate}T${hour}:${minute}`;
}

function addExcludedRow(values = {}) {
  const row = document.createElement("tr");
  row.innerHTML = `
    <td><div class="datetime-combo excluded-start">${datetimeControls(values.start || "")}</div></td>
    <td><div class="datetime-combo excluded-end">${datetimeControls(values.end || "")}</div></td>
    <td><input class="excluded-description" placeholder="Description" value="${values.description || ""}"></td>
    <td><button class="danger" type="button">Delete</button></td>
  `;
  row.querySelector("button").addEventListener("click", () => row.remove());
  excludedBody.appendChild(row);
}

function collectPayload() {
  const compareOptions = {};
  document.querySelectorAll("[data-option]").forEach((item) => {
    compareOptions[item.dataset.option] = item.checked;
  });

  const excludedPeriods = [...excludedBody.querySelectorAll("tr")].map((row) => {
    const startContainer = row.querySelector(".excluded-start");
    const endContainer = row.querySelector(".excluded-end");
    const startDate = startContainer.querySelector(".date-part").value;
    const manualStartDate = startContainer.querySelector(".manual-datetime").value.trim().split(/\s+/)[0] || "";
    return {
      start: datetimeValue(startContainer),
      end: datetimeValue(endContainer, startDate || manualStartDate),
      description: row.querySelector(".excluded-description").value,
    };
  });

  return {
    original_path: document.querySelector("#originalPath").value || selectedFiles.original.path,
    revised_path: document.querySelector("#revisedPath").value || selectedFiles.revised.path,
    original_upload_path: selectedFiles.original.uploadPath,
    revised_upload_path: selectedFiles.revised.uploadPath,
    output_location: document.querySelector("#outputLocation").value,
    reviewer_name: document.querySelector("#reviewerName").value || "Reviewer",
    execution_mode: document.querySelector("#executionMode").value,
    granularity: document.querySelector("#granularity").value || "word-level",
    requested_start: datetimeValue(document.querySelector('[data-datetime="requestedStart"]')),
    requested_end: datetimeValue(document.querySelector('[data-datetime="requestedEnd"]')),
    minimum_interval_minutes: document.querySelector("#minimumInterval").value,
    random_seed: document.querySelector("#randomSeed").value,
    excluded_periods: excludedPeriods,
    compare_options: compareOptions,
  };
}

function updateStatus(role, text) {
  document.querySelector(`#${role}Status`).textContent = text;
}

function resetForm() {
  selectedFiles.original = { path: "", uploadPath: "", name: "" };
  selectedFiles.revised = { path: "", uploadPath: "", name: "" };
  updateStatus("original", "No file selected.");
  updateStatus("revised", "No file selected.");

  document.querySelector("#originalPath").value = "";
  document.querySelector("#revisedPath").value = "";
  document.querySelector("#reviewerName").value = "Reviewer";
  document.querySelector("#executionMode").value = "Actual Audit Mode";
  document.querySelector("#granularity").value = "word-level";
  document.querySelector("#outputLocation").value = "same-folder";
  document.querySelector("#minimumInterval").value = "1";
  document.querySelector("#randomSeed").value = "";
  document.querySelectorAll("[data-option]").forEach((item) => {
    item.checked = true;
  });

  excludedBody.innerHTML = "";
  initializeDatetimeCombos();
  output.textContent = "Ready.";
  validation.textContent =
    "Mac version note: Finder-selected files can save beside the original. Dragged files save output to Desktop because browsers hide the original folder path.";
}

async function chooseInFinder(role) {
  try {
    const response = await fetch(`/api/choose-file?role=${role}`);
    const result = await response.json();
    if (!result.ok) throw new Error(result.error || "File selection failed.");

    selectedFiles[role] = { path: result.path, uploadPath: "", name: result.name };
    document.querySelector(`#${role}Path`).value = result.path;
    updateStatus(role, `Selected: ${result.name}`);
    validation.textContent = "Finder-selected files can save output beside the original or on Desktop.";
  } catch (error) {
    validation.textContent = error.message;
  }
}

async function uploadDroppedFile(role, file) {
  if (!file.name.toLowerCase().endsWith(".docx")) {
    validation.textContent = "Only .docx files are supported.";
    return;
  }

  updateStatus(role, `Uploading: ${file.name}`);
  try {
    const response = await fetch(`/api/upload?filename=${encodeURIComponent(file.name)}`, {
      method: "POST",
      headers: { "Content-Type": "application/octet-stream" },
      body: file,
    });
    const result = await readJsonResponse(response);
    if (!result.ok) throw new Error(result.error || "Upload failed.");

    selectedFiles[role] = { path: "", uploadPath: result.path, name: result.name };
    document.querySelector(`#${role}Path`).value = "";
    document.querySelector("#outputLocation").value = "desktop";
    updateStatus(role, `Uploaded: ${result.name}`);
    validation.textContent = "Dragged files save output to Desktop because browsers hide the original folder path.";
  } catch (error) {
    updateStatus(role, `Upload failed: ${error.message}`);
    validation.textContent = error.message;
  }
}

async function readJsonResponse(response) {
  const text = await response.text();
  try {
    return JSON.parse(text);
  } catch {
    return {
      ok: false,
      error: text || `Server returned HTTP ${response.status}. Restart the app and try again.`,
    };
  }
}

async function buildDocument() {
  buildButton.disabled = true;
  output.textContent = "Comparison started...";
  validation.textContent = "Running. Keep this browser tab open.";

  try {
    const response = await fetch("/api/build", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(collectPayload()),
    });
    const result = await readJsonResponse(response);
    if (!result.ok) {
      output.textContent = "Build failed.";
      validation.textContent = result.error || "Unknown error.";
      return;
    }

    output.textContent = [
      "Build completed.",
      `Result DOCX: ${result.result_document_path}`,
      `JSON report: ${result.json_report_path}`,
      `CSV report: ${result.csv_report_path}`,
      `Execution log: ${result.execution_log_path}`,
      `Revisions analyzed: ${result.revision_count}`,
    ].join("\n");

    validation.textContent = result.warnings.length
      ? result.warnings.join("\n")
      : "Validation completed without warnings.";
  } catch (error) {
    output.textContent = "Build failed.";
    validation.textContent = error.message;
  } finally {
    buildButton.disabled = false;
  }
}

document.querySelector("#addExcluded").addEventListener("click", () => addExcludedRow());
buildButton.addEventListener("click", buildDocument);
resetButton.addEventListener("click", resetForm);
document.querySelectorAll("[data-choose]").forEach((button) => {
  button.addEventListener("click", () => chooseInFinder(button.dataset.choose));
});
document.querySelectorAll(".drop-zone").forEach((zone) => {
  zone.addEventListener("dragover", (event) => {
    event.preventDefault();
    zone.classList.add("dragover");
  });
  zone.addEventListener("dragleave", () => zone.classList.remove("dragover"));
  zone.addEventListener("drop", (event) => {
    event.preventDefault();
    zone.classList.remove("dragover");
    const file = event.dataTransfer.files[0];
    if (file) uploadDroppedFile(zone.dataset.role, file);
  });
});
initializeDatetimeCombos();
