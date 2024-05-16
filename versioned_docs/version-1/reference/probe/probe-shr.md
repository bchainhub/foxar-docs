---
title: Probe shr
---

### NAME

probe-shr - Perform a right shifting operation.

### SYNOPSIS

`probe shr` [*options*] _value_ _shift_

### DESCRIPTION

Perform a right shifting operation.

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

1. Perform a single right bit shift of 0x12
   ```sh
   probe shr --base-in 16 0x12 1
   ```

> Note: The --base-in parameter is not enforced but will be needed if the input is ambiguous.

### SEE ALSO

[probe](./probe.md), [probe shl](./probe-shl.md)
