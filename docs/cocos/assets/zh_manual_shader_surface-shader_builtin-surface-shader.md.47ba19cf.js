import{_ as s,v as a,b as n,R as p}from"./chunks/framework.5ffcbaff.js";const d=JSON.parse('{"title":"内置 Surface Shader 导读","description":"","frontmatter":{},"headers":[],"relativePath":"zh/manual/shader/surface-shader/builtin-surface-shader.md","filePath":"zh/manual/shader/surface-shader/builtin-surface-shader.md"}'),l={name:"zh/manual/shader/surface-shader/builtin-surface-shader.md"},e=p(`<h1 id="内置-surface-shader-导读" tabindex="-1">内置 Surface Shader 导读 <a class="header-anchor" href="#内置-surface-shader-导读" aria-label="Permalink to &quot;内置 Surface Shader 导读&quot;">​</a></h1><p>Cocos Creator 3.7.2 版本开始， builtin-standard.effect 使用 Surface Shader 架构实现。</p><p>本文以 builtin-standard.effect 作为典型案例，讲解 Surface Shader 细节。</p><p>你可以属性 Surface Shader 结构定义、语法细节以及渲染流程。</p><p>下面的内容，建议配合 internal/effects/builtin-standard.effect 一起阅读。</p><h2 id="基本结构" tabindex="-1">基本结构 <a class="header-anchor" href="#基本结构" aria-label="Permalink to &quot;基本结构&quot;">​</a></h2><p>Surface Shader 代码通常由几个部分组成：</p><ul><li>信息描述（<code>CCEffect</code>）：描述此 Shader 的技术、渲染过程组成部分，以及每个渲染过程使用的 Shader、渲染状态、属性等。</li><li>共享常量（<code>Shared UBOs</code>）：把 vs 和 fs 都需要用到的 uniforms 定义在一起，方便管理。</li><li>宏映射（<code>Macro Remapping</code>）：处理一些宏定义，以及映射一些内部宏，使其可以显示到材质面板上。</li><li>函数（<code>Surface Functions</code>）：用于声明表面材质信息相关的 Surface 函数。</li><li>组装器（<code>Shader Assembly</code>）：用于组装每个顶点着色器（Vertex Shader）和片元着色器（Fragment Shader）的代码模块。</li></ul><p>可前往 <a href="./surface-shader-structure.html">Surface Shader 基本结构</a> 了解更多详情。</p><h2 id="cceffect" tabindex="-1">CCEffect <a class="header-anchor" href="#cceffect" aria-label="Permalink to &quot;CCEffect&quot;">​</a></h2><p>一个物体被渲染到屏幕上，需要以下信息：</p><ul><li>模型数据（顶点、UV、法线等）</li><li>光照信息</li><li>世界空间（旋转、平移、缩放）信息</li><li>绘制过程（材质）</li><li>渲染状态（材质）</li><li>纹理（材质）</li><li>Uniform（材质）</li><li>Shader 代码（材质）</li></ul><p>其中模型数据、光照信息、世界空间信息与材质无关，而 纹理、Uniform、渲染状态、Shader 代码、绘制过程 则属于材质信息。</p><p>CCEffect 则描述了以上材质相关信息，并且与引擎渲染管线共同完成一个模型的渲染流程。</p><h3 id="渲染技术-technique" tabindex="-1">渲染技术（technique） <a class="header-anchor" href="#渲染技术-technique" aria-label="Permalink to &quot;渲染技术（technique）&quot;">​</a></h3><p>内置的 Surface Shader 实现了 <code>opaque</code> 和 <code>transparent</code> 两种渲染技术，前者用于渲染非透明物体，后者用于渲染半透明物体。</p><h3 id="渲染过程-passes" tabindex="-1">渲染过程（passes） <a class="header-anchor" href="#渲染过程-passes" aria-label="Permalink to &quot;渲染过程（passes）&quot;">​</a></h3><p>内置的 Surface Shader 的每一个技术，只有一个 pass，且均为 PBR。</p><p>抛开其余细节，我们可以看到整个 Surface Shader 的信息描述如下：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">CCEffect %{</span></span>
<span class="line"><span style="color:#A6ACCD;">  techniques:</span></span>
<span class="line"><span style="color:#A6ACCD;">  - name: opaque</span></span>
<span class="line"><span style="color:#A6ACCD;">    passes:</span></span>
<span class="line"><span style="color:#A6ACCD;">    - vert: standard-vs</span></span>
<span class="line"><span style="color:#A6ACCD;">      frag: standard-fs</span></span>
<span class="line"><span style="color:#A6ACCD;">      properties: &amp;props</span></span>
<span class="line"><span style="color:#A6ACCD;">        ...</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">  - name: transparent</span></span>
<span class="line"><span style="color:#A6ACCD;">    passes:</span></span>
<span class="line"><span style="color:#A6ACCD;">    - vert: standard-vs</span></span>
<span class="line"><span style="color:#A6ACCD;">      frag: standard-fs</span></span>
<span class="line"><span style="color:#A6ACCD;">      ...</span></span>
<span class="line"><span style="color:#A6ACCD;">      properties: *props</span></span>
<span class="line"><span style="color:#A6ACCD;">}%</span></span></code></pre></div><h3 id="shader-入口-vert-与-frag" tabindex="-1">Shader 入口（vert 与 frag） <a class="header-anchor" href="#shader-入口-vert-与-frag" aria-label="Permalink to &quot;Shader 入口（vert 与 frag）&quot;">​</a></h3><p><code>opaque</code> 和 <code>transparent</code> 在渲染效果上完全一致，差异仅仅是渲染状态。</p><p>可以看到，它们使用同样的 vert 和 frag 入口。</p><div class="language-glsl"><button title="Copy Code" class="copy"></button><span class="lang">glsl</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#89DDFF;">-</span><span style="color:#A6ACCD;"> vert: standard</span><span style="color:#89DDFF;">-</span><span style="color:#A6ACCD;">vs</span></span>
<span class="line"><span style="color:#A6ACCD;">  frag: standard</span><span style="color:#89DDFF;">-</span><span style="color:#A6ACCD;">fs</span></span></code></pre></div><h3 id="属性-properties" tabindex="-1">属性（properties） <a class="header-anchor" href="#属性-properties" aria-label="Permalink to &quot;属性（properties）&quot;">​</a></h3><p>由于 <code>opaque</code> 和 <code>transparent</code> 在渲染效果上完全一致，Shader 代码也是用的同一样，所以涉及到的属性也就完全一样。</p><p>所有渲染过程中用到的属性集中放在了 properties 字段里。关于属性的语法，可以查看 <a href="./../pass-parameter-list.html">Pass 可选配置参数</a></p><h3 id="配置复用" tabindex="-1">配置复用 <a class="header-anchor" href="#配置复用" aria-label="Permalink to &quot;配置复用&quot;">​</a></h3><p>在属性配置中，可以看到， opaque 的属性定义为 <code>properties: &amp;props</code>，而 <code>transparent</code> 的属性定义为 <code>properties: *props</code>。</p><p>这是一个属性命名和复用机制。</p><p><code>properties: &amp;props</code> 的含义是为当前 <code>properties</code> 起名为 <code>props</code>。</p><p><code>properties: *props</code> 的含义是使用名为 <code>props</code> 的属性块填充当前 <code>properties</code>。</p><p>上面的配置结果为：<code>transparent</code> 直接使用 <code>opaque</code> 的 <code>properties</code> 字段。</p><h3 id="用于特定阶段-phase" tabindex="-1">用于特定阶段（phase） <a class="header-anchor" href="#用于特定阶段-phase" aria-label="Permalink to &quot;用于特定阶段（phase）&quot;">​</a></h3><p>默认情况下， Surface Shader 会参与到场景渲染阶段。 但也有一些特殊的场合，比如 阴影，反射探针烘焙 等。</p><p>针对这类需求，我们可以添加特定的渲染过程（pass），并标记参与的阶段（phase）来实现目的。</p><p>当 Cocos 引擎的渲染器在执行渲染时，会获取到材质中相应 phase 的 pass，用于渲染。 如果没有，表示此物体不参与这个阶段。</p><p>如 Surface Shader 中的：</p><ul><li>forward-add：用于附加光照阶段，当物体受主光源以外的光源影响时，会调用这个。</li><li>shadow-caster：用于阴影图渲染阶段</li><li>reflect-map：用于环境反射探针烘焙阶段</li></ul><div class="language-ts"><button title="Copy Code" class="copy"></button><span class="lang">ts</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#89DDFF;">-</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&amp;</span><span style="color:#A6ACCD;">forward</span><span style="color:#89DDFF;">-</span><span style="color:#A6ACCD;">add</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#FFCB6B;">vert</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> standard</span><span style="color:#89DDFF;">-</span><span style="color:#A6ACCD;">vs</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#FFCB6B;">frag</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> standard</span><span style="color:#89DDFF;">-</span><span style="color:#A6ACCD;">fs</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#FFCB6B;">phase</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> forward</span><span style="color:#89DDFF;">-</span><span style="color:#A6ACCD;">add</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">...</span></span>
<span class="line"><span style="color:#89DDFF;">-</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&amp;</span><span style="color:#A6ACCD;">shadow</span><span style="color:#89DDFF;">-</span><span style="color:#A6ACCD;">caster</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#FFCB6B;">vert</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> shadow</span><span style="color:#89DDFF;">-</span><span style="color:#A6ACCD;">caster</span><span style="color:#89DDFF;">-</span><span style="color:#A6ACCD;">vs</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#FFCB6B;">frag</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> shadow</span><span style="color:#89DDFF;">-</span><span style="color:#A6ACCD;">caster</span><span style="color:#89DDFF;">-</span><span style="color:#A6ACCD;">fs</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#FFCB6B;">phase</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> shadow</span><span style="color:#89DDFF;">-</span><span style="color:#A6ACCD;">caster</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">...</span></span>
<span class="line"><span style="color:#89DDFF;">-</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&amp;</span><span style="color:#A6ACCD;">reflect</span><span style="color:#89DDFF;">-</span><span style="color:#A6ACCD;">map</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#FFCB6B;">vert</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> standard</span><span style="color:#89DDFF;">-</span><span style="color:#A6ACCD;">vs</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#FFCB6B;">frag</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> reflect</span><span style="color:#89DDFF;">-</span><span style="color:#A6ACCD;">map</span><span style="color:#89DDFF;">-</span><span style="color:#A6ACCD;">fs</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#FFCB6B;">phase</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> reflect</span><span style="color:#89DDFF;">-</span><span style="color:#A6ACCD;">map</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">...</span></span></code></pre></div><p>如上面代码所示，phase 用于标记此 pass 的参与阶段。 而 <code>&amp;forward-add</code>，<code>&amp;shadow-caster</code>，<code>&amp;reflect-map</code> 则是给这个 pass 起了一个名字，方便后面的技术对它进行复用。</p><p>比如，<code>transparent</code> 就直接复用了 <code>opaque</code> 的 <code>forward-add</code> 和 <code>shadow-caster</code> pass。</p><div class="language-ts"><button title="Copy Code" class="copy"></button><span class="lang">ts</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#89DDFF;">-</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">name</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> transparent</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#FFCB6B;">passes</span><span style="color:#89DDFF;">:</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">-</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">vert</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> standard</span><span style="color:#89DDFF;">-</span><span style="color:#A6ACCD;">vs</span></span>
<span class="line"><span style="color:#A6ACCD;">        </span><span style="color:#FFCB6B;">frag</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> standard</span><span style="color:#89DDFF;">-</span><span style="color:#A6ACCD;">fs</span></span>
<span class="line"><span style="color:#A6ACCD;">        </span><span style="color:#89DDFF;">...</span></span>
<span class="line"><span style="color:#A6ACCD;">        </span><span style="color:#FFCB6B;">properties</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">*</span><span style="color:#A6ACCD;">props</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">-</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">*</span><span style="color:#A6ACCD;">forward</span><span style="color:#89DDFF;">-</span><span style="color:#A6ACCD;">add</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">-</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">*</span><span style="color:#A6ACCD;">shadow</span><span style="color:#89DDFF;">-</span><span style="color:#A6ACCD;">caster</span></span></code></pre></div><h3 id="渲染状态" tabindex="-1">渲染状态 <a class="header-anchor" href="#渲染状态" aria-label="Permalink to &quot;渲染状态&quot;">​</a></h3><p>如开头所说，为了完成一个模型的渲染，除了定义好渲染过程，所需要的属性以外，还需要配合渲染状态。</p><p>渲染状态主要涉及 模板测试、深度测试、光栅器状态、透明混合等。</p><p>同样的渲染流程、属性、Shader 代码，配合不同的渲染状态，就可以实现不同的效果。</p><div class="language-ts"><button title="Copy Code" class="copy"></button><span class="lang">ts</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#676E95;font-style:italic;">//深度、模板测试</span></span>
<span class="line"><span style="color:#FFCB6B;">depthStencilState</span><span style="color:#89DDFF;">:</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#FFCB6B;">depthFunc</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> equal</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#FFCB6B;">depthTest</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#FF9CAC;">true</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#FFCB6B;">depthWrite</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#FF9CAC;">false</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;font-style:italic;">//透明混合状态</span></span>
<span class="line"><span style="color:#FFCB6B;">blendState</span><span style="color:#89DDFF;">:</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#FFCB6B;">targets</span><span style="color:#89DDFF;">:</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">-</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">blend</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#FF9CAC;">true</span></span>
<span class="line"><span style="color:#A6ACCD;">        </span><span style="color:#FFCB6B;">blendSrc</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> one</span></span>
<span class="line"><span style="color:#A6ACCD;">        </span><span style="color:#FFCB6B;">blendDst</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> one</span></span>
<span class="line"><span style="color:#A6ACCD;">        </span><span style="color:#FFCB6B;">blendSrcAlpha</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> zero</span></span>
<span class="line"><span style="color:#A6ACCD;">        </span><span style="color:#FFCB6B;">blendDstAlpha</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> one</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">//光栅器状态</span></span>
<span class="line"><span style="color:#FFCB6B;">rasterizerState</span><span style="color:#89DDFF;">:</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#FFCB6B;">cullMode</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> front</span></span></code></pre></div><p>渲染状态会有一套默认值，在有需要的时候进行修改即可。</p><p>比如 <code>opaque</code> 与 <code>transparent</code> 就只有渲染状态的区别。</p><h3 id="内嵌宏" tabindex="-1">内嵌宏 <a class="header-anchor" href="#内嵌宏" aria-label="Permalink to &quot;内嵌宏&quot;">​</a></h3><div class="language-ts"><button title="Copy Code" class="copy"></button><span class="lang">ts</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#FFCB6B;">embeddedMacros</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span><span style="color:#F07178;"> </span><span style="color:#FFCB6B;">CC_FORCE_FORWARD_SHADING</span><span style="color:#89DDFF;">:</span><span style="color:#F07178;"> </span><span style="color:#FF9CAC;">true</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">}</span></span></code></pre></div><p>有时候，我们想为某个pass单独开启或者关闭一些宏，可以使用 <code>embeddedMacros</code> 字段进行。</p><h2 id="代码引用机制" tabindex="-1">代码引用机制 <a class="header-anchor" href="#代码引用机制" aria-label="Permalink to &quot;代码引用机制&quot;">​</a></h2><p>Surface Shader 提供了两种代码块引用机制：头文件和CCProgram。详情请查看 <a href="./includes.html">include 机制</a>。</p><h2 id="共享常量" tabindex="-1">共享常量 <a class="header-anchor" href="#共享常量" aria-label="Permalink to &quot;共享常量&quot;">​</a></h2><p>许多常量是 vs 和 fs 都会用到的，或者多个 technique 和 pass 都需要用到的，定义在一起方便管理。</p><p>共享常量本质上还是属于 Shader 代码片段，使用 GLSL 来编写。</p><div class="language-ts"><button title="Copy Code" class="copy"></button><span class="lang">ts</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">CCProgram shared</span><span style="color:#89DDFF;">-</span><span style="color:#A6ACCD;">ubos </span><span style="color:#89DDFF;">%{</span></span>
<span class="line"><span style="color:#F07178;">  </span><span style="color:#A6ACCD;">uniform</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">Constants</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#A6ACCD;">vec4</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">tilingOffset</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#A6ACCD;">vec4</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">albedo</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#A6ACCD;">vec4</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">albedoScaleAndCutoff</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#A6ACCD;">vec4</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">pbrParams</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#A6ACCD;">vec4</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">emissive</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#A6ACCD;">vec4</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">emissiveScaleParam</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#A6ACCD;">vec4</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">anisotropyParam</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#F07178;">  </span><span style="color:#89DDFF;">};</span></span>
<span class="line"><span style="color:#89DDFF;">}%</span></span></code></pre></div><p>在后面的组装环节，只需要 <code>#include &lt;shared-ubos&gt;</code> 即可。</p><h2 id="宏映射" tabindex="-1">宏映射 <a class="header-anchor" href="#宏映射" aria-label="Permalink to &quot;宏映射&quot;">​</a></h2><p>关于宏映射详细信息，请参考 <a href="./macro-remapping.html">宏定义与重映射</a>。</p><p>在 内置的 Surface Shader 中，使用 <code>CCProgram macro-remapping</code> 片段来组织所的宏映射工作，方便管理。</p><p>可以看到，在内置的 Surface Shader 中，使用 <code>#pragma define-meta</code> 将许多内置的宏重定向到了面板上。</p><div class="language-ts"><button title="Copy Code" class="copy"></button><span class="lang">ts</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">CCProgram macro</span><span style="color:#89DDFF;">-</span><span style="color:#A6ACCD;">remapping </span><span style="color:#89DDFF;">%{</span></span>
<span class="line"><span style="color:#89DDFF;">  </span><span style="color:#676E95;font-style:italic;">// ui displayed macros</span></span>
<span class="line"><span style="color:#F07178;">  #</span><span style="color:#A6ACCD;">pragma</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">define</span><span style="color:#89DDFF;">-</span><span style="color:#A6ACCD;">meta</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">HAS_SECOND_UV</span></span>
<span class="line"><span style="color:#F07178;">  #</span><span style="color:#A6ACCD;">pragma</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">define</span><span style="color:#89DDFF;">-</span><span style="color:#A6ACCD;">meta</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">USE_TWOSIDE</span></span>
<span class="line"><span style="color:#F07178;">  #</span><span style="color:#A6ACCD;">pragma</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">define</span><span style="color:#89DDFF;">-</span><span style="color:#A6ACCD;">meta</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">IS_ANISOTROPY</span></span>
<span class="line"><span style="color:#F07178;">  #</span><span style="color:#A6ACCD;">pragma</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">define</span><span style="color:#89DDFF;">-</span><span style="color:#A6ACCD;">meta</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">USE_VERTEX_COLOR</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F07178;">  #</span><span style="color:#A6ACCD;">define</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">CC_SURFACES_USE_SECOND_UV</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">HAS_SECOND_UV</span></span>
<span class="line"><span style="color:#F07178;">  #</span><span style="color:#A6ACCD;">define</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">CC_SURFACES_USE_TWO_SIDED</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">USE_TWOSIDE</span></span>
<span class="line"><span style="color:#F07178;">  #</span><span style="color:#A6ACCD;">define</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">CC_SURFACES_LIGHTING_ANISOTROPIC</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">IS_ANISOTROPY</span></span>
<span class="line"><span style="color:#F07178;">  #</span><span style="color:#A6ACCD;">define</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">CC_SURFACES_USE_VERTEX_COLOR</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">USE_VERTEX_COLOR</span></span>
<span class="line"></span>
<span class="line"><span style="color:#89DDFF;">  </span><span style="color:#676E95;font-style:italic;">// depend on UI macros</span></span>
<span class="line"><span style="color:#F07178;">#</span><span style="color:#89DDFF;font-style:italic;">if</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">IS_ANISOTROPY</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">||</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">USE_NORMAL_MAP</span></span>
<span class="line"><span style="color:#F07178;">  #</span><span style="color:#A6ACCD;">define</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">CC_SURFACES_USE_TANGENT_SPACE</span><span style="color:#F07178;"> </span><span style="color:#F78C6C;">1</span></span>
<span class="line"><span style="color:#F07178;">#</span><span style="color:#A6ACCD;">endif</span></span>
<span class="line"></span>
<span class="line"><span style="color:#89DDFF;">  </span><span style="color:#676E95;font-style:italic;">// functionality for each effect</span></span>
<span class="line"><span style="color:#F07178;">  #</span><span style="color:#A6ACCD;">define</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">CC_SURFACES_LIGHTING_ANISOTROPIC_ENVCONVOLUTION_COUNT</span><span style="color:#F07178;"> </span><span style="color:#F78C6C;">31</span></span>
<span class="line"><span style="color:#89DDFF;">}%</span></span></code></pre></div><h2 id="surface-函数段" tabindex="-1">Surface 函数段 <a class="header-anchor" href="#surface-函数段" aria-label="Permalink to &quot;Surface 函数段&quot;">​</a></h2><p>在 Surface Shader 中，定义了两个 CCProgram 用于处理具体的Shader计算。</p><ul><li>CCProgram surface-vertex：用于处理 vs 相关计算</li><li>CCProgram surface-fragment：用于处理 fs 相关计算</li></ul><h3 id="ccprogram-surface-vertex" tabindex="-1">CCProgram surface-vertex <a class="header-anchor" href="#ccprogram-surface-vertex" aria-label="Permalink to &quot;CCProgram surface-vertex&quot;">​</a></h3><p>内置的 vs 流程基本上能满足 Surface Shader 的 vs 需求，导致 surface-vertex 非常简单，只做了少量的特殊处理。</p><p>我们以第二套 UV 的处理函数为例。</p><p>它先定义了 <code>CC_SURFACES_VERTEX_MODIFY_UV</code> 宏，然后实现了 <code>SurfacesVertexModifyUV</code> 方法。</p><div class="language-ts"><button title="Copy Code" class="copy"></button><span class="lang">ts</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">#define CC_SURFACES_VERTEX_MODIFY_UV</span></span>
<span class="line"><span style="color:#89DDFF;">void</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">SurfacesVertexModifyUV</span><span style="color:#A6ACCD;">(inout SurfacesStandardVertexIntermediate In)</span></span>
<span class="line"><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#A6ACCD;">In</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">texCoord</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">=</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">In</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">texCoord</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">*</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">tilingOffset</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">xy</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">+</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">tilingOffset</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">zw</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#F07178;">    #</span><span style="color:#89DDFF;font-style:italic;">if</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">CC_SURFACES_USE_SECOND_UV</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#A6ACCD;">In</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">texCoord1</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">=</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">In</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">texCoord1</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">*</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">tilingOffset</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">xy</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">+</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">tilingOffset</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">zw</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#F07178;">    #</span><span style="color:#A6ACCD;">endif</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span></code></pre></div><p>这就是 Surface Shader 的核心机制，可以通过宏定义改写内部函数，在不修改内部源码的情况下实现特定的渲染需求。</p><p>具体的机制请参考<a href="./function-replace.html">使用宏定义实现函数替换</a> 和 <a href="./surface-function.html">Surface Shader 内置可替换函数列表</a>。</p><h3 id="ccprogram-surface-fragment" tabindex="-1">CCProgram surface-fragment <a class="header-anchor" href="#ccprogram-surface-fragment" aria-label="Permalink to &quot;CCProgram surface-fragment&quot;">​</a></h3><p>surface-fragment 主要实现了 PBR 计算时需要的表面材质信息填充。</p><h4 id="宏开关" tabindex="-1">宏开关 <a class="header-anchor" href="#宏开关" aria-label="Permalink to &quot;宏开关&quot;">​</a></h4><div class="language-ts"><button title="Copy Code" class="copy"></button><span class="lang">ts</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">#</span><span style="color:#89DDFF;font-style:italic;">if</span><span style="color:#A6ACCD;"> USE_ALBEDO_MAP</span></span>
<span class="line"><span style="color:#A6ACCD;">    uniform sampler2D albedoMap</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#A6ACCD;">    #pragma define</span><span style="color:#89DDFF;">-</span><span style="color:#A6ACCD;">meta ALBEDO_UV </span><span style="color:#82AAFF;">options</span><span style="color:#A6ACCD;">([v_uv</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> v_uv1])</span></span>
<span class="line"><span style="color:#A6ACCD;">#endif</span></span></code></pre></div><p>可以看到，在内置的 Surface Shader 中，所有的贴图，都被宏定义包裹起来，这样的好处就是可以根据需求关闭对应的宏，以提升性能。</p><h4 id="材质面板可选择的宏" tabindex="-1">材质面板可选择的宏 <a class="header-anchor" href="#材质面板可选择的宏" aria-label="Permalink to &quot;材质面板可选择的宏&quot;">​</a></h4><p><code>#pragma define-meta</code> + 名称 + <code>options([item0,item1,....])</code> 可以定义一个供用户选择的宏。</p><p>以下面代码为例：</p><div class="language-ts"><button title="Copy Code" class="copy"></button><span class="lang">ts</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">#pragma define</span><span style="color:#89DDFF;">-</span><span style="color:#A6ACCD;">meta ALBEDO_UV </span><span style="color:#82AAFF;">options</span><span style="color:#A6ACCD;">([v_uv</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> v_uv1])</span></span></code></pre></div><p>材质面板上， ALBEDO_UV 会出现下拉选择框，Shader 编译时，会以用户选择值为准。</p><p>比如，用户如果选择了 <code>v_uv1</code>，这条语句编译出来的最终结果为：</p><div class="language-ts"><button title="Copy Code" class="copy"></button><span class="lang">ts</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">#define ALBEDO_UV v_uv1</span></span></code></pre></div><div class="language-ts"><button title="Copy Code" class="copy"></button><span class="lang">ts</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">#</span><span style="color:#89DDFF;font-style:italic;">if</span><span style="color:#A6ACCD;"> USE_ALPHA_TEST</span></span>
<span class="line"><span style="color:#A6ACCD;">    #pragma define</span><span style="color:#89DDFF;">-</span><span style="color:#A6ACCD;">meta ALPHA_TEST_CHANNEL </span><span style="color:#82AAFF;">options</span><span style="color:#A6ACCD;">([a</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> r])</span></span>
<span class="line"><span style="color:#A6ACCD;">#endif</span></span></code></pre></div><p>ALPHA_TEST_CHANNEL 也是如此，默认使用 <code>a</code> 通道，但也可以选择 r 通道。</p><h4 id="pbr-通道" tabindex="-1">PBR 通道 <a class="header-anchor" href="#pbr-通道" aria-label="Permalink to &quot;PBR 通道&quot;">​</a></h4><div class="language-ts"><button title="Copy Code" class="copy"></button><span class="lang">ts</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">#pragma define OCCLUSION_CHANNEL          r</span></span>
<span class="line"><span style="color:#A6ACCD;">#pragma define ROUGHNESS_CHANNEL          g</span></span>
<span class="line"><span style="color:#A6ACCD;">#pragma define METALLIC_CHANNEL           b</span></span>
<span class="line"><span style="color:#A6ACCD;">#pragma define SPECULAR_INTENSITY_CHANNEL a</span></span></code></pre></div><p>Surface Shader 使用一张图作为 PBR 贴图，根据定义就可以知道，PBR 贴图各通道的含义：</p><ul><li>r通道：环境遮蔽</li><li>r通道：粗糙度</li><li>b通道：金属度</li><li>a通道：高光强度</li></ul><h4 id="具体实现" tabindex="-1">具体实现 <a class="header-anchor" href="#具体实现" aria-label="Permalink to &quot;具体实现&quot;">​</a></h4><p>与 surface-vertex 一样， surface-fragment 中也通过函数替换方式，实现 PBR 参数填充。</p><p>想要了解更多具体的机制请参考以下文章：</p><ul><li><a href="./function-replace.html">使用宏定义实现函数替换</a></li><li><a href="./surface-function.html">Surface Shader 内置可替换函数列表</a></li><li><a href="./shader-code-flow.html">Surface Shader 执行流程</a></li></ul><h2 id="shader-组装" tabindex="-1">Shader 组装 <a class="header-anchor" href="#shader-组装" aria-label="Permalink to &quot;Shader 组装&quot;">​</a></h2><p>上面提到的几个 CCProgram：</p><ul><li>shared-ubos</li><li>macro-remapping</li><li>surface-vertex</li><li>surface-fragment</li></ul><p>只是一些实现 Surface Shader 必要的组成部分，想要实现一个完整的 Surface Shader，还需要将这些部分，配合Surface Shader 内置的其它模块进行组装。</p><p>具体的组装机制请查看：<a href="./shader-assembly.html">Surface Shader 组装</a>。</p><p>最后组装出来的 CCProgram，才是 CCEffect 部分引用的内容。</p><ul><li><p>CCProgram standard-vs</p></li><li><p>CCProgram shadow-caster-vs</p></li><li><p>CCProgram standard-fs</p></li><li><p>CCProgram shadow-caster-fs</p></li><li><p>CCProgram reflect-map-fs</p></li></ul>`,104),o=[e];function r(c,t,C,i,y,D){return a(),n("div",null,o)}const F=s(l,[["render",r]]);export{d as __pageData,F as default};