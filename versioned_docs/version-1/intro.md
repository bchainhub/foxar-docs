---
title: Introduction
sidebar_position: 1
---

<img src={require("@site/static/img/docs/foxar-banner.png").default} style= {{borderRadius: "20px"}} />

> Foxar is a blazing fast, portable and modular toolkit for Core BC app development.

**Spark:** Core testing framework (like Truffle, Hardhat and DappTools).

**Probe:** Swiss army knife for interacting with CVM smart contracts, sending transactions and getting chain data.

**Shuttle:** Local Core node, akin to Ganache, Hardhat Network.

**Pilot:** Fast, utilitarian, and verbose solidity REPL.

Foxar manages your dependencies, compiles your project, runs tests, deploys, and lets you interact with the chain from the command-line and via Ylem scripts.

## Sections

**[Getting Started](getting-started/installation)**

To get started with Foxar, install Foxar and set up your first project.

**[Projects](projects/creating-a-new-project.md)**

This section will give you an overview of how to create and work with existing projects.

**[Spark Overview](spark/overview-spark)**

The overview will give you all you need to know about how to use `spark` to develop, test, and deploy smart contracts.

**[Probe Overview](probe/probe-overview)**

Learn how to use `probe` to interact with smart contracts, send transactions, and get chain data from the command-line.

**[Shuttle Overview](shuttle/shuttle-overview)**

Learn about `shuttle`, Foxar's local node.

**[Pilot Overview](pilot/pilot-overview)**

Learn how to use `pilot`, Foxar's integrated Ylem REPL.

## Configuration

Guides on configuring Foxar.

- [Configuring with `foxar.toml`](./config/configuration/)
- [Continuous Integration](./config/continuous-integration.md)
- [Shell Autocompletion](./config/shell-autocompletion.md)

## Tutorials

Tutorials on building smart contracts with Foxar.

-
- [Docker and Foxar](./tutorials/foxar-docker.md)
- [Testing EIP-712 Signatures](./tutorials/testing-eip712.md)
- [Ylem Scripting](./tutorials/ylem-scripting.md)

## Contributing

Help us improve Foxar: [Contributing](./contributing.md)

## Appendix

References, troubleshooting, and more.

- [FAQ](./faq.md)
- [CLI Reference](./reference/cli/cli-reference)
- [Spark Commands](./reference/spark/)
- [Probe Commands](./reference/probe/)
- [Shuttle Commands](./reference/shuttle/shuttle-reference)
- [Pilot Commands](./reference/pilot/pilot-reference)
- [Config Reference](./reference/config/config-reference)
- [Cheatcodes Reference](./reference/cheatcodes/cheatcodes-reference)
- [Spark Standard Library Reference](./reference/spark-std/spark-standart)
- [DSTest Reference](./reference/ds-test)
- [Miscellaneous](misc/miscellaneous)
