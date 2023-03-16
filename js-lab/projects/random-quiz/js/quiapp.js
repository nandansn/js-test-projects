import { quiz } from "../data/quiz.js";

const quizBtn = document.getElementById('q-btn')
const answerBtn = document.getElementById('a-btn')

const question = document.getElementById('question')
const answer = document.getElementById('answer')

let queryAnswer = {};


function getQuery() {

    let index = Math.floor(Math.random() * 5) + 1 ;
    queryAnswer  = quiz.find(item => item.id === index)
}

quizBtn.addEventListener('click', function () {
    getQuery()
    answer.style.visibility = "collapse"
    question.style.visibility = "visible"
    question.innerText = queryAnswer["query"]
})

answerBtn.addEventListener('click', function () {
    if (queryAnswer["answer"]) {
    answer.style.visibility = "visible"
    answer.innerText = queryAnswer["answer"]
    }
})