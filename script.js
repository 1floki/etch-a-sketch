// Each time the value of grid changes, it will take the new value and push it in the changeValue()
document.getElementById("grid").addEventListener("change", changeValue);

// Each time the change will occur, changeValue will update the value of rangeSelected in realtime
let rangeSelected;

// To display the range text on the interface of the application
const rangeText = document.getElementById("range-text");
let penColor = "black";

// To set the default value of the range on page laod
window.onload = changeValue();

//buttons and event listeners to change the pen color and clear start here
let blackButton = document.getElementById("black-button");
blackButton.addEventListener("click", () => (penColor = "black"));

let clearButton = document.getElementById("clear-button");
clearButton.addEventListener("click", clearEverything);

function clearEverything() {
  //function for clearing everything triggered with clearButton event listener
  let listToClear = document.querySelectorAll(".box");
  for (i = 0; i < listToClear.length; i++) {
    listToClear[i].setAttribute("style", "background-color: none;");
  }
}

let rgbButton = document.getElementById("color-picker");
rgbButton.addEventListener("change", () => (penColor = rgbButton.value));
//buttons and event listeners to change the pen color and clear end here

function changeValue() {
  //main function triggers everything when value of the toggle is changed
  rangeSelected = document.getElementById("grid").value;
  rangeText.innerText = "Range: " + rangeSelected + " x " + rangeSelected;
  removeElements();
  changeGridVals();
  createDivs();
  changeBg();
}

function removeElements() {
  let element = document.getElementById("drawing-area");
  while (element.firstChild) {
    element.removeChild(element.firstChild);
  }
}

function changeGridVals() {
  let draw = document.getElementById("drawing-area");
  draw.style["grid-template-columns"] = "repeat(" + rangeSelected + ", 1fr)";
  draw.style["grid-template-rows"] = "repeat(" + rangeSelected + ", 1fr)";
}

function createDivs() {
  for (let i = 0; i < rangeSelected ** 2; i++) {
    let draw = document.getElementById("drawing-area");
    let box = document.createElement("div");
    box.className = "box";
    draw.appendChild(box);
  }
}

function changeBg() {
  document.querySelectorAll(".box").forEach((item) => {
    item.addEventListener("mouseenter", (event) => {
      item.style["background-color"] = penColor;
    });
  });
}
