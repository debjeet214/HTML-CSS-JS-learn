const BankAccounter = class{    // another way to declare a class
    customerName;
    accountNumber = Date.now();
    balance = 0;

    constructor(customerName, balance = 0){
        this.customerName = customerName;    // properties of the class bankAccount
        this.accountNumber = Date.now();     //  to generate a random account number
        this.balance = balance;    
    }

    deposit(amount){
        this.balance += amount;
    }
    withdrawl(amount){
        this.balance -= amount;
    }
}

const Account1 = new BankAccount('debjeet ghosh', 34200);
console.log(Account1);
Account1.deposit(1200);

const Account2 = new BankAccount('Sneha Ghosh', 1000);
console.log(Account2);
