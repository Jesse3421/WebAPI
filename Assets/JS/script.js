const startButton = document.querySelector("#start-quiz-btn")
const introContainer = document.querySelector("#intro-container")
const questionContainer = document.querySelector("#question-container")
const questionEl = document.querySelector("#question")
const answerEl = document.querySelector(".btn-class")
const correctTitle = document.querySelector("#correct")
const wrongTitle = document.querySelector("#wrong")
const answerButtons = document.querySelector("#answer-buttons")
const endGamePage = document.querySelector("#endGame-slide")
const scoreShow = document.querySelector(".scorePlaceholder")
const timeShow = document.querySelector("#timer")
const initialSumbit = document.querySelector("#initials-btn")
const initialsText = document.querySelector("#initials")
const topScoresList = document.querySelector(".top-scores")
const scoreSlide = document.querySelector("#score-slide")
let sec = 60
var score = 0
let scoreData = []
let topScoreArr = []
let currentQuestion, currentAnswer, answer, timerId, initialData, playerInitials, listScore
let message, listPlayersScore, finalScores

//Array of questions
var questionArr = [

    {
        question: 'Which actor originally played James Rhodes in the original Iron Man film?',
        choices: [
            'Paul Bethany',
            'Terrance Howard',
            'Don Cheadle',
            'Jon Favreau'
        ],
        answer: 'Terrance Howard'
    },
    {
        question: 'In which movie did we first see the face of Thanos?',
        choices: [
            'Thor',
            'The Avengers',
            'The Avengers: Age of Ultron',
            'The Avenger: Endgame'
        ],
        answer: 'The Avengers: Age of Ultron',
    },
    {
        question: 'Who played Thor’s love interest in the first two Thor films?',
        choices: [
            'Scarlet Johansson',
            'Elizabeth Olson',
            'Brie Larson',
            'Natalie Portman',
        ],
        answer: 'Natalie Portman',
    },
    {
        question: 'Natasha Romanoff tells Loki she has what in her ledger?',
        choices: [
            'Phone Numbers',
            'Red',
            'Plans',
            'Pictures of friends',
        ],
        answer: 'Red',
    },
    {
        question: 'Bradley Cooper is the voice of which Marvel character?',
        choices: [
            'Groot',
            'Howard the Duck',
            'Rocket',
            'Jarvis',
        ],
        answer: 'Rocket',
    },
    {
        question: 'Who is the firstborn child of Odin?',
        choices: [
            'Loki',
            'Hela',
            'Steve Rodgers',
            'Thor',
        ],
        answer: 'Hela',
    },
    {
        question: 'Nick Fury wears a patch over which eye?',
        choices: [
            'Left eye',
            'Right eye',
            'Third eye',
            'He wears an eye patch?',
        ],
        answer: 'Left eye',
    },
    {
        question: 'Pepper Potts is allergic to what',
        choices: [
            'Peanuts',
            'Gluten',
            'Strawberries',
            'Stark’s ego',
        ],
        answer: 'Strawberries',
    },
    {
        question: 'How many infinity stones are in this universe?',
        choices: [
            'One',
            'Four',
            'Five',
            'Six',
        ],
        answer: 'Six',
    },
    {
        question: 'Who is the firstborn child of Odin?',
        choices: [
            'Loki',
            'Hela',
            'Steve Rodgers',
            'Thor',
        ],
        answer: 'Hela',
    },
    {
        question: 'Where is Captain America from?',
        choices: [
            'Brooklyn',
            'Queens',
            'Chicago',
            'New Jersey',
        ],
        answer: 'Brooklyn',
    }
]

//Press Start button to begin game

startButton.addEventListener("click", startQuiz)
sec = 60
score = 0
currentQuestion = 0
currentAnswer = 0
answerChoices = questionArr[currentQuestion].choices
question = questionArr[currentQuestion].question
answer = questionArr[currentQuestion].answer

