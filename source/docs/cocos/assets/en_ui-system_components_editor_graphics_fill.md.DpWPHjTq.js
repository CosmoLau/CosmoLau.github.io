import{_ as s,c as i,o as a,a4 as t}from"./chunks/framework.uQk9_EO2.js";const e="/docs/cocos/assets/fill.M6YiVs4b.png",f=JSON.parse('{"title":"Fill","description":"","frontmatter":{},"headers":[],"relativePath":"en/ui-system/components/editor/graphics/fill.md","filePath":"en/ui-system/components/editor/graphics/fill.md","lastUpdated":1712336288000}'),l={name:"en/ui-system/components/editor/graphics/fill.md"},h=t(`<h1 id="fill" tabindex="-1">Fill <a class="header-anchor" href="#fill" aria-label="Permalink to &quot;Fill&quot;">​</a></h1><p>The <code>fill()</code> method is used to fill the current image (path). The color used is <a href="./fillColor"><code>fillColor</code></a>.</p><blockquote><p><strong>Note</strong>: if the path is not closed, the <code>fill()</code> method adds a line from the end of the path to the start point to close the path and then fills the path.</p></blockquote><h2 id="example" tabindex="-1">Example <a class="header-anchor" href="#example" aria-label="Permalink to &quot;Example&quot;">​</a></h2><div class="language-ts vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">ts</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">const</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> ctx</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> =</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> node.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">getComponent</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(Graphics);</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">ctx.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">rect</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">20</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">20</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">150</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">100</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">);</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">ctx.fillColor </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> Color.</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">GREEN</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">ctx.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">fill</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">();</span></span></code></pre></div><p><img src="`+e+'" alt="fill.png"></p><hr><p>Return to the <a href="./../graphics">Graphics Component Reference</a> documentation.</p>',8),n=[h];function p(o,r,k,d,c,E){return a(),i("div",null,n)}const m=s(l,[["render",p]]);export{f as __pageData,m as default};