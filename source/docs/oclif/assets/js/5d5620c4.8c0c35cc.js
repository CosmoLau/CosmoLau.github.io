"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[8990],{5219:(e,n,i)=>{i.r(n),i.d(n,{assets:()=>c,contentTitle:()=>r,default:()=>p,frontMatter:()=>o,metadata:()=>l,toc:()=>d});var s=i(4848),t=i(8453);const o={title:"ESM",description:"Using ESM in oclif"},r=void 0,l={id:"esm",title:"ESM",description:"Using ESM in oclif",source:"@site/../docs/esm.md",sourceDirName:".",slug:"/esm",permalink:"/docs/oclif/docs/esm",draft:!1,unlisted:!1,editUrl:"https://github.com/oclif/oclif.github.io/tree/docs/docs/../docs/esm.md",tags:[],version:"current",lastUpdatedBy:"Mike Donnalley",lastUpdatedAt:1711731567e3,frontMatter:{title:"ESM",description:"Using ESM in oclif"},sidebar:"docs",previous:{title:"Error Handling",permalink:"/docs/oclif/docs/error_handling"},next:{title:"Flag Inheritance",permalink:"/docs/oclif/docs/flag_inheritance"}},c={},d=[{value:"Interoperability Overview",id:"interoperability-overview",level:2},{value:"ESM Root plugin",id:"esm-root-plugin",level:3},{value:"CJS Root plugin",id:"cjs-root-plugin",level:3},{value:"Creating an ESM plugin",id:"creating-an-esm-plugin",level:2},{value:"Migrating a CJS plugin to ESM",id:"migrating-a-cjs-plugin-to-esm",level:2},{value:"Update bin scripts",id:"update-bin-scripts",level:3},{value:"bin/dev \u2192 bin/dev.js",id:"bindev--bindevjs",level:4},{value:"bin/run \u2192 bin/run.js",id:"binrun--binrunjs",level:4},{value:"Update tsconfig.json",id:"update-tsconfigjson",level:3},{value:"Update package.json to &quot;module&quot; type",id:"update-packagejson-to-module-type",level:3},{value:"Update references to bin scripts",id:"update-references-to-bin-scripts",level:3},{value:"Update mocharc settings",id:"update-mocharc-settings",level:3}];function a(e){const n={a:"a",code:"code",h2:"h2",h3:"h3",h4:"h4",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,t.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsxs)(n.p,{children:["Version 3.0.0 of ",(0,s.jsx)(n.code,{children:"@oclif/core"})," officially supports ESM plugin development and CJS/ESM interoperability, meaning that you can have a root plugin written with CJS and your plugins written in ESM or vice versa."]}),"\n",(0,s.jsx)(n.h2,{id:"interoperability-overview",children:"Interoperability Overview"}),"\n",(0,s.jsx)(n.p,{children:"Here's a high level overview of ESM/CJS interoperability:"}),"\n",(0,s.jsx)(n.h3,{id:"esm-root-plugin",children:"ESM Root plugin"}),"\n",(0,s.jsx)(n.p,{children:"\u2705 Install CJS plugins"}),"\n",(0,s.jsx)(n.p,{children:"\u2705 Install ESM plugins"}),"\n",(0,s.jsx)(n.p,{children:"\u2705 Link CJS plugins"}),"\n",(0,s.jsx)(n.p,{children:"\u26a0\ufe0f Link ESM plugins"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["Auto-compilation will ",(0,s.jsx)(n.strong,{children:"not"})," work with linked ESM plugins. Instead, oclif will use the plugin's compiled source - this means that you must compile the plugin yourself before executing any of the commands. We plan to support this again once the node ecosystem offers more comprehensive native support for ESM."]}),"\n"]}),"\n",(0,s.jsx)(n.h3,{id:"cjs-root-plugin",children:"CJS Root plugin"}),"\n",(0,s.jsx)(n.p,{children:"\u2705 Install CJS plugins"}),"\n",(0,s.jsx)(n.p,{children:"\u2705 Install ESM plugins"}),"\n",(0,s.jsx)(n.p,{children:"\u2705 Link CJS plugins"}),"\n",(0,s.jsx)(n.p,{children:"\u26a0\ufe0f Link ESM plugins"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["Auto-compilation will ",(0,s.jsx)(n.strong,{children:"not"})," work with linked ESM plugins. Instead, oclif will use the plugin's compiled source - this means that you must compile the plugin yourself before executing any of the commands. We plan to support this again once the node ecosystem offers more comprehensive native support for ESM."]}),"\n"]}),"\n",(0,s.jsx)(n.h2,{id:"creating-an-esm-plugin",children:"Creating an ESM plugin"}),"\n",(0,s.jsxs)(n.p,{children:["To generate a new ESM plugin from the ",(0,s.jsx)(n.a,{href:"https://github.com/oclif/hello-world-esm",children:"hello-world-esm template"})," run the ",(0,s.jsx)(n.code,{children:"oclif generate"})," command and select ",(0,s.jsx)(n.code,{children:"ESM"})," when it prompts you to select a module type:"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{children:"$ npx oclif generate my-esm-plugin\r\n? Select a module type\r\n  CommonJS\r\n\u276f ESM\n"})}),"\n",(0,s.jsx)(n.h2,{id:"migrating-a-cjs-plugin-to-esm",children:"Migrating a CJS plugin to ESM"}),"\n",(0,s.jsx)(n.h3,{id:"update-bin-scripts",children:"Update bin scripts"}),"\n",(0,s.jsxs)(n.p,{children:["First you will need to update the bin scripts under the ",(0,s.jsx)(n.code,{children:"bin"})," directory."]}),"\n",(0,s.jsx)(n.h4,{id:"bindev--bindevjs",children:"bin/dev \u2192 bin/dev.js"}),"\n",(0,s.jsxs)(n.p,{children:["Rename ",(0,s.jsx)(n.code,{children:"bin/dev"})," to ",(0,s.jsx)(n.code,{children:"bin/dev.js"})," and replace the existing code with the following:"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-js",children:"#!/usr/bin/env -S node --loader ts-node/esm --no-warnings=ExperimentalWarning\r\n\r\nimport {execute} from '@oclif/core'\r\n\r\nawait execute({development: true, dir: import.meta.url})\n"})}),"\n",(0,s.jsxs)(n.p,{children:["This leverages oclif's ",(0,s.jsx)(n.code,{children:"execute"})," function which handles all the development setup for you. You no longer need set the ",(0,s.jsx)(n.code,{children:"NODE_ENV"})," env var or register the project with ",(0,s.jsx)(n.code,{children:"ts-node"}),". You can still adjust oclif ",(0,s.jsx)(n.code,{children:"settings"})," before executing the CLI. For example,"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-js",children:"#!/usr/bin/env -S node --loader ts-node/esm --no-warnings=ExperimentalWarning\r\n\r\nimport {execute, settings} from '@oclif/core'\r\n\r\nsettings.performanceEnabled = true\r\n\r\nawait execute({development: true, dir: import.meta.url})\n"})}),"\n",(0,s.jsx)(n.h4,{id:"binrun--binrunjs",children:"bin/run \u2192 bin/run.js"}),"\n",(0,s.jsxs)(n.p,{children:["Rename ",(0,s.jsx)(n.code,{children:"bin/run"})," to ",(0,s.jsx)(n.code,{children:"bin/run.js"})," and replace the existing code with the following:"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-js",children:"#!/usr/bin/env node\r\n\r\nimport {execute} from '@oclif/core'\r\n\r\nawait execute({dir: import.meta.url})\n"})}),"\n",(0,s.jsx)(n.h3,{id:"update-tsconfigjson",children:"Update tsconfig.json"}),"\n",(0,s.jsxs)(n.p,{children:["After updating the bin scripts you now need to update the ",(0,s.jsx)(n.code,{children:"tsconfig.json"})," to include the following options:"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-json",children:'{\r\n  "compilerOptions": {\r\n    "module": "ES2020",\r\n    "moduleResolution": "node16",\r\n  },\r\n  "ts-node": {\r\n    "esm": true\r\n  }\r\n}\n'})}),"\n",(0,s.jsx)(n.h3,{id:"update-packagejson-to-module-type",children:'Update package.json to "module" type'}),"\n",(0,s.jsxs)(n.p,{children:["Add ",(0,s.jsx)(n.code,{children:'"type": "module"'})," to your package.json so that your files will be loaded as ESM modules"]}),"\n",(0,s.jsx)(n.h3,{id:"update-references-to-bin-scripts",children:"Update references to bin scripts"}),"\n",(0,s.jsxs)(n.p,{children:["You will need to update the references to your bin scripts to the bin scripts with the ",(0,s.jsx)(n.code,{children:".js"})," extension. In the ",(0,s.jsx)(n.code,{children:"package.json"})," you will need to update the ",(0,s.jsx)(n.code,{children:"bin"})," like so:"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-json",children:'  "bin": {\r\n    "my-cli": "./bin/run"\r\n  },\n'})}),"\n",(0,s.jsx)(n.p,{children:"to"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-json",children:'  "bin": {\r\n    "my-cli": "./bin/run.js"\r\n  },\n'})}),"\n",(0,s.jsxs)(n.p,{children:["You may have references to the bin scripts in your ",(0,s.jsx)(n.code,{children:".vscode/launch.json"})," or in the ",(0,s.jsx)(n.code,{children:"scripts"})," of your ",(0,s.jsx)(n.code,{children:"package.json"}),". You'll need to update these as well."]}),"\n",(0,s.jsx)(n.h3,{id:"update-mocharc-settings",children:"Update mocharc settings"}),"\n",(0,s.jsx)(n.p,{children:"In order for your mocha tests to run, you'll need to make a couple of changes:"}),"\n",(0,s.jsxs)(n.ol,{children:["\n",(0,s.jsxs)(n.li,{children:["Add the following to the ",(0,s.jsx)(n.code,{children:".mocharc.json"})]}),"\n"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-json",children:'{\r\n  "node-option": [\r\n    "loader=ts-node/esm"\r\n  ]\r\n}\n'})}),"\n",(0,s.jsxs)(n.ol,{start:"2",children:["\n",(0,s.jsxs)(n.li,{children:["Update ",(0,s.jsx)(n.code,{children:"test/helpers/init.js"})]}),"\n"]}),"\n",(0,s.jsxs)(n.p,{children:["If your plugin was generated ",(0,s.jsx)(n.code,{children:"oclif generate"})," then you likely have a ",(0,s.jsx)(n.code,{children:"test/helpers/init.js"})," file that needs to be updated. You can either update the file extension to ",(0,s.jsx)(n.code,{children:".cjs"})," or update the ",(0,s.jsx)(n.code,{children:"require"})," at the top of the file to an ",(0,s.jsx)(n.code,{children:"import"}),","]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-js",children:"import path from 'node:path'\n"})}),"\n",(0,s.jsx)(n.p,{children:"Alternatively, you can safely delete this file since it's no longer necessary."})]})}function p(e={}){const{wrapper:n}={...(0,t.R)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(a,{...e})}):a(e)}},8453:(e,n,i)=>{i.d(n,{R:()=>r,x:()=>l});var s=i(6540);const t={},o=s.createContext(t);function r(e){const n=s.useContext(o);return s.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function l(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:r(e.components),s.createElement(o.Provider,{value:n},e.children)}}}]);