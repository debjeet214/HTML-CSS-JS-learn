
function BankAccount(customerName, balance = 0) {
    this.customerName = customerName;
    this.accountNumber = Date.now();
    this.balance = balance;
    this.deposit = function(amount) {
        this.balance += amount;
    };
    this.withdraw = function(amount) {
        this.balance -= amount;
    };
}

const accounts = [];

document.addEventListener('DOMContentLoaded', function() {
    const accountForm = document.querySelector('#accountForm');
    const depositForm = document.querySelector('#depositForm');
    const withdrawlForm = document.querySelector('#withdrawlForm');

    accountForm.addEventListener('submit', function(e) {
        e.preventDefault();
        const customerNameInput = document.querySelector('#customerName');
        const balanceInput = document.querySelector('#balance');
        const account = new BankAccount(customerNameInput.value, +balanceInput.value);
        accounts.push(account);
        console.log(accounts);
        // Optionally, you can clear the form inputs here
        customerNameInput.value = '';
        balanceInput.value = '';
    });

    depositForm.addEventListener('submit', function(e) {
        e.preventDefault();
        const accountNumberInput = document.querySelector('#accountNumber');
        const amountInput = document.querySelector('#amount');
        const account = accounts.find(account => account.accountNumber === +accountNumberInput.value);
        if (account) {
            account.deposit(+amountInput.value);
            console.log(accounts);
        } else {
            console.error('Account not found');
        }
        // Optionally, you can clear the form inputs here
        accountNumberInput.value = '';
        amountInput.value = '';
    });

    withdrawlForm.addEventListener('submit', function(e) {
        e.preventDefault();
        const accountNumberInput = document.querySelector('#accountNumber');
        const amountInput = document.querySelector('#amount');
        const account = accounts.find(account => account.accountNumber === +accountNumberInput.value);
        if (account) {
            account.withdraw(+amountInput.value);
            console.log(accounts);
        } else {
            console.error('Account not found');
        }
        // Optionally, you can clear the form inputs here
        accountNumberInput.value = '';
        amountInput.value = '';
    });
});

