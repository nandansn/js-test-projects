function boilWater(time) {

    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve('done')
        }, time);
    });
    
}

function makeSoup() {
    
    boilWater(3000).then((d) => {
        console.log('water boiled');
        console.log("add carrot...boil it...");
        console.log("chop onion");
        return boilWater(2000)
    }).then((d) => {
        console.log('carrot boiling ', d);
        console.log('add onion...boil it...');
        return boilWater(5000)
    }).then((d) => {
        console.log('onion boiling ', d);
    })
    console.log('chop carrot');
}

makeSoup()