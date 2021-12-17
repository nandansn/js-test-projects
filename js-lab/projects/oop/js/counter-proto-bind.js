function Counter(element, value) {
    this.value = value
    this.rst = element.querySelector('div.btn button.btn.rst')
    this.inc = element.querySelector('div.btn button.btn.inc')
    this.dcr = element.querySelector('div.btn button.btn.dcr')

    this.incr = this.increase.bind(this)
    this.decr = this.decrease.bind(this)
    this.rset = this.reset.bind(this)


    this.inc.addEventListener('click', this.incr)
    this.dcr.addEventListener('click', this.decr)
    this.rst.addEventListener('click', this.rset)
    
    
}

Counter.prototype.increase = function () {
    this.value.innerText = parseInt(this.value.innerText) + 1
    
}

Counter.prototype.decrease = function () {
        
    if (parseInt(this.value.innerText) === 0) {
        this.value.innerText = 0
    } else {
        this.value.innerText = parseInt(this.value.innerText) - 1
    }
    
}

Counter.prototype.reset = function () {
        
    this.value.innerText = 0
}




let firstCtrElement = document.querySelector('div.first-counter')
let secondCtrElement = document.querySelector('div.second-counter')

let firstCounter = new Counter(firstCtrElement, firstCtrElement.querySelector('span.ctr-head.first'));
let secondCounter = new Counter(secondCtrElement, secondCtrElement.querySelector('span.ctr-head.second'));



