---
title: Probe
---

### NAME

probe - Perform Ethereum RPC calls from the comfort of your command line.

### SYNOPSIS

`probe` [*options*] _command_ [*args*]
`probe` [*options*] `--version`
`probe` [*options*] `--help`

### DESCRIPTION

This program is a set of tools to interact with Ethereum and perform conversions.

### COMMANDS

#### General Commands

[probe help](./probe-help.md)
Display help information about Probe.

[probe completions](./probe-completions.md)
Generate shell autocompletions for Probe.

#### Chain Commands

[probe chain-id](./probe-chain-id.md)
Get the Ethereum chain ID.

[probe chain](./probe-chain.md)
Get the symbolic name of the current chain.

[probe client](./probe-client.md)
Get the current client version.

#### Transaction Commands

[probe publish](./probe-publish.md)
Publish a raw transaction to the network.

[probe receipt](./probe-receipt.md)
Get the transaction receipt for a transaction.

[probe send](./probe-send.md)
Sign and publish a transaction.

[probe call](./probe-call.md)
Perform a call on an account without publishing a transaction.

[probe rpc](./probe-rpc.md)
Perform a raw JSON-RPC request [aliases: rp]

[probe tx](./probe-tx.md)
Get information about a transaction.

[probe run](./probe-run.md)
Runs a published transaction in a local environment and prints the trace.

[probe estimate](./probe-estimate.md)
Estimate the gas cost of a transaction.

[probe access-list](./probe-access-list.md)
Create an access list for a transaction.

[probe logs](./probe-logs.md)
Get logs by signature or topic

#### Block Commands

[probe find-block](./probe-find-block.md)
Get the block number closest to the provided timestamp.

[probe gas-price](./probe-gas-price.md)
Get the current gas price.

[probe block-number](./probe-block-number.md)
Get the latest block number.

[probe basefee](./probe-basefee.md)
Get the basefee of a block.

[probe block](./probe-block.md)
Get information about a block.

[probe age](./probe-age.md)
Get the timestamp of a block.

#### Account Commands

[probe balance](./probe-balance.md)
Get the balance of an account in wei.

[probe storage](./probe-storage.md)
Get the raw value of a contract's storage slot.

[probe proof](./probe-proof.md)
Generate a storage proof for a given storage slot.

[probe nonce](./probe-nonce.md)
Get the nonce for an account.

[probe code](./probe-code.md)
Get the bytecode of a contract.

[probe codesize](./probe-codesize.md)
Get the runtime bytecode size of a contract.

#### ENS Commands

[probe lookup-address](./probe-lookup-address.md)
Perform an ENS reverse lookup.

[probe resolve-name](./probe-resolve-name.md)
Perform an ENS lookup.

[probe namehash](./probe-namehash.md)
Calculate the ENS namehash of a name.

#### Etherscan Commands

[probe etherscan-source](./probe-etherscan-source.md)
Get the source code of a contract from Etherscan.

#### ABI Commands

[probe abi-decode](./probe-abi-decode.md)
Decode ABI-encoded input or output data.

[probe abi-encode](./probe-abi-encode.md)
ABI encode the given function arguments, excluding the selector.

[probe 4byte](./probe-4byte.md)
Get the function signatures for the given selector from https://sig.eth.samczsun.com.

[probe 4byte-decode](./probe-4byte-decode.md)
Decode ABI-encoded calldata using https://sig.eth.samczsun.com.

[probe 4byte-event](./probe-4byte-event.md)
Get the event signature for a given topic 0 from https://sig.eth.samczsun.com

[probe calldata](./probe-calldata.md)
ABI-encode a function with arguments.

[probe calldata-decode](./probe-calldata-decode.md)
Decode ABI-encoded input data.

[probe pretty-calldata](./probe-pretty-calldata.md)
Pretty print calldata.

[probe selectors](./probe-selectors.md)
Extracts function selectors and arguments from bytecode

[probe upload-signature](./probe-upload-signature.md)
Upload the given signatures to https://sig.eth.samczsun.com.

#### Conversion Commands

[probe format-bytes32-string](./probe-format-bytes32-string.md)
Formats a string into bytes32 encoding.

[probe from-bin](./probe-from-bin.md)
Convert binary data into hex data.

