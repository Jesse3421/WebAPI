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
let currentQuestion, currentAnswerData, randomQuestion 


var questionArr = [

    {
        question: 'Which actor originally played James Rhodes in the original Iron Man film?',
        choices: [
             'Paul Bethany', 
             'Terrance Howard', 
             'Don Cheadle', 
             'Jon Favreau'
        ],
        answer: 'Don Cheadle' 
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
        answer: 'Rocket'
    }
    
]
//Press Start button to begin game

startButton.addEventListener("click" , startQuiz)
//answerEl.addEventListener("click", validateAnswer)

function startQuiz() {
    introContainer.style.display = "none"
    questionContainer.style.display = "flex"
    score = 0
    currentQuestion = 0
    question = currentQuestion.question
    randomQuestion = Math.floor(Math.random() * questionArr.length)
    displayNextQuestion()    
}

    //Display next random question in index
function displayNextQuestion() {
        displayQuestion(randomQuestion[currentQuestion])
}
    
    //Display current question in the button
function displayQuestion(currentQuestion) {
        questionEl.innerText = .question
        console.log(currentQuestion.question)
}

  /*  function validateAnswer(currentQuestion) {
        currentQuestion.choices.forEach(function(choice, index){
        
        })
    }*/

    function presentNextQuestion(questionArr) {
        currentQuestion = currentQuestion.title
        console.log(currentQuestion)
        
            console.log(currentAnswer)
            currentQuestionData = questionArr[questionIndex]
            currentAnswerData = currentQuestionData.answers[i].text
            
            currentAnswer = questionPool[i].answers[i].
            currentAnswer = currentQuestion.answers[i]
            var btn = document.querySelector(`#btn${i+1}`)
            //currentAswers = currentQuestion.answer.text
            btn.innerText = currentAnswer 
        
        
        
        
        for (let i = 0; i < questionArr.length; i++) { 
            currentQuestion = questionArr[i]
            console.log(currentQuestion)
            
            //currentAnswer = questionPool[i].answers[i].
            currentAnswer = currentQuestion.answers[i]
            console.log(currentAnswer)
            questionIndex = Math.floor(Math.random() * questionPool.length)
            currentQuestionData = questionPool[questionIndex]
            currentAnswerData = currentQuestionData.answers[i].text
            questionEl.innerText = currentQuestion[i].questions
            
            var btn = document.querySelector(`#btn${i+1}`)
            //currentAswers = currentQuestion.answer.text
            btn.innerText = currentAnswer
            
            
            if (answerChoice) {
                //questionPool.splice(currentQuestionData) 
                score = score + 25
                correctTitle.classList.remove("hidden")
                setTimeout(clearStatusClass, [2000]) 
                presentNextQuestion
            } else {
                //questionPool.splice(currentQuestionData)
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
    
    
        
     /*  //TIMER for quiz  
    function myTimer() {
        document.querySelector('#timer').innerHTML = "Time: " + sec;
        sec--;
        if (sec == -1) {
            clearInterval(time);
            alert("Quiz Over");
            //questionContainer.style.display = "none"
            //insert last slide here closingContainer.style.remove ="hide"
            //Display Score....
        }   
        var time = setInterval(myTimer, 1000);
    }   */