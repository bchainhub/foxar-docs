---
title: Probe nonce
---

### NAME

probe-nonce - Get the nonce for an account.

### SYNOPSIS

`probe nonce` [*options*] *who*

### DESCRIPTION

Get the nonce of an account.

The argument *who* can be an ENS name or an address.

### OPTIONS

#### Query Options

`-B` *block*  
`--block` *block*  
&nbsp;&nbsp;&nbsp;&nbsp;The block height you want to query at.

&nbsp;&nbsp;&nbsp;&nbsp;Can be a block number, or any of the tags: `earliest`, `finalized`, `safe`, `latest` or `pending`.

#### RPC Options

`--rpc-url` *url*  
&nbsp;&nbsp;&nbsp;&nbsp;The RPC endpoint. Accepts a URL or an existing alias in the [rpc_endpoints] table, like `mainnet`.
&nbsp;&nbsp;&nbsp;&nbsp;Environment: `ETH_RPC_URL`

#### Common Options

`-h`  
`--help`  
&nbsp;&nbsp;&nbsp;&nbsp;Prints help information.

### EXAMPLES

1. Get the nonce of beer.eth
   ```sh
   probe nonce beer.eth
   ```

### SEE ALSO

[probe](./probe.md), [probe balance](./probe-balance.md)
