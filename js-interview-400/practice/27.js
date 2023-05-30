function counter() {

    let count = 0;

    return function () {
        return ++count;
    }
    
}


let increcement = counter();


console.log(increcement());
console.log(increcement());
console.log(increcement());