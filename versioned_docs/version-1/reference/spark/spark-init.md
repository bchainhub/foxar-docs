---
title: Spark init
---

### NAME

spark-init - Create a new Spark project.

### SYNOPSIS

`spark init` [*options*] [*root*]

### DESCRIPTION

Create a new Spark project in the directory _root_ (by default the current working directory).

The default template creates the following project layout:

```ignore
.
├── foxar.toml
├── lib
│   └── spark-std
│       ├── foxar.toml
│       ├── lib
│       ├── LICENSE-APACHE
│       ├── LICENSE-MIT
│       ├── package.json
│       ├── README.md
│       ├── scripts
│       ├── src
│       └── test
├── README.md
├── script
│   └── Counter.s.sol
├── src
│   └── Counter.sol
└── test
    └── Counter.t.sol

10 directories, 10 files
```

However, it is possible to create a project from another using `--template`.

By default, `spark init` will also initialize a new git repository, install some submodules and create an initial commit message.

If you do not want this behavior, pass `--no-git`.

### OPTIONS

#### Init Options

`--force`  
Create the project even if the specified root directory is not empty.

`-t` _template_  
`--template` _template_  
The template to start from.

`--vscode`  
Create a `.vscode/settings.json` file with Solidity settings, and generate a `remappings.txt` file.

`--offline`  
Do not install dependencies from the network.

#### VCS Options

`--no-commit`  
Do not create an initial commit.

`--no-git`  
Do not create a git repository.

#### Display Options

`-q`  
`--quiet`  
Do not print any messages.

#### Common Options

`-h`  
`--help`  
Prints help information.

### EXAMPLES

1. Create a new project:

   ```sh
   spark init hello_foxar
   ```

2. Create a new project, but do not create a git repository:

   ```sh
   spark init --no-git hello_foxar
   ```

3. Forcibly create a new project in a non-empty directory:
   ```sh
   spark init --force
   ```

### SEE ALSO

[spark](./spark.md)
