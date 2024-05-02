---
title: Spark verify-contract
---

### NAME

spark-verify-contract - Verify smart contracts on a chosen verification provider.

### SYNOPSIS

`spark verify-contract` [*options*] _address_ _contract_

### DESCRIPTION

Verifies a smart contract on a chosen verification provider.

You must provide:

- The contract address
- The contract name or the path to the contract (read below)
  In case of Etherscan verification, you must also provide:
- Your Etherscan API key, either by passing it as an argument or setting `ETHERSCAN_API_KEY`

To find the exact compiler version, run `~/.svm/x.y.z/solc-x.y.z --version` and search for the 8 hex digits in the version string [here](https://etherscan.io/solcversions).

The path to the contract is in the format `<path>:<contract>`, e.g. `src/Contract.sol:Contract`.

By default, smart contracts are verified in a multi-file fashion. If you want to flatten the contract before verifying, pass `--flatten`.

This command will try to compile the source code of the flattened contract if `--flatten` is passed before verifying. If you do not want that, pass `--force`.

You can specify **ABI-encoded** constructor arguments with `--constructor-args`. Alternatively,
you can specify a file containing **space-separated** constructor arguments with `--constructor-args-path`.
(Note that [cache](../config/project.html#cache) must be enabled in the config for the latter to work.)

### OPTIONS

#### Verify Contract Options

`--verifier` _name_  
&nbsp;&nbsp;&nbsp;&nbsp;The verification provider. Available options: `etherscan`, `sourcify` & `blockscout`. Default: `etherscan`. Note: make sure you add "/api\?" to the end of the Blockscout homepage explorer URL.

`--verifier-url` _url_  
&nbsp;&nbsp;&nbsp;&nbsp;The optional verifier url for submitting the verification request.  
&nbsp;&nbsp;&nbsp;&nbsp;Environment: `VERIFIER_URL`

`--compiler-version` _version_  
&nbsp;&nbsp;&nbsp;&nbsp;The compiler version used to build the smart contract.

&nbsp;&nbsp;&nbsp;&nbsp;To find the exact compiler version, run `~/.svm/x.y.z/solc-x.y.z --version` where `x` and
`y` are major and minor version numbers respectively, then search for the 8 hex digits in the version string [here](https://etherscan.io/solcversions).

`--num-of-optimizations` _num_  
`--optimizer-runs` _num_  
&nbsp;&nbsp;&nbsp;&nbsp;The number of optimization runs used to build the smart contract.

`--constructor-args` _args_  
&nbsp;&nbsp;&nbsp;&nbsp;The ABI-encoded constructor arguments. Conflicts with `--constructor-args-path`.

`--constructor-args-path` _file_  
&nbsp;&nbsp;&nbsp;&nbsp;The path to a file containing the constructor arguments. Conflicts with `--constructor-args`.

`--chain-id` _chain_  
`--chain` _chain_  
&nbsp;&nbsp;&nbsp;&nbsp;The ID or name of the chain the contract is deployed to.  
&nbsp;&nbsp;&nbsp;&nbsp;Default: mainnet

`--flatten`  
&nbsp;&nbsp;&nbsp;&nbsp;Flag indicating whether to flatten the source code before verifying.

&nbsp;&nbsp;&nbsp;&nbsp;If this flag is not provided, the JSON standard input will be used instead.

`-f`  
`--force`  
&nbsp;&nbsp;&nbsp;&nbsp;Do not compile the flattened smart contract before verifying.

`--delay` _delay_  
&nbsp;&nbsp;&nbsp;&nbsp;Optional timeout to apply in between attempts in seconds. Defaults to 3.

`--retries` _retries_  
&nbsp;&nbsp;&nbsp;&nbsp;Number of attempts for retrying. Defaults to 15.

`--show-standard-json-input`  
&nbsp;&nbsp;&nbsp;&nbsp;Command outputs JSON suitable for saving to a file and uploading to block explorers for verification.

`--watch`  
&nbsp;&nbsp;&nbsp;&nbsp;Wait for verification result after submission.  
&nbsp;&nbsp;&nbsp;&nbsp;Automatically runs `spark verify-check` until the verification either fails or succeeds.

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

1. Verify a contract with JSON standard input on Etherscan

   ```sh
   spark verify-contract <address> SomeContract --watch

   ```

2. Verify a contract on a custom Sourcify instance

   ```sh
   spark verify-contract --verifier sourcify \
     --verifier-url http://localhost:5000 <address> SomeContract
   ```

3. Verify a flattened contract built with solc v0.8.11+commit.d7f03943:

   ```sh
   spark verify-contract --flatten --watch --compiler-version "v0.8.11+commit.d7f03943" \
     --constructor-args $(probe abi-encode "constructor(string,string,uint256,uint256)" "SparkUSD" "FUSD" 18 1000000000000000000000) \
     <address> MyToken
   ```

4. Verify a flattened contract by specifying constructor arguments in a file:
   ```sh
   spark verify-contract --flatten --watch --compiler-version "v0.8.11+commit.d7f03943" \
     --constructor-args-path constructor-args.txt <address> src/Token.sol:MyToken
   ```
   where `constructor-args.txt` contains the following content:
   ```text
   SparkUSD FUSD 18 1000000000000000000000
   ```
5. Verify a contract with Blockscout right after deployment (make sure you add "/api?" to the end of the Blockscout homepage explorer URL):
   ```sh
   spark create --rpc-url <rpc_https_endpoint> --private-key $devTestnetPrivateKey src/Contract.sol:SimpleStorage --verify --verifier blockscout --verifier-url <blockscout_homepage_explorer_url>/api?
   ```

### SEE ALSO

[spark](./spark.md), [spark create](./spark-create.md), [spark flatten](./spark-flatten.md), [spark verify-check](./spark-verify-check.md)
