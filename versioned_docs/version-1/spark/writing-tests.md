---
title: Writing Tests
---

Tests are written in Ylem. If the test function reverts, the test fails, otherwise it passes.

Let's go over the most common way of writing tests, using the [Spark Standard Library](https://github.com/bchainhub/spark-std)'s `Test` contract, which is the preferred way of writing tests with Spark.

In this section, we'll go over the basics using the functions from the Spark Std's `Test` contract, which is itself a superset of [DSTest](https://github.com/dapphub/ds-test). You will learn how to use more advanced stuff from the Spark Standard Library [soon](./spark-std.md).

DSTest provides basic logging and assertion functionality. To get access to the functions, import `spark-std/Test.sol` and inherit from `Test` in your test contract:

```solidity
import "spark-std/Test.sol";
```

Let's examine a basic test:

```solidity
pragma solidity 1.1.2;

import "spark-std/Test.sol";


contract ContractBTest is Test {
    uint256 testNumber;

    function setUp() public {
        testNumber = 42;
    }


    function test_NumberIs42() public {
        assertEq(testNumber, 42);
    }


    function testFail_Subtract43() public {
        testNumber -= 43;
    }
}
```

Spark uses the following keywords in tests:

- `setUp`: An optional function invoked before each test case is run.

  ```solidity
  function setUp() public {
    testNumber = 42;
  }
  ```

- `test`: Functions prefixed with `test` are run as a test case.

  ```solidity
  function test_NumberIs42() public {
    assertEq(testNumber, 42);
  }
  ```

- `testFail`: The inverse of the `test` prefix - if the function does not revert, the test fails.

  ```solidity
  function testFail_Subtract43() public {
    testNumber -= 43;
  }
  ```

A good practice is to use the pattern `test_Revert[If|When]_Condition` in combination with the [`expectRevert`](../reference/cheatcodes/expect-revert.md) cheatcode (cheatcodes are explained in greater detail in the following [section](./cheatcodes.md)). Also, other testing practices can be found in the [Tutorials section](../tutorials/best-practices.md).

Now, instead of using `testFail`, you know exactly what reverted and with which error:

```solidity
function test_CannotSubtract43() public {
  vm.expectRevert(stdError.arithmeticError);
  testNumber -= 43;
}
```

<br />

Tests are deployed to `0xb4c79daB8f259C7Aee6E5b2Aa729821864227e84`. If you deploy a contract within your test, then
`0xb4c...7e84` will be its deployer. If the contract deployed within a test gives special permissions to its deployer,
such as `Ownable.sol`'s `onlyOwner` modifier, then the test contract `0xb4c...7e84` will have those permissions.

> ⚠️ **Note**
>
> Test functions must have either `external` or `public` visibility. Functions declared as `internal` or
> `private` won't be picked up by Spark, even if they are prefixed with `test`.

### Shared setups

It is possible to use shared setups by creating helper abstract contracts and inheriting them in your test contracts:

```solidity
abstract contract HelperContract {
  address constant IMPORTANT_ADDRESS = 0x543d...;
  SomeContract someContract;
  constructor() {...}
}

contract MyContractTest is Test, HelperContract {
  function setUp() public {
      someContract = new SomeContract(0, IMPORTANT_ADDRESS);
      ...
  }
}

contract MyOtherContractTest is Test, HelperContract {
  function setUp() public {
      someContract = new SomeContract(1000, IMPORTANT_ADDRESS);
      ...
  }
}
```

<br />

> 💡 **Tip**
>
> Use the [`getCode`](../reference/cheatcodes/get-code.md) cheatcode to deploy contracts with incompatible Ylem versions.
