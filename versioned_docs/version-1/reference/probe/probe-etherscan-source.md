---
title: Probe etherscan-source
---

### NAME

probe-etherscan-source - Get the source code of a contract from Etherscan.

### SYNOPSIS

`probe etherscan-source` [*options*] _address_

### DESCRIPTION

Get the source code of a contract from Etherscan.

The destination (_to_) can be an ENS name or an address.

### OPTIONS

#### Output Options

`-d` _directory_  
The output directory to expand the source tree into.
If not provided, the source will be outputted to stdout.

#### Etherscan Options

`--chain` _chain_name_  
The Etherscan chain.

`--etherscan-api-key` _key_  
Etherscan API key, or the key of an [Etherscan configuration table](../config/etherscan).  
Environment: `ETHERSCAN_API_KEY`

#### Common Options

`-h`  
`--help`  
Prints help information.

### EXAMPLES

1. Get the source code of the WETH contract:

   ```sh
   probe etherscan-source 0xC02aaA39b223FE8D0A0e5C4F27eAD9083C756Cc2
   ```

2. Expand the source code of the WETH contract into a directory named `weth`
   ```sh
   probe etherscan-source -d weth 0xC02aaA39b223FE8D0A0e5C4F27eAD9083C756Cc2
   ```

### SEE ALSO

[probe](./probe.md)
