---
title: addr
---

### Signature

```solidity
function addr(string privateKey) external returns (address);
```

### Description

Computes the address for a given private key.

### Examples

```solidity
address alice = vm.addr("bea39eebcf9f203f8d1f0aa576bf757739ef418922baedb0c79c4cddef55b5bb3d1e675f50c1385700ea07585cacc10b25e846a350ae11f91f");
emit log_address(alice); 
```
