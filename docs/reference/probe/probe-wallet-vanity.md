---
title: Probe wallet vanity
---

### NAME

probe-wallet-vanity - Generate a vanity address.

### SYNOPSIS

`probe wallet vanity` [*options*]

### DESCRIPTION

Generate a vanity address.

If `--nonce` is specified, then the command will try to generate a vanity contract address. The `--save-path` option allows specifying a custom file path to save the generated wallet details.

### OPTIONS

#### Keystore Options

`--starts-with` _hex_  
&nbsp;&nbsp;&nbsp;&nbsp;Prefix for the vanity address.

`--ends-with` _hex_  
&nbsp;&nbsp;&nbsp;&nbsp;Suffix for the vanity address.

`--nonce` _nonce_  
&nbsp;&nbsp;&nbsp;&nbsp;Generate a vanity contract address created by the generated keypair with the specified nonce.

`--save-path` _path_  
&nbsp;&nbsp;&nbsp;&nbsp;Path to save the generated vanity wallet. If provided, the wallet details will be saved in a JSON file at this location.

#### Common Options

`-h`  
`--help`  
&nbsp;&nbsp;&nbsp;&nbsp;Prints help information.

### EXAMPLES

1. Create a new keypair that starts with `dead`:

   ```sh
   probe wallet vanity --starts-with dead
   ```

2. Create a new keypair ends with `beef`:

   ```sh
   probe wallet vanity --ends-with beef
   ```

3. Create a new keypair that starts with `dead` and save the details to a specific path:
   ```sh
   probe wallet vanity --starts-with dead --save-path /path/to/save
   ```

### SEE ALSO

[probe](./probe.md), [probe wallet](./probe-wallet.md)
