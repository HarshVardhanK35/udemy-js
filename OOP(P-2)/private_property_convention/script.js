class Wallet {
  constructor() {
    this._balance = 0;
    this._transactions = [];
  }
  deposit(amount) {
    this._processDeposits(amount)
    this._balance = this._balance + amount;
  }
  withdraw = function (amount) {
    if(amount > this._balance){
      console.log('Not Enough Balance')
      return
    }
    this._processWithdraw(amount)
    this._balance = this._balance - amount
  }
  _processDeposits(amount){
    console.log(`depositing... INR ${amount}`)
    this._transactions.push({
      type: 'deposit',
      amount: amount
    })
  }
  _processWithdraw(amount){
    console.log(`withdrawing... amount ${amount}`)
    this._transactions.push({
      type: 'withdraw',
      amount: amount
    })
  }

  get getTransactions(){
    return (this._transactions)
  }
  get getBalance(){
    return (this._balance)
  }
}

const myWallet = new Wallet();
myWallet.deposit(300);
myWallet.withdraw(50)

console.log(myWallet.getBalance);
console.log(myWallet.getTransactions)
