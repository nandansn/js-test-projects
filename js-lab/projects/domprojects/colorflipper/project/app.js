const colors = ["green", "red", "rgba(133,122,200)", "#f15025"];


const colorBtn = document.getElementById('btn');
const colorElement = document.querySelector('div.container span.color');

colorBtn.addEventListener('click', function () {
    let index = Math.floor(Math.random() * (colors.length -1));
    colorElement.innerHTML = colors[index];
    document.body.style.backgroundColor = colors[index]
    
})