---
title: Spark debug
---

### NAME

spark-debug - Debug a single smart contract as a script.

### SYNOPSIS

`spark debug` [*options*] _path_ [*args...*]

### DESCRIPTION

Debugs a single smart contract located in the source file (_path_) as a script.

If multiple contracts are in the specified source file, you must pass `--target-contract` to specify
what contract you want to run.

#### Calls

After the script is deployed to the internal EVM a call is made to a function with the signature `setUp()`, if present.

By default, the script is assumed to be contained in a function with the signature `run()`. If you wish to
run a different function, pass `--sig <SIGNATURE>`.

The signature can be a fragment (`<function name>(<types>)`), or raw calldata.

If you pass a fragment, and the function has parameters, you can add the call parameters to the end of the command (_args_).

#### Forking

It is possible to run the script in a forked environment by passing `--fork-url <URL>`.

When the script is running in a forked environment, you can access all the state of the forked chain as you would
if you had deployed the script. [Cheatcodes][cheatcodes] are still available.

You can also specify a block number to fork from by passing `--fork-block-number <BLOCK>`. When forking from a
specific block, the chain data is cached to `~/.foxar/cache`. If you do not want to cache the chain data,
pass `--no-storage-caching`.

#### Debugging

It is possible to run the script in an interactive debugger. To start the debugger, pass `--debug`.

More information on the debugger can be found in the [debugger chapter][debugger].

### OPTIONS

#### Debug Options

`--target-contract` _contract_name_  
The name of the contract you want to run

`-s` _signature_  
`--sig` _signature_  
The signature of the function you want to call in the contract, or raw calldata. Default: `run()`

`--debug`  
Open the script in the [debugger][debugger].

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
Activate the Solidity optimizer.

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

For a full description, see the [Solidity docs][output-desc].

`--extra-output-files` _selector_  
Extra output to write to separate files.

Example keys: `abi`, `storageLayout`, `evm.assembly`, `ewasm`, `ir`, `ir-optimized`, `metadata`.

For a full description, see the [Solidity docs][output-desc].

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

#### Common Options

`-h`  
`--help`  
Prints help information.

### EXAMPLES

1. Execute the `run()` function in a contract:

   ```sh
   spark debug src/Contract.sol
   ```

2. Open a script in the debugger:

   ```sh
   spark debug src/Contract.sol --debug
   ```

3. Execute the `foo()` function in a contract:

   ```sh
   spark debug src/Contract.sol --sig "foo()"
   ```

4. Execute a contract with a function that takes parameters:

   ```sh
   spark debug src/Contract.sol --sig "foo(string,uint256)" "hello" 100
   ```

5. Execute a contract with raw calldata:
   ```sh
   spark debug src/Contract.sol --sig "0x..."
   ```

### SEE ALSO

[spark](./spark.md), [spark test](./spark-test.md)

[debugger]: ../../spark/debugger.md
[cheatcodes]: ../cheatcodes/cheatcodes-reference
