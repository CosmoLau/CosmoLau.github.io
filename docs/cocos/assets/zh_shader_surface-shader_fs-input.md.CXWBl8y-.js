import{_ as s,c as a,o as t,a4 as i}from"./chunks/framework.uQk9_EO2.js";const g=JSON.parse('{"title":"Fragment Shader 的输入值","description":"","frontmatter":{},"headers":[],"relativePath":"zh/shader/surface-shader/fs-input.md","filePath":"zh/shader/surface-shader/fs-input.md","lastUpdated":1712305443000}'),e={name:"zh/shader/surface-shader/fs-input.md"},n=i(`<h1 id="fragment-shader-的输入值" tabindex="-1">Fragment Shader 的输入值 <a class="header-anchor" href="#fragment-shader-的输入值" aria-label="Permalink to &quot;Fragment Shader 的输入值&quot;">​</a></h1><h2 id="内置输入列表" tabindex="-1">内置输入列表 <a class="header-anchor" href="#内置输入列表" aria-label="Permalink to &quot;内置输入列表&quot;">​</a></h2><p>Vertex Shader 向 Fragment Shader 传递了许多常用变量，列表如下：</p><table><thead><tr><th>Fragment Shader 输入值</th><th>类型</th><th>使用时需要开启的宏</th><th>含义</th></tr></thead><tbody><tr><td>FSInput_worldPos</td><td>vec3</td><td>N/A</td><td>World Position 世界坐标</td></tr><tr><td>FSInput_worldNormal</td><td>vec3</td><td>N/A</td><td>World Normal 世界法线</td></tr><tr><td>FSInput_faceSideSign</td><td>float</td><td>N/A</td><td>Two Side Sign 物理正反面标记，可用于双面材质</td></tr><tr><td>FSInput_texcoord</td><td>vec2</td><td>N/A</td><td>UV0</td></tr><tr><td>FSInput_texcoord1</td><td>vec2</td><td>N/A</td><td>UV1</td></tr><tr><td>FSInput_vertexColor</td><td>vec4</td><td>N/A</td><td>Vertex Color 顶点颜色</td></tr><tr><td>FSInput_worldTangent</td><td>vec3</td><td>N/A</td><td>World Tangent 世界切线</td></tr><tr><td>FSInput_mirrorNormal</td><td>float</td><td>N/A</td><td>Mirror Normal Sign 镜像法线标记</td></tr><tr><td>FSInput_localPos</td><td>vec4</td><td>CC_SURFACES_TRANSFER_LOCAL_POS</td><td>Local Position 局部坐标</td></tr><tr><td>FSInput_clipPos</td><td>vec4</td><td>CC_SURFACES_TRANSFER_CLIP_POS</td><td>Clip Position 投影/裁切空间坐标</td></tr></tbody></table><h2 id="宏开关" tabindex="-1">宏开关 <a class="header-anchor" href="#宏开关" aria-label="Permalink to &quot;宏开关&quot;">​</a></h2><p>当需要使用带有宏开关的输入参数时，需要在 macro-remapping 代码段中开启相应的宏，示例代码如下：</p><div class="language-glsl vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">glsl</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">CCProgram macro</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">-</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">remapping </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">%</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">{</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    ...</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">    //使用 FSInput_localPos</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">    #define</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> CC_SURFACES_TRANSFER_LOCAL_POS</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> 1</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">    //使用 FSInput_clipPos</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">    #define</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> CC_SURFACES_TRANSFER_CLIP_POS</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> 1</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    ...</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">}</span></span></code></pre></div><h2 id="使用说明" tabindex="-1">使用说明 <a class="header-anchor" href="#使用说明" aria-label="Permalink to &quot;使用说明&quot;">​</a></h2><p>在任意函数中直接调用即可。</p><h2 id="自定义传递值" tabindex="-1">自定义传递值 <a class="header-anchor" href="#自定义传递值" aria-label="Permalink to &quot;自定义传递值&quot;">​</a></h2><p>在制作一些特殊效果时，需要 Vertex Shader 向 Fragment Shader 传递更多信息，此时需要我们自定义传递变量。</p><p>新增一个自定义的传递变量非常简单，我们以新增一个 testVec3 为例。</p><p>首先，在 Vertex Shader 中声明一个带 out 标记的变量，示例代码如下：</p><div class="language-glsl vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">glsl</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">CCProgram surface</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">-</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">vertex </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">%</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">{</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    ...</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    out vec3 testVec3;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    ...</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">}</span></span></code></pre></div><p>再在 Fragment Shader 声明对应的带 in 标记的变量即可，示例代码如下：</p><div class="language-glsl vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">glsl</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">CCProgram surface</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">-</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">fragment </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">%</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">{</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    ...</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    in vec3 testVec3;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    ...</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">}</span></span></code></pre></div><p>接下来就可以在 Fragment Shader 的代码中使用 testVec3 了。</p>`,17),d=[n];function l(h,p,r,k,o,c){return t(),a("div",null,d)}const _=s(e,[["render",l]]);export{g as __pageData,_ as default};