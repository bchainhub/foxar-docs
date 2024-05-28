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
The path to output the flattened contract. If not specified, the flattened contract will be output to stdout.

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

#### Common Options

`-h`  
`--help`  
Prints help information.

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

[spark](./spark.md)
