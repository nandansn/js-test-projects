const students = require('./data')

let survey = students.students.reduce((acc,curr)=>{

    if (acc[curr.favSubject]) {
        acc[curr.favSubject] +=1;
    } else {
        acc[curr.favSubject] = 1;
    }

    return acc;
},{})

console.log(survey);