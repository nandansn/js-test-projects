function bank_account(amount) {
  let balance = 0;
  return {
    deposit() {
      balance += amount;
      return this.showBalance();
    },
    showBalance() {
      return balance;
    },
  };
}

let nanda = bank_account(100);
console.log(nanda.deposit());
console.log(nanda.showBalance());
