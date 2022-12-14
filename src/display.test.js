// file: src/display.test.js
const Display = require('./display');

describe('Display', () => {
  it('display a header row only when there are no transactions in the array', () => {
    const accountDisplay = new Display([]);
    const result = 'date || credit || debit || balance';
    expect(accountDisplay.displayTransactions()).toEqual(result);
  });
  it('displays the numeric values for one CREDIT transaction (ignoring date)', () => {
    const mockDate = new Date('2023-01-10');
    const mockCredit = {
      date: mockDate,
      credit: 1000,
      debit: 0,
      balance: 1000,
    };
    const accountDisplay = new Display([mockCredit]);
    // this would be the FULL correct string:
    // "date || credit || debit || balance\n10/01/2023 || 1000.00 || || 1000.00";
    const result = ' || 1000.00 || || 1000.00';
    expect(accountDisplay.displayTransactions()).toContain(result);
  });
  it('displays the numeric values for one DEBIT transaction (ignoring date)', () => {
    const mockDate = new Date('2023-01-10');
    const mockCredit = {
      date: mockDate,
      credit: 0,
      debit: 500,
      balance: -500,
    };
    const accountDisplay = new Display([mockCredit]);
    // this would be the FULL correct string:
    // "date || credit || debit || balance\n10/01/2023 || || 500.00 || -500.00";
    const result = ' || || 500.00 || -500.00';
    expect(accountDisplay.displayTransactions()).toContain(result);
  });
  it('displays the correct formatted DATE for one transaction', () => {
    const mockDate = new Date('2023-01-10');
    const mockCredit = {
      date: mockDate,
      credit: 0,
      debit: 500,
      balance: -500,
    };
    const accountDisplay = new Display([mockCredit]);
    const result = `date || credit || debit || balance\n${mockDate.toLocaleDateString()} || || 500.00 || -500.00`;
    expect(accountDisplay.displayTransactions()).toEqual(result);
  });
  it('displays shows multiple transactions most recent at the top', () => {
    const mock1 = {
      date: new Date('2023-01-10'),
      credit: 1000,
      debit: 0,
      balance: 1000,
    };
    const mock2 = {
      date: new Date('2023-01-13'),
      credit: 2000,
      debit: 0,
      balance: 3000,
    };
    const mock3 = {
      date: new Date('2023-01-14'),
      credit: 0,
      debit: 500,
      balance: 2500,
    };
    const accountDisplay = new Display([mock1, mock2, mock3]);
    const result = `date || credit || debit || balance\n${mock3.date.toLocaleDateString()} || || 500.00 || 2500.00\n${mock2.date.toLocaleDateString()} || 2000.00 || || 3000.00\n${mock1.date.toLocaleDateString()} || 1000.00 || || 1000.00`;
    expect(accountDisplay.displayTransactions()).toEqual(result);
  });
});
