import{_ as e,c as o,o as t,a4 as a}from"./chunks/framework.uQk9_EO2.js";const p="/docs/cocos/assets/t-pose.8PmGx7Sr.png",s="/docs/cocos/assets/flow.B9fchOtK.png",f=JSON.parse('{"title":"程序式动画简介","description":"","frontmatter":{},"headers":[],"relativePath":"zh/animation/marionette/procedural-animation/introduce.md","filePath":"zh/animation/marionette/procedural-animation/introduce.md","lastUpdated":1712305443000}'),r={name:"zh/animation/marionette/procedural-animation/introduce.md"},n=a('<h1 id="程序式动画简介" tabindex="-1">程序式动画简介 <a class="header-anchor" href="#程序式动画简介" aria-label="Permalink to &quot;程序式动画简介&quot;">​</a></h1><p>在了解程序化动画之前，我们需要先了解动画中所指的 “姿势（Pose）”，相信下面的图中的姿势您都有见过：</p><p><img src="'+p+'" alt="T-Pose"></p><blockquote><p>图片来自 <a href="https://sketchfab.com/3d-models/man-in-coat-character-human-riged-model-758a855697be47a1be0d707623e3907e" target="_blank" rel="noreferrer">https://sketchfab.com</a></p></blockquote><p>这就是动画制作中的 <em>绑定姿势</em>。因为整个人形伸直双手做出和 T 一样的形状，该姿势又称为 T-Pose。</p><blockquote><p>除了 T-Pose 之外，广泛应用在人形骨骼上的还有 A-Pose。</p></blockquote><p>不知道您有没有考虑过为什么会有 T-Pose 这样的 “怪异” 的姿势。</p><p>最初的原因可能已无法考证，但就现在来说 T-Pose 是最适合动画师制作动画的起始动画，动画师会从 T-Pose 开始制作角色的动画。因此 T-Pose 就这么作为动画工作流的一部分保留了下来。</p><p>我们可以从一个数学概念上去理解 T-Pose，如果正向 X 轴的起始位置 0，那么动画的起始姿态就是 T-Pose。</p><p>理解到这一点，我们就可以理解到角色的 “姿态”。我们可以理解为角色在某个时刻所体现出外观，这些外观由它的动画信息内所提供的变换（位置，旋转等）以及蒙皮等要素决定。也就是说当我们将数轴上的“光标”移动到某个时刻，从而得出数轴上当前的值是多少。同理我们在时间轴上移动动画，那么当时间轴停在某个时刻时，角色所处的样子，就称为他的一个姿态。</p><p>在引擎中，角色的 <strong>姿态</strong>，是指角色的所有骨骼在某一时刻的所有变换（位置、旋转）信息。求值动画图将产生姿态，而后，姿态被写入到场景中，配合蒙皮渲染实现骨骼动画。</p><p>程序式动画，是指以类似流程图的形式表达姿态的生成和变化。</p><p><img src="'+s+'" alt="flow.png"></p><p>如上图就是一个典型的程序式动画。</p><p>程序式动画和普通的动画差别在于，普通的动画通常来说开发者不能介入动画的采样行为，而程序式动画提供额外的能力可以供开发者在动画采样时，提取某些动画、混合或者姿态的信息于当前的动画进行加权混合等操作。</p><p>程序化动画系统提供了对动画剪辑、混合以及姿态的操作功能，这些功能可以使得开发者在运行时动态的根据需求来调整动画的采样过程，并产生输出，而输出既可以作为最终的输出输出到屏幕上，也可以作为其他动画采样的输入，从而形成复杂的动画系统。</p><p>我们以一个简单例子来说明程序化动画。</p><p>比如角色行走在不平的地面上，通常在制作动画剪辑时并不会考量这一点，因为美术资产的制作者并不清楚角色的脚可能处于什么高度，因此会制作角色平地行走的动画，而在运行时，由于地面的高低起伏，因此需要动态的计算出脚应该所在的高度，并将角色的脚 “移动” 到对应的高度，这里通常是采用逆向动力学（IK，Inverse Kinematic）的算法。</p><p>使用程序化动画，我们只需在姿势图内添加和 IK 相关的节点，并在运行时将计算 IK 所需要的信息传递给姿态图系统，通过 IK 解算器的运算即可得到正确的结果。</p><p>可以看到程序化动画通过提供可视化视图，从而使复杂动画的制作更易操作和理解。</p><h2 id="何时需要程序式动画" tabindex="-1">何时需要程序式动画 <a class="header-anchor" href="#何时需要程序式动画" aria-label="Permalink to &quot;何时需要程序式动画&quot;">​</a></h2><p>简单来说，当你需要动态修改骨骼，尤其需要根据环境来调整骨骼时，你应该考虑使用程序式动画能力。例如，当人形角色去触碰开关时，你需要将手部骨骼移动至开关位置，并且同时保证手臂做出相应调整。</p>',22),c=[n];function i(d,m,l,_,h,u){return t(),o("div",null,c)}const T=e(r,[["render",i]]);export{f as __pageData,T as default};