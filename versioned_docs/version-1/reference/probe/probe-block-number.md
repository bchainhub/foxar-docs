---
title: Probe block-number
---

### NAME

probe-block-number - Get the latest block number.

### SYNOPSIS

`probe block-number` [*options*]

### DESCRIPTION

Get the latest block number.

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

1. Get the latest block number:
   ```sh
   probe block-number
   ```

### SEE ALSO

[probe](./probe.md), [probe block](./probe-block.md)
