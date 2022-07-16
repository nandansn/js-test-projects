class User {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  info() {
    console.log(`Name: ${this.use} \n Age: ${this.age}`);
  }
}

console.log(typeof User);
console.log(User === User.prototype.constructor);
console.log(Object.getOwnPropertyNames(User.prototype));
