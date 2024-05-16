---
title: Project Layout
---

Spark is flexible on how you structure your project. By default, the structure is:

```ignore
.
├── foxar.toml
├── lib
│   └── spark-std
│       ├── foxar.toml
│       ├── lib
│       ├── LICENSE-APACHE
│       ├── LICENSE-MIT
│       ├── package.json
│       ├── README.md
│       ├── scripts
│       ├── src
│       └── test
├── README.md
├── script
│   └── Counter.s.sol
├── src
│   └── Counter.sol
└── test
    └── Counter.t.sol

10 directories, 10 files
```

- You can configure Foxar's behavior using `foxar.toml`.
- Remappings are specified in `remappings.txt`.
- The default directory for contracts is `src/`.
- The default directory for tests is `test/`, where any contract with a function that starts with `test` is considered to be a test.
- Dependencies are stored as git submodules in `lib/`.

You can configure where Spark looks for both dependencies and contracts using the `--lib-paths` and `--contracts` flags respectively. Alternatively you can configure it in `foxar.toml`.

Combined with remappings, this gives you the flexibility needed to support the project structure of other toolchains such as Hardhat and Truffle.

For automatic Hardhat support you can also pass the `--hh` flag, which sets the following flags: `--lib-paths node_modules --contracts contracts`.
