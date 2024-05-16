---
title: Probe balance
---

### NAME

probe-balance - Get the balance of an account in wei.

### SYNOPSIS

`probe balance` [*options*] _who_

### DESCRIPTION

Get the balance of an account.

The argument _who_ can be an ENS name or an address.

### OPTIONS

#### Query Options

`-B` _block_  
`--block` _block_  
&nbsp;&nbsp;&nbsp;&nbsp;The block height you want to query at.

&nbsp;&nbsp;&nbsp;&nbsp;Can be a block number, or any of the tags: `earliest`, `finalized`, `safe`, `latest` or `pending`.

`-e` _ether_  
`--ether` _ether_  
&nbsp;&nbsp;&nbsp;&nbsp; If this flag is used then balance will be shown in ether

#### RPC Options

`--rpc-url` _url_  
&nbsp;&nbsp;&nbsp;&nbsp;The RPC endpoint. Accepts a URL or an existing alias in the [rpc_endpoints] table, like `mainnet`.
&nbsp;&nbsp;&nbsp;&nbsp;Environment: `ETH_RPC_URL`

#### Common Options

`-h`  
`--help`  
&nbsp;&nbsp;&nbsp;&nbsp;Prints help information.

### EXAMPLES

1. Get the balance of beer.eth
   ```sh
   probe balance beer.eth
   ```

### SEE ALSO

[probe](./probe.md), [probe nonce](./probe-nonce.md)
