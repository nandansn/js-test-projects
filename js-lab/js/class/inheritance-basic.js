class Person {
  constructor(name) {
    this.name = name;
  }

  info() {
    console.log("Name:" + this.name);
  }
}

class Employee extends Person {
  company = "Oracle";

  constructor(name) {
    super(name);
  }

  info() {
    super.info();
    console.log(this.company);
  }
}

let emp_1 = new Employee("Nanda");
emp_1.info();
