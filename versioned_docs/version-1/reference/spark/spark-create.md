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
&nbsp;&nbsp;&nbsp;&nbsp;The constructor arguments.

`--constructor-args-path` _file_  
&nbsp;&nbsp;&nbsp;&nbsp;The path to a file containing the constructor arguments.

`--verify`  
&nbsp;&nbsp;&nbsp;&nbsp;Verify contract after creation. Runs `spark verify-contract` with the appropriate parameters.

`--verifier` _name_  
&nbsp;&nbsp;&nbsp;&nbsp;The verification provider. Available options: `etherscan`, `sourcify` & `blockscout`. Default: `etherscan`. Note: make sure you add "/api\?" to the end of the Blockscout homepage explorer URL.

`--verifier-url` _url_  
&nbsp;&nbsp;&nbsp;&nbsp;The optional verifier url for submitting the verification request.  
&nbsp;&nbsp;&nbsp;&nbsp;Environment: `VERIFIER_URL`

`--unlocked`  
&nbsp;&nbsp;&nbsp;&nbsp;Send via `eth_sendTransaction` using the `--from` argument or `$ETH_FROM` as sender.

#### Transaction Options

`--gas-limit` _gas_limit_  
&nbsp;&nbsp;&nbsp;&nbsp;Gas limit for the transaction.

`--gas-price` _price_  
&nbsp;&nbsp;&nbsp;&nbsp;Gas price for the transaction, or max fee per gas for EIP1559 transactions.

`--priority-gas-price` _price_  
&nbsp;&nbsp;&nbsp;&nbsp;Max priority fee per gas for EIP1559 transactions.

`--value` _value_  
&nbsp;&nbsp;&nbsp;&nbsp;Ether to send in the transaction.

&nbsp;&nbsp;&nbsp;&nbsp;Either specified as an integer (wei), or as a string with a unit, for example:  
&nbsp;&nbsp;&nbsp;&nbsp;- `1ether`  
&nbsp;&nbsp;&nbsp;&nbsp;- `10gwei`  
&nbsp;&nbsp;&nbsp;&nbsp;- `0.01ether`

`--nonce` _nonce_  
&nbsp;&nbsp;&nbsp;&nbsp;Nonce for the transaction.

`--legacy`  
&nbsp;&nbsp;&nbsp;&nbsp;Send a legacy transaction instead of an [EIP1559][eip1559] transaction.

&nbsp;&nbsp;&nbsp;&nbsp;This is automatically enabled for common networks without EIP1559.

#### WALLET OPTIONS - RAW:

`-i`  
`--interactive <NUM>`  
&nbsp;&nbsp;&nbsp;&nbsp; Open an interactive prompt to enter your private key. Takes a value for the number of keys to enter.  
&nbsp;&nbsp;&nbsp;&nbsp; Defaults to `0`.

`--mnemonic-derivation-path <PATHS>`  
&nbsp;&nbsp;&nbsp;&nbsp; The wallet derivation path. Works with both `--mnemonic-path` and hardware wallets.

`--mnemonic-indexes <INDEXES>`  
&nbsp;&nbsp;&nbsp;&nbsp; Use the private key from the given mnemonic index. Used with --mnemonic-paths.  
&nbsp;&nbsp;&nbsp;&nbsp; Defaults to `0`.

`--mnemonic-passphrase <PASSPHRASE>`  
&nbsp;&nbsp;&nbsp;&nbsp; Use a BIP39 passphrases for the mnemonic.

`--mnemonic <PATHS>`  
&nbsp;&nbsp;&nbsp;&nbsp; Use the mnemonic phrases or mnemonic files at the specified paths.

`--private-key <RAW_PRIVATE_KEY>`  
&nbsp;&nbsp;&nbsp;&nbsp; Use the provided private key.

`--private-keys <RAW_PRIVATE_KEYS>`  
&nbsp;&nbsp;&nbsp;&nbsp; Use the provided private keys.

#### Wallet Options - Keystore

`--keystore` _path_  
&nbsp;&nbsp;&nbsp;&nbsp;Use the keystore in the given folder or file.  
&nbsp;&nbsp;&nbsp;&nbsp;Environment: `ETH_KEYSTORE`

`--account` _account-name_  
&nbsp;&nbsp;&nbsp;&nbsp;Use a keystore from the default keystores folder (~/.foxar/keystores) by its filename.  
&nbsp;&nbsp;&nbsp;&nbsp;Environment: `ETH_KEYSTORE_ACCOUNT`

`--interactive`

`--password` _password_  
&nbsp;&nbsp;&nbsp;&nbsp;The keystore password. Used with `--keystore`.
&nbsp;&nbsp;&nbsp;&nbsp;Environment: `ETH_PASSWORD`

#### Wallet Options - Hardware Wallet

`-t`  
`--trezor`  
&nbsp;&nbsp;&nbsp;&nbsp;Use a Trezor hardware wallet.

`-l`  
`--ledger`  
&nbsp;&nbsp;&nbsp;&nbsp;Use a Ledger hardware wallet.

#### Wallet Options - Remote

`-f` _address_  
`--from` _address_  
&nbsp;&nbsp;&nbsp;&nbsp;Sign the transaction with the specified account on the RPC.  
&nbsp;&nbsp;&nbsp;&nbsp;Environment: `ETH_FROM`

#### RPC Options

`--rpc-url` _url_  
&nbsp;&nbsp;&nbsp;&nbsp;The RPC endpoint. Accepts a URL or an existing alias in the [rpc_endpoints] table, like `mainnet`.
&nbsp;&nbsp;&nbsp;&nbsp;Environment: `ETH_RPC_URL`

