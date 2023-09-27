var messageEl = document.getElementById("message");
var startBtn = document.getElementById("start");
var timerEl = document.getElementById("timer");
var btn1 = document.getElementById("button1");
btn1.setAttribute("id", "btn1");
var btn2 = document.getElementById("button2");
btn2.setAttribute("id", "btn2");
var btn3 = document.getElementById("button3");
btn3.setAttribute("id", "btn3");
var btn4 = document.getElementById("button4");
btn4.setAttribute("id", "btn4");
var timerCount = 10;
var timer;
var questions = [
    {
        question: "commonly used data types DO NOT include:",
        1: "strings",
        2: "booleans",
        3: "alerts",
        4: "numbers"
    },
    {
        question: "the condition in an if / else statement is enclosed within ____.",
        1: "quotes",
        2: "curly brackets",
        3: "parentheses",
        4: "square brackets"
    },
    {
        question: "Arrays in JavaScript can be used to store ____.",
        1: "numbers and strings",
        2: "other arrays",
        3: "booleans",
        4: "all of the above"
    },
    {
        question: "string values must be enclosed within _____ when being assigned to variables.",
        1: "quotes",
        2: "curly brackets",
        3: "parentheses",
        4: "square brackets"
    },
    {
        question: "A very useful tool used during development and debugging for printing content to the debugger is:",
        1: "JavaScript",
        2: "terminal / bash",
        3: "for loops",
        4: "console log"
    },
];

// start button is pressed
startBtn.addEventListener("click", startHandler);

function startHandler(event) {
    event.preventDefault();
    displayQuestion();
    startBtn.removeEventListener("click", startHandler);
    startTimer();
}

function displayQuestion() {
    btn1.removeAttribute("hidden");
    btn2.removeAttribute("hidden");
    btn3.removeAttribute("hidden");
    btn4.removeAttribute("hidden");
    startBtn.setAttribute("hidden", "hidden");
};
// timer starts
function startTimer() {
    timer = setInterval(function() {
        timerCount--;
        if (timerCount > 1) {
        timerEl.textContent = timerCount + " seconds remaing";
        } else if (timerCount === 1) {
            timerEl.textContent = timerCount + " second remaing";
        } else {
            clearInterval(timer);
            timerEl.textContent = "Game Over";
            startBtn.textContent = "Play Again";
        }
    }, 1000);
}

// questions are presented 1 at a time
// if wrong answers are given, time is subtracted from the clock
// if all questions are answered or the timer reaches 0, the game is over
// high score is stored in local storage