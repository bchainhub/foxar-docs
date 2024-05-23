---
title: First Steps with Foxar
---

This section provides an overview of the `spark` command line tool. We demonstrate how to create a new project, compile, and test it.

To start a new project with Foxar, use [`spark init`](../reference/spark/spark-init.md):

```sh
$ spark init hello_foxar
```

Let's check out what `spark` generated for us:

```sh
$ cd hello_foxar
$ tree . -d -L 1
.
├── lib
├── script
├── src
└── test

5 directories
```

We can build the project with [`spark build`](../reference/spark/spark-build.md):

```sh
$ spark build
Compiling 24 files with 1.1.2
Ylem 1.1.2 finished in 4.10s
Compiler run successful!
```

And run the tests with [`spark test`](../reference/spark/spark-test.md):

```sh
$ spark test
No files changed, compilation skipped

Running 2 tests for test/Counter.t.sol:CounterTest
[PASS] testFuzz_SetNumber(uint256) (runs: 256, μ: 27553, ~: 28409)
[PASS] test_Increment() (gas: 28379)
Test result: ok. 2 passed; 0 failed; 0 skipped; finished in 96.80ms

Ran 1 test suites: 2 tests passed, 0 failed, 0 skipped (2 total tests)
```

<br />

> 💡 **Tip**
>
> You can always print help for any subcommand (or their subcommands) by adding `--help` at the end.

You can watch [these](../tutorials/learn-foxar.md) beginner tutorials if you are a visual learner.
