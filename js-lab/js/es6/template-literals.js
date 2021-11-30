function intro(name, age, city) {
  console.log(`i am ${name}, my age is ${age} from the city ${city}`);
}

intro('nanda', 40, 'erode');

const fname = 'nanda';
const age = '40';
const city = 'erode';

let greet = greetTag`hello my name is ${fname} age is ${age} from city ${city}`;

function greetTag(text, ...args) {
  let finalText = text
    .map((item, index) => {
      return item + args[index];
    })
    .join('');

  console.log(finalText);
}
