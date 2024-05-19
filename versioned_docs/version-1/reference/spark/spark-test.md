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

`-m` *regex*  
`--match` *regex*  
&nbsp;&nbsp;&nbsp;&nbsp;Only run test functions matching the specified regex pattern.  
&nbsp;&nbsp;&nbsp;&nbsp;**Deprecated: See `--match-test`.**

`--match-test` *regex*  
&nbsp;&nbsp;&nbsp;&nbsp;Only run test functions matching the specified regex pattern.

`--no-match-test` *regex*  
&nbsp;&nbsp;&nbsp;&nbsp;Only run test functions that do not match the specified regex pattern.

`--match-contract` *regex*  
&nbsp;&nbsp;&nbsp;&nbsp;Only run tests in contracts matching the specified regex pattern.

`--no-match-contract` *regex*  
&nbsp;&nbsp;&nbsp;&nbsp;Only run tests in contracts that do not match the specified regex pattern.

`--match-path` *glob*  
&nbsp;&nbsp;&nbsp;&nbsp;Only run tests in source files matching the specified glob pattern.

`--no-match-path` *glob*  
&nbsp;&nbsp;&nbsp;&nbsp;Only run tests in source files that do not match the specified glob pattern.

`--debug` *regex*  
&nbsp;&nbsp;&nbsp;&nbsp;Run a test in the debugger.

&nbsp;&nbsp;&nbsp;&nbsp;The argument passed to this flag is the name of the test function you want to run, and it works the same as `--match-test`.

&nbsp;&nbsp;&nbsp;&nbsp;If more than one test matches your specified criteria, you must add additional filters until only one test is found (see `--match-contract` and `--match-path`).

&nbsp;&nbsp;&nbsp;&nbsp;The matching test will be opened in the debugger regardless of the outcome of the test.

&nbsp;&nbsp;&nbsp;&nbsp;If the matching test is a fuzz test, then it will open the debugger on the first failure case. If the fuzz test does not fail, it will open the debugger on the last fuzz case.

&nbsp;&nbsp;&nbsp;&nbsp;For more fine-grained control of which fuzz case is run, see [`spark debug`](./spark-debug.md).

`--gas-report`  
&nbsp;&nbsp;&nbsp;&nbsp;Print a gas report.

`--allow-failure`  
&nbsp;&nbsp;&nbsp;&nbsp;Exit with code 0 even if a test fails.

`--fail-fast`  
&nbsp;&nbsp;&nbsp;&nbsp;Stop running tests after the first failure.

`--etherscan-api-key` *key*  
&nbsp;&nbsp;&nbsp;&nbsp;Etherscan API key. If set, traces are decoded using Etherscan if `--fork-url` is also set.  
&nbsp;&nbsp;&nbsp;&nbsp;Environment: `ETHERSCAN_API_KEY`

#### EVM Options

`-f` *url*  
`--rpc-url` *url*  
`--fork-url` *url*  
&nbsp;&nbsp;&nbsp;&nbsp;Fetch state over a remote endpoint instead of starting from an empty state.

&nbsp;&nbsp;&nbsp;&nbsp;If you want to fetch state from a specific block number, see
`--fork-block-number`.

`--fork-block-number` *block*  
&nbsp;&nbsp;&nbsp;&nbsp;Fetch state from a specific block number over a remote endpoint. See `--fork-url`.

`--fork-retry-backoff <BACKOFF>`  
&nbsp;&nbsp;&nbsp;&nbsp; Initial retry backoff on encountering errors.

`--no-storage-caching`  
&nbsp;&nbsp;&nbsp;&nbsp;Explicitly disables the use of RPC caching.

&nbsp;&nbsp;&nbsp;&nbsp;All storage slots are read entirely from the endpoint. See `--fork-url`.

`-v`  
`--verbosity`  
&nbsp;&nbsp;&nbsp;&nbsp;Verbosity of the EVM.

&nbsp;&nbsp;&nbsp;&nbsp;Pass multiple times to increase the verbosity (e.g. `-v`, `-vv`, `-vvv`).

