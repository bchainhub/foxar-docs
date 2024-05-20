---
title: Spark debug
---

### NAME

spark-debug - Debug a single smart contract as a script.

### SYNOPSIS

`spark debug` [*options*] *path* [*args...*]

### DESCRIPTION

Debugs a single smart contract located in the source file (*path*) as a script.

If multiple contracts are in the specified source file, you must pass `--target-contract` to specify
what contract you want to run.

#### Calls

After the script is deployed to the internal EVM a call is made to a function with the signature `setUp()`, if present.

By default, the script is assumed to be contained in a function with the signature `run()`. If you wish to
run a different function, pass `--sig <SIGNATURE>`.

The signature can be a fragment (`<function name>(<types>)`), or raw calldata.

If you pass a fragment, and the function has parameters, you can add the call parameters to the end of the command (*args*).

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

`--target-contract` *contract_name*  
&nbsp;&nbsp;&nbsp;&nbsp;The name of the contract you want to run

`-s` *signature*  
`--sig` *signature*  
&nbsp;&nbsp;&nbsp;&nbsp;The signature of the function you want to call in the contract, or raw calldata. Default: `run()`

`--debug`  
&nbsp;&nbsp;&nbsp;&nbsp;Open the script in the [debugger][debugger].

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

#### Common Options

`-h`  
`--help`  
&nbsp;&nbsp;&nbsp;&nbsp;Prints help information.

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
