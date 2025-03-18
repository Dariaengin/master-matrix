const initPomodoro = document.getElementById("init-container");
const initClock = document.getElementById("init-new-clock-btn");
const secondInput = document.getElementById("second-input");
const secondDisplay = document.getElementById("second");
const pomodoroClock = document.getElementById("pomodoro-container");
const startButton = document.getElementById("start");
const pauseButton = document.getElementById("pause");
const stopButton = document.getElementById("stop");
let clock;


initClock.addEventListener("click", initPomodoroClock);
startButton.addEventListener("click", start);
pauseButton.addEventListener("click", pause);
stopButton.addEventListener("click", stop);

function initPomodoroClock() {

    clock = setInterval(() => {
        console.log("click");
    }, 1000);
}
function start() {
    startButton.setAttribute("disabled");
    seconds
        = Number(secondDisplay.innerText);
    clock = setInterval() => {
        seconds--;
        secondDisplay.innerText = seconds;
        if (seconds === 0) {
            clearInterval(clock);
        }
    }
}


function pause() {

}
function stop() {

}