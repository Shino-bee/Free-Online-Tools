// Select average - display selected option and hide the rest
const selectAverage = document.getElementById("select-average");
selectAverage.addEventListener("change", () => {
  const arithmeticAverageForm = document.getElementById("arithmetic-average-form");
  const geometricAverageForm = document.getElementById("geometric-average-form");
  const weightedAverageForm = document.getElementById("weighted-average-form");
  if (selectAverage[selectAverage.selectedIndex].value == "arithmetic") {
    arithmeticAverageForm.style.display = "block";
    weightedAverageForm.style.display = "none";
    geometricAverageForm.style.display = "none";
  } else if (selectAverage[selectAverage.selectedIndex].value == "weighted") {
    arithmeticAverageForm.style.display = "none";
    weightedAverageForm.style.display = "block";
    geometricAverageForm.style.display = "none";
  } else if (selectAverage[selectAverage.selectedIndex].value == "geometric") {
    arithmeticAverageForm.style.display = "none";
    weightedAverageForm.style.display = "none";
    geometricAverageForm.style.display = "block";
  }
});

/* ----- Arithmetic average calculator ----- */
let arithmeticAverageArrOfNums = [];
// Add button - calculates and shows added nums and results
const arithmeticAverageBtnAdd = document.getElementById("arithmetic-average-btn-calculate");
arithmeticAverageBtnAdd.addEventListener("click", () => {
  const arithmeticAverageForm = document.getElementById("arithmetic-average-form");
  const arithmeticAverageInput = document.getElementById("arithmetic-average-input");
  if (arithmeticAverageForm.checkValidity() && arithmeticAverageInput.value != "") {
    const arithmeticAverageAddedNums = document.getElementById("arithmetic-average-added-nums");
    if (arithmeticAverageAddedNums.style.display != "block") {
      arithmeticAverageAddedNums.style.display = "block";
      arithmeticAverageAddedNums.innerText += arithmeticAverageInput.value;
    } else {
      arithmeticAverageAddedNums.innerText += ", " + arithmeticAverageInput.value;
    }
    arithmeticAverageArrOfNums.push(parseFloat(arithmeticAverageInput.value));
    const arithmeticAverageOutput = document.getElementById("arithmetic-average-result");
    const arithmeticAverageResult = (
      arithmeticAverageArrOfNums.reduce((sum, num) => sum + num) / arithmeticAverageArrOfNums.length
    ).toFixed(2);
    arithmeticAverageOutput.value = arithmeticAverageResult;
    arithmeticAverageInput.value = "";
  }
});
// Reset button
const arithmeticAverageBtnReset = document.getElementById("arithmetic-average-btn-reset");
arithmeticAverageBtnReset.addEventListener("click", () => {
  const arithmeticAverageAddedNums = document.getElementById("arithmetic-average-added-nums");
  arithmeticAverageAddedNums.innerText = "";
  arithmeticAverageAddedNums.style.display = "none";
  arithmeticAverageArrOfNums = [];
});

/* ----- Weighted average calculator ----- */
let weightedAverageArrOfNums = [];
// Add button - calculates and shows added nums and results
const weightedAverageBtnAdd = document.getElementById("weighted-average-btn-calculate");
weightedAverageBtnAdd.addEventListener("click", () => {
  const weightedAverageForm = document.getElementById("weighted-average-form");
  const weightedAverageInput = document.getElementById("weighted-average-input");
  if (weightedAverageForm.checkValidity() && weightedAverageInput.value != "") {
    const weightedAverageAddedNums = document.getElementById("weighted-average-added-nums");
    if (weightedAverageAddedNums.style.display != "block") {
      weightedAverageAddedNums.style.display = "block";
      weightedAverageAddedNums.innerText += weightedAverageInput.value;
    } else {
      weightedAverageAddedNums.innerText += ", " + weightedAverageInput.value;
    }
    weightedAverageArrOfNums.push(parseFloat(weightedAverageInput.value));
    const weightedAverageOutput = document.getElementById("weighted-average-result");
    const weightedAverageResult = Math.pow(
      weightedAverageArrOfNums.reduce((sum, num) => sum * num),
      1 / weightedAverageArrOfNums.length
    );
    weightedAverageOutput.value = weightedAverageResult;
    weightedAverageInput.value = "";
  }
});
// Remove row button
const weightedAverageBtnRemove = document.getElementsByClassName("weighted-average-btn-remove");
for (let i = 0; i < weightedAverageBtnRemove.length; i++) {
  weightedAverageBtnRemove[i].addEventListener("click", (event) => {
    event.target.parentNode.remove();
  });
}

