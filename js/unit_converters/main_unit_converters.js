import { length_converter } from "./length_converter.js";

// Currently loaded page
const path = window.location.pathname;
const page = path.split("/").pop();
var unitCoverterFunction = () => {};

if (page === "length_converter.html") {
  unitCoverterFunction = length_converter;
}

// Changes the text in label of select tag to the selected value
const unitToConvertOptions = document.getElementById("program-form-unit");
unitToConvertOptions.addEventListener("change", () => {
  const unitToConvertLabel =
    document.getElementsByClassName("unit-to-convert")[0];
  const unitToConvertText =
    unitToConvertOptions.options[unitToConvertOptions.selectedIndex].text;
  unitToConvertLabel.innerText =
    unitToConvertText.charAt(0).toLowerCase() + unitToConvertText.slice(1);
});

// Calculate button - calculates the results and changes content (text and results) in the table and shows table if is not displayed
const unitConverBtnCalculate = document.getElementById(
  "program-form-btn-calculate"
);
unitConverBtnCalculate.addEventListener("click", () => {
  const tableOfUnits = document.getElementById("program-table");
  const unitToConvertTableNames =
    document.getElementsByClassName("unit-to-convert");
  const unitToConvertTableValues = document.getElementsByClassName(
    "unit-value-converted"
  );
  const unitToConvertValue =
    document.getElementById("program-form-value").value;
  const programFormValidity = document
    .getElementById("program-form")
    .checkValidity();
  const unitToConvertValueName =
    unitToConvertOptions.options[unitToConvertOptions.selectedIndex].value;
  const unitToConvertText =
    unitToConvertOptions.options[unitToConvertOptions.selectedIndex].text;

  // Change content (text and values) in table if form is validity
  if (programFormValidity === true) {
    for (let i = 1; i < unitToConvertTableNames.length; i++) {
      unitToConvertTableNames[i].innerText = unitToConvertText;
    }
    for (let i = 0; i < unitToConvertTableValues.length; i++) {
      unitToConvertTableValues[i].innerText = unitCoverterFunction(
        i,
        unitToConvertValueName,
        unitToConvertValue
      );
    }
    if (tableOfUnits.style.opacity == 0) {
      tableOfUnits.style.transition = "0.8s";
      tableOfUnits.style.marginTop = "20px";
      tableOfUnits.style.height = "auto";
      tableOfUnits.style.opacity = 1;
    }
  }
});

// Reset button - hide table
const defaultUnitToConvertLabel =
  document.getElementsByClassName("unit-to-convert")[0].textContent;
const unitConverBtnReset = document.getElementById("program-form-btn-reset");
unitConverBtnReset.addEventListener("click", () => {
  const unitToConvertLabel =
    document.getElementsByClassName("unit-to-convert")[0];
  const tableOfUnits = document.getElementById("program-table");
  unitToConvertLabel.innerText = defaultUnitToConvertLabel;
  tableOfUnits.style.transition = "0s";
  tableOfUnits.style.marginTop = "0px";
  tableOfUnits.style.height = "0";
  tableOfUnits.style.opacity = 0;
});
