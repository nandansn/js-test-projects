class Account {
    bank='NSN'
    constructor(name, initialBalance=0) {
        this.a_name = name;
        this.a_balance = initialBalance;
    }

    deposit(amount) {
        this.a_balance += amount;
        this.balance();
    }

    balance() {
        console.log(this.a_balance)
    }
}

let nanda = new Account('nanda',1000)
nanda.balance()
nanda.deposit(100)
