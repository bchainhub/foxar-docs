---
title: warp
---

### Signature

```solidity
function warp(uint256) external;
```

### Description

Sets `block.timestamp`.

### Examples

```solidity
vm.warp(1641070800);
emit log_uint(block.timestamp); // 1641070800
```

### SEE ALSO

Spark Standard Library

[`skip`](../spark-std/skip), [`rewind`](../spark-std/rewind)
