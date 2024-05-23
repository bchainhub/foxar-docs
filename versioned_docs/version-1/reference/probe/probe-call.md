---
title: Probe call
---

### NAME

probe-call - Perform a call on an account without publishing a transaction.

### SYNOPSIS

`probe call` [*options*] _to_ _sig_ [*args...*]

### DESCRIPTION

Perform a call on an account without publishing a transaction.

The destination (_to_) can be an ENS name or an address.

The signature (_sig_) can be:

- A fragment: `someFunction(uint256,bytes32)`
- A selector and encoded calldata: `0xcdba2fd40000000000000000000000000000000000000000000000000000000000007a69`
- Only the function name: in this case Probe will try to fetch the function signature from Etherscan

### OPTIONS

`--trace`  
Prints traces for the transaction.

`--debug`  
Opens an interactive debugger with the transaction. Needs `--trace`.

`--labels <address:label>`  
Labels to apply to the traces, with the format `address:label`. Needs `--trace`.

`--evm-version`  
The EVM version to use. Needs `--trace`.

#### Query Options

`-B` _block_  
`--block` _block_  
The block height you want to query at.

Can be a block number, or any of the tags: `earliest`, `finalized`, `safe`, `latest` or `pending`.

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
Etherscan API key, or the key of an [Etherscan configuration table](../config/etherscan#etherscan).  
Environment: `ETHERSCAN_API_KEY`

#### Common Options

`-h`  
`--help`  
Prints help information.

### EXAMPLES

1. Call `balanceOf(address)` on the WETH contract:

   ```sh
   probe call 0xC02aaA39b223FE8D0A0e5C4F27eAD9083C756Cc2 \
     "balanceOf(address)(uint256)" 0x...
   ```

2. Call `tokenURI(uint256)(string)` on the Tubby Cats NFT contract:

   ```sh
   export CONTRACT=0xca7ca7bcc765f77339be2d648ba53ce9c8a262bd
   export TOKEN_ID=19938
   probe call $CONTRACT "tokenURI(uint256)(string)" $TOKEN_ID
   ```

3. Call `getAmountsOut(uint,address[])` on the Uniswap v2 router contract:

   ```sh
   probe call 0x7a250d5630B4cF539739dF2C5dAcb4c659F2488D \
    "getAmountsOut(uint,address[])" 1 "[0x6b...0f,0xc0...c2]"
   ```

### SEE ALSO

[probe](./probe.md), [probe send](./probe-send.md), [probe publish](./probe-publish.md), [probe receipt](./probe-receipt.md)
