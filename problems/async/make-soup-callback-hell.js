// - Make soup
//     - chop onion
//     - chop carrots
//     - boli water 10 min
//     - add carrots boil for 5 mins
//     - add onion boil for 5 mins


boiling(10000)
console.log('chop onion...');

function boiling(time) {
    console.log('start boiling water...');
    setTimeout(() => { 
        
        console.log('boiling done');
        console.log('add chopped onion...');
        setTimeout(()=> {
            console.log('onion boiled...');
            console.log('add chopped carrots...');
            setTimeout(() => {
                console.log('carrot boiled...soup done');
            },5000)
        }, 5000);
        console.log('chop carrots...');
        
    }, time);
    
}