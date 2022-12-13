// file: e2e/index.test.js
const Account = require('../src/account');
const Display = require('../src/display');

describe('End to End testing of Application', () => {
  it('returns the correct string for one CREDIT of 1000 GBP', () => {
    const clientAccount = new Account();
    clientAccount.addDeposit(1000);
    const accountDisplay = new Display(clientAccount.listTransactions());
    // adding todays date into test
    const todaysDateFormatted = new Date().toLocaleDateString();
    const expected = `date || credit || debit || balance\n${todaysDateFormatted} || 1000.00 || || 1000.00`;
    expect(accountDisplay.displayTransactions()).toEqual(expected);
  });
});
