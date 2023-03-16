let book = require('./data')

function display() {
    console.log(this);    
}


let info = display.bind(book)


setTimeout(() => {

    info()
    
}, 3000);


