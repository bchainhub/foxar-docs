---
title: Probe logs
---

### NAME

probe logs - Get logs by signature or topic.

### SYNOPSIS

`probe logs` [*options*] *sig_or_topic* [*topics_or_args...*]

### DESCRIPTION

Get logs by signature or topic.

The (*sig_or_topic*) may either be the event signature or its hashed topic (located at topics[0]).

If using a signature, remaining arguments must be in their ordinary form. If using a topic, the arguments must be as they themselves appear as topics.

### OPTIONS

### Query Options

`--from-block` *from_block*
&nbsp;&nbsp;&nbsp;&nbsp;The block height to start query at.

&nbsp;&nbsp;&nbsp;&nbsp;Can also be the tags: `earliest`, `finalized`, `safe`, `latest`, or `pending`.

`--to-block` *to_block*
&nbsp;&nbsp;&nbsp;&nbsp;The block height to stop query at.

&nbsp;&nbsp;&nbsp;&nbsp;Can also be the tags: `earliest`, `finalized`, `safe`, `latest`, or `pending`.

`--address` *address*
&nbsp;&nbsp;&nbsp;&nbsp;The contract address to filter on

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
