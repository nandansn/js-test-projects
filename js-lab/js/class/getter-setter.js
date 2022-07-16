class User {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  get name() {
    return this._name;
  }

  set name(name) {
    this._name = name;
  }
}

let newPerson = new User("kumar", 346);

function display() {
  console.log(`name: ${newPerson.name}`);
  console.log(`age: ${newPerson.age}`);
}

display();

function updateAge(age) {
  newPerson.age = age;
}

updateAge(23);

display();
