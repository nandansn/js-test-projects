class Car {
  constructor(name, color) {
    this.name = name;
    this.color = color;
  }
  info() {
    console.log(this);
  }
}

let myCar = new Car('Audi Q7', 'Red');

myCar.info();
