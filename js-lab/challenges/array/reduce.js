let students = require("../students");


let total = students.reduce((p,c) => {
    return p + c.score;
},0)

console.log(total);