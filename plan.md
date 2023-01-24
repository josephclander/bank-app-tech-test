# Bank App Plan

Here are the results of my planning session. This is initially how I see the application being laid out.

## Considerations

A full featured banking app will contain more aspects than are mentioned in the requirements. I'm believe extra features such as, calculating daily interest, would potentially change the approach I would take as you may want the current balance to be in a separate class.

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

  #formatDate() {
    // private method to format the date
  }

  displayTransactions() {
    // return a string of the transactions in the
    // required format
  }
}
```
