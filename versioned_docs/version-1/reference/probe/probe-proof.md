---
title: Probe proof
---

### NAME

probe-proof - Generate a storage proof for a given storage slot.

### SYNOPSIS

`probe proof` [*options*] _address_ [*slots...*]

### DESCRIPTION

Generate a storage proof for a given storage slot.

The address (_address_) can be an ENS name or an address.

The displayed output is a JSON object with the following keys:

- `accountProof`: Proof for the account itself
- `address`: The address of the account
- `balance`: The balance of the account
- `codeHash`: A hash of the account's code
- `nonce`: The nonce of the account
- `storageHash`: A hash of the account's storage
- `storageProof`: An array of storage proofs, one for each requested slot
- `storageProof.key`: The slot
- `storageProof.proof`: The proof for the slot
- `storageProof.value`: The value of the slot

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

#### Display Options

`-j`  
`--json`  
 Print the deployment information as JSON.

#### Common Options

`-h`  
`--help`  
Prints help information.

### EXAMPLES

1. Get the proof for storage slot 0 on the WETH contract:
   ```sh
   probe proof 0xC02aaA39b223FE8D0A0e5C4F27eAD9083C756Cc2 0
   ```

### SEE ALSO

[probe](./probe.md), [probe storage](./probe-storage.md)
