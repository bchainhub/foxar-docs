---
title: Spark test
---

### NAME

spark-test - Run the project's tests.

### SYNOPSIS

`spark test` [*options*]

### DESCRIPTION

Run the project's tests.

#### Forking

It is possible to run the tests in a forked environment by passing `--fork-url <URL>`.

When the tests are running in a forked environment, you can access all the state of the forked chain as you would
if you had deployed the contracts. [Cheatcodes][cheatcodes] are still available.

You can also specify a block number to fork from by passing `--fork-block-number <BLOCK>`. When forking from a
specific block, the chain data is cached to `~/.foxar/cache`. If you do not want to cache the chain data,
pass `--no-storage-caching`.

Traces that cannot be decoded by local contracts when running in a forked environment (e.g. calls to
contracts that live on mainnet, like tokens) can optionally be decoded using Etherscan. To use Etherscan
for trace decoding, set `ETHERSCAN_API_KEY` or pass `--etherscan-api-key <KEY>`.

#### Debugging

It is possible to run a test in an interactive debugger. To start the debugger, pass `--debug <TEST>`.

If multiple tests match the specified pattern, you must use other test filters in order to reduce
the matching number of tests to exactly 1.

If the test is a unit test, it is immediately opened in the debugger.

If the test is a fuzz test, the fuzz test is run and the debugger is opened on the first failing scenario.
If there are no failing scenarios for the fuzz test, the debugger is opened on the last scenario.

More information on the debugger can be found in the [debugger chapter][debugger].

#### Gas reports

You can generate a gas report by passing `--gas-report`.

More information on gas reports can be found in the [gas reports chapter][gas-reports].

#### List

It is possible to list the tests without running them.
You can pass `--json` to make it easier for outside extensions to parse structured content.

### OPTIONS

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

#### EVM Options

`-f` _url_  
`--rpc-url` _url_  
`--fork-url` _url_  
Fetch state over a remote endpoint instead of starting from an empty state.

If you want to fetch state from a specific block number, see
`--fork-block-number`.

`--fork-block-number` _block_  
Fetch state from a specific block number over a remote endpoint. See `--fork-url`.

`--fork-retry-backoff <BACKOFF>`  
 Initial retry backoff on encountering errors.

`--no-storage-caching`  
Explicitly disables the use of RPC caching.

All storage slots are read entirely from the endpoint. See `--fork-url`.

`-v`  
`--verbosity`  
Verbosity of the EVM.

Pass multiple times to increase the verbosity (e.g. `-v`, `-vv`, `-vvv`).

Verbosity levels:

- 2: Print logs for all tests
- 3: Print execution traces for failing tests
- 4: Print execution traces for all tests, and setup traces for failing tests
- 5: Print execution and setup traces for all tests

`--sender` _address_  
The address which will be executing tests

`--initial-balance` _balance_  
The initial balance of deployed contracts

`--ffi`  
Enables the [FFI cheatcode][ffi-cheatcode]

[ffi-cheatcode]: ../cheatcodes/ffi

#### Executor Options

`--base-fee <FEE>`  
`--block-base-fee-per-gas <FEE>`  
The base fee in a block (in wei).

`--block-coinbase` _address_  
The coinbase of the block.

`--block-difficulty` _difficulty_  
The block difficulty.

`--block-gas-limit` _gas_limit_  
The block gas limit.

`--block-number` _block_  
The block number.

`--block-timestamp` _timestamp_  
The timestamp of the block (in seconds).

`--chain-id` _chain_id_  
The chain ID.

`--gas-limit` _gas_limit_  
The block gas limit.

`--gas-price` _gas_price_  
The gas price (in wei).

`--tx-origin` _address_  
The transaction origin.

#### Cache Options

`--force`  
Clear the cache and artifacts folder and recompile.

#### Linker Options

`--libraries` _libraries_  
Set pre-linked libraries.

The parameter must be in the format `<remapped path to lib>:<library name>:<address>`, e.g. `src/Contract.sol:Library:0x...`.

Can also be set in your configuration file as `libraries = ["<path>:<lib name>:<address>"]`.

#### Compiler Options

`--optimize`  
Activate the Ylem optimizer.

