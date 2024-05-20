---
title: Spark upload-selectors
---

### NAME

spark-upload-selectors - Uploads abi of given contract to https://sig.eth.samczsun.com function selector database.

### SYNOPSIS

`spark upload-selectors` [*options*] *contract*

### DESCRIPTION

Uploads abi of given contract to https://sig.eth.samczsun.com function selector database.

### OPTIONS

#### Project Options

`--build-info`  
&nbsp;&nbsp;&nbsp;&nbsp;Generate build info files.

`--build-info-path` *path*  
&nbsp;&nbsp;&nbsp;&nbsp;Output path to directory that build info files will be written to.

`--root` *path*  
&nbsp;&nbsp;&nbsp;&nbsp;The project's root path. By default, this is the root directory of the current git repository, or the current working directory.

`-C` *path*  
`--contracts` *path*  
&nbsp;&nbsp;&nbsp;&nbsp;The contracts source directory.  
&nbsp;&nbsp;&nbsp;&nbsp;Environment: `DAPP_SRC`

`--lib-paths` *path*  
&nbsp;&nbsp;&nbsp;&nbsp;The path to the library folder.

`-R` *remappings*  
`--remappings` *remappings*  
&nbsp;&nbsp;&nbsp;&nbsp;The project's remappings.

&nbsp;&nbsp;&nbsp;&nbsp;The parameter is a comma-separated list of remappings in the format `<source>=<dest>`.

`--cache-path` *path*  
&nbsp;&nbsp;&nbsp;&nbsp;The path to the compiler cache.

`--config-path` *file*  
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
