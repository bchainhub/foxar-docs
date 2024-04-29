import type {SidebarsConfig} from '@docusaurus/plugin-content-docs';

/**
 * Creating a sidebar enables you to:
 - create an ordered group of docs
 - render a sidebar for each doc of that group
 - provide next/previous navigation

 The sidebars can be generated from the filesystem, or explicitly defined here.

 Create as many sidebars as you want.
 */
const sidebars: SidebarsConfig = {
  // By default, Docusaurus generates a sidebar from the docs folder structure
  // tutorialSidebar: [{type: 'autogenerated', dirName: '.'}],

  // But you can create a sidebar manually

  
  tutorialSidebar: [
    'intro',
    {
      type: 'category',
      label: 'Getting Started',
      items: ['getting-started/installation','getting-started/first-steps'],
    },
    {
      type: 'category',
      label: 'Projects',
      items: ['projects/creating-a-new-project','projects/working-on-an-existing-project', 'projects/dependencies','projects/project-layout'],
    },
    {
      type: 'category',
      label: 'Spark Overview',
      items: ['spark/overview-spark',
      { 
        type: 'category', 
        label: 'Tests',  
        link: {
          type: 'doc',
        
          id: 'spark/tests',
        },

        items: ['spark/writing-tests','spark/cheatcodes', 'spark/spark-std', 'spark/traces', 'spark/fork-testing']
       }, 
       { 
        type: 'category', 
        label: 'Advanced Testing',  
        link: {
          type: 'doc',
        
          id: 'spark/advanced-testing',
        },
      
        items: ['spark/fuzz-testing','spark/invariant-testing', 'spark/differential-ffi-testing']
       }, 
       'spark/deploying',
       { 
        type: 'category', 
        label: 'Gas Tracking',  
        link: {
          type: 'doc',
        
          id: 'spark/gas-tracking',
        },
      
        items: ['spark/gas-reports','spark/gas-snapshots']
       }, 
       'spark/debugger',
        ],
    },
    {
      type: 'category',
      label: 'Probe Overview',
      items: ['probe/probe-overview']
    },
    {
      type: 'category',
      label: 'Shuttle Overview',
      items: ['shuttle/shuttle-overview']
    },
    {
      type: 'category',
      label: 'Pilot Overview',
      items: ['pilot/pilot-overview']
    },
    {
      type: 'category',
      label: 'Configuration',
      items: ['config/configuration', 'config/continuous-integration', 'config/vscode', 'config/shell-autocompletion', 'config/static-analyzers', 'config/hardhat']
    },
    {
      type: 'category',
      label: 'Tutorials',
      items: ['tutorials/best-practices', 'tutorials/solmate-nft', 'tutorials/foxar-docker', 'tutorials/testing-eip712', 'tutorials/solidity-scripting', 'tutorials/create2-tutorial', 'tutorials/forking-mainnet-with-probe-shuttle', 'tutorials/learn-foxar']
    },
    {
      type: 'category',
      label: 'Appendix',
      items: ['faq', 'contributing']
    },
    {
      type: 'category',
      label: 'References',
      link: {
        type: 'doc',
      
        id: 'reference/reference',
      },
      items: [
        
                {
                  type: 'category',
                  label: 'CLI Reference',
                  link: {
                    type: 'doc',
                  
                    id: 'reference/cli/cli-reference',
                  },
                  items: [
                  {
                  type: 'category',
                  label: 'spark',
                  link: {
                    type: 'doc',
                  
                    id: 'reference/cli/spark',
                  },items: [
                    'reference/cli/spark/bind',  'reference/cli/spark/build',
                    {
                      type: 'category',
                      label: 'spark cache',
                      link: {
                        type: 'doc',
                      
                        id: 'reference/cli/spark/cache',
                      },
                      items: ['reference/cli/spark/cache/clean', 'reference/cli/spark/cache/ls']},
                    'reference/cli/spark/clean','reference/cli/spark/completions', 'reference/cli/spark/config',
                    'reference/cli/spark/coverage','reference/cli/spark/create','reference/cli/spark/debug',
                    'reference/cli/spark/doc', 'reference/cli/spark/flatten', 'reference/cli/spark/fmt',
                    'reference/cli/spark/geiger',
                    {
                      type: 'category',
                      label: 'spark generate',
                      link: {
                        type: 'doc',
                      
                        id: 'reference/cli/spark/generate',
                      },
                      items: ['reference/cli/spark/generate/test']},
                      'reference/cli/spark/generate-fig-spec','reference/cli/spark/init',
                      'reference/cli/spark/inspect', 'reference/cli/spark/install', 'reference/cli/spark/remappings',
                      'reference/cli/spark/remove', 'reference/cli/spark/script',
                      {
                        type: 'category',
                        label: 'spark selectors',
                        link: {
                          type: 'doc',
                        
                          id: 'reference/cli/spark/selectors',
                        },
                        items: ['reference/cli/spark/selectors/collision','reference/cli/spark/selectors/upload','reference/cli/spark/selectors/list']},
                        'reference/cli/spark/snapshot', 'reference/cli/spark/test', 'reference/cli/spark/tree', 'reference/cli/spark/update',
                        'reference/cli/spark/verify-check', 'reference/cli/spark/verify-contract'
                    ]
                  },
                  {
                    type: 'category',
                    label: 'probe',
                    link: {
                      type: 'doc',
                    
                      id: 'reference/cli/probe',
                    },
                    items: [
                      'reference/cli/probe/4byte',
                      'reference/cli/probe/4byte-decode',
                      'reference/cli/probe/4byte-event',
                      'reference/cli/probe/abi-decode',
                      'reference/cli/probe/abi-encode',
                       'reference/cli/probe/access-list',
                      'reference/cli/probe/address-zero',
                      'reference/cli/probe/admin',
                      'reference/cli/probe/age',
                      'reference/cli/probe/balance',
                      'reference/cli/probe/base-fee',
                      'reference/cli/probe/bind',
                      'reference/cli/probe/block',
                      'reference/cli/probe/block-number',
'reference/cli/probe/call',
'reference/cli/probe/call/--create',
'reference/cli/probe/calldata',
'reference/cli/probe/calldata-decode',
'reference/cli/probe/chain',
'reference/cli/probe/chain-id',
'reference/cli/probe/client',
'reference/cli/probe/code',
'reference/cli/probe/codesize',
'reference/cli/probe/completions',
'reference/cli/probe/compute-address',
'reference/cli/probe/concat-hex',
'reference/cli/probe/create2',
'reference/cli/probe/decode-transaction',
'reference/cli/probe/disassemble', 
{
  type: 'category',
  label: 'probe estimate',
  link: {
    type: 'doc',
  
    id: 'reference/cli/probe/estimate',
  },
  items: ['reference/cli/probe/estimate/--create']},
 'reference/cli/probe/etherscan-source',
 'reference/cli/probe/format-bytes32-string',
 'reference/cli/probe/find-block',
 'reference/cli/probe/from-bin',
 'reference/cli/probe/from-fixed-point',
 'reference/cli/probe/from-rlp',
 'reference/cli/probe/from-utf8',
'reference/cli/probe/from-wei',
 'reference/cli/probe/gas-price',
 'reference/cli/probe/generate-fig-spec',
 'reference/cli/probe/hash-zero',
 'reference/cli/probe/implementation',
'reference/cli/probe/index',
 'reference/cli/probe/interface',
 'reference/cli/probe/keccak',
  'reference/cli/probe/logs',
 'reference/cli/probe/lookup-address',
 'reference/cli/probe/max-int',
 'reference/cli/probe/max-uint',
 'reference/cli/probe/min-int',
'reference/cli/probe/namehash',
  'reference/cli/probe/nonce',
  'reference/cli/probe/parse-bytes32-address',
  'reference/cli/probe/parse-bytes32-string',
  'reference/cli/probe/pretty-calldata',
  'reference/cli/probe/proof',
 'reference/cli/probe/publish',
  'reference/cli/probe/receipt',
  'reference/cli/probe/resolve-name',
  'reference/cli/probe/rpc',
  'reference/cli/probe/run',
  'reference/cli/probe/selectors',
  
  {
    type: 'category',
    label: 'probe send',
    link: {
      type: 'doc',
    
      id: 'reference/cli/probe/send',
    },
    items: ['reference/cli/probe/send/--create']},
    'reference/cli/probe/shl',
    'reference/cli/probe/shr',
    'reference/cli/probe/sig',
    'reference/cli/probe/sig-event',
    'reference/cli/probe/storage',
    'reference/cli/probe/to-ascii',
    'reference/cli/probe/to-base',
    'reference/cli/probe/to-bytes32',
    'reference/cli/probe/to-check-sum-address',
    'reference/cli/probe/to-dec',
    'reference/cli/probe/to-fixed-point',
    'reference/cli/probe/to-hex',
    'reference/cli/probe/to-hexdata',
    'reference/cli/probe/to-int256',
    'reference/cli/probe/to-rlp',
    'reference/cli/probe/to-uint256',
    'reference/cli/probe/to-unit',
    'reference/cli/probe/to-wei',
    'reference/cli/probe/tx',
    'reference/cli/probe/upload-signature',
    
    {
      type: 'category',
      label: 'probe wallet',
      link: {
        type: 'doc',
      
        id: 'reference/cli/probe/wallet',
      },
      items: [ 'reference/cli/probe/wallet/new',
      'reference/cli/probe/wallet/new-mnemonic', 'reference/cli/probe/wallet/vanity','reference/cli/probe/wallet/address',
      'reference/cli/probe/wallet/sign',
     
      'reference/cli/probe/wallet/verify',
      'reference/cli/probe/wallet/import',
      'reference/cli/probe/wallet/list',
'reference/cli/probe/wallet/derive-private-key'
     
    ]},
               ],
                },
                {
                  type: 'category',
                  label: 'shuttle',
                  link: {
                    type: 'doc',
                  
                    id: 'reference/cli/shuttle',
                  },
                  items: ['reference/cli/shuttle/completions', 'reference/cli/shuttle/generate-fig-spec']},
                  {
                    type: 'category',
                    label: 'pilot',
                    link: {
                      type: 'doc',
                    
                      id: 'reference/cli/pilot',
                    },
                    items: ['reference/cli/pilot/list','reference/cli/pilot/load','reference/cli/pilot/view', 'reference/cli/pilot/clear-cache']}
              ],
    },
    {
      type: 'category',
      label: 'Spark Commands',
      link: {
        type: 'doc',
      
        id: 'reference/spark/commands',
      },
      items: [
        {
          type: 'category',
          label: 'General Commands',
          link: {
            type: 'doc',
          
            id: 'reference/spark/general-commands',
          },
          items: ['reference/spark/spark', 'reference/spark/spark-help', 'reference/spark/spark-completions']},
          {
            type: 'category',
            label: 'Project Commands',
            link: {
              type: 'doc',
            
              id: 'reference/spark/project-commands',
            },
            items: ['reference/spark/spark-init', 'reference/spark/spark-install', 'reference/spark/spark-update',
            'reference/spark/spark-remove', 'reference/spark/spark-config', 'reference/spark/spark-remappings',
            'reference/spark/spark-tree', 'reference/spark/spark-geiger'
            ]}
      ]}
  ],
   
 
}
  ]
};

export default sidebars;
