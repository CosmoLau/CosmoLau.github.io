import{_ as o,c as t,o as n,a4 as s}from"./chunks/framework.uQk9_EO2.js";const i="/docs/cocos/assets/add-component.xIGR0QIB.png",a="/docs/cocos/assets/add-clip.Car8A3Fu.png",r="/docs/cocos/assets/mount-clip.n5kj_-kQ.png",c="/docs/cocos/assets/drag-clip.xKHynHJ4.gif",p="/docs/cocos/assets/empty-clip.CfQnJIt3.png",e="/docs/cocos/assets/add-new-clip.CgmjPfbl.png",g="/docs/cocos/assets/add-new-clip2.y69BhGSS.png",S=JSON.parse('{"title":"创建动画组件和动画剪辑","description":"","frontmatter":{},"headers":[],"relativePath":"zh/animation/animation-create.md","filePath":"zh/animation/animation-create.md","lastUpdated":1712305443000}'),d={name:"zh/animation/animation-create.md"},m=s('<h1 id="创建动画组件和动画剪辑" tabindex="-1">创建动画组件和动画剪辑 <a class="header-anchor" href="#创建动画组件和动画剪辑" aria-label="Permalink to &quot;创建动画组件和动画剪辑&quot;">​</a></h1><p>在使用 <strong>动画编辑器</strong> 制作动画之前需要先在 <strong>层级管理器</strong> 或者 <strong>场景编辑器</strong> 中选择要添加动画的节点，然后添加 <a href="./animation-comp">动画组件</a>，并在组件上挂载 <strong>动画剪辑（Animation Clip）</strong>，便可以编辑动画数据，编辑后的动画数据会保存在当前的动画剪辑中。没有挂载 Clip 的节点是无法编辑动画数据的。</p><p>如果当前选中节点没有动画组件，则 <strong>动画编辑器</strong> 的界面上会显示 <strong>添加 Animation 组件</strong> 按钮，点击即可在 <strong>属性检查器</strong> 上添加 <strong>动画组件</strong>。</p><p><img src="'+i+'" alt="add component"></p><p>继续点击 <strong>动画编辑器</strong> 中的 <strong>新建 AnimationClip 文件</strong> 按钮并命名（例如 <code>animation</code>）：</p><p><img src="'+a+'" alt="add clip"></p><p>便可在 <strong>资源管理器</strong> 中自动创建一个动画剪辑（<code>animation.anim</code>）并挂载到 Animation 组件的 <code>DefaultClip</code> 属性上：</p><p><img src="'+r+'" alt="mount clip"></p><p>如果已有 <strong>动画剪辑（Animation Clip）</strong>，即使该节点无动画组件或无任何动画剪辑，也可以通过拖拽 Animation Clip 到 Animation 窗口上，引擎会自动创建 <strong>Animation</strong> 组件并</p><p><img src="'+c+'" alt="drag and drop"></p><p>以上简单介绍了如何在 <strong>动画编辑器</strong> 中创建动画组件和动画剪辑，更多关于动画组件的创建和属性说明请参考 <a href="./animation-comp">动画组件参考</a>。更多创建动画剪辑的方法请参考文末部分的内容。</p><p>然后继续点击 <strong>进入动画编辑模式</strong> 即可开始 <a href="./edit-animation-clip">编辑动画剪辑</a>。新建的空的动画剪辑在动画编辑器中显示如下：</p><p><img src="'+p+'" alt="empty clip"></p><h2 id="挂载新动画剪辑" tabindex="-1">挂载新动画剪辑 <a class="header-anchor" href="#挂载新动画剪辑" aria-label="Permalink to &quot;挂载新动画剪辑&quot;">​</a></h2><p>一个 Animation 组件可以挂载多份动画剪辑，若需要额外在已有动画剪辑的对象上创建并挂载新的动画剪辑，有以下几种方式：</p><ol><li><p>在 <strong>资源管理器</strong> 中点击左上方的 <strong>+</strong> 按钮，或者右键点击空白区域，然后选择 <strong>Animation Clip</strong>，这时候会在 <strong>资源管理器</strong> 中生成一个动画剪辑文件（默认名为 <code>animation</code>）。</p><p>然后在 <strong>层级管理器</strong> 中选中对应节点，在 <strong>属性检查器</strong> 中找到 Animation 组件（<code>cc.Animation</code>），修改 <code>Clips</code> 属性的数值。例如原本只挂载了一个 clip 文件，现在想要再添加一个，那么就将原本的 <strong>1</strong> 改成 <strong>2</strong>。</p><p><img src="'+e+'" alt="add-clip"></p><p>最后将刚刚在 <strong>资源管理器</strong> 中创建的动画剪辑，拖拽到上图中的 <code>cc.AnimationClip</code> 选择框中即可。</p></li><li><p>在 <strong>属性检查器</strong> 中找到 Animation 组件（<code>cc.Animation</code>），修改 <code>Clips</code> 属性的数值。</p><p>然后点击新出现的空的 <code>cc.AnimationClip</code> 选择框后面的查找按钮，在弹出的搜索窗口中点击右上方的 <strong>创建</strong> 按钮，即可自动在 <strong>资源管理器</strong> 中创建动画剪辑并挂载到 <code>cc.AnimationClip</code> 选择框中。</p><p><img src="'+g+'" alt="add-clip"></p></li><li><p>通过脚本动态创建动画剪辑，详情请参考 <a href="./use-animation-curve">程序化编辑动画剪辑</a>。</p></li></ol><p>可以在 <strong>动画编辑器</strong> 左上角的 <strong>Clips</strong> 下拉列表切换需要编辑的动画剪辑。</p>',17),l=[m];function _(h,A,C,f,u,x){return n(),t("div",null,l)}const k=o(d,[["render",_]]);export{S as __pageData,k as default};