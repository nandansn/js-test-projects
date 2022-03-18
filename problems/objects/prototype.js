function Account(name, balance) {
    this.name = name;
    this.balance = balance;
}

Account.prototype.deposit = function (amount) {
    this.balance+=amount;
}

Account.prototype.checkBalance = function () {
    console.log(this.balance)
}


let nanda = new Account('nanda', 1000)

nanda.checkBalance();
nanda.deposit(300);
nanda.checkBalance();

let kumar = new Account('kumar', 500)

kumar.checkBalance();
kumar.deposit(500);
kumar.checkBalance();