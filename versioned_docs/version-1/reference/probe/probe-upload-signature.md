---
title: Probe upload-signature
---

### NAME

probe-upload-signature

### SYNOPSIS

`probe upload-signature` [*signatures...*]

### DESCRIPTION

Upload the given signatures to [https://sig.eth.samczsun.com](https://sig.eth.samczsun.com).

### OPTIONS

#### Common Options

`-h`  
`--help`  
&nbsp;&nbsp;&nbsp;&nbsp;Prints help information.

### EXAMPLES

1. Upload signatures
   ```sh
   probe upload-signature 'function approve(address,uint256)' \
   'transfer(uint256)' 'event Transfer(uint256,address)'
   ```
