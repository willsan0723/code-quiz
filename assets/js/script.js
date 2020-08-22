var timerEl = document.getElementById('timer');
var mainEl = document.getElementById('main');
var startBtn = document.getElementById('start');
var timeInterval;

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
            a: 'Boolean',
            b: 'String',
            c: 'Alert',
            d: 'Number'
        },
        correctAnswer: 'c'
    },
    {
        q: "Which is not a looping structure in JavaScript?",
        answers: {
            a: 'For',
            b: 'While',
            c: 'do-while',
            d: 'If'
        },
        correctAnswer: 'd'
    },
    {
        q: "Which is not a type of Pop up box available in JavaScript?",
        answers: {
            a: 'Alert',
            b: 'Display',
            c: 'Prompt',
            d: 'Confirm'
        },
        correctAnswer: 'b'
    },
    {
        q: "What is the disadvantage of using innerHTML in JavaScript?",
        answers: {
            a: 'Content is replaced everywhere',
            b: 'The entire innerHTML content is re-parsed and build into elements, therefore its much slower',
            c: 'The innerHTML does not provide validation and therefore we can potentially insert valid and broken HTML in the document and break it',
            d: 'All of the above'
        },
        correctAnswer: 'd'
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
}
function viewScore() {
    //display in quiz section instead
    alert("Your Score is: " + score);
}

startBtn.addEventListener("click", countdown);