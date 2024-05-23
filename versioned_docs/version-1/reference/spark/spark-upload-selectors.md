---
title: Spark upload-selectors
---

### NAME

spark-upload-selectors - Uploads abi of given contract to https://sig.eth.samczsun.com function selector database.

### SYNOPSIS

`spark upload-selectors` [*options*] _contract_

### DESCRIPTION

Uploads abi of given contract to https://sig.eth.samczsun.com function selector database.

### OPTIONS

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

1. Upload ABI to selector database
   ```sh
   spark upload-selectors LinearVestingVault
   ```
