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

  addDeposit(amount) {
    this.transactions.push({ date: new Date(), amount, balance: this.balance + amount });
  }

  listTransactions() {
    return this.transactions;
  }
}

module.exports = Account;
