import{_ as t,c as e,o as s,a5 as l}from"./chunks/framework.CqnjdYks.js";const o="/docs/cocos/assets/lightmap-panel.lp03omAq.png",a="/docs/cocos/assets/light-bakeable.BmUvHcTW.png",n="/docs/cocos/assets/meshrenderer-bakeable.DfHn4xoH.png",r="/docs/cocos/assets/overlap_back.CVJOaG57.png",g="/docs/cocos/assets/overlap_front.MONkRUc6.png",i="/docs/cocos/assets/overlap_lightmap.DR7q_nl7.png",p="/docs/cocos/assets/uvspace_lightmap.CBnFDhNh.png",c="/docs/cocos/assets/lightmap-generate.PUqfLxPx.png",d="/docs/cocos/assets/lightmap-result.DbgXPxdx.png",q=JSON.parse('{"title":"光照贴图","description":"","frontmatter":{},"headers":[],"relativePath":"zh/manual/concepts/scene/light/lightmap.md","filePath":"zh/manual/concepts/scene/light/lightmap.md"}'),h={name:"zh/manual/concepts/scene/light/lightmap.md"},m=l('<h1 id="光照贴图" tabindex="-1">光照贴图 <a class="header-anchor" href="#光照贴图" aria-label="Permalink to &quot;光照贴图&quot;">​</a></h1><p>烘焙系统会对光源稳定的静态物体所受到的光照和阴影等进行预先计算，计算产生的结果存放在一张纹理贴图中，这张贴图我们称之为 <strong>光照贴图</strong>。</p><p>生成的光照贴图 Creator 会在运行时自动处理并使用。在光源固定的场景中，使用光照贴图代替实时的光照计算，可以减少资源消耗，从而提高场景运行效率。</p><h2 id="光照贴图面板" tabindex="-1">光照贴图面板 <a class="header-anchor" href="#光照贴图面板" aria-label="Permalink to &quot;光照贴图面板&quot;">​</a></h2><p>点击编辑器菜单栏的 <strong>项目 -&gt; 光照贴图</strong>，打开光照贴图面板。面板由 <strong>Scene</strong> 和 <strong>Baked</strong> 两个页面组成。</p><p><img src="'+o+'" alt="bake result"></p><ul><li><strong>Scene</strong>：主要用于配置生成光照贴图相关的参数。</li><li><strong>Baked</strong>：主要用于展示生成的光照贴图及其相关信息。</li></ul><p>具体内容请查看下方 <strong>生成光照贴图</strong> 部分的内容。</p><h3 id="属性说明" tabindex="-1">属性说明 <a class="header-anchor" href="#属性说明" aria-label="Permalink to &quot;属性说明&quot;">​</a></h3><p><strong>Scene</strong> 页面各参数的说明如下：</p><table><thead><tr><th style="text-align:left;">参数</th><th style="text-align:left;">说明</th></tr></thead><tbody><tr><td style="text-align:left;">MSAA</td><td style="text-align:left;">多重采样，可选值包括：1、2、4、8</td></tr><tr><td style="text-align:left;">Resolution</td><td style="text-align:left;">生成的光照贴图的分辨率，可选值包括：128、256、512、1024、2048</td></tr><tr><td style="text-align:left;">Gamma</td><td style="text-align:left;">Gamma 矫正值</td></tr><tr><td style="text-align:left;">GIScale</td><td style="text-align:left;">全局光照缩放系数</td></tr><tr><td style="text-align:left;">GISamples</td><td style="text-align:left;">全局光照采样系数</td></tr><tr><td style="text-align:left;">AOLevel</td><td style="text-align:left;">AO（Ambient Occlusion，环境光遮蔽）级别</td></tr><tr><td style="text-align:left;">AOStrength</td><td style="text-align:left;">AO 强度</td></tr><tr><td style="text-align:left;">AORadius</td><td style="text-align:left;">AO 半径</td></tr><tr><td style="text-align:left;">AOColor</td><td style="text-align:left;">AO 颜色</td></tr></tbody></table><h2 id="生成光照贴图" tabindex="-1">生成光照贴图 <a class="header-anchor" href="#生成光照贴图" aria-label="Permalink to &quot;生成光照贴图&quot;">​</a></h2><ol><li><p>在 <strong>层级管理器</strong> 中选中光源节点（带有光源组件），然后在 <strong>属性检查器</strong> 中设置光源组件的 <strong>StaticSettings</strong>。</p><p><img src="'+a+'" alt="enable lightbake"></p><ul><li><p><strong>EditorOnly</strong>：是否只在编辑器中生效</p></li><li><p><strong>CastShadow</strong>：是否投射静态阴影</p></li></ul></li><li><p>在 <strong>层级管理器</strong> 中选中要生成光照贴图的模型节点（带有 <a href="./../../../engine/renderable/model-component.html">MeshRenderer 组件</a>），然后在 <strong>属性检查器</strong> 中设置 <strong>Light Map Settings</strong>，勾选 <code>Bakeable</code> 属性。</p><p><img src="'+n+'" alt="model lighting map settings"></p><ul><li><p><strong>Bakeable</strong>：是否烘焙静态光照</p></li><li><p><strong>CastShadow</strong>：是否投射静态阴影</p></li><li><p><strong>ReceiveShadow</strong>：是否接受静态阴影</p></li><li><p><strong>LightmapSize</strong>：模型光照贴图尺寸</p></li></ul><blockquote><p><strong>注意</strong>：要生成光照贴图的模型有以下要求：美术人员在制作模型资源时，除了模型本身的 UV，还需要另外包含一套 UV，用于光照贴图。</p></blockquote></li><li><p>光照贴图UV 不同与纹理的UV, 光照贴图UV不能重叠</p><blockquote><p><strong>注意</strong>：不正确的UV产生错误：</p><ol><li><p>不同平面的uv交错在一起</p><p><img src="'+r+'" alt="lightmap uv overlap"><img src="'+g+'" alt="lightmap uv overlap"><img src="'+i+'" alt="lightmap uv overlap"></p></li><li><p>UV块间没有保留间隔</p><p><img src="'+p+'" alt="lightmap uv space"></p></li></ol></blockquote></li><li><p>打开 <strong>光照贴图</strong> 面板，并设置好对应参数。然后点击 <strong>生成光照贴图</strong> 按钮，会弹出一个文件存储对话框，需要指定一个文件夹（必须在 <code>assets</code> 目录下）用于存放生成的光照贴图数据信息。即可看到在 <strong>光照贴图</strong> 面板下方输出了烘焙进度的日志信息。</p><p><img src="'+c+'" alt="bake param"></p></li><li><p>烘焙结束后可在 <strong>光照贴图</strong> 面板的 <strong>Baked</strong> 页面查看生成的光照贴图，以及文件名、尺寸等相关信息。生成的光照贴图引擎会自动处理使用，无需开发者手动操作。</p><p><img src="'+d+'" alt="bake result"></p><ol><li><strong>烘焙结果</strong>：显示烘焙后生成的光照贴图，格式为 <strong>RGBE8</strong>，可根据需要选择 <strong>R</strong>/<strong>G</strong>/<strong>B</strong> 选项查看光照贴图对应的通道。</li><li><strong>清空光照贴图</strong>：用于删除生成的光照贴图及相关信息。</li><li><strong>信息输出面板</strong>：显示生成的光照贴图的文件名、大小等相关信息。</li></ol></li></ol>',13),_=[m];function u(f,x,b,k,y,S){return s(),e("div",null,_)}const A=t(h,[["render",u]]);export{q as __pageData,A as default};