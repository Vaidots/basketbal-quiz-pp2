const question = document.getElementById("question");
const progressText = document.getElementById("progressText");
const scoreText = document.getElementById("score");
const progressBarFull = document.getElementById("progressBarFull");

let currentQuestion = {};
let score = 0;
let questionCounter = 0;
let availableQuestions = [];