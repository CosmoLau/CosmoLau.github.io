"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[1662],{2245:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>a,contentTitle:()=>l,default:()=>p,frontMatter:()=>o,metadata:()=>r,toc:()=>c});var s=n(4848),i=n(8453);const o={title:"\u5728 oclif \u4e2d\u81ea\u5b9a\u4e49\u5e2e\u52a9"},l=void 0,r={permalink:"/docs/oclif/zh/blog/2020/05/05/introducing-custom-help-classes",source:"@site/i18n/zh/docusaurus-plugin-content-blog/2020-05-05-introducing-custom-help-classes.md",title:"\u5728 oclif \u4e2d\u81ea\u5b9a\u4e49\u5e2e\u52a9",description:"Out of the box oclif provides a great help experience for CLIs.",date:"2020-05-05T00:00:00.000Z",tags:[],readingTime:1.67,hasTruncateMarker:!1,authors:[],frontMatter:{title:"\u5728 oclif \u4e2d\u81ea\u5b9a\u4e49\u5e2e\u52a9"},unlisted:!1,prevItem:{title:"\u6f02\u4eae\u7684\u6253\u5370\u9519\u8bef",permalink:"/docs/oclif/zh/blog/2020/07/01/pretty-printable-errors"},nextItem:{title:"oclif \u4ece TSLint \u5230 ESLint \u7684\u8fc1\u79fb",permalink:"/docs/oclif/zh/blog/2019/12/05/oclif-eslint-migration"}},a={authorsImageUrls:[]},c=[{value:"Getting started with custom help",id:"getting-started-with-custom-help",level:2},{value:"Separating TOPICS &amp; COMMANDS in the new default <code>Help</code> class",id:"separating-topics--commands-in-the-new-default-help-class",level:2}];function h(e){const t={a:"a",code:"code",h2:"h2",p:"p",pre:"pre",...(0,i.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(t.p,{children:"Out of the box oclif provides a great help experience for CLIs."}),"\n",(0,s.jsx)(t.p,{children:"But what if, as an oclif developer, you want to customize some or all of the output?"}),"\n",(0,s.jsxs)(t.p,{children:["You can now customize your CLI's help output by implementing the ",(0,s.jsx)(t.code,{children:"HelpBase"})," abstract class."]}),"\n",(0,s.jsx)(t.h2,{id:"getting-started-with-custom-help",children:"Getting started with custom help"}),"\n",(0,s.jsxs)(t.p,{children:["If you have not done so yet, update ",(0,s.jsx)(t.code,{children:"@oclif/core"}),"."]}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{children:"$ yarn add --latest @oclif/core\n"})}),"\n",(0,s.jsx)(t.p,{children:"To get started, first define the filepath to your help class in oclif's config in package.json. This is a relative path to the help class, without a file extension."}),"\n",(0,s.jsx)(t.p,{children:'For this example, the help class will be created in a file at "[project root]/src/help.ts".'}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{children:'{\r\n  // ...\r\n  "oclif": {\r\n    "helpClass": "./lib/help"\r\n    // ...\r\n  }\r\n  // ...\r\n}\n'})}),"\n",(0,s.jsxs)(t.p,{children:["From here there are two paths, implement the ",(0,s.jsx)(t.code,{children:"HelpBase"})," abstract class yourself or overwrite the parts of the default ",(0,s.jsx)(t.code,{children:"Help"})," class you want to customize (ex: how command usage is displayed). We recommend the latter approach but cover both in the new ",(0,s.jsx)(t.a,{href:"/docs/help_classes",children:"Help Classes docs"}),"."]}),"\n",(0,s.jsxs)(t.h2,{id:"separating-topics--commands-in-the-new-default-help-class",children:["Separating TOPICS & COMMANDS in the new default ",(0,s.jsx)(t.code,{children:"Help"})," class"]}),"\n",(0,s.jsx)(t.p,{children:'Previously, topics and child commands were listed in help output under a single list heading called "COMMANDS". But we found this can be slightly confusing. Some topics are commands also (a.k.a. topic-commands) while others are simply organizational namespacing (and when ran just show their help).'}),"\n",(0,s.jsxs)(t.p,{children:["The new default ",(0,s.jsx)(t.code,{children:"Help"}),' class splits the list of children into distinct lists of "TOPICS" and "COMMANDS", with the possibility of an item appearing in both if it a topic-command. This makes it clearer what is expected to be ran - "COMMANDS" - and what is providing structure - "TOPICS" - when looking at the help output.']}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{children:"VERSION\r\n  plugin-help-example/0.0.0 darwin-x64 node-v12.12.0\r\n\r\nUSAGE\r\n  $ plugin-help-example [COMMAND]\r\n\r\nTOPICS\r\n  topic  this is a topic and has child topics or commands\r\n\r\nCOMMANDS\r\n  hello  describe the command here\r\n  help   display help for plugin-help-example\n"})}),"\n",(0,s.jsx)(t.p,{children:"We look forward to seeing what custom help features you implement in your oclif CLIs with this new feature!"})]})}function p(e={}){const{wrapper:t}={...(0,i.R)(),...e.components};return t?(0,s.jsx)(t,{...e,children:(0,s.jsx)(h,{...e})}):h(e)}},8453:(e,t,n)=>{n.d(t,{R:()=>l,x:()=>r});var s=n(6540);const i={},o=s.createContext(i);function l(e){const t=s.useContext(o);return s.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function r(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:l(e.components),s.createElement(o.Provider,{value:t},e.children)}}}]);