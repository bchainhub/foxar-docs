---
title: Spark inspect
---

### NAME

spark-inspect - Get specialized information about a smart contract

### SYNOPSIS

`spark inspect` [*options*] _contract_name_ _field_

### DESCRIPTION

Get specialized information about a smart contract.

The field to inspect (_field_) can be any of:

- `abi`
- `b`/`bytes`/`bytecode`
- `deployedBytecode`/`deployed_bytecode`/`deployed-bytecode`/`deployedbytecode`/`deployed`
- `assembly`/`asm`
- `asmOptimized`/`assemblyOptimized`/`assemblyoptimized`/`assembly_optimized`/`asmopt`/`assembly-optimized`/`asmo`/`asm-optimized`/`asmoptimized`/`asm_optimized`
- `methods`/`methodidentifiers`/`methodIdentifiers`/`method_identifiers`/`method-identifiers`/`mi`
- `gasEstimates`/`gas`/`gas_estimates`/`gas-estimates`/`gasestimates`
- `storageLayout`/`storage_layout`/`storage-layout`/`storagelayout`/`storage`
- `devdoc`/`dev-doc`/`devDoc`
- `ir`
- `ir-optimized`/`irOptimized`/`iroptimized`/`iro`/`iropt`
- `metadata`/`meta`
- `userdoc`/`userDoc`/`user-doc`
- `ewasm`/`e-wasm`

### OPTIONS

`--pretty`  
Pretty print the selected field, if supported.

#### Cache Options

`--force`  
Clear the cache and artifacts folder and recompile.

#### Linker Options

`--libraries` _libraries_  
Set pre-linked libraries.

The parameter must be in the format `<remapped path to lib>:<library name>:<address>`, e.g. `src/Contract.sol:Library:0x...`.

Can also be set in your configuration file as `libraries = ["<path>:<lib name>:<address>"]`.

#### Compiler Options

`--optimize`  
Activate the Solidity optimizer.

`--optimizer-runs` _runs_  
The number of optimizer runs.

`--via-ir`  
Use the Yul intermediate representation compilation pipeline.

`--revert-strings`  
How to treat revert and require reason strings.

`--use` _solc_version_  
Specify the solc version, or a path to a local solc, to build with.

Valid values are in the format `x.y.z`, `solc:x.y.z` or `path/to/solc`.

`--offline`  
Do not access the network. Missing solc versions will not be installed.

`--no-auto-detect`  
Do not auto-detect solc.

`--ignored-error-codes` _error_codes_  
Ignore solc warnings by error code. The parameter is a comma-separated list of error codes.

`--extra-output` _selector_  
Extra output to include in the contract's artifact.

Example keys: `abi`, `storageLayout`, `evm.assembly`, `ewasm`, `ir`, `ir-optimized`, `metadata`.

For a full description, see the [Solidity docs][output-desc].

`--extra-output-files` _selector_  
Extra output to write to separate files.

Example keys: `abi`, `storageLayout`, `evm.assembly`, `ewasm`, `ir`, `ir-optimized`, `metadata`.

For a full description, see the [Solidity docs][output-desc].

`--evm-version` _version_  
The target EVM version.

[output-desc]: https://docs.soliditylang.org/en/latest/using-the-compiler.html#compiler-api

#### Project Options

`--build-info`  
Generate build info files.

`--build-info-path` _path_  
Output path to directory that build info files will be written to.

`--root` _path_  
The project's root path. By default, this is the root directory of the current git repository, or the current working directory.

`-C` _path_  
`--contracts` _path_  
The contracts source directory.  
Environment: `DAPP_SRC`

`--lib-paths` _path_  
The path to the library folder.

`-R` _remappings_  
`--remappings` _remappings_  
The project's remappings.

The parameter is a comma-separated list of remappings in the format `<source>=<dest>`.

`--cache-path` _path_  
The path to the compiler cache.

`--config-path` _file_  
Path to the config file.

`--hh`  
`--hardhat`  
This is a convenience flag, and is the same as passing `--contracts contracts --lib-paths node-modules`.

`-o` _path_  
`--out` _path_  
The project's artifacts directory.

`--silent`  
Suppress all output.

#### Common Options

-h  
--help  
Prints help information.

### EXAMPLES

1. Inspect the bytecode of a contract:

   ```sh
   spark inspect MyContract bytecode
   ```

2. Inspect the storage layout of a contract:

   ```sh
   spark inspect MyContract storage
   ```

3. Inspect the abi of a contract in a pretty format:
   ```sh
   spark inspect --pretty MyContract abi
   ```

### SEE ALSO

[spark](./spark.md), [spark build](./spark-build.md)
