const quizData = [
  {
    question: "What does MERN stand for?",
    options: [
      "MongoDB, Express, React, Node",
      "MongoDB, Express, Redux, Node",
      "MongoDB, Express, React, Nginx",
      "MySQL, Express, React, Node",
    ],
    answer: "MongoDB, Express, React, Node",
  },
  {
    question: "Which database is commonly used in MERN stack?",
    options: ["PostgreSQL", "MongoDB", "MySQL", "Firebase"],
    answer: "MongoDB",
  },
  {
    question: "Which command initializes a new Node.js project?",
    options: ["npm start", "node init", "npm init", "node setup"],
    answer: "npm init",
  },
  {
    question: "Which method is used to create a new document in MongoDB?",
    options: ["insertOne()", "addDocument()", "createDoc()", "add()"],
    answer: "insertOne()",
  },
  {
    question: "What command is used to start a React application?",
    options: ["npm run dev", "npm start", "node start", "react start"],
    answer: "npm start",
  },
  {
    question:
      "Which middleware is commonly used to handle JSON data in Express?",
    options: ["body-parser", "express-json", "express-body", "express-parse"],
    answer: "body-parser",
  },
  {
    question:
      "Which hook is used to manage state in a React functional component?",
    options: ["useState", "useEffect", "useMemo", "useRef"],
    answer: "useState",
  },
  {
    question: "Which HTTP method is used to update data in REST APIs?",
    options: ["GET", "POST", "PUT", "DELETE"],
    answer: "PUT",
  },
  {
    question: "Which of the following is used for routing in React?",
    options: ["ReactRouter", "RouterReact", "ReactRoute", "RouteManager"],
    answer: "ReactRouter",
  },
  {
    question: "Which command is used to install Express in a Node.js project?",
    options: [
      "npm install express",
      "node add express",
      "npm setup express",
      "node express install",
    ],
    answer: "npm install express",
  },
];

const quizContainer = document.getElementById("quizContainer");
const restartBtn = document.getElementById("restartBtn");

let currentQuestion = 0;
let score = 0;

function loadQuiz() {
    const currentQuiz = quizData[currentQuestion];
    quizContainer.innerHTML = `
        <h2 class="text-lg font-semibold">${currentQuiz.question}</h2>
        <div class="mt-4 space-y-2">
            ${currentQuiz.options
                .map(option => `
                    <button 
                        class="w-full p-2 border rounded-lg bg-gray-200 hover:bg-gray-300"
                        onclick="selectAnswer('${option}')"
                    >
                        ${option}
                    </button>
                `)
                .join('')}
        </div>
    `;
}

function selectAnswer(selectedAnswer) {
    const correctAnswer = quizData[currentQuestion].answer;

    if (selectedAnswer === correctAnswer) {
        score++;
        alert("Correct Answer!");
    } else {
        alert(`Wrong Answer! Correct answer is: ${correctAnswer}`);
    }

    currentQuestion++;

    if (currentQuestion < quizData.length) {
        loadQuiz();
    } else {
        showResult();
    }
}

function showResult() {
    quizContainer.innerHTML = `
        <h2 class="text-2xl font-bold text-center">Quiz Completed!</h2>
        <p class="text-center text-lg mt-2">Your Score: ${score} / ${quizData.length}</p>
    `;

    restartBtn.classList.remove('hidden');
}

restartBtn.addEventListener("click", () => {
    currentQuestion = 0;
    score = 0;
    restartBtn.classList.add('hidden');
    loadQuiz();
});

loadQuiz();
