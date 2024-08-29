let imageElement = document.getElementById("image");
let warning = document.getElementById("warningMessage");
let incrementButtonEl = document.getElementById("incrementButton");
let decrementButtonEl = document.getElementById("decrementButton");
let imageWidthEl = document.getElementById("imageWidth");
let defaultWidth = 150;
imageWidthEl.textContent = defaultWidth + "px";

imageElement.style.width = defaultWidth + "px";


function incrementButton() {
    let previous_width = defaultWidth;
    if (previous_width >= 300) {

        warning.textContent = "TOO Large, decrease the size of an image";
        warning.style.color = "red";
    } else {

        defaultWidth = previous_width + 5;
        warning.textContent = "";
        imageWidthEl.textContent = defaultWidth + "px";
        imageElement.style.width = defaultWidth + "px";
    }


}

function decrementButton() {
    let previous_width = defaultWidth;
    if (previous_width <= 100) {

        warning.textContent = "TOO small, Increase the size of an image";
        warning.style.color = "red";
    } else {

        defaultWidth = previous_width - 5;
        warning.textContent = "";
        console.log(imageElement);
        imageWidthEl.textContent = defaultWidth + "px";
        imageElement.style.width = defaultWidth + "px";
    }
}