const hex = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];


const colorBtn = document.getElementById('btn');
const colorElement = document.querySelector('div.container span.color');

colorBtn.addEventListener('click', function () {
    
    let color = '#'+getColorValue();
    colorElement.innerHTML = color;
    document.body.style.backgroundColor = color;
    
})

function getColorValue() {
    let colorValue = ''
    let num = 6;
    while (num >= 0) {
        let index = Math.floor(Math.random() * 14);

        colorValue =  colorValue.concat(hex[index]);

    }

    return colorValue;
}