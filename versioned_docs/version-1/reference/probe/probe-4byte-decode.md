---
title: Probe 4byte-decode
---

### NAME

probe-4byte-decode - Decode ABI-encoded calldata using https://sig.eth.samczsun.com.

### SYNOPSIS

`probe 4byte-decode` [*options*] _calldata_

### DESCRIPTION

Decode ABI-encoded calldata using https://sig.eth.samczsun.com.

### OPTIONS

#### 4byte Options

`--id` _id_  
The index of the resolved signature to use.

https://sig.eth.samczsun.com can have multiple possible signatures for a given selector.  
The index can be an integer, or the tags "earliest" and "latest".

#### Common Options

`-h`  
`--help`  
Prints help information.

### EXAMPLES

1. Decode calldata for a `transfer` call:
   ```sh
   probe 4byte-decode 0xa9059cbb000000000000000000000000e78388b4ce79068e89bf8aa7f218ef6b9ab0e9d00000000000000000000000000000000000000000000000000174b37380cea000
   ```

### SEE ALSO

[probe](./probe.md), [probe 4byte](./probe-4byte.md), [probe 4byte-event](./probe-4byte-event.md)
