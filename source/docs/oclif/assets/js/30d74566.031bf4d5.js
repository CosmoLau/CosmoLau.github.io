"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[4260],{3602:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>c,contentTitle:()=>r,default:()=>h,frontMatter:()=>i,metadata:()=>l,toc:()=>d});var o=s(4848),t=s(8453);const i={title:"Command Discovery Strategies"},r=void 0,l={id:"command_discovery_strategies",title:"Command Discovery Strategies",description:"When oclif loads a plugin is must find all the commands within that plugin that can be executed. There a three strategies for discovering these commands:",source:"@site/../docs/command_discovery_strategies.md",sourceDirName:".",slug:"/command_discovery_strategies",permalink:"/docs/oclif/docs/command_discovery_strategies",draft:!1,unlisted:!1,editUrl:"https://github.com/oclif/oclif.github.io/tree/docs/docs/../docs/command_discovery_strategies.md",tags:[],version:"current",lastUpdatedBy:"Mike Donnalley",lastUpdatedAt:1711731567e3,frontMatter:{title:"Command Discovery Strategies"},sidebar:"docs",previous:{title:"Config",permalink:"/docs/oclif/docs/config"},next:{title:"Topics",permalink:"/docs/oclif/docs/topics"}},c={},d=[{value:"<code>pattern</code> Strategy",id:"pattern-strategy",level:3},{value:"<code>explicit</code> Strategy",id:"explicit-strategy",level:3},{value:"Hooks",id:"hooks",level:4},{value:"Bundling",id:"bundling",level:4},{value:"Dynamic Commands",id:"dynamic-commands",level:4},{value:"<code>single</code> Strategy",id:"single-strategy",level:3},{value:"Note about <code>oclif.manifest.json</code>",id:"note-about-oclifmanifestjson",level:3}];function a(e){const n={a:"a",code:"code",em:"em",h3:"h3",h4:"h4",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",...(0,t.R)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(n.p,{children:"When oclif loads a plugin is must find all the commands within that plugin that can be executed. There a three strategies for discovering these commands:"}),"\n",(0,o.jsxs)(n.ol,{children:["\n",(0,o.jsxs)(n.li,{children:[(0,o.jsx)(n.code,{children:"pattern"})," - this is the default behavior that finds commands based on glob patterns."]}),"\n",(0,o.jsxs)(n.li,{children:[(0,o.jsx)(n.code,{children:"explicit"})," - find commands that are exported from a specified file."]}),"\n",(0,o.jsxs)(n.li,{children:[(0,o.jsx)(n.code,{children:"single"})," - CLI contains a single command executed by top-level bin."]}),"\n"]}),"\n",(0,o.jsxs)(n.h3,{id:"pattern-strategy",children:[(0,o.jsx)(n.code,{children:"pattern"})," Strategy"]}),"\n",(0,o.jsxs)(n.p,{children:["The ",(0,o.jsx)(n.code,{children:"pattern"})," strategy tells oclif to use a predefined set of globs to find command files in a specified directory. This is the default behavior of oclif unless otherwise stated."]}),"\n",(0,o.jsxs)(n.p,{children:["Plugins can point the ",(0,o.jsx)(n.code,{children:"commands"})," property to a directory"]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-json",children:'{\r\n  "oclif": {\r\n    "commands": "./dist/commands",\r\n  }\r\n}\n'})}),"\n",(0,o.jsxs)(n.p,{children:["This will tell oclif to look for commands in that directory (this is skipped if an ",(0,o.jsx)(n.code,{children:"oclif.manifest.json"})," is present)"]}),"\n",(0,o.jsx)(n.p,{children:"Alternatively, you can set this configuration which will do the exact same thing:"}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-json",children:'{\r\n  "oclif": {\r\n    "commands": {\r\n      "strategy": "pattern",\r\n      "target": "./dist/commands"\r\n    }\r\n  }\r\n}\n'})}),"\n",(0,o.jsxs)(n.p,{children:["You also have the ability to set ",(0,o.jsx)(n.code,{children:"globPatterns"}),", which override the glob patterns that oclif uses when searching for command files:"]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-json",children:'{\r\n  "oclif": {\r\n    "commands": {\r\n      "strategy": "pattern",\r\n      "target": "./dist/commands",\r\n      "globPatterns": [\r\n         "**/*.+(js|cjs|mjs|ts|tsx|mts|cts)",\r\n        "!**/*.+(d.*|test.*|spec.*|helpers.*)?(x)"\r\n      ]\r\n    }\r\n  }\r\n}\n'})}),"\n",(0,o.jsx)(n.p,{children:"This is useful if you like to put test or helper files in the same directory as your command files."}),"\n",(0,o.jsxs)(n.h3,{id:"explicit-strategy",children:[(0,o.jsx)(n.code,{children:"explicit"})," Strategy"]}),"\n",(0,o.jsxs)(n.p,{children:["The ",(0,o.jsx)(n.code,{children:"explicit"})," strategy tells oclif to import commands from a single file. In this case the ",(0,o.jsx)(n.code,{children:"target"})," is the file that exports the commands and ",(0,o.jsx)(n.code,{children:"identifier"})," is the name of the export (defaults to ",(0,o.jsx)(n.code,{children:"default"}),")."]}),"\n",(0,o.jsxs)(n.p,{children:["To use this you would add a new file (e.g. ",(0,o.jsx)(n.code,{children:"src/commands.ts"}),") and then add this configuration to the package.json"]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-json",children:'{\r\n  "oclif": {\r\n    "commands": {\r\n      "strategy": "explicit",\r\n      "target": "./dist/index.js",\r\n      "identifier": "COMMANDS",\r\n    }\r\n  }\r\n}\n'})}),"\n",(0,o.jsxs)(n.p,{children:[(0,o.jsx)(n.code,{children:"src/index.ts"})," would then need to have an export with the same name as the ",(0,o.jsx)(n.code,{children:"identifier"})," (if not set, it defaults to ",(0,o.jsx)(n.code,{children:"default"}),") that's an object of command names to command classes, e.g."]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-typescript",children:"import Hello from './commands/hello'\r\nimport HelloWorld from './commands/hello/world'\r\n\r\nexport const COMMANDS = {\r\n  hello: Hello,\r\n  'hello:world': HelloWorld,\r\n  howdy: Hello, // alias the `hello` command to `howdy`\r\n}\n"})}),"\n",(0,o.jsxs)(n.p,{children:["The ",(0,o.jsx)(n.code,{children:"explicit"})," strategy is useful to those who can't rely on file paths because they've bundled their code (see ",(0,o.jsx)(n.a,{href:"#bundling",children:"Bundling"}),') but it can also be used if you simply prefer to be more explicit about your commands instead of relying on oclif "magically" finding commands from the file system.']}),"\n",(0,o.jsxs)(n.p,{children:["It can also be leveraged to create or modify commands at runtime (e.g. internationalize messages at runtime or add flags to a command based on an API spec - see ",(0,o.jsx)(n.a,{href:"#dynamic-commands",children:"dynamic commands"})," section below)."]}),"\n",(0,o.jsx)(n.h4,{id:"hooks",children:"Hooks"}),"\n",(0,o.jsxs)(n.p,{children:["Hooks can also be defined using the ",(0,o.jsx)(n.code,{children:"explicit"})," strategy:"]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-json",children:'"oclif": {\r\n    "hooks": {\r\n      "init": {\r\n        "target": "./dist/index.js",\r\n        "identifier": "INIT_HOOK"\r\n      }\r\n    }\r\n}\n'})}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-typescript",children:"// src/index.ts\r\nimport Hello from './commands/hello'\r\nimport HelloWorld from './commands/hello/world'\r\nexport {default as INIT_HOOK} from './hooks/init/init.js'\r\n\r\nexport const COMMANDS = {\r\n  hello: Hello,\r\n  'hello:world': HelloWorld,\r\n  howdy: Hello, // alias the `hello` command to `howdy`\r\n}\n"})}),"\n",(0,o.jsxs)(n.p,{children:["That configuration is essentially telling oclif to look for an ",(0,o.jsx)(n.code,{children:"INIT_HOOK"})," export inside of ",(0,o.jsx)(n.code,{children:"./dist/index.js"})]}),"\n",(0,o.jsx)(n.h4,{id:"bundling",children:"Bundling"}),"\n",(0,o.jsxs)(n.p,{children:[(0,o.jsx)(n.strong,{children:"We do not support bundling"})," given the endless number of tools + configurations that could be used. But if you choose to use a bundler, like ",(0,o.jsx)(n.code,{children:"esbuild"}),", there are a couple hard requirements - you must have a package.json in your root directory and a ",(0,o.jsx)(n.code,{children:"bin/run"})," or ",(0,o.jsx)(n.code,{children:"bin/run.js"})," bin script. ",(0,o.jsx)(n.em,{children:"This means that you will not be able to successfully bundle your entire CLI (src code, package.json, node_modules, etc) into a single file."})]}),"\n",(0,o.jsxs)(n.p,{children:["If you still want to use a bundler, you can reference this ",(0,o.jsx)(n.a,{href:"https://github.com/oclif/plugin-test-esbuild/",children:"example repo"}),"."]}),"\n",(0,o.jsx)(n.h4,{id:"dynamic-commands",children:"Dynamic Commands"}),"\n",(0,o.jsxs)(n.p,{children:["You can also use the ",(0,o.jsx)(n.code,{children:"explicit"})," strategy if you want to manipulate or create commands at runtime. Please note that such usage of the ",(0,o.jsx)(n.code,{children:"explicit"})," strategy ",(0,o.jsx)(n.strong,{children:"cannot"})," be used with an ",(0,o.jsx)(n.code,{children:"oclif.manifest.json"}),", which will have significant performance implications for your CLI in production."]}),"\n",(0,o.jsx)(n.p,{children:"Example:"}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-typescript",children:"// src/index.ts\r\nimport {Command, Flags} from '@oclif/core'\r\n\r\nimport Hello from './commands/hello'\r\nimport HelloWorld from './commands/hello/world'\r\n\r\nconst dynamicCommands: Record<string, Command.Class> = {}\r\nif (process.env.DYNAMIC_COMMAND) {\r\n  dynamicCommands[process.env.DYNAMIC_COMMAND] = class extends Command {\r\n    static flags = {\r\n      flag1: Flags.boolean({description: 'flag1 description'}),\r\n    }\r\n\r\n    async run(): Promise<void> {\r\n      const {flags} = await this.parse(this.constructor as Command.Class)\r\n      this.log('hello from', this.id, flags)\r\n    }\r\n  }\r\n}\r\n\r\nexport const COMMANDS = {\r\n  hello: Hello,\r\n  'hello:world': HelloWorld,\r\n  ...dynamicCommands,\r\n}\n"})}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{children:"\u276f DYNAMIC_COMMAND=foo:bar:baz bin/run.js foo bar baz --flag1\r\nhello from foo:bar:baz { flag1: true }\n"})}),"\n",(0,o.jsxs)(n.h3,{id:"single-strategy",children:[(0,o.jsx)(n.code,{children:"single"})," Strategy"]}),"\n",(0,o.jsxs)(n.p,{children:["The ",(0,o.jsx)(n.code,{children:"single"})," strategy tells oclif that this CLI contains a single command that can be executed by the ",(0,o.jsx)(n.code,{children:"bin/run.js"})," (e.g. ",(0,o.jsx)(n.code,{children:"ls"})," or ",(0,o.jsx)(n.code,{children:"cat"}),")."]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-json",children:'{\r\n  "oclif": {\r\n    "commands": {\r\n      "strategy": "single",\r\n      "target": "./dist/index.js"\r\n    }\r\n  }\r\n}\n'})}),"\n",(0,o.jsxs)(n.p,{children:["In this example, ",(0,o.jsx)(n.code,{children:"./dist/index.js"})," exports the command class."]}),"\n",(0,o.jsxs)(n.h3,{id:"note-about-oclifmanifestjson",children:["Note about ",(0,o.jsx)(n.code,{children:"oclif.manifest.json"})]}),"\n",(0,o.jsxs)(n.p,{children:["For all strategies, the ",(0,o.jsx)(n.code,{children:"oclif.manifest.json"})," will be used to load the commands instead of the default behavior of the strategy."]})]})}function h(e={}){const{wrapper:n}={...(0,t.R)(),...e.components};return n?(0,o.jsx)(n,{...e,children:(0,o.jsx)(a,{...e})}):a(e)}},8453:(e,n,s)=>{s.d(n,{R:()=>r,x:()=>l});var o=s(6540);const t={},i=o.createContext(t);function r(e){const n=o.useContext(i);return o.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function l(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:r(e.components),o.createElement(i.Provider,{value:n},e.children)}}}]);