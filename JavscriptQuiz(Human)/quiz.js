const startButton = document.getElementById('start')
const questionContainerElement = document.getElementById('secretQuestions')
const greencheckmark = document.getElementById('green')
const redcross = document.getElementById('red')
const allright = document.getElementById('allright')
const allwrong = document.getElementById('allwrong')


startButton.addEventListener('click', startQuiz)

function startQuiz () {
  startButton.classList.add('hide');
  questionContainerElement.classList.remove('hide');
}

var quizStorage = document.getElementById('quiz');
var submitButton = document.getElementById('submit');
var resultsContainer = document.getElementById('resultat');

const myQuestions = [
    {
      question: "Vad är Iron Mans riktiga namn?",
      answers: {
        a: 'Timmy Stonk',
        b: 'Tony Stank',
        c: 'Tony Stark',
        d: 'Sherlock Holmes'
      },
      correctAnswer: 'c'
    },
    {
      question: "Hur många Infinite Stones finns det?",
      answers: {
        a: '3',
        b: '5',
        c: '6',
        d: '8'
      },
      correctAnswer: 'c'
    },
    {
      question: "På vilket öga bär Nick Fury en ögonlapp?",
      answers: {
        a: 'På sitt högra öga',
        b: 'På sitt vänstra öga',
        c: 'Nick Fury har ingen ögonlapp'
      },
      correctAnswer: 'b'
    },
    {
      question: "I vilken film gjorde Spider-Man sin första framträdande i MCU?",
      answers: {
        a: 'Iron Man 3',
        b: 'Spider-Man: Homecoming',
        c: 'The Avengers',
        d: 'Captain America: Civil War'
      },
      correctAnswer: 'd'
    },
    {
      question: "Hur länge var Scott Lang fången i Quantum Realm?",
      answers: {
        a: '6 månader',
        b: '3 år',
        c: '5 år',
        d: '9 år'
      },
      correctAnswer: 'c'
    },
    {
      question: "Bradley Cooper är rösten för vilken MCU-karaktär?",
      answers: {
        a: 'Rocket Racoon',
        b: 'Groot',
        c: 'Korg',
        d: 'Surtur'
      },
      correctAnswer: 'a'
    },
    {
      question: "Thors Mjölner är gjord av metallen från en döende ___?",
      answers: {
        a: 'Meteor',
        b: 'Stjärna',
        c: 'Planet',
        d: 'Universum'
      },
      correctAnswer: 'b'
    },
    {
      question: "Pym-partiklar skapades av vem?",
      answers: {
        a: 'Tony Pym',
        b: 'Steve Pym',
        c: 'Happy Pym',
        d: 'Hank Pym'
      },
      correctAnswer: 'd'
    },
    {
      question: "Vem är the Winter Soldier?",
      answers: {
        a: 'James "Bucky" Barnes',
        b: 'Steve Rogers',
        c: 'Kate Bishop',
        d: 'Clinton "Clint" Barton'
      },
      correctAnswer: 'a'
    },
    {
      question: "Vem räddade Tony Stark och Nebula från rymden?",
      answers: {
        a: 'Thor',
        b: 'Captain Marvel',
        c: 'Star Lord',
        d: 'Pepper Potts'
      },
      correctAnswer: 'b'
    }
  ];
  
  skapaQuiz(myQuestions, quizStorage, resultsContainer, submitButton);
  
  function skapaQuiz(questions, quizStorage, resultsContainer, submitButton){
  
    function visaQuestions(questions, quizStorage){
      var HTMLadd = [];
      var answers;

      for(var i=0; i<questions.length; i++){
        
        answers = [];
  
        for(letter in questions[i].answers){
          answers.push(
            '<label>'
              + '<input type="radio" name="question'+i+'" value="'+letter+'">'
              + '<b>' + letter + ': ' + '</b>'
              + questions[i].answers[letter] + '&nbsp;'
            + '</label>'
          );
        }
        HTMLadd.push(
          '<div class="question">' + questions[i].question + '</div>'
          + '<div class="answers">' + answers.join('') + '</div>'
        );
      }

      quizStorage.innerHTML = HTMLadd.join(''); 
    } //
  
    function visaResultat(questions, quizStorage, resultsContainer){
      
      var answerContainers = quizStorage.querySelectorAll('.answers');
      
      var userAnswer = '';
      var numCorrect = 0;
      
      for(var i=0; i<questions.length; i++){
  
        userAnswer = (answerContainers[i].querySelector('input[name=question'+i+']:checked')||{}).value;
        
        if(userAnswer===questions[i].correctAnswer){
          numCorrect++;

          answerContainers[i].style.backgroundColor = 'lightgreen';
        }
        
        else{
          answerContainers[i].style.backgroundColor = 'red';
        }
      }

        if (numCorrect==10){
            allright.classList.remove('hide');
            greencheckmark.classList.remove('hide');
        }

        if (numCorrect==0){
            allwrong.classList.remove('hide');
            redcross.classList.remove('hide');
        }

      resultsContainer.innerHTML = numCorrect + ' av ' + questions.length + ' rätt ';
    }
  
    visaQuestions(questions, quizStorage);

    submitButton.onclick = function(){
      visaResultat(questions, quizStorage, resultsContainer);
    }
  
  }