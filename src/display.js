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
    // check for items in array
    if (len !== 0) {
      // for loop to reverse order
      // .map would be messy or involve adding second
      // level of algorithmic complexity by sorting first
      for (let i = len - 1; i >= 0; i--) {
        const item = this.#formatTransaction(array[i]);
        formattedArray.push(item);
      }
    }
    return formattedArray;
  }

  #formatTransaction(item) {
    // unfortunately this does not take effect in GitHub actions node.js runner
    const date = item.date.toLocaleDateString('en-GB', {
      timeZone: 'Europe/London',
    });
    const credit = item.credit === 0 ? '' : `${item.credit.toFixed(2)} `;
    const debit = item.debit === 0 ? '' : `${item.debit.toFixed(2)} `;
    const balance = item.balance.toFixed(2);
    const formattedString = `${date} || ${credit}|| ${debit}|| ${balance}`;
    return formattedString;
  }

  displayTransactions() {
    const header = 'date || credit || debit || balance';
    const displayString = [header, ...this.#listTransactions()].join('\n');
    return displayString;
  }
}

module.exports = Display;
