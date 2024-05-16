---
title: Probe 4byte
---

### NAME

probe-4byte - Get the function signatures for the given selector from https://sig.eth.samczsun.com.

### SYNOPSIS

`probe 4byte` [*options*] _sig_

### DESCRIPTION

Get the function signatures for the given selector from https://sig.eth.samczsun.com.

### OPTIONS

#### Common Options

`-h`  
`--help`  
&nbsp;&nbsp;&nbsp;&nbsp;Prints help information.

### EXAMPLES

1. Get the function signature for the selector `0x8cc5ce99`:
   ```sh
   probe 4byte 0x8cc5ce99
   ```

### SEE ALSO

[probe](./probe.md), [probe 4byte-decode](./probe-4byte-decode.md), [probe 4byte-event](./probe-4byte-event.md), [probe selectors](./probe-selectors.md)
