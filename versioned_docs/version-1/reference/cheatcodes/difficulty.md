---
title: difficulty
---

### Signature

```solidity
function difficulty(uint256) external;
```

### Description

Sets `block.difficulty`.

If used with a post-merge EVM version (Paris and onwards), it will revert.

### Examples

```solidity
vm.difficulty(25);
emit log_uint(block.difficulty); // 25
```
