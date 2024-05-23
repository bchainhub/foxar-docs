---
title: Probe publish
---

### NAME

probe-publish - Publish a raw transaction to the network.

### SYNOPSIS

`probe publish` [*options*] _tx_

### DESCRIPTION

Publish a raw pre-signed transaction to the network.

### OPTIONS

#### Publish Options

`--async`  
`--probe-async`  
Do not wait for a transaction receipt.  
Environment: `PROBE_ASYNC`

#### RPC Options

`--rpc-url` _url_  
The RPC endpoint. Accepts a URL or an existing alias in the [rpc_endpoints] table, like `mainnet`.
Environment: `ETH_RPC_URL`

`--flashbots`  
Use the Flashbots RPC URL (https://rpc.flashbots.net).

#### Common Options

`-h`  
`--help`  
Prints help information.

### EXAMPLES

1. Publish a pre-signed transaction:

   ```sh
   probe publish --rpc-url $RPC $TX
   ```

2. Publish a pre-signed transaction with flashbots.
   ```sh
   probe publish --flashbots $TX
   ```

### SEE ALSO

[probe](./probe.md), [probe call](./probe-call.md), [probe send](./probe-send.md), [probe receipt](./probe-receipt.md)