&nbsp;&nbsp;&nbsp;&nbsp;Verbosity levels:  
&nbsp;&nbsp;&nbsp;&nbsp;- 2: Print logs for all tests  
&nbsp;&nbsp;&nbsp;&nbsp;- 3: Print execution traces for failing tests  
&nbsp;&nbsp;&nbsp;&nbsp;- 4: Print execution traces for all tests, and setup traces for failing tests  
&nbsp;&nbsp;&nbsp;&nbsp;- 5: Print execution and setup traces for all tests

`--sender` *address*  
&nbsp;&nbsp;&nbsp;&nbsp;The address which will be executing tests

`--initial-balance` *balance*  
&nbsp;&nbsp;&nbsp;&nbsp;The initial balance of deployed contracts

`--ffi`  
&nbsp;&nbsp;&nbsp;&nbsp;Enables the [FFI cheatcode][ffi-cheatcode]

[ffi-cheatcode]: ../cheatcodes/ffi

#### Executor Options

`--base-fee <FEE>`  
`--block-base-fee-per-gas <FEE>`  
&nbsp;&nbsp;&nbsp;&nbsp;The base fee in a block (in wei).

`--block-coinbase` *address*  
&nbsp;&nbsp;&nbsp;&nbsp;The coinbase of the block.

`--block-difficulty` *difficulty*  
&nbsp;&nbsp;&nbsp;&nbsp;The block difficulty.

`--block-gas-limit` *gas_limit*  
&nbsp;&nbsp;&nbsp;&nbsp;The block gas limit.

`--block-number` *block*  
&nbsp;&nbsp;&nbsp;&nbsp;The block number.

`--block-timestamp` *timestamp*  
&nbsp;&nbsp;&nbsp;&nbsp;The timestamp of the block (in seconds).

`--chain-id` *chain_id*  
&nbsp;&nbsp;&nbsp;&nbsp;The chain ID.

`--gas-limit` *gas_limit*  
&nbsp;&nbsp;&nbsp;&nbsp;The block gas limit.

`--gas-price` *gas_price*  
&nbsp;&nbsp;&nbsp;&nbsp;The gas price (in wei).

`--tx-origin` *address*  
&nbsp;&nbsp;&nbsp;&nbsp;The transaction origin.

#### Cache Options

`--force`  
&nbsp;&nbsp;&nbsp;&nbsp;Clear the cache and artifacts folder and recompile.

#### Linker Options

`--libraries` *libraries*  
&nbsp;&nbsp;&nbsp;&nbsp;Set pre-linked libraries.

&nbsp;&nbsp;&nbsp;&nbsp;The parameter must be in the format `<remapped path to lib>:<library name>:<address>`, e.g. `src/Contract.sol:Library:0x...`.

&nbsp;&nbsp;&nbsp;&nbsp;Can also be set in your configuration file as `libraries = ["<path>:<lib name>:<address>"]`.

#### Compiler Options

`--optimize`  
&nbsp;&nbsp;&nbsp;&nbsp;Activate the Solidity optimizer.

`--optimizer-runs` *runs*  
&nbsp;&nbsp;&nbsp;&nbsp;The number of optimizer runs.

`--via-ir`  
&nbsp;&nbsp;&nbsp;&nbsp;Use the Yul intermediate representation compilation pipeline.

`--revert-strings`  
&nbsp;&nbsp;&nbsp;&nbsp;How to treat revert and require reason strings.

`--use` *solc_version*  
&nbsp;&nbsp;&nbsp;&nbsp;Specify the solc version, or a path to a local solc, to build with.

&nbsp;&nbsp;&nbsp;&nbsp;Valid values are in the format `x.y.z`, `solc:x.y.z` or `path/to/solc`.

`--offline`  
&nbsp;&nbsp;&nbsp;&nbsp;Do not access the network. Missing solc versions will not be installed.

`--no-auto-detect`  
&nbsp;&nbsp;&nbsp;&nbsp;Do not auto-detect solc.

`--ignored-error-codes` *error_codes*  
&nbsp;&nbsp;&nbsp;&nbsp;Ignore solc warnings by error code. The parameter is a comma-separated list of error codes.

`--extra-output` *selector*  
&nbsp;&nbsp;&nbsp;&nbsp;Extra output to include in the contract's artifact.

&nbsp;&nbsp;&nbsp;&nbsp;Example keys: `abi`, `storageLayout`, `evm.assembly`, `ewasm`, `ir`, `ir-optimized`, `metadata`.

