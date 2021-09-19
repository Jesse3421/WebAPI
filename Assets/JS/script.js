var startQuizBtn = document.getElementById('start-quiz-btn');
var introContainerEl = document.getElementById('intro-container');
var questionContainerEl = document.getElementById('question-container');

var shuffledQuestions, currentQuestionIndex;

var questionEl = document.getElementById('question');
var answerEl = document.getElementById('answer-buttons');
var timerEl = document.getElementById;



startQuizBtn.addEventListener('click', startQuiz);

function startQuiz() {
    introContainerEl.style.display = "none";    
    document.getElementById('question-container').style.display = 'flex';
    
    shuffledQuestions = questions.sort(() => Math.random() - .5);
    currentQuestionIndex = 0;
    
    nextQuestion();

    var sec = 30;
    var time = setInterval(myTimer, 1000);

    function myTimer() {
    document.getElementById('timer').innerHTML = "Time: " + sec;
    sec--;
       if (sec == -1) {
           clearInterval(time);
           alert("Quiz Over");
        }
    }
}

function nextQuestion() {
    resetState()
    showQuestion(shuffledQuestions[currentQuestionIndex]);  
}

function showQuestion(questions) {
    questionEl.innerText = questions.question;
    questions.answers.forEach(answer => {
        var button = document.createElement('button');
        button.innerText = answer.text;
        button.classList.add('btn-class');
        if(answer.correct) {
            button.dataset.correct = answer.correct;
        }
        button.addEventListener('click', selectAnswer);
        answerEl.appendChild(button);
    })  
}

function resetState() {
    while (answerEl.firstChild) {
        answerEl.removeChild
        (answerEl.firstChild)
    }
}
function selectAnswer() {


}
function correctAnswer(){


}
function wrongAnswer(){

}
function allDone () {

}

var questions = [
    {
        question: 'At the end of the first Avengers movie what type of food were the Avengers seen eating which was suggested by Tony Stark himself?', 
        answers: [
        {text: 'Cake', correct: false},
        {text: 'Gyro', correct: false},
        {text: 'Pizza', correct: false},
        {text: 'Shawarma', correct: true}
    ]},
    {
        question: 'Which actor originally played James Rhodes in the original Iron Man film?',
        answers: [
            {text: 'Paul Bethany', correct: false},
            {text: 'Terrance Howard', correct: true}, 
            {text: 'Don Cheadle', correct: false}, 
            {text: 'Jon Favreau', correct: false}
    ]},
    {
        question: 'In which movie did we first see the face of Thanos?',
        answers: [
            {text: 'Thor', correct: false},
            {text: 'The Avengers', correct: true},
            {text: 'The Avengers: Age of Ultron', correct: false},
            {text: 'The Avenger: Endgame', correct: false}
        ]},
       { 
        question: 'Who played Thor’s love interest in the first two Thor films?', 
        answers: [
            {text: 'Scarlet Johansson', correct: false},
            {text: 'Elizabeth Olson', correct: false}, 
            {text: 'Brie Larson', correct: false}, 
            {text: 'Natalie Portman', correct: true} 
        ]},
        {
        question: 'Natasha Romanoff tells Loki she has what in her ledger?',
        answers: [
            {text: 'Phone Numbers', correct: false},
            {text: 'Red', correct: true},
            {text: 'Plans', correct: false},
            {text: 'Pictures of friends', correct: false} 
        ]},
        {
        question: 'Bradley Cooper is the voice of which Marvel character?',
        answer: [
            {text: 'Groot', correct: false},
            {text: 'Howard the Duck', correct: false},
            {text: 'Rocket', correct: true}, 
            {text: 'Jarvis', correct: false} 
        ]} 
]

