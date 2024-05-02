---
title: Spark flatten
---

### NAME

spark-flatten - Flatten a source file and all of its imports into one file.

### SYNOPSIS

`spark flatten` [*options*] _file_

### DESCRIPTION

Flatten a source file and all of its imports into one file.

If `--output <FILE>` is not set, then the flattened contract will be output to stdout.

### OPTIONS

#### Flatten Options

`-o` _file_  
`--output` _file_  
&nbsp;&nbsp;&nbsp;&nbsp;The path to output the flattened contract. If not specified, the flattened contract will be output to stdout.

#### Project Options

`--build-info`  
&nbsp;&nbsp;&nbsp;&nbsp;Generate build info files.

`--build-info-path` _path_  
&nbsp;&nbsp;&nbsp;&nbsp;Output path to directory that build info files will be written to.

`--root` _path_  
&nbsp;&nbsp;&nbsp;&nbsp;The project's root path. By default, this is the root directory of the current git repository, or the current working directory.

`-C` _path_  
`--contracts` _path_  
&nbsp;&nbsp;&nbsp;&nbsp;The contracts source directory.  
&nbsp;&nbsp;&nbsp;&nbsp;Environment: `DAPP_SRC`

`--lib-paths` _path_  
&nbsp;&nbsp;&nbsp;&nbsp;The path to the library folder.

`-R` _remappings_  
`--remappings` _remappings_  
&nbsp;&nbsp;&nbsp;&nbsp;The project's remappings.

&nbsp;&nbsp;&nbsp;&nbsp;The parameter is a comma-separated list of remappings in the format `<source>=<dest>`.

`--cache-path` _path_  
&nbsp;&nbsp;&nbsp;&nbsp;The path to the compiler cache.

`--config-path` _file_  
&nbsp;&nbsp;&nbsp;&nbsp;Path to the config file.

`--hh`  
`--hardhat`  
&nbsp;&nbsp;&nbsp;&nbsp;This is a convenience flag, and is the same as passing `--contracts contracts --lib-paths node-modules`.

#### Common Options

`-h`  
`--help`  
&nbsp;&nbsp;&nbsp;&nbsp;Prints help information.

### EXAMPLES

1. Flatten `src/Contract.sol`:

   ```sh
   spark flatten src/Contract.sol
   ```

2. Flatten `src/Contract.sol` and write the result to `src/Contract.flattened.sol`:
   ```sh
   spark flatten --output src/Contract.flattened.sol src/Contract.sol
   ```

### SEE ALSO

[spark](./spark.md), [spark verify-contract](./spark-verify-contract.md)
