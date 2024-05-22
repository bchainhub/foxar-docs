---
title: Probe wallet new
---

### NAME

probe-wallet-new - Create a new random keypair.

### SYNOPSIS

`probe wallet new` [*options*] [*path*]

### DESCRIPTION

Create a new random keypair.

If _path_ is specified, then the new keypair will be written to a JSON keystore encrypted with a password.
(_path_ should be an existing directory.)

### OPTIONS

#### Keystore Options

`-p`  
`--password`  
Triggers a hidden password prompt for the JSON keystore.  
**Deprecated: prompting for a hidden password is now the default.**

`--unsafe-password` _password_  
Password for the JSON keystore in cleartext.

This is **unsafe** to use and we recommend using `--password` instead.  
Environment: `PROBE_PASSWORD`

#### Common Options

`-h`  
`--help`  
Prints help information.

### EXAMPLES

1. Create a new keypair without saving it to a keystore:

   ```sh
   probe wallet new
   ```

2. Create a new keypair and save it in the `keystore` directory:
   ```sh
   probe wallet new keystore
   ```

### SEE ALSO

[probe](./probe.md), [probe wallet](./probe-wallet.md)
