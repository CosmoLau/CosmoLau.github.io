import{_ as s,v as o,b as a,R as t}from"./chunks/framework.5ffcbaff.js";const n="/docs/cocos/assets/visualstudio.75b0d59f.png",e="/docs/cocos/assets/androidstudio.edcdd4e1.png",l="/docs/cocos/assets/xcode.2f1eaeea.png",E=JSON.parse('{"title":"原生引擎内存泄漏检测系统","description":"","frontmatter":{},"headers":[],"relativePath":"zh/manual/advanced-topics/memory-leak-detector.md","filePath":"zh/manual/advanced-topics/memory-leak-detector.md"}'),i={name:"zh/manual/advanced-topics/memory-leak-detector.md"},p=t(`<h1 id="原生引擎内存泄漏检测系统" tabindex="-1">原生引擎内存泄漏检测系统 <a class="header-anchor" href="#原生引擎内存泄漏检测系统" aria-label="Permalink to &quot;原生引擎内存泄漏检测系统&quot;">​</a></h1><p>原生引擎使用 C++ 语言开发，为了方便游戏和引擎开发者快速查找内存泄漏，Creator 从 v3.4 开始提供了 <strong>内存泄漏检测系统</strong>。</p><p>相对其他内存泄漏查找工具，Cocos Creator 内置的内存泄漏检测工具有以下优点：</p><ul><li><strong>跨平台</strong>：支持 Windows/Android/Mac/iOS 平台。</li><li><strong>易用性</strong>：无需下载额外的工具以及进行复杂的配置。支持输出内存泄漏处的堆栈信息，方便快速定位泄漏。</li><li><strong>一致性</strong>：各平台的使用流程几乎一致，都是从原生平台对应的 IDE 中启动游戏 -&gt; 运行一段时间 -&gt; 关闭游戏 -&gt; 查看 IDE 输出日志。</li><li><strong>实时性</strong>：查找泄露过程中的游戏帧率虽有下降，但仍然保持实时运行帧率。</li><li><strong>精确性</strong>：理论上零漏报，零误报。</li></ul><h2 id="使用步骤" tabindex="-1">使用步骤 <a class="header-anchor" href="#使用步骤" aria-label="Permalink to &quot;使用步骤&quot;">​</a></h2><ol><li><p>内存泄漏检测系统默认是关闭的。若要开启，需要将引擎目录下 <code>engine/native/cocos/base/Config.h</code> 文件中宏 <code>USE_MEMORY_LEAK_DETECTOR</code> 的值修改为 <strong>1</strong>。</p><div class="language-cpp"><button title="Copy Code" class="copy"></button><span class="lang">cpp</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#89DDFF;font-style:italic;">#ifndef</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">USE_MEMORY_LEAK_DETECTOR</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;font-style:italic;">#define</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">USE_MEMORY_LEAK_DETECTOR</span><span style="color:#A6ACCD;"> 1</span></span>
<span class="line"><span style="color:#89DDFF;font-style:italic;">#endif</span></span></code></pre></div></li><li><p>由于实现机制的不同，Android 平台上需要额外执行以下步骤：</p><p>在项目目录的 <code>native/engine/android/CMakeLists.txt</code> 文件中添加一行代码 <code>set(CMAKE_CXX_FLAGS &quot;\${CMAKE_CXX_FLAGS} -finstrument-functions&quot;)</code>，如下所示：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">set(CC_PROJ_SOURCES)</span></span>
<span class="line"><span style="color:#A6ACCD;">set(CC_COMMON_SOURCES)</span></span>
<span class="line"><span style="color:#A6ACCD;">set(CC_ALL_SOURCES)</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">set(CMAKE_CXX_FLAGS &quot;\${CMAKE_CXX_FLAGS} -finstrument-functions&quot;)</span></span></code></pre></div></li><li><p>从原生平台对应的 IDE（如 Visual Studio、Android Studio、Xcode）启动游戏，运行一段时间后关闭游戏，若存在内存泄漏，则此时会在 IDE 的输出窗口中输出内存泄漏的详细信息。</p><ul><li><p><strong>Windows 平台</strong></p><p><img src="`+n+'" alt="visual studio"></p><p>若项目构建编译的是 Release 版本，如果需要更友好的堆栈信息，可在 Visual Studio 中右键点击左侧的可执行项目，选择 <strong>属性</strong>，打开项目属性页，进行如下设置：</p><ul><li><p>链接器 -&gt; 调试 -&gt; 生成调试信息：生成调试信息（/DEBUG）</p></li><li><p>C/C++ -&gt; 优化 -&gt; 优化：已禁用（/Od）</p></li><li><p>C/C++ -&gt; 优化 -&gt; 内联函数扩展：已禁用（/Ob0）</p></li></ul></li><li><p><strong>Android 平台</strong></p><p><img src="'+e+'" alt="android studio"></p></li><li><p><strong>Mac/iOS 平台</strong></p><p><img src="'+l+'" alt="xcode"></p></li></ul></li><li><p>根据原生平台 IDE 输出的信息修复泄漏，如此反复，直到没有泄漏为止。</p></li></ol>',6),c=[p];function r(d,C,g,_,u,A){return o(),a("div",null,c)}const h=s(i,[["render",r]]);export{E as __pageData,h as default};