---
title: Probe to-bytes32
---

### NAME

probe-to-bytes32 - Right-pads hex data to 32 bytes.

### SYNOPSIS

`probe to-bytes32` [*options*] _bytes_

### DESCRIPTION

Right-pads hex data to 32 bytes.

Note that this command is for padding a byte string only. If you're looking to format a [Ylem string literal](https://docs.soliditylang.org/en/v0.8.16/types.html#string-literals-and-types) into `bytes32`, use [format-bytes32-string](./probe-format-bytes32-string.md) instead.

### OPTIONS

#### Common Options

`-h`  
`--help`  
Prints help information.

### SEE ALSO

[probe](./probe.md)
