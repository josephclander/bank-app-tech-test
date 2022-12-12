// file: account.test.js
const Account = require('./account');

describe('Account', () => {
  it('constructs with an empty array of transactions', () => {
    const clientAccount = new Account();
    expect(clientAccount.listTransactions()).toEqual([]);
  });
});
