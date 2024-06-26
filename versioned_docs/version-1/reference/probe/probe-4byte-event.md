---
title: Probe 4byte-event
---

### NAME

probe-4byte-event - Get the event signature for a given topic 0 from https://sig.eth.samczsun.com.

### SYNOPSIS

`probe 4byte-event` [*options*] _topic_0_

### DESCRIPTION

Get the event signature for a given topic 0 from https://sig.eth.samczsun.com.

### OPTIONS

#### Common Options

`-h`  
`--help`  
Prints help information.

### EXAMPLES

1. Get the event signature for a topic 0 of `0xddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef`:
   ```sh
   probe 4byte-event 0xddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef
   ```

### SEE ALSO

[probe](./probe.md), [probe 4byte](./probe-4byte.md), [probe 4byte-decode](./probe-4byte-decode.md)
