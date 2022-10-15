var readlineSync = require("readline-sync");
var score = 0;

var questions = [{
  question: "What is Your Date of Brith? ",
  answer: "28.08.1991"
},
{
  question: "What is your Student Age ?  ",
  answer: "peacock"
},
{
  question: "What is your Phone no?  ",
  answer: "8008621245"
},
{
  question: "What is your Gender ?  ",
  answer: "Male"

},
{
  question: "What is your Roll No?  ",
  answer: "10"
},

];

function welcome() {
  var userName = readlineSync.question("Please Enter the Student name? ");

  console.log("Welcome " + userName + " Please Enter the student information ");
}

function student(question, answer) {
  var userAnswer = readlineSync.question(question);
  if (userAnswer.toUpperCase() === answer.toUpperCase()) { // branching
    score = score + 1;
     
  }
  else {
   console.log("You have entered wrong details");
  }
  console.log("Your score is: ", score);
}
function game() {
  for (var i = 0; i < questions.length; i++) {
    var currentQuestion = questions[i];
    student(currentQuestion.question, currentQuestion.answer)
  }
}
welcome();
game();