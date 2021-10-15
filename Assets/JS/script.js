const startButton = document.querySelector("#start-quiz-btn")
const introContainer = document.querySelector("#intro-container")
const questionContainer = document.querySelector("#question-container")
const questionEl = document.querySelector("#question")
const answerEl = document.querySelector(".btn-class")
const correctTitle = document.querySelector("#correct")
const wrongTitle = document.querySelector("#wrong")
const answerButtons = document.querySelector("#answer-buttons")
let sec = 60
var score = 0 
let questionPool = [] //initialization condition
let currentQuestionData, currentAnswerData 


var questionArr = [

    {
        questions: 'Which actor originally played James Rhodes in the original Iron Man film?',
        answers: [
            {text: 'Paul Bethany', answer: false},
            {text: 'Terrance Howard', answer: true},
            {text: 'Don Cheadle', answer: false},
            {text: 'Jon Favreau', answer: false}
    ]},
    {
        questions: 'In which movie did we first see the face of Thanos?',
        answers: [
            {text: 'Thor', answer: false},
            {text: 'The Avengers', answer: true},
            {text: 'The Avengers: Age of Ultron', answer: false},
            {text: 'The Avenger: Endgame', answer: false}
        ]},
       {
        questions: 'Who played Thor’s love interest in the first two Thor films?',
        answers: [
            {text: 'Scarlet Johansson', answer: false},
            {text: 'Elizabeth Olson', answer: false},
            {text: 'Brie Larson', answer: false},
            {text: 'Natalie Portman', answer: true}
        ]},
        {
        questions: 'Natasha Romanoff tells Loki she has what in her ledger?',
        answers: [
            {text: 'Phone Numbers', asnswer: false},
            {text: 'Red', answer: true},
            {text: 'Plans', answer: false},
            {text: 'Pictures of friends', answer: false}
        ]},
        {
        questions: 'Bradley Cooper is the voice of which Marvel character?',
        answers: [
            {text: 'Groot', answer: false},
            {text: 'Howard the Duck', answer: false},
            {text: 'Rocket', answer: true},
            {text: 'Jarvis', answer: false}
        ]}
        
    
]
//Press Start button to begin game

startButton.addEventListener("click" , startQuiz)
answerEl.addEventListener("click", presentNextQuestion)

function startQuiz() {
    introContainer.style.display = "none"
    questionContainer.style.display = "flex"
    score = 0
    currentQuestion = 0
    
    presentNextQuestion()
    //TIMER for quiz  
    //var time = setInterval(myTimer, 1000);
    
    myTimer = () => {
        document.querySelector('#timer').innerHTML = "Time: " + sec;
        sec--;
        if (sec == -1) {
            clearInterval(time);
            alert("Quiz Over");
            //questionContainer.style.display = "none"
            //insert last slide here closingContainer.style.remove ="hide"
            //Display Score....
        }
    }
}

console.log(questionArr)

function presentNextQuestion(questionPool) {
    
    questionPool = questionArr.slice()
    console.log(questionPool)
    
    
    for (let i = 0; i < questionPool.length; i++) { 
       currentQuestion = questionPool[i]
       console.log(currentQuestion)
       currentAnswer = questionPool[i].answers[i].
       console.log(currentAnswer)
        questionIndex = Math.floor(Math.random() * questionPool.length)
        currentQuestionData = questionPool[questionIndex]
        
        questionEl.innerText = currentQuestion[i].questions


            if (answerChoice) {
                questionPool.splice(currentQuestionData) 
                score = score + 25
                correctTitle.classList.remove("hidden")
                setTimeout(clearStatusClass, [2000]) 
                presentNextQuestion
                
            } else {
                questionPool.splice(currentQuestionData)
                score = score - 25
                sec = sec - 10
                wrongTitle.classList.remove("hidden")
                setTimeout(clearStatusClass, [2000]) 
                presentNextQuestion
            }
        }
    }  
      
        function clearStatusClass() {
            correctTitle.classList.add("hidden")
            wrongTitle.classList.add("hidden")
            answerEl.classList.add("btn-class")
            presentNextQuestion()
                
        }
        
 
        
        /*
        function hide(evt){
            evt.target.answerEl.style.display = "none"
            answerEl.classList
            questionPool = questionArr.slice()
            
            
            questionPool.splice(randomQuestion)

    if(questionPool[0].answers[i].answer) {
        answerEl.dataset.correct = answers.correct
    }
    answerEl.addEventListener("click", chooseAnswer)
    
  currentQuestion = randomQuestion.questions
}

chooseAnswer(e)
    var selectedAnswer = e.target

       
    

    
    //answerButtons.appendChild("answerEl")
    
   
    if (questionPool > 0)
    presentNextQuestion()
    } else {
        endQuiz ()
    }

}      


function chooseAnswer(e) {

answerEl.addEventListener('click', correct)

}function repeat() {
    if(questionPool >= 0)
 presentNextQuestion()
 } else {
    endGame()
 }
 

function clearStatusClass(element) {
    correctAnswer.classList.add('hidden')
    incorrectAnswer.classList.add('hidden')
 }
  
 */