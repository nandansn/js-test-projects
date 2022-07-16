// Class, using class expression syntax

let User = class {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  info() {
    console.log(`Name: ${this.name}\nAge: ${this.age}`);
  }
};

new User("Nanda", 40).info();

// Class - On Demand

function CreateClass() {
  return class User {
    constructor(name, age) {
      this.name = name;
      this.age = age;
    }

    info(second) {
      console.log(`${this.name}\n${this.age}`);
    }
  };
}

let user = CreateClass();

new user("andna", 123).info();
