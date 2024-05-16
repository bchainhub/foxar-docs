---
title: Probe code
---

### NAME

probe-code - Get the bytecode of a contract.

### SYNOPSIS

`probe code` [*options*] _address_

### DESCRIPTION

Get the bytecode of a contract.

The contract (_address_) can be an ENS name or an address.

### OPTIONS

#### Query Options

`-B` _block_  
`--block` _block_  
&nbsp;&nbsp;&nbsp;&nbsp;The block height you want to query at.

&nbsp;&nbsp;&nbsp;&nbsp;Can be a block number, or any of the tags: `earliest`, `finalized`, `safe`, `latest` or `pending`.

#### RPC Options

`--rpc-url` _url_  
&nbsp;&nbsp;&nbsp;&nbsp;The RPC endpoint. Accepts a URL or an existing alias in the [rpc_endpoints] table, like `mainnet`.
&nbsp;&nbsp;&nbsp;&nbsp;Environment: `ETH_RPC_URL`

#### Common Options

`-h`  
`--help`  
&nbsp;&nbsp;&nbsp;&nbsp;Prints help information.

### EXAMPLES

1. Get the bytecode of the WETH contract.
   ```sh
   probe code 0xC02aaA39b223FE8D0A0e5C4F27eAD9083C756Cc2
   ```

### SEE ALSO

[probe](./probe.md), [probe proof](./probe-proof.md)
