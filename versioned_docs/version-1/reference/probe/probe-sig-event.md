---
title: Probe sig-event
---

### NAME

probe-sig-event - Generate event signatures from event string.

### SYNOPSIS

`probe sig-event` [*options*] _event_string_

### DESCRIPTION

Generate event signatures from event string.

### OPTIONS

#### Common Options

`-h`  
`--help`  
Prints help information.

### EXAMPLES

1. Get the hash for the log `Transfer(address indexed from, address indexed to, uint256 amount)`:
   ```sh
   probe sig-event "Transfer(address indexed from, address indexed to, uint256 amount)"
   ```

### SEE ALSO

[probe](./probe.md)
