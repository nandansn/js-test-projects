function createAccount(name,balance) {
    return {
        name,
        balance
    }
}

function getBalance() {
    
    return this.balance;
}


let nanda1 = createAccount('nanda1',2000);
let nanda2 = createAccount('nanda2',3000);
let nanda3 = createAccount('nanda3',4000);



let mappedBind = [nanda1, nanda2, nanda3].map(obj => {
    return getBalance.bind(obj);
});

mappedBind.forEach(bind => {
    console.log(bind());
})
