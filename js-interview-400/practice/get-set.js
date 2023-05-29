let person = {
  name: "John",
  age: 21,
  get getName() {
    return this.name;
  },
  set setName(name) {
    this.name;
  },
};

console.log(person.getName);
person.setName = "jane";
console.log(person.getName);
