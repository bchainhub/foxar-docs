---
title: Probe tx
---

### NAME

probe-tx - Get information about a transaction.

### SYNOPSIS

`probe tx` [*options*] _tx_hash_ [*field*]

### DESCRIPTION

Get information about a transaction.

If _field_ is specified, then only the given field of the transaction is displayed.

### OPTIONS

#### RPC Options

`--rpc-url` _url_  
The RPC endpoint. Accepts a URL or an existing alias in the [rpc_endpoints] table, like `mainnet`.
Environment: `ETH_RPC_URL`

#### Display Options

`-j`  
`--json`  
 Print the deployment information as JSON.

#### Common Options

`-h`  
`--help`  
Prints help information.

### EXAMPLES

1. Get information about a transaction:

   ```sh
   probe tx $TX_HASH
   ```

2. Get the sender of a transaction:
   ```sh
   probe tx $TX_HASH from
   ```

### SEE ALSO

[probe](./probe.md), [probe receipt](./probe-receipt.md)
