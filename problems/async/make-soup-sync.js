// - Make soup
//     - chop onion
//     - chop carrots
//     - boli water 10 min
//     - add carrots boil for 5 mins
//     - add onion boil for 5 mins


console.log('Make Soup');


console.log('Chop Onion');
console.log('Chop Carrots');
boiling(1000)
console.log('Add Carrot');
boiling(500)
console.log('Add Onion');
boiling(500)

function boiling(time) {
    for (let index = 0; index < time; index++) {
       console.log('boling...');
        
    }

    console.log('boiling done');
}

