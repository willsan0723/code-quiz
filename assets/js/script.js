var timerEl = document.getElementById('timer');
var mainEl = document.getElementById('main');
var startBtn = document.getElementById('start');

function countdown() {
    var timeLeft = 75;
    timerEl.textContent = ("Time: " + timeLeft);
    // Use the `setInterval()` method to call a function to be executed every 1000 milliseconds
    var timeInterval = setInterval(function () {
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
            a: 'Boolean',
            b: 'String',
            c: 'Alert',
            d: 'Number'
        },
        correctAnswer: 'c'
    },
    {
        q: "Common data types do not include:",
        answers: {
            a: 'Boolean',
            b: 'String',
            c: 'Alert',
            d: 'Number'
        },
        correctAnswer: 'c'
    },
    {
        q: "Common data types do not include:",
        answers: {
            a: 'Boolean',
            b: 'String',
            c: 'Alert',
            d: 'Number'
        },
        correctAnswer: 'c'
    },
    {
        q: "Common data types do not include:",
        answers: {
            a: 'Boolean',
            b: 'String',
            c: 'Alert',
            d: 'Number'
        },
        correctAnswer: 'c'
    },
    {
        q: "Common data types do not include:",
        answers: {
            a: 'Boolean',
            b: 'String',
            c: 'Alert',
            d: 'Number'
        },
        correctAnswer: 'c'
    },
    {
        q: "Common data types do not include:",
        answers: {
            a: 'Boolean',
            b: 'String',
            c: 'Alert',
            d: 'Number'
        },
        correctAnswer: 'c'
    },
    {
        q: "Common data types do not include:",
        answers: {
            a: 'Boolean',
            b: 'String',
            c: 'Alert',
            d: 'Number'
        },
        correctAnswer: 'c'
    },
];
var score = 0;
function askQuestions() {
    for (var i = 0; i < questions.length; i++) {
        var answer = confirm(questions[i].q);
        if ((answer === true && questions[i].a === 't') ||
            (answer === false && questions[i].a === 'f')
        ) {
            score++;
        }
        else (timeLeft - 15);
    }
}
function viewScore() {
    alert("Your Score is: " + score);
}
startBtn.onclick = countdown;