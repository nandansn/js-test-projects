const h1 = document.querySelector('.one');
const h2 = document.querySelector('.two');
const h3 = document.querySelector('.three');

const btn = document.getElementById('color');

btn.addEventListener('click', function (e) {
  changeColor(h1, 3000, 'red')
    .then(() => changeColor(h3, 1000, 'green'))
    .then(() => changeColor(h2, 2000, 'blue'))
    .catch((reason) => {
      console.log(reason);
    });
});

function changeColor(element, time, color) {
  return new Promise((res, rej) => {
    if (element) {
      setTimeout(function () {
        element.style.color = color;
      }, time);
      res();
      console.log('promise success');
    } else {
      rej('element not present');
    }
  });
}
