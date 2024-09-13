import Bank from "../src/bank";

// setup
const bank = new Bank();

// Scenario 1
const account = bank.createAccount("John Doe", 29, "587432");
if(account.accountNumber === "587432") {
    console.log("Scenario 1 Passed");
} else {
    console.log("Scenario 1 Failed");
}

// Scenario 2
try {
    const account = bank.createAccount("John Doe", 29, "587432");
    console.log("Scenario 2 Failed");
} catch(_) {
    console.log("Scenario 2 Passed");
}