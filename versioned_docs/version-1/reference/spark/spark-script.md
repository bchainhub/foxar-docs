---
title: Spark script
---

### NAME

spark-script - Run a smart contract as a script, building transactions that can be sent onchain.

### SYNOPSIS

`spark script` [*options*] _path_ [*args...*]

### DESCRIPTION

Run a smart contract as a script, building transactions that can be sent onchain.

Scripts can be used to apply state transitions on live contracts, or deploy and initialize a complex set of smart contracts using Solidity.

### OPTIONS

`--broadcast`
Broadcasts the transactions.

`--debug`
Open the script in the [debugger][debugger]. Takes precedence over broadcast.

`-g`
`--gas-estimate-multiplier` _multiplier_
Relative percentage by which to multiply all gas estimates. (i.e. set to 200 to double them)
Default: 130

`--json`
Output results in JSON format.
Note: The output is under development and prone to change.

`--legacy`
Use legacy transactions instead of EIP1559 ones. This is auto-enabled for common networks without EIP1559.

`--resume`
Resumes submitting transactions that failed or timed-out previously.

`-s`
`--sig` _signature_
The signature of the function you want to call in the contract, or raw calldata.
Default: `run()`

`--skip-simulation`
Skips on-chain simulation.

`--skip`
Skip compilation of non-essential contract directories like test or script (usage `--skip test`).

`--non-interactive`
Remove interactive prompts which appear if the contract is near the [EIP-170](https://eips.ethereum.org/EIPS/eip-170) size limit.

`--slow`
Makes sure a transaction is sent, only after its previous one has been confirmed and succeeded.

`--target-contract` _contract_name_
The name of the contract you want to run.

`--priority-gas-price`
Sets the priority gas price for EIP1559 transactions. Useful for when gas prices are volatile and you want to get your transaction included.

`--with-gas-price` _price_
Sets the gas price for **broadcasted** legacy transactions, or the max fee for broadcasted EIP1559 transactions.
Note: To set the gas price in the execution environment of the script use `--gas-price` instead (see below).

#### Etherscan Options

`--chain` _chain_name_
The Etherscan chain.

`--etherscan-api-key` _key_
Etherscan API key, or the key of an [Etherscan configuration table](../config/etherscan).
Environment: `ETHERSCAN_API_KEY`

#### Verification Options

`--verify`
If it finds a matching broadcast log, it tries to verify every contract found in the receipts.

`--verifier` _name_
The verification provider. Available options: `etherscan`, `sourcify` & `blockscout`. Default: `etherscan`. Note: make sure you add "/api\?" to the end of the Blockscout homepage explorer URL.

`--verifier-url` _url_
The optional verifier url for submitting the verification request.
Environment: `VERIFIER_URL`

`--delay` _delay_
Optional timeout to apply in between attempts in seconds. Defaults to 3.

`--retries` _retries_
Number of attempts for retrying. Defaults to 15.

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

#### Build Options

`--names`
Print compiled contract names.

`--sizes`
Print compiled non-test contract sizes, exiting with code 1 if any of them are above the size limit.

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

#### Wallet Options - Raw

`-i`
`--interactives` _num_
Open an interactive prompt to enter your private key. Takes a value for the number of keys to enter.
Default: 0

`--mnemonic-indexes` _indexes_
Use the private key from the given mnemonic index. Used with --mnemonic-path.
Default: 0

`--mnemonic-paths` _paths_
Use the mnemonic file at the specified path(s).

`--private-key` _raw_private_key_
Use the provided private key.

`--private-keys` _raw_private_keys_
Use the provided private keys.

#### Wallet Options - Keystore

`--keystores` _paths_
Use the keystores in the given folders or files.
Environment: `ETH_KEYSTORE`

`--account` _account-name_
Use a keystore from the default keystores folder (~/.foxar/keystores) by its filename.
Environment: `ETH_KEYSTORE_ACCOUNT`

`--password` _passwords_
The keystore passwords. Used with `--keystore`.

#### Wallet Options - Hardware Wallet

`-t`
`--trezor`
Use a Trezor hardware wallet.

`-l`
`--ledger`
Use a Ledger hardware wallet.

`--hd-paths` _paths_
The derivation paths to use with hardware wallets.

#### Wallet Options - Remote

`-a` _addresses_
`--froms` _addresses_
Sign the transaction with the specified accounts on the RPC.
Environment: `ETH_FROM`

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

#### Common Options

`-h`
`--help`
Prints help information.

### EXAMPLES

1. Run `BroadcastTest` as a script, broadcasting generated transactions on-chain

   ```sh
   spark script ./test/Broadcast.t.sol --tc BroadcastTest --sig "deploy()" \
       -vvv --fork-url $SEPOLIA_RPC_URL
   ```

2. Deploy a contract on Polygon [(see scripting tutorial for an example script)](../../tutorials/ylem-scripting.md). _The verifier url is different for every network._

   ```sh
   spark script script/NFT.s.sol:MyScript --chain-id 137 --rpc-url $RPC_URL \
       --etherscan-api-key $POLYGONSCAN_API_KEY --verifier-url https://api.polygonscan.com/api \
       --broadcast --verify -vvvv
   ```

3. Resume a failed script. Using the above as an example, remove `--broadcast` add `--resume`

   ```sh
   spark script script/NFT.s.sol:MyScript --chain-id 137 --rpc-url $RPC_URL \
       --etherscan-api-key $POLYGONSCAN_API_KEY --verifier-url https://api.polygonscan.com/api \
       --verify -vvvv --resume
   ```

4. Verify contracts that were just deployed with a script
   ```sh
   spark script script/NFT.s.sol --rpc-url $RPC_URL --verify --resume
   ```

[debugger]: ../../spark/debugger.md
