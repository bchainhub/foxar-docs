---
title: Probe wallet sign
---

### NAME

probe-wallet-sign - Sign a message.

### SYNOPSIS

`probe wallet sign` [*options*] _message_

### DESCRIPTION

Sign a message.

### OPTIONS

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

#### Common Options

`-h`  
`--help`  
Prints help information.

### EXAMPLES

1. Sign a message using a keystore:

   ```sh
   probe wallet sign --keystore keystore.json --interactive "hello"
   ```

2. Sign a message using a raw private key:
   ```sh
   probe wallet sign --private-key $PRIV_KEY "hello"
   ```

### SEE ALSO

[probe](./probe.md), [probe wallet](./probe-wallet.md)
