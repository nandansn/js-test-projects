let person = {
    name:'nanda',
    age:40
}

function display() {
    console.log(this.name);
    console.log(this.age);
}

function greet(msg) {
  console.log(`${this.name} ${msg}`);
}

display.call(person) // no args
greet.call(person, "hello") // with args