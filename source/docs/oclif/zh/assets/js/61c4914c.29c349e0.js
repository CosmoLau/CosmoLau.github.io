"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[8116],{701:(n,s,e)=>{e.r(s),e.d(s,{assets:()=>l,contentTitle:()=>c,default:()=>u,frontMatter:()=>o,metadata:()=>r,toc:()=>a});var t=e(4848),i=e(8453);const o={title:"\u81ea\u5b9a\u4e49 NSIS \u5b89\u88c5\u7a0b\u5e8f",description:"\u81ea\u5b9a\u4e49 nsis \u5b89\u88c5\u7a0b\u5e8f\u811a\u672c"},c=void 0,r={id:"nsis-installer_customization",title:"\u81ea\u5b9a\u4e49 NSIS \u5b89\u88c5\u7a0b\u5e8f",description:"\u81ea\u5b9a\u4e49 nsis \u5b89\u88c5\u7a0b\u5e8f\u811a\u672c",source:"@site/i18n/zh/docusaurus-plugin-content-docs/current/nsis-installer_customization.md",sourceDirName:".",slug:"/nsis-installer_customization",permalink:"/docs/oclif/zh/docs/nsis-installer_customization",draft:!1,unlisted:!1,editUrl:"https://github.com/oclif/oclif.github.io/tree/docs/docs/../docs/nsis-installer_customization.md",tags:[],version:"current",lastUpdatedBy:"CosmoLau",lastUpdatedAt:1713160487e3,frontMatter:{title:"\u81ea\u5b9a\u4e49 NSIS \u5b89\u88c5\u7a0b\u5e8f",description:"\u81ea\u5b9a\u4e49 nsis \u5b89\u88c5\u7a0b\u5e8f\u811a\u672c"},sidebar:"docs",previous:{title:"JSON",permalink:"/docs/oclif/zh/docs/json"},next:{title:"\u53d1\u5e03",permalink:"/docs/oclif/zh/docs/releasing"}},l={},a=[];function d(n){const s={a:"a",code:"code",p:"p",pre:"pre",...(0,i.R)(),...n.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsxs)(s.p,{children:["\u6709\u65f6\uff0c\u4f60\u9700\u8981\u9a8c\u8bc1\u67d0\u4e9b\u4f9d\u8d56\u9879\uff0c\u786e\u4fdd\u6ca1\u6709\u5b89\u88c5\u51b2\u7a81\u7684 CLI\uff0c\u6216\u8005\u5728\u5b89\u88c5 CLI \u4e4b\u524d\u6267\u884c\u4e00\u4e9b\u5176\u4ed6\u81ea\u5b9a\u4e49\u903b\u8f91\u3002\u5bf9\u4e8e npm \u573a\u666f\uff0c\u53ea\u9700\u6307\u5b9a\u4e00\u4e2a ",(0,t.jsx)(s.code,{children:"preinstall"})," \u811a\u672c\u3002\u4f46 Windows \u5b89\u88c5\u7a0b\u5e8f\u4e0d\u5305\u542b\u6b64\u811a\u672c\u3002\u76f8\u53cd\uff0c\u4f60\u5fc5\u987b\u7f16\u5199\u81ea\u5df1\u7684 nsis \u4fee\u6539\u7a0b\u5e8f\u6765\u6267\u884c\u8fd9\u4e9b\u68c0\u67e5\u3002\u67e5\u770b\u6b64\u81ea\u5b9a\u4e49\u811a\u672c\u5728 ",(0,t.jsx)(s.a,{href:"https://github.com/oclif/oclif/blob/b8d76af9290716ef69d8d1026f98041268306dfd/src/commands/pack/win.ts#L60",children:"oclif/oclif"})," \u4ed3\u5e93\u4e2d\u5b89\u88c5\u7a0b\u5e8f\u4e2d\u7684\u4f4d\u7f6e\u3002"]}),"\n",(0,t.jsxs)(s.p,{children:["\u4e86\u89e3 ",(0,t.jsx)(s.a,{href:"https://github.com/salesforcecli/cli",children:"Salesforce CLI"})," \u5982\u4f55\u505a\u5230\u8fd9\u4e00\u70b9\uff0c\u4ee5\u9632\u6b62\u5176\u65b0\u7684\u4e3b\u8981\u7248\u672c\u5b89\u88c5\u5728\u65e7\u7684\u3001\u4e0d\u517c\u5bb9\u7684\u7248\u672c\u4e4b\u4e0a\u3002\u5728 ",(0,t.jsx)(s.code,{children:"package.json"})," \u4e2d\uff0c\u4ed6\u4eec\u6307\u5b9a\u4e86\u4e00\u4e2a nsis \u5b89\u88c5\u7a0b\u5e8f\uff0c\u5982\u4e0b\u6240\u793a\uff1a"]}),"\n",(0,t.jsx)(s.pre,{children:(0,t.jsx)(s.code,{className:"language-json",children:'{\r\n  "name": "mycli",\r\n  "version": "0.0.0",\r\n  "description": "My CLI",\r\n  "main": "bin/run.js",\r\n  "bin": "./bin/run.js",\r\n  "oclif": {\r\n    "nsisCustomization": "scripts/nsis.nsi"\r\n  }\r\n}\n'})}),"\n",(0,t.jsx)(s.p,{children:"\u7136\u540e\u5728 CLI \u7684\u6253\u5305\u9636\u6bb5\u5c06\u5176\u81ea\u5b9a\u4e49\u811a\u672c\u52a0\u8f7d\u5230\u5b89\u88c5\u7a0b\u5e8f\u4e2d\u3002"})]})}function u(n={}){const{wrapper:s}={...(0,i.R)(),...n.components};return s?(0,t.jsx)(s,{...n,children:(0,t.jsx)(d,{...n})}):d(n)}},8453:(n,s,e)=>{e.d(s,{R:()=>c,x:()=>r});var t=e(6540);const i={},o=t.createContext(i);function c(n){const s=t.useContext(o);return t.useMemo((function(){return"function"==typeof n?n(s):{...s,...n}}),[s,n])}function r(n){let s;return s=n.disableParentContext?"function"==typeof n.components?n.components(i):n.components||i:c(n.components),t.createElement(o.Provider,{value:s},n.children)}}}]);