let students = require('../students')


let updatedStudents = students.map(student => {
    student.role = 'student'  
    return student
}) 



console.log(updatedStudents)