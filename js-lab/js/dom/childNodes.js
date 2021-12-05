const personList = document.querySelector('#persons');

console.log(personList.children);
console.log(personList.firstElementChild);
console.log(personList.lastElementChild);

console.log(personList.childNodes);
console.log(personList.firstChild);
console.log(personList.lastChild);

const color_button = document.getElementById('color-btn');

color_button.addEventListener('click', function (e) {
  console.log(e.target);
  let timeCount = 500;
  Array.from(personList.children).forEach((item) => {
    changeColor(item, timeCount).then((data) => {
      console.log(data);
    });
    timeCount += 700;
  });
});

function changeColor(liElement, time) {
  return new Promise((res, rej) => {
    if (liElement) {
      setTimeout(() => {
        liElement.style.color = 'red';
      }, time);
      res('element present');
    } else {
      rej('element not present');
    }
  });
}
