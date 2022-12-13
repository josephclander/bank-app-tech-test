/* eslint-disable class-methods-use-this */
// file: src/display.js

/* Class to show account statements at given time */
class Display {
  /**
   * Create access to display functions
   * @param {[objects]} transactions
   */
  constructor(transactions) {
    this.transactions = transactions;
  }

  #listTransactions() {
    let listItemsString;
    if (this.transactions.length !== 0) {
      const item = this.transactions[0];
      listItemsString = this.#formatTransaction(item);
    }
    return [listItemsString];
  }

  #formatTransaction(item) {
    const { date } = item;
    const credit = item.credit === 0 ? '' : `${item.credit.toFixed(2)} `;
    const debit = item.debit === 0 ? '' : `${item.debit.toFixed(2)} `;
    const balance = item.balance.toFixed(2);
    return `${date} || ${credit}|| ${debit}|| ${balance}`;
  }

  displayTransactions() {
    const header = 'date || credit || debit || balance';
    return [header, ...this.#listTransactions()].join('\n');
  }
}

module.exports = Display;
