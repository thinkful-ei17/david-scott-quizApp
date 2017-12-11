// views: start, questions, feedback, lastQuestionFeedback, results

const QUESTIONS = [
    {question: 'What is 2+2?',
    answers: [1, 2, 3, 4],
    correctAnswer: QUESTIONS[0].answers[3]},
    {question: 'What is 3-2?',
    answers: [-10, 2, 1, 32],
    correctAnswer: QUESTIONS[1].answers[2]},
    {question: 'What is 1x1?',
    answers: [1, 0, 100, 11],
    correctAnswer: QUESTION[2].answers[0]},
    {question: 'What is 25/5?',
    answers: [125, 2, 5, 50],
    correctAnswer: QUESTION[3].answers[2]},
    {question: 'What is 6^2?',
    answers: [36, 12, 6, 90],
    correctAnswer: QUESTION[4].answers[0]}
];

const STORE {
    view: start,
    title: start,
    currentQuestion: null,
    currentScore: null,
    button: start,
    showFeedback: false,
}

initial question STORE {
    view: questions,
    title: null,
    currentQuestion: question[i],
    currentScore: fn() {
        correct / total;
    },
    button: submit,
    showFeedback: false
}

feedback STORE {
    view: feedback,
    title: null,
    currentQuestion: question[i],
    currentScore: fn() {
        correct / total;
    },
    button: next question,
    showFeedback: true,
}

lastQuestion feedback STORE {
    view: lastQuestionFeedback,
    title: null,
    currentQuestion: question[i],
    currentScore: fn()
    button: results,
    showFeedback: true,
}

results STORE {
    view: results,
    title: results (congrats..),
    currentQuestion: null,
    currentScore: fn()
    button: start again?,
    showFeedback: false,
}



function renderQuizPage() {
    if (store.view === 'start') {
        // render title
        // render button
        $('.title').show();
        $('.answer-choice').hide();
        $('.results').hide();
        $('.current-state').hide();
        $('.button').show();
    } else if (store.view === 'questions') {
        // render answer-choice
        // render current state
        // render button
        $('.title').hide();
        $('.answer-choice').show();
        $('.results').hide();
        $('.current-state').show();
        $('.button').show();
    } else if (store.view === 'feedback'){
        $('.title').hide();
        $('.answer-choice').show();
        $('.results').show();
        $('.current-state').show();
        $('.button').show();
    } else if (store.view === 'lastQuestionFeedback'){
        $('.title').hide();
        $('.answer-choice').show();
        $('.results').show();
        $('.current-state').show();
        $('.button').show();
    } else (store.view === 'results'){
        $('.title').show();
        $('.answer-choice').hide();
        $('.results').show();
        $('.current-state').hide();
        $('.button').show();
    }
}

function renderStart(){
    // render title and button
    return `
    <header class="title">
        <h1>Welcome to our Quiz Page</h1>
    </header>
    <button class='button'>push me</button>`
}


function renderQuestion(){
    // question text
    // answers as radio buttons
    generateQuestion(store.currentQuestion);
}

function renderFeedback(){}

function renderlastQuestionFeedback(){}

function renderResults(){}


function genereateQuestion(i) {
    return
    `<div class="answer-choice">${QUESTIONS[i].question}</div>
    <input type="radio" name="choices" class="choice-1" id='choice-1'>
        <label for="choice-1">${QUESTIONS[i].answers[0]}</label>
    <input type="radio" name="choices" class="choice-2" id='choice-2'>
        <label for="choice-2">${QUESTIONS[i].answers[1]}</label>
    <input type="radio" name="choices" class="choice-3" id='choice-3'>
        <label for="choice-3">${QUESTIONS[i].answers[2]}</label>
    <input type="radio" name="choices" class="choice-4" id='choice-4'>
        <label for="choice-4">${QUESTIONS[i].answers[3]}</label>
    </div>`
}


function renderPage(){
    if(store.view === 'start'){
    $('form').html(renderStart());
    }
    if(store.view === 'questions'){
        $('form').html(renderQuestions());
    }
    if(store.view === 'feedback'){
        $('form').html(renderFeedback());
    }
    if()

}

$(renderPage())
// make functions for each view




// In-memory database of questions
const QUESTIONS = [];

// Create your initial store
const STORE = {
    // Current question
    // User's answer choice(s)
    // Current view
    // Score? Anything else?
};

// Template generators
function generateAnswerList(answers) {}

// Rendering functions
function renderQuestionText() {}

// Event handlers
function handleAnswerSubmitted() {
  $('.user-controls').on('click', '.submit-answer', () => {
    // Retrieve answer identifier of user-checked radio button
    // Perform check: User answer === Correct answer?
    // Update STORE and render appropriate section
  });
}

$(function(){
    handleAnswerSubmitted();
});
