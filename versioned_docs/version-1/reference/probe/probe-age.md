---
title: Probe age
---

### NAME

probe-age - Get the timestamp of a block.

### SYNOPSIS

`probe age` [*options*] [*block*]

### DESCRIPTION

Get the timestamp of a block.

The specified *block* can be a block number, or any of the tags: `earliest`, `finalized`, `safe`, `latest` or `pending`. Default to `latest`.

### OPTIONS

#### RPC Options

`--rpc-url` *url*  
&nbsp;&nbsp;&nbsp;&nbsp;The RPC endpoint. Accepts a URL or an existing alias in the [rpc_endpoints] table, like `mainnet`.
&nbsp;&nbsp;&nbsp;&nbsp;Environment: `ETH_RPC_URL`

#### Common Options

`-h`  
`--help`  
&nbsp;&nbsp;&nbsp;&nbsp;Prints help information.

### EXAMPLES

1. Get the timestamp of the latest block:

   ```sh
   probe age
   ```

2. Get the timestamp of the genesis block:
   ```sh
   probe age 1
   ```

### SEE ALSO

[probe](./probe.md), [probe block](./probe-block.md), [probe basefee](./probe-basefee.md)
