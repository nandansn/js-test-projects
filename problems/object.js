const car = {
  make: 'Lexus',
  model: 'ES',
  colors: ['red', 'black', 'white'],
  hybrid: true,
  drive: function () {
    console.log(`${this.make} ${this.model} in drive mode`);
  },
  stop: function () {
    console.log(`${this.make} ${this.model} in stop mode`);
  },
};

console.log(car.make);
console.log(car.colors[0]);
car.drive();
car.stop();
