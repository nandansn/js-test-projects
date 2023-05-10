let person = {
    name:'nanda',
    age:20
}


console.log(person.name);

function Person(name, age)  {

    this.name = name;
    this.age = age;
    
}

Person.prototype.display = function() {
    console.log(this.age, this.name);
}

let person2 = new Person('nanda',20);

person2.display();


class Student extends Person {

    constructor(name, age, subject) {
        super(name, age);
        this.subject = subject;
    }

}

let student = new Student('nanda',20,'math');

console.log(student.name);

let newStudent = Object.create(student)

console.log(newStudent);

let newPerson = Object.assign(person, {})


console.log(newPerson);


let createCar = function(model, color, price) {
    return {
        model,
        color,
        price
    }
}

console.log(createCar('alto','red', 1234));


let connection = (function createConnection() {
    return {
        connection: 'dbconnection'
    }
})();


console.log(connection);