// Add new row button
const weightedAverageBtnAddRow = document.getElementById("weighted-average-btn-add-row");
weightedAverageBtnAddRow.addEventListener("click", () => {
  const weightedAverageFieldset = document.getElementById("weighted-average-fieldset");
  const fieldsetContainer = document.createElement("div");
  fieldsetContainer.classList.add("weighted-average-fieldset-inputs");
  const fieldsetInputValue = document.createElement("input");
  fieldsetInputValue.setAttribute("type", "number");
  fieldsetInputValue.classList.add("weighted-average-input-value");
  fieldsetInputValue.setAttribute("step", "0.0000000001");
  fieldsetInputValue.setAttribute("autocomplete", "off");
  fieldsetInputValue.setAttribute("placeholder", "Wartość");
  const fieldsetInputWeight = document.createElement("input");
  fieldsetInputWeight.setAttribute("type", "number");
  fieldsetInputWeight.classList.add("weighted-average-input-weight");
  fieldsetInputWeight.setAttribute("step", "0.0000000001");
  fieldsetInputWeight.setAttribute("autocomplete", "off");
  fieldsetInputWeight.setAttribute("placeholder", "Waga");
  const fieldsetBtnRemove = document.createElement("button");
  fieldsetBtnRemove.setAttribute("type", "button");
  fieldsetBtnRemove.classList.add("weighted-average-btn-remove");
  fieldsetBtnRemove.innerHTML = "&#10006;";

  fieldsetContainer.appendChild(fieldsetInputValue);
  fieldsetContainer.appendChild(fieldsetInputWeight);
  fieldsetContainer.appendChild(fieldsetBtnRemove);
  weightedAverageFieldset.appendChild(fieldsetContainer);
});

/* ----- Geometric average calculator ----- */
let geometricAverageArrOfNums = [];
// Add button - calculates and shows added nums and results
const geometricAverageBtnAdd = document.getElementById("geometric-average-btn-calculate");
geometricAverageBtnAdd.addEventListener("click", () => {
  const geometricAverageForm = document.getElementById("geometric-average-form");
  const geometricAverageInput = document.getElementById("geometric-average-input");
  if (geometricAverageForm.checkValidity() && geometricAverageInput.value != "") {
    const geometricAverageAddedNums = document.getElementById("geometric-average-added-nums");

    if (geometricAverageAddedNums.style.display != "block") {
      geometricAverageAddedNums.style.display = "block";
      geometricAverageAddedNums.innerText += geometricAverageInput.value;
    } else {
      geometricAverageAddedNums.innerText += ", " + geometricAverageInput.value;
    }
    geometricAverageArrOfNums.push(parseFloat(geometricAverageInput.value));
    const geometricAverageOutput = document.getElementById("geometric-average-result");
    const geometricAverageResult = Math.pow(
      geometricAverageArrOfNums.reduce((sum, num) => sum * num),
      1 / geometricAverageArrOfNums.length
    );
    geometricAverageOutput.value = geometricAverageResult;
    geometricAverageInput.value = "";
  }
});
// Reset button
const geometricAverageBtnReset = document.getElementById("geometric-average-btn-reset");
geometricAverageBtnReset.addEventListener("click", () => {
  const geometricAverageAddedNums = document.getElementById("geometric-average-added-nums");
  geometricAverageAddedNums.innerText = "";
  geometricAverageAddedNums.style.display = "none";
  geometricAverageArrOfNums = [];
});
