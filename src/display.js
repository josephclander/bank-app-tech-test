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
      const date = item.date;
      const credit = item.credit === 0 ? "" : `${item.credit.toFixed(2)} `;
      const debit = item.debit === 0 ? "" : `${item.debit.toFixed(2)} `;
      const balance = item.balance.toFixed(2);
      const listItemsString = `${date} || ${credit}|| ${debit}|| ${balance}`;
      string += listItemsString;
    }
    return string;
  }
}

module.exports = Display;
