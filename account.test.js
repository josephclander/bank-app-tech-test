// file: account.test.js
const Account = require("./account");

describe("Account", () => {
  it("constructs with an empty array of transactions", () => {
    const clientAccount = new Account();
    expect(clientAccount.listTransactions()).toEqual([]);
  });
  it("adds one CREDIT transaction that contains an amount of 1000 GBP", () => {
    const clientAccount = new Account();
    clientAccount.addDeposit(1000);
    const firstTransactionCredit = clientAccount.listTransactions()[0].credit;
    expect(clientAccount.listTransactions()).not.toEqual([]);
    expect(firstTransactionCredit).toEqual(1000);
  });
  it("adds one CREDIT transaction and updates the transaction obj balance", () => {
    const clientAccount = new Account();
    clientAccount.addDeposit(1000);
    const firstTransactionBalance = clientAccount.listTransactions()[0].balance;
    expect(firstTransactionBalance).toEqual(1000);
  });
  it("adds a date to the transaction object", () => {
    const clientAccount = new Account();
    clientAccount.addDeposit(1000);
    const firstTransactionDate = clientAccount.listTransactions()[0].date;
    expect(firstTransactionDate).toBeInstanceOf(Date);
  });
  it("adds one DEBIT transaction that contains an amount of 500 GBP", () => {
    const clientAccount = new Account();
    clientAccount.addWithdrawal(500);
    const firstTransactionDebit = clientAccount.listTransactions()[0].debit;
    expect(firstTransactionDebit).toEqual(500);
  });
  it("adds one DEBIT transaction and updates the transaction obj balance", () => {
    const clientAccount = new Account();
    clientAccount.addWithdrawal(500);
    const firstTransactionBalance = clientAccount.listTransactions()[0].balance;
    expect(firstTransactionBalance).toEqual(-500);
  });
});
