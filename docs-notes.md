### Should be looked over:
1. versioned_docs/version-1/config/vscode.md - Whole document depends on a solidty plugin
    which I don't think works good with ylem

2. versioned_docs/version-1/probe/probe-overview.md - line 19 we should add address to some of our tokens 

3. versioned_docs/version-1/projects/dependencies.md - line 12 installs library that won't work with our chain


### TODO:

1. Add known addresses to versioned_docs/version-1/misc/precompile-registry.md

2. In many files are pasted outputs from foxar, we should at least change the addresses there

3. Change ether to core

4. Investigate if in our foxar.toml we use gas_reports or energy_reports and depending 
    on that change it in versioned-docs/version-1/spark/gas-reports.md
5. Gas snapshots as well in versioned-docs/version-1/spark/gas-snapshots.md
6. Gas tracking as well in versioned-docs/version-1/spark/gas-tracking.md


7. We should probably add disclaimer to the first page of the docs that the docs are still in alpha, 
    and that if they have any questions to either reach out to us through discord or open an issue in foxar.

8. We should probably open a new channel where people could ask questions about foxar.

9. There is address: 0xb4c79daB8f259C7Aee6E5b2Aa729821864227e84 to which tests are always 
    deployed check which address is it for foxar and change it accross the docs.

10. Tutorials are full of token addresses and other stuff that is in questions down bellow, fix once answers will be given.

11. We changed couple of cheatcodes mainly regarding the private key, change them in the refference

12. Look over the `struct Wallet` in spark-std and fix in cheatcodes-reference.md if it is different

12. Fix broken links: versioned_docs/version-1/config/continuous-integration.md:

    line 24 wrong link to repo
    line 62 wrong link


Questions:

1. There are many links to solidity docs, do we keep those?

        Nechal by som lebo Ylem je podobny

2. When using ylem compiler we still use pragma solidity and .sol extension, 
   this makes it look very iffy, we should probably change that.
        Nechajme to na verziu Ylem 2.0 lebo potom budeme mat rozne jazyky podporovane. Teraz by to bolo hrozne vela roboty

3. Where do we want to write acknowledgments?
        Co konkretne? Posles link?

4. Where do we want to have the page that outlines all the differences?

        Dal by som to ako novy paragraf pod menu "Appendix" , nieco za FAQ ako "Differences"

5. In versioned_docs/version-1/spark/debugger.md from line 98 there are links to evm.codes, 
   do we want to change this?

        Nemame k nim ziadne alternativy, tak asi nechat zatial.

6. In some cases there is a ENV Variable ETH_RPC_URL to what do we want to change this?

    Videl som to v kode. Mali sme s tym problem aj predtym v nejakych pripadoch ale nechali sme to koli kompatibilite. Ak kompatibilita je ohrozena iba mierne, menime takto: https://github.com/core-coin/renaming-table Ale skus sam pozret kde sa to vyskytuje, ci to ma vyznam premenovat.

7. In couple files they are importing ERC20 token from solmate which we don't 
   support do we have somewhere CRC-20 standart? 
   Ideally we would make it into a library that people can just import with foxar
   When ready change this in file: versioned-docs/version-1/spark/deploying.md

        Ano, videl som. Mame to ako CBC-20 https://cip.coreblockchain.net/cip/cbc/cip-20 Mozme zmenit?

8. There are links to repos that use foundry as an example do we leave them in?

        Nechat zatial kym nevydame svoje alebo nenajdeme alternativu.

9. Couple code examples are using different libraries like 
   open-zeppelin which we don't support do we just delete these code examples?

        Ano zmazat neskor mozme doplnit za alternativy.

10. In couple places they are explaining how to use etherscan to verify contracts, 
    can we hide these parts until blookbook and foxar support this?

        Zatial by som taktiez zmazal, ale vytvoril issue v blockbook na toto feature, nech to tam figuruje. https://github.com/bchainhub/blockbook/issues

11. In couple places they are reffering to alchemy, do we just include our links to our rpc servers?
        Nemame zatial public RPC serveri, ale planujeme. Tak tiez zmazeme a doplnime. Prosim trakuj do dokumentu, co mazeme.

12. In some of the output examples there are calldata like in this instance:
        Mali by sme prepocitat, mozno niekto s tym moze pomoct.

    ```sh
    Running 1 test for test/Safe.t.sol:SafeTest
    [FAIL. Reason: EvmError: Revert; counterexample: calldata=0x29facca70000000000000000000000000000000000000001000000000000000000000000 args=[79228162514264337593543950336 [7.922e28]]] testFuzz_Withdraw(uint256) (runs: 7, μ: 19509, ~: 19509)
    Test result: FAILED. 0 passed; 1 failed; 0 skipped; finished in 73.74ms
    ```
    Do we recalcluate the hash of the calldata or is it irrelevant?

13. In solidity we get the chain-id with `block.chainid` did we change this? If not should we? 
    If we do change the chain-id.md doc in refference

        Tazka otazka, fakt neviem - mohlo by to byt iste ako network id. Skus preverit s Misom a Sashom.



New Questions

1. In tutorial in foxar-docker in line 17 there is link to docker image, does our ci publish it already? If so modify the link to correct one

2. How do we want to track the deleted files?


Notes-to-self:

Search for: paradigm, onbjerg


