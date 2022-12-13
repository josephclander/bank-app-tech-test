/* eslint-disable no-plusplus */
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
    const array = this.transactions;
    const formattedArray = [];
    const len = array.length;
    if (len !== 0) {
      for (let i = len - 1; i >= 0; i--) {
        const item = this.#formatTransaction(array[i]);
        formattedArray.push(item);
      }
    }
    return formattedArray;
  }

  #formatTransaction(item) {
    const date = item.date.toLocaleDateString();
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
