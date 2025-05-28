
const display = document.getElementById("display");

let timer = null;
let startTime = 0;
let elapsedTime = 0;
let isRanning = false;

function start() {

    if(!isRanning) {

        startTime = Date.now() - elapsedTime;
        timer = setInterval(upload, 10);
        isRanning = true;

    }

}


function stop() {



}


function reset() {



}


function upload() {

    const curentTime = Date.now();
    elapsedTime = curentTime - startTime;

    let hours = Math.floor(elapsedTime / (1000 * 60 * 60));
    let miniutes = Math.floor(elapsedTime / (1000 * 60) % 60);
    let seconds = Math.floor(elapsedTime / 1000 % 60);
    let miliseconds = Math.floor(elapsedTime % 1000 / 10);

    display.textContent = `${hours}: ${miniutes}: ${seconds}: ${miliseconds}`;

}