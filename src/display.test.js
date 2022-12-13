// file: src/display.test.js
const Display = require("./display");

describe("Display", () => {
  it("display a header row only when there are no transactions in the array", () => {
    const accountDisplay = new Display([]);
    const result = "date || credit || debit || balance\n";
    expect(accountDisplay.displayTransactions()).toEqual(result);
  });
});
