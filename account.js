// file: account.js

/* Class representing the client's Account */
class Account {
  /**
   * Create an account
   * @param {number} currentBalance
   * @param {[objects]} transactions
   */
  constructor() {
    this.currentBalance = 0;
    this.transactions = [];
  }

  addDeposit(credit) {
    this.currentBalance += credit;
    this.transactions.push({
      date: new Date(),
      credit,
      debit: 0,
      balance: this.currentBalance,
    });
  }

  addWithdrawal(debit) {
    this.currentBalance -= debit;
    this.transactions.push({
      date: new Date(),
      credit: 0,
      debit,
      balance: this.currentBalance,
    });
  }

  listTransactions() {
    return this.transactions;
  }
}

module.exports = Account;
