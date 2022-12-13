// file: src/display.js

/* Class to show account statements at given time */
class Display {
  constructor(transactions) {
    this.transactions = transactions;
  }

  #getHeader() {
    // private method to return the header string
    return "date || credit || debit || balance";
  }

  #listTransactions() {
    // private method to return an array of
    // all transactions
    let listItemsString;
    if (this.transactions.length != 0) {
      const item = this.transactions[0];
      const date = item.date;
      const credit = item.credit === 0 ? "" : `${item.credit.toFixed(2)} `;
      const debit = item.debit === 0 ? "" : `${item.debit.toFixed(2)} `;
      const balance = item.balance.toFixed(2);
      listItemsString = `${date} || ${credit}|| ${debit}|| ${balance}`;
    }
    return [listItemsString];
  }

  displayTransactions() {
    return [this.#getHeader(), ...this.#listTransactions()].join("\n");
  }
}

module.exports = Display;
