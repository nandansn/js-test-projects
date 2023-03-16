let book = require('./data')



function display() {
    console.log(this);
}

display.apply(book)