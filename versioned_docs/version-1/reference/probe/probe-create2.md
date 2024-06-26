---
title: Probe create2
---

### NAME

probe-create2 - Generate a deterministic contract address using CREATE2

### SYNOPSIS

`probe create2` [*options*]

### DESCRIPTION

Generate a deterministic contract address using CREATE2

### OPTIONS

`--starts-with` _hex_
Prefix for the contract address.

`--ends-with` _hex_
Suffix for the contract address

`--matching` _hex_
Sequence that the address has to match

`--case-sensitive`
Case sensitive matching

`--deployer` _address_
Address of the contract deployer [default: `0x4e59b44847b379578588920ca78fbf26c0b4956c`]

`--init-code` _hex_
Init code of the contract to be deployed

`--init-code-hash` _hash_
Init code hash of the contract to be deployed

`--jobs` _jobs_
Number of threads to use. Defaults to and caps at the number of logical cores

`--caller` _address_
Address of the caller. Used for the first 20 bytes of the salt

#### Common Options

`-h`  
`--help`  
Prints help information.

### EXAMPLES

1. Generate a contract address that starts with `dead`:
   ```sh
   probe create2 --starts-with dead
   ```
2. Generate a contract address that ends with `beef`:
   ```sh
   probe create2 --ends-with beef
   ```
3. A more complex example:
   ```sh
   probe create2 --starts-with dead --case-sensitive --deployer 0x0000000000FFe8B47B3e2130213B802212439497 --init-code-hash 0x0c591f26891d6443cf08c5be3584c1e6ae10a4c2f07c5c53218741e9755fb9cd
   ```

### SEE ALSO

[probe](./probe.md), [probe compute-address](./probe-compute-address.md)
