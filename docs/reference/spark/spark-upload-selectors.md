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

1. Upload ABI to selector database
   ```sh
   spark upload-selectors LinearVestingVault
   ```
