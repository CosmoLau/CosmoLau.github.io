import{_ as o,c as t,o as e,a4 as s}from"./chunks/framework.uQk9_EO2.js";const a="/docs/cocos/assets/design_resolution.DXOSDi3x.png",r="/docs/cocos/assets/fit_height.6rDqS5W4.png",n="/docs/cocos/assets/fit_width.GiqvfJsZ.png",i="/docs/cocos/assets/show_all.rtHEB67x.png",c="/docs/cocos/assets/resolution_config.Df3MNItv.png",b=JSON.parse('{"title":"多分辨率适配方案","description":"","frontmatter":{},"headers":[],"relativePath":"zh/ui-system/components/engine/multi-resolution.md","filePath":"zh/ui-system/components/engine/multi-resolution.md","lastUpdated":1712305443000}'),d={name:"zh/ui-system/components/engine/multi-resolution.md"},l=s('<h1 id="多分辨率适配方案" tabindex="-1">多分辨率适配方案 <a class="header-anchor" href="#多分辨率适配方案" aria-label="Permalink to &quot;多分辨率适配方案&quot;">​</a></h1><p>Cocos Creator 3.0 在整体设计上沿用了 Cocos Creator 2.x 一套资源适配多种分辨率屏幕的方案。简单概括来说，我们通过以下几个部分完成多分辨率适配解决方案：</p><ul><li><strong>Canvas（画布）</strong> 组件随时获得设备屏幕的实际分辨率并对场景中所有渲染元素进行适当的缩放。</li><li><strong>Widget（对齐挂件）</strong> 组件添加给 UI 节点，能够根据需要将元素对齐目标节点（默认是父节点）的不同参考位置。</li><li><strong>Label（文字）</strong> 组件内置了提供各种动态文字排版模式的功能，当文字的约束框由于 Widget 对齐要求发生变化时，文字会根据需要呈现完美的排版效果。</li><li><strong>Sliced Sprite（九宫格精灵图）</strong> 则提供了可任意指定尺寸的图像，同样可以满足各式各样的对齐要求，在任何屏幕分辨率上都显示高精度的图像。</li></ul><p>接下来我们首先了解设计分辨率、屏幕分辨率的概念，才能理解 <a href="./../editor/canvas">Canvas（画布）</a> 组件的缩放作用。</p><h2 id="设计分辨率和屏幕分辨率" tabindex="-1">设计分辨率和屏幕分辨率 <a class="header-anchor" href="#设计分辨率和屏幕分辨率" aria-label="Permalink to &quot;设计分辨率和屏幕分辨率&quot;">​</a></h2><p><strong>设计分辨率</strong> 是内容生产者在制作场景时使用的分辨率蓝本，而 <strong>屏幕分辨率</strong> 是游戏在设备上运行时的实际屏幕显示分辨率。</p><p>通常设计分辨率会采用市场目标群体中使用率最高的设备的屏幕分辨率，比如目前安卓设备中 <code>800 x 480</code> 和 <code>1280 x 720</code> 两种屏幕分辨率，或 iOS 设备中 <code>1136 x 640</code> 和 <code>960 x 640</code> 两种屏幕分辨率。这样当美术或策划使用设计分辨率设置好场景后，就可以自动适配最主要的目标人群设备。</p><p>那么当设计分辨率和屏幕分辨率出现差异时，会如何进行适配呢？</p><p>假设我们的设计分辨率为 <code>800 x 480</code>，美术制作了一个同样分辨率大小的背景图像。</p><p><img src="'+a+'" alt="design resolution"></p><h3 id="设计分辨率和屏幕分辨率宽高比相同" tabindex="-1">设计分辨率和屏幕分辨率宽高比相同 <a class="header-anchor" href="#设计分辨率和屏幕分辨率宽高比相同" aria-label="Permalink to &quot;设计分辨率和屏幕分辨率宽高比相同&quot;">​</a></h3><p>在屏幕分辨率的宽高比和设计分辨率相同时，假如屏幕分辨率是 <code>1600 x 960</code>，正好将背景图像放大 1600/800 = <strong>2 倍</strong> 就可以完美适配屏幕。这是最简单的情况，这里不再赘述。</p><h3 id="设计分辨率宽高比大于屏幕分辨率-适配高度避免黑边" tabindex="-1">设计分辨率宽高比大于屏幕分辨率，适配高度避免黑边 <a class="header-anchor" href="#设计分辨率宽高比大于屏幕分辨率-适配高度避免黑边" aria-label="Permalink to &quot;设计分辨率宽高比大于屏幕分辨率，适配高度避免黑边&quot;">​</a></h3><p>假设屏幕分辨率是 <code>1024 x 768</code>，在下图中以红色方框表示设备屏幕可见区域。我们使用菜单栏 <strong>项目 -&gt; 项目设置 -&gt; 项目数据</strong> 面板中的 <strong>适配高度</strong>（<code>Fit Height</code>）模式，将设计分辨率的高度自动撑满屏幕高度，也就是将场景图像放大到 768/480 = <strong>1.6 倍</strong>。</p><p><img src="'+r+'" alt="fit height"></p><p>这是设计分辨率宽高比大于屏幕分辨率时比较理想的适配模式，如上图所示，虽然屏幕两边会裁剪掉一部分背景图，但能够保证屏幕可见区域内不出现任何穿帮或黑边。之后可以通过 Widget（对齐挂件）调整 UI 元素的位置，来保证 UI 元素出现在屏幕可见区域里，我们在下一节 <a href="./widget-align">对齐策略</a> 中将会详细介绍。</p><h3 id="设计分辨率宽高比小于屏幕分辨率-适配宽度避免黑边" tabindex="-1">设计分辨率宽高比小于屏幕分辨率，适配宽度避免黑边 <a class="header-anchor" href="#设计分辨率宽高比小于屏幕分辨率-适配宽度避免黑边" aria-label="Permalink to &quot;设计分辨率宽高比小于屏幕分辨率，适配宽度避免黑边&quot;">​</a></h3><p>假设屏幕分辨率是 <code>1920 x 960</code>，同样在下图中以红色方框表示设备屏幕可见区域。我们使用菜单栏 <strong>项目 -&gt; 项目设置 -&gt; 项目数据</strong> 面板中的 <strong>适配宽度</strong>（<code>Fit Width</code>）模式，将设计分辨率的宽度自动撑满屏幕宽度，也就是将场景放大 1920/800 = <strong>2.4 倍</strong>。</p><p><img src="'+n+'" alt="fit width"></p><p>在设计分辨率宽高比较小时，使用这种模式会裁剪掉屏幕上下一部分背景图。</p><h3 id="不管屏幕宽高比如何-完整显示设计分辨率中的所有内容-允许出现黑边" tabindex="-1">不管屏幕宽高比如何，完整显示设计分辨率中的所有内容，允许出现黑边 <a class="header-anchor" href="#不管屏幕宽高比如何-完整显示设计分辨率中的所有内容-允许出现黑边" aria-label="Permalink to &quot;不管屏幕宽高比如何，完整显示设计分辨率中的所有内容，允许出现黑边&quot;">​</a></h3><p>最后一个例子，我们屏幕分辨率假设为 <code>640 x 960</code> 的竖屏，如果要确保背景图像完整的在屏幕中显示，需要同时开启 <strong>适配高度</strong> 和 <strong>适配宽度</strong>，这时场景图像的缩放比例是按照屏幕分辨率中较小的一维来计算的，在下图的例子中，由于屏幕宽高比小于 1，就会以宽度为准计算缩放倍率，即 640/800 = <strong>0.8 倍</strong>。</p><p><img src="'+i+'" alt="show all"></p><p>在这种显示模式下，屏幕上可能会出现黑边，或超出设计分辨率的场景图像（穿帮）。尽管一般情况下开发者会尽量避免黑边，但如果需要确保设计分辨率范围的所有内容都显示在屏幕上，也可以采用这种模式。</p><h3 id="根据屏幕宽高比-自动选择适配宽度或适配高度" tabindex="-1">根据屏幕宽高比，自动选择适配宽度或适配高度 <a class="header-anchor" href="#根据屏幕宽高比-自动选择适配宽度或适配高度" aria-label="Permalink to &quot;根据屏幕宽高比，自动选择适配宽度或适配高度&quot;">​</a></h3><p>如果对于屏幕周围可能被剪裁的内容没有严格要求，也可以不开启任何适配模式，这时会根据屏幕宽高比自动选择 <strong>适配高度</strong> 或 <strong>适配宽度</strong> 来避免黑边。也就是说，设计分辨率宽高比大于屏幕分辨率时，会自动适配高度（上面第一张图）；设计分辨率宽高比小于屏幕分辨率时，会自动适配宽度（上面第二张图）。</p><h3 id="设计分辨率只能在项目设置中统一配置" tabindex="-1">设计分辨率只能在项目设置中统一配置 <a class="header-anchor" href="#设计分辨率只能在项目设置中统一配置" aria-label="Permalink to &quot;设计分辨率只能在项目设置中统一配置&quot;">​</a></h3><p>当前的设计模式并没有加入多分辨率适配方式，所以在同一个项目里的多个 Canvas 的设计分辨率仍然采用同一套设计分辨率以及适配方案，开发者可以通过 <strong>项目 -&gt; 项目设置 -&gt; 项目数据</strong> 页面配置。</p><p><img src="'+c+'" alt="resolution-config"></p>',29),g=[l];function p(h,_,u,m,f,x){return e(),t("div",null,g)}const P=o(d,[["render",p]]);export{b as __pageData,P as default};