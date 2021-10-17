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

let sec = 60
var score = 0
let currentQuestion, currentAnswer, answer, timerId


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

function startQuiz() {
    myTimer()
    introContainer.style.display = "none"
    questionContainer.style.display = "flex"
    displayQuestion(question, answerChoices, answer)
    timeId = setInterval(myTimer, 1000);
}



//Display current question in the button
function displayQuestion(question, answerChoices, answer) {
    console.log('answerChoices: ', answerChoices);
    questionEl.innerText = question
    for (i = 0; i < answerChoices.length; i++) {
        var btn = document.querySelector(`#btn${i + 1}`)
        btn.innerText = answerChoices[i]
        btn.dataset.text = answerChoices[i]
        btn.addEventListener("click", validateAnswer)
    }
    if(sec === 0) () => endGame
}

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



function clearStatusClass() {
    currentQuestion++
    correctTitle.classList.add("hidden")
    wrongTitle.classList.add("hidden")
    answerEl.classList.add("btn-class")
    console.log(currentQuestion)
    if (currentQuestion > 4 || sec === 0) {
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

function endGame() {
    clearInterval(timeId)
    questionContainer.style.display = "none"
    endGamePage.style.display = "flex"
    document.querySelector()
    scoreShow.innerHTML = "Score: " + score
    storage.setItem(playerScore, score)
    
}

function myTimer() {
    sec--;
    timeShow.innerHTML = "Time: " + sec
    
}

