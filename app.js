
document.getElementById("display");

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

    

}