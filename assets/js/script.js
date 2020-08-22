var timerEl = document.getElementById('timer');
var mainEl = document.getElementById('main');
var startBtn = document.getElementById('start');
var timeInterval;
var displayQuestion = ('q-container');
var displayAnswers = ('answersList');
var rightWrong = ('answer-boolean');

function countdown() {
    var timeLeft = 75;
    askQuestions();
    timerEl.textContent = ("Time: " + timeLeft);
    // Use the `setInterval()` method to call a function to be executed every 1000 milliseconds
    clearInterval(timeInterval);
    timeInterval = setInterval(function () {
        if (timeLeft > 1) {
            timerEl.textContent = ("Time: " + --timeLeft);
        }
        else {
            timerEl.textContent = '';
            clearInterval(timeInterval);
            localStorage.setItem("score", timeLeft);
        }
    }, 1000);
}


var questions = [
    {
        q: "Common data types do not include:",
        answers: {
            a: '1. Booleans',
            b: '2. Strings',
            c: '3. Alerts',
            d: '4. Numbers'
        },
        correctAnswer: 'c'
    },
    {
        q: "Which is not a looping structure in JavaScript?",
        answers: {
            a: '1. For',
            b: '2. While',
            c: '3. do-while',
            d: '4. If'
        },
        correctAnswer: 'd'
    },
    {
        q: "Which is not a type of Pop up box available in JavaScript?",
        answers: {
            a: '1. Alert',
            b: '2. Display',
            c: '3. Prompt',
            d: '4. Confirm'
        },
        correctAnswer: 'b'
    },
    {
        q: "What is the disadvantage of using innerHTML in JavaScript?",
        answers: {
            a: '1. Content is replaced everywhere',
            b: '2. The entire innerHTML content is re-parsed and build into elements, therefore its much slower',
            c: '3. The innerHTML does not provide validation and therefore we can potentially insert valid and broken HTML in the document and break it',
            d: '4. All of the above'
        },
        correctAnswer: 'd'
    },
    {
        q: "The condition in an if/else statement is enclosed with ______.",
        answers: {
            a: '1. quotes',
            b: '2. curly brackets',
            c: '3. parenthesis',
            d: '4. square brackets'
        },
        correctAnswer: 'c'
    },
    {
        q: "Arrays in JavaScript can be used to store _______.",
        answers: {
            a: '1. numbers and strings',
            b: '2. other arrays',
            c: '3. booleans',
            d: '4. all of the above'
        },
        correctAnswer: 'd'
    },
    {
        q: "String values must be enclosed within _____ when being assigned to variables.",
        answers: {
            a: '1. commas',
            b: '2. curly brackets',
            c: '3. quotes',
            d: '4. parenthesis'
        },
        correctAnswer: 'c'
    },
];

var score = 0;
function askQuestions() {
    console.log ("I called quiz");
    // for (var i = 0; i < questions.length; i++) {
    //     var answer = prompt(questions[i].q);
    //     if ((answers === correctAnswer)
    //     ) {
    //         alert("correct")
    //         score++;
    //     }
    //     else{
    //         timeLeft -= 10;
    //     } 
    // }
    
    // display All done!
    // final score
    // enter initials: text field and submit button
    // store score in localStorage
    // display High scores
    highScore();
    // button to go back (returning to original page code)
    // button to clear high scores (clearing local storage)
}

function highScore() {
    //display in quiz section instead
    alert("Your Score is: " + score);
}

startBtn.addEventListener("click", countdown);