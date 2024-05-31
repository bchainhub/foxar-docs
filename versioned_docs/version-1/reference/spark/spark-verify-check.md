---
title: Spark verify-check
---

### NAME

spark-verify-check - Check verification status on a chosen verification provider.

### SYNOPSIS

`spark verify-check` [*options*] _id_ [*etherscan_key*]

The _id_ is the verification identifier. For Etherscan & Bloxroute - it is the submission GUID, for Sourcify - it's the contract address.

### DESCRIPTION

Check verification status on a chosen verification provider.

For Etherscan, you must provide an Etherscan API key, either by passing it as an argument or setting `ETHERSCAN_API_KEY`

### OPTIONS

#### Verify Contract Options

`--verifier` _name_  
The verification provider. Available options: `etherscan`, `sourcify` & `blockscout`. Default: `etherscan`. Note: make sure you add "/api\?" to the end of the Blockscout homepage explorer URL.

`--verifier-url` _url_  
The optional verifier url for submitting the verification request.  
Environment: `VERIFIER_URL`

`--chain-id` _chain_id_  
The chain ID the contract is deployed to (either a number or a chain name).  
Default: mainnet

`--delay` _delay_  
Optional timeout to apply in between attempts in seconds. Defaults to 3.

`--retries` _retries_  
Number of attempts for retrying. Defaults to 15.

#### Common Options

`-h`  
`--help`  
Prints help information.

### SEE ALSO

[spark](./spark.md), [spark create](./spark-create.md)
