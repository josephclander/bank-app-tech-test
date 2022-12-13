# Bank App Plan

Here are the results of my planning session. This is initially how I see the application being laid out.

## Considerations

A full featured banking app will contain more aspects than are mentioned in the requirements. I'm attempting to make as few assumptions about extra features that would be used and adhere to meeting the requirements as closely as possible.

In my current plan, I am separating the banking logic from the display functions. I have also considered creating a 3rd class, `Transaction` but am leaving this currently but is possible for a refactor.

The requirements need the display to show the balance at the point of that transaction. To keep business and UI separate, I am adding the calculation for the balance and adding that to the transaction object at the point it is created.

## Classes

### Account

```js
class Account {
  constructor() {
    balance; // current balance
    transactions; // array of transactions
  }

  addDeposit(amount) {
    // creates a CREDIT transaction object with
    // date, credit, debit, balance at transaction
  }

  addWithdrawl(amount) {
    // creates a DEBIT transaction object with
    // date, credit, debit, balance at transaction
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