&nbsp;&nbsp;&nbsp;&nbsp;For a full description, see the [Solidity docs][output-desc].

`--extra-output-files` *selector*  
&nbsp;&nbsp;&nbsp;&nbsp;Extra output to write to separate files.

&nbsp;&nbsp;&nbsp;&nbsp;Example keys: `abi`, `storageLayout`, `evm.assembly`, `ewasm`, `ir`, `ir-optimized`, `metadata`.

&nbsp;&nbsp;&nbsp;&nbsp;For a full description, see the [Solidity docs][output-desc].

`--evm-version` *version*  
&nbsp;&nbsp;&nbsp;&nbsp;The target EVM version.

[output-desc]: https://docs.soliditylang.org/en/latest/using-the-compiler.html#compiler-api

#### Project Options

`--build-info`  
&nbsp;&nbsp;&nbsp;&nbsp;Generate build info files.

`--build-info-path` *path*  
&nbsp;&nbsp;&nbsp;&nbsp;Output path to directory that build info files will be written to.

`--root` *path*  
&nbsp;&nbsp;&nbsp;&nbsp;The project's root path. By default, this is the root directory of the current git repository, or the current working directory.

`-C` *path*  
`--contracts` *path*  
&nbsp;&nbsp;&nbsp;&nbsp;The contracts source directory.  
&nbsp;&nbsp;&nbsp;&nbsp;Environment: `DAPP_SRC`

`--lib-paths` *path*  
&nbsp;&nbsp;&nbsp;&nbsp;The path to the library folder.

`-R` *remappings*  
`--remappings` *remappings*  
&nbsp;&nbsp;&nbsp;&nbsp;The project's remappings.

&nbsp;&nbsp;&nbsp;&nbsp;The parameter is a comma-separated list of remappings in the format `<source>=<dest>`.

`--cache-path` *path*  
&nbsp;&nbsp;&nbsp;&nbsp;The path to the compiler cache.

`--config-path` *file*  
&nbsp;&nbsp;&nbsp;&nbsp;Path to the config file.

`--hh`  
`--hardhat`  
&nbsp;&nbsp;&nbsp;&nbsp;This is a convenience flag, and is the same as passing `--contracts contracts --lib-paths node-modules`.

`-o` *path*  
`--out` *path*  
&nbsp;&nbsp;&nbsp;&nbsp;The project's artifacts directory.

`--silent`  
&nbsp;&nbsp;&nbsp;&nbsp;Suppress all output.

#### Watch Options

`-w` [*path...*]  
`--watch` [*path...*]  
&nbsp;&nbsp;&nbsp;&nbsp;Watch specific file(s) or folder(s).

&nbsp;&nbsp;&nbsp;&nbsp;By default, the project's source directory is watched.

`-d` *delay*  
`--delay` *delay*  
&nbsp;&nbsp;&nbsp;&nbsp;File update debounce delay.

&nbsp;&nbsp;&nbsp;&nbsp;During the delay, incoming change events are accumulated and only once the delay has passed, is an action taken.  
&nbsp;&nbsp;&nbsp;&nbsp;Note that this does not mean a command will be started: if `--no-restart` is given and a command is already running, the outcome of the action will be to do nothing.

&nbsp;&nbsp;&nbsp;&nbsp;Defaults to 50ms. Parses as decimal seconds by default, but using an integer with the `ms` suffix may be more convenient.

&nbsp;&nbsp;&nbsp;&nbsp;When using `--poll` mode, you'll want a larger duration, or risk overloading disk I/O.

`--no-restart`  
&nbsp;&nbsp;&nbsp;&nbsp;Do not restart the command while it's running.

`--run-all`  
&nbsp;&nbsp;&nbsp;&nbsp;Explicitly re-run the command on all files when a change is made.

#### Display Options

`-j`  
`--json`  
&nbsp;&nbsp;&nbsp;&nbsp; Print the deployment information as JSON.

`--list`  
&nbsp;&nbsp;&nbsp;&nbsp;List tests instead of running them.

#### Common Options

`-h`  
`--help`  
&nbsp;&nbsp;&nbsp;&nbsp;Prints help information.

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
