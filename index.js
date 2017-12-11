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

}

// make functions for each view




