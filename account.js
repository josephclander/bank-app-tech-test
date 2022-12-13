// file: account.js

/* Class representing the client's Account */
class Account {
  /**
   * Create an account
   * @param {number} currentBalance
   * @param {[objects]} transactions
   */
  constructor() {
    this.balance = 0;
    this.transactions = [];
  }

  addDeposit(credit) {
    this.balance += credit;
    this.transactions.push({
      date: new Date(),
      credit,
      debit: 0,
      balance: this.balance,
    });
  }

  addWithdrawal(debit) {
    this.balance -= debit;
    this.transactions.push({
      date: new Date(),
      credit: 0,
      debit,
      balance: this.balance,
    });
  }

  listTransactions() {
    return this.transactions;
  }
}

module.exports = Account;
