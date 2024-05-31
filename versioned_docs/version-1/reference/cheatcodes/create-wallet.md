---
title: createWallet
---

### Signature

```solidity
  struct Wallet {
      address addr;
      string publicKey;
      string privateKey;
  }
```

```solidity
  function createWallet(string memory privateKey) external returns (Wallet memory);
```

```solidity
  function createWallet(string memory privateKey, string calldata label) external returns (Wallet memory);
```

### Description

Creates a new Wallet struct when given a parameter to derive the private key from.

### Tips

[`sign()`](./sign) and [`getNonce()`](./get-nonce) both have supported function overloads for the Wallet struct as well.

### Examples

#### `uint256`

```solidity
Wallet memory wallet = vm.createWallet(string("8b58a31f0949f48bc8a61d5ab6be6a6cb1c8c9c99eaa0800170732fd5195e036c84949170c7926bf7a85d9a616a2caaac13073c2635647ebf1"));

emit log_string(wallet.privateKey); 

emit log_address(wallet.addr); // vm.addr(wallet.privateKey)

emit log_string(vm.getLabel(wallet.addr)); // ""
```

#### `uint256` and `string`

```solidity
Wallet memory wallet = vm.createWallet("8b58a31f0949f48bc8a61d5ab6be6a6cb1c8c9c99eaa0800170732fd5195e036c84949170c7926bf7a85d9a616a2caaac13073c2635647ebf1", "bob's wallet");

emit log_string(wallet.privateKey);

emit log_address(wallet.addr); // vm.addr(wallet.privateKey)

emit log_string(vm.getLabel(wallet.addr)); // "bob's wallet"
```
