// - Make soup
//     - chop onion
//     - chop carrots
//     - boli water 10 min
//     - add carrots boil for 5 mins
//     - add onion boil for 5 mins


// we can arrange the steps, like while boiling, we can chop onion and once water boiled add onion, while onion boiling, chop carrot, once onion done add carrot for boling...


console.log('Making Soup');
setTimeout(() => {
    boiling()
},10000)

console.log('Chop onion...');
setTimeout(() => {
    boiling()
},5000)

console.log('Chop Carrot...');
setTimeout(() => {
    boiling()
},5000)

function boiling(tme) {
    console.log('boiling done..');
}

// here we need to do at the background, when we are doing other task