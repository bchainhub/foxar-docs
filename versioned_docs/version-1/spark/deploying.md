---
title: Deploying and Verifying
---

Spark can deploy smart contracts to a given network with the [`spark create`](../reference/spark/spark-create) command.

Spark can deploy only one contract at a time.

To deploy a contract, you must provide a RPC URL (env: `ETH_RPC_URL`) and the private key of the account that will deploy the contract.

To deploy `MyContract` to a network:

```bash
$ spark create --rpc-url <your_rpc_url> --private-key <your_private_key> src/MyContract.sol:MyContract
compiling...
success.
Deployer: 0cb67xa735b3c25f...
Deployed to: 0xcb924054415432...
Transaction hash: 0x6b4e0ff93a...
```

Solidity files may contain multiple contracts. `:MyContract` above specifies which contract to deploy from the `src/MyContract.sol` file.

Use the `--constructor-args` flag to pass arguments to the constructor:

<!--DOCUSAURUS_CODE_TABS-->
<!--Solidity-->

```solidity
// SPDX-License-Identifier: UNLICENSED
pragma solidity ^1.1.2;

import {ERC20} from "solmate/tokens/ERC20.sol";

contract MyToken is ERC20 {
    constructor(
        string memory name,
        string memory symbol,
        uint8 decimals,
        uint256 initialSupply
    ) ERC20(name, symbol, decimals) {
        _mint(msg.sender, initialSupply);
    }
}
```

<!--END_DOCUSAURUS_CODE_TABS-->

Additionally, we can tell Spark to verify our contract on Etherscan, Sourcify or Blockscout, if the network is supported, by passing `--verify`.

```sh
$ spark create --rpc-url <your_rpc_url> \
    --constructor-args "SparkUSD" "FUSD" 18 1000000000000000000000 \
    --private-key <your_private_key> \
    --etherscan-api-key <your_etherscan_api_key> \
    --verify \
    src/MyToken.sol:MyToken
```

Here's how to verify it:

```bash
spark verify-contract \
    --chain-id 11155111 \
    --num-of-optimizations 1000000 \
    --watch \
    --constructor-args $(probe abi-encode "constructor(string,string,uint256,uint256)" "SparkUSD" "FUSD" 18 1000000000000000000000) \
    --etherscan-api-key <your_etherscan_api_key> \
    --compiler-version v1.1.2+commit.fc410830 \
    <the_contract_address> \
    src/MyToken.sol:MyToken

Submitted contract for verification:
                Response: `OK`
                GUID: `a6yrbjp5prvakia6bqp5qdacczyfhkyi5j1r6qbds1js41ak1a`
                url: https://sepolia.etherscan.io//address/0x6a54…3a4c#code
```

It is recommended to use the [`--watch`](../reference/spark/spark-verify-contract.md#verify-contract-options) flag along
with `verify-contract` command in order to poll for the verification result.

If the `--watch` flag was not supplied, you can check
the verification status with the [`spark verify-check`](../reference/spark/spark-verify-check.md) command:

```bash
$ spark verify-check --chain-id 11155111 <GUID> <your_etherscan_api_key>
Contract successfully verified.
```

<br />

> 💡 **Tip**
>
> Use Probe's [`abi-encode`](../reference/probe/probe-abi-encode.md) to ABI-encode arguments.
>
> In this example, we ran `probe abi-encode "constructor(string,string,uint8,uint256)" "SparkUSD" "FUSD" 18 1000000000000000000000` to ABI-encode the arguments.

<br />

### Troubleshooting

##### `Invalid character 'x' at position 1`

Make sure the private key string does not begin with `0x`.

##### `Failed to parse tokens`

Make sure the passed arguments are of correct type.

##### `Signature error`

Make sure the private key is correct.

##### `Compiler version commit for verify`

If you want to check the exact commit you are running locally, try: ` ~/.yvm/0.x.y/ylem-0.x.y --version` where `x` and
`y` are major and minor version numbers respectively.


### Known Issues

#### Verifying Contracts With Ambiguous Import Paths

Spark passes source directories (`src`, `lib`, `test` etc) as `--include-path` arguments to the compiler.
This means that given the following project tree

```text
|- src
|-- folder
|--- Contract.sol
|--- IContract.sol
```

it is possible to import `IContract` inside the `Contract.sol` using `folder/IContract.sol` import path.

Etherscan is not able to recompile such sources. Consider changing the imports to use relative import path.

#### Verifying Contracts With No Bytecode Hash

Currently, it's not possible to verify contracts on Etherscan with [`bytecode_hash`](../reference/config/solidity-compiler.md#bytecode_hash)
set to `none`.
Click [here](https://docs.soliditylang.org/en/v0.8.13/metadata.html#usage-for-source-code-verification) to learn more about
how metadata hash is used for source code verification.
