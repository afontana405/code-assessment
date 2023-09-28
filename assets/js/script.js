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
var x = 0;
var questions = [
    {
        question: "commonly used data types DO NOT include:",
        a: "strings",
        b: "booleans",
        c: "alerts",
        d: "numbers"
    },
    {
        question: "the condition in an if / else statement is enclosed within ____.",
        a: "quotes",
        b: "curly brackets",
        c: "parentheses",
        d: "square brackets"
    },
    {
        question: "Arrays in JavaScript can be used to store ____.",
        a: "numbers and strings",
        b: "other arrays",
        c: "booleans",
        d: "all of the above"
    },
    {
        question: "string values must be enclosed within _____ when being assigned to variables.",
        a: "quotes",
        b: "curly brackets",
        c: "parentheses",
        d: "square brackets"
    },
    {
        question: "A very useful tool used during development and debugging for printing content to the debugger is:",
        a: "JavaScript",
        b: "terminal / bash",
        c: "for loops",
        d: "console log"
    },
];

messageEl.textContent = "Welcome to the Quiz!";
// console.log(questions[4].d);

// for (var i = 0; i < questions.length; i++) {
//     console.log(questions[i].question);
// }

// start button is pressed
startBtn.addEventListener("click", startHandler);
btn1.addEventListener("click", nextQuestion);
btn2.addEventListener("click", nextQuestion);
btn3.addEventListener("click", nextQuestion);
btn4.addEventListener("click", nextQuestion);

function startHandler(event) {
    event.preventDefault();
    displayQuestion();
    startBtn.removeEventListener("click", startHandler);
    startTimer();
}

// removes hidden elements from button elements, adds hidden to start button, and displays questions and answers
function displayQuestion() {
    btn1.removeAttribute("hidden");
    btn2.removeAttribute("hidden");
    btn3.removeAttribute("hidden");
    btn4.removeAttribute("hidden");
    startBtn.setAttribute("hidden", "hidden");
    messageEl.textContent = questions[0].question;
    btn1.textContent = questions[x].a;
    btn2.textContent = questions[x].b;
    btn3.textContent = questions[x].c;
    btn4.textContent = questions[x].d;
};

function nextQuestion() {
    x++;
    messageEl.textContent = questions[x].question;
    btn1.textContent = questions[x].a;
    btn2.textContent = questions[x].b;
    btn3.textContent = questions[x].c;
    btn4.textContent = questions[x].d;
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