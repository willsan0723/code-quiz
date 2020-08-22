var timerEl = document.getElementById('timer');
var mainEl = document.getElementById('main');
var startBtn = document.getElementById('start');

function countdown() {
    var timeLeft = 75;  
    // Use the `setInterval()` method to call a function to be executed every 1000 milliseconds
    var timeInterval = setInterval(function() {
      if (timeLeft > 1) {
        timerEl.textContent = timeLeft;
        timeLeft--;
      } else {
        timerEl.textContent = '';
        clearInterval(timeInterval);
      }
    }, 1000);
  }

var questions = [
    { q: 'The sky is blue.', a: 't'},
    { q: 'There are 365 days in a year.', a: 't'},
    { q: 'There are 42 ounces in a pound', a: 'f'},
    { q: 'The Declaration of Independence was created in 1745.', a: 'f'},
    { q: 'Bananas are vegetables.', a:'f'}
];
var score = 0;

// for (var i = 0; i < questions.length; i++) {
// if ((answer === true && questions[i].a === 't') ||
//     (answer === false && questions[i].a === 'f')
//     ){
//     score++;
//     }
//         }
startBtn.onclick = countdown;