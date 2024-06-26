---
title: Probe abi-decode
---

### NAME

probe-abi-decode - Decode ABI-encoded input or output data.

### SYNOPSIS

`probe abi-decode` [*options*] _sig_ _calldata_

### DESCRIPTION

Decode ABI-encoded input or output data.

By default, the command will decode output data. To decode input data, pass `--input` or use [`probe calldata-decode`](./probe-calldata-decode.md).

The signature (_sig_) is a fragment in the form `<function name>(<types...>)(<types...>)`.

### OPTIONS

#### Decoder Options

`-i`  
`--input`  
Decode input data.

#### Common Options

`-h`  
`--help`  
Prints help information.

### EXAMPLES

1. Decode output data for a `balanceOf` call:

   ```sh
   probe abi-decode "balanceOf(address)(uint256)" \
     0x000000000000000000000000000000000000000000000000000000000000000a
   ```

2. Decode input data for a `transfer` call:
   ```sh
   probe abi-decode --input "transfer(address,uint256)" \
     0xa9059cbb000000000000000000000000e78388b4ce79068e89bf8aa7f218ef6b9ab0e9d0000000000000000000000000000000000000000000000000008a8e4b1a3d8000
   ```

### SEE ALSO

[probe](./probe.md), [probe calldata-decode](./probe-calldata-decode.md)
