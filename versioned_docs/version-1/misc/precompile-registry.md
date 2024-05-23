---
title: Precompile Registry
---

Precompiles are special contracts at fixed addresses that are included within the EVM. In addition to common precompiles included with other EVM environments, Foxar includes a few precompiles for environment mutation, logging data, and contract deployment.

Note that, while some chains like Optimism have bytecode deployed at a predetermined address, making them 'pre-deploys', we treat them as precompiles within the context of Foxar.

### Registry

| Chain ID      | Address                                      | Name                             |
| ------------- | -------------------------------------------- | -------------------------------- |
| ALL           | `0x01`                                       | ECRecover                        |
| ALL           | `0x02`                                       | SHA-256                          |
| ALL           | `0x03`                                       | RIPEMD-160                       |
| ALL           | `0x04`                                       | Identity                         |
| ALL           | `0x05`                                       | ModExp                           |
| ALL           | `0x06`                                       | ECAdd                            |
| ALL           | `0x07`                                       | ECMul                            |
| ALL           | `0x08`                                       | ECPairing                        |
| ALL           | `0x09`                                       | Blake2F                          |

### Reserved Ranges

Some chains also include reserved ranges for precompile contracts.

| Chain ID      | Start                                        | Stop                                         |
| ------------- | -------------------------------------------- | -------------------------------------------- |
| ALL           | `0x00`                                       | `0xff`                                       |
| 433114, 43113 | `0x0100000000000000000000000000000000000000` | `0x01000000000000000000000000000000000000ff` |
| 433114, 43113 | `0x0200000000000000000000000000000000000000` | `0x02000000000000000000000000000000000000ff` |
| 433114, 43113 | `0x0300000000000000000000000000000000000000` | `0x03000000000000000000000000000000000000ff` |
