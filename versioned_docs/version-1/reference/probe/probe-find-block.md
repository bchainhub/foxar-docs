---
title: Probe find-block
---

### NAME

probe-find-block - Get the block number closest to the provided timestamp.

### SYNOPSIS

`probe find-block` [*options*] _timestamp_

### DESCRIPTION

Get the block number closest to the provided timestamp.

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

1. Get the block number closest to New Years 2021
   ```sh
   probe find-block 1609459200
   ```

### SEE ALSO

[probe](./probe.md)
