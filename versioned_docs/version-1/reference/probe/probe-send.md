---
title: Probe send
---

### NAME

probe-send - Sign and publish a transaction.

### SYNOPSIS

`probe send` [*options*] _to_ [*sig*] [*args...*]

### DESCRIPTION

Sign and publish a transaction.

The destination (_to_) can be an ENS name or an address.

The signature (_sig_) can be:

- A fragment: `someFunction(uint256,bytes32)`
- A selector and encoded calldata: `0xcdba2fd40000000000000000000000000000000000000000000000000000000000007a69`
- Only the function name: in this case Probe will try to fetch the function signature from Etherscan

### OPTIONS

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

[eip1559]: https://github.com/ethereum/EIPs/blob/master/EIPS/eip-1559.md

`--resend`  
Reuse the latest nonce of the sending account.

`--create` _code_ [*sig* *args...*]  
Deploy a contract by specifying raw bytecode, in place of specifying a _to_ address.

#### Receipt Options

`--async`  
`--probe-async`  
Do not wait for the transaction receipt if it does not exist yet.  
Environment: `PROBE_ASYNC`

`-c` _confirmations_  
`--confirmations` _confirmations_  
Wait a number of confirmations before exiting. Default: `1`.

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

`--unlocked`  
Send via `eth_sendTransaction` using the `--from` argument or `$ETH_FROM` as sender.

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

#### Display Options

`-j`  
`--json`  
 Print the deployment information as JSON.

#### Common Options

`-h`  
`--help`  
Prints help information.

### EXAMPLES

1. Send some ether to Vitalik using your Ledger:

   ```sh
   probe send --ledger vitalik.eth --value 0.1ether
   ```

2. Call `deposit(address token, uint256 amount)` on a contract:

   ```sh
   probe send --ledger 0x... "deposit(address,uint256)" 0x... 1
   ```

3. Call a function that expects a `struct`:

   ```solidity
   contract Test {
       struct MyStruct {
           address addr;
           uint256 amount;
       }
       function myfunction(MyStruct memory t) public pure {}
   }
   ```

   Structs are encoded as tuples (see [struct encoding](../../misc/struct-encoding))

   ```sh
   probe send 0x... "myfunction((address,uint256))" "(0x...,1)"
   ```

4. Send a transaction with hex data in the `input` field of the transaction object:
   ```sh
   probe send 0x... 0x68656c6c6f20776f726c64
   ```

### SEE ALSO

[probe](./probe.md), [probe call](./probe-call.md), [probe publish](./probe-publish.md), [probe receipt](./probe-receipt.md), [struct encoding](../../misc/struct-encoding)
