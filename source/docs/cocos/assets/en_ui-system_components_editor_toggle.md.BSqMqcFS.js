import{_ as s,c as i,o as a,a4 as e}from"./chunks/framework.uQk9_EO2.js";const t="/docs/cocos/assets/toggle.D5Sz0Bdk.png",n="/docs/cocos/assets/toggle-node-tree.BIj05UCe.png",F=JSON.parse('{"title":"Toggle Component Reference","description":"","frontmatter":{},"headers":[],"relativePath":"en/ui-system/components/editor/toggle.md","filePath":"en/ui-system/components/editor/toggle.md","lastUpdated":1712305443000}'),h={name:"en/ui-system/components/editor/toggle.md"},l=e('<h1 id="toggle-component-reference" tabindex="-1">Toggle Component Reference <a class="header-anchor" href="#toggle-component-reference" aria-label="Permalink to &quot;Toggle Component Reference&quot;">​</a></h1><p>The Toggle component is a CheckBox, when it&#39;s used together with a ToggleContainer, it could be treated as a RadioButton.</p><p><img src="'+t+'" alt="toggle1"></p><p>Click the <strong>Add Component</strong> button at the bottom of the <strong>Inspector</strong> panel and select <strong>UI/Toggle</strong> to add the Toggle component to the node.</p><p>To use <code>Toggle</code>, please refer to the <a href="./__APIDOC__/en/class/Toggle">Toggle API</a> documentation and the <a href="https://github.com/cocos/cocos-test-projects/tree/v3.8/assets/cases/ui/09.toggle" target="_blank" rel="noreferrer">Toggle</a> scene of the test-cases-3d project.</p><h2 id="toggle-properties" tabindex="-1">Toggle Properties <a class="header-anchor" href="#toggle-properties" aria-label="Permalink to &quot;Toggle Properties&quot;">​</a></h2><table><thead><tr><th>Property</th><th>Function Explanation</th></tr></thead><tbody><tr><td>IsChecked</td><td>Boolean type. When set to true, enable the check mark component</td></tr><tr><td>CheckMark</td><td>Sprite type. The image displayed when Toggle is selected</td></tr><tr><td>CheckEvents</td><td>List type, default is null. Each event added by the user is composed of the node reference, component name and a response function. Please see the <strong>Toggle Event</strong> section below for details</td></tr></tbody></table><blockquote><p><strong>Note</strong>: because Toggle is inherited from Button, so the properties exists in Button also apply to Toggle, please refer to the <a href="./button">Button Component</a> for details.</p></blockquote><h2 id="toggle-event" tabindex="-1">Toggle Event <a class="header-anchor" href="#toggle-event" aria-label="Permalink to &quot;Toggle Event&quot;">​</a></h2><p>For event structure you can refer to the <a href="./button">Button</a> documentation.</p><p>The Toggle event callback has two parameters, the first one is the Toggle itself and the second is the <code>customEventData</code>.</p><h2 id="detailed-explanation" tabindex="-1">Detailed Explanation <a class="header-anchor" href="#detailed-explanation" aria-label="Permalink to &quot;Detailed Explanation&quot;">​</a></h2><p>The generic node hierarchy of Toggle is as below:</p><p><img src="'+n+`" alt="toggle-node-tree"></p><blockquote><p><strong>Note</strong>: the checkMark node needs to be placed on the upper level of the background node in the <strong>Scene</strong>.</p></blockquote><h2 id="add-a-callback-through-the-script-code" tabindex="-1">Add a callback through the script code <a class="header-anchor" href="#add-a-callback-through-the-script-code" aria-label="Permalink to &quot;Add a callback through the script code&quot;">​</a></h2><h3 id="method-one" tabindex="-1">Method one <a class="header-anchor" href="#method-one" aria-label="Permalink to &quot;Method one&quot;">​</a></h3><p>The event callback added by this method is the same as the event callback added by the editor, all added by code. First you need to construct a <code>EventHandler</code> object, and then set the corresponding <code>target</code>, <code>component</code>, <code>handler</code> and <code>customEventData</code> parameters.</p><div class="language-ts vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">ts</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">import</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> { _decorator, Component, Event, Node, ToggleComponent, EventHandler } </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">from</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &#39;cc&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">const</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> { </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">ccclass</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">property</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> } </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> _decorator;</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">@</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">ccclass</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;example&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">)</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">export</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> class</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> example</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> extends</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> Component</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> {</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">    onLoad</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(){</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">        const</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> checkEventHandler</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> =</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> new</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> EventHandler</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">();</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">        // This Node is the node to which your event processing code component belongs</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">        checkEventHandler.target </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> this</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">.node;</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">        // This is the script class name</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">        checkEventHandler.component </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &#39;example&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">        checkEventHandler.handler </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &#39;callback&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">        checkEventHandler.customEventData </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &#39;foobar&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">        const</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> toggle</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> =</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> this</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">.node.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">getComponent</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(ToggleComponent);</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">        toggle.checkEvents.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">push</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(checkEventHandler);</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    }</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">    callback</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">event</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">:</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> Event</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">customEventData</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">:</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> string</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">){</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">        // The event here is a Touch Event object, and you can get the send node of the event by event.target</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">        // The customEventData parameter here is equal to the &quot;foobar&quot; you set before</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    }</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">}</span></span></code></pre></div><h3 id="method-two" tabindex="-1">Method two <a class="header-anchor" href="#method-two" aria-label="Permalink to &quot;Method two&quot;">​</a></h3><p>Added by the way of <code>toggle.node.on(&#39;toggle&#39;, ...)</code>.</p><div class="language-js vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// // Suppose we add an event handler callback inside a component&#39;s onLoad method and event handlers in the callback function:</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">import</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> { _decorator, Component, ToggleComponent } </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">from</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &#39;cc&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">const</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> { </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">ccclass</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">property</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> } </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> _decorator;</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">@</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">ccclass</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;example&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">)</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">export</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> class</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> example</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> extends</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> Component</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> {</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    @</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">property</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(ToggleComponent)</span></span>
<span class="line"><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">    toggle</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">:</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> ToggleComponent</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> |</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> null</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> =</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> null</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">    onLoad</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(){</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">       this</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">.toggle.node.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">on</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;toggle&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">this</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">.callback, </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">this</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">);</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    }</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">    callback</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">toggle</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">:</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> ToggleComponent</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">){</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">        // The callback parameter is the Toggle component, note that events registered this way cannot pass customEventData.</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    }</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">}</span></span></code></pre></div>`,22),p=[l];function k(o,r,d,g,c,E){return a(),i("div",null,p)}const m=s(h,[["render",k]]);export{F as __pageData,m as default};