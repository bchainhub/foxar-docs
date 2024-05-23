#### EVM Options

`-f` _url_
`--rpc-url` _url_
`--fork-url` _url_
Fetch state over a remote endpoint instead of starting from an empty state.

If you want to fetch state from a specific block number, see
`--fork-block-number`.

`--fork-block-number` _block_
Fetch state from a specific block number over a remote endpoint. See `--fork-url`.

`--fork-retry-backoff <BACKOFF>`
Initial retry backoff on encountering errors.

`--no-storage-caching`
Explicitly disables the use of RPC caching.

All storage slots are read entirely from the endpoint. See `--fork-url`.

`-v`
`--verbosity`
Verbosity of the EVM.

Pass multiple times to increase the verbosity (e.g. `-v`, `-vv`, `-vvv`).

Verbosity levels:

- 2: Print logs for all tests
- 3: Print execution traces for failing tests
- 4: Print execution traces for all tests, and setup traces for failing tests
- 5: Print execution and setup traces for all tests

`--sender` _address_
The address which will be executing tests

`--initial-balance` _balance_
The initial balance of deployed contracts

`--ffi`
Enables the [FFI cheatcode][ffi-cheatcode]

[ffi-cheatcode]: ../cheatcodes/ffi.md
