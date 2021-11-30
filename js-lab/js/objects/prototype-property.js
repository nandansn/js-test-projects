function Car(name, color) {
  this.name = name;
  this.color = color;
}

Car.prototype.info = function () {
  console.log(this);
};

let myCar = new Car('Volov 90', 'Blue');
myCar.info();
