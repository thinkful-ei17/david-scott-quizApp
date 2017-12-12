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
  currentQuestion: 0,
  currentScore: 0,
  userAnswer: $('input[type="radio"]:checked').val(),
};

function renderStart() {
  return `<header class="title">
    <h1>Welcome to our Quiz Page</h1>
    </header>
    <button class='start-button'>Start Quiz</button>`;
}

function handleStartButtonClick(){
  $('form').on('click', '.start-button', event => {
    event.preventDefault();
    console.log('this should start things');
    store.view = 'questions';
    renderPage();
  });
}

function renderQuestion() {
  // question text
  // answers as radio buttons
  return generateQuestion(store.currentQuestion);
}

function renderFeedback() {
  generateQuestion(store.currentQuestion);
  generateButton('next-Question', 'Next Question');
}

function renderlastQuestionFeedback() {}

function renderResults() {}

function generateButton(buttonClass, text) {
  return `<button class="${buttonClass}">${text}</button>`;
}

function generateQuestion(i=0) {
  return `<div class="answer-choice">${QUESTIONS[i].question}</div>
    <input type="radio" name="choices" class="choice-1" id='choice-1'>
        <label for="choice-1">${QUESTIONS[i].answers[0]}</label>
    <input type="radio" name="choices" class="choice-2" id='choice-2'>
        <label for="choice-2">${QUESTIONS[i].answers[1]}</label>
    <input type="radio" name="choices" class="choice-3" id='choice-3'>
        <label for="choice-3">${QUESTIONS[i].answers[2]}</label>
    <input type="radio" name="choices" class="choice-4" id='choice-4'>
        <label for="choice-4">${QUESTIONS[i].answers[3]}</label>
    </div>
    <button class="submit">submit</button>
    <button class="next-question">Next question</button>`;
}

function handleNextQuestion() {
  $('form').on('click', '.next-question', event => {
    console.log('clicked next question');
    store.currentQuestion++;
    renderPage();
  });
}

function handleAnswerClicked(i) {
  $('form').on('click', '.submit', event => {
    event.preventDefault();
    if(store.userAnswer === QUESTIONS[i].correctAnswer) {
      $('form').append('<p>Correct!</p>');
      store.correctAnswer++;
    } else {
      $('form').append(`<p>Wrong! ${store.userAnswer}</p>`);
    }
  });
}




function handleEventListeners() {
  handleStartButtonClick();
  handleAnswerClicked(store.currentQuestion);
  handleNextQuestion();

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
  handleEventListeners();
});

// make functions for each view


// 