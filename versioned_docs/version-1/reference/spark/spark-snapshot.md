---
title: Spark snapshot
---

### NAME

spark-snapshot - Create a snapshot of each test's gas usage.

### SYNOPSIS

`spark snapshot` [*options*]

### DESCRIPTION

Create a snapshot of each test's gas usage.

The results are written to a file named `.gas-snapshot`. You can change the name of the file
by passing `--snap <PATH>`.

Fuzz tests are included by default in the snapshot. They use a static seed to achieve deterministic results.

Snapshots can be compared with `--diff` and `--check`. The first flag will output a diff, and the second
will output a diff _and_ exit with code 1 if the snapshots do not match.

### OPTIONS

#### Snapshot Options

`--asc`  
Sort results by gas used (ascending).

`--desc`  
Sort results by gas used (descending).

`--min` _min_gas_  
Only include tests that used more gas that the given amount.

`--max` _max_gas_  
Only include tests that used less gas that the given amount.

`--tolerance` _threshold_  
Tolerates gas deviations up to the specified percentage (0-100).

`--diff` _path_  
Output a diff against a pre-existing snapshot.

By default the comparison is done with `.gas-snapshot`.

`--check` _path_  
Compare against a pre-existing snapshot, exiting with code 1 if they do not match.

Outputs a diff if the snapshots do not match.

By default the comparison is done with `.gas-snapshot`.

`--snap` _path_  
Output file for the snapshot. Default: `.gas-snapshot`.

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

#### Display Options

`-j`  
`--json`  
 Print the deployment information as JSON.

#### Common Options

`-h`  
`--help`  
Prints help information.

### EXAMPLES

1. Create a snapshot:

   ```sh
   spark snapshot
   ```

2. Generate a diff:

   ```sh
   spark snapshot --diff
   ```

3. Check that the snapshots match:
   ```sh
   spark snapshot --check
   ```

### SEE ALSO

[spark](./spark.md), [spark test](./spark-test.md)
