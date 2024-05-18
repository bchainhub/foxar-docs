---
title: Overview of Probe
---

Probe is Foxar's command-line tool for performing Ethereum RPC calls. You can make smart contract calls, send transactions, or retrieve any type of chain data - all from your command-line!

### How to use Probe

To use Probe, run the [`probe`](../reference/probe/probe.md) command followed by a subcommand:

```bash
$ probe <subcommand>
```

#### Examples

Let's use `probe` to retrieve the total supply of the DAI token:

```bash
$ probe call 0x6b175474e89094c44da98b954eedeac495271d0f "totalSupply()(uint256)" --rpc-url https://eth-mainnet.alchemyapi.io/v2/Lc7oIGYeL_QvInzI0Wiu_pOZZDEKBrdf
3687858787626171424333349502 [3.687e27]
```

`probe` also provides many convenient subcommands, such as for decoding calldata:

```bash
$ probe 4byte-decode 0x1F1F897F676d00000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000003e7
1) "fulfillRandomness(bytes32,uint256)"
0x676d000000000000000000000000000000000000000000000000000000000000
999
```

You can also use `probe` to send arbitrary messages. Here's an example of sending a message between two Shuttle accounts.

```bash
$ probe send --private-key <Your Private Key> 0x3c44cdddb6a900fa2b585dd299e03d12fa4293bc $(probe from-utf8 "hello world") --rpc-url http://127.0.0.1:8545/
```

&nbsp;

> 📚 **Reference**
>
> See the [`probe` Reference](../reference/probe/probe-commands) for a complete overview of all the available subcommands.
