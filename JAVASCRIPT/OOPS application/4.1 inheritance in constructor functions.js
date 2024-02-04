function BankAccount(customerName, balance = 0) {    // constructor
    this.customerName = customerName;                // Constructor properties
    this.accountNumber = Date.now();
    this.balance = balance;
}

BankAccount.prototype.deposit = function (amount) {   // constructor methods
    this.balance += amount;
};

BankAccount.prototype.withdraw = function (amount) { // constructor method
    this.balance -= amount;
};

function CurrentAccount(customerName, balance = 0) {    // creatign another constructor function
    BankAccount.call(this, customerName, balance);      // calling BankAccount constructor to be used by the objects of the CurrentAccount function
    this.transactionLimit = 50000;                      // updating the function with more properties
}

CurrentAccount.prototype = Object.create(BankAccount.prototype);   // prototype linking as a part of prototype inheritance

CurrentAccount.prototype.takeBusinessLoan = function (amount) {
    console.log('Taking business loan: ' + amount);
};

function SavingAccount(customerName, balance = 0) {     // creatign another constructor function
    BankAccount.call(this, customerName, balance);      // calling BankAccount constructor to be used by the objects of the SavingAccount function
    this.transactionLimit = 10000;
}
SavingAccount.prototype = Object.create(BankAccount.prototype);     // prototype linking as a part of prototype inheritance

SavingAccount.prototype.takePersonalLoan = function (amount) {
    console.log('Taking personal loan: ' + amount);
};

const rakeshAccount = new SavingAccount('Rakesh K', 500);   //creating an object of Saving account
rakeshAccount.deposit(500);                                 // using fucntions from main constructor by function call & prototype linking
rakeshAccount.withdraw(100);
rakeshAccount.takePersonalLoan(40000);
console.log(rakeshAccount);


const Debjeetccount = new CurrentAccount('Debjeet ghosh', 35000);
console.log(Debjeetccount)
