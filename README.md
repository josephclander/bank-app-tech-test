# Bank tech test

[![Tests](https://github.com/josephclander/bank-app-tech-test/actions/workflows/tests.yml/badge.svg)](https://github.com/josephclander/bank-app-tech-test/actions/workflows/tests.yml)

**Tests pass on machines run in the UK - [see note below](#how-to-run-tests)**

## Contents

[The assignment](#the-assignment)

[Requirements](#requirements)

[How to install](#how-to-install)

[How to run](#how-to-run)

[How to run tests](#how-to-run-tests)

## The assignment

Given a client makes a deposit of 1000 on 10-01-2023
And a deposit of 2000 on 13-01-2023
And a withdrawal of 500 on 14-01-2023
When she prints her bank statement
Then she would see

```bash
date || credit || debit || balance
14/01/2023 || || 500.00 || 2500.00
13/01/2023 || 2000.00 || || 3000.00
10/01/2023 || 1000.00 || || 1000.00
```

## Requirements

- You should be able to interact with your code via a REPL.
- Deposits, withdrawal.
- Account statement (date, amount, balance) printing.
- Data can be kept in memory (it doesn't need to be stored to a database or anything).

## How to install

Once you have cloned the repo `cd` into the directory then install node modules:

```bash
npm install
```

## How to run

An example use case of the code is setup in the `index.js` file.
To execute this code run:

```bash
node index.js
```

You should see the example output from the assignment appear in the terminal.

It is also setup to be run in the `Node REPL`.

```bash
node;
const { Account, Display } = require('./index.js');
```

You now have access to the two classes.

## How to run tests

[**A note on tests**] `GitHub actions` were setup to run a `Node.js` build and run the tests. These were successful until a date formatter was introduced. As I am local to the UK and the GitHub servers are located in the US, the date and month are reversed, thus breaking the tests. Despite setting the timezone to GMT in `/gitworkflows` and the local region to the UK in `.toLocalDateString("en-GB")`, GitHub runners do not have UK local outputs built in.

I have not removed this badge as it shows use of CI/CD and I would like to find a solution to this [GitHub issue](https://github.com/actions/runner-images/issues/762).

To run the tests locally, make sure you are in the root directory of the app and run:

```bash
npm run test
```

## Test Coverage

There is full test coverage. To observe this run the script:

```bash
npm run coverage
```

## Notes from the author

The initial [plan for development](./plan.md) is available to view.

- The ongoing balance was added to transaction objects to avoid:
  - numeric logic being added to the `Display` class
  - to create a function aiming for the assignment requirements first and foremost
- Time was spent finding an appropriate `jest matcher` to ensure the date and numbers were tested separately despite being output on the same line.
