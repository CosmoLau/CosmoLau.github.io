import{_ as t,c as e,o as i,a4 as a}from"./chunks/framework.uQk9_EO2.js";const s="/docs/cocos/assets/richtext.Dif1OEAo.png",o="/docs/cocos/assets/example-components.kyiIcWYr.png",l="/docs/cocos/assets/example-string.Cxd1aXL4.png",n="/docs/cocos/assets/example-running.wOnUc8VW.png",d="/docs/cocos/assets/example-console.C_ixWh0n.png",b=JSON.parse('{"title":"RichText Component Reference","description":"","frontmatter":{},"headers":[],"relativePath":"en/ui-system/components/editor/richtext.md","filePath":"en/ui-system/components/editor/richtext.md","lastUpdated":1712336288000}'),r={name:"en/ui-system/components/editor/richtext.md"},h=a('<h1 id="richtext-component-reference" tabindex="-1">RichText Component Reference <a class="header-anchor" href="#richtext-component-reference" aria-label="Permalink to &quot;RichText Component Reference&quot;">​</a></h1><p>RichText component could be used for displaying a string with multiple styles. You could customize the text style of each text segment with a few simple BBCode.</p><p>The currently supported tags are: <code>color</code>, <code>size</code>, <code>outline</code>, <code>b</code>, <code>i</code>, <code>u</code>, <code>br</code>, <code>img</code> and <code>on</code>, these tags could also be nested within each other.</p><p>For more information about BBCode, please refer to the <strong>BBCode format</strong> section below.</p><p><img src="'+s+'" alt="richtext"></p><p>Click the <strong>Add Component</strong> button at the bottom of the <strong>Inspector</strong> panel and select <strong>RichText</strong> from <strong>UI -&gt; Render</strong> to add the RichText component to the node.</p><p>To use <code>RichText</code>, please refer to the <a href="./__APIDOC__/en/class/RichText">RichText API</a> documentation and the <a href="https://github.com/cocos/cocos-test-projects/tree/v3.8/assets/cases/ui/07.richtext" target="_blank" rel="noreferrer">RichText</a> scene of the test-cases-3d project.</p><h2 id="richtext-properties" tabindex="-1">RichText Properties <a class="header-anchor" href="#richtext-properties" aria-label="Permalink to &quot;RichText Properties&quot;">​</a></h2><table><thead><tr><th>Property</th><th>Function Explanation</th></tr></thead><tbody><tr><td>Font</td><td>Custom TTF font of <strong>RichText</strong>, all the label segments will use the same custom TTF font.</td></tr><tr><td>FontSize</td><td>Font size, in points (<strong>Note</strong>: this field does not affect the font size set in BBCode.)</td></tr><tr><td>HandleTouchEvent</td><td>Once checked, the <strong>RichText</strong> will block all input events (mouse and touch) within the bounding box of the node, preventing the input from penetrating into the underlying node.</td></tr><tr><td>Horizontal Align</td><td>Horizontal alignment</td></tr><tr><td>Vertical Align</td><td>Vertical alignment</td></tr><tr><td>ImageAtlas</td><td>The image atlas for the <code>img</code> tag. For each <code>src</code> value in the <code>img</code> tag, there should be a valid <code>spriteFrame</code> in the imageAtlas.</td></tr><tr><td>Font Family</td><td>Custom system font of RichText.</td></tr><tr><td>Use System Font</td><td>Whether to use the system default font.</td></tr><tr><td>MaxWidth</td><td>The maximize width of <strong>RichText</strong>, set to 0 means the maximize width is not limited.</td></tr><tr><td>LineHeight</td><td>Line height, in points.</td></tr><tr><td>String</td><td>Text of the <strong>RichText</strong>, you could use BBcode in the string.</td></tr></tbody></table><h2 id="bbcode-format" tabindex="-1">BBCode format <a class="header-anchor" href="#bbcode-format" aria-label="Permalink to &quot;BBCode format&quot;">​</a></h2><h3 id="basics" tabindex="-1">Basics <a class="header-anchor" href="#basics" aria-label="Permalink to &quot;Basics&quot;">​</a></h3><p>Currently the supported tag list is: <code>size</code>, <code>color</code>, <code>b</code>, <code>i</code>, <code>u</code>, <code>img</code> and <code>on</code>. There are used for customizing the font size, font color, bold, italic, underline, image and click event. Every tag should has a start tag and an end tag. The name and attribute format of the start tag must meet the requirements and be all lowercase.</p><p>It will check the start tag name, but the end tag name restrict is loose, it only requires a <code>&lt;/&gt;</code> tag, the end tags name doesn&#39;t matter.</p><p>Here is an example of the <code>size</code> and <code>color</code> tag:</p><p><code>&lt;color=green&gt;Hello&lt;/color&gt;, &lt;size=50&gt;Creator&lt;/size&gt;</code></p><h3 id="supported-tags" tabindex="-1">Supported tags <a class="header-anchor" href="#supported-tags" aria-label="Permalink to &quot;Supported tags&quot;">​</a></h3><blockquote><p><strong>Note</strong>: all tag names should be lowercase and the attribute assignment should use <code>=</code> sign.</p></blockquote><table><thead><tr><th style="text-align:left;">Name</th><th style="text-align:left;">Description</th><th style="text-align:left;">Example</th><th style="text-align:left;">Note</th></tr></thead><tbody><tr><td style="text-align:left;">color</td><td style="text-align:left;">Specify the font rendering color, the color value could be a built-in value or a hex value. eg, use <code>#ff0000</code> for red.</td><td style="text-align:left;"><code>&lt;color=#ff0000&gt;Red Text&lt;/color&gt;</code></td><td style="text-align:left;"></td></tr><tr><td style="text-align:left;">size</td><td style="text-align:left;">Specify the font rendering size, the size should be a integer.</td><td style="text-align:left;"><code>&lt;size=30&gt;enlarge me&lt;/size&gt;</code></td><td style="text-align:left;">The size assignment should use <code>=</code> sign.</td></tr><tr><td style="text-align:left;">outline</td><td style="text-align:left;">Specify the font outline, you could customize the outline color and width by using the <code>color</code> and <code>width</code> attribute.</td><td style="text-align:left;"><code>&lt;outline color=red width=4&gt;A label with outline&lt;/outline&gt;</code></td><td style="text-align:left;">If you don&#39;t specify the color or width of outline, the default color value is <code>#ffffff</code> and the default width is <code>1</code>.</td></tr><tr><td style="text-align:left;">b</td><td style="text-align:left;">Render text as bold font</td><td style="text-align:left;"><code>&lt;b&gt;This text will be rendered as bold&lt;/b&gt;</code></td><td style="text-align:left;">The tag name must be lowercase and cannot be written in <code>bold</code>.</td></tr><tr><td style="text-align:left;">i</td><td style="text-align:left;">Render text as italic font</td><td style="text-align:left;"><code>&lt;i&gt;This text will be rendered as italic&lt;/i&gt;</code></td><td style="text-align:left;">The tag name must be lowercase and cannot be written in <code>italic</code>.</td></tr><tr><td style="text-align:left;">u</td><td style="text-align:left;">Add a underline to the text</td><td style="text-align:left;"><code>&lt;u&gt;This text will have a underline&lt;/u&gt;</code></td><td style="text-align:left;">The tag name must be lowercase and cannot be written in <code>underline</code>.</td></tr><tr><td style="text-align:left;">on</td><td style="text-align:left;">Specify a event callback to a text node, when you click the node, the callback will be triggered.</td><td style="text-align:left;"><code>&lt;on click=&quot;handler&quot;&gt; click me! &lt;/on&gt;</code></td><td style="text-align:left;">Except for <code>on</code> tag, <code>color</code> and <code>size</code> tags can also add <code>click</code> event parameter. eg. <code>&lt;size=10 click=&quot;handler2&quot;&gt;click me&lt;/size&gt;</code></td></tr><tr><td style="text-align:left;">param</td><td style="text-align:left;">When the click event is triggered, the value can be obtained in the second attribute of the callback function.</td><td style="text-align:left;"><code>&lt;on click=&quot;handler&quot; param=&quot;test&quot;&gt; click me! &lt;/on&gt;</code></td><td style="text-align:left;">Depends on the click event.</td></tr><tr><td style="text-align:left;">br</td><td style="text-align:left;">Insert a empty line</td><td style="text-align:left;"><code>&lt;br/&gt;</code></td><td style="text-align:left;"><code>&lt;br&gt;&lt;/br&gt;</code> and <code>&lt;br&gt;</code> are both invalid tags.</td></tr><tr><td style="text-align:left;">img</td><td style="text-align:left;">Add image and emoji support to your <strong>RichText</strong>. The emoji name should be a valid sprite frame name in the ImageAtlas.</td><td style="text-align:left;"><code>&lt;img src=&#39;emoji1&#39; click=&#39;handler&#39; /&gt;</code></td><td style="text-align:left;">Only <code>&lt;img src=&#39;foo&#39; click=&#39;bar&#39; /&gt;</code> is a valid img tag. If you specify a large emoji image, it will scale the sprite height to the line height of the <strong>RichText</strong> together with the sprite width.</td></tr></tbody></table><h4 id="optional-attributes-of-img-tag" tabindex="-1">Optional attributes of img tag <a class="header-anchor" href="#optional-attributes-of-img-tag" aria-label="Permalink to &quot;Optional attributes of img tag&quot;">​</a></h4><p>For better typography, additional optional attributes to the img tag have been provided. Developers can use <code>width</code>, <code>height</code> to specify the size of the SpriteFrame. This will allow the image to be larger or smaller than the line height (but it will not change the line height).</p><p>When the height or width of the SpriteFrame changes, The <code>align</code> attribute may need to be used to adjust the alignment of the image in the line.</p><table><thead><tr><th style="text-align:left;">Attribute</th><th style="text-align:left;">Description</th><th style="text-align:left;">Example</th><th style="text-align:left;">Note</th></tr></thead><tbody><tr><td style="text-align:left;">height</td><td style="text-align:left;">Specify the SpriteFrame height size, the size should be a integer.</td><td style="text-align:left;"><code>&lt;img src=&#39;foo&#39; height=50 /&gt;</code></td><td style="text-align:left;">If you only assign height the SpriteFrame will auto keep aspect-ratio</td></tr><tr><td style="text-align:left;">width</td><td style="text-align:left;">Specify the SpriteFrame width size, the size should be a integer.</td><td style="text-align:left;"><code>&lt;img src=&#39;foo&#39; width=50 /&gt;</code></td><td style="text-align:left;">Use both Height and Width <code>&lt;img src=&#39;foo&#39; width=20 height=30 /&gt;</code></td></tr><tr><td style="text-align:left;">align</td><td style="text-align:left;">Specify the SpriteFrame alignment in line, the value should be <code>bottom</code>, <code>top</code> or <code>center</code>.</td><td style="text-align:left;"><code>&lt;img src=&#39;foo&#39; align=center /&gt;</code></td><td style="text-align:left;">Default SpriteFrame alignment will be bottom</td></tr></tbody></table><p>To support custom image layout, the <code>offset</code> attribute can be used to fine-tune the position of the specified SpriteFrame in the RichText component. When setting the <code>offset</code> attribute, keep in mind that the value must be an integer, and it will cause the image to overlap the text if it is not set properly.</p><table><thead><tr><th style="text-align:left;"><code>offset</code> attribute</th><th style="text-align:left;">Example</th><th style="text-align:left;">Description</th><th style="text-align:left;">Note</th></tr></thead><tbody><tr><td style="text-align:left;">Y</td><td style="text-align:left;"><code>&lt;img src=&#39;foo&#39; offset=5 /&gt;</code></td><td style="text-align:left;">Specify the SpriteFrame to offset y + 5</td><td style="text-align:left;">If offset only set one Integer value it&#39;s will be offset Y</td></tr><tr><td style="text-align:left;">Y</td><td style="text-align:left;"><code>&lt;img src=&#39;foo&#39; offset=-5 /&gt;</code></td><td style="text-align:left;">Specify the SpriteFrame to offset y - 5</td><td style="text-align:left;">Use minus to decrease Y position</td></tr><tr><td style="text-align:left;">X, Y</td><td style="text-align:left;"><code>&lt;img src=&#39;foo&#39; offset=6,-5 /&gt;</code></td><td style="text-align:left;">Specify the SpriteFrame to offset x + 6 and y - 5</td><td style="text-align:left;">The offset values should only contains <code>0-9</code>, <code>-</code> and <code>,</code> characters</td></tr></tbody></table><h3 id="nested-tags" tabindex="-1">Nested Tags <a class="header-anchor" href="#nested-tags" aria-label="Permalink to &quot;Nested Tags&quot;">​</a></h3><p>Tags could be nested, the rules is the same as normal HTML tags. For example, the following settings will render a label with font size 30 and color value green.</p><p><code>&lt;size=30&gt;&lt;color=green&gt;I&#39;m green&lt;/color&gt;&lt;/size&gt;</code></p><p>is equal to:</p><p><code>&lt;color=green&gt;&lt;size=30&gt;I&#39;m green&lt;/size&gt;&lt;/color&gt;</code></p><h2 id="cache-mode" tabindex="-1">Cache Mode <a class="header-anchor" href="#cache-mode" aria-label="Permalink to &quot;Cache Mode&quot;">​</a></h2><p>Since the RichText component is assembled from multiple Label nodes, the number of drawcalls for complex rich text will also be high. Therefore, the engine provides the CacheMode setting of the Label component for the RichText component to avoid the increase of drawcall. For a detailed description of each cache type, please refer to the <a href="./label">Cache Mode of the Label component</a> documentation.</p><table><thead><tr><th style="text-align:left;">Mode</th><th style="text-align:left;">Description</th></tr></thead><tbody><tr><td style="text-align:left;"><strong>NONE</strong></td><td style="text-align:left;">By default, for each Label node created by RichText, set its CacheMode to NONE, that is, generate a bitmap of the entire text of each Label and render it separately.</td></tr><tr><td style="text-align:left;"><strong>BITMAP</strong></td><td style="text-align:left;">After selection, for each Label node created by RichText, set its CacheMode to BITMAP type, that is, generate a bitmap of the entire text of each Label, and add the bitmap to the dynamic atlas, and then according to the dynamic atlas to assemble and render.</td></tr><tr><td style="text-align:left;"><strong>CHAR</strong></td><td style="text-align:left;">After selection, each Label node created by RichText has its CacheMode set to CHAR type, that is, the text of each Label is cached in a globally shared bitmap in &quot;words&quot;. Each of the same font style and size is Characters will share a cache globally.</td></tr></tbody></table><blockquote><p><strong>Note</strong>: the <strong>RenderTexture</strong> module in the <strong>Project -&gt; Project Settings -&gt; Module Config</strong> panel cannot be removed when using the cache mode.</p></blockquote><h2 id="detailed-explanation" tabindex="-1">Detailed Explanation <a class="header-anchor" href="#detailed-explanation" aria-label="Permalink to &quot;Detailed Explanation&quot;">​</a></h2><p>The <strong>RichText</strong> component is implemented in the JavaScript layer and uses the Label node as the rendering part. All the layout logic goes also in JavaScript layer. This means if you create a very complex <strong>RichText</strong>, it will end up with many label node created under the hook. And all these label node are using system font for rendering.</p><p>Avoid modifying the <strong>RichText</strong> content frequently in the game&#39;s main loop, which can lead to lower performance. Also, try to use the normal Label component instead of the <strong>RichText</strong> component if possible, and BMFont is the most efficient.</p><h2 id="example" tabindex="-1">Example <a class="header-anchor" href="#example" aria-label="Permalink to &quot;Example&quot;">​</a></h2><h3 id="on" tabindex="-1">on <a class="header-anchor" href="#on" aria-label="Permalink to &quot;on&quot;">​</a></h3><p>Let&#39;s take the <code>on</code> tag as an example. Please create a new RichText node, and a custom script component, and attach it to the rich text node.</p><p><img src="'+o+'" alt="richText"></p><p>Copy the following text to the <strong>String</strong> property of the RichText Component.</p><div class="language-html vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">html</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&lt;</span><span style="--shiki-light:#B31D28;--shiki-dark:#FDAEB7;--shiki-light-font-style:italic;--shiki-dark-font-style:italic;">on</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> click</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;onClicked&quot;</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> param</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;hello world&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;Click Me!&lt;/</span><span style="--shiki-light:#B31D28;--shiki-dark:#FDAEB7;--shiki-light-font-style:italic;--shiki-dark-font-style:italic;">on</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;</span></span></code></pre></div><p><img src="'+l+`" alt="example-string.png"></p><p>Copy the following code to your custom script.</p><div class="language-ts vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">ts</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">import</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> { _decorator, Component, EventTouch } </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">from</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &#39;cc&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">const</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> { </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">ccclass</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">property</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> } </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> _decorator;</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">@</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">ccclass</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;ClickEventHandler&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">)</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">export</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> class</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> ClickEventHandler</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> extends</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> Component</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> {</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">    onClicked</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">eventTouch</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">:</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">EventTouch</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">param</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">:</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">string</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">){</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">        console.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">log</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;onClicked&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, param);</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    }</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">}</span></span></code></pre></div><p>Then run the game.</p><p><img src="`+n+'" alt="example-running.png"></p><p>Click the RichText on the screen, and you can see the following output in the console.</p><p><img src="'+d+'" alt="example-console.png"></p>',49),c=[h];function g(p,f,m,y,u,k){return i(),e("div",null,c)}const E=t(r,[["render",g]]);export{b as __pageData,E as default};