//Begin quiz..Changes visual slides and starts timer
function startQuiz() {
    myTimer()
    introContainer.style.display = "none"
    questionContainer.style.display = "flex"
    displayQuestion(question, answerChoices, answer)
    timeId = setInterval(myTimer, 1000);
}

//Display current question in the button also conditions the timer
function displayQuestion(question, answerChoices, answer) {
    questionEl.innerText = question
    for (i = 0; i < answerChoices.length; i++) {
        var btn = document.querySelector(`#btn${i + 1}`)
        btn.innerText = answerChoices[i]
        btn.dataset.text = answerChoices[i]
        btn.addEventListener("click", validateAnswer)
    }
    if(sec === 0) () => endGame
}

//Validates the answer and changes time based on result
function validateAnswer() {
    
    let selectedAnswer = this.dataset.text
    console.log('selectedAnswer: ', selectedAnswer);
    console.log(selectedAnswer === answer)
    if (selectedAnswer === answer) {
        console.log('sec: ', sec);
        score = score + 25
        console.log(score);
        correctTitle.classList.remove("hidden")
        setTimeout(clearStatusClass, [2000])
        sec = sec + 10
        return
    }
    score = score - 25
    sec = sec - 10
    console.log('sec: ', sec);
    wrongTitle.classList.remove("hidden")
    setTimeout(clearStatusClass, [1000])
    return
}

//clears the question and answer results
function clearStatusClass() {
    currentQuestion++
    correctTitle.classList.add("hidden")
    wrongTitle.classList.add("hidden")
    answerEl.classList.add("btn-class")
    console.log(currentQuestion)
    if (currentQuestion > 9 || sec <= 0) {
        console.log(sec)
        console.log(currentQuestion.length);
        clearInterval(timeId)
        endGame()
    } else {
        question = questionArr[currentQuestion].question
        answerChoices = questionArr[currentQuestion].choices
        answer = questionArr[currentQuestion].answer
        displayQuestion(question, answerChoices, answer)
    }
}

//Timer for quiz
function myTimer() {
    sec--;
    if(sec <= 0){
        clearInterval(timerId)
        endGame()}
        timeShow.innerHTML = "Time: " + sec
        
}
//End game slide and where initials are entered   
function endGame(score) {
        clearInterval(timeId)
        questionContainer.style.display = "none"
        endGamePage.style.display = "flex"
        initialSumbit.addEventListener("click", saveInitials) 
}

// Save Initials to local storage 
function saveInitials (ev) {
        ev.preventDefault() 
        let initialData = {
            initials: initialsText.value,
            playerScore: score
        }
        if(localStorage.getItem('initialData') === null) {
            localStorage.setItem('initialData', [] )
        }
        let scoreData = []
        let oldScore = localStorage.getItem('initialData')
        scoreData = oldScore ? JSON.parse(oldScore) : [] 
        scoreData.push(initialData)
        localStorage.setItem('initialData', JSON.stringify(scoreData))
        console.log(scoreData)
        showHighScores(initialData)
}
    
//Take high scores from local storage and present them     
function showHighScores(initialData) {
        endGamePage.style.display = "none"
        scoreSlide.style.display = "flex"
        topScoreArr = []
        let finalScores = localStorage.getItem('initialData')
        topScoreArr = finalScores ? JSON.parse(finalScores) : []
        console.log(topScoreArr)
        //let playerInitials = topScoreArr[i].initials
        console.log(topScoreArr)
        //let listScore = topScoreArr[i].playerScore
        topScoreArr.sort(function (a, b) {
            return a.playerScore - b.playerScore
        })
        topScoreArr.reverse()
        console.log(topScoreArr)
        
        for(let i = 0; i <= 4 ; i++) {
            let playerInitials = topScoreArr[i].initials
            let listScore = topScoreArr[i].playerScore
            let message = "Player Initials :  " + playerInitials + " Players Score:  " + listScore 
            listPlayersScore = document.createElement("li")
            listPlayersScore.innerHTML = message
            topScoresList.appendChild(listPlayersScore)
            console.log(listPlayersScore)
        }
}
 
