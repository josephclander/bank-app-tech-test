// file: src/display.js

/* Class to show account statements at given time */
class Display {
  constructor(transactions) {
    this.transactions = transactions;
  }

  displayTransactions() {
    let string = "date || credit || debit || balance\n";
    if (this.transactions.length != 0) {
      const item = this.transactions[0];
      const listItemsString = `${item.date} || ${item.credit.toFixed(
        2
      )} || || ${item.balance.toFixed(2)}`;
      string += listItemsString;
    }
    return string;
  }
}

module.exports = Display;
