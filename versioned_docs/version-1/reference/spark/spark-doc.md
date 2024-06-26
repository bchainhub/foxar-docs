---
title: Spark doc
---

### NAME

spark-doc - Generate documentation for Ylem source files.

### SYNOPSIS

`spark doc` [*options*]

### DESCRIPTION

Generates and builds an mdbook from Ylem source files.

### OPTIONS

`--root` _path_  
The project's root path. By default, this is the root directory of the current git repository, or the current working directory.

`--out` _path_
The output path for the generated mdbook. By default, it is the `docs/` in project root.

`--build`
Build the `mdbook` from generated files.

`--serve`
Serve the documentation locally.

`--hostname` _hostname_
Hostname for serving documentation. Requires `--serve`.

`--port` _port_
Port for serving documentation. Requires `--serve`.

#### Common Options

`-h`  
`--help`  
Prints help information.

### EXAMPLES

1. Generate documentation.
   ```sh
   spark doc
   ```
2. Generate and build documentation with specified output directory.
   ```sh
   spark doc --build --out ./documentation
   ```
3. Generate and serve documentation locally on port 4000.
   ```sh
   spark doc --serve --port 4000
   ```

### SEE ALSO

[Doc config](../config/doc-generator)
