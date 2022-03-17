const students = require('./data')


let highScores = students.students.filter(student => {
    return student.score >= 80;
})

console.log(highScores)