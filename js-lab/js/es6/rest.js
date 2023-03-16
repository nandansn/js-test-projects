// array

let names = ['a','b','c','d']

let [n,...rest] = names

console.log(rest)

// object

let person = {name:'nanda',age:40, mobile:100,email:'nan@123.com'}


let {name,age,...contact} = person

console.log(contact)


// function args

function markCalc(name,...scores) {
    let total = scores.reduce((p,c) => {
        return p+=c;
    })   
    console.log(total)
}

markCalc('niv',100,100,100,100,100)