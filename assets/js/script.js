var messageEl = document.getElementById("message");
var startBtn = document.getElementById("start");
var timerEl = document.getElementById("timer");
var inputEl = document.getElementById("highScoreInput");
var submitBtn = document.getElementById("submit");
var highScoreList = document.getElementById("highScoreList");
var hScore = document.getElementById("hScore");
var btn1 = document.getElementById("button1");
btn1.setAttribute("id", "btn1");
var btn2 = document.getElementById("button2");
btn2.setAttribute("id", "btn2");
var btn3 = document.getElementById("button3");
btn3.setAttribute("id", "btn3");
var btn4 = document.getElementById("button4");
btn4.setAttribute("id", "btn4");
var highScores = JSON.parse(localStorage.getItem("highScores"));
var newScore;
var timerCount = 60;
var timer;
var x = 0;
var points = 0;
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
var answerArray = ["alerts", "parentheses", "all of the above", "quotes", "console log"];

if (!highScores) {
    localStorage.setItem("highScores", JSON.stringify([]));
}

messageEl.textContent = "Welcome to the Quiz!";

// event listeners for game to function 
startBtn.addEventListener("click", startHandler);
btn1.addEventListener("click", checkAnswer);
btn2.addEventListener("click", checkAnswer);
btn3.addEventListener("click", checkAnswer);
btn4.addEventListener("click", checkAnswer);
submitBtn.addEventListener("click", addHighScore);

// calls other functions to start the game
function startHandler(event) {
    event.preventDefault();
    displayQuestion();
    startBtn.removeEventListener("click", startHandler);
    startTimer();
}

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
            gameOver();
        }
    }, 1000);
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

// checks users answer and adds points to score or removes time from timer based on the answer's correctness
function checkAnswer() {
    if (this.textContent === answerArray[x]) {
        points = points + 20
    } else {
        timerCount = timerCount - 5;
    }
    
    nextQuestion();
}

// checks for user to answer question, once done, the next question is displayed. if all questions are answered then the game is over
function nextQuestion() {
    if (x + 1 < questions.length) {
    x++;
    messageEl.textContent = questions[x].question;
    btn1.textContent = questions[x].a;
    btn2.textContent = questions[x].b;
    btn3.textContent = questions[x].c;
    btn4.textContent = questions[x].d;
    } else {
        clearInterval(timer);
        gameOver();
    };
};

// ends the game and prepares for the high score screen
function gameOver() {
    timerEl.textContent = "Game Over";
    btn1.setAttribute("hidden", "hidden");
    btn2.setAttribute("hidden", "hidden");
    btn3.setAttribute("hidden", "hidden");
    btn4.setAttribute("hidden", "hidden");
    messageEl.textContent = "";
    highScore();
};

// when highScore is called, need to unhide the input, the submit button, and the high score list
function highScore() {
    hScore.removeAttribute("hidden");
    inputEl.removeAttribute("hidden");
    submitBtn.removeAttribute("hidden");
    highScoreList.removeAttribute("hidden");
};

// lets user submit their score and name to local storage to be pulled later
function addHighScore() {
    JSON.parse(localStorage.getItem("highScores"));
    // console.log(inputEl.value);
    var newScore = {
        name: inputEl.value,
        score: points
    };
    highScores.push(newScore);
    localStorage.setItem("highScores", JSON.stringify(highScores));
    displayHighScore();
};

// displays high score list
function displayHighScore() {
    // take high scores from local storage and display them as a li element within the high score list
    var highScores = JSON.parse(localStorage.getItem("highScores"));
    console.log(highScores);
    // displays all scores logged in local storage
    for (var i = 0; i < highScores.length; i++) {
        console.log("entered")
        var score = document.createElement("li");
        score.textContent = highScores[i].name + ": " + highScores[i].score;
        highScoreList.appendChild(score);
    };
};
