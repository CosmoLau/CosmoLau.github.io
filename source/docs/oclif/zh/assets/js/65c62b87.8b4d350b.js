"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[6244],{1303:(e,n,c)=>{c.r(n),c.d(n,{assets:()=>o,contentTitle:()=>r,default:()=>h,frontMatter:()=>i,metadata:()=>d,toc:()=>a});var s=c(4848),l=c(8453);const i={title:"\u53d1\u5e03",description:"\u5982\u4f55\u53d1\u5e03\u4f60\u7684 CLI"},r=void 0,d={id:"releasing",title:"\u53d1\u5e03",description:"\u5982\u4f55\u53d1\u5e03\u4f60\u7684 CLI",source:"@site/i18n/zh/docusaurus-plugin-content-docs/current/releasing.md",sourceDirName:".",slug:"/releasing",permalink:"/docs/oclif/zh/docs/releasing",draft:!1,unlisted:!1,editUrl:"https://github.com/oclif/oclif.github.io/tree/docs/docs/../docs/releasing.md",tags:[],version:"current",lastUpdatedBy:"CosmoLau",lastUpdatedAt:1713160487e3,frontMatter:{title:"\u53d1\u5e03",description:"\u5982\u4f55\u53d1\u5e03\u4f60\u7684 CLI"},sidebar:"docs",previous:{title:"\u81ea\u5b9a\u4e49 NSIS \u5b89\u88c5\u7a0b\u5e8f",permalink:"/docs/oclif/zh/docs/nsis-installer_customization"},next:{title:"\u4ee5\u7f16\u7a0b\u65b9\u5f0f\u8fd0\u884c\u547d\u4ee4",permalink:"/docs/oclif/zh/docs/running_programmatically"}},o={},a=[{value:"npm",id:"npm",level:2},{value:"Standalone tarballs",id:"standalone-tarballs",level:2},{value:"Brew",id:"brew",level:2},{value:"\u81ea\u52a8\u66f4\u65b0\u5668",id:"\u81ea\u52a8\u66f4\u65b0\u5668",level:2},{value:"\u81ea\u52a8\u66f4\u65b0\u6e20\u9053",id:"\u81ea\u52a8\u66f4\u65b0\u6e20\u9053",level:2},{value:"Windows \u5b89\u88c5\u7a0b\u5e8f",id:"windows-\u5b89\u88c5\u7a0b\u5e8f",level:2},{value:"\u5b89\u88c5\u7a0b\u5e8f\u7b7e\u540d",id:"\u5b89\u88c5\u7a0b\u5e8f\u7b7e\u540d",level:3},{value:"macOS \u5b89\u88c5\u7a0b\u5e8f",id:"macos-\u5b89\u88c5\u7a0b\u5e8f",level:2},{value:"\u4e0a\u4f20\u5230 S3",id:"\u4e0a\u4f20\u5230-s3",level:3},{value:"\u5b89\u88c5\u7a0b\u5e8f\u7b7e\u540d",id:"\u5b89\u88c5\u7a0b\u5e8f\u7b7e\u540d-1",level:3},{value:"Ubuntu/Debian \u8f6f\u4ef6\u5305",id:"ubuntudebian-\u8f6f\u4ef6\u5305",level:2},{value:"Snapcraft",id:"snapcraft",level:2}];function t(e){const n={a:"a",code:"code",h2:"h2",h3:"h3",p:"p",pre:"pre",...(0,l.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.p,{children:"\u6709\u4e24\u79cd\u4e3b\u8981\u7684\u7b56\u7565\u6765\u53d1\u5e03 oclif CLI\uff1anpm \u548c standalone tarballs\u3002\u4f60\u53ef\u4ee5\u53d1\u5e03\u5230\u5176\u4e2d\u4e00\u4e2a\u6216\u4e24\u4e2a\u3002"}),"\n",(0,s.jsx)(n.h2,{id:"npm",children:"npm"}),"\n",(0,s.jsxs)(n.p,{children:["\u5c31\u50cf\u5176\u4ed6 npm \u9879\u76ee\u4e00\u6837\u4f7f\u7528 ",(0,s.jsx)(n.code,{children:"npm publish"}),"\u3002\u8fd9\u5305\u62ec\u5c06\u81ea\u52a8\u7528\u4e8e Windows \u7528\u6237\u7684 ",(0,s.jsx)(n.code,{children:"run.cmd"}),"\u3002"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-sh-session",children:"$ npm version (major|minor|patch) # bumps version, updates README, adds git tag\r\n$ npm publish\r\n$ npm install -g mynewcli\r\n$ mynewcli\r\n# \u6216\u8005\r\n$ npx mynewcli\n"})}),"\n",(0,s.jsxs)(n.p,{children:["\u4f60\u9700\u8981",(0,s.jsx)(n.a,{href:"https://www.npmjs.com/signup",children:"\u5728 npm \u6ce8\u518c"}),"\u5e76\u9a8c\u8bc1\u4f60\u7684\u7535\u5b50\u90ae\u4ef6\u5730\u5740\u624d\u80fd\u53d1\u5e03\u3002"]}),"\n",(0,s.jsxs)(n.p,{children:["\u8fd9\u4e2a\u5de5\u4f5c\u6d41\u7a0b\u53ef\u4ee5\u7a0d\u4f5c\u6539\u8fdb\uff0c\u5728\u53d1\u5e03\u4e4b\u524d\u8fd0\u884c ",(0,s.jsx)(n.code,{children:"npm version major|minor|patch"})," \u53ef\u4ee5\u521b\u5efa\u4e00\u4e2a git \u6807\u7b7e\uff0c\u5e76\u81ea\u52a8\u63d0\u5347\u7248\u672c\u3002"]}),"\n",(0,s.jsx)(n.h2,{id:"standalone-tarballs",children:"Standalone tarballs"}),"\n",(0,s.jsxs)(n.p,{children:["\u4ece CLI \u7684\u6839\u76ee\u5f55\u4f7f\u7528 ",(0,s.jsx)(n.code,{children:"oclif pack tarballs"})," \u6784\u5efa standalone tarballs\u3002\u5176\u4e2d\u5305\u62ec node \u4e8c\u8fdb\u5236\u6587\u4ef6\uff0c\u56e0\u6b64\u7528\u6237\u4e0d\u5fc5\u5b89\u88c5 node \u5373\u53ef\u4f7f\u7528 CLI\u3002\u5b83\u4e0d\u4f1a\u5c06\u6b64\u8282\u70b9\u7684\u4e8c\u8fdb\u5236\u6587\u4ef6\u653e\u5728 PATH \u4e0a\uff0c\u56e0\u6b64\u4e8c\u8fdb\u5236\u6587\u4ef6\u4e0d\u4f1a\u4e0e\u673a\u5668\u4e0a\u7684\u4efb\u4f55 node \u5b89\u88c5\u51b2\u7a81\u3002"]}),"\n",(0,s.jsxs)(n.p,{children:["\u8981\u53d1\u5e03\uff0c\u4f60\u53ef\u4ee5\u4ece ",(0,s.jsx)(n.code,{children:"./dist"})," \u590d\u5236\u6587\u4ef6\u6216\u4f7f\u7528 ",(0,s.jsx)(n.code,{children:"oclif upload tarballs"})," \u5c06\u6587\u4ef6\u590d\u5236\u5230 S3\u3002\u4f60\u9700\u8981\u5c06 ",(0,s.jsx)(n.code,{children:"package.json"})," \u4e2d\u7684 ",(0,s.jsx)(n.code,{children:"oclif.update.s3.bucket"})," \u8bbe\u7f6e\u4e3a\u6709\u6548\u7684 S3 \u5b58\u50a8\u6876\uff0c\u5e76\u5728 ",(0,s.jsx)(n.code,{children:"AWS_ACCESS_KEY_ID"})," \u548c ",(0,s.jsx)(n.code,{children:"AWS_SECRET_ACCESS_KEY"})," \u73af\u5883\u53d8\u91cf\u4e2d\u8bbe\u7f6e\u51ed\u636e\u3002"]}),"\n",(0,s.jsxs)(n.p,{children:["\u5728\u4f60\u5c06 tarball \u4e0a\u4f20\u5230 S3 \u4e4b\u540e\uff0c\u4f60\u53ef\u4ee5\u4f7f\u7528 ",(0,s.jsx)(n.code,{children:"oclif promote"})," \u5c06 tarball \u63d0\u5347\u5230 S3 \u4e2d\u7684\u53d1\u5e03\u6e20\u9053\u3002\u8fd9\u5141\u8bb8\u4f60\u5728\u53d1\u5e03\u901a\u9053\u4e4b\u95f4\u5feb\u901f\u5347\u7ea7\u548c\u964d\u7ea7\u7279\u5b9a\u7248\u672c\u3002\u4f8b\u5982\uff0cSalesforce CLI \u6709\u5355\u72ec\u7684 ",(0,s.jsx)(n.code,{children:"stable"})," \u548c ",(0,s.jsx)(n.code,{children:"stable-rc"})," \u6e20\u9053\uff0c\u6bcf\u5468\u66f4\u65b0\u4e00\u6b21\u3002"]}),"\n",(0,s.jsx)(n.h2,{id:"brew",children:"Brew"}),"\n",(0,s.jsxs)(n.p,{children:["\u4f60\u7684\u65b9\u6848\u53ef\u4ee5\u901a\u8fc7 Brew \u5206\u53d1\u3002\u4e3b\u8981\u7684\u8b66\u544a\u662f\u4f60\u5fc5\u987b\u5728\u53d1\u5e03\u65f6\u8bbe\u7f6e ",(0,s.jsx)(n.code,{children:"CLIENT_HOME"})," \u53d8\u91cf\uff0c\u5426\u5219\u5b83\u4f1a\u7834\u574f\u66f4\u65b0\u5468\u671f\u3002\u8fd9\u65b9\u9762\u7684\u4e00\u4e2a\u4f8b\u5b50\u53ef\u4ee5\u5728 ",(0,s.jsx)(n.a,{href:"https://github.com/heroku/homebrew-brew/blob/master/Formula/heroku.rb#L9",children:"heroku cli formula"})," \u4e2d\u627e\u5230\u3002\u901a\u8fc7\u5bfc\u51fa\u683c\u5f0f\u4e3a ",(0,s.jsx)(n.code,{children:"CLI_NAME_OCLIF_CLIENT_HOME"})," \u7684\u53d8\u91cf\uff08\u5176\u4e2d ",(0,s.jsx)(n.code,{children:"CLI_NAME"})," \u662f CLI \u7684\u540d\u79f0\uff09\uff0c\u53ef\u4ee5\u5f3a\u5236\u66f4\u65b0\u673a\u5236\u67e5\u770b brew \u5b89\u88c5\u4f4d\u7f6e\uff0c\u800c\u4e0d\u662f\u9ed8\u8ba4\u4f4d\u7f6e\uff08\u5373 ",(0,s.jsx)(n.code,{children:"$XDG_DATA_HOME/.local/share/package_name/client"}),"\uff09\u3002"]}),"\n",(0,s.jsx)(n.h2,{id:"\u81ea\u52a8\u66f4\u65b0\u5668",children:"\u81ea\u52a8\u66f4\u65b0\u5668"}),"\n",(0,s.jsxs)(n.p,{children:["\u8fd9\u4e9b tarball \u4ee5\u53ca\u4e0b\u9762\u7684\u5b89\u88c5\u7a0b\u5e8f\u53ef\u4ee5\u901a\u8fc7\u6dfb\u52a0 ",(0,s.jsx)(n.code,{children:"@oclif/plugin-update"})," \u63d2\u4ef6\u8fdb\u884c\u81ea\u52a8\u66f4\u65b0\u3002\u53ea\u9700\u6dfb\u52a0\u6b64\u63d2\u4ef6\uff0cCLI \u5c06\u5728\u540e\u53f0\u6216\u8fd0\u884c ",(0,s.jsx)(n.code,{children:"mycli update"})," \u65f6\u81ea\u52a8\u66f4\u65b0\u3002"]}),"\n",(0,s.jsxs)(n.p,{children:["\u5982\u679c\u4f60\u4e0d\u60f3\u4f7f\u7528 S3\uff0c\u4f60\u4ecd\u7136\u53ef\u4ee5\u8fd0\u884c ",(0,s.jsx)(n.code,{children:"oclif pack"}),"\uff0c\u5b83\u4f1a\u751f\u6210 tarball\u3002\u8981\u8ba9\u66f4\u65b0\u7a0b\u5e8f\u5de5\u4f5c\uff0c\u8bf7\u5c06 ",(0,s.jsx)(n.code,{children:"package.json"})," \u4e2d\u7684 ",(0,s.jsx)(n.code,{children:"oclif.update.s3.host"})," \u8bbe\u7f6e\u4e3a\u5177\u6709\u4ece ",(0,s.jsx)(n.code,{children:"oclif pack"})," \u4e2d\u6784\u5efa\u7684 ",(0,s.jsx)(n.code,{children:"./dist"})," \u6587\u4ef6\u7684\u4e3b\u673a\u3002\u6b64\u4e3b\u673a\u4e0d\u9700\u8981\u662f S3 \u4e3b\u673a\u3002\u8981\u81ea\u5b9a\u4e49 URL \u8def\u5f84\uff0c\u8bf7\u53c2\u9605 ",(0,s.jsx)(n.code,{children:"@oclif/core"})," \u4e2d\u7684 S3 \u6a21\u677f\u3002"]}),"\n",(0,s.jsx)(n.h2,{id:"\u81ea\u52a8\u66f4\u65b0\u6e20\u9053",children:"\u81ea\u52a8\u66f4\u65b0\u6e20\u9053"}),"\n",(0,s.jsxs)(n.p,{children:["\u4f60\u53ef\u4ee5\u4e3a\u53d1\u5e03\u7248\u672c\u8bbe\u7f6e\u5355\u72ec\u7684\u6e20\u9053\uff0c\u7c7b\u4f3c\u4e8e Google Chrome \u6e20\u9053\uff08\u4f8b\u5982 beta\u3001dev\u3001canary\uff09\u3002\u8981\u521b\u5efa\u6e20\u9053\uff0c\u53ea\u9700\u5c06 ",(0,s.jsx)(n.code,{children:"package.json"})," \u4e2d\u7684\u7248\u672c\u4ece ",(0,s.jsx)(n.code,{children:"1.0.0"})," \u66f4\u6539\u4e3a ",(0,s.jsx)(n.code,{children:"1.0.0-beta"})," \uff08\u5176\u4e2d\u201cbeta\u201d\u662f\u4f60\u559c\u6b22\u7684\u4efb\u4f55\u5b57\u7b26\u4e32\uff09\u3002\u7136\u540e\u5f53\u4f60\u7528 ",(0,s.jsx)(n.code,{children:"oclif pack"})," \u6253\u5305\u65f6\uff0c\u5b83\u4f1a\u521b\u5efa beta tarball\u3002\u7528\u6237\u53ef\u4ee5\u4f7f\u7528 ",(0,s.jsx)(n.code,{children:"mycli update beta"})," \u66f4\u6539\u4ed6\u4eec\u7684\u6e20\u9053\uff0c\u5e76\u5c06\u5728\u8be5\u6e20\u9053\u4e0a\u63a5\u6536\u6240\u6709\u672a\u6765\u7684\u7248\u672c\u3002"]}),"\n",(0,s.jsx)(n.p,{children:"\u5728 Heroku CLI \u4e2d\uff0c\u6211\u4eec\u8ba9\u5b83\u5728\u6bcf\u6b21\u63d0\u4ea4\u5230\u4e3b\u5206\u652f\u65f6\u81ea\u52a8\u6784\u5efa\u548c\u53d1\u5e03 beta \u6e20\u9053\u3002\u7136\u540e\uff0c\u6bcf\u5f53\u5728 CI \u4e2d\u521b\u5efa git \u6807\u7b7e\u65f6\uff0c\u6211\u4eec\u90fd\u4f1a\u6784\u5efa\u5e76\u53d1\u5e03 stable \u6e20\u9053\u3002"}),"\n",(0,s.jsx)(n.h2,{id:"windows-\u5b89\u88c5\u7a0b\u5e8f",children:"Windows \u5b89\u88c5\u7a0b\u5e8f"}),"\n",(0,s.jsxs)(n.p,{children:["\u4f7f\u7528 ",(0,s.jsx)(n.code,{children:"oclif pack win"})," \u751f\u6210 Windows \u5b89\u88c5\u7a0b\u5e8f\u3002\u5b83\u5c06\u6784\u5efa\u5230 ",(0,s.jsx)(n.code,{children:"./dist/win"})," \u4e2d\u3002\u53ef\u4ee5\u4f7f\u7528 ",(0,s.jsx)(n.code,{children:"oclif upload win"})," \u5c06\u5176\u4e0a\u4f20\u5230 S3\uff0c\u5e76\u4f7f\u7528 ",(0,s.jsx)(n.code,{children:"oclif promote --win"})," \u5728 S3 \u4e2d\u8fdb\u884c\u53d1\u5e03\u3002"]}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.code,{children:"oclif pack win"})," \u4f9d\u8d56 7zip \u548c nsis \u5b89\u88c5\u3002\u5982\u679c\u4f60\u5728 mac \u6216 unix \u73af\u5883\u4e2d\u6ca1\u6709\u5b83\u4eec\uff0c\u4f60\u53ef\u4ee5\u4f7f\u7528 homebrew \u6765\u5b89\u88c5\u5b83\u4eec\u3002"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-sh",children:"brew install nsis\r\nbrew install p7zip\n"})}),"\n",(0,s.jsx)(n.h3,{id:"\u5b89\u88c5\u7a0b\u5e8f\u7b7e\u540d",children:"\u5b89\u88c5\u7a0b\u5e8f\u7b7e\u540d"}),"\n",(0,s.jsxs)(n.p,{children:["\u8981\u751f\u6210\u4e00\u4e2a\u7b7e\u540d\u7684\u5b89\u88c5\u7a0b\u5e8f\uff0c\u4f60\u9700\u8981\u5728\u4f60\u7684 package.json \u4e2d\u8bbe\u7f6e scoped \u7684 ",(0,s.jsx)(n.code,{children:"<CLI>_WINDOWS_SIGNING_PASS"})," \u8fb9\u5883\u53d8\u91cf\uff08\u4f8b\u5982 ",(0,s.jsx)(n.code,{children:"MY_CLI_WINDOWS_SIGNING_PASS"}),"\uff09\u548c ",(0,s.jsx)(n.code,{children:"windows.name"})," \u548c ",(0,s.jsx)(n.code,{children:"windows.keypath"}),"\uff1a"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-json",children:'{\r\n  "oclif": {\r\n    "windows": {\r\n      "name": "My CLI",\r\n      "keypath": "path/to/private.key"\r\n    }\r\n  }\r\n}\n'})}),"\n",(0,s.jsxs)(n.p,{children:["\u8bf7\u53c2\u9605 ",(0,s.jsx)(n.a,{href:"https://learn.microsoft.com/en-us/windows/win32/msi/authoring-a-fully-verified-signed-installation",children:"Microsoft \u7684\u6587\u6863"}),"\uff0c\u4e86\u89e3\u5982\u4f55\u4e3a CLI \u83b7\u53d6\u7ecf\u8fc7\u9a8c\u8bc1\u7684\u6570\u5b57\u7b7e\u540d\u3002"]}),"\n",(0,s.jsx)(n.h2,{id:"macos-\u5b89\u88c5\u7a0b\u5e8f",children:"macOS \u5b89\u88c5\u7a0b\u5e8f"}),"\n",(0,s.jsxs)(n.p,{children:["\u4f7f\u7528 ",(0,s.jsx)(n.code,{children:"oclif pack macos"})," \u6784\u5efa macOS .pkg \u5b89\u88c5\u7a0b\u5e8f\u3002\u5b83\u5c06\u6210\u4e3a ",(0,s.jsx)(n.code,{children:"./dist/macos"}),"\u3002\u8fd9\u53ef\u4ee5\u901a\u8fc7 ",(0,s.jsx)(n.code,{children:"oclif upload macos"})," \u4e0a\u4f20\u5230 S3\uff0c\u5e76\u901a\u8fc7 ",(0,s.jsx)(n.code,{children:"oclif promote --macos"})," \u5728 S3 \u4e2d\u5347\u7ea7\u3002\u4f60\u9700\u8981\u5c06 macOS \u6807\u8bc6\u7b26\u8bbe\u7f6e\u4e3a ",(0,s.jsx)(n.code,{children:"oclif.macos.identifier"})," \u548c ",(0,s.jsx)(n.code,{children:"package.json"}),"\uff08\u6211\u4eec\u5206\u522b\u4f7f\u7528\u201ccom.heroku.cli\u201d\u548c\u201ccom.salesforce.cli\u201d\u4f5c\u4e3a Heroku CLI \u548c Salesforce CLI \u7684\u6807\u8bc6\u7b26\uff09\u3002"]}),"\n",(0,s.jsx)(n.h3,{id:"\u4e0a\u4f20\u5230-s3",children:"\u4e0a\u4f20\u5230 S3"}),"\n",(0,s.jsxs)(n.p,{children:["\u4e0a\u4f20\u547d\u4ee4\u9ed8\u8ba4\u4f7f\u7528 ACL \u8bbe\u7f6e ",(0,s.jsx)(n.code,{children:"public-read"})," \uff0c\u9664\u975e\u5728 ",(0,s.jsx)(n.code,{children:"package.json"})," \u4e2d\u7684 ",(0,s.jsx)(n.code,{children:"oclif.update.s3.acl"})," \u4e0b\u6307\u5b9a\u4e86\u5176\u4ed6\u7b56\u7565\u3002\u4f46\u662f\uff0c\u5728\u521b\u5efa\u65b0\u7684 S3 \u5b58\u50a8\u6876\u65f6\uff0cAWS \u7684\u9ed8\u8ba4\u5efa\u8bae\u53ef\u80fd\u4f1a\u5728\u5c1d\u8bd5\u4f7f\u7528 ",(0,s.jsx)(n.code,{children:"public-read"})," \u8bbe\u7f6e\u4e0a\u4f20\u65f6\u5bfc\u81f4\u8bbf\u95ee\u9519\u8bef\uff08\u4ee3\u7801\uff1acallControlListNotSupported\uff09\u3002"]}),"\n",(0,s.jsx)(n.p,{children:"\u8981\u89e3\u51b3\u8fd9\u4e2a\u95ee\u9898\uff0c\u8bf7\u8003\u8651\u4f7f\u7528\u6240\u9700\u7684ACL\u8bbe\u7f6e\u66f4\u65b0 package.json \u7684 oclif \u90e8\u5206\u3002\u4e0b\u9762\u7684\u793a\u4f8b\u6f14\u793a\u4e86\u5982\u4f55\u5c06 acl \u8bbe\u7f6e\u4e3a bucket-owner-full-control\uff1a"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-json",children:'{\r\n  "oclif": {\r\n    "bin": "myOclifApp",\r\n    "dirname": "myOclifApp-cli-data",\r\n    "update": {\r\n      "s3": {\r\n        "host": "https://s3.console.aws.amazon.com/",\r\n        "bucket": "myOclifApp-cli",\r\n        "acl": "bucket-owner-full-control"\r\n      }\r\n    },\r\n    "macos": {\r\n      "identifier": "com.myOclifApp.cli"\r\n    }\r\n  }\r\n}\n'})}),"\n",(0,s.jsxs)(n.p,{children:["Amazon\u5728",(0,s.jsx)(n.a,{href:"https://docs.aws.amazon.com/AmazonS3/latest/userguide/ensure-object-ownership.html#ensure-object-ownership-bucket-policy",children:"\u8fd9\u91cc"}),"\u6709\u4e00\u4e2a\u7528\u6237\u6307\u5357\uff0c\u53ef\u4ee5\u5e2e\u52a9\u4f60\u914d\u7f6e Bucket Policy \u8bbe\u7f6e\u3002"]}),"\n",(0,s.jsx)(n.h3,{id:"\u5b89\u88c5\u7a0b\u5e8f\u7b7e\u540d-1",children:"\u5b89\u88c5\u7a0b\u5e8f\u7b7e\u540d"}),"\n",(0,s.jsxs)(n.p,{children:["\u4e3a\u4e86\u80fd\u591f\u7b7e\u7f72\u4e00\u4e2a\u201c\u5b89\u88c5\u7a0b\u5e8f\u7b7e\u540d\u8eab\u4efd\u201d\u5fc5\u987b\u5728\u6784\u5efa\u673a\u5668\u4e0a\u53ef\u7528\uff08\u5728",(0,s.jsx)(n.a,{href:"https://developer.apple.com/help/account/create-certificates/certificates-overview",children:"\u8fd9\u91cc"}),"\u9605\u8bfb\u66f4\u591a\u5173\u4e8e\u8bc1\u4e66\u7684\u4fe1\u606f\uff09\u3002\u786e\u4fdd\u5728 developer.apple.com \u4e2d\u521b\u5efa\u4e86\u8fd9\u6837\u7684\u8bc1\u4e66\uff0c\u5e76\u4e14\u8be5\u8bc1\u4e66\u5df2\u4e0b\u8f7d\u5e76\u5b89\u88c5\u5728\u6784\u5efa\u673a\u5668\u7684KeyChain\u4e2d\u3002\u5fc5\u987b\u5728 ",(0,s.jsx)(n.code,{children:"package.json"})," \u4e2d\u7684 ",(0,s.jsx)(n.code,{children:"oclif.macos.sign"})," \u4e2d\u6307\u5b9a\u8bc1\u4e66\u540d\u79f0\u3002"]}),"\n",(0,s.jsx)(n.p,{children:"\u793a\u4f8b:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-json",children:'"macos": {\r\n    "identifier": "com.myOclifApp",\r\n    "sign": "\\"3rd Party Mac Developer Installer: myOclifCompany (R2315646)\\""\r\n},\n'})}),"\n",(0,s.jsxs)(n.p,{children:["\u8bf7\u6ce8\u610f\u8f6c\u4e49\u7684\u5f15\u53f7\uff0c\u8bc1\u4e66\u540d\u79f0\u4f5c\u4e3a\u53c2\u6570\u4f20\u9012\u7ed9 ",(0,s.jsx)(n.code,{children:"pkgbuild"})," \u547d\u4ee4\uff0c\u56e0\u6b64\u5982\u679c\u6ca1\u6709\u5f15\u53f7\uff0c\u5b83\u53ef\u80fd\u4f1a\u4e2d\u65ad\u3002\u5bf9\u4e8e Heroku CLI\uff0c\u8bc1\u4e66\u540d\u79f0\u4e3a\u201cDeveloper ID Installer: Heroku INC\u201d\u3002\u5e76\u53ef\u9009\u62e9\u4f7f\u7528 ",(0,s.jsx)(n.code,{children:"OSX_KEYCHAIN"})," \u8bbe\u7f6e\u79d8\u94a5\u4e32\u3002"]}),"\n",(0,s.jsx)(n.p,{children:"\u53ef\u4ee5\u5728 Keychain Access \u5e94\u7528\u7a0b\u5e8f\u4e2d\u67e5\u770b\u6784\u5efa\u8ba1\u7b97\u673a\u4e0a\u5b89\u88c5\u7684\u8bc1\u4e66\u3002"}),"\n",(0,s.jsx)(n.h2,{id:"ubuntudebian-\u8f6f\u4ef6\u5305",children:"Ubuntu/Debian \u8f6f\u4ef6\u5305"}),"\n",(0,s.jsxs)(n.p,{children:["\u4f7f\u7528 ",(0,s.jsx)(n.code,{children:"oclif pack deb"})," \u6784\u5efa\u4e00\u4e2adeb\u5305\u3002\u5c06 ",(0,s.jsx)(n.code,{children:"MYCLI_DEB_KEY"})," \u8bbe\u7f6e\u4e3a gpg \u5bc6\u94a5 ID \u4ee5\u521b\u5efa gpg \u6587\u4ef6\u3002\u8fd9\u5c06\u5305\u62ec ",(0,s.jsx)(n.code,{children:"./dist/deb"})," \u4e2d apt \u5b58\u50a8\u5e93\u6240\u9700\u7684\u6240\u6709\u6587\u4ef6\u3002\u5b83\u4eec\u53ef\u4ee5\u4f7f\u7528 ",(0,s.jsx)(n.code,{children:"oclif upload deb"})," \u4e0a\u4f20\u5230 S3\uff0c\u5e76\u4f7f\u7528 ",(0,s.jsx)(n.code,{children:"oclif promote --deb"})," \u5728 S3 \u4e2d\u5347\u7ea7\u3002"]}),"\n",(0,s.jsx)(n.p,{children:"\u53d1\u5e03\u5230 S3 \u540e\uff0c\u7528\u6237\u53ef\u4ee5\u4f7f\u7528\u4ee5\u4e0b\u547d\u4ee4\u8fdb\u884c\u5b89\u88c5\uff1a"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-sh-session",children:'$ wget -qO- https://mys3bucket.s3.amazonaws.com/apt/release.key | apt-key add - # you will need to upload this file manually\r\n$ sudo echo "deb https://mys3bucket.s3.amazonaws.com/apt ./" > /etc/apt/sources.list.d/mycli.list\r\n$ sudo apt update\r\n$ sudo apt install -y mycli\n'})}),"\n",(0,s.jsxs)(n.p,{children:["\u8fd9\u53ef\u4ee5\u653e\u5728\u4e00\u4e2a",(0,s.jsx)(n.a,{href:"https://cli-assets.heroku.com/install-ubuntu.sh",children:"\u811a\u672c"}),"\u4e2d\uff0c\u4f9b\u7528\u6237\u4f7f\u7528 ",(0,s.jsx)(n.code,{children:"curl https://pathto/myscript | sh"})," \u5b89\u88c5\u3002"]}),"\n",(0,s.jsx)(n.p,{children:"\u8fd9\u4e9b\u4e0d\u4f1a\u81ea\u52a8\u66f4\u65b0\uff0c\u56e0\u4e3a Ubuntu \u5df2\u7ecf\u6709\u4e86\u4e00\u4e2a\u53ef\u9760\u7684\u65b9\u6cd5\u6765\u66f4\u65b0\u4ed6\u4eec\u7684\u8f6f\u4ef6\u5305\u3002"}),"\n",(0,s.jsx)(n.h2,{id:"snapcraft",children:"Snapcraft"}),"\n",(0,s.jsxs)(n.p,{children:["Snap \u662f\u5206\u53d1 Linux CLI \u7684\u597d\u65b9\u6cd5\uff0c\u5185\u7f6e\u4e8e Ubuntu 16+ \u4e2d\u3002\u53ef\u4ee5\u8f7b\u677e\u4fee\u6539 Heroku CLI \u7684 ",(0,s.jsx)(n.a,{href:"https://github.com/heroku/cli/blob/master/snap/snapcraft.yaml",children:"snapcraft.yml"})," \u6587\u4ef6\uff0c\u4f7f\u5176\u4e0e\u4efb\u4f55 oclif CLI \u914d\u5408\u4f7f\u7528\u3002"]})]})}function h(e={}){const{wrapper:n}={...(0,l.R)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(t,{...e})}):t(e)}},8453:(e,n,c)=>{c.d(n,{R:()=>r,x:()=>d});var s=c(6540);const l={},i=s.createContext(l);function r(e){const n=s.useContext(i);return s.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function d(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(l):e.components||l:r(e.components),s.createElement(i.Provider,{value:n},e.children)}}}]);