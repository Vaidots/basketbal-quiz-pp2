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
         question: "Who invented the game in 1891?",
         answers: [{
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
            question: "How many players in total are on a basketball court at the same time?",
            answers: [{
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
           ],
        }   
       },

       {
        question: {
            id: 3,
            question: "Which small European country, with a population of under 3 million, is a traditional force of the sport in Europe?",
            answers: [{
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
           ],
        }   
       },

       {
        question: {
            id: 4,
            question: "Michael Jordans leaping ability earned him which nickname?",
            answers: [{
                answer: "Air Jordan",
                true: 1
            },
            {
                answer: "Air Ball",
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
           ],
        }   
       },

       {
        question: {
            id: 5,
            question: "Who was known for his fierce defensive and rebounding abilities, and was nicknamed the worm??",
            answers: [{
                answer: "Lebron James",
                true: 0
            },
            {
                answer: "Scotty Pippen",
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
           ],
        }   
       },

       {
        question: {
            id: 6,
            question: "The United States mens Olympic basketball team, nicknamed the 'Dream Team', competed in which year at the Olympics?",
            answers: [{
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
           ],
        }   
       },
]

const SCORE_POINTS = 20

const MAX_QUESTIONS = 6