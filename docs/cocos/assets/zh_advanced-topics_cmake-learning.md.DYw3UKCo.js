import{_ as s,c as a,o as e,a4 as i}from"./chunks/framework.uQk9_EO2.js";const n="/docs/cocos/assets/folder3.CTZz3JUI.png",t="/docs/cocos/assets/folder4.v8JotJ5T.png",p="/docs/cocos/assets/project.Bu6nqPtf.png",l="/docs/cocos/assets/code1.DYtZ62gS.png",c="/docs/cocos/assets/code2.Bbt4kbWW.png",m=JSON.parse('{"title":"CMake 使用简介","description":"","frontmatter":{},"headers":[],"relativePath":"zh/advanced-topics/cmake-learning.md","filePath":"zh/advanced-topics/cmake-learning.md","lastUpdated":1712305443000}'),o={name:"zh/advanced-topics/cmake-learning.md"},d=i('<h1 id="cmake-使用简介" tabindex="-1">CMake 使用简介 <a class="header-anchor" href="#cmake-使用简介" aria-label="Permalink to &quot;CMake 使用简介&quot;">​</a></h1><h2 id="cmake-介绍" tabindex="-1">CMake 介绍 <a class="header-anchor" href="#cmake-介绍" aria-label="Permalink to &quot;CMake 介绍&quot;">​</a></h2><p>CMake 是一个非常强大的构建工具，可以大大简化软件的编译过程，提高开发效率。Cocos Creator 在各个原生平台都使用了 CMake。以下是一些快速了解 CMake 的优点：</p><ul><li>使用 CMakeLists.txt 文件描述整个项目的构建过程，而不是像其他构建工具一样使用脚本文件。</li><li>是跨平台的，可以在 Windows、Linux、macOS 等操作系统上运行。</li><li>可以自动生成 Makefile、Visual Studio 等 IDE 的工程文件，从而简化了软件的编译过程。</li><li>可以轻松的管理依赖库，将代码组织成模块等。</li><li>支持多种编程语言，包括 C、C++、Fortran、Java、Python 等。</li></ul><p>虽然 CMake 是一个非常强大的构建工具，但是它也有一些缺点，比如语法比较复杂，需要一定的学习成本。</p><p>开发者可以学习 CMake 的语法并添加自己的模块，以便在构建过程中执行特定的任务。例如，他们可以定义自己的预处理器宏或编译器选项，以便在构建期间执行自定义操作。另外，他们还可以编写脚本来修改工程文件，以便在不同的平台上进行不同的配置。详情可参考 <a href="./../editor/publish/native-options#二次开发">二次开发</a>。</p><p>如果您想深入学习 CMake，可以阅读本教程的其他章节，了解如何安装 CMake、创建 CMakeLists.txt 文件、指定编译器、添加源文件、添加依赖库和构建项目等。由于篇幅限制，本文无法对其进行详细介绍，例如如何使用 FindPackage、如何设置构建类型、如何安装和测试等内容。为了更好地掌握它，开发者需要查阅其他文档并进行更多的实践。</p><h2 id="安装" tabindex="-1">安装 <a class="header-anchor" href="#安装" aria-label="Permalink to &quot;安装&quot;">​</a></h2><p>为方便开发者，Cocos Creator 内部集成了 cmake 程序，构建流程会使用它来完成。因此，一般情况下开发者不需要手动安装 cmake。</p><p>如果开发者希望编辑器使用设备上的 cmake，则可以通过编辑相关的配置完成。</p><p>如果开发者想要在命令行中使用 cmake，可以前往<a href="https://cmake.org/download/" target="_blank" rel="noreferrer">官网下载</a>。在 Mac 平台上，也可以使用 Homebrew 进行安装，执行以下命令进行安装：</p><div class="language-bash vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">brew</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> install</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> cmake</span></span></code></pre></div><h2 id="快速开始" tabindex="-1">快速开始 <a class="header-anchor" href="#快速开始" aria-label="Permalink to &quot;快速开始&quot;">​</a></h2><p><code>CMakeLists.txt</code> 文件是 CMake 的核心文件，用于描述整个项目的构建过程。使用该文件可以方便地管理项目的构建和编译过程。其中包含了一系列命令和变量，用于指定项目名称、版本号、源文件、依赖库等信息，以及指定编译器、编译选项等参数。</p><p>下面是一个简单的 CMake helloworld工程的例子。</p><p>首先，创建一个名为 <code>CMakeLists.txt</code> 的文件。在此文件中，添加以下内容：</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span># CMake 版本</span></span>\n<span class="line"><span>cmake_minimum_required(VERSION 3.10)</span></span>\n<span class="line"><span></span></span>\n<span class="line"><span># 项目名称, 指定语言为 C++</span></span>\n<span class="line"><span>project(helloworld CXX)</span></span>\n<span class="line"><span></span></span>\n<span class="line"><span># 可执行文件</span></span>\n<span class="line"><span>add_executable(helloworld main.cpp)</span></span></code></pre></div><p>然后，在项目的根目录下创建一个名为 <code>main.cpp</code> 的文件，并添加以下内容：</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>#include &lt;iostream&gt;</span></span>\n<span class="line"><span></span></span>\n<span class="line"><span>int main() {</span></span>\n<span class="line"><span>    std::cout &lt;&lt; &quot;Hello, world!&quot; &lt;&lt; std::endl;</span></span>\n<span class="line"><span>    return 0;</span></span>\n<span class="line"><span>}</span></span></code></pre></div><p>最后，在项目的根目录下创建一个名为 <code>build</code> 的目录，并在其中执行以下命令：</p><div class="language-bash vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># 在 build 目录下生成默认的工程文件。如果已经安装了 Visual Studio，则默认为 Visual Studio 工程；在 Mac 下默认为 Makefile 工程。通过指定 -G 可以设置工程文件的类型, 比如 -GXcode。</span></span>\n<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">cmake</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> -B</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> build</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> -S</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> .</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> </span></span>\n<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># 生成可执行文件</span></span>\n<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">cmake</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> --build</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> build</span></span></code></pre></div><p>执行完这些命令后，将在 <code>build</code> 目录中生成可执行文件 <code>helloworld</code>。运行该文件，将输出 &quot;Hello, world!&quot;。</p><p>这里用到的两个命令 project 和 add_executable</p><p><code>project</code> 是 CMake 中的一个命令，用于指定项目名称、版本号、语言等信息，其语法如下：</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>project(project_name [version] [LANGUAGES languages...])</span></span></code></pre></div><p>其中，<code>project_name</code> 用于指定项目的名称，<code>version</code> 用于指定项目的版本号，<code>languages</code> 用于指定项目所使用的编程语言。如果不指定 <code>version</code> 或 <code>languages</code> 参数，则可以省略它们。例如：</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>project(MyProject)</span></span></code></pre></div><p>这个命令将设置项目名称为 <code>MyProject</code>，不指定版本号和编程语言。</p><p><code>add_executable</code> 用于添加可执行文件的构建规则，其语法如下：</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>add_executable(executable_name [source1] [source2] ...)</span></span></code></pre></div><p>其中，<code>executable_name</code> 用于指定可执行文件的名称，<code>source1</code>、<code>source2</code> 等参数用于指定源文件的名称。例如：</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>add_executable(MyProject main.cpp)</span></span></code></pre></div><p>这个命令将设置可执行文件名称为 <code>MyProject</code>，并将 <code>main.cpp</code> 文件作为源文件添加到项目中。</p><h3 id="其他常用-cmake-命令" tabindex="-1">其他常用 CMake 命令 <a class="header-anchor" href="#其他常用-cmake-命令" aria-label="Permalink to &quot;其他常用 CMake 命令&quot;">​</a></h3><h3 id="message" tabindex="-1"><code>message</code> <a class="header-anchor" href="#message" aria-label="Permalink to &quot;`message`&quot;">​</a></h3><p><code>message()</code> 命令用于在 CMake 运行时向用户显示消息。它接受一个或多个参数，作为要显示的消息。例如：</p><div class="language-cmake vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">cmake</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">message</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;Hello, world!&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">)</span></span></code></pre></div><p>这个命令将在 CMake 运行时向用户显示 &quot;Hello, world!&quot; 消息。</p><p>你也可以在 <code>message()</code> 命令中使用变量和表达式。例如：</p><div class="language-cmake vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">cmake</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">set</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(SRC_FILES main.cpp)</span></span>\n<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">message</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;Source files: ${SRC_FILES}&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">)</span></span></code></pre></div><p>这个命令将在 CMake 运行时向用户显示 &quot;Source files: main.cpp&quot; 消息。</p><p><code>message()</code> 命令还可以用于输出调试信息。例如：</p><div class="language-cmake vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">cmake</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">if</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> (DEBUG)</span></span>\n<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">  message</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;Debug mode enabled&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">)</span></span>\n<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">endif</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> ()</span></span></code></pre></div><p>这个命令将在 CMake 运行时检查变量 <code>DEBUG</code> 是否为真，如果为真，则向用户输出 &quot;Debug mode enabled&quot; 消息。</p><h4 id="message-命令还有其他用途-例如" tabindex="-1"><code>message</code> 命令还有其他用途，例如： <a class="header-anchor" href="#message-命令还有其他用途-例如" aria-label="Permalink to &quot;`message` 命令还有其他用途，例如：&quot;">​</a></h4><ul><li>输出警告信息：<code>message(WARNING &quot;This is a warning message&quot;)</code></li><li>输出错误信息：<code>message(FATAL_ERROR &quot;This is an error message&quot;)</code></li><li>输出调试信息：<code>message(STATUS &quot;This is a status message&quot;)</code></li></ul><h3 id="set" tabindex="-1"><code>set</code> <a class="header-anchor" href="#set" aria-label="Permalink to &quot;`set`&quot;">​</a></h3><p><code>set()</code> 命令主要用于创建或修改变量。该命令至少接受两个参数：变量名和值。例如，你可以使用 <code>set(SRC_FILES main.cpp)</code> 来设置变量 <code>SRC_FILES</code> 的值为 <code>main.cpp</code>。如果你想要为变量设置多个值（比如列表），你可以在命令中添加更多参数，如 <code>set(SRC_FILES main.cpp util.cpp)</code>。如果你想要读取变量的值，可以使用 <code>${}</code> 语法，如 <code>message(${SRC_FILES})</code>。</p><p>可以使用 <code>set</code> 命令向列表变量中添加元素。具体来说，可以使用 <code>set(SRC_FILES ${SRC_FILES} util.cpp)</code> 命令将 <code>util.cpp</code> 添加到 <code>SRC_FILES</code> 列表的末尾。其中，<code>${SRC_FILES}</code> 表示取出 <code>SRC_FILES</code> 变量的当前值。这个命令还可以使用其他的 <code>set</code> 命令选项，如 <code>CACHE</code> 和 <code>APPEND</code> 等。</p><h3 id="list" tabindex="-1"><code>list</code> <a class="header-anchor" href="#list" aria-label="Permalink to &quot;`list`&quot;">​</a></h3><p><code>list()</code> 命令用于处理列表类型的变量。它可以接受多种子命令，如 <code>APPEND</code>（在列表尾部添加元素）、<code>INSERT</code>（在指定位置插入元素）、<code>REMOVE_ITEM</code>（删除指定的元素）等。例如，<code>list(APPEND SRC_FILES util.cpp)</code> 命令会将 <code>util.cpp</code> 添加到 <code>SRC_FILES</code> 列表的末尾。</p><h3 id="add-library" tabindex="-1"><code>add_library</code> <a class="header-anchor" href="#add-library" aria-label="Permalink to &quot;`add_library`&quot;">​</a></h3><p><code>add_library</code> 命令用于定义一个库目标。它至少需要两个参数：库的名称和源文件。如果你只提供了一个源文件，那么 CMake 将创建一个由这个源文件构建的库。例如，<code>add_library(MyLib main.cpp)</code>。如果你有多个源文件，你可以将它们全部放到 <code>add_library()</code> 命令中，例如 <code>add_library(MyLib main.cpp util.cpp)</code>。</p><p>CMake支持创建静态库和动态库。默认情况下，<code>add_library()</code> 命令会创建一个静态库。如果你想要创建一个动态库，你需要在命令中添加 <code>SHARED</code> 参数，例如：<code>add_library(MyLib SHARED main.cpp)</code>。</p><p>如果你想要同时创建静态库和动态库，你可以将它们都列出来，例如：<code>add_library(MyLibStatic STATIC main.cpp)</code> 和 <code>add_library(MyLibShared SHARED main.cpp)</code>。</p><p>静态库是指在编译时链接到可执行文件中的库，而动态库是指在运行时加载的库。静态库通常只包含可执行文件所需的代码，因此它们比较小。动态库通常包含更多的代码和数据，因为它们需要在运行时执行。动态库的优点是可以在不重新编译可执行文件的情况下更新库。它们也可以在多个可执行文件之间共享，从而节省磁盘空间。</p><p>使用 <code>add_library()</code> 命令时，你可以指定库的名称和类型（静态库或动态库），以及要包含的源文件和头文件。例如，<code>add_library(MyLib STATIC main.cpp)</code> 命令将 <code>main.cpp</code> 源文件添加到名为 <code>MyLib</code> 的静态库中。</p><h3 id="find-library" tabindex="-1"><code>find_library</code> <a class="header-anchor" href="#find-library" aria-label="Permalink to &quot;`find_library`&quot;">​</a></h3><p>命令用于查找并定位系统上的库文件。你需要提供一个变量名（用于存储找到的库的路径）和库的名称。例如，<code>find_library(MY_LIB NAMES MyLib)</code>。在这个例子中，CMake 会在系统的库路径中搜索名为 <code>MyLib</code> 的库。如果找到了，<code>MY_LIB</code> 变量的值将会被设置为该库的全路径。</p><p>可以使用 <code>find_library</code> 命令来查找系统上的库文件。你需要提供一个变量名（用于存储找到的库的路径）和库的名称。</p><p>例如，假设你想要查找名为 <code>libexample</code> 的库，它在 <code>/usr/local/lib</code> 目录中。 这里的绝对路径可以使用<code>${CMAKE_CURRENT_LIST_DIR}</code>等变量转化为相对路径。你可以在 <code>CMakeLists.txt</code> 文件中添加以下命令：</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>find_library(EXAMPLE_LIB libexample /usr/local/lib)</span></span></code></pre></div><p>这个命令会将 <code>libexample</code> 库的路径保存到变量 <code>EXAMPLE_LIB</code> 中。如果找不到该库，<code>EXAMPLE_LIB</code> 变量的值将会是空的。</p><p>在使用 <code>find_library</code> 命令时，你可以指定库的名称、路径、版本和语言。例如，<code>find_library(EXAMPLE_LIB NAMES example PATHS /usr/local/lib VERSION 1.0 LANGUAGES CXX)</code> 命令将查找名为 <code>example</code>、版本为 <code>1.0</code>、语言为 <code>C++</code> 的库，并将其路径保存到 <code>EXAMPLE_LIB</code> 变量中。</p><p>如果你想要查找多个库，可以在命令中添加多个库名称。例如，<code>find_library(LIB1 NAMES lib1 lib1.a PATHS /usr/local/lib)</code> 命令将查找名为 <code>lib1</code> 或 <code>lib1.a</code> 的库，并将其路径保存到 <code>LIB1</code> 变量中。</p><p>注意，在使用 <code>find_library</code> 命令时，你需要确保库文件的名称、路径、版本和语言与你的项目相匹配。否则，你的项目可能无法正确地链接到库文件。</p><h3 id="target-link-libraries" tabindex="-1"><code>target_link_libraries</code> <a class="header-anchor" href="#target-link-libraries" aria-label="Permalink to &quot;`target_link_libraries`&quot;">​</a></h3><p><code>target_link_libraries()</code> 命令用于将指定的库链接到目标。这个命令至少需要两个参数：目标名称和库名称。例如，<code>target_link_libraries(MyApp MyLib)</code>。这个命令将 <code>MyLib</code> 库链接到 <code>MyApp</code> 目标。这意味着 <code>MyApp</code> 在构建时会使用 <code>MyLib</code>。</p><h3 id="target-include-directories" tabindex="-1"><code>target_include_directories</code> <a class="header-anchor" href="#target-include-directories" aria-label="Permalink to &quot;`target_include_directories`&quot;">​</a></h3><p><code>target_include_directories()</code> 命令用于为指定的目标添加包含目录。这个命令需要至少两个参数：目标名称和要添加的目录。例如，<code>target_include_directories(MyApp PRIVATE include/)</code>。这个命令将 <code>include/</code> 目录添加到 <code>MyApp</code> 目标的包含目录中。这意味着编译 <code>MyApp</code> 时，编译器会在 <code>include/</code> 目录中查找头文件。</p><h3 id="target-compile-options" tabindex="-1"><code>target_compile_options</code> <a class="header-anchor" href="#target-compile-options" aria-label="Permalink to &quot;`target_compile_options`&quot;">​</a></h3><div class="language-CMake vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">CMake</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">message</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(STATUS </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;my custom debug info&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">)</span></span></code></pre></div><p><code>target_compile_options()</code> 命令用于为指定的目标设置编译选项。这个命令至少需要两个参数：目标名称和编译选项。例如，<code>target_compile_options(MyApp PRIVATE -Wall)</code>。这个命令将 <code>-Wall</code> 选项添加到 <code>MyApp</code> 的编译选项中。这意味着 <code>MyApp</code> 在编译时会启用所有的警告（这是 <code>-Wall</code> 选项的作用）。</p><h2 id="常见的任务" tabindex="-1">常见的任务 <a class="header-anchor" href="#常见的任务" aria-label="Permalink to &quot;常见的任务&quot;">​</a></h2><h3 id="添加源文件" tabindex="-1">添加源文件 <a class="header-anchor" href="#添加源文件" aria-label="Permalink to &quot;添加源文件&quot;">​</a></h3><p>可以使用以下命令添加源文件：</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>add_executable(MyProject main.cpp math/vec3.cpp math/vec4.cpp)</span></span></code></pre></div><p>在这个示例中，<code>MyProject</code> 的源文件包括 <strong><code>main.cpp</code></strong>、 <code>math/vec3.cpp</code> 和 <code>math/vec4.cpp</code> . 如果有更多的源文件,只需要往这个列表添加它们.</p><h3 id="添加依赖库" tabindex="-1">添加依赖库 <a class="header-anchor" href="#添加依赖库" aria-label="Permalink to &quot;添加依赖库&quot;">​</a></h3><p>可以使用以下命令添加依赖库：</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>target_link_libraries(MyProject MyLibrary)</span></span></code></pre></div><p>下面的例子中, <code>find_library()</code> 命令将在 <code>libs</code> 目录下查找名为 <code>libexample</code> 的静态库, 并将其路径保存到变量 <code>LIBS</code> 中. <code>target_link_libraries()</code> 命令将这个库链接到 <code>MyProject</code> 目标.</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>find_library(LIBS libexample libs PATHS ${CMAKE_CURRENT_LIST_DIR}/libs/android/${ANDROID_ABI})</span></span>\n<span class="line"><span></span></span>\n<span class="line"><span>add_executable(MyProject main.cpp)</span></span>\n<span class="line"><span>target_link_libraries(MyProject ${LIBS})</span></span>\n<span class="line"><span></span></span>\n<span class="line"><span># 添加头文件的搜索路径</span></span>\n<span class="line"><span>target_include_directories(MyProject  PUBLIC ${CMAKE_CURRENT_LIST_DIR}/libs/include)</span></span></code></pre></div><h3 id="cmake变量" tabindex="-1">CMake变量 <a class="header-anchor" href="#cmake变量" aria-label="Permalink to &quot;CMake变量&quot;">​</a></h3><p>CMake内置了一些以CMAKE_开头的变量，方便与环境交互。这些变量的使用可以使你的CMakeLists.txt文件更加简洁、易于维护。比如，<code>CMAKE_CURRENT_LIST_DIR</code> 变量用于存储当前处理的CMakeLists.txt文件所在的目录的路径。在CMakeLists.txt文件中使用此变量的示例如下：</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>add_library(MyLibrary STATIC ${CMAKE_CURRENT_LIST_DIR}/src/my_library.cpp)</span></span></code></pre></div><p>上述示例中，我们使用CMAKE_CURRENT_LIST_DIR变量指定源文件的路径。同样，CMAKE_BINARY_DIR变量用于存储二进制文件的根目录的路径。在CMakeLists.txt文件中使用此变量的示例如下：</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>set(EXECUTABLE_OUTPUT_PATH ${CMAKE_BINARY_DIR}/bin)</span></span></code></pre></div><p>这里，CMAKE_BINARY_DIR变量用于指定可执行文件输出的根目录。在编译项目时，可执行文件将被输出到${CMAKE_BINARY_DIR}/bin目录中。</p><p>请注意，${CMAKE_BINARY_DIR}和${CMAKE_CURRENT_BINARY_DIR}变量之间的区别。${CMAKE_BINARY_DIR}是指二进制文件的根目录，而${CMAKE_CURRENT_BINARY_DIR}是指当前处理的CMakeLists.txt文件的二进制目录。</p><p>此外，其他常用的变量包括但不限于：</p><ul><li>CMAKE_SOURCE_DIR: CMakeLists.txt文件所在的目录</li><li>CMAKE_CURRENT_SOURCE_DIR: 当前处理的CMakeLists.txt所在的目录</li><li>CMAKE_BINARY_DIR: 二进制文件的根目录</li><li>CMAKE_CURRENT_BINARY_DIR: 当前处理的CMakeLists.txt的二进制目录</li><li>CMAKE_INSTALL_PREFIX: 安装目录的根目录</li><li>CMAKE_MODULE_PATH: CMake模块的根目录</li><li>CMAKE_BUILD_TYPE: 编译类型</li><li>CMAKE_CXX_FLAGS: C++编译器选项</li></ul><h2 id="在-cocos-中使用-cmake" tabindex="-1">在 Cocos 中使用 CMake <a class="header-anchor" href="#在-cocos-中使用-cmake" aria-label="Permalink to &quot;在 Cocos 中使用 CMake&quot;">​</a></h2><p>Android 在编译 C++ 代码使用了 cmake，这是原生支持的. 我们会通过 gradle 去配置参数和调用 cmake 命名生成/编译/打包 C++ 代码。对于其他的原生平台，我们会通过构建插件调用对于的 cmake 命令去生成工程文件。在Windows 上的 Visual Studio 工程，Mac 上的 Xcode 工程. 后续的开发就只需通过 IDE 去完成.</p><p>由于 CMake 的特性，可能会因为不同的开发环境和配置而产生差异，因此不建议共享生成的工程文件。另外，对生成工程的修改很容易被后续生成的工程覆盖。相反，应该将 CMakeLists.txt 文件包含在项目中，并在每个开发环境中使用 CMake 来生成相应的工程文件。所有对工程的修改都应该以 CMake 指令的方式写入到 CMakeLists.txt 中。</p><p>在使用 CMake 和 Xcode cocoapods 时，可能会出现一些问题。主要的问题是，CMake 生成的 Xcode 工程文件与 cocoapods 集成不兼容。这是因为 cocoapods 使用了自己的方式来管理 Xcode 项目文件，而 CMake 生成的工程文件没有考虑这一点。这可能会导致一些问题，如编译错误、链接错误, 修改被覆盖等等。</p><p>为了解决这个问题，我们可以在构建 Mac/iOS 平台时勾选 “跳过 Xcode 工程更新” 选项。这样做的意思是，后续引擎或工程的 CMake 配置更新不会同步到 Xcode 工程。勾选该选项后，就可以与 CocoaPods 协作，以普通的 Xcode 工程形式进行构建。</p><h3 id="共享生成的-xcode-工程文件" tabindex="-1">共享生成的 Xcode 工程文件 <a class="header-anchor" href="#共享生成的-xcode-工程文件" aria-label="Permalink to &quot;共享生成的 Xcode 工程文件&quot;">​</a></h3><p>CMake 生成的 Xcode 工程记录了依赖路径，这些路径来自于以下几个方面：</p><ul><li>Xcode 的安装路径</li><li>Cocos Creator 版本和安装路径</li><li>工程的版本和安装路径</li><li>工程文件所在的路径</li></ul><p>通过在不同设备上使用相同的目录结构，Xcode 可以实现不同设备间的共享。</p><p>另一个做法是修改 Xcode 工程文件内部引用的路径，这个方法比较 hack，这里不做详细介绍。</p><p>和 Xcode 不同，Android Studio 使用 CMake 是直接将 CMakeLists.txt 作为配置文件进行编译，而不是生成工程文件。因此，CMake 生成的 Android 平台的 native 库在不同设备上的表现应该是一致的。此外，Android Studio 的 Gradle 插件会自动处理依赖关系，因此不需要像 Xcode 那样手动管理依赖目录。</p><h3 id="目录结构" tabindex="-1">目录结构 <a class="header-anchor" href="#目录结构" aria-label="Permalink to &quot;目录结构&quot;">​</a></h3><p>当选择某个原生平台进行构建时，项目目录 <code>native\\engine</code> 目录下会生成 <code>当前构建的平台名称</code> 文件夹（例如 <code>android</code>），以及 <code>common</code> 文件夹。CMake 在第一次运行时将会在这两个目录下分别生成 <code>CMakeLists.txt</code> 文件，作用各不相同：</p><ul><li><p><code>当前构建的平台名称</code> 文件夹：<code>CMakeLists.txt</code> 主要用于配置对应的构建平台。以 Android 平台为例：</p><p><img src="'+n+'" alt="folder2"></p></li><li><p><code>common</code> 文件夹：<code>CMakeLists.txt</code> 主要用于配置整个项目。</p><p><img src="'+t+`" alt="folder2"></p></li></ul><p><code>CMakeLists.txt</code> 的语法比较简单，由 <strong>命令</strong>、<strong>注释</strong> 和 <strong>空格</strong> 组成。其中命令是不区分大小写的，但命令中的参数和变量则是大小写敏感的。</p><h3 id="cmakelists-txt-文件介绍" tabindex="-1">CMakeLists.txt 文件介绍 <a class="header-anchor" href="#cmakelists-txt-文件介绍" aria-label="Permalink to &quot;CMakeLists.txt 文件介绍&quot;">​</a></h3><p>那如何利用 CMake 将项目编译成动态库提供给其他项目使用呢？简单来说就是先录入编译信息，然后 CMake 命令再根据 <code>CMakeLists.txt</code> 中的配置生成编译所需的 Makefile 文件。</p><p>下面我们以 Android 平台为例，具体看一下如何配置项目目录 <code>native/engine/android</code> 目录下的 <code>CMakeLists.txt</code>。</p><div class="language-cmake vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">cmake</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">cmake</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># 要求 CMake 版本在 3.8 或更高</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">cmake_minimum_required</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">VERSION</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> 3.8)  </span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># 设置项目名称选项</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">option</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(APP_NAME </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;项目名称&quot;</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &quot;NewProject&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">)</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># 设置项目名并启用 C++ </span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">project</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">\${APP_NAME}</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> CXX)  </span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># 设置库名称</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">set</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(CC_LIB_NAME cocos)</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># 设置项目目录 </span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">set</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(CC_PROJECT_DIR </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">\${CMAKE_CURRENT_LIST_DIR}</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">)</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># 设置项目源文件</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">set</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(CC_PROJ_SOURCES)  </span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># 设置常用源文件</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">set</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(CC_COMMON_SOURCES)</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># 设置所有的源文件 </span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">set</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(CC_ALL_SOURCES)</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># 包含常用 CMake 函数</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">include</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">\${CC_PROJECT_DIR}</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">/../common/CMakeLists.txt) </span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># 如果需要添加源码可以在这里修改  CC_PROJ_SOURCES</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># 调用 Android 预构建步骤</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">cc_android_before_target(</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">\${CC_LIB_NAME}</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">)  </span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># 添加库</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">add_library</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">\${CC_LIB_NAME}</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> SHARED </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">\${CC_ALL_SOURCES}</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">)  </span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># 调用 Android 后构建步骤</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">cc_android_after_target(</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">\${CC_LIB_NAME}</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">)</span></span></code></pre></div><p>项目目录 <code>native/engine/common</code> 目录下的 <code>CMakeLists.txt</code> 文件的配置方法也是一致的，但是会多一些基础的配置。例如：</p><div class="language-CMake vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">CMake</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">option</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(USE_SPINE                </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;Enable Spine&quot;</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">                      ON</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">)</span></span></code></pre></div><p>构建后生成的发布包目录（例如 <code>build/android</code>）下有一个 <code>proj/cfg.cmake</code> 文件，用于存放当前项目的一些配置。因为 <code>CMakeLists.txt</code> 中有对 <code>cfg.cmake</code> 文件进行引入，所以当 <code>cfg.cmake</code> 文件中的配置做了修改，便会同步到 <code>CMakeLists.txt</code> 中；若是相同的配置，则直接覆盖，以 <code>cfg.cmake</code> 文件中的为准。</p><p>从 3.6.2 开始，开发者可以在 <code>native/engine/common/localCfg.cmake</code> 中覆盖 <code>cfg.cmake</code> 中设置的选项，而且 <code>localCfg.cmake</code> 会从 GIT 中忽略。</p><div class="language-CMake vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">CMake</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">CMakeLists.txt</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># 引入 cfg.cmake</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">include</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">\${RES_DIR}</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">/proj/cfg.CMake)</span></span></code></pre></div><p>例如将编辑器主菜单 <strong>项目 -&gt; 项目设置 -&gt; 功能裁剪</strong> 中的 <strong>Spine 动画</strong> 去掉勾选：</p><p><img src="`+p+'" alt="project"></p><p>则在再次构建时重新生成的 <code>cfg.make</code> 中就会将 <code>USE_SPINE</code> 设置为 <code>OFF</code>：</p><p><img src="'+l+'" alt="code1"></p><p>然后在编译时，CMake 便会根据配置（例如 <code>CMakeLists.txt</code> 以及 <code>CMakeLists.txt</code> 中引入的 <code>cfg.make</code> 等配置文件）生成 <strong>CMakeCache.txt</strong> 文件，该文件中包含了项目构建时 <strong>需要依赖的各种输入参数</strong>。</p><p><img src="'+c+'" alt="code2"></p><h2 id="进一步学习" tabindex="-1"><strong>进一步学习</strong> <a class="header-anchor" href="#进一步学习" aria-label="Permalink to &quot;**进一步学习**&quot;">​</a></h2><p>你可以查阅以下资料来进一步学习 <a href="https://cmake.org/documentation/" target="_blank" rel="noreferrer">CMake 官方文档</a></p>',124),h=[d];function r(k,g,E,u,C,b){return e(),a("div",null,h)}const y=s(o,[["render",r]]);export{m as __pageData,y as default};