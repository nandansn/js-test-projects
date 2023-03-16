let _ = require('loadash')

function sum(a,b) {
    return a + b
}

function curry(func) {

    return function(a) {
        return function(b) {
            return func(a,b)
        }
        
    }
    
}


let curryied = curry(sum);


console.log(curryied(1));
console.log(curryied(1)(2));

