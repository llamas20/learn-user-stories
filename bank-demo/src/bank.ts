// The type for all bank accounts in the bank
interface BankAccount {
    name: string;
    age: number;
    accountNumber: string;
    balance: number;
}
/**
 * Bank class that manages all bank accounts in the bank
 */
export default class Bank {
    // Array to store all bank accounts in the bank
    private accounts: BankAccount[] = [];

    /**
     * Method to find a bank account in the bank
     * @param accountNumber Account number of the bank account to find
     * @returns Bank account if found, undefined otherwise
     */
    private findAccount(accountNumber: string): BankAccount | undefined {
        return this.accounts.find(account => account.accountNumber === accountNumber);
    }

    /**
     * Method to find a bank account in the bank with more credentials
     * @param name Account holder name of the bank account to find
     * @param accountNumber Account number of the bank account to find
     * @returns Bank account if found, undefined otherwise
     */
    private findAccountWithName(name: string, accountNumber: string): BankAccount | undefined {
        return this.accounts.find(account => account.accountNumber === accountNumber && account.name === name);
    }

    /**
     * Method to deposit money into a bank account given valid credentials
     * @param name Account holder name of the bank account to deposit into
     * @param account Account number of the bank account to deposit into
     * @param amount Amount to deposit into the account.  Must be positive number.
     */
    public depositMoney(name: string, account: string, amount: number): void {
        const isAccExists = this.findAccountWithName(name, account);
        if(amount > 0) {
            if(isAccExists) {
                isAccExists.balance += amount;
            } else {
                throw new Error("Invalid account credentials")
            }
        } else {
            throw new Error("Invalid deposit amount")
        }
    }

     /**
     * Method to withdraw money into a bank account given valid credentials
     * @param name Account holder name of the bank account to withdraw into
     * @param account Account number of the bank account to withdraw into
     * @param amount Amount to withdraw into the account.  Must be positive number.
     */
    public withdrawMoney(name: string, account: string, amount: number): void {
        const isAccExists = this.findAccountWithName(name, account);
        if(amount > 0) {
            if(isAccExists) {
                if(isAccExists.balance - amount <= 0) {
                    throw new Error("Invalid withdrawal amount")
                } else {
                    isAccExists.balance -= amount;
                }
            } else {
                throw new Error("Invalid account credentials")
            }
        } else {
            throw new Error("Invalid withdrawal amount")
        }
    }

    /**
     * Checks the balance for the given 
     * @param name Account holder name for the account to be checked
     * @param account Account number for the account to be checked
     * @returns The balance for the account.  Error if the account credentials are invalid
     */
    public checkBalance(name: string, account: string): number {
        const isAccExists = this.findAccountWithName(name, account);
        if(isAccExists) {
            return isAccExists.balance
        } else {
            throw new Error("Invalid account credentials");
        }
    }

    /**
     * Creates a new account with a unique account number
     * @param name -- name of the customer
     * @param age  -- age of the customer
     * @param accountNumber -- account number of the customer
     * @returns BankAccount -- the created account
     */
    public createAccount(name: string, age: number, accountNumber: string): BankAccount {
        const isAccExists = this.findAccount(accountNumber);
        if(isAccExists) {
            throw new Error("Account already exists");
        }
        const account: BankAccount = {
            name, age, accountNumber, balance: 0
        }
        this.accounts.push(account)
        return account;
    }
}