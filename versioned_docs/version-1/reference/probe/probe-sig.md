---
title: Probe sig
---

### NAME

probe-sig - Get the selector for a function.

### SYNOPSIS

`probe sig` [*options*] _sig_

### DESCRIPTION

Get the selector for a function.

The signature (_sig_) is a fragment in the form `<function name>(<types...>)`.

### OPTIONS

#### Common Options

`-h`  
`--help`  
Prints help information.

### EXAMPLES

1. Get the selector for the function `transfer(address,uint256)`:

   ```sh
   probe sig "transfer(address,uint256)"
   ```

2. Get the selector for a function that expects a `struct`:

   ```solidity
   contract Test {
       struct MyStruct {
           address addr;
           uint256 amount;
       }
       function myfunction(MyStruct memory t) public pure {}
   }
   ```

   Structs are encoded as tuples (see [struct encoding](../../misc/struct-encoding)).

   ```sh
   probe sig "myfunction((address,uint256))"
   ```

### SEE ALSO

[probe](./probe.md), [struct encoding](../../misc/struct-encoding.md)
