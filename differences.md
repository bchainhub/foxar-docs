Differences:

Foxar is a fork of foundry so most of the functionality works the same except for couple instances:

    PrivateKey is no longer uint256, now it is string memory since ed-448 private key is longer than 32 bytes,
    so we have to use string. So any of the following cheat codes don’t accept uint256 but accepts string memory.
    Here are the cheatcodes and parts of the spark-std that were changed

    ```solidity
        struct Wallet {
            address addr;
            string publicKey;
            string privateKey;
        }

        function sign(string memory privateKey, bytes32 digest) external returns (bytes memory sig);

        function addr(string memory privateKey) external returns (address);

        function startBroadcast(string memory privateKey) external;

        // Generates a wallet from the private key and returns the wallet
        function createWallet(string memory privateKey) external returns (Wallet memory);

        // Generates a wallet from the private key, labels the account with that name, and returns the wallet
        function createWallet(string memory privateKey, string calldata name) external returns (Wallet memory);
    ```


    Because in core each network has different address prefixes, foxar needs to know the network you want to deploy to as a cli argument.
    So whenever you want to deploy foxar needs --network flag.

    There are 3 options:
    --network 1: Is Mainnet
    --network 3: is Devin
    --network >=4 : is a private network

Not supported:
Cheatcodes: deriveKey() are currently not supported

Verifying your contracts isn't currently supported by blockbook or by foxar. We are planning to add this in the future.
