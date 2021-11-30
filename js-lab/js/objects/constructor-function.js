function Person(name, age, city) {
  this.name = name;
  this.age = age;
  this.city = city;
  this.info = function () {
    console.log(this);
  };
}

let p1 = new Person('nanda', 40, 'erode');
p1.info();
