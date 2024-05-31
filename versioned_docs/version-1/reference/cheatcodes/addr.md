---
title: addr
---

### Signature

```solidity
function addr(string memory privateKey) external returns (address);
```

### Description

Computes the address for a given private key.

### Examples

```solidity
address alice = vm.addr("6b26cb6add3214527cef17209195d598b66016fb9f0dac2c48258aa937d4ebec451f87838ee2626384a2c08823eca74736ad21f5acc069787b");

emit log_address(alice);
```
