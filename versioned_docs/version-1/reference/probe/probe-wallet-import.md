---
title: Probe wallet import
---

### NAME

probe-wallet-import - Import a private key into an encrypted keystore

### SYNOPSIS

`probe wallet import` [*options*] *account_name*

### DESCRIPTION

Import a private key into an encrypted keystore.

If no *keystore-dir* is specified, it will be saved in the default `~/.foxar/keystores`, so it can be accessed through the `--account` option in methods like `spark script`, `probe send` or any other that requires a private key.

### OPTIONS

#### Directory Options

`-k`  
`--keystore-dir`

&nbsp;&nbsp;&nbsp;&nbsp;The path to store the encrypted keystore.  
&nbsp;&nbsp;&nbsp;&nbsp;Defaults to `~/.foxar/keystores`.

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

#### Common Options

`-h`  
`--help`  
&nbsp;&nbsp;&nbsp;&nbsp;Prints help information.

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
