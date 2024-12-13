const questions = [
    { question: "What is the simple interest on $1000 at 5% for 3 years?", answer: 150 },
    { question: "What is the compound interest on $1000 at 5% for 2 years?", answer: 102.5 },
    { question: "What is the simple interest on $2000 at 3% for 4 years?", answer: 240 },
    { question: "What is the compound interest on $1500 at 4% for 3 years?", answer: 184.97 },
    { question: "What is the simple interest on $500 at 6% for 5 years?", answer: 150 },
    { question: "What is the compound interest on $2000 at 7% for 2 years?", answer: 284 },
    { question: "What is the simple interest on $1200 at 8% for 3 years?", answer: 288 },
    { question: "What is the compound interest on $1000 at 10% for 1 year?", answer: 100 },
    { question: "What is the simple interest on $800 at 5% for 2 years?", answer: 80 },
    { question: "What is the compound interest on $2500 at 6% for 2 years?", answer: 315 },
];

let currentQuestionIndex = 0;
let score = 0;

document.getElementById('startBtn').addEventListener('click', startGame);
document.getElementById('submitBtn').addEventListener('click', submitAnswer);
document.getElementById('restartBtn').addEventListener('click', restartGame);

function startGame() {
    currentQuestionIndex = 0;
    score = 0;
    document.getElementById('quiz').style.display = 'block';
    document.getElementById('result').style.display = 'none';
    showQuestion();
}

function showQuestion() {
    if (currentQuestionIndex < questions.length) {
        document.getElementById('question').innerText = questions[currentQuestionIndex].question;
        document.getElementById('answer').value = '';
    } else {
        endGame();
    }
}

function submitAnswer() {
    const userAnswer = parseFloat(document.getElementById('answer').value);
    if (userAnswer === questions[currentQuestionIndex].answer) {
        score++;
    }
    currentQuestionIndex++;
    showQuestion();
}

function endGame() {
    document.getElementById('quiz').style.display = 'none';
    document.getElementById('result').style.display = 'block';
    document.getElementById('score').innerText = score;
}

function restartGame() {
    startGame();
}