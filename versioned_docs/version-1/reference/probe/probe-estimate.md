---
title: Probe estimate
---

### NAME

probe-estimate - Estimate the gas cost of a transaction.

### SYNOPSIS

`probe estimate` [*options*] _to_ _sig_ [*args...*]

### DESCRIPTION

Estimate the gas cost of a transaction.

The destination (_to_) can be an ENS name or an address.

The signature (_sig_) can be:

- A fragment: `someFunction(uint256,bytes32)`
- A selector and encoded calldata: `0xcdba2fd40000000000000000000000000000000000000000000000000000000000007a69`
- Only the function name: in this case Probe will try to fetch the function signature from Etherscan

### OPTIONS

#### Transaction Options

`--value` _value_  
&nbsp;&nbsp;&nbsp;&nbsp;Ether to send in the transaction.

&nbsp;&nbsp;&nbsp;&nbsp;Either specified as an integer (wei), or as a string with a unit, for example:  
&nbsp;&nbsp;&nbsp;&nbsp;- `1ether`  
&nbsp;&nbsp;&nbsp;&nbsp;- `10gwei`  
&nbsp;&nbsp;&nbsp;&nbsp;- `0.01ether`

#### RPC Options

`--rpc-url` _url_  
&nbsp;&nbsp;&nbsp;&nbsp;The RPC endpoint. Accepts a URL or an existing alias in the [rpc_endpoints] table, like `mainnet`.
&nbsp;&nbsp;&nbsp;&nbsp;Environment: `ETH_RPC_URL`

`--flashbots`  
&nbsp;&nbsp;&nbsp;&nbsp;Use the Flashbots RPC URL (https://rpc.flashbots.net).

#### Etherscan Options

`--chain` _chain_name_  
&nbsp;&nbsp;&nbsp;&nbsp;The Etherscan chain.

`--etherscan-api-key` _key_  
&nbsp;&nbsp;&nbsp;&nbsp;Etherscan API key, or the key of an [Etherscan configuration table](../config/etherscan#etherscan).  
&nbsp;&nbsp;&nbsp;&nbsp;Environment: `ETHERSCAN_API_KEY`

#### Common Options

`-h`  
`--help`  
&nbsp;&nbsp;&nbsp;&nbsp;Prints help information.

### EXAMPLES

1. Estimate the gas cost of calling `deposit()` on the WETH contract:
   ```sh
   probe estimate 0xC02aaA39b223FE8D0A0e5C4F27eAD9083C756Cc2 \
     --value 0.1ether "deposit()"
   ```

### SEE ALSO

[probe](./probe.md), [probe send](./probe-send.md), [probe publish](./probe-publish.md), [probe receipt](./probe-receipt.md)
