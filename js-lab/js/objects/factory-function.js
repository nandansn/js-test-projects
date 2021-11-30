function createPerson(name, age, city) {
  return {
    name,
    age,
    city,
    info() {
      console.log(this.name);
    },
  };
}

let p1 = createPerson('nanda', 40, 'erode');
p1.info();
p1.name = 'kumar';
p1.info();
