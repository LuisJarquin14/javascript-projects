// Código JavaScript para la aplicación de cuestionario
const questions = [
    // Tus preguntas
    {
        question: "¿Qué es JavaScript?",
        options: ["Un lenguaje de programación", "Un framework", "Una base de datos", "Un sistema operativo"],
        answer: "Un lenguaje de programación"
    },
    {
        question: "¿Qué significa HTML?",
        options: ["Hyper Text Markup Language", "High Text Markup Language", "Hyperlink Text Markup Language", "None of the above"],
        answer: "Hyper Text Markup Language"
    },
    {
        question: "¿Qué significa CSS?",
        options: ["Cascading Style Sheet", "Computer Style Sheet", "Creative Style Sheet", "None of the above"],
        answer: "Cascading Style Sheet"
    },
    {
        question: "¿Qué significa API?",
        options: ["Application Programming Interface", "Application Program Interface", "Application Programming Interconnection", "None of the above"],
        answer: "Application Programming Interface"
    },
    {
        question: "¿Qué significa SQL?",
        options: ["Structured Query Language", "Strong Question Language", "Structured Question Language", "None of the above"],
        answer: "Structured Query Language"
    }
];

let currentQuestionIndex = 0;
let score = 0;
let timer;
let timeLeft = 10;

function loadQuestion() {
    const questionElement = document.getElementById('question');
    const optionsElement = document.getElementById('options');
    const messageElement = document.getElementById('message');
    const nextButton = document.getElementById('next-button');
    const currentQuestion = questions[currentQuestionIndex];

    questionElement.textContent = currentQuestion.question;
    optionsElement.innerHTML = '';
    messageElement.textContent = '';
    nextButton.style.display = 'none';

    currentQuestion.options.forEach(option => {
        const button = document.createElement('button');
        button.textContent = option;
        button.onclick = () => selectOption(option);
        optionsElement.appendChild(button);
    });

    startTimer();
}

function startTimer() {
    const timerElement = document.getElementById('timer');
    timeLeft = 10;
    timerElement.textContent = `Tiempo: ${timeLeft}`;

    if (timer) clearInterval(timer);
    timer = setInterval(() => {
        timeLeft--;
        timerElement.textContent = `Tiempo: ${timeLeft}`;
        if (timeLeft <= 0) {
            clearInterval(timer);
            showMessage(`Se acabó el tiempo. La respuesta correcta era: ${questions[currentQuestionIndex].answer}`);
            document.getElementById('next-button').style.display = 'block';
        }
    }, 1000);
}

function selectOption(selectedOption) {
    clearInterval(timer);
    const currentQuestion = questions[currentQuestionIndex];
    const nextButton = document.getElementById('next-button');

    if (selectedOption === currentQuestion.answer) {
        score++;
        showMessage('¡Correcto!');
    } else {
        showMessage(`Incorrecto. La respuesta correcta es: ${currentQuestion.answer}`);
    }

    document.getElementById('score').textContent = `Puntuación: ${score}`;
    nextButton.style.display = 'block';
}

function nextQuestion() {
    currentQuestionIndex++;
    if (currentQuestionIndex < questions.length) {
        loadQuestion();
    } else {
        showMessage(`¡Has completado el cuestionario! Tu puntuación final es: ${score}`);
        setTimeout(resetQuiz, 3000);
    }
}

function resetQuiz() {
    currentQuestionIndex = 0;
    score = 0;
    document.getElementById('score').textContent = `Puntuación: ${score}`;
    loadQuestion();
}

function showMessage(message) {
    const messageElement = document.getElementById('message');
    messageElement.textContent = message;
}

// Inicia el quiz
loadQuestion();
