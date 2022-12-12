// file: account.test.js
const Account = require('./account');

describe('Account', () => {
  it('constructs with an empty array of transactions', () => {
    const clientAccount = new Account();
    expect(clientAccount.listTransactions()).toEqual([]);
  });
  it('adds one transaction that contains an amount of 1000 GBP', () => {
    const clientAccount = new Account();
    clientAccount.addDeposit(1000);
    const firstTransactionAmount = clientAccount.listTransactions()[0].amount;
    expect(clientAccount.listTransactions()).not.toEqual([]);
    expect(firstTransactionAmount).toEqual(1000);
  });
});
