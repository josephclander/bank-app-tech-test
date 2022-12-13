// file: index.js

const Account = require('./src/account');
const Display = require('./src/display');

// running the requirements
const clientAccount = new Account();
clientAccount.addDeposit(1000);
clientAccount.addDeposit(2000);
clientAccount.addWithdrawal(500);
const accountDisplay = new Display(clientAccount.listTransactions());

// eslint-disable-next-line no-console
console.log(accountDisplay.displayTransactions());

module.exports = { Account, Display };
