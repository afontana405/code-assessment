var messageEl = document.getElementById("message");
var startBtn = document.getElementById("start");

var timerEl = document.getElementById("timer");

var timerCount = 60;

var timer;

// start button is pressed
startBtn.addEventListener("click", startHandler);

function startHandler(event) {
    event.preventDefault();
    startBtn.removeEventListener("click", startHandler);
    startTimer();
}
// timer starts
function startTimer() {
    timer = setInterval(function() {
        timerCount--;
        if (timerCount > 1) {
        timerEl.textContent = timerCount + "seconds remaing";
        } else if (timerCount === 1) {
            timerEl.textContent = timerCount + "second remaing";
        } else {
            clearInterval(timer);
            timerEl.textContent = "Game Over";
            startBtn.textContent = "Play Again";
            startBtn.removeEventListener("click", startTimer);
        }
    }, 1000);
}

// questions are presented 1 at a time
// if wrong answers are given, time is subtracted from the clock
// if all questions are answered or the timer reaches 0, the game is over
// high score is stored in local storage