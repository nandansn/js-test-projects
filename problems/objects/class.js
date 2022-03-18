class Account {
    

    constructor(name, balance) {
        this.name = name;
        this.balance = balance;

    }

    getBalance() {
        return this.balance;
    }

    addAmount(amount) {
        this.balance += this.balance;
        return this.balance;
    }
}

let nanda = new Account('nanda', 200);

console.log(nanda.getBalance());
console.log(nanda.addAmount(100));