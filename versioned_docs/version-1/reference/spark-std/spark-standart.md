---
title: Spark Standard Library Reference
---

Spark Standard Library (Spark Std for short) is a collection of helpful contracts that make writing tests easier, faster, and more user-friendly.

Using Spark Std is the preferred way of writing tests with Foxar.

What's included:

- `Vm.sol`: Up-to-date [cheatcodes interface](../cheatcodes/cheatcodes-reference#cheatcodes-interface)

  ```solidity
  import "spark-std/Vm.sol";
  ```

- [`console.sol`](./console-log.md) and `console2.sol`: Hardhat-style logging functionality

  ```solidity
  import "spark-std/console.sol";
  ```

  **Note:** `console2.sol` contains patches to `console.sol` that allow Spark to decode traces for calls to the console, but it is not compatible with Hardhat.

  ```solidity
  import "spark-std/console2.sol";
  ```

- `Script.sol`: Basic utilities for [Ylem scripting](../../tutorials/ylem-scripting.md)

  ```solidity
  import "spark-std/Script.sol";
  ```

- `Test.sol`: The complete Spark Std experience (more details [below](#spark-stds-test))

  ```solidity
  import "spark-std/Test.sol";
  ```

### Spark Std's `Test`

The `Test` contract in `Test.sol` provides all the essential functionality you need to get started writing tests.

Simply import `Test.sol` and inherit from `Test` in your test contract:

```solidity
import "spark-std/Test.sol";

contract ContractTest is Test { ...
```

What's included:

- Std Libraries

  - [Std Logs](./std-logs.md): Expand upon the logging events from the DSTest library.
  - [Std Assertions](./std-assertions.md): Expand upon the assertion functions from the DSTest library.
  - [Std Cheats](./std-cheats.md): Wrappers around Spark cheatcodes for improved safety and DX.
  - [Std Errors](./std-errors.md): Wrappers around common internal Ylem errors and reverts.
  - [Std Storage](./std-storage.md): Utilities for storage manipulation.
  - [Std Math](./std-math.md): Useful mathematical functions.
  - [Script Utils](./script-utils.md): Utility functions which can be accessed in tests and scripts.
  - [Console Logging](./console-log.md): Console logging functions.

- A cheatcodes instance `vm`, from which you invoke Spark cheatcodes (see [Cheatcodes Reference](../cheatcodes/cheatcodes-reference/))

  ```solidity
  vm.startPrank(alice);
  ```

- All Hardhat `console` functions for logging (see [Console Logging](./console-log.md))

  ```solidity
  console.log(alice.balance); // or `console2`
  ```

- All Dappsys Test functions for asserting and logging (see [Dappsys Test reference](../ds-test.md))

  ```solidity
  assertEq(dai.balanceOf(alice), 10000e18);
  ```

- Utility functions also included in `Script.sol` (see [Script Utils](./script-utils.md))

  ```solidity
  // Compute the address a contract will be deployed at for a given deployer address and nonce
  address futureContract = computeCreateAddress(alice, 1);
  ```