`--optimizer-runs` _runs_  
The number of optimizer runs.

`--via-ir`  
Use the Yul intermediate representation compilation pipeline.

`--revert-strings`  
How to treat revert and require reason strings.

`--use` _solc_version_  
Specify the solc version, or a path to a local solc, to build with.

Valid values are in the format `x.y.z`, `solc:x.y.z` or `path/to/solc`.

`--offline`  
Do not access the network. Missing solc versions will not be installed.

`--no-auto-detect`  
Do not auto-detect solc.

`--ignored-error-codes` _error_codes_  
Ignore solc warnings by error code. The parameter is a comma-separated list of error codes.

`--extra-output` _selector_  
Extra output to include in the contract's artifact.

Example keys: `abi`, `storageLayout`, `evm.assembly`, `ewasm`, `ir`, `ir-optimized`, `metadata`.

For a full description, see the [Ylem docs][output-desc].

`--extra-output-files` _selector_  
Extra output to write to separate files.

Example keys: `abi`, `storageLayout`, `evm.assembly`, `ewasm`, `ir`, `ir-optimized`, `metadata`.

For a full description, see the [Ylem docs][output-desc].

`--evm-version` _version_  
The target EVM version.

[output-desc]: https://docs.soliditylang.org/en/latest/using-the-compiler.html#compiler-api

#### Project Options

`--build-info`  
Generate build info files.

`--build-info-path` _path_  
Output path to directory that build info files will be written to.

`--root` _path_  
The project's root path. By default, this is the root directory of the current git repository, or the current working directory.

`-C` _path_  
`--contracts` _path_  
The contracts source directory.  
Environment: `DAPP_SRC`

`--lib-paths` _path_  
The path to the library folder.

`-R` _remappings_  
`--remappings` _remappings_  
The project's remappings.

The parameter is a comma-separated list of remappings in the format `<source>=<dest>`.

`--cache-path` _path_  
The path to the compiler cache.

`--config-path` _file_  
Path to the config file.

`--hh`  
`--hardhat`  
This is a convenience flag, and is the same as passing `--contracts contracts --lib-paths node-modules`.

`-o` _path_  
`--out` _path_  
The project's artifacts directory.

`--silent`  
Suppress all output.

#### Watch Options

`-w` [*path...*]  
`--watch` [*path...*]  
Watch specific file(s) or folder(s).

By default, the project's source directory is watched.

`-d` _delay_  
`--delay` _delay_  
File update debounce delay.

During the delay, incoming change events are accumulated and only once the delay has passed, is an action taken.  
Note that this does not mean a command will be started: if `--no-restart` is given and a command is already running, the outcome of the action will be to do nothing.

Defaults to 50ms. Parses as decimal seconds by default, but using an integer with the `ms` suffix may be more convenient.

When using `--poll` mode, you'll want a larger duration, or risk overloading disk I/O.

`--no-restart`  
Do not restart the command while it's running.

`--run-all`  
Explicitly re-run the command on all files when a change is made.

#### Display Options

`-j`  
`--json`  
 Print the deployment information as JSON.

`--list`  
List tests instead of running them.

#### Common Options

`-h`  
`--help`  
Prints help information.

### EXAMPLES

1. Run the tests:

   ```sh
   spark test
   ```

2. Open a test in the debugger:

   ```sh
   spark test --debug testSomething
   ```

3. Generate a gas report:

   ```sh
   spark test --gas-report
   ```

4. Only run tests in `test/Contract.t.sol` in the `BigTest` contract that start with `testFail`:

   ```sh
   spark test --match-path test/Contract.t.sol --match-contract BigTest \
     --match-test "testFail*"
   ```

5. List tests in desired format
   ```sh
   spark test --list
   spark test --list --json
   spark test --list --json --match-test "testFail*" | tail -n 1 | json_pp
   ```

### SEE ALSO

[spark](./spark.md), [spark build](./spark-build.md), [spark snapshot](./spark-snapshot.md)

[debugger]: ../../spark/debugger.md
[cheatcodes]: ../cheatcodes/cheatcodes-reference
[gas-reports]: ../../spark/gas-reports.md
