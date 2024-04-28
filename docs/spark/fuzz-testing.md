---
title: Fuzz Testing
---

Spark supports property based testing.

Property-based testing is a way of testing general behaviors as opposed to isolated scenarios.

Let's examine what that means by writing a unit test, finding the general property we are testing for, and converting it to a property-based test instead:

```solidity
pragma solidity 0.8.10;

import "spark-std/Test.sol";

contract Safe {
    receive() external payable {}

    function withdraw() external {
        payable(msg.sender).transfer(address(this).balance);
    }
}

contract SafeTest is Test {
    Safe safe;

    // Needed so the test contract itself can receive ether
    // when withdrawing
    receive() external payable {}

    function setUp() public {
        safe = new Safe();
    }

    function test_Withdraw() public {
        payable(address(safe)).transfer(1 ether);
        uint256 preBalance = address(this).balance;
        safe.withdraw();
        uint256 postBalance = address(this).balance;
        assertEq(preBalance + 1 ether, postBalance);
    }
}
```

Running the test, we see it passes:

```sh
$ spark test
Compiling 6 files with 0.8.10
Solc 0.8.10 finished in 1.45s
Compiler run successful!

Running 1 test for test/Safe.t.sol:SafeTest
[PASS] test_Withdraw() (gas: 19441)
Test result: ok. 1 passed; 0 failed; 0 skipped; finished in 3.97ms

Ran 1 test suites: 1 tests passed, 0 failed, 0 skipped (1 total tests)
```

This unit test _does test_ that we can withdraw ether from our safe. However, who is to say that it works for all amounts, not just 1 ether?

The general property here is: given a safe balance, when we withdraw, we should get whatever is in the safe.

Spark will run any test that takes at least one parameter as a property-based test, so let's rewrite:

```solidity
contract SafeTest is Test {
    // ...

    function testFuzz_Withdraw(uint256 amount) public {
        payable(address(safe)).transfer(amount);
        uint256 preBalance = address(this).balance;
        safe.withdraw();
        uint256 postBalance = address(this).balance;
        assertEq(preBalance + amount, postBalance);
    }
}

```

If we run the test now, we can see that Spark runs the property-based test, but it fails for high values of `amount`:

```sh
$ spark test
Compiling 1 files with 0.8.10
Solc 0.8.10 finished in 618.05ms
Compiler run successful!

Running 1 test for test/Safe.t.sol:SafeTest
[FAIL. Reason: EvmError: Revert; counterexample: calldata=0x29facca70000000000000000000000000000000000000001000000000000000000000000 args=[79228162514264337593543950336 [7.922e28]]] testFuzz_Withdraw(uint256) (runs: 7, μ: 19509, ~: 19509)
Test result: FAILED. 0 passed; 1 failed; 0 skipped; finished in 73.74ms

Ran 1 test suites: 0 tests passed, 1 failed, 0 skipped (1 total tests)
```

The default amount of ether that the test contract is given is `2**96 wei` (as in DappTools), so we have to restrict the type of amount to `uint96` to make sure we don't try to send more than we have:

```solidity
    function testFuzz_Withdraw(uint96 amount) public {
```

And now it passes:

```sh
$ spark test
Compiling 1 files with 0.8.10
Solc 0.8.10 finished in 580.07ms
Compiler run successful!

Running 1 test for test/Safe.t.sol:SafeTest
[PASS] testFuzz_Withdraw(uint96) (runs: 256, μ: 19360, ~: 19675)
Test result: ok. 1 passed; 0 failed; 0 skipped; finished in 164.46ms

Ran 1 test suites: 1 tests passed, 0 failed, 0 skipped (1 total tests)
```

You may want to exclude certain cases using the [`assume`](../cheatcodes/assume) cheatcode. In those cases, fuzzer will discard the inputs and start a new fuzz run:

```solidity
function testFuzz_Withdraw(uint96 amount) public {
    vm.assume(amount > 0.1 ether);
    // snip
}
```

There are different ways to run property-based tests, notably parametric testing and fuzzing. Spark only supports fuzzing.

### Interpreting results

You might have noticed that fuzz tests are summarized a bit differently compared to unit tests:

- "runs" refers to the amount of scenarios the fuzzer tested. By default, the fuzzer will generate 256 scenarios, but this and other test execution parameters can be setup by the user. Fuzzer configuration details are provided [`here`](#configuring-fuzz-test-execution).
- "μ" (Greek letter mu) is the mean gas used across all fuzz runs
- "~" (tilde) is the median gas used across all fuzz runs

### Configuring fuzz test execution

Fuzz tests execution is governed by parameters that can be controlled by users via Spark configuration primitives. Configs can be applied globally or on a per-test basis. For details on this topic please refer to
📚 [`Global config`](../reference/config/testing) and 📚 [`In-line config`](../reference/config/inline-test-config.md).
