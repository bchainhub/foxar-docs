#### Test Options

`-m` _regex_  
`--match` _regex_  
Only run test functions matching the specified regex pattern.  
**Deprecated: See `--match-test`.**

`--match-test` _regex_  
Only run test functions matching the specified regex pattern.

`--no-match-test` _regex_  
Only run test functions that do not match the specified regex pattern.

`--match-contract` _regex_  
Only run tests in contracts matching the specified regex pattern.

`--no-match-contract` _regex_  
Only run tests in contracts that do not match the specified regex pattern.

`--match-path` _glob_  
Only run tests in source files matching the specified glob pattern.

`--no-match-path` _glob_  
Only run tests in source files that do not match the specified glob pattern.

`--debug` _regex_  
Run a test in the debugger.

The argument passed to this flag is the name of the test function you want to run, and it works the same as `--match-test`.

If more than one test matches your specified criteria, you must add additional filters until only one test is found (see `--match-contract` and `--match-path`).

The matching test will be opened in the debugger regardless of the outcome of the test.

If the matching test is a fuzz test, then it will open the debugger on the first failure case. If the fuzz test does not fail, it will open the debugger on the last fuzz case.

For more fine-grained control of which fuzz case is run, see [`spark debug`](./spark-debug.md).

`--gas-report`  
Print a gas report.

`--allow-failure`  
Exit with code 0 even if a test fails.

`--fail-fast`  
Stop running tests after the first failure.

`--etherscan-api-key` _key_  
Etherscan API key. If set, traces are decoded using Etherscan if `--fork-url` is also set.  
Environment: `ETHERSCAN_API_KEY`
