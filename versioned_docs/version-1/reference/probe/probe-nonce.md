---
title: Probe nonce
---

### NAME

probe-nonce - Get the nonce for an account.

### SYNOPSIS

`probe nonce` [*options*] _who_

### DESCRIPTION

Get the nonce of an account.

The argument _who_ can be an ENS name or an address.

### OPTIONS

#### Query Options

`-B` _block_  
`--block` _block_  
The block height you want to query at.

Can be a block number, or any of the tags: `earliest`, `finalized`, `safe`, `latest` or `pending`.

#### RPC Options

`--rpc-url` _url_  
The RPC endpoint. Accepts a URL or an existing alias in the [rpc_endpoints] table, like `mainnet`.
Environment: `ETH_RPC_URL`

#### Common Options

`-h`  
`--help`  
Prints help information.

### EXAMPLES

1. Get the nonce of beer.eth
   ```sh
   probe nonce beer.eth
   ```

### SEE ALSO

[probe](./probe.md), [probe balance](./probe-balance.md)
