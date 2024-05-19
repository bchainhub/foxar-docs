---
title: Spark script
---

### NAME

spark-script - Run a smart contract as a script, building transactions that can be sent onchain.

### SYNOPSIS

`spark script` [*options*] *path* [*args...*]

### DESCRIPTION

Run a smart contract as a script, building transactions that can be sent onchain.

Scripts can be used to apply state transitions on live contracts, or deploy and initialize a complex set of smart contracts using Solidity.

### OPTIONS

`--broadcast`
&nbsp;&nbsp;&nbsp;&nbsp;Broadcasts the transactions.

`--debug`
&nbsp;&nbsp;&nbsp;&nbsp;Open the script in the [debugger][debugger]. Takes precedence over broadcast.

`-g`
`--gas-estimate-multiplier` *multiplier*
&nbsp;&nbsp;&nbsp;&nbsp;Relative percentage by which to multiply all gas estimates. (i.e. set to 200 to double them)
&nbsp;&nbsp;&nbsp;&nbsp;Default: 130

`--json`
&nbsp;&nbsp;&nbsp;&nbsp;Output results in JSON format.
&nbsp;&nbsp;&nbsp;&nbsp;Note: The output is under development and prone to change.

`--legacy`
&nbsp;&nbsp;&nbsp;&nbsp;Use legacy transactions instead of EIP1559 ones. This is auto-enabled for common networks without EIP1559.

`--resume`
&nbsp;&nbsp;&nbsp;&nbsp;Resumes submitting transactions that failed or timed-out previously.

`-s`
`--sig` *signature*
&nbsp;&nbsp;&nbsp;&nbsp;The signature of the function you want to call in the contract, or raw calldata.
&nbsp;&nbsp;&nbsp;&nbsp;Default: `run()`

`--skip-simulation`
&nbsp;&nbsp;&nbsp;&nbsp;Skips on-chain simulation.

`--skip`
&nbsp;&nbsp;&nbsp;&nbsp;Skip compilation of non-essential contract directories like test or script (usage `--skip test`).

`--non-interactive`
&nbsp;&nbsp;&nbsp;&nbsp;Remove interactive prompts which appear if the contract is near the [EIP-170](https://eips.ethereum.org/EIPS/eip-170) size limit.

`--slow`
&nbsp;&nbsp;&nbsp;&nbsp;Makes sure a transaction is sent, only after its previous one has been confirmed and succeeded.

`--target-contract` *contract_name*
&nbsp;&nbsp;&nbsp;&nbsp;The name of the contract you want to run.

`--priority-gas-price`
&nbsp;&nbsp;&nbsp;&nbsp;Sets the priority gas price for EIP1559 transactions. Useful for when gas prices are volatile and you want to get your transaction included.

`--with-gas-price` *price*
&nbsp;&nbsp;&nbsp;&nbsp;Sets the gas price for **broadcasted** legacy transactions, or the max fee for broadcasted EIP1559 transactions.
&nbsp;&nbsp;&nbsp;&nbsp;Note: To set the gas price in the execution environment of the script use `--gas-price` instead (see below).

#### Etherscan Options

`--chain` *chain_name*
&nbsp;&nbsp;&nbsp;&nbsp;The Etherscan chain.

`--etherscan-api-key` *key*
&nbsp;&nbsp;&nbsp;&nbsp;Etherscan API key, or the key of an [Etherscan configuration table](../config/etherscan#etherscan).
&nbsp;&nbsp;&nbsp;&nbsp;Environment: `ETHERSCAN_API_KEY`

#### Verification Options

`--verify`
&nbsp;&nbsp;&nbsp;&nbsp;If it finds a matching broadcast log, it tries to verify every contract found in the receipts.

`--verifier` *name*
&nbsp;&nbsp;&nbsp;&nbsp;The verification provider. Available options: `etherscan`, `sourcify` & `blockscout`. Default: `etherscan`. Note: make sure you add "/api\?" to the end of the Blockscout homepage explorer URL.

`--verifier-url` *url*
&nbsp;&nbsp;&nbsp;&nbsp;The optional verifier url for submitting the verification request.
&nbsp;&nbsp;&nbsp;&nbsp;Environment: `VERIFIER_URL`

`--delay` *delay*
&nbsp;&nbsp;&nbsp;&nbsp;Optional timeout to apply in between attempts in seconds. Defaults to 3.

`--retries` *retries*
&nbsp;&nbsp;&nbsp;&nbsp;Number of attempts for retrying. Defaults to 15.

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

#### Build Options

`--names`
&nbsp;&nbsp;&nbsp;&nbsp;Print compiled contract names.

`--sizes`
&nbsp;&nbsp;&nbsp;&nbsp;Print compiled non-test contract sizes, exiting with code 1 if any of them are above the size limit.

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

#### Wallet Options - Raw

`-i`
`--interactives` *num*
&nbsp;&nbsp;&nbsp;&nbsp;Open an interactive prompt to enter your private key. Takes a value for the number of keys to enter.
&nbsp;&nbsp;&nbsp;&nbsp;Default: 0

`--mnemonic-indexes` *indexes*
&nbsp;&nbsp;&nbsp;&nbsp;Use the private key from the given mnemonic index. Used with --mnemonic-path.
&nbsp;&nbsp;&nbsp;&nbsp;Default: 0

`--mnemonic-paths` *paths*
&nbsp;&nbsp;&nbsp;&nbsp;Use the mnemonic file at the specified path(s).

`--private-key` *raw_private_key*
&nbsp;&nbsp;&nbsp;&nbsp;Use the provided private key.

`--private-keys` *raw_private_keys*
&nbsp;&nbsp;&nbsp;&nbsp;Use the provided private keys.

#### Wallet Options - Keystore

`--keystores` *paths*
&nbsp;&nbsp;&nbsp;&nbsp;Use the keystores in the given folders or files.
&nbsp;&nbsp;&nbsp;&nbsp;Environment: `ETH_KEYSTORE`

`--account` *account-name*
&nbsp;&nbsp;&nbsp;&nbsp;Use a keystore from the default keystores folder (~/.foxar/keystores) by its filename.
&nbsp;&nbsp;&nbsp;&nbsp;Environment: `ETH_KEYSTORE_ACCOUNT`

`--password` *passwords*
&nbsp;&nbsp;&nbsp;&nbsp;The keystore passwords. Used with `--keystore`.

#### Wallet Options - Hardware Wallet

`-t`
`--trezor`
&nbsp;&nbsp;&nbsp;&nbsp;Use a Trezor hardware wallet.

`-l`
`--ledger`
&nbsp;&nbsp;&nbsp;&nbsp;Use a Ledger hardware wallet.

`--hd-paths` *paths*
&nbsp;&nbsp;&nbsp;&nbsp;The derivation paths to use with hardware wallets.

#### Wallet Options - Remote

`-a` *addresses*
`--froms` *addresses*
&nbsp;&nbsp;&nbsp;&nbsp;Sign the transaction with the specified accounts on the RPC.
&nbsp;&nbsp;&nbsp;&nbsp;Environment: `ETH_FROM`

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

#### Common Options

`-h`
`--help`
&nbsp;&nbsp;&nbsp;&nbsp;Prints help information.

### EXAMPLES

1. Run `BroadcastTest` as a script, broadcasting generated transactions on-chain

   ```sh
   spark script ./test/Broadcast.t.sol --tc BroadcastTest --sig "deploy()" \
       -vvv --fork-url $SEPOLIA_RPC_URL
   ```

2. Deploy a contract on Polygon [(see scripting tutorial for an example script)](../../tutorials/ylem-scripting.md). *The verifier url is different for every network.*

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
