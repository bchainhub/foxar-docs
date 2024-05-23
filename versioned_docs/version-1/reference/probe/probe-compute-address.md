---
title: Probe compute-address
---

### NAME

probe-compute-address - Compute the contract address from a given nonce and deployer address.

### SYNOPSIS

`probe compute-address` [*options*] _address_

### DESCRIPTION

Compute the contract address from a given nonce and deployer address.

### OPTIONS

#### Compute Options

`--nonce` _nonce_  
The nonce of the account. Defaults to the latest nonce, fetched from the RPC.

#### RPC Options

`--rpc-url` _url_  
The RPC endpoint. Accepts a URL or an existing alias in the [rpc_endpoints] table, like `mainnet`.
Environment: `ETH_RPC_URL`

#### Common Options

`-h`  
`--help`  
Prints help information.

### SEE ALSO

[probe](./probe.md), [probe proof](./probe-proof.md), [probe create2](./probe-create2.md)
