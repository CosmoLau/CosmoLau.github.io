import{_ as t,v as e,b as o,R as s}from"./chunks/framework.5ffcbaff.js";import{_ as a,a as n}from"./chunks/create-extension-panel.31b7caf6.js";const m=JSON.parse('{"title":"扩展模板与编译构建","description":"","frontmatter":{},"headers":[],"relativePath":"zh/manual/editor/extension/create-extension.md","filePath":"zh/manual/editor/extension/create-extension.md"}'),l={name:"zh/manual/editor/extension/create-extension.md"},r=s('<h1 id="扩展模板与编译构建" tabindex="-1">扩展模板与编译构建 <a class="header-anchor" href="#扩展模板与编译构建" aria-label="Permalink to &quot;扩展模板与编译构建&quot;">​</a></h1><p>本文将详细介绍如何通过 Creator 提供的扩展模板创建一个带有面板的扩展并使用。</p><p>在编辑器主菜单上选择 <strong>扩展 -&gt; 创建扩展</strong> 菜单，即可打开新建面板。</p><p><img src="'+a+'" alt="create-extension-menu"></p><p><img src="'+n+`" alt="create-extension-panel"></p><h2 id="模板类型" tabindex="-1">模板类型 <a class="header-anchor" href="#模板类型" aria-label="Permalink to &quot;模板类型&quot;">​</a></h2><p>Cocos Creator 提供了 4 种扩展模板，用于快速创建一个新的扩展项目。</p><ul><li><strong>Blank</strong>：空扩展。</li><li><strong>HTML Panel</strong>：基于 HTML 的扩展模板，并带有一个弹出面板。</li><li><strong>Vue2.x Panel</strong>：基于 Vue2.x 的扩展模板，并带有一个弹出面板。</li><li><strong>Vue3.x Panel</strong>：基于 Vue3.x 的扩展模板，并带有一个弹出面板。</li></ul><p>以上 4 种方式创建出来的扩展仅在工作量和技术选型上有差别，扩展可实现的能力无差别，开发者可根据自己的需求和技术背景自行选择。</p><blockquote><p><strong>注意</strong>：每个模板创建出来的扩展都不一样，请在创建后参考对应扩展包目录下的 <code>README.md</code> 文件。</p></blockquote><h2 id="选项说明" tabindex="-1">选项说明 <a class="header-anchor" href="#选项说明" aria-label="Permalink to &quot;选项说明&quot;">​</a></h2><table><thead><tr><th style="text-align:left;">扩展选项</th><th style="text-align:left;">功能说明</th></tr></thead><tbody><tr><td style="text-align:left;"><strong>扩展名</strong></td><td style="text-align:left;">创建的扩展名称，要求不能以 <code>_</code> 或 <code>.</code> 开头、不能含有大写字母。因为扩展名会成为 URL 的一部分，因此也不能含有 URL 的非法字符、不能含有 <code>.</code>、<code>&#39;</code> 和 <code>,</code>。</td></tr><tr><td style="text-align:left;"><strong>作者</strong></td><td style="text-align:left;">扩展的作者</td></tr><tr><td style="text-align:left;"><strong>依赖的编辑器版本</strong></td><td style="text-align:left;">创建的扩展运行时要求的 Cocos Creator 版本。</td></tr><tr><td style="text-align:left;"><strong>扩展管理器中显示</strong></td><td style="text-align:left;">若勾选该项，则扩展创建完成后，会自动打开 <strong>扩展管理器</strong>，并显示创建的扩展。<br>若不勾选该项，则扩展创建完成后，可点击编辑器顶部菜单栏中的 <strong>扩展 -&gt; 扩展管理器</strong> 查看。</td></tr><tr><td style="text-align:left;"><strong>在文件夹中展示</strong></td><td style="text-align:left;">若勾选该项，则扩展创建完成后会自动在系统文件管理器中打开扩展包。</td></tr><tr><td style="text-align:left;"><strong>扩展创建的位置</strong></td><td style="text-align:left;">创建的扩展包所在目录，自 v3.7 后，仅能创建位置为 <strong>项目（Project)</strong> 的扩展。</td></tr></tbody></table><h2 id="扩展位置" tabindex="-1">扩展位置 <a class="header-anchor" href="#扩展位置" aria-label="Permalink to &quot;扩展位置&quot;">​</a></h2><h3 id="项目-project" tabindex="-1">项目（Project） <a class="header-anchor" href="#项目-project" aria-label="Permalink to &quot;项目（Project）&quot;">​</a></h3><p>将扩展包应用到指定的 Cocos Creator 项目，<strong>项目</strong> 路径为：</p><ul><li><code>\${你的项目地址}/extensions</code></li></ul><h2 id="依赖安装与编译构建" tabindex="-1">依赖安装与编译构建 <a class="header-anchor" href="#依赖安装与编译构建" aria-label="Permalink to &quot;依赖安装与编译构建&quot;">​</a></h2><p>创建完成后打开扩展包所在目录，执行以下命令：</p><div class="language-bash"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#676E95;font-style:italic;"># 安装依赖模块</span></span>
<span class="line"><span style="color:#FFCB6B;">npm</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">install</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;"># 构建</span></span>
<span class="line"><span style="color:#FFCB6B;">npm</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">run</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">build</span></span></code></pre></div><p>扩展会依赖 <strong>Node.js</strong> 的第三方库，所以在启用扩展之前需要先在扩展目录下执行 <code>npm install</code> 安装依赖模块才能正常编译。</p><p>TypeScript 在编写时能够带上完整的代码提示，具备更强的工程性，因此 Cocos Creator 推荐使用基于 TypeScript 的工作流。</p><p>默认提供的扩展模版也都是基于 TypeScript，需需要执行 <code>npm run build</code> 编译后才能运行。</p><blockquote><p><strong>注意</strong>：扩展的 <code>tsconfig.json</code> 配置文件中开启了 <code>resolveJsonModule</code>，以便通过导入的扩展的 <code>package.json</code> 来获取扩展名称，因此 TypeScript 需要 <strong>v4.3</strong> 及以上版本，否则在导入根目录以外的 <code>json</code> 时会出现编译结果路径错误的问题。</p></blockquote>`,23),i=[r];function c(d,p,g,h,u,x){return e(),o("div",null,i)}const b=t(l,[["render",c]]);export{m as __pageData,b as default};