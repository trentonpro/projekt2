const questions = [
    {
        question: "Kui vana oli Walter White, kui teda diagnoositi?"
        answers: [
            {text: "49", correct: false},
            {text: "50", correct: true},
            {text: "45", correct: false},
            {text: "52", correct: false},
        ]
    },
    {
        question: "Mis oli lennuki nimi, mis lendas teise lennukiga kokku?"
        answers: [
            {text: "341", correct: false},
            {text: "737", correct: true},
            {text: "747", correct: false},
            {text: "803", correct: false},
        ]
    },
    {
        question: "Kas Mike valis täis või poolik valiku?"
        answers: [
            {text: "Poolik", correct: true},
            {text: "Täis", correct: false},
        ]
    },
    {
        question: "Kui vana oli Walter White, kui teda diagnoositi?"
        answers: [
            {text: "49", correct: false},
            {text: "50", correct: true},
            {text: "45", correct: false},
            {text: "52", correct: false},
        ]
    },



















];

const questionElement = document.getElementById("question");
const answerButton = document.getElementById("answerbutton");
const nextButton = document.getElementById("next-btn");

let currentQuestionIndex = 0;
let score = 0;

function startQuiz(){
    currentQuestionIndex = 0;
    score = 0;
    nextButton.innerHTML = "Jargmine";
    showQuestion();
}

function showQuestion(){
    let currentQuestion = questions[currentQuestionIndex];
    let questionNo = currentQuestionIndex + 1;
    questionElement.innerHTML = questionNo + ". " + currentQuestion.question;
}

currentQuestion.answers.forEa
    
});