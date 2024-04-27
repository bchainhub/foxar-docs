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
  ],
   
//   docs: [
//     {
//       type: 'category',
//       label: 'Getting Started',
//       items: [
        
//         {
//           type: 'category',
//           label: 'First Steps with Foxar',
//           items: ['introduction', 'sidebar', 'markdown-features', 'versioning'],
//         },
//       ],
//     },
//   ],
};

export default sidebars;
