// Constructor Function

function BankAccount(customerName, balance = 0){
    this.customerName = customerName;    // properties of the class bankAccount
    this.accountNumber = Date.now();     //  to generate a random account number
    this.balance = balance;              //  to input balance

    this.deposit = function(amount) {    // class method to deposit money with function keyword
        this.balance += amount;
    }

    this.withdrawl = (amount) =>{       // arrow method in class to withdrawl money from account
        this.balance -= amount;
    }
}

// Objects of the class  (prototype is object fo this)

const account1 = new BankAccount('Debjeet', 4000)  
const account2 = new BankAccount('Mitali', 5000)
const account3 = new BankAccount('Sneha')  // as no balance is given by default the balance will be 0

account1.deposit(30200)
account2.withdrawl(1000)

account3.deposit(1200)

console.log(account1, account2, account3);  // output on console
