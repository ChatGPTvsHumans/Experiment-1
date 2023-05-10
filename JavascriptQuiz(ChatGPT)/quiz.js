var questions = [  {    question: "What is the capital of France?",    choices: ["Paris", "Madrid", "London", "Rome"],
    answer: "Paris",
    userAnswer: null
  },
  {
    question: "What is the largest country in the world?",
    choices: ["Russia", "China", "USA", "Canada"],
    answer: "Russia",
    userAnswer: null
  },
  {
    question: "What is the currency of Japan?",
    choices: ["Yuan", "Yen", "Euro", "Dollar"],
    answer: "Yen",
    userAnswer: null
  }
];

var currentQuestion = 0;
var score = 0;
var correctAnswers = [];
var incorrectAnswers = [];

var questionElem = document.getElementById("question");
var choicesElem = document.getElementById("choices");
var submitBtn = document.getElementById("submit-btn");
var resultElem = document.getElementById("result");

function loadQuestion() {
  var q = questions[currentQuestion];
  questionElem.textContent = (currentQuestion + 1) + ". " + q.question;
  choicesElem.innerHTML = "";
  for (var i = 0; i < q.choices.length; i++) {
    var choice = q.choices[i];
    var button = document.createElement("button");
    button.textContent = choice;
    button.setAttribute("value", choice);
    button.onclick = submitAnswer;
    choicesElem.appendChild(button);
  }
}

function submitAnswer() {
  var selectedChoice = this.value;
  var q = questions[currentQuestion];
  q.userAnswer = selectedChoice;
  if (selectedChoice == q.answer) {
    score++;
    correctAnswers.push(q.question);
  } else {
    incorrectAnswers.push({
      question: q.question,
      userAnswer: selectedChoice,
      correctAnswer: q.answer
    });
  }
  currentQuestion++;
  if (currentQuestion == questions.length) {
    showResult();
  } else {
    loadQuestion();
  }
}

function showResult() {
  questionElem.style.display = "none";
  choicesElem.style.display = "none";
  submitBtn.style.display = "none";

  var resultDetails = document.createElement("ul");
  resultElem.appendChild(resultDetails);
  for (var i = 0; i < questions.length; i++) {
    var q = questions[i];
    var li = document.createElement("li");
    li.textContent = q.question + " - ";
    if (q.userAnswer == null) {
      li.textContent += "Not answered";
    } else if (q.userAnswer == q.answer) {
      li.textContent += "Correct";
      li.style.color = "green";
    } else {
      li.textContent += "Incorrect (Your answer: " + q.userAnswer + ")";
      li.style.color = "red";
    }
    resultDetails.appendChild(li);
  }

  var resultMessage = document.createElement("p");
  resultElem.appendChild(resultMessage);
  if (score == 0) {
    resultMessage.textContent = "All Questions Wrong! 😔";
  } else if (score == questions.length) {
    resultMessage.textContent = "All Questions Correct! 🥳";
  } else {
    resultMessage.textContent = "You got " + score + " out of " + questions.length + " questions correct!";
  }
  }
  
  loadQuestion();
