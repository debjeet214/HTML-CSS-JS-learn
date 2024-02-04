function BankAccount(customerName, balance = 0) {
    this.customerName = customerName;
    this.accountNumber = Date.now();
    this.balance = balance;
}

const accounts = [];
const accountForm = document.querySelector('#accountForm');
const depositForm = document.querySelector('#depositForm');
const withdrawlForm = document.querySelector('#withdrawlForm');

accountForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const customerNameInput = document.querySelector('#customerName');
    const balanceInput = document.querySelector('#balance');
    
    if (customerNameInput && balanceInput) {
        const account = new BankAccount(customerNameInput.value, +balanceInput.value);
        accounts.push(account);
        console.log(accounts);
    } else {
        console.error("One or more input fields not found.");
    }
});

depositForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const accountNumberInput = document.querySelector('#accountNumber');
    const amountInput = document.querySelector('#amount');
    
    if (accountNumberInput && amountInput) {
        const account = accounts.find(
            (account) => account.accountNumber === +accountNumberInput.value
        );
        if (account) {
            account.deposit(+amountInput.value);
            console.log(accounts);
        } else {
            console.error("Account not found.");
        }
    } else {
        console.error("One or more input fields not found.");
    }
});

withdrawlForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const accountNumberInput = document.querySelector('#accountNumber');
    const amountInput = document.querySelector('#amount');
    
    if (accountNumberInput && amountInput) {
        const account = accounts.find(
            (account) => account.accountNumber === +accountNumberInput.value
        );
        if (account) {
            account.withdraw(+amountInput.value);
            console.log(accounts);
        } else {
            console.error("Account not found.");
        }
    } else {
        console.error("One or more input fields not found.");
    }
});
