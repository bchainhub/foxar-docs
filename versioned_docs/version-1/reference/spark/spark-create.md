---
title: Spark create
---

### NAME

spark-create - Deploy a smart contract.

### SYNOPSIS

`spark create` [*options*] _contract_

### DESCRIPTION

Deploy a smart contract.

The path to the contract is in the format `<path>:<contract>`, e.g. `src/Contract.sol:Contract`.

You can specify constructor arguments with `--constructor-args`. Alternatively, you can specify a file
containing space-separated constructor arguments with `--constructor-args-path`.

Dynamic linking is not supported: you should predeploy your libraries and manually specify their addresses (see `--libraries`).

> ℹ️ **Note**
>
> The `--constructor-args` flag must be positioned last in the command, since it takes multiple values.

### OPTIONS

#### Build Options

`--constructor-args` _args..._  
The constructor arguments.

`--constructor-args-path` _file_  
The path to a file containing the constructor arguments.

`--verify`  
Verify contract after creation. Runs `spark verify-contract` with the appropriate parameters.

`--verifier` _name_  
The verification provider. Available options: `etherscan`, `sourcify` & `blockscout`. Default: `etherscan`. Note: make sure you add "/api\?" to the end of the Blockscout homepage explorer URL.

`--verifier-url` _url_  
The optional verifier url for submitting the verification request.  
Environment: `VERIFIER_URL`

`--unlocked`  
Send via `eth_sendTransaction` using the `--from` argument or `$ETH_FROM` as sender.

#### Transaction Options

`--gas-limit` _gas_limit_  
Gas limit for the transaction.

`--gas-price` _price_  
Gas price for the transaction, or max fee per gas for EIP1559 transactions.

`--priority-gas-price` _price_  
Max priority fee per gas for EIP1559 transactions.

`--value` _value_  
Ether to send in the transaction.

Either specified as an integer (wei), or as a string with a unit, for example:

- `1ether`
- `10gwei`
- `0.01ether`

`--nonce` _nonce_  
Nonce for the transaction.

`--legacy`  
Send a legacy transaction instead of an [EIP1559][eip1559] transaction.

This is automatically enabled for common networks without EIP1559.

#### WALLET OPTIONS - RAW:

`-i`  
`--interactive <NUM>`  
 Open an interactive prompt to enter your private key. Takes a value for the number of keys to enter.  
 Defaults to `0`.

`--mnemonic-derivation-path <PATHS>`  
 The wallet derivation path. Works with both `--mnemonic-path` and hardware wallets.

`--mnemonic-indexes <INDEXES>`  
 Use the private key from the given mnemonic index. Used with --mnemonic-paths.  
 Defaults to `0`.

`--mnemonic-passphrase <PASSPHRASE>`  
 Use a BIP39 passphrases for the mnemonic.

`--mnemonic <PATHS>`  
 Use the mnemonic phrases or mnemonic files at the specified paths.

`--private-key <RAW_PRIVATE_KEY>`  
 Use the provided private key.

`--private-keys <RAW_PRIVATE_KEYS>`  
 Use the provided private keys.

#### Wallet Options - Keystore

`--keystore` _path_  
Use the keystore in the given folder or file.  
Environment: `ETH_KEYSTORE`

`--account` _account-name_  
Use a keystore from the default keystores folder (~/.foxar/keystores) by its filename.  
Environment: `ETH_KEYSTORE_ACCOUNT`

`--interactive`

`--password` _password_  
The keystore password. Used with `--keystore`.
Environment: `ETH_PASSWORD`

#### Wallet Options - Hardware Wallet

`-t`  
`--trezor`  
Use a Trezor hardware wallet.

`-l`  
`--ledger`  
Use a Ledger hardware wallet.

#### Wallet Options - Remote

`-f` _address_  
`--from` _address_  
Sign the transaction with the specified account on the RPC.  
Environment: `ETH_FROM`

#### RPC Options

`--rpc-url` _url_  
The RPC endpoint. Accepts a URL or an existing alias in the [rpc_endpoints] table, like `mainnet`.
Environment: `ETH_RPC_URL`

`--flashbots`  
Use the Flashbots RPC URL (https://rpc.flashbots.net).

#### Etherscan Options

`--chain` _chain_name_  
The Etherscan chain.

`--etherscan-api-key` _key_  
Etherscan API key, or the key of an [Etherscan configuration table](../config/etherscan).  
Environment: `ETHERSCAN_API_KEY`

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

#### Display Options

`-j`  
`--json`  
 Print the deployment information as JSON.

#### Common Options

`-h`  
`--help`  
Prints help information.

### EXAMPLES

1. Deploy a contract with no constructor arguments:

   ```sh
   spark create src/Contract.sol:ContractWithNoConstructor
   ```

2. Deploy a contract with two constructor arguments:
   ```sh
   spark create src/Contract.sol:MyToken --constructor-args "My Token" "MT"
   ```

### SEE ALSO

[spark](./spark.md), [spark build](./spark-build.md), [spark verify-contract](./spark-verify-contract.md)

[eip1559]: https://github.com/ethereum/EIPs/blob/master/EIPS/eip-1559.md
