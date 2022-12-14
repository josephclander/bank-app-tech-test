// file: src/account.js

/* Class representing the client's Account */
class Account {
  /**
   * Create an account
   * @param {number} currentBalance
   * @param {[objects]} transactions
   */

  // constructor() {
  //   this.currentBalance = 0;
  //   this.transactions = [];
  // }

    #currentBalance = 0;
    #transactions = [];

  addDeposit(credit) {
    try {
      if (credit > 0 && typeof credit === 'number') {
        this.#currentBalance += credit;
        this.#transactions.push({
          date: new Date(),
          credit,
          debit: 0,
          balance: this.#currentBalance,
        });
        return 'deposit added';
      }
      throw Error('Invalid credit input');
    } catch (err) {
      return err.message;
    }
  }

  addWithdrawal(debit) {
    try {
      if (debit > 0 && typeof debit === 'number') {
        this.#currentBalance -= debit;
        this.#transactions.push({
          date: new Date(),
          credit: 0,
          debit,
          balance: this.#currentBalance,
        });
        return 'withdrawal added';
      }
      throw Error('Invalid debit input');
    } catch (err) {
      return err.message;
    }
  }

  listTransactions() {
    // beware not full encapsulation - one level copy
    // cannot add or subtract transactions
    // but they can be manipulated
    return [...this.#transactions];
  }
}

module.exports = Account;
