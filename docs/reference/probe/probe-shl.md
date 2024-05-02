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
&nbsp;&nbsp;&nbsp;&nbsp;The base of the input number. Available options:

&nbsp;&nbsp;&nbsp;&nbsp;10, d, dec, decimal

&nbsp;&nbsp;&nbsp;&nbsp;16, h, hex, hexadecimal

`--base-out` _base_
&nbsp;&nbsp;&nbsp;&nbsp;The desired base of the output. Available options:

&nbsp;&nbsp;&nbsp;&nbsp;2, b, bin, binary

&nbsp;&nbsp;&nbsp;&nbsp;8, o, oct, octal

&nbsp;&nbsp;&nbsp;&nbsp;10, d, dec, decimal

&nbsp;&nbsp;&nbsp;&nbsp;16, h, hex, hexadecimal

#### Common Options

`-h`  
`--help`  
&nbsp;&nbsp;&nbsp;&nbsp;Prints help information.

### EXAMPLES

1. Perform a 3 position left bit shift of the number 61
   ```sh
   probe shl --base-in 10 61 3
   ```

> Note: The --base-in parameter is not enforced but will be needed if the input is ambiguous.

### SEE ALSO

[probe](./probe.md), [probe shr](./probe-shr.md)
