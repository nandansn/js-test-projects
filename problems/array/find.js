const students = require('./data')

let specificId = students.students.find(student => {
    return student.id === 3;
})

console.log(specificId);