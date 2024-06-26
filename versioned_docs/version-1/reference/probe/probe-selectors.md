---
title: Probe selectors
---

### NAME

probe-selectors - Extracts function selectors and arguments from bytecode

### SYNOPSIS

`probe selectors` [*options*] _bytecode_

### DESCRIPTION

Extracts function selectors and arguments from bytecode using the [EVMole library](https://github.com/cdump/evmole)

### OPTIONS

`-r`  
`--resolve`  
Resolve the function signatures for the extracted selectors using https://openchain.xyz

#### Common Options

`-h`  
`--help`  
Prints help information.

### EXAMPLES

1. Get WETH's contract function signatures & arguments:
   ```sh
   probe selectors $(probe code 0xC02aaA39b223FE8D0A0e5C4F27eAD9083C756Cc2)
   ```

### SEE ALSO

[probe](./probe.md), [probe 4byte](./probe-4byte.md)
