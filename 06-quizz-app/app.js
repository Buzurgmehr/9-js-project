const quizData = [{
    question: 'How old are you?',
    a: '10',
    b: '12',
    c: '15',
    d: '14',
    correct: 'c',
}, {
    question: 'Your Name is?',
    a: 'Jack',
    b: 'John',
    c: 'Benjamin',
    d: 'Back',
    correct: 'a',
}, {
    question: 'What country do u love?',
    a: 'USA',
    b: 'Germany',
    c: 'Norway',
    d: 'Tajikistan',
    correct: 'd',
}, {
    question: 'What language is the best?',
    a: 'English',
    b: 'Persian',
    c: 'Russian',
    d: 'German',
    correct: 'a',
}, {
    question: 'Best Uni in the world?',
    a: 'MIT',
    b: 'Oxford',
    c: 'Harvard',
    d: 'TTU',
    correct: 'a',
}];

const quiz = document.getElementById("quiz");
const answerEls = document.querySelectorAll(".answer");
const questionEl = document.getElementById("question");
const a_text = document.getElementById("a_text");
const b_text = document.getElementById("b_text");
const c_text = document.getElementById("c_text");
const d_text = document.getElementById("d_text");
const submitBtn = document.getElementById("submit");

let currentQuiz = 0;
let score = 0;

loadQuiz();

function loadQuiz() {
    deselectAnswers();

    const currentQuizData = quizData[currentQuiz];

    questionEl.innerText = currentQuizData.question;
    a_text.innerText = currentQuizData.a;
    b_text.innerText = currentQuizData.b;
    c_text.innerText = currentQuizData.c;
    d_text.innerText = currentQuizData.d;
}

function getSelected() {
    let answer = undefined;

    answerEls.forEach((answerEl) => {
        if (answerEl.checked) {
            answer = answerEl.id;
        }
    });

    return answer;
}

function deselectAnswers() {
    answerEls.forEach((answerEl) => {
        answerEl.checked = false;
    });
}

submitBtn.addEventListener("click", () => {
    // check to see the answer
    const answer = getSelected();

    if (answer) {
        if (answer === quizData[currentQuiz].correct) {
            score++;
        }

        currentQuiz++;
        if (currentQuiz < quizData.length) {
            loadQuiz();
        } else {
            quiz.innerHTML = `
                <h2>You answered correctly at ${score}/${quizData.length} questions.</h2>
                
                <button onclick="location.reload()">Reload</button>
            `;
        }
    }
});