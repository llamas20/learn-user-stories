import Bank from "../src/bank";

// setup
const bank = new Bank();

// Issue 1, Scenario 1
const account = bank.createAccount("John Doe", 29, "587432");
if(account.accountNumber === "587432") {
    console.log("Scenario 1.1 Passed");
} else {
    console.log("Scenario 1.1 Failed");
}

// Issue 1, Scenario 2
try {
    const account = bank.createAccount("John Doe", 29, "587432");
    console.log("Scenario 1.2 Failed");
} catch(_) {
    console.log("Scenario 1.2 Passed");
}

// Issue 2, Scenario 1 & Issue 4, Scenario 1
bank.depositMoney("John Doe", "587432", 500);
if(bank.checkBalance("John Doe", "587432") == 500) {
    console.log("Scenarios 2.1, 4.1 Pass");
} else {
    console.log("Scenarios 2.1, 4.1 Failed");
}

// Issue 2, Scenario 1 & Issue 4, Scenario 1 additional test
bank.depositMoney("John Doe", "587432", 78.25);
if(bank.checkBalance("John Doe", "587432") == 578.25) {
    console.log("Scenarios 2.1, 4.1 Pass");
} else {
    console.log("Scenarios 2.1, 4.1 Failed");
}

// Issue 2, Scenario 2
try {
    bank.depositMoney("Bob Smith", "587432", 500);
    console.log("Scenario 2.2 Failed");
} catch(_) {
    console.log("Scenario 2.2 Pass");
}

// Issue 2, Scenario 2 Alt
try {
    bank.depositMoney("John Doe", "123456", 500);
    console.log("Scenario 2.2 Failed");
} catch(_) {
    console.log("Scenario 2.2 Pass");
}

// Issue 2, Scenario 2 Alt
try {
    bank.depositMoney("John Doe", "5874321", 500);
    console.log("Scenario 2.2 Failed");
} catch(_) {
    console.log("Scenario 2.2 Pass");
}

// Issue 2, Scenario 2 Alt
try {
    bank.depositMoney("Jon Doe", "123456", 500);
    console.log("Scenario 2.2 Failed");
} catch(_) {
    console.log("Scenario 2.2 Pass");
}

// Issue 2, Scenario 3
try {
    bank.depositMoney("John Doe", "587432", -500);
    console.log("Scenario 2.3 Failed");
} catch(_) {
    console.log("Scenario 2.3 Pass");
}

// Issue 2, Scenario 3
try {
    bank.depositMoney("John Doe", "587432", 0);
    console.log("Scenario 2.3 Failed");
} catch(_) {
    console.log("Scenario 2.3 Pass");
}

// Issue 3, Scenario 1 & Issue 4, Scenario 1
bank.withdrawMoney("John Doe", "587432", 100);
if(bank.checkBalance("John Doe", "587432") == 478.25) {
    console.log("Scenarios 3.1, 4.1 Pass");
} else {
    console.log("Scenarios 3.1, 4.1 Failed");
}

// Issue 3, Scenario 1 & Issue 4, Scenario 1 additional test
bank.withdrawMoney("John Doe", "587432", 78.25);
if(bank.checkBalance("John Doe", "587432") == 400) {
    console.log("Scenarios 3.1, 4.1 Pass");
} else {
    console.log("Scenarios 3.1, 4.1 Failed");
}

// Issue 3, Scenario 2
try {
    bank.withdrawMoney("Bob Smith", "587432", 500);
    console.log("Scenario 3.2 Failed");
} catch(_) {
    console.log("Scenario 3.2 Pass");
}

// Issue 3, Scenario 2 Alt
try {
    bank.withdrawMoney("John Doe", "123456", 500);
    console.log("Scenario 3.2 Failed");
} catch(_) {
    console.log("Scenario 3.2 Pass");
}

// Issue 3, Scenario 2 Alt
try {
    bank.withdrawMoney("John Doe", "5874321", 500);
    console.log("Scenario 3.2 Failed");
} catch(_) {
    console.log("Scenario 3.2 Pass");
}

// Issue 3, Scenario 2 Alt
try {
    bank.withdrawMoney("Jon Doe", "123456", 500);
    console.log("Scenario 3.2 Failed");
} catch(_) {
    console.log("Scenario 3.2 Pass");
}

// Issue 3, Scenario 3
try {
    bank.withdrawMoney("John Doe", "587432", -500);
    console.log("Scenario 3.3 Failed");
} catch(_) {
    console.log("Scenario 3.3 Pass");
}

// Issue 3, Scenario 3
try {
    bank.withdrawMoney("John Doe", "587432", 0);
    console.log("Scenario 3.3 Failed");
} catch(_) {
    console.log("Scenario 3.3 Pass");
}

try {
    bank.withdrawMoney("John Doe", "587432", 56123);
    console.log("Scenario 3.3 Failed");
} catch(_) {
    console.log("Scenario 3.3 Pass");
}

// Issue 4, Scenario 2
try {
    let balance = bank.checkBalance("Jon Doe", "587432");
    console.log(balance + "Scenario 4.2 Failed");
} catch(_) {
    console.log("Scenario 4.2 Pass");
}

// Issue 4, Scenario 2
try {
    let balance = bank.checkBalance("John Doe", "5487432");
    console.log(balance + "Scenario 4.2 Failed");
} catch(_) {
    console.log("Scenario 4.2 Pass");
}

// Issue 4, Scenario 2
try {
    let balance = bank.checkBalance("Jon Doe", "5857432");
    console.log(balance + "Scenario 4.2 Failed");
} catch(_) {
    console.log("Scenario 4.2 Pass");
}