[probe from-fixed-point](./probe-from-fixed-point.md)
Convert a fixed point number into an integer.

[probe from-utf8](./probe-from-utf8.md)
Convert UTF8 to hex.

[probe from-wei](./probe-from-wei.md)
Convert wei into an ETH amount

[probe parse-bytes32-address](./probe-parse-bytes32-address.md)
Parses a checksummed address from bytes32 encoding.

[probe parse-bytes32-string](./probe-parse-bytes32-string.md)
Parses a string from bytes32 encoding.

[probe to-ascii](./probe-to-ascii.md)
Convert hex data to an ASCII string.

[probe to-base](./probe-to-base.md)
Convert a number of one base to another.

[probe to-bytes32](./probe-to-bytes32.md)
Right-pads hex data to 32 bytes.

[probe to-dec](./probe-to-dec.md)
Converts a number of one base to decimal

[probe to-fixed-point](./probe-to-fixed-point.md)
Convert an integer into a fixed point number.

[probe to-hex](./probe-to-hex.md)
Converts a number of one base to another

[probe to-hexdata](./probe-to-hexdata.md)
Normalize the input to lowercase, 0x-prefixed hex.

[probe to-int256](./probe-to-int256.md)
Convert a number to a hex-encoded int256.

[probe to-rlp](./probe-to-rlp.md)
RLP encodes hex data, or an array of hex data

[probe to-uint256](./probe-to-uint256.md)
Convert a number to a hex-encoded uint256.

[probe to-unit](./probe-to-unit.md)
Convert an ETH amount into another unit (ether, gwei, wei).

[probe to-wei](./probe-to-wei.md)
Convert an ETH amount to wei.

[probe shl](./probe-shl.md)
Perform a left shifting operation.

[probe shr](./probe-shr.md)
Perform a right shifting operation.

#### Utility Commands

[probe sig](./probe-sig.md)
Get the selector for a function.

[probe sig-event](./probe-sig-event.md)
Generate event signatures from event string.

[probe keccak](./probe-keccak.md)
Hash arbitrary data using keccak-256.

[probe compute-address](./probe-compute-address.md)
Compute the contract address from a given nonce and deployer address.

[probe create2](./probe-create2.md)
Generate a deterministic contract address using CREATE2

[probe interface](./probe-interface.md)
Generate a Solidity interface from a given ABI.

[probe index](./probe-index.md)
Compute the storage slot for an entry in a mapping.

[probe concat-hex](./probe-concat-hex.md)
Concatenate hex strings.

[probe max-int](./probe-max-int.md)
Get the maximum i256 value.

[probe min-int](./probe-min-int.md)
Get the minimum i256 value.

[probe max-uint](./probe-max-uint.md)
Get the maximum u256 value.

[probe to-check-sum-address](./probe-to-check-sum-address.md)
Convert an address to a checksummed format (EIP-55).

#### Wallet Commands

[probe wallet](./probe-wallet.md)
Wallet management utilities.

[probe wallet new](./probe-wallet-new.md)
Create a new random keypair.

[probe wallet address](./probe-wallet-address.md)
Convert a private key to an address.

[probe wallet sign](./probe-wallet-sign.md)
Sign a message.

[probe wallet vanity](./probe-wallet-vanity.md)
Generate a vanity address.

[probe wallet verify](./probe-wallet-verify.md)
Verify the signature of a message.

### OPTIONS

#### Special Options

`-V`
`--version`
Print version info and exit.

#### Common Options

`-h`  
`--help`  
Prints help information.

### EXAMPLES

1. Call a function on a contract:

   ```sh
   probe call 0xC02aaA39b223FE8D0A0e5C4F27eAD9083C756Cc2 \
     "balanceOf(address)(uint256)" 0x...
   ```

2. Decode raw calldata:

   ```sh
   probe calldata-decode "transfer(address,uint256)" \
     0xa9059cbb000000000000000000000000e78388b4ce79068e89bf8aa7f218ef6b9ab0e9d0000000000000000000000000000000000000000000000000008a8e4b1a3d8000
   ```

3. Encode calldata:
   ```sh
   probe calldata "someFunc(address,uint256)" 0x... 1
   ```

### BUGS

See https://github.com/foxar-rs/foxar/issues for issues.
