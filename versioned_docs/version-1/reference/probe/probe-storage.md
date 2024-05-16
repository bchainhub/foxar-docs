---
title: Probe storage
---

### NAME

probe-storage - Get the raw value of a contract's storage slot or its full storage layout.

### SYNOPSIS

`probe storage` [*options*] _address_ _slot_

### DESCRIPTION

Get the raw value of a contract's storage slot. (Slot locations greater than 18446744073709551615 (u64::MAX) should be given as hex. Use `probe index` to compute mapping slots.)

Emit the slot number to get the full storage layout (requires contract to be verified on Etherscan with a Solidity version > 0.6.5 or you must be in a Spark project with a local contract matching the deployed bytecode).

The address (_address_) can be an ENS name or an address.

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

1. Get the value of slot 0 on the WETH contract.

   ```sh
   probe storage 0xC02aaA39b223FE8D0A0e5C4F27eAD9083C756Cc2 0
   ```

2. Get the full storage layout of the Milady contract.
   ```sh
   probe storage 0x5Af0D9827E0c53E4799BB226655A1de152A425a5
   ```

### SEE ALSO

[probe](./probe.md), [probe proof](./probe-proof.md)
