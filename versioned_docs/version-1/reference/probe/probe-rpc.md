---
title: Probe rpc
---

### NAME

probe-rpc - Perform a raw JSON-RPC request

### SYNOPSIS

`probe rpc` [*options*] _METHOD_ [*PARAMS...*]

### DESCRIPTION

Perform a simple JSON-RPC POST request for the given method and with the params

### OPTIONS

#### Query Options

`-r` _url_
`--rpc-url` _url_
The URL of the provider

`-w`
`--raw`
Pass the "params" as is
If --raw is passed the first PARAM will be taken as the value of "params". If no params are given, stdin will be used. For example:
rpc eth_getBlockByNumber '["0x123", false]' --raw

=> \{"method": "eth_getBlockByNumber", "params": ["0x123", false] ... }

### EXAMPLES

1. Get latest `eth_getBlockByNumber` on localhost:

   ```sh
   probe rpc eth_getBlockByNumber "latest" "false"
   ```

2. Get `eth_getTransactionByHash` on localhost:

   ```sh
   probe rpc eth_getTransactionByHash 0x2642e960d3150244e298d52b5b0f024782253e6d0b2c9a01dd4858f7b4665a3f
   ```

3. Get latest `eth_getBlockByNumber` on etherum mainnet:

   ```sh
   probe rpc --rpc-url https://mainnet.infura.io/v3/ eth_getBlockByNumber "latest" "false"
   ```
