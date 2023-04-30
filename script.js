const questions = [
  {
    question: "What is the highest mountain in the world?",
    answers:[
      {text: "Everest", correct: "true"},
      {text: "Makalu", correct: "false"},
      {text: "K2", correct: "false"},
      {text: "Manaslu", correct: "false"},
    ]
  },
  {
    question: "What is the smallest country in the world?",
    answers:[
      {text: "Bhutan", correct: "false"},
      {text: "Vatican City", correct: "true"},
      {text: "Sri lanka", correct: "false"},
      {text: "Bangaladesh", correct: "false"},
    ]
  },
  {
    question: "What is the largest desert in the world?",
    answers:[
      {text: "Gobi", correct: "false"},
      {text: "Kalahari", correct: "false"},
      {text: "Antarctica", correct: "false"},
      {text: "Sahara", correct: "true"},
    ]
  },
  {
    question: "What is the national sport in the Sri lanka?",
    answers:[
      {text: "Cricket", correct: "true"},
      {text: "Elle", correct: "false"},
      {text: "Volley Ball", correct: "false"},
      {text: "Foot Ball", correct: "false"},
    ]
  }
];

const questionElement = document.getElementById("question");
const answerButton = document.getElementById("answer-buttons");
const nextButton = document.getElementById("next-btn");

let currentQuestionIndex = 0;
let score = 0;

function startQuiz(){
  currentQuestionIndex = 0;
  score = 0;
  nextButton.innerHTML = "Next";
  showQuestion();
}

function showQuestion(){
  let currentQuestion = questions[currentQuestionIndex];
  let questionNo = currentQuestionIndex + 1;
  questionElement.innerHTML = questionNo + ". "+currentQuestion.
  question;

  currentQuestion.answers.forEach(answer =>{
    const button = document.createElement("button");
    button.innerHTML = answer.text;
    button.classList.add("btn");
    answerButton.appendChild(button);
  });
}
