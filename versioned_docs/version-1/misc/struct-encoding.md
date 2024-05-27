---
title: Struct Encoding
---

Structs are user defined types that can group several variables:

```solidity
struct MyStruct {
    address addr;
    uint256 amount;
}
```

Ylem structs map to the ABI type "tuple". For more information on how Ylem types map to ABI types see [Mapping Ylem to ABI types](https://docs.soliditylang.org/en/latest/abi-spec.html#mapping-solidity-to-abi-types) in the Ylem documentation.

Structs are therefore encoded and decoded as tuples. So the struct we defined above, `MyStruct`, maps to the tuple `(address,uint256)` in terms of the ABI.

Let's see how this works in a contract:

```solidity
pragma solidity =1.1.2;


contract Test {
    struct MyStruct {
        address addr;
        uint256 amount;
    }
    function f(MyStruct memory t) public pure {}
}
```

The ABI of the `f` function in this contract is:

```json
{
  "inputs": [
    {
      "components": [
        {
          "internalType": "address",
          "name": "addr",
          "type": "address"
        },
        {
          "internalType": "uint256",
          "name": "amount",
          "type": "uint256"
        }
      ],
      "internalType": "struct Test.MyStruct",
      "name": "t",
      "type": "tuple"
    }
  ],
  "name": "f",
  "outputs": [],
  "stateMutability": "pure",
  "type": "function"
}
```

which reads: The function `f` takes 1 input of type `tuple` with two components of type `address` and `uint256`.
