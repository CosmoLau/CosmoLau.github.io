import{_ as a,v as t,b as e,R as r}from"./chunks/framework.5ffcbaff.js";const o="/docs/cocos/assets/button-breakdown.82b0ac6d.png",n="/docs/cocos/assets/alignment.4b3d4f16.png",s="/docs/cocos/assets/align-to-right.1b669c16.png",_=JSON.parse('{"title":"使用场景编辑器搭建场景图像","description":"","frontmatter":{},"headers":[],"relativePath":"zh/manual/concepts/scene/scene-editing.md","filePath":"zh/manual/concepts/scene/scene-editing.md"}'),i={name:"zh/manual/concepts/scene/scene-editing.md"},l=r('<h1 id="使用场景编辑器搭建场景图像" tabindex="-1">使用场景编辑器搭建场景图像 <a class="header-anchor" href="#使用场景编辑器搭建场景图像" aria-label="Permalink to &quot;使用场景编辑器搭建场景图像&quot;">​</a></h1><p>本文将介绍使用 <a href="./../../editor/scene/">场景编辑器</a> 创建和编辑场景图像时的工作流程和技巧。</p><h2 id="使用节点创建菜单快捷添加基本节点类型" tabindex="-1">使用节点创建菜单快捷添加基本节点类型 <a class="header-anchor" href="#使用节点创建菜单快捷添加基本节点类型" aria-label="Permalink to &quot;使用节点创建菜单快捷添加基本节点类型&quot;">​</a></h2><p>当我们开始在场景中添加内容时，一般会先从 <strong>层级管理器</strong> 的 <strong>创建节点菜单</strong> 开始，也就是点击左上角的 <strong>+</strong> 按钮弹出的菜单，从几个简单的节点分类中选择我们需要的基础节点类型并添加到场景中。</p><p>添加节点时，在 <strong>层级管理器</strong> 中选中的节点将成为新建节点的父节点，如果你选中了一个折叠显示的节点然后通过菜单添加了新节点，需要展开刚才选中的节点才能看到新添加的节点。</p><h3 id="空节点" tabindex="-1">空节点 <a class="header-anchor" href="#空节点" aria-label="Permalink to &quot;空节点&quot;">​</a></h3><p>选择 <strong>创建节点菜单</strong> 中的 <strong>创建空节点</strong> 就能够创建一个不包含任何组件的节点。空节点可以作为组织其他节点的容器，也可以用来挂载开发者编写的逻辑和控制组件。另外在下文中我们也会介绍如何通过空节点和组件的组合，创造符合自己特殊要求的控件。</p><h3 id="_3d-对象" tabindex="-1">3D 对象 <a class="header-anchor" href="#_3d-对象" aria-label="Permalink to &quot;3D 对象&quot;">​</a></h3><p>选择 <strong>创建节点菜单</strong> 中的 <strong>创建 3D 对象</strong> 可以创建编辑器自带的一些比较基础的静态模型控件，目前包括立方体、圆柱体、球体、胶囊、圆锥体、圆环体、平面和四方形。若需要创建其他类型的模型，可参考 <a href="./../../engine/renderable/model-component.html">MeshRenderer 组件</a>。</p><h3 id="ui-节点" tabindex="-1">UI 节点 <a class="header-anchor" href="#ui-节点" aria-label="Permalink to &quot;UI 节点&quot;">​</a></h3><p>选择 <strong>创建节点菜单</strong> 中的 <strong>创建 UI</strong> 可以创建 UI 节点。Creator 3.0 的 UI 节点需要其任意上级节点至少得有一个含有 UITransform 组件，在创建时若不符合规则，便会自动添加一个 Canvas 节点作为它的父级。并且每一个 UI 节点本身也会带有 UITransform 组件。</p><p>所以 Canvas 节点是 UI 渲染的 <strong>渲染根节点</strong>，所有渲染相关的 UI 节点都要放在 Canvas 下面，这样做有以下好处：</p><ul><li>Canvas 能提供多分辨率自适应的缩放功能，以 Canvas 作为渲染根节点能够保证我们制作的场景在更大或更小的屏幕上都保持较好的图像效果，详见 <a href="./../..//ui-system/components/engine/multi-resolution.html">多分辨率适配方案</a>相关文档。</li><li>Canvas 节点会根据屏幕大小自动居中显示，所以 Canvas 下的 UI 节点会以屏幕中心作为坐标系的原点。根据我们的经验，这样设置会简化场景和 UI 的设置（比如让按钮元素的文字默认出现在按钮节点的正中），也能让控制 UI 节点位置的脚本更容易编写。</li></ul><h4 id="_2d-渲染节点" tabindex="-1">2D 渲染节点 <a class="header-anchor" href="#_2d-渲染节点" aria-label="Permalink to &quot;2D 渲染节点&quot;">​</a></h4><p>通过 <strong>创建节点菜单</strong> 可以创建像 ParticleSystem（粒子）、Sprite（精灵）、Label（文字）、Mask（遮罩）等由节点和基础渲染组件组成的节点类型。</p><p>这里的基础 2D 渲染组件，是无法用其他组件的组合来代替的。需要注意的是每个节点上只能添加一个渲染组件，重复添加会导致报错。但是可以通过将不同渲染节点组合起来的方式实现复杂的界面控件，比如下面的 UI 控件节点。</p><h4 id="ui-控件节点" tabindex="-1">UI 控件节点 <a class="header-anchor" href="#ui-控件节点" aria-label="Permalink to &quot;UI 控件节点&quot;">​</a></h4><p>从 <strong>创建节点菜单</strong> 中的 <strong>UI</strong> 类别里可以创建包括 Button（按钮）、Widget（对齐挂件）、Layout（布局）、ScrollView（滚动视图）、EditBox（输入框）等节点在内的常用 UI 控件。</p><p>UI 节点大部分都是由渲染节点组合而成的，比如我们通过菜单创建的 Button 节点，就包括了一个包含 Button + Sprite 组件的按钮背景节点，加上一个包含 Label 组件的标签节点：</p><p><img src="'+o+'" alt=""></p><p>使用菜单创建基础类型的节点，是快速向场景中添加内容的推荐方法，之后我们还可以根据需要对使用菜单创建的节点进行编辑，创造我们需要的组合。</p><p>关于 UI 节点的更多内容，可参考 <a href="./../../2d-object/ui-system/">UI 结构说明</a>。</p><h3 id="逻辑节点的归属" tabindex="-1">逻辑节点的归属 <a class="header-anchor" href="#逻辑节点的归属" aria-label="Permalink to &quot;逻辑节点的归属&quot;">​</a></h3><p>除了有具体渲染等任务的节点之外，建议在场景根目录设置一些节点只负责挂载脚本，执行游戏逻辑，不包含任何渲染等相关内容。通常我们将这些节点放置在场景根层级，和 Canvas 节点并列，方便协作的时候其他开发者能够第一时间找到游戏逻辑并进行相关的数据绑定。</p><h2 id="提高场景制作效率的技巧" tabindex="-1">提高场景制作效率的技巧 <a class="header-anchor" href="#提高场景制作效率的技巧" aria-label="Permalink to &quot;提高场景制作效率的技巧&quot;">​</a></h2><p><strong>场景编辑器</strong> 包括 3D 和 2D 两种视图，3D 视图用于 3D 场景编辑，2D 视图则主要用于 UI 节点等 2D 元素的编辑，可通过编辑器左上方工具栏中的 3D/2D 按钮切换场景视图。<br> 以下几种快捷方式对两种视图都适用：</p><ul><li>在 <strong>层级管理器</strong> 里选中一个节点，然后双击或者按 <kbd>F</kbd> 就可以在 <strong>场景编辑器</strong> 中聚焦这个节点。</li><li>选中一个节点后按 <kbd>Cmd/Ctrl + D</kbd> 会在该节点相同位置复制并粘贴一个同样的节点，当我们需要快速制作多个类似节点时可以用这个命令提高效率。</li><li>在 <strong>场景编辑器</strong>/<strong>层级管理器</strong> 中，按住 <kbd>Cmd/Ctrl</kbd> 键依次点击你想要的节点，就可以同时选中多个节点。<kbd>Shift</kbd> 键则可以连选节点，不需要一个一个选中。</li></ul><h3 id="对齐-平均分布节点" tabindex="-1">对齐/平均分布节点 <a class="header-anchor" href="#对齐-平均分布节点" aria-label="Permalink to &quot;对齐/平均分布节点&quot;">​</a></h3><p>当 <strong>场景编辑器</strong> 为 <strong>2D</strong> 视图时，左上角有一排按钮可以用来在选中多个节点时将这些节点对齐或者平均分布。具体的规则如下：</p><p><img src="'+n+'" alt="alignment"></p><p>假设三个 Label 节点都已经选中，从左到右的 6 个对齐按钮会依次将这些节点：</p><ul><li>顶部对齐，按照最靠近上方的边界对齐（而不是最上方的节点的上边界）</li><li>垂直居中对齐，按照整体的水平中线对齐</li><li>底部对齐，按照最靠近下方的边界对齐</li><li>左对齐，按照最靠近左边的边界对齐</li><li>水平居中对齐，按照整体的垂直中线对齐</li><li>右对齐，按照最靠近右边的边界对齐</li></ul><p>后半部分从左到右的 6 个分布按钮会依次将这些节点：</p><ul><li>顶部分布，按照节点的上边界平均分布</li><li>垂直居中分布，按照节点的水平中线平均分布</li><li>底部分布，按照节点的下边界平均分布</li><li>左分布，按照节点的左边界平均分布</li><li>水平居中分布，按照节点的垂直中线平均分布</li><li>右分布，按照节点的右边界平均分布</li></ul><p><strong>注意</strong>：不管是一开始测定左右边界和中线还是之后将每个节点对齐/平均分布时的参照，都是节点约束框的中心或某条边界，而不是节点的位置坐标。</p><p>例如下图中我们将三个宽度不同的 Label 节点向右对齐后，得到的是三个节点约束框的右边界对齐，而不是三个节点位置的 <code>x</code> 坐标变成一致。</p><p><img src="'+s+'" alt="align to right"></p><h2 id="场景显示效果" tabindex="-1">场景显示效果 <a class="header-anchor" href="#场景显示效果" aria-label="Permalink to &quot;场景显示效果&quot;">​</a></h2><p>目前还支持在场景中设置天空盒、全局雾效果以及阴影等，以便更好地丰富场景，渲染并展示场景环境。具体可参考：</p><ul><li><a href="./skybox.html">天空盒</a></li><li><a href="./fog.html">全局雾效</a></li><li><a href="./light/shadow.html">阴影</a></li></ul>',40),h=[l];function d(c,p,g,u,m,b){return t(),e("div",null,h)}const k=a(i,[["render",d]]);export{_ as __pageData,k as default};