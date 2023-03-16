function Counter(element, value) {
    
    this.rst = element.querySelector('div.btn button.btn.rst')
    this.inc = element.querySelector('div.btn button.btn.inc')
    this.dcr = element.querySelector('div.btn button.btn.dcr')
    
    this.rst.addEventListener('click', function () {
        
        value.innerText = 0
    })

    this.inc.addEventListener('click', function () {
        value.innerText = parseInt(value.innerText) + 1
        
    })

    this.dcr.addEventListener('click', function () {
        
        if (parseInt(value.innerText) === 0) {
            value.innerText = 0
        } else {
            value.innerText = parseInt(value.innerText) - 1
        }
        
    })
}






let firstCtrElement = document.querySelector('div.first-counter')
let secondCtrElement = document.querySelector('div.second-counter')

let firstCounter = new Counter(firstCtrElement, firstCtrElement.querySelector('span.ctr-head.first'));
let secondCounter = new Counter(secondCtrElement, secondCtrElement.querySelector('span.ctr-head.second'));



