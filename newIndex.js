
'use strict';

const QUESTIONS = [
  {
    questionText: 'What is 2+2?',
    answers: [1, 2, 3, 4],
    correctAnswerIndex: 3
  },
  {
    questionText: 'What is 3-2?',
    answers: [-10, 2, 1, 32],
    correctAnswerIndex: 2
  },
  {
    questionText: 'What is 1x1?',
    answers: [1, 0, 100, 11],
    correctAnswerIndex: 0
  },
  {
    questionText: 'What is 25/5?',
    answers: [125, 2, 5, 50],
    correctAnswerIndex: 2
  },
  {
    questionText: 'What is 6^2?',
    answers: [36, 12, 6, 90],
    correctAnswerIndex: 0
  }
];
// / views: start, questions, feedback, lastQuestionFeedback, results

const STORE = {
  view: 'start',
  currentQuestion: null,
  currentScore: null,
  button: {class: 'start-button', label: 'Start Quiz'},
  showFeedback: false,
  correctAnswerTotal: 0,
  curentScore: `${this.correctAnswerTotal} of 5 answers correct'`
};

function renderStartView() {
  // render title and button
  return `
    <header class="title">
        <h1>Welcome to our Quiz Page</h1>
    </header>
    <button class=${STORE.button.class}>${STORE.button.label}</button>
    `;
}

function handleStartButtonClick(){
// this will set-up event handler for original button
  $('.start-button').click(function(event) {
    // we need to prevent the default behavior of a submit
    event.preventDefault();
    // we'll check if the event handler works
    console.log('the start button was pushed');
    //we change the store to the next view
    STORE.view = 'questions';
    //we set question number to index 0
    STORE.currentQuestion = 0;
    //change the STORE.button to a submit-answer 
    STORE.button = {class:'submit-answer', label: 'Submit Answer'};
    console.log(STORE);
    //then we re-render the page for the new store 
    //to show the first question page
    renderPage();
  }
  );
}

//this function will return a string that outlines the 
//STORE.view = 'questions' page
function renderQuestionView(){
  //render the current question
  const question = generateQuestion(STORE.currentQuestion);
  //render a submit button
  const button = generateButton(STORE.button.class, STORE.button.label);
  return `${question} ${button}`;
}

function generateQuestion(i){
  //this pulls out the object at QUESTIONS at index i
  const index = QUESTIONS[i];
  console.log('QUESTIONS[i] =', index);
  //this is going to return a string with html markers with auto-filled
  //questionText and answers
  return `
    <div class="answer-choice">${index.questionText}</div>
    <input type="radio" name="choice" value="0" class="choice" id="choice-1">
      <label for="choice-1">${index.answers[0]}</label>
    <input type="radio" name="choice" value="1" class="choice" id="choice-2">
      <label for="choice-2">${index.answers[1]}</label>
    <input type="radio" name="choice" value="2" class="choice" id="choice-3">
      <label for="choice-3">${index.answers[2]}</label>
    <input type="radio" name="choice" value="3" class="choice" id="choice-4">
      <label for="choice-4">${index.answers[3]}</label>      
  </div>
  `;
}
//this creates a button with a specific class and text
function generateButton(buttonClass, text) {
  return `<button class="${buttonClass}">${text}</button>`;
}

function handleSubmitAnswerButtonClicked() {
  //listen for the .submit-answer button click
  $('form').on('click', '.submit-answer', function (event) {
    //prevent the default behavior
    event.preventDefault();
    //check if the handler works
    console.log('submit answer button was clicked');
    //change STORE.view to feedback
    STORE.view = 'feedback';
    //we don't change the STORE.currentQuestion b/c we want it to stay 
    // we change STORE.showFeedback to true
    STORE.showFeedback = true;
    // we change the STORE.button to 'next-question'
    STORE.button = {class: 'next-question', label: 'Next Question'};
    console.log(STORE);
    renderPage();
  });
}
handleSubmitAnswerButtonClicked();

//this function returns a string that outlines the STORE.view = 'feedback' page
function renderFeedbackView(){
  //this will get the question block
  const question = generateQuestion(STORE.currentQuestion);
  //this will get the feedback block
  const feedback = generateFeedback(STORE.currentQuestion);
  //this will get a next question button
  const button = generateButton(STORE.button.class, STORE.button.label);
  return `
    ${question} ${feedback} ${button}`;
}

function getAnswerResults(){
  //get value for checked radio button and put into generateFeedback
  const indexUserChoice = $('input[name=\'choice\']:checked').val();
  console.log('radio value is', indexUserChoice);
  return indexUserChoice;
}

//this should generate a string that will be fed into renderFeedbackView
function generateFeedback(i){
  console.log('Argument of generateFeedback', i);
  //this is giving us the value at QUESTIONS[i]
  const correctAnswer = QUESTIONS[i].correctAnswerIndex; 
  console.log('correct answer index', correctAnswer);
  const indexUserChoice = getAnswerResults();
  console.log('indexUserChoice is', indexUserChoice);
  let resultMessage; 
  // if(indexUserChoice !== correctAnswer){
  //   resultMessage = "You were Wrong!";
  // }
  if (indexUserChoice == correctAnswer){
    resultMessage = "You were Correct!";
  }
  
  return `
    <div class="feedback">
            <h2 class="answer-feedback" id="user-answer">results: ${resultMessage}</h2>
            <h2 class="answer-feedback" id="correct-answer">The Correct Answer was: ${QUESTIONS[i].answers[correctAnswer]}</h2>
        </div>`;
}
//this will render the page to the DOM based on 
//our current store state.
//this will be called each time we need to change the view 
//of the page
function renderPage() {

  if (STORE.view === 'start') {
    $('form').html(renderStartView());
  }
  if (STORE.view === 'questions') {
    console.log('about to render');
    $('form').html(renderQuestionView());
  }
  if (STORE.view === 'feedback') {
    $('form').html(renderFeedbackView());
  }
  if (STORE.view === 'lastQuestionFeedback') {
    $('form').html(renderlastQuestionFeedbackView());
  }
  if (STORE.view === 'results') {
    $('form').html(renderResultsView());
  }
}

//this is an anonymous function that will run automatically
//after the whole document is loaded.  that's why it's at the end
$(function () {
  renderPage();
  handleStartButtonClick();
}
);