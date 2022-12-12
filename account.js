// file: account.js

/* Class representing the client's Account */
class Account {
  /**
   * Create an account
   * @param {number} balance
   * @param {[objects]} transactions
   */
  constructor() {
    this.transactions = [];
  }

  addDeposit(amount) {
    this.transactions.push({ amount });
  }

  listTransactions() {
    return this.transactions;
  }
}

module.exports = Account;
