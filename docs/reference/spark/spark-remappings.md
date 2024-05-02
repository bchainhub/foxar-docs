---
title: Spark remappings
---

### NAME

spark-remappings - Get the automatically inferred remappings for the project.

### SYNOPSIS

`spark remappings` [*options*]

### DESCRIPTION

Get the automatically inferred remappings for the project.

### OPTIONS

#### Project Options

`--root` _path_  
&nbsp;&nbsp;&nbsp;&nbsp;The project's root path. By default, this is the root directory of the current git repository, or the current working directory.

`--lib-path` _path_  
&nbsp;&nbsp;&nbsp;&nbsp;The path to the library folder.

#### Common Options

`-h`  
`--help`  
&nbsp;&nbsp;&nbsp;&nbsp;Prints help information.

### EXAMPLES

1. Create a `remappings.txt` file from the inferred remappings:
   ```sh
   spark remappings > remappings.txt
   ```

### SEE ALSO

[spark](./spark.md)
