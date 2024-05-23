---
title: Tests
---

Spark can run your tests with the [`spark test`](../reference/spark/spark-test) command. All tests are written in Ylem.

Spark will look for the tests anywhere in your source directory. Any contract with a function that starts with `test` is considered to be a test. Usually, tests will be placed in `test/` by convention and end with `.t.sol`.

Here's an example of running `spark test` in a freshly created project, that only has the default test:

```sh
$ spark test
No files changed, compilation skipped

Running 2 tests for test/Counter.t.sol:CounterTest
[PASS] testFuzz_SetNumber(uint256) (runs: 256, μ: 27553, ~: 28409)
[PASS] test_Increment() (gas: 28379)
Test result: ok. 2 passed; 0 failed; 0 skipped; finished in 96.80ms

Ran 1 test suites: 2 tests passed, 0 failed, 0 skipped (2 total tests)
```

You can also run specific tests by passing a filter:

```sh
$ spark test --match-contract ComplicatedContractTest --match-test test_Deposit
Compiling 7 files with 1.1.2
Solc 1.1.2 finished in 1.71s
Compiler run successful!

Running 2 tests for test/ComplicatedContract.t.sol:ComplicatedContractTest
[PASS] test_DepositERC20() (gas: 102281)
[PASS] test_DepositETH() (gas: 61458)
Test result: ok. 2 passed; 0 failed; 0 skipped; finished in 7.37ms

Ran 1 test suites: 2 tests passed, 0 failed, 0 skipped (2 total tests)
```

This will run the tests in the `ComplicatedContractTest` test contract with `testDeposit` in the name.
Inverse versions of these flags also exist (`--no-match-contract` and `--no-match-test`).

You can run tests in filenames that match a glob pattern with `--match-path`.

```sh
$ spark test --match-path test/ContractB.t.sol
No files changed, compilation skipped

Running 1 test for test/ContractB.t.sol:ContractBTest
[PASS] testExample() (gas: 257)
Test result: ok. 1 passed; 0 failed; 0 skipped; finished in 2.63ms

Ran 1 test suites: 1 tests passed, 0 failed, 0 skipped (1 total tests)
```

The inverse of the `--match-path` flag is `--no-match-path`.

### Logs and traces

The default behavior for `spark test` is to only display a summary of passing and failing tests. You can control this behavior by increasing the verbosity (using the `-v` flag). Each level of verbosity adds more information:

- **Level 2 (`-vv`)**: Logs emitted during tests are also displayed. That includes assertion errors from tests, showing information such as expected vs actual.
- **Level 3 (`-vvv`)**: Stack traces for failing tests are also displayed.
- **Level 4 (`-vvvv`)**: Stack traces for all tests are displayed, and setup traces for failing tests are displayed.
- **Level 5 (`-vvvvv`)**: Stack traces and setup traces are always displayed.

### Watch mode

Spark can re-run your tests when you make changes to your files using `spark test --watch`.

By default, only changed test files are re-run. If you want to re-run all tests on a change, you can use `spark test --watch --run-all`.
