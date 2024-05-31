---
title: Spark tree
---

### NAME

spark-tree - Display a tree visualization of the project's dependency graph.

### SYNOPSIS

`spark tree` [*options*]

### DESCRIPTION

Display a visualization of the project's dependency graph.

### OPTIONS

#### Flatten Options

`--charset` _charset_  
Character set to use in output: utf8, ascii. Default: utf8

`--no-dedupe`  
Do not de-duplicate (repeats all shared dependencies)

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

#### Common Options

`-h`  
`--help`  
Prints help information.

### SEE ALSO

[spark](./spark.md)
