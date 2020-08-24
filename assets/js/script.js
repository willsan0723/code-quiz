// Global variable declarations
var scoreIdCounter = 0;
var timerEl = document.getElementById('timer');
var mainEl = document.getElementById('main');
var startBtn = document.getElementById('start');
var timeInterval;
var displayQuestion = document.getElementById('q-container');
var displayAnswers = document.getElementById('answersList');
var rightWrong = document.getElementById('answer-boolean');
var score;
var sectionEl = document.getElementById('sectionEl');
var initials = [];
var timeLeft = 75;
var localStorageData;
var highScores = [];
var savedScore;
var count = 0;

function countdown() {
    askQuestions(questions, displayQuestion);
    timerEl.textContent = ("Time: " + timeLeft);
    clearInterval(timeInterval);
    timeInterval = setInterval(function () {
        if (timeLeft > 0) {
            timerEl.textContent = ("Time: " + --timeLeft);
            score = timeLeft;
            return score;
        }
        else {
            timerEl.textContent = '';
            score = 0;
            gameOver();
        }
    }, 1000);
}

var questions = [
    {
        q: "Common data types do not include:",
        answers: [
            '1. Booleans',
            '2. Strings',
            '3. Alerts',
            '4. Numbers'
        ],
        correctAnswer: '2'
    },
    {
        q: "Which is not a looping structure in JavaScript?",
        answers: [
            '1. For',
            '2. While',
            '3. do-while',
            '4. If'
        ],
        correctAnswer: '3'
    },
    {
        q: "Which is not a type of Pop up box available in JavaScript?",
        answers: [
            '1. Alert',
            '2. Display',
            '3. Prompt',
            '4. Confirm'
        ],
        correctAnswer: '1'
    },
    {
        q: "What is the disadvantage of using innerHTML in JavaScript?",
        answers: [
            '1. Content is replaced everywhere',
            '2. The entire innerHTML content is re-parsed and build into elements, therefore its much slower',
            '3. The innerHTML does not provide validation and therefore we can potentially insert valid and broken HTML in the document and break it',
            '4. All of the above'
        ],
        correctAnswer: '3'
    },
    {
        q: "The condition in an if/else statement is enclosed with ______.",
        answers: [
            '1. quotes',
            '2. curly brackets',
            '3. parenthesis',
            '4. square brackets'
        ],
        correctAnswer: '2'
    },
    {
        q: "Arrays in JavaScript can be used to store _______.",
        answers: [
            '1. numbers and strings',
            '2. other arrays',
            '3. booleans',
            '4. all of the above'
        ],
        correctAnswer: '3'
    },
    {
        q: "String values must be enclosed within _____ when being assigned to variables.",
        answers: [
            '1. commas',
            '2. curly brackets',
            '3. quotes',
            '4. parenthesis'
        ],
        correctAnswer: '2'
    }
];

function askQuestions() {
    var output = [];
    var answers;
    displayQuestion.textContent = questions[count].q;
    for (i = 0; i < questions[count].answers.length; i++) {
        answers = [];
        answers.push
            (
                //assign function to button that increments count on click
                "<button id=" + i + " onclick='checkAnswer()'>" + questions[count].answers[i] + "</button>"
            );
        output.push(
            "<div>" + answers.join('') + "</div>"
        );
        displayAnswers.innerHTML = output.join('');
    }
}

function checkAnswer() {
    if (event.target.id == questions[count].correctAnswer) {
        rightWrong.textContent = "Correct.";
        rightWrong.style.borderTop = "2px solid gray";
        rightWrong.style.marginTop = "8px";
    }
    else {
        rightWrong.textContent = "Wrong!";
        rightWrong.style.borderTop = "2px solid gray";
        rightWrong.style.marginTop = "8px";
        timeLeft -= 10;
    }
    ++count;
    if (count < questions.length) {
        // check answer

        //display right or wrong    

        askQuestions();

    }
    else {
        gameOver();
    }
}

function gameOver() {
    clearInterval(timeInterval);
    sectionEl.textContent = "All done!";
    displayQuestion.innerHTML = "Your final score is: " + score +
        "</br>Please enter initials: <form><input type='text' name='initials' id='initialEl' onSubmit ='return false'/><input type='button' value='Submit' id='btnSubmit' onSubmit ='return false' onclick='sendScore()'></form>";
    displayAnswers.textContent = "";
    rightWrong.innerHTML = "";
}

function sendScore() {
    var scoreInitials = document.getElementById('initialEl').value.trim();
    var scoreDataObj = {
        initials: scoreInitials,
        quizScore: score
    }
    scoreDataObj.id = scoreIdCounter;
    highScores.push(scoreDataObj);
    localStorage.setItem("highScores", JSON.stringify(highScores));
    scoreIdCounter++;
    highScore(scoreDataObj);
}
var loadScore = function () {
    // get highScore from localStorage
    var savedScore = localStorage.getItem("highScores");
    if (!savedScore) {
        return false;
    }
    // convert tasks from stringified format back into an array of objects
    savedScore = JSON.parse(savedScore);
    // loop through savedScore array    
    for (var i = 0; i < savedScore.length; i++) {
        // pass each score object back into the saved scores
        highScores.push(savedScore[i]);
        scoreIdCounter++;
    }
}

function highScore() {
    sectionEl.textContent = "High Scores";
    displayQuestion.className = "score-item";
    displayQuestion.innerHTML = "<ul>";
    for (var i = 0; i < highScores.length; i++) {
        displayQuestion.innerHTML += "<ol>" + (i + 1) + ". " + highScores[i].initials + " - " + highScores[i].quizScore + "</ol>";
    }
    displayQuestion.innerHTML += "</ul>";
    // button to go back (returning to original page code)
    displayQuestion.innerHTML += "<button onclick='location.reload()'>Go Back</button>";
    // button to clear high scores (clearing local storage)
    displayQuestion.innerHTML += "<button onclick='localStorage.clear()'>Clear High Scores</button>";
}

loadScore();
startBtn.addEventListener("click", function () {countdown();});
