// refer the example: /Users/nrangasa/personal/git/js-test-projects/js-lab/projects/oop/js/counter-proto-bind.js


let person = {
    name:'nanda'
}


function display() {

    console.log(this);
    
}

display.bind(person)