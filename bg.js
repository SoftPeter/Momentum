const body = document.querySelector("body");

const IMG_NUMBER = 6;

function paintImage(IMG_NUMBER) {
    const image = new Image();
    image.src = `Images/${IMG_NUMBER + 1}.jpg`;
    image.classList.add("bgImage");
    body.appendChild(image);
}

function genRandom() {
    const number = Math.floor(Math.random() * IMG_NUMBER);
    return number;
}

function init() {
    const randomeNumber = genRandom();
    paintImage(randomeNumber);
}

init();