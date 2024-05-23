---
title: Creating a New Project
---

To start a new project with Foxar, use [`spark init`](../reference/spark/spark-init.md):

```sh
$ spark init hello_foxar
```

This creates a new directory `hello_foxar` from the default template. This also initializes a new `git` repository.

If you want to create a new project using a different template, you would pass the `--template` flag, like so:

```sh
$ spark init --template https://github.com/foxar-rs/spark-template hello_template
```

For now, let's check what the default template looks like:

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

The default template comes with one dependency installed: Spark Standard Library. This is the preferred testing library used for Foxar projects. Additionally, the template also comes with an empty starter contract and a simple test.

Let's build the project:

```sh
$ spark build
Compiling 24 files with 1.1.2
Solc 1.1.2 finished in 4.10s
Compiler run successful!
```

And run the tests:

```sh
$ spark test
No files changed, compilation skipped

Running 2 tests for test/Counter.t.sol:CounterTest
[PASS] testFuzz_SetNumber(uint256) (runs: 256, μ: 27553, ~: 28409)
[PASS] test_Increment() (gas: 28379)
Test result: ok. 2 passed; 0 failed; 0 skipped; finished in 96.80ms

Ran 1 test suites: 2 tests passed, 0 failed, 0 skipped (2 total tests)
```

You'll notice that two new directories have popped up: `out` and `cache`.

The `out` directory contains your contract artifact, such as the ABI, while the `cache` is used by `spark` to only recompile what is necessary.
