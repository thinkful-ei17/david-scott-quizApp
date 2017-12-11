// views: start, questions, feedback, lastQuestionFeedback, results

'use strict';

const QUESTIONS = [
  {question: 'What is 2+2?',
    answers: [1, 2, 3, 4],
    correctAnswer: 3},
  {question: 'What is 3-2?',
    answers: [-10, 2, 1, 32],
    correctAnswer: 2},
  {question: 'What is 1x1?',
    answers: [1, 0, 100, 11],
    correctAnswer: 0},
  {question: 'What is 25/5?',
    answers: [125, 2, 5, 50],
    correctAnswer: 2},
  {question: 'What is 6^2?',
    answers: [36, 12, 6, 90],
    correctAnswer: 0}
];

const store = {
  view: 'start',
  currentQuestion: null,
  currentScore: null,
  button: 'start',
  showFeedback: false,
};

// initial question STORE {
//     view: questions,
//     title: null,
//     currentQuestion: question[i],
//     currentScore: fn() {
//         correct / total;
//     },
//     button: submit,
//     showFeedback: false
// }

// feedback STORE {
//     view: feedback,
//     title: null,
//     currentQuestion: question[i],
//     currentScore: fn() {
//         correct / total;
//     },
//     button: next question,
//     showFeedback: true,
// }

// lastQuestion feedback STORE {
//     view: lastQuestionFeedback,
//     title: null,
//     currentQuestion: question[i],
//     currentScore: fn()
//     button: results,
//     showFeedback: true,
// }

// results STORE {
//     view: results,
//     title: results (congrats..),
//     currentQuestion: null,
//     currentScore: fn()
//     button: start again?,
//     showFeedback: false,
// }

function renderStart() {
  // render title and button
  return `
    <header class="title">
        <h1>Welcome to our Quiz Page</h1>
    </header>
    <button class='start-button'>Start Quiz</button>`;
}

function handleStartButtonClick(){
  $('form').submit(function(event){
    event.preventDefault();
    console.log('this should start things');
    store.view = 'questions';
    store.currentQuestion = 0;
    renderPage();
  }
  );
}

function renderQuestion() {
  // question text
  // answers as radio buttons
  return generateQuestion(store.currentQuestion);
  // generateButton('submit', 'submit');
}

function renderFeedback() {
  generateQuestion(store.currentQuestion);
  generateFeedback(store.currentQuestion);
  generateButton('next-Question', 'Next Question');
}

function renderlastQuestionFeedback() {}

function renderResults() {}

function generateButton(buttonClass, text) {
  return `<button class="${buttonClass}">${text}</button>`;
}

function generateQuestion(i=0) {
  return `<div class="answer-choice">${QUESTIONS[0].question}</div>
    <input type="radio" name="choices" class="choice-1" id='choice-1'>
        <label for="choice-1">${QUESTIONS[0].answers[0]}</label>
    <input type="radio" name="choices" class="choice-2" id='choice-2'>
        <label for="choice-2">${QUESTIONS[0].answers[1]}</label>
    <input type="radio" name="choices" class="choice-3" id='choice-3'>
        <label for="choice-3">${QUESTIONS[0].answers[2]}</label>
    <input type="radio" name="choices" class="choice-4" id='choice-4'>
        <label for="choice-4">${QUESTIONS[0].answers[3]}</label>
    </div>`;
}

function handleAnswerClicked(i) {
  $('form').on('click', '.submit', event => {
    if($('input[type=radio]:checked') === QUESTIONS[i].correctAnswer) {
      return '<p>Correct!</p>';
    } else if($('input[type=radio]:checked') !== QUESTIONS[i].correctAnswer) {
      return '<p>Wrong!</p>';
    }
  });
}

function generateFeedback(i) {
  
  return `<div class="feedback">
            <h2 class="result">feedback: correct/wrong</h2>
            <h2 class="correct-answer">results: this one was right</h2>
          </div>`;
}

function handleSubmit() {
  $('.submit-button').submit(event => {
    store.view = 'feedback';
  });
}


function renderPage(){

  if(store.view === 'start') {
    $('form').html(renderStart());
  }
  if(store.view === 'questions') {
    console.log('about to render')
    $('form').html(renderQuestion());
  }
  if(store.view === 'feedback') {
    $('form').html(renderFeedback());
  }
  if(store.view === 'lastQuestionFeedback') {
    $('form').html(renderlastQuestionFeedback());
  }
  if(store.view === 'results') {
    $('form').html(renderResults());
  }
}

$(function(){
  renderPage();
  handleStartButtonClick();
}
);

// make functions for each view