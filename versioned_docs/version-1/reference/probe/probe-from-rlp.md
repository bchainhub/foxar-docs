---
title: Probe from-rlp
---

### NAME

probe-from-rlp - Decodes RLP-encoded data.

### SYNOPSIS

`probe from-rlp` _data_

### DESCRIPTION

Decodes RLP-encoded data.

The _data_ is a hexadecimal string with optional 0x prefix.

### OPTIONS

#### Common Options

`-h`  
`--help`  
Prints help information.

### EXAMPLES

1. Decode RLP data:

   ```sh
   probe from-rlp 0xc481f181f2

   probe from-rlp c481f181f2
   ```
