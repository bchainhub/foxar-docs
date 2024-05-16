---
title: Probe receipt
---

### NAME

probe-receipt - Get the transaction receipt for a transaction.

### SYNOPSIS

`probe receipt` [*options*] _tx_hash_ [*field*]

### DESCRIPTION

Get the transaction receipt for a transaction.

If _field_ is specified, then only the given field of the receipt is displayed.

### OPTIONS

#### Receipt Options

`--async`  
`--probe-async`  
&nbsp;&nbsp;&nbsp;&nbsp;Do not wait for the transaction receipt if it does not exist yet.  
&nbsp;&nbsp;&nbsp;&nbsp;Environment: `PROBE_ASYNC`

`-c` _confirmations_  
`--confirmations` _confirmations_  
&nbsp;&nbsp;&nbsp;&nbsp;Wait a number of confirmations before exiting. Default: `1`.

#### RPC Options

`--rpc-url` _url_  
&nbsp;&nbsp;&nbsp;&nbsp;The RPC endpoint. Accepts a URL or an existing alias in the [rpc_endpoints] table, like `mainnet`.
&nbsp;&nbsp;&nbsp;&nbsp;Environment: `ETH_RPC_URL`

#### Display Options

`-j`  
`--json`  
&nbsp;&nbsp;&nbsp;&nbsp; Print the deployment information as JSON.

#### Common Options

`-h`  
`--help`  
&nbsp;&nbsp;&nbsp;&nbsp;Prints help information.

### EXAMPLES

1. Get a transaction receipt:

   ```sh
   probe receipt $TX_HASH
   ```

2. Get the block number the transaction was included in:
   ```sh
   probe receipt $TX_HASH blockNumber
   ```

### SEE ALSO

[probe](./probe.md), [probe call](./probe-call.md), [probe send](./probe-send.md), [probe publish](./probe-publish.md)
