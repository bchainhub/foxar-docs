---
title: Probe wallet import
---

### NAME

probe-wallet-import - Import a private key into an encrypted keystore

### SYNOPSIS

`probe wallet import` [*options*] _account_name_

### DESCRIPTION

Import a private key into an encrypted keystore.

If no _keystore-dir_ is specified, it will be saved in the default `~/.foxar/keystores`, so it can be accessed through the `--account` option in methods like `spark script`, `probe send` or any other that requires a private key.

### OPTIONS

#### Directory Options

`-k`  
`--keystore-dir`

The path to store the encrypted keystore.  
Defaults to `~/.foxar/keystores`.

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

#### Common Options

`-h`  
`--help`  
Prints help information.

### EXAMPLES

1. Create a keystore from a private key:

   ```sh
   probe wallet import BOB --interactive
   ```

2. Create a keystore from a mnemonic:

   ```sh
   probe wallet import ALICE --mnemonic "test test test test test test test test test test test test"
   ```

3. Create a keystore from a mnemonic with a specific mnemonic index:
   ```sh
   probe wallet import ALICE --mnemonic "test test test test test test test test test test test test" --mnemonic-index 1
   ```

### SEE ALSO

[probe](./probe.md), [probe wallet](./probe-wallet.md)
