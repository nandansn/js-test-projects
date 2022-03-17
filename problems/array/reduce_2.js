const students = require('./data')


let survey = students.students.reduce((acc, curr) => {

    

    switch (curr.favSubject) {
        case 'eng':
            acc.eng+=1;
            
            break;

        case 'math':
            acc.math+=1;
            
            break;
        
        case 'sci':
            acc.sci+=1;
            break;
    
        default:
            break;
    }

    return acc;

}, {eng:0,math:0,sci:0})

console.log(survey);