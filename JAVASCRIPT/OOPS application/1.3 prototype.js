BankAccount.prototype.test = 'this is a test';
console.log(BankAccount.prototype);

function BankAccount(customerName, balance = 0) {
    this.customerName = customerName;
    this.accountNumber = Date.now();
    this.balance = balance;
}

const rakeshAccount = new BankAccount('Rakesh K');
const johnAccount = new BankAccount('John Doe', 1000);
// console.log(rakeshAccount, johnAccount);

BankAccount.prototype.deposit = function (amount) {
    this.balance += amount;
};

BankAccount.prototype.withdraw = (amount) => {
    this.balance -= amount;
};

johnAccount.deposit(3000);  // accessing the deposit method without having it in the BankAccount but from the prototype of BankAccount

console.log(johnAccount);
