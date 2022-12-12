# Bank App Plan

Here are the results of my planning session. This is initially how I see the application being laid out.

## Classes

### Account

```js
class Account {
  constructor() {
    balance; // current balance
    transactions; // array of transactions
  }

  addDeposit(amount) {
    // creates a transaction object with
    // date, credit, debit, current balance
  }

  addWithdrawl(amount) {
    // creates a transaction object with
    // date, credit, debit, balance information
  }

  listTransactions() {
    // return the array of transactions
  }

  #getDate() {
    // private method to find the date (maybe formatted)
  }
}

class Display {
  constructor(transactions) {
    transactions; // given array of transaction objects
  }

  #getHeader() {
    // private method to return the header string
  }

  #listTransactions() {
    // private method to return an array of
    // all transactions
  }

  displayTransactions() {
    // return a string of the transactions in the
    // required format
  }
}
```
