---
title: Probe send
---

### NAME

probe-send - Sign and publish a transaction.

### SYNOPSIS

`probe send` [*options*] *to* [*sig*] [*args...*]

### DESCRIPTION

Sign and publish a transaction.

The destination (*to*) can be an ENS name or an address.

The signature (*sig*) can be:

- A fragment: `someFunction(uint256,bytes32)`
- A selector and encoded calldata: `0xcdba2fd40000000000000000000000000000000000000000000000000000000000007a69`
- Only the function name: in this case Probe will try to fetch the function signature from Etherscan

### OPTIONS

#### Transaction Options

`--gas-limit` *gas_limit*  
&nbsp;&nbsp;&nbsp;&nbsp;Gas limit for the transaction.

`--gas-price` *price*  
&nbsp;&nbsp;&nbsp;&nbsp;Gas price for the transaction, or max fee per gas for EIP1559 transactions.

`--priority-gas-price` *price*  
&nbsp;&nbsp;&nbsp;&nbsp;Max priority fee per gas for EIP1559 transactions.

`--value` *value*  
&nbsp;&nbsp;&nbsp;&nbsp;Ether to send in the transaction.

&nbsp;&nbsp;&nbsp;&nbsp;Either specified as an integer (wei), or as a string with a unit, for example:  
&nbsp;&nbsp;&nbsp;&nbsp;- `1ether`  
&nbsp;&nbsp;&nbsp;&nbsp;- `10gwei`  
&nbsp;&nbsp;&nbsp;&nbsp;- `0.01ether`

`--nonce` *nonce*  
&nbsp;&nbsp;&nbsp;&nbsp;Nonce for the transaction.

`--legacy`  
&nbsp;&nbsp;&nbsp;&nbsp;Send a legacy transaction instead of an [EIP1559][eip1559] transaction.

&nbsp;&nbsp;&nbsp;&nbsp;This is automatically enabled for common networks without EIP1559.

[eip1559]: https://github.com/ethereum/EIPs/blob/master/EIPS/eip-1559.md

`--resend`  
&nbsp;&nbsp;&nbsp;&nbsp;Reuse the latest nonce of the sending account.

`--create` *code* [*sig* *args...*]  
&nbsp;&nbsp;&nbsp;&nbsp;Deploy a contract by specifying raw bytecode, in place of specifying a *to* address.

#### Receipt Options

`--async`  
`--probe-async`  
&nbsp;&nbsp;&nbsp;&nbsp;Do not wait for the transaction receipt if it does not exist yet.  
&nbsp;&nbsp;&nbsp;&nbsp;Environment: `PROBE_ASYNC`

`-c` *confirmations*  
`--confirmations` *confirmations*  
&nbsp;&nbsp;&nbsp;&nbsp;Wait a number of confirmations before exiting. Default: `1`.

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

`--keystore` *path*  
&nbsp;&nbsp;&nbsp;&nbsp;Use the keystore in the given folder or file.  
&nbsp;&nbsp;&nbsp;&nbsp;Environment: `ETH_KEYSTORE`

`--account` *account-name*  
&nbsp;&nbsp;&nbsp;&nbsp;Use a keystore from the default keystores folder (~/.foxar/keystores) by its filename.  
&nbsp;&nbsp;&nbsp;&nbsp;Environment: `ETH_KEYSTORE_ACCOUNT`

`--interactive`

`--password` *password*  
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

`-f` *address*  
`--from` *address*  
&nbsp;&nbsp;&nbsp;&nbsp;Sign the transaction with the specified account on the RPC.  
&nbsp;&nbsp;&nbsp;&nbsp;Environment: `ETH_FROM`

`--unlocked`  
&nbsp;&nbsp;&nbsp;&nbsp;Send via `eth_sendTransaction` using the `--from` argument or `$ETH_FROM` as sender.

#### RPC Options

`--rpc-url` *url*  
&nbsp;&nbsp;&nbsp;&nbsp;The RPC endpoint. Accepts a URL or an existing alias in the [rpc_endpoints] table, like `mainnet`.
&nbsp;&nbsp;&nbsp;&nbsp;Environment: `ETH_RPC_URL`

`--flashbots`  
&nbsp;&nbsp;&nbsp;&nbsp;Use the Flashbots RPC URL (https://rpc.flashbots.net).

#### Etherscan Options

`--chain` *chain_name*  
&nbsp;&nbsp;&nbsp;&nbsp;The Etherscan chain.

`--etherscan-api-key` *key*  
&nbsp;&nbsp;&nbsp;&nbsp;Etherscan API key, or the key of an [Etherscan configuration table](../config/etherscan).  
&nbsp;&nbsp;&nbsp;&nbsp;Environment: `ETHERSCAN_API_KEY`

#### Display Options

`-j`  
`--json`  
&nbsp;&nbsp;&nbsp;&nbsp; Print the deployment information as JSON.

#### Common Options

`-h`  
`--help`  
&nbsp;&nbsp;&nbsp;&nbsp;Prints help information.

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
