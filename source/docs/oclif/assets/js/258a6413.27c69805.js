"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[3651],{5453:(e,n,o)=>{o.r(n),o.d(n,{assets:()=>a,contentTitle:()=>c,default:()=>m,frontMatter:()=>s,metadata:()=>r,toc:()=>d});var t=o(4848),i=o(8453);const s={title:"Single Command CLI",description:"Configure CLI to be a single command"},c=void 0,r={id:"single_command_cli",title:"Single Command CLI",description:"Configure CLI to be a single command",source:"@site/../docs/single_command_cli.md",sourceDirName:".",slug:"/single_command_cli",permalink:"/docs/oclif/docs/single_command_cli",draft:!1,unlisted:!1,editUrl:"https://github.com/oclif/oclif.github.io/tree/docs/docs/../docs/single_command_cli.md",tags:[],version:"current",lastUpdatedBy:"Mike Donnalley",lastUpdatedAt:1711731567e3,frontMatter:{title:"Single Command CLI",description:"Configure CLI to be a single command"},sidebar:"docs",previous:{title:"Running Commands Programmatically",permalink:"/docs/oclif/docs/running_programmatically"},next:{title:"Testing",permalink:"/docs/oclif/docs/testing"}},a={},d=[];function l(e){const n={a:"a",code:"code",p:"p",pre:"pre",...(0,i.R)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsxs)(n.p,{children:["Sometimes you may want your CLI's executable to also be the only command, similar to many bash utilities like ",(0,t.jsx)(n.code,{children:"ls"})," or ",(0,t.jsx)(n.code,{children:"cat"}),"."]}),"\n",(0,t.jsxs)(n.p,{children:["To support this, you will need to put your command logic into ",(0,t.jsx)(n.code,{children:"src/index.ts"})," and add the following to the oclif section of your package.json:"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-json",children:'{\r\n  "oclif": {\r\n    "commands": {\r\n      "strategy": "single",\r\n      "target": "./dist/index.js"\r\n    }\r\n  }\r\n}\n'})}),"\n",(0,t.jsxs)(n.p,{children:["where ",(0,t.jsx)(n.code,{children:"./dist/index.js"})," is a file that exports a ",(0,t.jsx)(n.code,{children:"Command"})," class. See ",(0,t.jsx)(n.a,{href:"./command_discovery_strategies",children:"Command Discovery Strategies"})," for more details."]})]})}function m(e={}){const{wrapper:n}={...(0,i.R)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(l,{...e})}):l(e)}},8453:(e,n,o)=>{o.d(n,{R:()=>c,x:()=>r});var t=o(6540);const i={},s=t.createContext(i);function c(e){const n=t.useContext(s);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function r(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:c(e.components),t.createElement(s.Provider,{value:n},e.children)}}}]);