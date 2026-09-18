/**
 * A digital wallet application stores information about a user's account.
 * 
 * A wallet has:
 * - Owner name
 * - Wallet ID
 * - Balance
 * 
 * For example, Jude Bellingham creates a wallet with:
 * | Property        | Value           |
 * | --------------- | --------------- |
 * | Wallet ID       | WAL001          |
 * | Owner           | Harry Maguire   |
 * | Initial Balance | Rp500,000       |
 * 
 * The application allows the user to:
 * - Deposit money
 * - Withdraw money
 * - Check the current balance
 * However, the balance must not be changed directly from outside the class.
 * 
 * Student Tasks:
 * Create: class DigitalWallet
 * Use:
 * - private balance: number;
 * 
 * The class should provide public methods:
 * - deposit(amount)
 * - withdraw(amount)
 * - getBalance()
 * - showWalletInfo()
 * 
 * Business Rules
 * deposit():
 * - Amount must be greater than 0.
 * 
 * withdraw():
 * - Amount must be greater than 0.
 * - Amount cannot exceed the current balance.
 */

class DigitalWallet{
    private balance : number;
    WalletID:string;
    Owner:string;
    
    constructor(initialBalance:number, WalletID:string, Owner:string){
        this.balance = initialBalance;
        this.WalletID = WalletID;
        this.Owner = Owner;
    }

    getBalance(): number{
        return this.balance
    }

    deposit(amount:number):void{
    if(amount > 0){
        this.balance += amount
        console.log(`=====================`);
        console.log(`Deposited: ${amount}`);
    }else{
        console.log(`Invalid amount`);
    }
    }

    showWalletInfo():void{
        console.log(`====== profile ======`);
        console.log(`WalletID: ${this.WalletID}`);
        console.log(`Owner: ${this.Owner}`);
        console.log(`Balance: ${this.balance}`);
        console.log(`=====================`);
    }

    Info():void{
        
    }

    withdraw(amount: number): void {
    if (amount > 0 && amount <= this.balance) {
        this.balance -= amount;
        console.log(`=====================`);
        console.log("Withdrawn: " + amount);
    } else {
        console.log("Invalid amount");
    }
  }
}
const user1 = new DigitalWallet(10000,"CH102","Mesii")
user1.deposit(10000)
user1.withdraw(15000)

user1.showWalletInfo()




