import{_ as s,c as a,o as i,a4 as n}from"./chunks/framework.uQk9_EO2.js";const g=JSON.parse('{"title":"内置 Legacy Shader 导读","description":"","frontmatter":{},"headers":[],"relativePath":"zh/shader/legacy-shader/legacy-shader-builtins.md","filePath":"zh/shader/legacy-shader/legacy-shader-builtins.md","lastUpdated":1712305443000}'),h={name:"zh/shader/legacy-shader/legacy-shader-builtins.md"},l=n(`<h1 id="内置-legacy-shader-导读" tabindex="-1">内置 Legacy Shader 导读 <a class="header-anchor" href="#内置-legacy-shader-导读" aria-label="Permalink to &quot;内置 Legacy Shader 导读&quot;">​</a></h1><p>Legacy Shader 相关的源码，有两个目录：</p><ul><li>internal/chunks/legacy/</li><li>internal/effects/legacy/</li></ul><p>在 <code>chunks/legacy/</code> 目录中，存放的是一些公共函数，如解码器、雾效、输入、输出、阴影、骨骼蒙皮等等。</p><p>Legacy Shader 和 Surface Shader 都会调用 internal/chunks/builtin/ 和 internal/chunks/common/ 提供的函数。</p><p>在 <code>effects/legacy/</code> 目录中，提供了三个内置的 Legacy Shader：</p><ul><li>standard： 标准材质</li><li>terrain：用于地形渲染</li><li>toon：用于卡通渲染</li></ul><h2 id="基本结构" tabindex="-1">基本结构 <a class="header-anchor" href="#基本结构" aria-label="Permalink to &quot;基本结构&quot;">​</a></h2><p>Legacy Shader 代码通常由几个部分组成：</p><ul><li>信息描述（<code>CCEffect</code>）：描述此 Shader 的技术、渲染过程组成部分，以及每个渲染过程使用的 Shader、渲染状态、属性等。</li><li>共享常量（<code>Shared UBOs</code>）：把 vs 和 fs 都需要用到的 uniforms 定义在一起，方便管理。</li><li>主体函数（<code>Shader Body</code>）：用于实现具体的 Shader 主体。</li></ul><p>Legacy Shader 中的 CCEffect 和 共享常量部分与 Surface Shader 一致，可前往 <a href="./../surface-shader/builtin-surface-shader">内置 Surface Shader 导读</a> 了解详情。</p><h2 id="着色函数" tabindex="-1">着色函数 <a class="header-anchor" href="#着色函数" aria-label="Permalink to &quot;着色函数&quot;">​</a></h2><p>为了更好地理解渲染流程，请先查看 <a href="./../forward-and-deferred">前向渲染与延迟渲染 Shader 执行流程</a>。</p><h3 id="standard-pbr" tabindex="-1">standard(PBR) <a class="header-anchor" href="#standard-pbr" aria-label="Permalink to &quot;standard(PBR)&quot;">​</a></h3><p>在 legacy/standard.effect 中，定义了着色相关的Shader代码：</p><div class="language-ts vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">ts</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">CCProgram standard</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">-</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">vs </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">%</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">{</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">    //...</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">    void</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> main</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(){</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">        StandardVertInput In;</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">        CCVertInput</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(In);</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">        //...</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">        gl_Position </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> cc_matProj </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">*</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> (cc_matView </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">*</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> matWorld) </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">*</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> In.position;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    }</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">}</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">%</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">CCProgram standard</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">-</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">fs </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">%</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">{</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">    //...</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">    void</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> surf</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(out StandardSurface s){</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">        //s.albedo = ...</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">        //s.occlusion = ...</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">        //s.roughness = ...</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">        //s.metallic = ...</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">        //s.specularIntensity = ...</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">        //s.normal = ...</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    }</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">    CC_STANDARD_SURFACE_ENTRY</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">()</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">}</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">%</span></span></code></pre></div><p>可以看到，在 vs 中，直接使用了 main 函数作为入口，而在 fs 中，只有一个 surf 函数。</p><p>这是因为 <code>CC_STANDARD_SURFACE_ENTRY</code> 宏展开后，就是 main 函数，这个 main 函数会调用 surf 函数。</p><h3 id="terrain" tabindex="-1">terrain <a class="header-anchor" href="#terrain" aria-label="Permalink to &quot;terrain&quot;">​</a></h3><p>terrain 使用 StandardSurface 作为材质表面数据结构，使用 <code>CC_STANDARD_SURFACE_ENTRY</code> 作为入口。这就说明，terrain 的渲染流程与光照计算和 standard 完全一致。</p><p>只是由于地形采用的是多层纹理混合，所以 terrain 使用的纹理以及 surf 函数实现细节与 standard 的有较大区别。</p><h3 id="toon" tabindex="-1">toon <a class="header-anchor" href="#toon" aria-label="Permalink to &quot;toon&quot;">​</a></h3><p>在 legacy/toon.effect 中，我们可以看到：</p><div class="language-ts vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">ts</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">CCProgram toon</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">-</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">vs </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">%</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">{</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">    //...</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">    void</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> main</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(){</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">        StandardVertInput In;</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">        CCVertInput</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(In);</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">        //...</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">        gl_Position </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> cc_matProj </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">*</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> (cc_matView </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">*</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> matWorld) </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">*</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> In.position;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    }</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">}</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">%</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">CCProgram toon</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">-</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">fs </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">%</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">{</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">    //...</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">    void</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> surf</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(out ToonSurface s){</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">        //s.baseStep = ...</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">        //s.baseFeather = ...</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">        //s.shadeStep = ...</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">        //s.shadeFeather = ...</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">        //s.shadowCover = ...</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    }</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">    void</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> frag</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(){</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">        ToonSurface s; </span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">surf</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(s);</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">        vec4 color </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> CCToonShading</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(s);</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">        return</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> CCFragOutput</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(color);</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    }</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">}</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">%</span></span></code></pre></div><p>toon 最大的特征是在 CCEffect 中，多定义了一个 outline pass，outline pass 的代码在 chunks/legacy/main-functions/outline-vs(fs) 中。</p><p>toon 材质表面数据结构为 ToonSurface，与 standard 使用的不一样。 在 frag 函数中可以看到， toon 的光照计算使用了专门的 CCToonShading 函数。</p><p>并且，toon 自己定义了一个 frag 入口函数，未使用 <code>CC_STANDARD_SURFACE_ENTRY</code> 宏。这也意味着，toon 是不支持延迟渲染的。</p><h3 id="shadow-caster" tabindex="-1">shadow-caster <a class="header-anchor" href="#shadow-caster" aria-label="Permalink to &quot;shadow-caster&quot;">​</a></h3><p>可以看到，standard，terrain，toon 都有关于 shadow 的代码片段：</p><div class="language-ts vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">ts</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">CCProgram shadow</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">-</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">caster</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">-</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">vs </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">%</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">{</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">    //...</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">}</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">%</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">CCProgram shadow</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">-</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">caster</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">-</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">fs </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">%</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">{</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">    //...</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">}</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">%</span></span></code></pre></div><p>这个套 vs/fs 用于阴影贴图生成，引擎渲染管线会在阴影贴图生成阶段，查找 phase 为 shadow-add 的 pass 进行绘制。</p>`,31),p=[l];function t(e,k,r,d,E,c){return i(),a("div",null,p)}const y=s(h,[["render",t]]);export{g as __pageData,y as default};