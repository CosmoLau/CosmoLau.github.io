import{_ as s,c as i,o as a,a4 as t}from"./chunks/framework.uQk9_EO2.js";const u=JSON.parse('{"title":"Extending Shortcut","description":"","frontmatter":{},"headers":[],"relativePath":"en/editor/extension/contributions-shortcuts.md","filePath":"en/editor/extension/contributions-shortcuts.md","lastUpdated":1712305443000}'),e={name:"en/editor/extension/contributions-shortcuts.md"},n=t(`<h1 id="extending-shortcut" tabindex="-1">Extending Shortcut <a class="header-anchor" href="#extending-shortcut" aria-label="Permalink to &quot;Extending Shortcut&quot;">​</a></h1><p>Shortcut keys within the editor are managed by the &quot;Shortcut Key Manager&quot;. Each shortcut key can be bound to a message, and when the shortcut key is pressed, the bound message will be triggered.</p><h2 id="defining-shortcut" tabindex="-1">Defining Shortcut <a class="header-anchor" href="#defining-shortcut" aria-label="Permalink to &quot;Defining Shortcut&quot;">​</a></h2><p>Defining the shortcuts needs to be done in the <code>contributions.shortcuts</code> field of <code>package.json</code>, as follows:</p><div class="language-json5 vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">json5</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// package.json</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">{</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">    &quot;name&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;hello-world&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">    &quot;panels&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: {</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">        &quot;default&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: {</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">            &quot;main&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;./panel.js&quot;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">        }</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    },</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">    &quot;contributions&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: {</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">        &quot;messages&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: {</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">            &quot;undo&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: {</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">                &quot;title&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;i18n:hello.messages.undo.title&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">                &quot;methods&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: [</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;say-undo&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">]</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">            }</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">        },</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">        &quot;shortcuts&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: [</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">            {</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">                &quot;message&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;undo&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">                &quot;when&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;panelName === &#39;hello-world&#39;&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">                &quot;win&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;ctrl+z&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">                &quot;mac&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;cmd+z&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">            }</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">        ]</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    }</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">}</span></span></code></pre></div><p>In this example, we define a shortcut key for the <strong>undo</strong> operation, which is <code>CTRL + Z</code> on Windows and <code>CMD + Z</code> on macOS.</p><p>When the corresponding shortcut key is pressed, the <code>undo</code> message is sent.</p><blockquote><p><strong>Note</strong>: This message needs to be defined in <code>contributions.messages</code>, please refer to the documentation <a href="./contributions-messages">Customized Messages</a>.</p></blockquote><h2 id="parameter-descriptions" tabindex="-1">Parameter descriptions <a class="header-anchor" href="#parameter-descriptions" aria-label="Permalink to &quot;Parameter descriptions&quot;">​</a></h2><p>Below we will see the details of each parameter of <code>contributions.shortcuts</code>.</p><h3 id="message" tabindex="-1">message <a class="header-anchor" href="#message" aria-label="Permalink to &quot;message&quot;">​</a></h3><p>Type {string} Required</p><p>Shortcut-bound message that will be sent when this shortcut is triggered. Shortcut pressed messages can only be sent to the current extension.</p><h3 id="when" tabindex="-1">when <a class="header-anchor" href="#when" aria-label="Permalink to &quot;when&quot;">​</a></h3><p>Type {string} Optional</p><p>The shortcut will be triggered only under certain conditions.</p><p><code>&quot;when&quot;: &quot;PanelName === &#39;hello-world&#39;&quot;</code> means that the <code>message</code> message will be sent when the shortcut key is pressed when the panel name that gets focus is <code>hello-world</code>.</p><h3 id="win" tabindex="-1">win <a class="header-anchor" href="#win" aria-label="Permalink to &quot;win&quot;">​</a></h3><p>type {string} required</p><p>On Windows platform, the keystroke to listen to.</p><h3 id="mac" tabindex="-1">mac <a class="header-anchor" href="#mac" aria-label="Permalink to &quot;mac&quot;">​</a></h3><p>Type {string} Required</p><p>On macOS, the keystroke to listen to.</p>`,23),h=[n];function o(l,p,r,k,d,E){return a(),i("div",null,h)}const g=s(e,[["render",o]]);export{u as __pageData,g as default};