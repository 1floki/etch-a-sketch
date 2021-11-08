
let rangeSelected;
document.getElementById("grid").addEventListener("change", changeValue);

const rangeText = document.getElementById("range-text");


function changeValue() {
    rangeSelected = document.getElementById('grid').value;
    rangeText.innerText = "Range: " + rangeSelected + " x " + rangeSelected;
}

