function makeSoup() {

    boilWater();
    
    
}

function boilWater() {
    setTimeout(() => {
        console.log('water boiling done, adding carrot...');
        setTimeout(() => {
            console.log('carrot boiling done, adding onion...');
            setTimeout(() => {
                console.log('onion boiling done');
            }, 2000);
        }, 2000);
        console.log("chop onion");
    }, 3000);
    console.log('chop carrot');
}

makeSoup()