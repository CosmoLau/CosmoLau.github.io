import{_ as n,c as t,o as l,a4 as a,m as s,a as i}from"./chunks/framework.uQk9_EO2.js";const e="/docs/cocos/assets/unity-hub.DVYVMXuw.png",p="/docs/cocos/assets/cocos-dash-board.B3-ausjp.png",h="/docs/cocos/assets/unity-editor-overview.CyO48yhd.png",o="/docs/cocos/assets/cocos-editor-overview.DPNEHS3a.png",r="/docs/cocos/assets/unity-texture-inspector.DnzWll3j.png",k="/docs/cocos/assets/cocos-texture-inspector.C9pE5cu2.png",c="/docs/cocos/assets/cocos-texture-compress.DPbm9aHQ.png",d="/docs/cocos/assets/unity-model.OzA2WvQ5.png",g="/docs/cocos/assets/cocos-model.COa8kQ04.png",E="/docs/cocos/assets/cocos-keyframe-anim.LgW5wh9G.png",y="/docs/cocos/assets/cocos-anim-graph.cGM7dp2y.png",u="/docs/cocos/assets/cocos-audio-source.BLcVS_U3.png",C="/docs/cocos/assets/unity-import-package.hnaWhHfG.png",F="/docs/cocos/assets/cocos-import-package.Dr18GO9S.png",m="/docs/cocos/assets/unity-build.DDlL41QH.png",_="/docs/cocos/assets/cocos-build.BtLfJTNB.png",b="/docs/cocos/assets/cocos-add-component.CVoxIaIS.png",f="/docs/cocos/assets/script-lifecycle.CwUHfOAe.png",x="/docs/cocos/assets/cocos-debug.vOJOvPCz.png",B="/docs/cocos/assets/unity-material.CGwCDFsV.png",v="/docs/cocos/assets/cocos-material.BVv3c81h.png",q="/docs/cocos/assets/cocos-pipeline-state.DtzLI5zd.png",Z=JSON.parse('{"title":"Unity 开发者入门 Cocos Creator 快速指南","description":"","frontmatter":{},"headers":[],"relativePath":"zh/guide/unity/index.md","filePath":"zh/guide/unity/index.md","lastUpdated":1712305443000}'),S={name:"zh/guide/unity/index.md"},D=a('<h1 id="unity-开发者入门-cocos-creator-快速指南" tabindex="-1">Unity 开发者入门 Cocos Creator 快速指南 <a class="header-anchor" href="#unity-开发者入门-cocos-creator-快速指南" aria-label="Permalink to &quot;Unity 开发者入门 Cocos Creator 快速指南&quot;">​</a></h1><p>随着游戏平台和渠道的种类越来越多，开发者希望自己的游戏能够一次编写多次发布到不同的平台和渠道，而 Cocos Creator 恰好是很好的满足这一需求。</p><p>本文将从一个 Unity 开发者的视角，从以下角度对比，帮助 Unity 开发者迅速上手 Cocos Creator引擎。</p><ul><li>安装和版本管理</li><li>编辑器</li><li>资源工作流</li><li>脚本以及调试</li><li>着色器</li></ul><h2 id="安装和版本管理" tabindex="-1">安装和版本管理 <a class="header-anchor" href="#安装和版本管理" aria-label="Permalink to &quot;安装和版本管理&quot;">​</a></h2><p>Unity Hub 可以使用来管理 Unity 的编辑器版本、项目以及各种模板。在 Cocos Creator 中，同样您也可以通过 <a href="https://www.cocos.com/creator-download" target="_blank" rel="noreferrer">Cocos Dash Board</a> 来管理引擎，项目以及模板。</p><table><thead><tr><th style="text-align:left;">Unity Hub</th><th style="text-align:left;">Cocos Dashboard</th></tr></thead><tbody><tr><td style="text-align:left;"><img src="'+e+'" alt="unity-hub"></td><td style="text-align:left;"><img src="'+p+'" alt="cocos-dash-board"></td></tr></tbody></table><p>同样您也可以在 Store 分页中找到大量可供使用的插件、资源和源码，以及在 Learn 分页中找到更多可供学习的素材。</p><h2 id="编辑器" tabindex="-1">编辑器 <a class="header-anchor" href="#编辑器" aria-label="Permalink to &quot;编辑器&quot;">​</a></h2><p>作为一个 Unity 开发者，在绝大多数的情况下您可以无缝使用 Cocos Creator 的编辑器，他们拥有接近的编辑器布局以及使用方式。</p><table><thead><tr><th style="text-align:left;">Unity Editor</th><th style="text-align:left;">Cocos Creator Editor</th></tr></thead><tbody><tr><td style="text-align:left;"><img src="'+h+'" alt="overview"></td><td style="text-align:left;"><img src="'+o+'" alt="overview"></td></tr></tbody></table><p>略有不同的地方在于， Cocos Creator 由于使用 Electronic+Chromium 开发，您既可以通过浏览器预览游戏，也可以直接在编辑器内运行游戏。</p><h2 id="工作流" tabindex="-1">工作流 <a class="header-anchor" href="#工作流" aria-label="Permalink to &quot;工作流&quot;">​</a></h2><p>Cocos Creator 的 2D 和 3D 工作流与 Unity 类似，您可以阅读 <a href="./../../concepts/scene/">场景制作工作流程</a> 来查看 Cocos Creator 的工作流。</p><h3 id="贴图资源" tabindex="-1">贴图资源 <a class="header-anchor" href="#贴图资源" aria-label="Permalink to &quot;贴图资源&quot;">​</a></h3><p>贴图资源的导入和 Unity 类似。</p>',16),A=s("table",null,[s("thead",null,[s("tr",null,[s("th",{style:{"text-align":"left"}},"Unity"),s("th",{style:{"text-align":"left"}},"Cocos")])]),s("tbody",null,[s("tr",null,[s("td",{style:{"text-align":"left"}},[s("img",{src:r,width:"300",heigh:"200"})]),s("td",{style:{"text-align":"left"}},[s("img",{src:k,width:"300",heigh:"200"})])])])],-1),P=s("p",null,"也可以在项目设置中配置全局纹理压缩",-1),T=s("p",null,[s("img",{src:c,alt:"cocos-texture-compress.png"})],-1),U=s("h3",{id:"模型和动画",tabindex:"-1"},[i("模型和动画 "),s("a",{class:"header-anchor",href:"#模型和动画","aria-label":'Permalink to "模型和动画"'},"​")],-1),L=s("p",null,"在 Cocos Creator 中导入 FBX 和 Unity 是一样的，将文件拖拽或者复制到工程的 Assets 目录下即可。",-1),w=s("table",null,[s("thead",null,[s("tr",null,[s("th",{style:{"text-align":"left"}},"Unity"),s("th",{style:{"text-align":"left"}},"Cocos")])]),s("tbody",null,[s("tr",null,[s("td",{style:{"text-align":"left"}},[s("img",{src:d,width:"300",heigh:"200"})]),s("td",{style:{"text-align":"left"}},[s("img",{src:g,width:"300",heigh:"200"})])])])],-1),V=a('<p>同时 Cocos Creator 也支持 glTF 格式的文件，以及 Maya、3DMax 等 DCC 工具的标准材质。</p><h3 id="spine-骨骼动画" tabindex="-1">Spine 骨骼动画 <a class="header-anchor" href="#spine-骨骼动画" aria-label="Permalink to &quot;Spine 骨骼动画&quot;">​</a></h3><p>Cocos Creator 内置了 Spine 动画组件，您可以直接通过 <code>spine.Skeleton</code> 组件来使用他。</p><h3 id="动画和状态机" tabindex="-1">动画和状态机 <a class="header-anchor" href="#动画和状态机" aria-label="Permalink to &quot;动画和状态机&quot;">​</a></h3><p>Cocos Creator 支持关键帧动画、骨骼动画。您可以直接在编辑器内编辑和预览这些动画。</p><p><img src="'+E+'" alt="cocos-keyframe-anim.png"></p><p>和 Unity 的 Animator 类似，Cocos Creator 也支持动画状态机的编辑，您可以在 <a href="./../../animation/marionette/">Marionette 动画系统</a> 中找到他们。</p><p><img src="'+y+'" alt="./index/cocos-anim-graph.png"></p><h3 id="音乐和音效" tabindex="-1">音乐和音效 <a class="header-anchor" href="#音乐和音效" aria-label="Permalink to &quot;音乐和音效&quot;">​</a></h3><p>Cocos Creator 同样支持 Audio Source 组件用于播放音乐和音效。</p><p><img src="'+u+'" alt="cocos-audio-source.png"></p><h3 id="资源包" tabindex="-1">资源包 <a class="header-anchor" href="#资源包" aria-label="Permalink to &quot;资源包&quot;">​</a></h3><p>和 Unity 类似，Cocos Creator 也支持从外界导入资源包的方式进行合作开发。</p>',13),G=s("table",null,[s("thead",null,[s("tr",null,[s("th",{style:{"text-align":"left"}},"Unity"),s("th",{style:{"text-align":"left"}},"Cocos")])]),s("tbody",null,[s("tr",null,[s("td",{style:{"text-align":"left"}},[s("img",{src:C,width:"300",heigh:"200"})]),s("td",{style:{"text-align":"left"}},[s("img",{src:F,width:"300",heigh:"200"})])])])],-1),O=s("h3",{id:"发布和构建",tabindex:"-1"},[i("发布和构建 "),s("a",{class:"header-anchor",href:"#发布和构建","aria-label":'Permalink to "发布和构建"'},"​")],-1),I=s("p",null,"除了和 Unity 一样发布在各种原生平台外，Cocos Creator 也支持发布在如微信小游戏、抖音小游戏等小游戏平台。",-1),M=s("table",null,[s("thead",null,[s("tr",null,[s("th",{style:{"text-align":"left"}},"Unity"),s("th",{style:{"text-align":"left"}},"Cocos")])]),s("tbody",null,[s("tr",null,[s("td",{style:{"text-align":"left"}},[s("img",{src:m,width:"300",heigh:"200"})]),s("td",{style:{"text-align":"left"}},[s("img",{src:_,width:"300",heigh:"200"})])])])],-1),N=a('<h2 id="脚本编程和调试" tabindex="-1">脚本编程和调试 <a class="header-anchor" href="#脚本编程和调试" aria-label="Permalink to &quot;脚本编程和调试&quot;">​</a></h2><p>和 Unity 的 GameObject 不同，在 Cocos Creator 中，场景中的实体被命名为 Node，但是和 Unity 类似的是 Cocos Creator 也是 ECS（Entity-Component-System） 架构，您也可以通过给 Node 添加不同的组件来实现游戏的功能。</p><p><img src="'+b+'" alt="cocos-add-component.png"></p><h3 id="组件的生命周期" tabindex="-1">组件的生命周期 <a class="header-anchor" href="#组件的生命周期" aria-label="Permalink to &quot;组件的生命周期&quot;">​</a></h3><p>和 Unity 类似， Cocos Creator 的组件也有自己的生命周期，系统将通过回调组件内已注册的方法，方便开发者处理业务逻辑。</p><p><img src="'+f+`" alt="组件生命周期"></p><h3 id="自定义组件的编写" tabindex="-1">自定义组件的编写 <a class="header-anchor" href="#自定义组件的编写" aria-label="Permalink to &quot;自定义组件的编写&quot;">​</a></h3><p>在 Unity 中，我们继承 Monobehavior 来实现我们自己的游戏脚本。</p><div class="language-csharp vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">csharp</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">public</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> class</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> Player</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> : </span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">NetworkBehaviour</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">{</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">    Animation</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> _animation</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">    Start</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(){      </span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">        _animation </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> gameObject.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">GetComponent</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&lt;</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">Animation</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;();</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    }</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">}</span></span></code></pre></div><p>Cocos Creator 使用 Typescript 来编写脚本。</p><p>下面的例子演示了如何使用 Typescript 实现自定义组件。</p><div class="language-ts vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">ts</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">@</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">ccclass</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;MotionController&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">)</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">export</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">  class</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> MotionController</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> extends</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> Component</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> {  </span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">    animation</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">:</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> SkeletalAnimation</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">     start</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">() {</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">        this</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">.animation </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> this</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">getComponent</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(SkeletalAnimation);        </span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    }    </span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">}</span></span></code></pre></div><p>C# 和 Typescript 都是微软开发的编程语言，其易用程度是类似的。</p><h3 id="调试和日志" tabindex="-1">调试和日志 <a class="header-anchor" href="#调试和日志" aria-label="Permalink to &quot;调试和日志&quot;">​</a></h3><h4 id="日志调试" tabindex="-1">日志调试 <a class="header-anchor" href="#日志调试" aria-label="Permalink to &quot;日志调试&quot;">​</a></h4><p>Unity中使用日志我们可以使用 <code>Debug.Log</code> 的方法。</p><p>在 Cocos Creator 中使用日志，既可以使用 js 的日志打印 <code>console.log()</code>，也可使用 Cocos Creator 的日志方法：</p><div class="language-ts vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">ts</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">cc.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">log</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">()</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">cc.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">debug</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">()</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">cc.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">error</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">()</span></span></code></pre></div><h4 id="断点调试" tabindex="-1">断点调试 <a class="header-anchor" href="#断点调试" aria-label="Permalink to &quot;断点调试&quot;">​</a></h4><p>Unity 可以使用 Visual Studio 或者 VSCode 进行断点调试。</p><p>Cocos Creator 使用 VSCode 或者直接在浏览器内通过开发者工具调试。</p><p><img src="`+x+'" alt="cocos-debug.png"></p><h2 id="材质以及着色器编写" tabindex="-1">材质以及着色器编写 <a class="header-anchor" href="#材质以及着色器编写" aria-label="Permalink to &quot;材质以及着色器编写&quot;">​</a></h2><h3 id="材质" tabindex="-1">材质 <a class="header-anchor" href="#材质" aria-label="Permalink to &quot;材质&quot;">​</a></h3><p>Cocos Creator 的材质和 Unity 材质拥有类似的预览和属性面板。</p>',25),z=s("table",null,[s("thead",null,[s("tr",null,[s("th",{style:{"text-align":"left"}},"Unity"),s("th",{style:{"text-align":"left"}},"Cocos")])]),s("tbody",null,[s("tr",null,[s("td",{style:{"text-align":"left"}},[s("img",{src:B,width:"300",heigh:"200"})]),s("td",{style:{"text-align":"left"}},[s("img",{src:v,width:"300",heigh:"200"})])])])],-1),H=a('<p>和 Unity 不同的地方在于 Cocos Creator 在材质中可以比较方便的查看和定义管线中的渲染状态。</p><p><img src="'+q+`" alt="cocos-pipeline-state.png"></p><h3 id="着色器" tabindex="-1">着色器 <a class="header-anchor" href="#着色器" aria-label="Permalink to &quot;着色器&quot;">​</a></h3><p>和 Unity 支持 CG、GLSL 以及 HLSL 不同，Cocos Creator 仅支持 GLSL 作为着色器编程语言。</p><p>下面的表格对比了他们所使用的文件格式以及 DSL 的区别。</p><table><thead><tr><th style="text-align:left;"></th><th style="text-align:left;">Unity</th><th style="text-align:left;">Cocos</th></tr></thead><tbody><tr><td style="text-align:left;">文件格式</td><td style="text-align:left;">*.shader</td><td style="text-align:left;">*.effect</td></tr><tr><td style="text-align:left;">DSL</td><td style="text-align:left;">Cg/HLSL/GLSL + Unity Shader Format</td><td style="text-align:left;">GLSL + Yaml</td></tr></tbody></table><p>Unity 采用自定义的 shader 文件来作为 DSL， 而 Cocos creator 使用的是 Yaml 作为 DSL 的文件格式。</p><h4 id="着色器语法规则" tabindex="-1">着色器语法规则 <a class="header-anchor" href="#着色器语法规则" aria-label="Permalink to &quot;着色器语法规则&quot;">​</a></h4><p>Unity Shader 语法规则</p><div class="language-shader vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">shader</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">Shader</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &quot;Transparent/Cutout/DiffuseDoubleside&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> {</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">Properties</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> {</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> _Color (</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;Main Color&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">Color</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">) = (</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">1</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">1</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">1</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">1</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">)</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> _MainTex (</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;Base (RGB) Trans (A)&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">2D</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">) = </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;white&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> {}</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> _Cutoff (</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;Alpha cutoff&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">Range</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">0</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">1</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">)) = </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">0.5</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">}</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">SubShader</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> {</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> Tags</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> {</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;IgnoreProjector&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;True&quot;</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &quot;RenderType&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;TransparentCutout&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">}</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> LOD</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> 200</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> Cull</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> Off</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> </span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">CGPROGRAM</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">#pragma</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> surface surf Lambert alphatest:_Cutoff</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">sampler2D</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> _MainTex;</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">float4</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> _Color;</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">struct</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> Input</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> {</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> float2</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> uv_MainTex;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">};</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">void</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> surf</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> (</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">Input</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> IN, </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">inout</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> SurfaceOutput</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> o) {</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> half4</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> c = </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">tex2D</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(_MainTex, IN.uv_MainTex) * _Color;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> o.Albedo = c.rgb;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> o.Alpha = c.a;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">}</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">ENDCG</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">}</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">Fallback</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &quot;Transparent/Cutout/VertexLit&quot;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">}</span></span></code></pre></div><p>Cocos creator effect 语法规则</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>// Effect Syntax Guide: https://github.com/cocos-creator/docs-3d/blob/master/zh/material-system/effect-syntax.md</span></span>
<span class="line"><span></span></span>
<span class="line"><span>CCEffect %{</span></span>
<span class="line"><span>  techniques:</span></span>
<span class="line"><span>  - name: opaque</span></span>
<span class="line"><span>    passes:</span></span>
<span class="line"><span>    - vert: general-vs:vert # builtin header</span></span>
<span class="line"><span>      frag: unlit-fs:frag</span></span>
<span class="line"><span>      properties: &amp;props</span></span>
<span class="line"><span>        mainTexture:    { value: white }</span></span>
<span class="line"><span>        mainColor:      { value: [1, 1, 1, 1], editor: { type: color } }</span></span>
<span class="line"><span>  - name: transparent</span></span>
<span class="line"><span>    passes:</span></span>
<span class="line"><span>    - vert: general-vs:vert # builtin header</span></span>
<span class="line"><span>      frag: unlit-fs:frag</span></span>
<span class="line"><span>      blendState:</span></span>
<span class="line"><span>        targets:</span></span>
<span class="line"><span>        - blend: true</span></span>
<span class="line"><span>          blendSrc: src_alpha</span></span>
<span class="line"><span>          blendDst: one_minus_src_alpha</span></span>
<span class="line"><span>          blendSrcAlpha: src_alpha</span></span>
<span class="line"><span>          blendDstAlpha: one_minus_src_alpha</span></span>
<span class="line"><span>      properties: *props</span></span>
<span class="line"><span>}%</span></span>
<span class="line"><span></span></span>
<span class="line"><span>CCProgram unlit-fs %{\`</span></span>
<span class="line"><span>  precision highp float;</span></span>
<span class="line"><span>  #include &lt;output&gt;</span></span>
<span class="line"><span>  #include &lt;cc-fog-fs&gt;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>  in vec2 v_uv;</span></span>
<span class="line"><span>  uniform sampler2D mainTexture;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>  uniform Constant {</span></span>
<span class="line"><span>    vec4 mainColor;</span></span>
<span class="line"><span>  };</span></span>
<span class="line"><span></span></span>
<span class="line"><span>  vec4 frag () {</span></span>
<span class="line"><span>    vec4 col = mainColor * texture(mainTexture, v_uv);</span></span>
<span class="line"><span>    CC_APPLY_FOG(col);</span></span>
<span class="line"><span>    return CCFragOutput(col);</span></span>
<span class="line"><span>  }</span></span>
<span class="line"><span>}%</span></span></code></pre></div><h3 id="着色器语法对比" tabindex="-1">着色器语法对比 <a class="header-anchor" href="#着色器语法对比" aria-label="Permalink to &quot;着色器语法对比&quot;">​</a></h3><p>本小节将对比 Unity Shader 和 Cocos Effect 的文件结构。</p><h3 id="结构对比" tabindex="-1">结构对比 <a class="header-anchor" href="#结构对比" aria-label="Permalink to &quot;结构对比&quot;">​</a></h3><p>定义Shader对象</p><ul><li><p>Unity shader:</p><div class="language-shader vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">shader</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">Shader</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &quot;&lt;name&gt;&quot;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">{</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    &lt;optional: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">Material</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> properties</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    &lt;</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">One</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> or more </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">SubShader</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> definitions&gt;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    &lt;optional: custom editor&gt;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    &lt;optional: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">fallback</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">}</span></span></code></pre></div></li><li><p>Cocos Shader:</p><div class="language-yaml vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">yaml</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">CCEffect %{</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">    &lt;techniques&gt;</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">        &lt;passes&gt;</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">    &lt;techniques&gt;</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">        &lt;passes&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">    &lt;shader program&gt;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">}</span></span></code></pre></div></li></ul><h3 id="pass-结构" tabindex="-1">Pass 结构 <a class="header-anchor" href="#pass-结构" aria-label="Permalink to &quot;Pass 结构&quot;">​</a></h3><ul><li><p>Unity Shader：</p><div class="language-shader vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">shader</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">SubShader</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">{</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    &lt;optional&gt;Tag {}    </span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    &lt;optionall&gt; </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">Pass</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">}</span></span></code></pre></div><p>Pass：</p><div class="language-yaml vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">yaml</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">Pass{</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">    &lt;name&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">    &lt;tag&gt;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    </span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">    &lt;code&gt;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">}</span></span></code></pre></div></li><li><p>CocosCreator Shader:</p><div class="language-yaml vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">yaml</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">CCProgram &lt;name&gt; %{</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">    &lt;in parameters&gt;</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">    &lt;out parameters&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">    &lt;uniforms&gt;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  </span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">    function vert();</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">    function frag();</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">}%</span></span></code></pre></div></li></ul>`,19),R=[D,A,P,T,U,L,w,V,G,O,I,M,N,z,H];function j(Q,W,Y,$,J,X){return l(),t("div",null,R)}const ss=n(S,[["render",j]]);export{Z as __pageData,ss as default};