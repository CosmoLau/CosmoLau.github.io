import{_ as e,c as t,o as n,a4 as s}from"./chunks/framework.uQk9_EO2.js";const a="/docs/cocos/assets/sub-context-view.D6PMfKj1.png",o="/docs/cocos/assets/adaption-1.Bgxn9u6d.png",i="/docs/cocos/assets/adaption-2.D_d9H7It.png",r="/docs/cocos/assets/generate-template.B5VNjMpg.png",l="/docs/cocos/assets/build-output.CQ20_cj_.png",p="/docs/cocos/assets/show-in-devtool.CYw8_B-Z.png",h="/docs/cocos/assets/folder-structure.CQ0JzMBY.png",C=JSON.parse('{"title":"Access to Open Data Context","description":"","frontmatter":{},"headers":[],"relativePath":"en/editor/publish/build-open-data-context.md","filePath":"en/editor/publish/build-open-data-context.md","lastUpdated":1712305443000}'),d={name:"en/editor/publish/build-open-data-context.md"},c=s('<h1 id="access-to-open-data-context" tabindex="-1">Access to Open Data Context <a class="header-anchor" href="#access-to-open-data-context" aria-label="Permalink to &quot;Access to Open Data Context&quot;">​</a></h1><p>Currently, platforms such as <strong>WeChat</strong>, <strong>Baidu</strong>, and <strong>Douyin Mini Game</strong> have added the concept of <strong>Open Data Context</strong>, which is a separate game execution environment, in order to protect their social relationship chain data. The resources, engines, and applications in the <strong>Open Data Context</strong> are completely isolated from the main context, and only in the <strong>Open Data Context</strong> can developers access the relationship chain data through the open interface provided by the platform to implement some features such as leaderboards.</p><p>In <strong>Cocos Creator 3.0</strong>, we deprecate the Canvas Renderer module and replaced it with a lightweight front-end Canvas engine based on <strong>XML</strong> + <strong>CSS</strong> designed by WeChat team. The engine is integrated into the <strong>Cocos Creator 3.0</strong>&#39;s built-in <strong>Open Data Context</strong> project template, which allows developers to implement a leaderboard-like feature based on the template with a few basic front-end skills.</p><h2 id="subcontextview-component-description" tabindex="-1">SubContextView Component Description <a class="header-anchor" href="#subcontextview-component-description" aria-label="Permalink to &quot;SubContextView Component Description&quot;">​</a></h2><p>Since the <strong>Open Data Context</strong> can only be rendered on the off-screen canvas called <strong>sharedCanvas</strong>, you need a node in your project to act as a container for rendering the <strong>Open Data Context</strong>, and add the <code>SubContextView</code> component to that node, which will render the <strong>sharedCanvas</strong> to the container node.</p><p>The <code>SubContextView</code> component contains two main properties, <strong>Design Resolution Size</strong> and <strong>FPS</strong>.</p><p><img src="'+a+`" alt="sub-context-view"></p><h3 id="design-resolution-size" tabindex="-1">Design Resolution Size <a class="header-anchor" href="#design-resolution-size" aria-label="Permalink to &quot;Design Resolution Size&quot;">​</a></h3><p>If you set the <strong>Design Resolution Size</strong> of the <code>SubContextView</code> component to <strong>640 * 960</strong>, the size of the <strong>sharedCanvas</strong> will be set to <strong>640 * 960</strong> during the component&#39;s <code>onLoad</code> phase. This means that after the build, the <strong>Open Data Context Project</strong> is rendered on an off-screen canvas of <strong>640 * 960</strong>. Then, when customizing the <strong>Open Data Context</strong> (see below), the maximum size of the tag style in <code>style.js</code> is <strong>640 * 960</strong>, otherwise the rendered content will be off the canvas. Example:</p><div class="language-js vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// style.js</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">export</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> default</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> {</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    container: {</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">        width: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">640</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// max width</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">        height: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">960</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,  </span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// max height</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    },</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">}</span></span></code></pre></div><p>To avoid this part of the data coupling, setting a percentage adaptation to the size is supported. Example:</p><div class="language-js vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// style.js</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">export</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> default</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> {</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    container: {</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">        width: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;100%&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">        height: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;100%&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    },</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">}</span></span></code></pre></div><p>In the actual rendering process, the engine will adopt the <strong>SHOW ALL</strong> adaptation policy to render the <strong>sharedCanvas</strong> to the <code>SubContextView</code> component node to avoid the UI distortion caused by stretching during rendering. For example, in the following two images, we are using <code>SubContextView</code> component nodes of different sizes, and the <strong>Open Data Context</strong> texture will not be stretched.</p><p><img src="`+o+'" alt="adaption-1"></p><p><img src="'+i+'" alt="adaption-2"></p><h3 id="setting-fps" tabindex="-1">Setting FPS <a class="header-anchor" href="#setting-fps" aria-label="Permalink to &quot;Setting FPS&quot;">​</a></h3><p>The <strong>FPS</strong> property is primarily used to set how often the main context will update the <strong>sharedCanvas</strong> on the <code>SubContextView</code> component to avoid performance loss due to frequent updates to the <strong>Open Data Context</strong> texture.</p><h2 id="release-process" tabindex="-1">Release Process <a class="header-anchor" href="#release-process" aria-label="Permalink to &quot;Release Process&quot;">​</a></h2><ol><li><p>Open the project and double-click the scene, then add the <code>SubContextView</code> component to the node on which you need to render the <strong>Open Data Context</strong>.</p></li><li><p>After the scene is set, save the scene, and then open the <strong>Build</strong> panel in <strong>Menu -&gt; Project</strong>, select the <strong>WeChat</strong> / <strong>Baidu</strong> / <strong>Douyin Mini Game</strong> platform you want to release, check <strong>Generate Open Data Context Template</strong>, and then click <strong>Build</strong>.</p><p><img src="'+r+'" alt="generate-template"></p></li><li><p>After the build is complete, click the <strong>Folder Icon</strong> button at the end of <strong>Buid Path</strong>, you&#39;ll see an <strong>openDataContext</strong> folder (e.g.: <code>build/wechatgame/openDataContext</code>), which is an <strong>Open Data Context</strong> project template built into Cocos Creator, in the distribution folder of the corresponding game platform.</p><p><img src="'+l+'" alt="build-output"></p><p>Developers can customize the required <strong>Open Data Context</strong> content based on this template, and the customization methods are described below. When built again, if the <strong>openDataContext</strong> folder exists in the <code>build</code> directory, it will be skipped directly and the developer does not have to worry about the customized <strong>Open Data Context Project</strong> being overwritten.</p></li><li><p>Open the build distribution (e.g.: <code>build/wechatgame</code>) using the DevTools of the corresponding mini game platformer to open the mini-game project to view the <strong>Open Data Context</strong> content.</p><p><img src="'+p+'" alt="show-in-devtool"></p><blockquote><p><strong>Note</strong>: in the <strong>Open Data Context</strong> of <strong>Baidu</strong> platform, since the image can only load player avatars returned from Baidu, the local avatar image may not be loaded in the generated template project.</p></blockquote></li></ol><h2 id="customization-on-open-data-context-project" tabindex="-1">Customization on Open Data Context Project <a class="header-anchor" href="#customization-on-open-data-context-project" aria-label="Permalink to &quot;Customization on Open Data Context Project&quot;">​</a></h2><p>Before customizing an <strong>Open Data Context</strong> project, developers need to know some basic information:</p><ul><li><a href="https://wechat-miniprogram.github.io/minigame-canvas-engine/overview/guide.html" target="_blank" rel="noreferrer">minigame-canvas-engine quick start[cn]</a></li><li><a href="http://olado.github.io/doT/?spm=a2c6h.12873639.0.0.36f45227oKu0XO" target="_blank" rel="noreferrer">doT template engine use</a></li></ul><p>With this basic information in mind, let&#39;s take a look at the <strong>Open Data Context</strong> template generated by default after the build, with the following directory structure:</p><p><img src="'+h+`" alt="folder-structure"></p><ul><li><strong>render/dataDemo.js</strong>: Simulates some random data of the leaderboards, where the developer can request the relational chain data from the platform and pass it to the <strong>doT template engine</strong> to generate relevant XML text</li><li><strong>render/style.js</strong>: To record CSS style text information, refer to <a href="https://wechat-miniprogram.github.io/minigame-canvas-engine/api/style.html#%E5%B8%83%E5%B1%80" target="_blank" rel="noreferrer">Style documentation [cn]</a></li><li><strong>render/template.js</strong>: To record XML text information, the project uses the template engine to generate XML text by default. Refer to <a href="https://wechat-miniprogram.github.io/minigame-canvas-engine/api/tags.html#%E6%A0%87%E7%AD%BE%E5%88%97%E8%A1%A8" target="_blank" rel="noreferrer">Tag documentation [cn]</a>.</li><li><strong>render/avatar.png</strong>: Header images for display in <strong>Open Data Context</strong> project template, can be deleted.</li><li><strong>engine.js</strong>: source code of Canvas engine</li><li><strong>index.js</strong>: <strong>Open Data Context Project</strong> entry file where the <strong>Open Data Context</strong> is rendered by passing XML text and CSS styles to the Canvas engine</li></ul><h2 id="recommended-practices" tabindex="-1">Recommended practices <a class="header-anchor" href="#recommended-practices" aria-label="Permalink to &quot;Recommended practices&quot;">​</a></h2><ol><li><p>Since the build directory generated after the build of the project is excluded from version control by default by git, if you want to include your custom <strong>Open Data Context</strong> in version control, you can put the <code>openDataContext</code> folder (e.g.: <code>build/wechatgame/openDataContext</code>) into your project&#39;s <code>build-templates</code> directory. Please refer to <a href="./custom-project-build-template">Custom Project Build Process</a> documentation.</p></li><li><p>In an <strong>Open Data Context Project</strong>, if you need to listen to messages from the main context, you need to first determine whether the message comes from the main context engine, using the WeChat interface as an example:</p><div class="language-js vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">wx.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">onMessage</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">res</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> =&gt;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> {</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">    if</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> (</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">!</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(res </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">&amp;&amp;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> res.type </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">===</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &#39;engine&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">)) {</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">        console.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">log</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;do something...&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">);</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    }</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">});</span></span></code></pre></div><p>When the main context sends a message to the open data context, it is recommended to include a <code>type</code> message to avoid handling the wrong message source. For example, the <code>res.type === &#39;engine&#39;</code> in the above code means that the message comes from the main context engine.</p></li></ol><h2 id="reference-documentation" tabindex="-1">Reference documentation <a class="header-anchor" href="#reference-documentation" aria-label="Permalink to &quot;Reference documentation&quot;">​</a></h2><ul><li><a href="https://wechat-miniprogram.github.io/minigame-canvas-engine/" target="_blank" rel="noreferrer">WeChat official document -- Canvas engine for mini games [cn]</a></li><li><a href="https://github.com/wechat-miniprogram/minigame-canvas-engine" target="_blank" rel="noreferrer">minigame-canvas-engine source code</a></li><li><a href="http://olado.github.io/doT/?spm=a2c6h.12873639.0.0.36f45227oKu0XO" target="_blank" rel="noreferrer">doT template engine</a></li></ul>`,29),g=[c];function m(u,k,E,f,b,y){return n(),t("div",null,g)}const v=e(d,[["render",m]]);export{C as __pageData,v as default};