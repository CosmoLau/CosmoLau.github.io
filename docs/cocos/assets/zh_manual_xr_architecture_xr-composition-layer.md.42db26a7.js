import{_ as t,v as o,b as e,R as a}from"./chunks/framework.5ffcbaff.js";const r="/docs/cocos/assets/create-xr-actor.c06e8370.png",s="/docs/cocos/assets/add-empty-node.f498f071.png",c="/docs/cocos/assets/add-composition-comp.c19a29de.png",d="/docs/cocos/assets/add-camera.ce063962.png",i="/docs/cocos/assets/change-camera-pos.c58b856b.png",n="/docs/cocos/assets/set-clear-flags.ca76773a.png",p="/docs/cocos/assets/config-compositionlayer.3b33ae43.png",l="/docs/cocos/assets/overlay-effect.5ea30f61.gif",X=JSON.parse('{"title":"XR 合成层","description":"","frontmatter":{},"headers":[],"relativePath":"zh/manual/xr/architecture/xr-composition-layer.md","filePath":"zh/manual/xr/architecture/xr-composition-layer.md"}'),m={name:"zh/manual/xr/architecture/xr-composition-layer.md"},h=a('<h1 id="xr-合成层" tabindex="-1">XR 合成层 <a class="header-anchor" href="#xr-合成层" aria-label="Permalink to &quot;XR 合成层&quot;">​</a></h1><p>在 XR 应用开发中，合成层（Composition Layer）是一种常用的技术，通常应用在混合现实场景，将虚拟现实场景和真实世界场景进行混合，合成层将根据用户设定的 layer 深度将不同的 layer 分别渲染到不同的图层中，然后将这些图层进行合成，形成一个完整的XR场景。同时，通过调整图层的透明度和深度，能达到虚拟对象与真实世界对象完美融合的效果。Composition Layer 技术可以实现高质量的XR渲染效果，为 XR 应用的开发和体验提供了很大的帮助和支持。</p><h2 id="合成层功能" tabindex="-1">合成层功能 <a class="header-anchor" href="#合成层功能" aria-label="Permalink to &quot;合成层功能&quot;">​</a></h2><table><thead><tr><th>属性</th><th>说明</th></tr></thead><tbody><tr><td>Layer Setting</td><td>合成层效果设置。</td></tr><tr><td>--Type</td><td>合成层的类型： Overlay：将纹理呈现在 Eye Buffer 前面。 Underlay：将纹理呈现在 Eye Buffer 后面。</td></tr><tr><td>--Shape</td><td>提供两种种形状的合成层： <br>Quad：具有四个顶点的平面纹理，通常用来显示场景中的文本或信息。<br> Cylinder具有柱面弧度的圆柱形纹理，通常用于显示曲面 UI 界面。</td></tr><tr><td>--Redius</td><td>选择 Cylinder 时出现此项，设置曲面半径。</td></tr><tr><td>--CentralAngle</td><td>选择 Cylinder 时出现此项，设置中心角大小。</td></tr><tr><td>--Depth</td><td>定义合成层在场景中的顺序。数值越小，越靠近 Eye Buffer。</td></tr><tr><td>TextureSetting</td><td>材质效果设置。</td></tr><tr><td>--Camera</td><td>用于绑定合成层要获取动态纹理的相机。</td></tr><tr><td>--Width</td><td>设置相机 RT 的宽。</td></tr><tr><td>--Height</td><td>设置相机 RT 的高。</td></tr></tbody></table><blockquote><p><strong>注意</strong>：</p><ol><li>合成层功能对接 OpenXR 的核心 API 扩展，适用于所有对接 OpenXR 标准的设备。</li><li>必须将摄像机放置在圆柱内切球内。如果摄像机接近内切球表面，合成层将显示异常。</li></ol></blockquote><h2 id="使用合成层" tabindex="-1">使用合成层 <a class="header-anchor" href="#使用合成层" aria-label="Permalink to &quot;使用合成层&quot;">​</a></h2><p>目前合成层功能可以渲染动态纹理，主要应用于渲染 Camera 所采集的画面。</p><p>以下案例实现一个 Overlay 表现的镜子对象，可以反射 XR 角色的动作表现。</p><h3 id="配置步骤" tabindex="-1">配置步骤 <a class="header-anchor" href="#配置步骤" aria-label="Permalink to &quot;配置步骤&quot;">​</a></h3><p>先在场景中创建完整的 XR 代理节点用于设备追踪。并绑定简单的头显/手柄模型。</p><p><img src="'+r+'" alt=""></p><p>场景中添加任意节点，以空节点为例。为其添加合成层组件，在属性检查器面板点击添加组件，找到 <strong>XR &gt; Extra &gt; XRCompositionLayer</strong>，添加组件。</p><img src="'+s+'" style="zoom:50%;"><img src="'+c+'" alt="add-composition-comp" style="zoom:50%;"><p>在场景中创建一个 Camera 节点，并将其位置、朝向调整为需要的表现。</p><img src="'+d+'" style="zoom:50%;"><p><img src="'+i+'" alt=""></p><p>将 Camera 的 Clear Flags 设置为 SOLID_COLOR，并将 Clear Color 的透明度设置为 0。</p><img src="'+n+'" style="zoom:50%;"><p>将此 Camera 节点挂载到 Node 身上添加的 cc.XRCompositionLayer 组件的 Camera 属性中。并调整其渲染分辨率、Scale 大小和位置，尽量保证 Scale 的长宽比和渲染分辨率的长宽比相同，否则画面会出现拉伸。Layer Setting 的 Type 选为Overlay，Shape选为Quad。</p><img src="'+p+'" style="zoom:50%;"><p>打包后效果如下：</p><p><img src="'+l+'" alt="overlay-effect"></p><blockquote><p><strong>注意</strong>：使用合成层功能需要扩展版本 <strong>&gt;=1.2.0</strong>，编辑器版本 <strong>&gt;=3.7.3</strong>。</p></blockquote>',24),g=[h];function y(_,u,f,b,R,x){return o(),e("div",null,g)}const q=t(m,[["render",y]]);export{X as __pageData,q as default};