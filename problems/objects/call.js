function createAccount(name,balance) {
    return {
        name,
        balance
    }
}

function getBalance() {
    
    return this.balance;
}

function addDeposit(amount) {
    
    this.balance += amount;
  
    return this.balance;
}


let nanda = createAccount('nanda',1000);

console.log(getBalance.call(nanda));
console.log(addDeposit.call(nanda,100));


let nanda1 = createAccount('nanda1',2000);
let nanda2 = createAccount('nanda2',3000);
let nanda3 = createAccount('nanda3',4000);

[nanda1, nanda2, nanda3].forEach(obj => {
    console.log(getBalance.call(obj));
})


