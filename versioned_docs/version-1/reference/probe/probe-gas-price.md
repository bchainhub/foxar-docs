---
title: Probe gas-price
---

### NAME

probe-gas-price - Get the current gas price.

### SYNOPSIS

`probe gas-price` [*options*]

### DESCRIPTION

Get the current gas price.

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

1. Get the current gas price:
   ```sh
   probe gas-price
   ```

### SEE ALSO

[probe](./probe.md), [probe basefee](./probe-basefee.md)
