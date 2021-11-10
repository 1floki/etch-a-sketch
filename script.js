// Each time the value of grid changes, it will take the new value and push it in the changeValue()
document.getElementById("grid").addEventListener("change", changeValue);

// Each time the change will occur, changeValue will update the value of rangeSelected in realtime
let rangeSelected;

// To display the range text on the interface of the application
const rangeText = document.getElementById("range-text");

// To set the default value of the range on page laod
window.onload = changeValue();


function changeValue() {
  rangeSelected = document.getElementById("grid").value;
  rangeText.innerText = "Range: " + rangeSelected + " x " + rangeSelected;
  removeElements();
  changeGridVals();
  createDivs();
}

function removeElements() {
  let element = document.getElementById("drawing-area");
  while (element.firstChild) {
    element.removeChild(element.firstChild);
  }
}

function changeGridVals () {
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

let box = document.getElementsByClassName("box");

