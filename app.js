
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

    if(isRanning){

        clearInterval(timer);
        elapsedTime = Date.now() - startTime;
        isRanning = false;

    }


}


function reset() {

    clearInterval(timer);
    let startTime = 0;
    elapsedTime = 0;
    isRanning = false;
    display.textContent = "00:00:00:00"

}


function upload() {

    const curentTime = Date.now();
    elapsedTime = curentTime - startTime;

    let hours = Math.floor(elapsedTime / (1000 * 60 * 60));
    let miniutes = Math.floor(elapsedTime / (1000 * 60) % 60);
    let seconds = Math.floor(elapsedTime / 1000 % 60);
    let miliseconds = Math.floor(elapsedTime % 1000 / 10);

    hours = String(hours).padStart(2, "0");
    miniutes = String(miniutes).padStart(2, "0");
    seconds = String(seconds).padStart(2, "0");
    miliseconds = String(miliseconds).padStart(2, "0");

    display.textContent = `${hours}: ${miniutes}: ${seconds}: ${miliseconds}`;

}