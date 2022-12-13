// file: src/display.test.js
const Display = require("./display");

describe("Display", () => {
  it("display a header row only when there are no transactions in the array", () => {
    const accountDisplay = new Display([]);
    const result = "date || credit || debit || balance\n";
    expect(accountDisplay.displayTransactions()).toEqual(result);
  });
  it("displays the numeric values for one CREDIT transaction (ignoring date)", () => {
    const mockDate = new Date("2023-01-10");
    const mockCredit = {
      date: mockDate,
      credit: 1000,
      debit: 0,
      balance: 1000,
    };
    const accountDisplay = new Display([mockCredit]);
    // this would be the FULL correct string:
    // "date || credit || debit || balance\n10/01/2023 || 1000.00 || || 1000.00";
    const result = " || 1000.00 || || 1000.00";
    expect(accountDisplay.displayTransactions()).toContain(result);
  });
  it("displays the numeric values for one DEBIT transaction (ignoring date)", () => {
    const mockDate = new Date("2023-01-10");
    const mockCredit = {
      date: mockDate,
      credit: 0,
      debit: 500,
      balance: -500,
    };
    const accountDisplay = new Display([mockCredit]);
    // this would be the FULL correct string:
    // "date || credit || debit || balance\n10/01/2023 || || 500.00 || -500.00";
    const result = " || || 500.00 || -500.00";
    expect(accountDisplay.displayTransactions()).toContain(result);
  });
});
