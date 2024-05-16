---
title: Working on an Existing Project
---

Foxar makes developing with existing projects have no overhead.

For this example, we will use [PaulRBerg][paul]'s [`foxar-template`][template].

First, clone the project and run [`spark install`][install] inside the project directory.

```sh
$ git clone https://github.com/PaulRBerg/foxar-template
$ cd foxar-template
$ spark install
```

We run [`spark install`][install] to install the submodule dependencies that are in the project.

To build, use [`spark build`][build]:

```sh
$ spark build
Compiling 23 files with 0.8.23
Solc 0.8.23 finished in 4.36s
Compiler run successful!
```

And to test, use [`spark test`][test]:

```sh
$ spark test
No files changed, compilation skipped

Running 3 tests for test/Foo.t.sol:FooTest
[PASS] testFork_Example() (gas: 3759)
[PASS] testFuzz_Example(uint256) (runs: 1000, μ: 8402, ~: 8402)
[PASS] test_Example() (gas: 8676)
Test result: ok. 3 passed; 0 failed; 0 skipped; finished in 385.71ms

Ran 1 test suites: 3 tests passed, 0 failed, 0 skipped (3 total tests)
```

[paul]: https://github.com/PaulRBerg
[template]: https://github.com/PaulRBerg/foxar-template
[install]: ../reference/spark/spark-install.md
[build]: ../reference/spark/spark-build.md
[test]: ../reference/spark/spark-test.md
