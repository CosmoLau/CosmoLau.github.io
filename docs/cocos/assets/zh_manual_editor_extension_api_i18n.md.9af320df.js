import{_ as s,v as t,b as a,R as e}from"./chunks/framework.5ffcbaff.js";const h=JSON.parse('{"title":"I18n","description":"","frontmatter":{},"headers":[],"relativePath":"zh/manual/editor/extension/api/i18n.md","filePath":"zh/manual/editor/extension/api/i18n.md"}'),n={name:"zh/manual/editor/extension/api/i18n.md"},l=e(`<h1 id="i18n" tabindex="-1">I18n <a class="header-anchor" href="#i18n" aria-label="Permalink to &quot;I18n&quot;">​</a></h1><p>本地化翻译，通过在扩展中注册对应的数据，可以使用 i18n 进行翻译</p><h2 id="接口说明" tabindex="-1">接口说明 <a class="header-anchor" href="#接口说明" aria-label="Permalink to &quot;接口说明&quot;">​</a></h2><div class="language-typescript"><button title="Copy Code" class="copy"></button><span class="lang">typescript</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#89DDFF;font-style:italic;">export</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">type</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">I18nMap</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">    [</span><span style="color:#A6ACCD;font-style:italic;">key</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">string</span><span style="color:#A6ACCD;">]</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">I18nMap</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">|</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">string</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#89DDFF;">};</span></span></code></pre></div><h2 id="函数" tabindex="-1">函数 <a class="header-anchor" href="#函数" aria-label="Permalink to &quot;函数&quot;">​</a></h2><h3 id="getlanguage" tabindex="-1">getLanguage <a class="header-anchor" href="#getlanguage" aria-label="Permalink to &quot;getLanguage&quot;">​</a></h3><p>▸ <strong>getLanguage</strong>(): <code>any</code></p><p>获取当前的语言</p><p><strong>返回结果</strong></p><table><thead><tr><th style="text-align:left;">value</th><th style="text-align:left;">Type</th><th style="text-align:left;">Description</th></tr></thead><tbody><tr><td style="text-align:left;"><code>zh</code></td><td style="text-align:left;"><code>string</code></td><td style="text-align:left;">中文</td></tr><tr><td style="text-align:left;"><code>en</code></td><td style="text-align:left;"><code>string</code></td><td style="text-align:left;">English</td></tr></tbody></table><div class="language-typescript"><button title="Copy Code" class="copy"></button><span class="lang">typescript</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#C792EA;">const</span><span style="color:#A6ACCD;"> langeage </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> Editor</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">I18n</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">getLanguage</span><span style="color:#A6ACCD;">()</span><span style="color:#89DDFF;">;</span><span style="color:#A6ACCD;"> </span><span style="color:#676E95;font-style:italic;">// &quot;zh&quot;</span></span></code></pre></div><h3 id="select" tabindex="-1">select <a class="header-anchor" href="#select" aria-label="Permalink to &quot;select&quot;">​</a></h3><p>▸ <strong>select</strong>(language: <code>string</code>): <code>any</code></p><p>选择一种翻译语言</p><p><strong>请求参数</strong></p><table><thead><tr><th style="text-align:left;">Name</th><th style="text-align:left;">Type</th><th style="text-align:left;">Description</th></tr></thead><tbody><tr><td style="text-align:left;"><code>language</code></td><td style="text-align:left;"><code>string</code></td><td style="text-align:left;">选择当前使用的语言</td></tr></tbody></table><div class="language-typescript"><button title="Copy Code" class="copy"></button><span class="lang">typescript</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">Editor</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">I18n</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">select</span><span style="color:#A6ACCD;">(</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">zh</span><span style="color:#89DDFF;">&#39;</span><span style="color:#A6ACCD;">)</span><span style="color:#89DDFF;">;</span></span></code></pre></div><h3 id="t" tabindex="-1">t <a class="header-anchor" href="#t" aria-label="Permalink to &quot;t&quot;">​</a></h3><p>▸ <strong>t</strong>(key: <code>string</code>, obj?: <code>{[key: string]: string}</code>): <code>any</code></p><p>传入 key，翻译成当前语言 允许翻译变量 {a}，传入的第二个参数 obj 内定义 a</p><p><strong>请求参数</strong></p><table><thead><tr><th style="text-align:left;">Name</th><th style="text-align:left;">Type</th><th style="text-align:left;">Description</th></tr></thead><tbody><tr><td style="text-align:left;"><code>key</code></td><td style="text-align:left;"><code>string</code></td><td style="text-align:left;">用于翻译的 key 值</td></tr><tr><td style="text-align:left;"><code>obj?</code></td><td style="text-align:left;"><code>Object</code></td><td style="text-align:left;">翻译字段内如果有 {key} 等可以在这里传入替换字段</td></tr></tbody></table><div class="language-typescript"><button title="Copy Code" class="copy"></button><span class="lang">typescript</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#676E95;font-style:italic;">/* </span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">* zh.js 文件定义的翻译映射数据</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">* showUuid: &#39;复制并打印 UUID&#39;</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">* cancelSearchType: &#39;取消搜索类型 {type}，默认 搜索名称或 UUID&#39;,</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">*/</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">Editor</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">I18n</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">t</span><span style="color:#A6ACCD;">(</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">hierarchy.menu.showUuid</span><span style="color:#89DDFF;">&#39;</span><span style="color:#A6ACCD;">)</span><span style="color:#89DDFF;">;</span><span style="color:#A6ACCD;">  </span><span style="color:#676E95;font-style:italic;">// &#39;复制并打印 UUID&#39;</span></span>
<span class="line"><span style="color:#A6ACCD;">Editor</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">I18n</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">t</span><span style="color:#A6ACCD;">(</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">hierarchy.menu.cancelSearchType</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span><span style="color:#A6ACCD;"> </span><span style="color:#F07178;">type</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">UUID</span><span style="color:#89DDFF;">&#39;</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">}</span><span style="color:#A6ACCD;">)</span><span style="color:#89DDFF;">;</span><span style="color:#A6ACCD;">  </span><span style="color:#676E95;font-style:italic;">// &#39;取消搜索类型 UUID，默认 搜索名称或 UUID&#39;</span></span></code></pre></div>`,23),o=[l];function p(c,r,i,y,d,D){return t(),a("div",null,o)}const C=s(n,[["render",p]]);export{h as __pageData,C as default};