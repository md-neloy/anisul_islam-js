// JS BOM
// JS Timing events methods
// setTimeOut(), setInterval()

const time = document.querySelector(".time");
const clock = document.querySelector(".clock");
time.addEventListener("click", startClock);

function startClock() {
    let date = new Date();
    let hours = date.getHours();
    let minutes = date.getMinutes();
    let seconds = date.getSeconds();
    hours = formateHours(hours);
    minutes = formateTime(minutes);
    seconds = formateTime(seconds);
    let time = hours + ":" + minutes + ":" + seconds;

    clock.textContent = time;
    setInterval(startClock, 1000);
}

function formateTime(value) {
    if (value < 10) {
        value = "0" + value;
    }
    return value;
}
function formateHours(value) {
    if (value === 0) {
        value = 12;
    } else if (value > 12) {
        value = "0" + (value - 12);
    } else {
        value = "0" + value;
    }
    return value;
}
