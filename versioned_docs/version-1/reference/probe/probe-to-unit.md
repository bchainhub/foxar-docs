---
title: Probe to-unit
---

### NAME

probe-to-unit - Convert an eth amount to another unit.

### SYNOPSIS

`probe to-unit` [*options*] _value_ [*unit*]

### DESCRIPTION

Convert an eth amount to another unit.

The value to convert (_value_) can be a quantity of eth (in wei), or a number with a unit attached to it.

Valid units are:

- `ether`
- `gwei`
- `wei`

### OPTIONS

#### Common Options

`-h`  
`--help`  
Prints help information.

### EXAMPLES

1. Convert 1000 wei to gwei

   ```sh
   probe to-unit 1000 gwei
   ```

2. Convert 1 eth to gwei
   ```sh
   probe to-unit 1ether gwei
   ```

### SEE ALSO

[probe](./probe.md)
