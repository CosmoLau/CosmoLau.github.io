import{_ as s,c as i,o as a,a4 as n}from"./chunks/framework.uQk9_EO2.js";const u=JSON.parse('{"title":"自定义主菜单","description":"","frontmatter":{},"headers":[],"relativePath":"zh/editor/extension/contributions-menu.md","filePath":"zh/editor/extension/contributions-menu.md","lastUpdated":1712305443000}'),e={name:"zh/editor/extension/contributions-menu.md"},t=n(`<h1 id="自定义主菜单" tabindex="-1">自定义主菜单 <a class="header-anchor" href="#自定义主菜单" aria-label="Permalink to &quot;自定义主菜单&quot;">​</a></h1><p>编辑器顶部有一栏主菜单，在扩展内可以方便的在这个菜单栏添加自己的菜单。</p><h2 id="注册菜单" tabindex="-1">注册菜单 <a class="header-anchor" href="#注册菜单" aria-label="Permalink to &quot;注册菜单&quot;">​</a></h2><p>当扩展需要添加菜单的时候，只需要填写 <code>contributions.menu</code> 对象。例如我们在 &quot;扩展&quot; 菜单里增加一个菜单项，可以修改 <code>package.json</code>，代码示例如下：</p><div class="language-json5 vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">json5</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">{</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">    // package.json</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">    &quot;name&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;hello-world&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">    &quot;contributions&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: {</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">        &quot;messages&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: {</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">            &quot;open-panel&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: {</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">                &quot;methods&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: [</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;openPanel&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">]</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">            }</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">        },</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">        &quot;menu&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: [</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">            {</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">                &quot;path&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;i18n:menu.extension&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">                &quot;label&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;Open Hello World&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">                &quot;icon&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;./static/icon.png&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">                &quot;message&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;open-panel&quot;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">            }</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">        ]</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    }</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">}</span></span></code></pre></div><p>上面的配置信息将会在编辑器的 &quot;扩展&quot; 菜单里新增一个 &quot;Open Hello World&quot; 菜单，点击这个菜单后将会按照 message 配置发送一条 <code>open-panel</code> 消息给当前扩展，若当前扩展配置了这个消息的监听以及对应的 <code>openPanel</code> 处理函数，将会被触发。</p><p>关于消息的定义请参考文档 <a href="./contributions-messages">自定义消息</a>。</p><p>下面我们来看看 <code>menu</code> 对象中各字段的意义：</p><h3 id="path" tabindex="-1">path <a class="header-anchor" href="#path" aria-label="Permalink to &quot;path&quot;">​</a></h3><p>类型 {string} 必填</p><p>填写格式为：[顶部已有菜单路径][/路径1][/路径2]，以下写法都是合理的：</p><ul><li><code>i18n:menu.extension</code> - 以扩展菜单作为父菜单</li><li><code>i18n:menu.extension/Hello World</code> - 在扩展菜单中添加一个 <code>Hello World</code> 菜单项作为父菜单</li><li><code>MyMenu</code> - 在顶部菜单栏添加一个 <code>MyMenu</code> 菜单作为父菜单</li><li><code>MyMenu/Hello World</code> - 在顶部菜单栏添加一个 <code>MyMenu</code>，并再添加一个 <code>Hello World</code> 菜单项作为父菜单</li></ul><p>顶部菜单栏中，预设的菜单有：</p><ul><li>i18n:menu.project - “项目” 菜单</li><li>i18n:menu.node - “节点” 菜单</li><li>i18n:menu.panel - “面板” 菜单</li><li>i18n:menu.extension - “扩展” 菜单</li><li>i18n:menu.develop - “开发者” 菜单</li></ul><h3 id="label" tabindex="-1">label <a class="header-anchor" href="#label" aria-label="Permalink to &quot;label&quot;">​</a></h3><p>类型 {string} 必填</p><p>菜单项目的名称，支持 i18n:key 语法。</p><h3 id="icon" tabindex="-1">icon <a class="header-anchor" href="#icon" aria-label="Permalink to &quot;icon&quot;">​</a></h3><p>类型 {string} 可选</p><p>菜单的图标相对路径，扩展使用的素材一般放在名为 <code>static</code> 的文件夹下面，若不存在则新建一个。</p><h3 id="message" tabindex="-1">message <a class="header-anchor" href="#message" aria-label="Permalink to &quot;message&quot;">​</a></h3><p>类型 {string} 可选</p><p>菜单点击后触发的消息，此消息需要在 <code>contributions.messsages</code> 中先定义。</p>`,23),l=[t];function p(o,h,k,d,r,E){return a(),i("div",null,l)}const g=s(e,[["render",p]]);export{u as __pageData,g as default};