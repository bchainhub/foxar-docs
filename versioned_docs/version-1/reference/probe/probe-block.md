---
title: Probe block
---

### NAME

probe-block - Get information about a block.

### SYNOPSIS

`probe block` [*options*] [*block*]

### DESCRIPTION

Get information about a block.

The specified _block_ can be a block number, or any of the tags: `earliest`, `finalized`, `safe`, `latest` or `pending`. Default to `latest`.

### OPTIONS

`-f` _field_  
`--field` _field_  
 If specified, only get the given field of the block.

#### Display Options

`-j`  
`--json`  
 Print the deployment information as JSON.

#### RPC Options

`--rpc-url` _url_  
The RPC endpoint. Accepts a URL or an existing alias in the [rpc_endpoints] table, like `mainnet`.
Environment: `ETH_RPC_URL`

#### Common Options

`-h`  
`--help`  
Prints help information.

### EXAMPLES

1. Get the latest block:

   ```sh
   probe block
   ```

2. Get the `finalized` block:

   ```sh
   probe block finalized
   ```

3. Get the hash of the latest block:
   ```sh
   probe block latest -f hash
   ```

### SEE ALSO

[probe](./probe.md), [probe basefee](./probe-basefee.md), [probe age](./probe-age.md)
