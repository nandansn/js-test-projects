let sum = function (a, b) {
    return a + b;
}

function calc(a, b, sumFun) {

    let c = sumFun(a, b);


    return function () {
        console.log(c);
    }
    
}

let res = calc(1,2, sum)

res();