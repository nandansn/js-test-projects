const students = require('./data')

let updatedStudents = students.students.map(student => {
    student.role = 'student';
    return student
})

console.log(updatedStudents);