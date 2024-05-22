---
title: Probe pretty-calldata
---

### NAME

probe-pretty-calldata - Pretty print calldata.

### SYNOPSIS

`probe pretty-calldata` [*options*] _calldata_

### DESCRIPTION

Pretty print calldata.

Tries to decode the calldata using https://sig.eth.samczsun.com unless `--offline` is passed.

### OPTIONS

#### 4byte Options

`-o`  
`--offline`  
Skip the https://sig.eth.samczsun.com lookup.

#### Common Options

`-h`  
`--help`  
Prints help information.

### EXAMPLES

1. Decode calldata for a `transfer` call:
   ```sh
   probe pretty-calldata 0xa9059cbb000000000000000000000000e78388b4ce79068e89bf8aa7f218ef6b9ab0e9d00000000000000000000000000000000000000000000000000174b37380cea000
   ```

### SEE ALSO

[probe](./probe.md), [probe 4byte-decode](./probe-4byte-decode.md)
