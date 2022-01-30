const array1 = Array.of(1,2,3,4)
const reducer = (previousValue, currentValue) => {
    return previousValue + currentValue;
}

// 1 + 2 + 3 + 4
console.log(array1.reduce(reducer));