---
title: Probe shl
---

### NAME

probe-shl - Perform a left shifting operation.

### SYNOPSIS

`probe shl` [*options*] _value_ _shift_

### DESCRIPTION

Perform a left shifting operation.

### OPTIONS

#### Base Options

`--base-in` _base_
The base of the input number. Available options:

10, d, dec, decimal

16, h, hex, hexadecimal

`--base-out` _base_
The desired base of the output. Available options:

2, b, bin, binary

8, o, oct, octal

10, d, dec, decimal

16, h, hex, hexadecimal

#### Common Options

`-h`  
`--help`  
Prints help information.

### EXAMPLES

1. Perform a 3 position left bit shift of the number 61
   ```sh
   probe shl --base-in 10 61 3
   ```

> Note: The --base-in parameter is not enforced but will be needed if the input is ambiguous.

### SEE ALSO

[probe](./probe.md), [probe shr](./probe-shr.md)
