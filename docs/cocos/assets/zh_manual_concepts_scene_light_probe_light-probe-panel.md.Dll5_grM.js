import{_ as t,c as e,o as r,a5 as o}from"./chunks/framework.CqnjdYks.js";const s="/docs/cocos/assets/bake-panel.DA-peF9e.png",n="/docs/cocos/assets/probe.BjJBB0f3.png",l="/docs/cocos/assets/wireframe.iVWG9GG8.png",a="/docs/cocos/assets/convex.CsyjbIIp.png",g="/docs/cocos/assets/info.5JUIjM8w.png",u=JSON.parse('{"title":"光照探针面板","description":"","frontmatter":{},"headers":[],"relativePath":"zh/manual/concepts/scene/light/probe/light-probe-panel.md","filePath":"zh/manual/concepts/scene/light/probe/light-probe-panel.md"}'),i={name:"zh/manual/concepts/scene/light/probe/light-probe-panel.md"},d=o('<h1 id="光照探针面板" tabindex="-1">光照探针面板 <a class="header-anchor" href="#光照探针面板" aria-label="Permalink to &quot;光照探针面板&quot;">​</a></h1><p>通过编辑器顶部菜单，选择 <strong>项目</strong> -&gt; <strong>光照烘焙</strong> -&gt; <strong>光照探针</strong> 可以打开光照探针烘焙面板。</p><p><strong>光照烘焙面板</strong> 会将 <strong>场景编辑器</strong> 内已布置好的 <a href="./light-probe.html">光照探针</a> 进行烘焙。烘焙后，静态物体的间接光信息将被记录到存储介质中；而所有被配置为 <strong>Movable</strong> 属性的节点将可以获取到更详细和真实可信的间接光光照效果。</p><h2 id="属性" tabindex="-1">属性 <a class="header-anchor" href="#属性" aria-label="Permalink to &quot;属性&quot;">​</a></h2><p><img src="'+s+'" alt="light-probe-panel"></p><table><thead><tr><th style="text-align:left;">属性</th><th style="text-align:left;">说明</th></tr></thead><tbody><tr><td style="text-align:left;"><strong>GIScale</strong></td><td style="text-align:left;">GI（<a href="https://en.wikipedia.org/wiki/Global_illumination" target="_blank" rel="noreferrer">Global Illumination</a>）的缩放系数</td></tr><tr><td style="text-align:left;"><strong>GISample</strong></td><td style="text-align:left;">GI 的采样系数</td></tr><tr><td style="text-align:left;"><strong>Bounces</strong></td><td style="text-align:left;">光线反弹的次数，取值范围 [1, 4] <br> 反弹的含义是当前光源照射到某个物体，反弹后抵达探针的过程 <br> 如光线的反弹次数超出该属性，将不会被记录到烘焙结果内 <br></td></tr><tr><td style="text-align:left;"><strong>Reduceing Ringing</strong></td><td style="text-align:left;">在某些情况下，光照探针的光照可能从亮部穿透到暗部从而形成环状，修改这个属性可以改善这种情况，但是可能会导致光照不真实的情况</td></tr><tr><td style="text-align:left;"><strong>Show Probe</strong></td><td style="text-align:left;">是否显示光照探针 <br> 需要在 <strong>层级管理器</strong> 内选中带有 <strong>LightProbeGroup</strong> 组件的节点 <br> <img src="'+n+'" alt="probe"></td></tr><tr><td style="text-align:left;"><strong>Show Wireframe</strong></td><td style="text-align:left;">是否显示光照探针间的连线 <br> 需要在 <strong>层级管理器</strong> 内选中带有 <strong>LightProbeGroup</strong> 组件的节点 <br> <img src="'+l+'" alt="wireframe"></td></tr><tr><td style="text-align:left;"><strong>Show Convex</strong></td><td style="text-align:left;">是否显示凸包线框及顶点法线 <br> 需要在 <strong>层级管理器</strong> 内选中带有 <strong>LightProbeGroup</strong> 组件的节点 <br> <img src="'+a+'" alt="convex"></td></tr><tr><td style="text-align:left;"><strong>Bake Light Probe</strong></td><td style="text-align:left;">烘焙光照探针</td></tr><tr><td style="text-align:left;"><strong>Clear Result</strong></td><td style="text-align:left;">清除烘焙的结果</td></tr><tr><td style="text-align:left;"><strong>Cancel</strong></td><td style="text-align:left;">取消烘焙过程，该按钮仅当点击 <strong>Bake Light Probe</strong> 后会生效</td></tr></tbody></table><h2 id="操作" tabindex="-1">操作 <a class="header-anchor" href="#操作" aria-label="Permalink to &quot;操作&quot;">​</a></h2><p>点击 <strong>Bake Light Probe</strong> 可以烘焙光照探针，点击 <strong>Clear Result</strong> 清除烘焙的结果。</p><p>烘焙过程中可以点击 <strong>Cancel</strong> 取消烘焙。</p><p>在下方的信息展示面板可以查看到烘焙的进度。</p><p><img src="'+g+'" alt="info"></p><p>开发者也可通过 <strong>Show Probe</strong>、<strong>Show Wireframe</strong> 以及 <strong>Show Convex</strong> 选项在场景内查看探针是否符合预期的结果。</p><p>可参考 <a href="./example.html">探针示例</a> 以查看美术工作流。</p>',13),c=[d];function p(h,b,f,_,m,x){return r(),e("div",null,c)}const P=t(i,[["render",p]]);export{u as __pageData,P as default};