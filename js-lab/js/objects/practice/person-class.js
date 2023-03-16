class Person {
    constructor(name,age) {
        this.name = name;
        this.age = age;
    }

    info() {
        console.log(`name: ${this.name} and age: ${this.age}`)
    }
}

let nanda = new Person('nanda',40);
console.log(nanda)

