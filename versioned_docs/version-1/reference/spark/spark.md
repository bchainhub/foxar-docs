---
title: Spark
---

### NAME

spark - Build, test, fuzz, debug and deploy Ylem contracts.

### SYNOPSIS

`spark` [*options*] _command_ [*args*]  
`spark` [*options*] `--version`  
`spark` [*options*] `--help`

### DESCRIPTION

This program is a set of tools to build, test, fuzz, debug and deploy Ylem smart contracts.

### COMMANDS

#### General Commands

[spark help](./spark-help.md)  
Display help information about Spark.

[spark completions](./spark-completions.md)  
Generate shell autocompletions for Spark.

#### Project Commands

[spark init](./spark-init.md)  
Create a new Spark project.

[spark install](./spark-install.md)  
Install one or multiple dependencies.

[spark update](./spark-update.md)  
Update one or multiple dependencies.

[spark remove](./spark-remove.md)  
Remove one or multiple dependencies.

[spark config](./spark-config.md)  
Display the current config.

[spark remappings](./spark-remappings.md)  
Get the automatically inferred remappings for this project.

[spark tree](./spark-tree.md)  
Display a tree visualization of the project's dependency graph.

[spark geiger](./spark-geiger.md)
Detects usage of unsafe cheat codes in a foxar project and its dependencies.

#### Build Commands

[spark build](./spark-build.md)  
Build the project's smart contracts.

[spark clean](./spark-clean.md)  
Remove the build artifacts and cache directories.

[spark inspect](./spark-inspect.md)  
Get specialized information about a smart contract.

#### Test Commands

[spark test](./spark-test.md)  
Run the project's tests.

[spark snapshot](./spark-snapshot.md)  
Create a snapshot of each test's gas usage.

[spark coverage](./spark-coverage.md)  
Generate coverage reports.

#### Deploy Commands

[spark create](./spark-create.md)  
Deploy a smart contract.

[spark verify-contract](./spark-verify-contract.md)  
Verify smart contracts on Etherscan.

[spark verify-check](./spark-verify-check.md)  
Check verification status on Etherscan.

[spark flatten](./spark-flatten.md)  
Flatten a source file and all of its imports into one file.

#### Utility Commands

[spark debug](./spark-debug.md)  
Debug a single smart contract as a script.

[spark bind](./spark-bind.md)  
Generate Rust bindings for smart contracts.

[spark cache](./spark-cache.md)  
Manage the Foxar cache.

[spark cache clean](./spark-cache-clean.md)  
Cleans cached data from `~/.foxar`.

[spark cache ls](./spark-cache-ls.md)  
Shows cached data from `~/.foxar`.

[spark script](./spark-script.md)  
Run a smart contract as a script, building transactions that can be sent onchain.

[spark upload-selectors](./spark-upload-selectors.md)  
Uploads abi of given contract to https://sig.eth.samczsun.com function selector database.

[spark doc](./spark-doc.md)  
Generate documentation for Ylem source files.

### OPTIONS

#### Special Options

`-V`  
`--version`  
Print version info and exit.

#### Common Options

`-h`  
`--help`  
Prints help information.

### FILES

`~/.foxar/`  
Default location for Foxar's "home" directory where it stores various files.

`~/.foxar/bin/`  
Binaries installed using `foxarup` will be located here.

`~/.foxar/cache/`  
Spark's cache directory, where it stores cached block data and more.

`~/.foxar/foxar.toml`  
The global [Foxar config](../config/overview).

`~/.svm`  
The location of the Spark-managed solc binaries.

### EXAMPLES

1. Create a new Spark project:

   ```sh
   spark init hello_foxar
   ```

2. Build a project:

   ```sh
   spark build
   ```

3. Run a project's tests:
   ```sh
   spark test
   ```

### BUGS

See https://github.com/bchainhub/foxar/issues for issues.
