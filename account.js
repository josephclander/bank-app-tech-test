// file: account.js

/**
 * Account class for holding logical info
 * @param {number} balance
 * @param {[objects]} transactions
 */
class Account {
  constructor() {
    this.transactions = [];
  }

  listTransactions() {
    return this.transactions;
  }
}

module.exports = Account;
