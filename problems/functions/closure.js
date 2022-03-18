function outer() {
    let name = 'nanda'
    return function inner() {
        console.log(name);
    }
}


let test = outer();

test();

outer()();