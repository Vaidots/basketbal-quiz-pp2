/*jshint esversion: 6 */
/*jshint -W033 */ 

const question = document.getElementById("question");
const progressText = document.getElementById("progressText");
const scoreText = document.getElementById("score");
const progressBarFull = document.getElementById("progressBarFull");

let currentQuestion = {};
let score = 0;
let questionCounter = 0;
let availableQuestions = [];

// Question answer array

let questions = [
    {
      question: {
        id: 1,
        question: 'Who invented the game in 1891?',
        answers: [
          {
            answer: "James Naismith",
            true: 1
          },
          {
            answer: "Michael Jordan",
            true: 0
          },
          {
            answer: "James Sherman",
            true: 0
          },
          {
            answer: "John Edwin",
            true: 0
          }
        ],
      }
    },
    {
      question: {
        id: 2,
        question: 'How many players in total are on a basketball court at the same time?',
        answers: [
          {
            answer: "12",
            true: 0
          },
          {
            answer: "5",
            true: 0
          },
          {
            answer: "10",
            true: 1
          },
          {
            answer: "8",
            true: 0
          }
        ]
      }
    },
    {
      question: {
        id: 3,
        question: 'Which small European country, with a population of under 3 million, is a traditional force of the sport in Europe?',
        answers: [
          {
            answer: "Latvia",
            true: 0
          },
          {
            answer: "Estonia",
            true: 0
          },
          {
            answer: "Lithuania",
            true: 1
          },
          {
            answer: "Poland",
            true: 0
          }
        ]
      }
    },
    {
      question: {
        id: 4,
        question: 'Michael Jordans leaping ability earned him which nickname?',
        answers: [
          {
            answer: "Air Jordan",
            true: 1
          },
          {
            answer: "Air ball",
            true: 0
          },
          {
            answer: "Flying Jordan",
            true: 0
          },
          {
            answer: "Unstopable Jordan",
            true: 0
          }
        ]
      }
    },
    {
      question: {
        id: 5,
        question: 'Who was known for his fierce defensive and rebounding abilities, and was nicknamed the worm?',
        answers: [
          {
            answer: "LeBron James",
            true: 0
          },
          {
            answer: "Scotty Pipen",
            true: 0
          },
          {
            answer: "James Sherman",
            true: 0
          },
          {
            answer: "Dennis Rodman",
            true: 1
          }
        ]
      }
    },
    {
      question: {
        id: 6,
        question: 'The United States mens Olympic basketball team, nicknamed the "Dream Team", competed in which year at the Olympics?',
        answers: [
          {
            answer: "1992",
            true: 0
          },
          {
            answer: "1988",
            true: 0
          },
          {
            answer: "1996",
            true: 0
          },
          {
            answer: "2000",
            true: 1
          }
        ]
      }
    },
  ]

const SCORE_POINTS = 20

const MAX_QUESTIONS = 6

const startGame = () => {
    questionCounter = 0;
    score = 0;
    availableQuestions = [...questions];
    newQuestion()
}

const newQuestion = () => {
    let answersDiv = document.getElementById("answers")
  let infoMessage = document.getElementById("infoMessage");
  answersDiv.innerHTML = "";
  infoMessage.innerHTML = "";

  if(availableQuestions.length === 0 || questionCounter > MAX_QUESTIONS) {
    localStorage.setItem('mostRecentScore', score)
    return window.location.assign('endgame.html')
    }

    questionCounter++
    progressText.innerText = `Question ${questionCounter} of ${MAX_QUESTIONS}`;
    progressBarFull.style.width = `${(questionCounter/MAX_QUESTIONS) * 100}%`;

    const questionsIndex = Math.floor(Math.random() * availableQuestions.length)
    currentQuestion = availableQuestions[questionsIndex]
    question.innerText = currentQuestion.question.question

    currentQuestion.question.answers.forEach(function(value,index){
        let choiceContainer = document.createElement("div");

        choiceContainer.innerHTML = `
        <p class="choice-prefix">${index+1}</p>
        <p class="choice-text" data-number= "2">${value.answer}</p>
        <input type= "hidden" value= "${currentQuestion.question.id}" />`

        choiceContainer.setAttribute("onclick" , `checkAnswer(${currentQuestion.question.id}, "${value.answer}")`);
        choiceContainer.classList.add("choice-container");
        answersDiv.appendChild(choiceContainer)

    })

    availableQuestions.splice(questionsIndex, 1);

    
}

const checkAnswer = (questionID, answer) => {
    questions.forEach(function(value, index){
      if(value.question.id == questionID){
          value.question.answers.forEach(function(vAnswer, iAnswer){
              if(answer == vAnswer.answer){
                  if(vAnswer.true == 1) {
                      console.log("Correct Answer");
                      let infoMessage = document.getElementById("infoMessage");
                      infoMessage.innerHTML = "<i style='color: green; font-size: 5em;' class='fas fa-check fa-2xl'></i> <h1>Correct!</h1>"
                      incrementScore(SCORE_POINTS);
                  } else {
                    console.log("Incorrect Answer");
                    let infoMessage = document.getElementById("infoMessage");
                    infoMessage.innerHTML = "<i style='color: red; font-size: 5em;' class='fas fa-times fa-2xl'></i> <h1>Incorrect!</h1>"
                  }
              }
          })
      }  
    })

    setTimeout(() => {
        newQuestion()
    }, 1000)
}

const incrementScore = num => {
    score +=num;
    scoreText.innerText = score
}

startGame()