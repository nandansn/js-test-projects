const h1 = document.querySelector('.one');
const h2 = document.querySelector('.two');
const h3 = document.querySelector('.three');

const btn = document.getElementById('color');

btn.addEventListener('click', function (e) {
  setTimeout(() => {
    h1.style.color = 'red';
    setTimeout(() => {
      h2.style.color = 'green';
      setTimeout(() => {
        h3.style.color = 'blue';
      }, 1000);
      console.log(h3.textContent);
    }, 1000);
    console.log(h2.textContent);
  }, 1000);
  console.log(h1.textContent);
});
