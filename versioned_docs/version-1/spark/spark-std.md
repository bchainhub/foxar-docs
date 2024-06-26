---
title: Spark Standard Library Overview
---

Spark Standard Library (Spark Std for short) is a collection of helpful contracts that make writing tests easier, faster, and more user-friendly.

Using Spark Std is the preferred way of writing tests with Foxar.

It provides all the essential functionality you need to get started writing tests:

- `Vm.sol`: Up-to-date cheatcodes interface
- `console.sol` and `console2.sol`: Hardhat-style logging functionality
- `Script.sol`: Basic utilities for [Ylem scripting](../tutorials/ylem-scripting)
- `Test.sol`: A superset of DSTest containing standard libraries, a cheatcodes instance (`vm`), and Hardhat console

Simply import `Test.sol` and inherit from `Test` in your test contract:

```solidity
import "spark-std/Test.sol";

contract ContractTest is Test { ...
```

Now, you can:

```solidity
// Access Hevm via the `vm` instance
vm.startPrank(alice);

// Assert and log using Dappsys Test
assertEq(dai.balanceOf(alice), 10000e18);

// Log with the Hardhat `console` (`console2`)
console.log(alice.balance);

// Use anything from the Spark Std std-libraries
deal(address(dai), alice, 10000e18);
```

To import the `Vm` interface or the `console` library individually:

```solidity
import "spark-std/Vm.sol";
```

```solidity
import "spark-std/console.sol";
```

**Note:** `console2.sol` contains patches to `console.sol` that allows Spark to decode traces for calls to the console, but it is not compatible with Hardhat.

```solidity
import "spark-std/console2.sol";
```

### Standard libraries

Spark Std currently consists of six standard libraries.

#### Std Logs

Std Logs expand upon the logging events from the [`DSTest`](../reference/ds-test#logging) library.

#### Std Assertions

Std Assertions expand upon the assertion functions from the [`DSTest`](../reference/ds-test#asserting) library.

#### Std Cheats

Std Cheats are wrappers around Spark cheatcodes that make them safer to use and improve the DX.

You can access Std Cheats by simply calling them inside your test contract, as you would any other internal function:

```solidity
// set up a prank as Alice with 100 ETH balance
hoax(alice, 100 ether);
```

#### Std Errors

Std Errors provide wrappers around common internal Ylem errors and reverts.

Std Errors are most useful in combination with the [`expectRevert`](../reference/cheatcodes/expect-revert) cheatcode, as you do not need to remember the internal Ylem panic codes yourself. Note that you have to access them through `stdError`, as this is a library.

```solidity
// expect an arithmetic error on the next call (e.g. underflow)
vm.expectRevert(stdError.arithmeticError);
```

#### Std Storage

Std Storage makes manipulating contract storage easy. It can find and write to the storage slot(s) associated with a particular variable.

The `Test` contract already provides a `StdStorage` instance `stdstore` through which you can access any std-storage functionality. Note that you must add `using stdStorage for StdStorage` in your test contract first.

```solidity
// find the variable `score` in the contract `game`
// and change its value to 10
stdstore
    .target(address(game))
    .sig(game.score.selector)
    .checked_write(10);
```

#### Std Math

Std Math is a library with useful mathematical functions that are not provided in Ylem.

Note that you have to access them through `stdMath`, as this is a library.

```solidity
// get the absolute value of -10
uint256 ten = stdMath.abs(-10)
```

<br />

> 📚 **Reference**
>
> See the Spark Standard Library Reference for a complete overview of Spark Standard Library.
