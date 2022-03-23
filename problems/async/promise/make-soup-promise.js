function boiling(time) {
    return new Promise((res,rej) => {
        console.log('started boiling...');
        setTimeout(() => {
            console.log('boiling done...');
            res('success')
        }, time)
        
    })

}
boiling(3000).then((data)=> {
    console.log('Add onion..');
    boiling(2000).then((data)=> {
       
        console.log('add carrot...');
        boiling(2000);
    })
    console.log('chop  carrot..');
})





console.log('chop onion...');