`--flashbots`  
&nbsp;&nbsp;&nbsp;&nbsp;Use the Flashbots RPC URL (https://rpc.flashbots.net).

#### Etherscan Options

`--chain` _chain_name_  
&nbsp;&nbsp;&nbsp;&nbsp;The Etherscan chain.

`--etherscan-api-key` _key_  
&nbsp;&nbsp;&nbsp;&nbsp;Etherscan API key, or the key of an [Etherscan configuration table](../config/etherscan#etherscan).  
&nbsp;&nbsp;&nbsp;&nbsp;Environment: `ETHERSCAN_API_KEY`

#### Cache Options

`--force`  
&nbsp;&nbsp;&nbsp;&nbsp;Clear the cache and artifacts folder and recompile.

#### Linker Options

`--libraries` _libraries_  
&nbsp;&nbsp;&nbsp;&nbsp;Set pre-linked libraries.

&nbsp;&nbsp;&nbsp;&nbsp;The parameter must be in the format `<remapped path to lib>:<library name>:<address>`, e.g. `src/Contract.sol:Library:0x...`.

&nbsp;&nbsp;&nbsp;&nbsp;Can also be set in your configuration file as `libraries = ["<path>:<lib name>:<address>"]`.

#### Compiler Options

`--optimize`  
&nbsp;&nbsp;&nbsp;&nbsp;Activate the Solidity optimizer.

`--optimizer-runs` _runs_  
&nbsp;&nbsp;&nbsp;&nbsp;The number of optimizer runs.

`--via-ir`  
&nbsp;&nbsp;&nbsp;&nbsp;Use the Yul intermediate representation compilation pipeline.

`--revert-strings`  
&nbsp;&nbsp;&nbsp;&nbsp;How to treat revert and require reason strings.

`--use` _solc_version_  
&nbsp;&nbsp;&nbsp;&nbsp;Specify the solc version, or a path to a local solc, to build with.

&nbsp;&nbsp;&nbsp;&nbsp;Valid values are in the format `x.y.z`, `solc:x.y.z` or `path/to/solc`.

`--offline`  
&nbsp;&nbsp;&nbsp;&nbsp;Do not access the network. Missing solc versions will not be installed.

`--no-auto-detect`  
&nbsp;&nbsp;&nbsp;&nbsp;Do not auto-detect solc.

`--ignored-error-codes` _error_codes_  
&nbsp;&nbsp;&nbsp;&nbsp;Ignore solc warnings by error code. The parameter is a comma-separated list of error codes.

`--extra-output` _selector_  
&nbsp;&nbsp;&nbsp;&nbsp;Extra output to include in the contract's artifact.

&nbsp;&nbsp;&nbsp;&nbsp;Example keys: `abi`, `storageLayout`, `evm.assembly`, `ewasm`, `ir`, `ir-optimized`, `metadata`.

&nbsp;&nbsp;&nbsp;&nbsp;For a full description, see the [Solidity docs][output-desc].

`--extra-output-files` _selector_  
&nbsp;&nbsp;&nbsp;&nbsp;Extra output to write to separate files.

&nbsp;&nbsp;&nbsp;&nbsp;Example keys: `abi`, `storageLayout`, `evm.assembly`, `ewasm`, `ir`, `ir-optimized`, `metadata`.

&nbsp;&nbsp;&nbsp;&nbsp;For a full description, see the [Solidity docs][output-desc].

`--evm-version` _version_  
&nbsp;&nbsp;&nbsp;&nbsp;The target EVM version.

[output-desc]: https://docs.soliditylang.org/en/latest/using-the-compiler.html#compiler-api

#### Project Options

`--build-info`  
&nbsp;&nbsp;&nbsp;&nbsp;Generate build info files.

`--build-info-path` _path_  
&nbsp;&nbsp;&nbsp;&nbsp;Output path to directory that build info files will be written to.

`--root` _path_  
&nbsp;&nbsp;&nbsp;&nbsp;The project's root path. By default, this is the root directory of the current git repository, or the current working directory.

`-C` _path_  
`--contracts` _path_  
&nbsp;&nbsp;&nbsp;&nbsp;The contracts source directory.  
&nbsp;&nbsp;&nbsp;&nbsp;Environment: `DAPP_SRC`

`--lib-paths` _path_  
&nbsp;&nbsp;&nbsp;&nbsp;The path to the library folder.

`-R` _remappings_  
`--remappings` _remappings_  
&nbsp;&nbsp;&nbsp;&nbsp;The project's remappings.

&nbsp;&nbsp;&nbsp;&nbsp;The parameter is a comma-separated list of remappings in the format `<source>=<dest>`.

`--cache-path` _path_  
&nbsp;&nbsp;&nbsp;&nbsp;The path to the compiler cache.

`--config-path` _file_  
&nbsp;&nbsp;&nbsp;&nbsp;Path to the config file.

`--hh`  
`--hardhat`  
&nbsp;&nbsp;&nbsp;&nbsp;This is a convenience flag, and is the same as passing `--contracts contracts --lib-paths node-modules`.

`-o` _path_  
`--out` _path_  
&nbsp;&nbsp;&nbsp;&nbsp;The project's artifacts directory.

`--silent`  
&nbsp;&nbsp;&nbsp;&nbsp;Suppress all output.

#### Display Options

`-j`  
`--json`  
&nbsp;&nbsp;&nbsp;&nbsp; Print the deployment information as JSON.

#### Common Options

`-h`  
`--help`  
&nbsp;&nbsp;&nbsp;&nbsp;Prints help information.

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
