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
    this.transactions.push({ date: new Date(), credit, debit: 0, balance: this.balance + credit });
  }

  addWithdrawal(debit) {
    this.transactions.push({ date: new Date(), credit: 0, debit, balance: this.balance + debit });
  }

  listTransactions() {
    return this.transactions;
  }
}

module.exports = Account;
