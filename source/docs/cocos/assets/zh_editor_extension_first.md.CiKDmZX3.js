import{_ as i,a}from"./chunks/create-extension-panel.C0yb2h6v.js";import{_ as s}from"./chunks/refresh.cYJgJaZU.js";import{_ as n,c as t,o as p,a4 as h}from"./chunks/framework.uQk9_EO2.js";const l="/docs/cocos/assets/extension.I8oH-mTy.png",e="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAUCAIAAAAC64paAAAACXBIWXMAAA7EAAAOxAGVKw4bAAAAEXRFWHRTb2Z0d2FyZQBTbmlwYXN0ZV0Xzt0AAAD7SURBVDiNY9TX12cgFzCRrXNANbMgc/jk1CS4oOxvL249+UC0ZvHAigpnGVY4//eTvd0d658Rp9lKHUknAwMDq4yOk9rVMwgBTLegOBsNiFvk5Vkg8THcQkqAscqoWxJn8++fv7EI/iKk+fujQytn7XghAQ94ZKCmpsHA8Pvj47svv2Nq/v1k77TVDOG1bTLsuNzEwPD7/ubC3p3ofv50dfWMlx6pzvh0Mny6unLaTgYGBhTNP5/sXXBRqyRKmw+/zo7pJ74zoGneMWMdQ1CogQAenb+f7J89/fAnOB/h5+886kqC2AOZgYHhz9eXN4+uW7rzPrIg4wjMzwDAxF1/sSdIQQAAAABJRU5ErkJggg==",k="/docs/cocos/assets/extension-folder-blank.CHdHOzbN.png",o="/docs/cocos/assets/extension-menu-test.Cx3IuDe6.png",D=JSON.parse('{"title":"入门示例-菜单","description":"","frontmatter":{},"headers":[],"relativePath":"zh/editor/extension/first.md","filePath":"zh/editor/extension/first.md","lastUpdated":1712305443000}'),r={name:"zh/editor/extension/first.md"},d=h('<h1 id="入门示例-菜单" tabindex="-1">入门示例-菜单 <a class="header-anchor" href="#入门示例-菜单" aria-label="Permalink to &quot;入门示例-菜单&quot;">​</a></h1><p>本文将演示如何创建一个 Cocos Creator 扩展，本文将包含以下知识点：</p><ul><li>创建扩展</li><li>新增菜单</li><li>菜单消息</li></ul><h2 id="创建并安装扩展" tabindex="-1">创建并安装扩展 <a class="header-anchor" href="#创建并安装扩展" aria-label="Permalink to &quot;创建并安装扩展&quot;">​</a></h2><p>在编辑器的菜单栏中找到 <strong>扩展 -&gt; 创建扩展</strong> 菜单，如下图所示：</p><p><img src="'+i+'" alt="create-extension-menu"></p><p>点击 <strong>创建扩展</strong> 后，会弹出如下图所示的创建面板：</p><p><img src="'+a+'" alt="create-extension-panel"></p><p>Cocos Creator 提供了如上图所示 4 种扩展模板，用于快速创建一个新的扩展项目。</p><p>为了更简单的演示模板创建流程，我们选择 <strong>Blank</strong> 模板，点击面板右下方的 <strong>创建扩展</strong> 按钮建一个扩展包。</p><p>更多模板创建相关内容，请参考文档 <a href="./create-extension">扩展模板与编译构建-模板类型</a>。</p><h2 id="扩展管理" tabindex="-1">扩展管理 <a class="header-anchor" href="#扩展管理" aria-label="Permalink to &quot;扩展管理&quot;">​</a></h2><p>扩展创建成功后，点击顶部菜单栏中的 <strong>扩展 -&gt; 扩展管理器 -&gt; 已安装扩展</strong>，即可看到刚才创建的扩展。新创建的扩展默认是未启用状态，点击启用按钮即可启用此扩展：</p><p><img src="'+l+'" alt="extension"></p><p>更多扩展管理内容请参考文档 <a href="./extension-manager">扩展管理器-扩展列表</a>。</p><h2 id="扩展目录" tabindex="-1">扩展目录 <a class="header-anchor" href="#扩展目录" aria-label="Permalink to &quot;扩展目录&quot;">​</a></h2><p>点击 <img src="'+e+'" alt="folder"> 按钮可打开扩展包所在目录。以 <strong>Blank</strong> 模板为例，目录结构如下：</p><p><img src="'+k+`" alt="extension-folder"></p><p>各子文件（夹）功能如下：</p><ul><li><code>@types</code> - TypeScript 定义文件。包含编辑器全局对象 Editor 的定义，以及一些消息，和扩展对外的类型定义。</li><li><code>dist</code> - TypeScript 生成的 javascript 代码。</li><li><code>i18n</code> - 多语言配置。</li><li><code>src</code> - TypeScript 源代码。</li><li><code>package.json</code> - 扩展描述文件。</li><li><code>README-CN/EN.md</code> - 中文/英文说明文件。</li><li><code>tsconfig.json</code> - TypeScript 配置文件。</li></ul><h2 id="扩展定义文件-package-json" tabindex="-1">扩展定义文件 <code>package.json</code> <a class="header-anchor" href="#扩展定义文件-package-json" aria-label="Permalink to &quot;扩展定义文件 \`package.json\`&quot;">​</a></h2><p>每个扩展都需要有一份 <code>package.json</code> 文件，用于描述改扩展的用途。</p><p>只有完整定义了描述文件 <code>package.json</code> 后，编辑器才能知道这个扩展里定义的具体功能、加载入口等信息。</p><blockquote><p><strong>注意</strong>：虽然 <code>package.json</code> 很多字段的定义和 <code>node.js</code> npm 模块的 <code>package.json</code> 相似，但从 npm 社区中下载的 npm 模块并不能直接作为 Cocos Creator 扩展使用。可以在 Cocos Creator 扩展中调用 npm 模块，使扩展具备相应的能力。</p></blockquote><p>打开 <code>package.json</code> 文件，可以看到以下内容：</p><div class="language-json vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">json</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">{</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">    &quot;package_version&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">2</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">    &quot;version&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;1.0.0&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">    &quot;name&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;simple-1649426645745&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">    &quot;description&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;i18n:simple-1649426645745.description&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">    &quot;main&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;./dist/main.js&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">    &quot;devDependencies&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: {</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">        &quot;@types/node&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;^16.0.1&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">        &quot;typescript&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;^4.3.4&quot;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    },</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">    &quot;author&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;Cocos Creator&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">    &quot;editor&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;&gt;=3.4.2&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">    &quot;scripts&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: {</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">        &quot;build&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;tsc -b&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">        &quot;watch&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;tsc -w&quot;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    }</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">}</span></span></code></pre></div><p>各字段含义如下：</p><ul><li><code>package_version</code>：Number - 版本号数值。</li><li><code>version</code>：String - 版本号字符串，推荐使用 <a href="http://semver.org/" target="_blank" rel="noreferrer">semver</a> 格式管理你的包版本。</li><li><code>name</code>：String - 定义了包的名字，包的名字是全局唯一的。命名规则请参考 <a href="./create-extension">选项说明</a>。</li><li><code>description</code>：Stirng - 扩展描述，用于简要介绍扩展关键特性、用途等信息，支持 <strong>i18n</strong> 多语言设置。</li><li><code>main</code>：String - 入口程序文件。</li><li><code>devDependencies</code>：{} - 扩展依赖。如本示例中，扩展依赖的 NodeJS 版本为 16.0.1，依赖的 TypeScript 版本为 4.3.4。</li><li><code>author</code>：String - 作者信息。</li><li><code>editor</code>：String - 支持的 Cocos Creator 编辑器版本。</li><li><code>scripts</code>：{} - 脚本编译相关命令。</li></ul><h2 id="定义菜单和消息" tabindex="-1">定义菜单和消息 <a class="header-anchor" href="#定义菜单和消息" aria-label="Permalink to &quot;定义菜单和消息&quot;">​</a></h2><p>将 <code>package.json</code> 改为如下内容：</p><div class="language-json vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">json</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">{</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">    &quot;package_version&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">2</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">    &quot;version&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;1.0.0&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">    &quot;name&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;simple-1649426645745&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">    &quot;description&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;i18n:simple-1649426645745.description&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">    &quot;main&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;./dist/main.js&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">    &quot;devDependencies&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: {</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">        &quot;@types/node&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;^16.0.1&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">        &quot;typescript&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;^4.3.4&quot;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    },</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">    &quot;author&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;Cocos Creator&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">    &quot;editor&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;&gt;=3.4.2&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">    &quot;scripts&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: {</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">        &quot;build&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;tsc -b&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">        &quot;watch&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;tsc -w&quot;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    },</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">    //------------------------------</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">    &quot;contributions&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: {</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">        &quot;menu&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: [{</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">            &quot;path&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;Develop&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">            &quot;label&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;test&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">            &quot;message&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;log&quot;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">        }],</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">        &quot;messages&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: {</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">            &quot;log&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: {</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">                &quot;methods&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: [</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;log&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">]</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">            }</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">        }</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    }</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">}</span></span></code></pre></div><p>新增字段含义如下：</p><ul><li><code>contributions</code>：Object（可选）- 对编辑器已有功能进行扩展的相关配置 <ul><li><code>menu</code>：[]，注册菜单，并绑定消息。具体内容请参考 <a href="./contributions-menu">自定义主菜单</a>。</li><li><code>messages</code>：[] - 注册编辑器消息，可以绑定一个或多个的扩展内定义的方法。更多定义数据请参考 <a href="./contributions-messages">自定义消息</a>。</li></ul></li></ul><p>更多关于 <code>package.json</code> 格式的定义，请参考 <a href="./define">扩展包的定义</a>。</p><h2 id="安装依赖和编译构建" tabindex="-1">安装依赖和编译构建 <a class="header-anchor" href="#安装依赖和编译构建" aria-label="Permalink to &quot;安装依赖和编译构建&quot;">​</a></h2><p>扩展创建完成后打开扩展包所在目录，执行以下命令：</p><div class="language-bash vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># install dependencies</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">npm</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> install</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># build</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">npm</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> run</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> build</span></span></code></pre></div><p>更多扩展编译构建相关信息参考文档 <a href="./create-extension">扩展模板与编译构建</a>。</p><h2 id="运行扩展" tabindex="-1">运行扩展 <a class="header-anchor" href="#运行扩展" aria-label="Permalink to &quot;运行扩展&quot;">​</a></h2><p>返回编辑器，点击顶部菜单栏中的 <strong>扩展 -&gt; 扩展管理器 -&gt; 项目</strong>，找到之前创建的扩展。点击扩展右侧的 <img src="`+s+'" alt="refresh"> 按钮，使上面的修改内容生效。</p><p>若扩展已生效，在 Cocos Creator 顶部菜单栏区域会出现一个 <strong>Develop</strong> 菜单，并带有一个 <strong>test</strong> 菜单项，如下图所示：</p><p><img src="'+o+`" alt="menu-test"></p><p>此时点击 <strong>test</strong> 菜单项会发现没有任何反应，这是因为我们还没有为菜单信息编写对应的代码。</p><p>接下来我们便看看如何让菜单与扩展通信。</p><h2 id="入口程序-main-ts" tabindex="-1">入口程序 <code>main.ts</code> <a class="header-anchor" href="#入口程序-main-ts" aria-label="Permalink to &quot;入口程序 \`main.ts\`&quot;">​</a></h2><p>每一个扩展都有一个唯一的入口程序 <code>main.ts</code>，默认生成的内容如下：</p><div class="language-typescript vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">typescript</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">/**</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"> * </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">@en</span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"> Registration method for the main process of Extension</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"> * </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">@zh</span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"> 为扩展的主进程的注册方法</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"> */</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">export</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> const</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> methods</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">:</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> { [</span><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">key</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">:</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> string</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">]</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">:</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> (</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">...</span><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">any</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">:</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> any</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">) </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=&gt;</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> any</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> } </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> { };</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">/**</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"> * </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">@en</span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"> Hooks triggered after extension loading is complete</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"> * </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">@zh</span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"> 扩展加载完成后触发的钩子</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"> */</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">export</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> const</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> load</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> =</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> function</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">() { };</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">/**</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"> * </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">@en</span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"> Hooks triggered after extension uninstallation is complete</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"> * </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">@zh</span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"> 扩展卸载完成后触发的钩子</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"> */</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">export</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> const</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> unload</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> =</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> function</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">() { };</span></span></code></pre></div><p><code>export const methods</code> 中定义的方法，将会作为操作的接口，通过 <a href="./messages">消息系统</a> 跨扩展调用，或者是和面板通信。</p><p>入口程序是扩展的主进程，会在 Cocos Creator 的启动过程中被加载。</p><h2 id="菜单消息处理" tabindex="-1">菜单消息处理 <a class="header-anchor" href="#菜单消息处理" aria-label="Permalink to &quot;菜单消息处理&quot;">​</a></h2><p>我们对入口程序稍作修改，添加一个接收 <code>log</code> 消息的处理函数，如下所示：</p><div class="language-typescript vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">typescript</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">export</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> const</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> methods</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">:</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> { [</span><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">key</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">:</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> string</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">]</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">:</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> (</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">...</span><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">any</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">:</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> any</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">) </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=&gt;</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> any</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> } </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> { </span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">    log</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(){console.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">log</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;Hello World&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">)},</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">};</span></span></code></pre></div><p>执行 <code>npm run build</code> 命令，编译扩展。</p><p>点击扩展右侧的 <img src="`+s+'" alt="refresh"> 按钮，并禁用再启用扩展，使上面的修改内容生效。</p><p>再次点击 <code>Develop/test</code>菜单项，会发现在 Cocos Creator <strong>控制台</strong> 打印出了 “Hello World”。</p>',55),E=[d];function g(c,y,F,u,C,q){return p(),t("div",null,E)}const b=n(r,[["render",g]]);export{D as __pageData,b as default};