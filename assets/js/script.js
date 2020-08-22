var timerEl = document.getElementById('timer');
var mainEl = document.getElementById('main');
var startBtn = document.getElementById('start');
var timeInterval;
var displayQuestion = document.getElementById('q-container');
var displayAnswers = document.getElementById('answersList');
var rightWrong = document.getElementById('answer-boolean');
var score;
var sectionEl = document.getElementById('sectionEl');

function countdown() {
    var timeLeft = 75;
    askQuestions(questions, displayQuestion);
    timerEl.textContent = ("Time: " + timeLeft);
    // Use the `setInterval()` method to call a function to be executed every 1000 milliseconds
    clearInterval(timeInterval);
    timeInterval = setInterval(function () {
        if (timeLeft > 1) {
            timerEl.textContent = ("Time: " + --timeLeft);
            score =timeLeft;
            return score;
        }
        else {
            timerEl.textContent = '';
            clearInterval(timeInterval);            
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
        correctAnswer: '3. Alerts'
    },
    {
        q: "Which is not a looping structure in JavaScript?",
        answers: [
            '1. For',
            '2. While',
            '3. do-while',
            '4. If'
        ],
        correctAnswer: '4. If'
    },
    {
        q: "Which is not a type of Pop up box available in JavaScript?",
        answers: [
            '1. Alert',
            '2. Display',
            '3. Prompt',
            '4. Confirm'
        ],
        correctAnswer: '2. Display'
    },
    {
        q: "What is the disadvantage of using innerHTML in JavaScript?",
        answers: [
            '1. Content is replaced everywhere',
            '2. The entire innerHTML content is re-parsed and build into elements, therefore its much slower',
            '3. The innerHTML does not provide validation and therefore we can potentially insert valid and broken HTML in the document and break it',
            '4. All of the above'
        ],
        correctAnswer: '4. All of the above'
    },
    {
        q: "The condition in an if/else statement is enclosed with ______.",
        answers: [
            '1. quotes',
            '2. curly brackets',
            '3. parenthesis',
            '4. square brackets'
        ],
        correctAnswer: '3. parenthesis'
    },
    {
        q: "Arrays in JavaScript can be used to store _______.",
        answers: [
            '1. numbers and strings',
            '2. other arrays',
            '3. booleans',
            '4. all of the above'
        ],
        correctAnswer: '4. all of the above'
    },
    {
        q: "String values must be enclosed within _____ when being assigned to variables.",
        answers: [
            '1. commas',
            '2. curly brackets',
            '3. quotes',
            '4. parenthesis'
        ],
        correctAnswer: '3. quotes'
    }
];

var count = 0;
function askQuestions() {
    var output = [];
    var answers;
    displayQuestion.textContent = questions[count].q;
    for (i = 0; i < questions[count].answers.length; i++) {
        answers = [];
        answers.push
        (
            "<button onclick='checkAnswer()'>"  + questions[count].answers[i] + "</button>"
        );
        output.push(
        "<div>" + answers.join('') + "</div>"
        );
        //make buttons
        displayAnswers.innerHTML = output.join('');
        
        //assign function to button that increments count on click
        //that function will check if you're end of questions array as well as check for correct answer            
    }
    
    

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
    // localStorage.setItem("score", JSON.stringify(score));
    // localStorage.setItem("initials", JSON.stringify(initials));

    // display High scores
    // highScore();    
}
function checkAnswer(){
    ++count;
    if (count<questions.length){   
    // check answer
    //display right or wrong    
    askQuestions();
    }
    else {
    console.log(score);
    localStorage.setItem("score", JSON.stringify(score));
    clearInterval(timeInterval);    
    sectionEl.textContent = "All done!";
    displayQuestion.innerHTML = "Your final score is: " + score + "</br>Please enter initials: ";
    displayAnswers.textContent = "";
    }
}
// </p></br><p>Your score is: " + timeLeft +"</p>

function highScore() {
    //display in quiz section instead
    var savedScore = localStorage.getItem("score");
    if (!savedScore) {
        return false;
    };
    savedScore = JSON.parse(savedScore);
    for (var i = 0; i < savedScore.length; i++) {
        //display highscore
    }
    // button to go back (returning to original page code)
    // button to clear high scores (clearing local storage)
}
function rightWrong() {

}

startBtn.addEventListener("click", function() {
countdown();
}
);
