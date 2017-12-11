// views: start, questions, feedback, lastQuestionFeedback, results

const QUESTIONS = [];

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
        $('.title').show();
        $('.answer-choice').hide();
        $('.results').hide();
        $('.current-state').hide();
        $('.button').show();
    } else if (store.view === 'questions') {
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
  

// make functions for each view




