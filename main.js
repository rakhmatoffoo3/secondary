// var startBtn = document.getElementsByTagName("button")[0];
// var stopBtn = document.getElementsByTagName("button")[1];
// var pTag = document.getElementsByTagName("p")[0];

// var value = 0;
// var interval;


// startBtn.addEventListener("click", function () {
//     clearInterval(interval);
//     interval = setInterval(function () {
//         value++;
//         pTag.textContent = value; 
//     }, 1000);
// });

// stopBtn.addEventListener("click", function () {
//     clearInterval(interval); 
//     value = 0;
//     pTag.textContent = value; 
// });


var minutesTag = document.getElementsByClassName("content")[0].children[0];
var secondsTag = document.getElementsByClassName("content")[0].children[2];
var millisecondsTag = document.getElementsByClassName("content")[0].children[4];

var startBtn = document.getElementById("Start");
var stopBtn = document.getElementById("Stop");
var resetBtn = document.getElementById("Reset");

var interval;
var minutes = 0;
var seconds = 0;
var milliseconds = 0;

function startTimer() {
    interval = setInterval(function () {
        milliseconds += 10; 
        if (milliseconds >= 1000) {
            milliseconds = 0;
            seconds++; 
        }
        if (seconds >= 60) {
            seconds = 0;
            minutes++; 
        }


        minutesTag.textContent = String(minutes).padStart(2, "0");
        secondsTag.textContent = String(seconds).padStart(2, "0");
        millisecondsTag.textContent = String(milliseconds / 10).padStart(2, "0");
    }, 10); 
}

startBtn.addEventListener("click", function () {
    clearInterval(interval); 
    startTimer();
});


stopBtn.addEventListener("click", function () {
    clearInterval(interval); 
});


resetBtn.addEventListener("click", function () {
    clearInterval(interval); 
    minutes = 0;
    seconds = 0;
    milliseconds = 0;

    
    minutesTag.textContent = "00";
    secondsTag.textContent = "00";
    millisecondsTag.textContent = "00";
});





