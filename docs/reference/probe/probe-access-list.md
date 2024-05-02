---
title: Probe access-list
---

### NAME

probe-access-list - Create an access list for a transaction.

### SYNOPSIS

`probe access-list` [*options*] _to_ _sig_ [*args...*]

### DESCRIPTION

Create an access list for a transaction.

The destination (_to_) can be an ENS name or an address.

The signature (_sig_) can be:

- A fragment: `someFunction(uint256,bytes32)`
- A selector and encoded calldata: `0xcdba2fd40000000000000000000000000000000000000000000000000000000000007a69`
- Only the function name: in this case Probe will try to fetch the function signature from Etherscan

### OPTIONS

#### Query Options

`-B` _block_  
`--block` _block_  
&nbsp;&nbsp;&nbsp;&nbsp;The block height you want to query at.

&nbsp;&nbsp;&nbsp;&nbsp;Can be a block number, or any of the tags: `earliest`, `finalized`, `safe`, `latest` or `pending`.

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

#### Common Options

`-h`  
`--help`  
&nbsp;&nbsp;&nbsp;&nbsp;Prints help information.

### SEE ALSO

[probe](./probe.md), [probe send](./probe-send.md), [probe publish](./probe-publish.md), [probe call](./probe-call.md)
