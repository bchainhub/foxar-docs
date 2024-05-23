---
title: Probe client
---

### NAME

probe-client - Get the current client version.

### SYNOPSIS

`probe client` [*options*]

### DESCRIPTION

Get the current client version.

### OPTIONS

#### RPC Options

`--rpc-url` _url_  
The RPC endpoint. Accepts a URL or an existing alias in the [rpc_endpoints] table, like `mainnet`.
Environment: `ETH_RPC_URL`

#### Common Options

`-h`  
`--help`  
Prints help information.

### EXAMPLES

1. Get the current client version:
   ```sh
   probe client
   ```

### SEE ALSO

[probe](./probe.md)
