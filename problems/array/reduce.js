const students = require('./data')

let avgScore = students.students.reduce((acc,student) => {

    acc = acc + student.score;

    return acc;
}, 0) / students.students.length


console.log(avgScore);