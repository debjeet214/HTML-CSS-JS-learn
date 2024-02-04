class BankAccount {
    customerName;
    accountNumber;
    #balance = 0;     // private property can be only accessed through a function in the class not from outside

    constructor(customerName, balance = 0) {
        this.customerName = customerName;
        this.accountNumber = Date.now();
        this.#balance = balance;
    }

    deposit(amount) {
        this.#balance += amount;
    }

    withdraw(amount) {
        this.#balance -= amount;
    }

    set balance(amount) {   // this seems balance method but it is the set keyword making the balance property update & take input directly
        if (isNaN(amount)) {
            throw new Error('Amount is not a valid input');
        }
        this.#balance = amount;
    }

    get balance() {
        return this.#balance;
    }
}

class CurrentAccount extends BankAccount {
    transactionLimit = 50000;

    constructor(customerName, balance = 0) {
        super(customerName, balance);
    }

    #calculateInterest(amount) {             // private method 
        console.log('Calculating interest');
    }

    takeBusinessLoan(amount) {
        // Logic
        this.#calculateInterest(amount);
        console.log('Taking business loan: ' + amount);
    }
}

const rakeshAccount = new CurrentAccount('Rakesh K', 2000);
// rakeshAccount.setBalance(400);
rakeshAccount.balance = 5000;       // see it is used as property not as method to set new balance
rakeshAccount.takeBusinessLoan(40000);
console.log(rakeshAccount);
