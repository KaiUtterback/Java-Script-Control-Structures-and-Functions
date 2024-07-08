// Initialize the bank account
const bankAccount = {
    accountHolder: "John Doe",
    balance: 0
};

// Task 1: Function to handle deposits
function deposit(amount) {
    if (amount > 0) {
        bankAccount.balance += amount;
        console.log(`Deposited $${amount}. New balance is $${bankAccount.balance}.`);
    } else {
        console.log("Deposit amount must be positive.");
    }
}

// Task 2: Function to handle withdrawals
function withdraw(amount) {
    if (amount > 0) {
        if (amount <= bankAccount.balance) {
            bankAccount.balance -= amount;
            console.log(`Withdrew $${amount}. New balance is $${bankAccount.balance}.`);
        } else {
            console.log("Insufficient balance.");
        }
    } else {
        console.log("Withdrawal amount must be positive.");
    }
}

// Task 3: Function to check balance
function checkBalance() {
    console.log(`Current balance is $${bankAccount.balance}.`);
    return bankAccount.balance;
}

// Demonstrate functionality
deposit(100);     // Deposit $100
withdraw(50);     // Withdraw $50
checkBalance();   // Check balance
withdraw(100);    // Attempt to withdraw $100 (should fail due to insufficient balance)
checkBalance();   // Check balance again
