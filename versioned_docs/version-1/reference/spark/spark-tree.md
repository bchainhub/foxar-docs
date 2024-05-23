---
title: Spark tree
---

### NAME

spark-tree - Display a tree visualization of the project's dependency graph.

### SYNOPSIS

`spark tree` [*options*]

### DESCRIPTION

Display a visualization of the project's dependency graph.

```ignore
$ spark tree
src/OpenZeppelinNft.sol 0.8.10
├── lib/openzeppelin-contracts/contracts/token/ERC721/ERC721.sol ^0.8.0
│   ├── lib/openzeppelin-contracts/contracts/token/ERC721/IERC721.sol ^0.8.0
│   │   └── lib/openzeppelin-contracts/contracts/utils/introspection/IERC165.sol ^0.8.0
│   ├── lib/openzeppelin-contracts/contracts/token/ERC721/IERC721Receiver.sol ^0.8.0
│   ├── lib/openzeppelin-contracts/contracts/token/ERC721/extensions/IERC721Metadata.sol ^0.8.0
│   │   └── lib/openzeppelin-contracts/contracts/token/ERC721/IERC721.sol ^0.8.0 (*)
│   ├── lib/openzeppelin-contracts/contracts/utils/Address.sol ^0.8.1
│   ├── lib/openzeppelin-contracts/contracts/utils/Context.sol ^0.8.0
│   ├── lib/openzeppelin-contracts/contracts/utils/Strings.sol ^0.8.0
│   └── lib/openzeppelin-contracts/contracts/utils/introspection/ERC165.sol ^0.8.0
│       └── lib/openzeppelin-contracts/contracts/utils/introspection/IERC165.sol ^0.8.0
├── lib/openzeppelin-contracts/contracts/utils/Strings.sol ^0.8.0
├── lib/openzeppelin-contracts/contracts/security/PullPayment.sol ^0.8.0
│   └── lib/openzeppelin-contracts/contracts/utils/escrow/Escrow.sol ^0.8.0
│       ├── lib/openzeppelin-contracts/contracts/access/Ownable.sol ^0.8.0
│       │   └── lib/openzeppelin-contracts/contracts/utils/Context.sol ^0.8.0
│       └── lib/openzeppelin-contracts/contracts/utils/Address.sol ^0.8.1
└── lib/openzeppelin-contracts/contracts/access/Ownable.sol ^0.8.0 (*)
src/SolmateNft.sol 0.8.10
├── lib/solmate/src/tokens/ERC721.sol >=0.8.0
├── lib/openzeppelin-contracts/contracts/utils/Strings.sol ^0.8.0
├── lib/openzeppelin-contracts/contracts/security/PullPayment.sol ^0.8.0 (*)
└── lib/openzeppelin-contracts/contracts/access/Ownable.sol ^0.8.0 (*)
test/OpenZeppelinNft.t.sol 0.8.10
├── lib/spark-std/src/Test.sol >=0.6.0 <0.9.0
│   ├── lib/spark-std/src/Script.sol >=0.6.0 <0.9.0
│   │   ├── lib/spark-std/src/Vm.sol >=0.6.0
│   │   ├── lib/spark-std/src/console.sol >=0.4.22 <0.9.0
│   │   └── lib/spark-std/src/console2.sol >=0.4.22 <0.9.0
│   └── lib/spark-std/lib/ds-test/src/test.sol >=0.5.0
├── src/OpenZeppelinNft.sol 0.8.10 (*)
└── lib/openzeppelin-contracts/contracts/token/ERC721/IERC721Receiver.sol ^0.8.0
test/SolmateNft.sol 0.8.10
├── lib/spark-std/src/Test.sol >=0.6.0 <0.9.0 (*)
└── src/SolmateNft.sol 0.8.10 (*)
```

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

`--hh`  
`--hardhat`  
This is a convenience flag, and is the same as passing `--contracts contracts --lib-paths node-modules`.

#### Common Options

`-h`  
`--help`  
Prints help information.

### SEE ALSO

[spark](./spark.md)
