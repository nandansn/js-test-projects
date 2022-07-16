class Person {
  country = "India";

  constructor(name) {
    this.name = name;
  }

  // bounding methotds

  display = () => {
    console.log(this.name);
  };
}

const newPerson = new Person("nanda");

console.log(newPerson.country);

setTimeout(newPerson.display, 200);
