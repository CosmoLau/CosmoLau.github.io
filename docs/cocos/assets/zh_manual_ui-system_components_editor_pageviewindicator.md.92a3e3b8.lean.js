import{_ as t,v as e,b as a,R as i}from"./chunks/framework.5ffcbaff.js";const r="/docs/cocos/assets/pageviewindicator.37da438b.png",f=JSON.parse('{"title":"PageViewIndicator 组件参考","description":"","frontmatter":{},"headers":[],"relativePath":"zh/manual/ui-system/components/editor/pageviewindicator.md","filePath":"zh/manual/ui-system/components/editor/pageviewindicator.md"}'),o={name:"zh/manual/ui-system/components/editor/pageviewindicator.md"},s=i('<h1 id="pageviewindicator-组件参考" tabindex="-1">PageViewIndicator 组件参考 <a class="header-anchor" href="#pageviewindicator-组件参考" aria-label="Permalink to &quot;PageViewIndicator 组件参考&quot;">​</a></h1><p>PageViewIndicator 用于显示 PageView 当前的页面数量和标记当前所在的页面。</p><p><img src="'+r+'" alt="PageViewIndicator"></p><p>点击 <strong>属性检查器</strong> 下面的 <strong>添加组件</strong> 按钮，然后选择 <strong>UI -&gt; PageViewIndicator</strong> 即可添加 PageViewIndicator 组件到节点上。</p><p>PageViewIndicator 的脚本接口请参考 <a href="./__APIDOC__/zh/class/PageViewIndicator.html">PageViewIndicator API</a>。</p><p>关于使用可以参考范例 <strong>PageView</strong>（<a href="https://github.com/cocos/cocos-test-projects/tree/v3.7/assets/cases/ui/15.pageview" target="_blank" rel="noreferrer">GitHub</a> | <a href="https://gitee.com/mirrors_cocos-creator/test-cases-3d/tree/v3.7/assets/cases/ui/15.pageview" target="_blank" rel="noreferrer">Gitee</a>）。</p><h2 id="pageviewindicator-属性" tabindex="-1">PageViewIndicator 属性 <a class="header-anchor" href="#pageviewindicator-属性" aria-label="Permalink to &quot;PageViewIndicator 属性&quot;">​</a></h2><table><thead><tr><th style="text-align:left;">属性</th><th style="text-align:left;">功能说明</th></tr></thead><tbody><tr><td style="text-align:left;">spriteFrame</td><td style="text-align:left;">每个页面标记显示的图片</td></tr><tr><td style="text-align:left;">direction</td><td style="text-align:left;">页面标记摆放方向，分别为 <strong>水平方向</strong> 和 <strong>垂直方向</strong></td></tr><tr><td style="text-align:left;">cellSize</td><td style="text-align:left;">每个页面标记的大小</td></tr><tr><td style="text-align:left;">spacing</td><td style="text-align:left;">每个页面标记之间的边距</td></tr></tbody></table><h2 id="详细说明" tabindex="-1">详细说明 <a class="header-anchor" href="#详细说明" aria-label="Permalink to &quot;详细说明&quot;">​</a></h2><p>PageViewIndicator 一般不会单独使用，它需要与 <code>PageView</code> 配合使用，可以通过相关属性，来进行创建相对应页面的数量的标记，当你滑动到某个页面的时，PageViewIndicator 就会高亮它对应的标记。</p>',10),n=[s];function d(c,l,g,p,h,w){return e(),a("div",null,n)}const P=t(o,[["render",d]]);export{f as __pageData,P as default};