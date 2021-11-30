function Car(name, color) {
  this.name = name;
  this.color = color;
  this.info = function () {
    console.log(this);
  };
}

let myCar = new Car('BMW X7', 'Red');

let newCar = new myCar.constructor('Audi Q7', 'White');

newCar.info();
