let students = require('../students')

let filtered = students.filter(student => student.score >= 80)

console.log(filtered);