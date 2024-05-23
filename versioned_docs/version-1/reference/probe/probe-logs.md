---
title: Probe logs
---

### NAME

probe logs - Get logs by signature or topic.

### SYNOPSIS

`probe logs` [*options*] _sig_or_topic_ [*topics_or_args...*]

### DESCRIPTION

Get logs by signature or topic.

The (_sig_or_topic_) may either be the event signature or its hashed topic (located at topics[0]).

If using a signature, remaining arguments must be in their ordinary form. If using a topic, the arguments must be as they themselves appear as topics.

### OPTIONS

### Query Options

`--from-block` _from_block_
The block height to start query at.

Can also be the tags: `earliest`, `finalized`, `safe`, `latest`, or `pending`.

`--to-block` _to_block_
The block height to stop query at.

Can also be the tags: `earliest`, `finalized`, `safe`, `latest`, or `pending`.

`--address` _address_
The contract address to filter on

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

### EXAMPLES

1. Get logs using a signature:
   ```sh
   probe logs --from-block 15537393 --to-block latest 'Transfer (address indexed from, address indexed to, uint256 value)' 0x2e8ABfE042886E4938201101A63730D04F160A82
   ```
2. Get logs using a topic:
   ```sh
   probe logs --from-block 15537393 --to-block latest 0xddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef 0x0000000000000000000000002e8abfe042886e4938201101a63730d04f160a82
   ```

### SEE ALSO

[probe](./probe.md)
