function morning(name) {
  console.log(`hello good morning ${name}`);
}

function evening(name) {
  console.log(`hello good evening ${name}`);
}

function greet(name, timeFun) {
  timeFun(name);
}

greet('nanda', morning);
greet('kumar', evening);
