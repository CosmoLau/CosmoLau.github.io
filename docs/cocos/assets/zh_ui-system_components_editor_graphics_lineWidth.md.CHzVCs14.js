import{_ as s,c as i,o as t,a4 as a}from"./chunks/framework.uQk9_EO2.js";const e="/docs/cocos/assets/lineWidth.DWa7thvA.png",y=JSON.parse('{"title":"lineWidth","description":"","frontmatter":{},"headers":[],"relativePath":"zh/ui-system/components/editor/graphics/lineWidth.md","filePath":"zh/ui-system/components/editor/graphics/lineWidth.md","lastUpdated":1712336288000}'),h={name:"zh/ui-system/components/editor/graphics/lineWidth.md"},n=a(`<h1 id="linewidth" tabindex="-1">lineWidth <a class="header-anchor" href="#linewidth" aria-label="Permalink to &quot;lineWidth&quot;">​</a></h1><p><code>lineWidth()</code> 方法添加一个新点，然后创建从该点到画布中最后指定点的线条。</p><table><thead><tr><th style="text-align:left;">参数</th><th style="text-align:left;">描述</th></tr></thead><tbody><tr><td style="text-align:left;">number</td><td style="text-align:left;">当前线条的宽度，以像素计。</td></tr></tbody></table><h2 id="实例" tabindex="-1">实例 <a class="header-anchor" href="#实例" aria-label="Permalink to &quot;实例&quot;">​</a></h2><div class="language-ts vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">ts</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">const</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> ctx</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> =</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> node.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">getComponent</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(Graphics);</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">ctx.lineWidth </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> 20</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">ctx.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">rect</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">20</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">20</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">80</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">100</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">);</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">ctx.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">stroke</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">();</span></span></code></pre></div><p><img src="`+e+'" alt="lineWidth.png"></p><hr><p>返回 <a href="./../graphics">Graphics 组件参考</a></p>',8),l=[n];function p(d,k,r,o,c,E){return t(),i("div",null,l)}const _=s(h,[["render",p]]);export{y as __pageData,_ as default};