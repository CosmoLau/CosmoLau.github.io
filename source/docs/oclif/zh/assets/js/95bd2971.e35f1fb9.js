"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[3896],{3809:(n,e,o)=>{o.r(e),o.d(e,{assets:()=>l,contentTitle:()=>r,default:()=>h,frontMatter:()=>i,metadata:()=>t,toc:()=>d});var s=o(4848),c=o(8453);const i={title:"\u94a9\u5b50"},r=void 0,t={id:"hooks",title:"\u94a9\u5b50",description:"oclif \u516c\u5f00\u4e86\u751f\u547d\u5468\u671f\u4e8b\u4ef6\u94a9\u5b50\uff0c\u4f8b\u5982 init \u548c commandnotfound\u3002\u6709\u5173\u6240\u6709\u751f\u547d\u5468\u671f\u4e8b\u4ef6\u7684\u5217\u8868\uff0c\u8bf7\u53c2\u89c1\u4e0b\u6587\u3002\u9664\u4e86\u8fd9\u4e9b\u5185\u7f6e\u4e8b\u4ef6\u5916\uff0c\u4f60\u8fd8\u53ef\u4ee5\u521b\u5efa\u81ea\u5df1\u7684\u4e8b\u4ef6\uff0c\u5e76\u5141\u8bb8\u547d\u4ee4/\u63d2\u4ef6\u76d1\u89c6\u8fd9\u4e9b\u81ea\u5b9a\u4e49\u4e8b\u4ef6\u3002\u8fd9\u662f\u5141\u8bb8\u591a\u4e2a\u63d2\u4ef6\u76f8\u4e92\u4ea4\u4e92\u7684\u597d\u65b9\u6cd5\u3002",source:"@site/i18n/zh/docusaurus-plugin-content-docs/current/hooks.md",sourceDirName:".",slug:"/hooks",permalink:"/docs/oclif/zh/docs/hooks",draft:!1,unlisted:!1,editUrl:"https://github.com/oclif/oclif.github.io/tree/docs/docs/../docs/hooks.md",tags:[],version:"current",lastUpdatedBy:"CosmoLau",lastUpdatedAt:1713160487e3,frontMatter:{title:"\u94a9\u5b50"},sidebar:"docs",previous:{title:"\u6807\u9898\u5206\u9694\u7b26",permalink:"/docs/oclif/zh/docs/topic_separator"},next:{title:"\u63d2\u4ef6",permalink:"/docs/oclif/zh/docs/plugins"}},l={},d=[{value:"\u751f\u547d\u5468\u671f\u4e8b\u4ef6",id:"\u751f\u547d\u5468\u671f\u4e8b\u4ef6",level:2},{value:"\u81ea\u5b9a\u4e49\u4e8b\u4ef6",id:"\u81ea\u5b9a\u4e49\u4e8b\u4ef6",level:2}];function a(n){const e={a:"a",code:"code",h2:"h2",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,c.R)(),...n.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsxs)(e.p,{children:["oclif \u516c\u5f00\u4e86\u751f\u547d\u5468\u671f\u4e8b\u4ef6\u94a9\u5b50\uff0c\u4f8b\u5982 ",(0,s.jsx)(e.code,{children:"init"})," \u548c ",(0,s.jsx)(e.code,{children:"command_not_found"}),"\u3002",(0,s.jsx)(e.a,{href:"#%E7%94%9F%E5%91%BD%E5%91%A8%E6%9C%9F%E4%BA%8B%E4%BB%B6",children:"\u6709\u5173\u6240\u6709\u751f\u547d\u5468\u671f\u4e8b\u4ef6\u7684\u5217\u8868\uff0c\u8bf7\u53c2\u89c1\u4e0b\u6587"}),"\u3002\u9664\u4e86\u8fd9\u4e9b\u5185\u7f6e\u4e8b\u4ef6\u5916\uff0c\u4f60\u8fd8\u53ef\u4ee5\u521b\u5efa\u81ea\u5df1\u7684\u4e8b\u4ef6\uff0c\u5e76\u5141\u8bb8\u547d\u4ee4/\u63d2\u4ef6\u76d1\u89c6\u8fd9\u4e9b\u81ea\u5b9a\u4e49\u4e8b\u4ef6\u3002\u8fd9\u662f\u5141\u8bb8\u591a\u4e2a\u63d2\u4ef6\u76f8\u4e92\u4ea4\u4e92\u7684\u597d\u65b9\u6cd5\u3002"]}),"\n",(0,s.jsxs)(e.p,{children:["\u591a\u4e2a\u6302\u94a9\u5e76\u884c\u8fd0\u884c\u3002",(0,s.jsx)(e.strong,{children:"\u6b64\u884c\u4e3a\u53ef\u80fd\u4f1a\u5728\u672a\u6765\u7248\u672c\u4e2d\u66f4\u6539\u3002"})]}),"\n",(0,s.jsx)(e.p,{children:"\u4e00\u4e2a\u57fa\u7840\u7684\u94a9\u5b50\u5728 TypeScript \u4e2d\u770b\u8d77\u6765\u50cf\u4e0b\u9762\u8fd9\u6837\uff1a"}),"\n",(0,s.jsx)(e.pre,{children:(0,s.jsx)(e.code,{className:"language-typescript",children:"import {Hook} from '@oclif/core'\r\n\r\nconst hook: Hook<'init'> = async function (options) {\r\n  console.log(`example init hook running before ${options.id}`)\r\n}\r\n\r\nexport default hook\n"})}),"\n",(0,s.jsxs)(e.p,{children:["\u94a9\u5b50\u8fd8\u5fc5\u987b\u5728 ",(0,s.jsx)(e.code,{children:"package.json"})," \u4e2d\u7684 oclif \u8bbe\u7f6e\u4e0b\u58f0\u660e\u4e8b\u4ef6\u7684\u540d\u79f0\u548c\u94a9\u5b50\u7684\u6587\u4ef6\u8def\u5f84\uff1a"]}),"\n",(0,s.jsx)(e.pre,{children:(0,s.jsx)(e.code,{className:"language-json",children:'"oclif": {\r\n  "commands": "./lib/commands",\r\n  "hooks": {\r\n    "init": "./lib/hooks/init/example"\r\n  }\r\n}\n'})}),"\n",(0,s.jsx)(e.p,{children:"\u540c\u4e00\u4e8b\u4ef6\u7c7b\u578b\u7684\u591a\u4e2a\u94a9\u5b50\u53ef\u4ee5\u7528\u4e00\u4e2a\u6570\u7ec4\u58f0\u660e\u3002"}),"\n",(0,s.jsx)(e.pre,{children:(0,s.jsx)(e.code,{className:"language-json",children:'"oclif": {\r\n  "commands": "./lib/commands",\r\n  "hooks": {\r\n    "init": [\r\n      "./lib/hooks/init/example",\r\n      "./lib/hooks/init/another_hook"\r\n    ]\r\n  }\r\n}\n'})}),"\n",(0,s.jsxs)(e.p,{children:["\u4f60\u53ef\u4ee5\u4f7f\u7528 ",(0,s.jsx)(e.code,{children:"oclif generate hook myhook --event=init"})," \u521b\u5efa\u94a9\u5b50\u3002"]}),"\n",(0,s.jsx)(e.h2,{id:"\u751f\u547d\u5468\u671f\u4e8b\u4ef6",children:"\u751f\u547d\u5468\u671f\u4e8b\u4ef6"}),"\n",(0,s.jsxs)(e.ul,{children:["\n",(0,s.jsxs)(e.li,{children:[(0,s.jsx)(e.code,{children:"init"})," - \u5728\u53d1\u73b0\u8981\u8fd0\u884c\u7684\u547d\u4ee4\u4e4b\u524d\u521d\u59cb\u5316 CLI \u65f6\u8fd0\u884c"]}),"\n",(0,s.jsxs)(e.li,{children:[(0,s.jsx)(e.code,{children:"prerun"})," - \u5728 ",(0,s.jsx)(e.code,{children:"init"})," \u4e4b\u540e\u548c\u627e\u5230\u547d\u4ee4\u4e4b\u540e\u8fd0\u884c\uff0c\u4f46\u5c31\u5728\u8fd0\u884c\u547d\u4ee4\u672c\u8eab\u4e4b\u524d"]}),"\n",(0,s.jsxs)(e.li,{children:[(0,s.jsx)(e.code,{children:"command_not_found"})," - \u5982\u679c\u5728\u663e\u793a\u9519\u8bef\u4e4b\u524d\u672a\u627e\u5230\u547d\u4ee4\u65f6\u8fd0\u884c"]}),"\n",(0,s.jsxs)(e.li,{children:[(0,s.jsx)(e.code,{children:"command_incomplete"})," - \u5982\u679c\u672a\u627e\u5230\u67d0\u4e2a\u547d\u4ee4\uff0c\u4f46\u5b83\u662f\u73b0\u6709\u547d\u4ee4\u7684\u4e00\u90e8\u5206\uff0c\u5219\u8fd0\u884c\u3002\u4ec5\u5728\u542f\u7528",(0,s.jsx)(e.a,{href:"/docs/oclif/zh/docs/flexible_taxonomy",children:"\u7075\u6d3b\u5206\u7c7b\u6cd5"}),"\u65f6\u6709\u6548\u3002\u5bf9\u4e8e\u4f60\u5e0c\u671b\u663e\u793a\u6240\u6709\u5339\u914d\u547d\u4ee4\u7684\u63d0\u793a\u7b26\u7684\u60c5\u51b5\u5f88\u6709\u7528\u3002\u67e5\u770b Salesforce CLI \u7684",(0,s.jsx)(e.a,{href:"https://github.com/salesforcecli/cli/blob/main/src/hooks/incomplete.ts",children:"\u5b9e\u73b0"}),"\u3002"]}),"\n",(0,s.jsxs)(e.li,{children:[(0,s.jsx)(e.code,{children:"jit_plugin_not_installed"})," - \u5982\u679c",(0,s.jsx)(e.a,{href:"/docs/oclif/zh/docs/jit_plugins",children:"\u5373\u65f6\u63d2\u4ef6"}),"\u4e2d\u7684\u547d\u4ee4\u5df2\u6267\u884c\u4f46\u8be5\u63d2\u4ef6\u5c1a\u672a\u5b89\u88c5\uff0c\u5219\u8fd0\u884c\u3002\u67e5\u770b Salesforce CLI \u7684",(0,s.jsx)(e.a,{href:"https://github.com/salesforcecli/plugin-trust/blob/main/src/hooks/jitPluginInstall.ts",children:"\u5b9e\u73b0"}),"\u3002"]}),"\n",(0,s.jsxs)(e.li,{children:[(0,s.jsx)(e.code,{children:"preparse"})," - \u5728\u89e3\u6790\u548c\u9a8c\u8bc1\u6807\u5fd7\u548c\u53c2\u6570\u4e4b\u524d\u8fd0\u884c\u3002\u5982\u679c\u4f60\u9700\u8981\u64cd\u4f5c\u8f93\u5165\uff0c\u8fd9\u5f88\u6709\u7528\u3002\u67e5\u770bSalesforce CLI \u7684",(0,s.jsx)(e.a,{href:"https://github.com/salesforcecli/cli/blob/main/src/hooks/preparse.ts",children:"\u5b9e\u73b0"}),"\u3002\u8fd9\u53ea\u80fd\u7531 root CLI \u5b9e\u73b0\u3002"]}),"\n",(0,s.jsxs)(e.li,{children:[(0,s.jsx)(e.code,{children:"postrun"})," - \u4ec5\u5f53\u547d\u4ee4\u5b8c\u6210\u4e14\u65e0\u9519\u8bef\u65f6\uff0c\u624d\u5728\u547d\u4ee4\u540e\u8fd0\u884c"]}),"\n"]}),"\n",(0,s.jsx)(e.h2,{id:"\u81ea\u5b9a\u4e49\u4e8b\u4ef6",children:"\u81ea\u5b9a\u4e49\u4e8b\u4ef6"}),"\n",(0,s.jsxs)(e.p,{children:["\u81ea\u5b9a\u4e49\u4e8b\u4ef6\u5c31\u50cf\u751f\u547d\u5468\u671f\u4e8b\u4ef6\u4e00\u6837\uff0c\u4f46\u4f60\u9700\u8981\u8c03\u7528 ",(0,s.jsx)(e.code,{children:"this.config.runHook()"})," \u6765\u89e6\u53d1\u4e8b\u4ef6\u3002"]}),"\n",(0,s.jsx)(e.p,{children:"\u4f8b\u5982\uff0c\u4f60\u53ef\u4ee5\u5b9a\u4e49\u4e00\u4e2a\u5206\u6790\u53d1\u5e03\u51fd\u6570\uff0c\u5728\u63d0\u4ea4\u5206\u6790\u9065\u6d4b\u6570\u636e\u540e\u5c06\u5728\u547d\u4ee4\u4e2d\u8fd0\u884c\u8be5\u51fd\u6570\u3002\u9996\u5148\u5b9a\u4e49\uff1a"}),"\n",(0,s.jsx)(e.p,{children:(0,s.jsx)(e.strong,{children:"src/hooks/analytics/post.ts"})}),"\n",(0,s.jsx)(e.pre,{children:(0,s.jsx)(e.code,{className:"language-typescript",children:"const hook = async function (options: {id: string}) {\r\n  // code to post options.id to analytics server\r\n}\r\n\r\nexport default hook\n"})}),"\n",(0,s.jsx)(e.p,{children:(0,s.jsx)(e.strong,{children:"package.json"})}),"\n",(0,s.jsx)(e.pre,{children:(0,s.jsx)(e.code,{className:"language-js",children:'  "oclif": {\r\n    "commands": "./lib/commands",\r\n    "hooks": {\r\n      "analytics": "./lib/hooks/analytics/post"\r\n    },\r\n  },\n'})}),"\n",(0,s.jsx)(e.p,{children:"\u7136\u540e\u5728\u4efb\u4f55\u4f60\u60f3\u89e6\u53d1\u4e8b\u4ef6\u7684\u547d\u4ee4\u4e2d\uff1a"}),"\n",(0,s.jsx)(e.pre,{children:(0,s.jsx)(e.code,{className:"language-js",children:"export class extends Command {\r\n  async run() {\r\n    // emit analytics\r\n    await this.config.runHook('analytics', {id: 'my_command'})\r\n  }\r\n}\n"})}),"\n",(0,s.jsxs)(e.p,{children:["\u5982\u679c\u4f60\u9700\u8981\u5728\u6302\u63a5\u8fc7\u7a0b\u4e2d\u9000\u51fa\uff0c\u4f7f\u7528 ",(0,s.jsx)(e.code,{children:"options.context.error()"})," \u6216 ",(0,s.jsx)(e.code,{children:"options.context.exit()"}),"\u3002\u629b\u51fa ",(0,s.jsx)(e.code,{children:"Error"})," \u4e0d\u4f1a\u5bfc\u81f4 CLI \u9000\u51fa \u2014\u2014 \u8fd9\u662f\u4e3a\u4e86\u9632\u6b62\u5355\u4e2a\u63d2\u4ef6\u7684 init \u94a9\u5b50\u5bfc\u81f4 CLI \u5728\u6bcf\u6b21\u6267\u884c\u547d\u4ee4\u65f6\u7acb\u5373\u5931\u8d25\u3002"]})]})}function h(n={}){const{wrapper:e}={...(0,c.R)(),...n.components};return e?(0,s.jsx)(e,{...n,children:(0,s.jsx)(a,{...n})}):a(n)}},8453:(n,e,o)=>{o.d(e,{R:()=>r,x:()=>t});var s=o(6540);const c={},i=s.createContext(c);function r(n){const e=s.useContext(i);return s.useMemo((function(){return"function"==typeof n?n(e):{...e,...n}}),[e,n])}function t(n){let e;return e=n.disableParentContext?"function"==typeof n.components?n.components(c):n.components||c:r(n.components),s.createElement(i.Provider,{value:e},n.children)}}}]);