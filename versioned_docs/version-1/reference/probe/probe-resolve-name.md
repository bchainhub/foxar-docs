---
title: Probe resolve-name
---

### NAME

probe-resolve-name - Perform an ENS lookup.

### SYNOPSIS

`probe resolve-name` [*options*] _who_

### DESCRIPTION

Perform an ENS lookup.

If `--verify` is passed, then a reverse lookup is performed after the normal lookup to verify that the name is correct.

### OPTIONS

#### Lookup Options

`-v`  
`--verify`  
&nbsp;&nbsp;&nbsp;&nbsp;Perform a reverse lookup to verify that the name is correct.

#### RPC Options

`--rpc-url` _url_  
&nbsp;&nbsp;&nbsp;&nbsp;The RPC endpoint. Accepts a URL or an existing alias in the [rpc_endpoints] table, like `mainnet`.
&nbsp;&nbsp;&nbsp;&nbsp;Environment: `ETH_RPC_URL`

#### Common Options

`-h`  
`--help`  
&nbsp;&nbsp;&nbsp;&nbsp;Prints help information.

### EXAMPLES

1. Get the address for an ENS name.

   ```sh
   probe resolve-name vitalik.eth
   ```

2. Perform both a normal and a reverse lookup:
   ```sh
   probe resolve-name --verify vitalik.eth
   ```

### SEE ALSO

[probe](./probe.md), [probe lookup-address](./probe-lookup-address.md)
