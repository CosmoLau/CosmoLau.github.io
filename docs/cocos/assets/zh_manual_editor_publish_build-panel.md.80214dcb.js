import{_ as i,v as a,b as l,F as o,L as s,E as p,O as e,R as A,M as c}from"./chunks/framework.5ffcbaff.js";const d="/docs/cocos/assets/build-panel.f4b6e2b6.png",h="/docs/cocos/assets/panel.f6928ceb.png",b="/docs/cocos/assets/build-options.a2924dae.png",m="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABYAAAATCAIAAAAbG2rfAAAACXBIWXMAAA7EAAAOxAGVKw4bAAAAEXRFWHRTb2Z0d2FyZQBTbmlwYXN0ZV0Xzt0AAAExSURBVDiNY3R3d2egDDBRqH/QGMGCVVQlMCdCWwBd9N+HK2umbLhFjBFCDo7qAgwMDH9+/UFSyMLCxMHBTqQrVKWFWRgY3lxYsesKXEzDIcJE6PkdNg8P3R07LhMwQsRFV5aFgeEHk6SrgyRMFY+wGMufB3d/KFvKvtvBQMAIDh0ZERYGhq9v7j9+8Q8myK8iLPbnxcMvOiZf7m8i5BEZZx0ZFgYGBm4ZYxMZZIk/T+48VTHQfb7nB7oRaJHKoSONEREQ8ObJC30Zhocn3mDIoBqh66Mpht2Elw9vaEgyPLmOaQKqETIKEtxYDfjz8v59AwXWF1fuYZFECQsWFoYPV9dsuYju3e+vH3y0SNV9fvwONvNRjHiw/ciTpIAYbWyJ5dfLE0uvYBFnYGAczexwAACQQVzTY9hvFQAAAABJRU5ErkJggg==",u="/docs/cocos/assets/create-scene-first.4baaa8ba.png",w="/docs/cocos/assets/save-scene.fd629ea6.png",B="/docs/cocos/assets/build-page.9f21a4c5.png",n="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAXCAIAAADlZ9q2AAAACXBIWXMAAA7EAAAOxAGVKw4bAAAAEXRFWHRTb2Z0d2FyZQBTbmlwYXN0ZV0Xzt0AAAF8SURBVEiJY3R3d2egJWCiqemjFgwKC1gIyHMYBKR66PBjV/bn2Ykl8/Y8wWsAIR/YmOIynYGBgUVK10KTgAGEfMDIwPDvz58/uHQzsxAygJA8A8OPO1t6Vl3BKqVi7sDzkoB24iNZxiIqNcSQQcY1IdVbg4OBwyAwJ8RRQ4KVgZuXm3ILZCyifDSebl9znuHJ7hWn2RwCXBwstAW+XN6y47dLVIKvDuU+4OFg+PLhDQMDAwPDjzdf/jJzcrAw/GFgkfHwMxFnZ+ag2IIne5bt+GKcEKLLIOKS4CNweu3uD1/+sAjoupiI/Xly+uAZ3DoJRzIDEwsDAwPDjwc75s1gYGBguLxgBgODTliJDAvDh6srpqy/g183IQsuPv4S55gQKPHiG1zoy5O7Ag5qHAw/7p/ZTsB0BgYGZhUVFXzyX+9cufWDQ5SHDS7y6x2XvpUK37+XZ1ZvuvUNj1YIICIfvLlwZCeKCIe6hIjOhyN73hDUy8DAwDhaow1/CwA652+Dbu/EjQAAAABJRU5ErkJggg==",E="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAXCAIAAADlZ9q2AAAACXBIWXMAAA7EAAAOxAGVKw4bAAAAEXRFWHRTb2Z0d2FyZQBTbmlwYXN0ZV0Xzt0AAAEiSURBVEiJ7ZQxSwNBEIVfziHsQYIpTi7gFVEWCRjQRkxxEIvAYWGXIn9Qa1vBQgS7FJYWwgVz5BAjGA1mJUOwiJ0nsxKuiDjVwtt9H7OzbwtRFCHPcnJ1/xMAst6p9k+6Bxuz+Pr08j4XgK7vBL4LbAG/Aaz+DApiDrzDTifUlTVQkQCAmec8SXrnZ1eJBUDsQB81655LX+4AiKioKtvNdktZ+EsA1Qp1OVOhYLcdWACEV1RTs+fh409nq4B4S0IHdxc38Xu29PZw25PcYZGDkrfp+26G4Dsa6IsAaQZ7jWDhPv+mrXsN0V4ChN1jrQBMjXFgjAHYTBmLpVuuLg14mXwA4GSQkonTV4XxYMTEw3TkAOOnvgVADtqStfp/0T9ArE/ezEvrUl21ywAAAABJRU5ErkJggg==",f="/docs/cocos/assets/clean-window.c72bddea.png",X="/docs/cocos/assets/build-task.d38130a8.png",I="/docs/cocos/assets/remove-build-task.c5e1d688.png",R="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAXCAIAAADlZ9q2AAAACXBIWXMAAA7EAAAOxAGVKw4bAAAAEXRFWHRTb2Z0d2FyZQBTbmlwYXN0ZV0Xzt0AAAEESURBVEiJYwwODmZmZmagGWBhYWGhnekMDAxMNDV91AJiAIEYljT0tFLlZ2VgYGBg+PLo8O4TT39S1QITKwtlSVgaFhFztn+6aNdjalrAzoqSQ/jU/HPU4Lyvd/ct236NkI8oiANuZT0TwqqIzmX/fn56//nXXxSxdx8J6yPKB9+enNiy9cTdtz/QxIW0IiLCApx0JPHoJeyDv6/P77wp4e6rwIXD9i+X3+HRTsgH3x4cPMpg64DL9L9vLm7fch1fROO34N7BI0/V3AxFcJS23+4fXH/4OX4X4g+i5wzSTpKsf//+xpD5+/XV/fPH9hJMpQyM4eHhhNRQBIZ+YTdqwcBbAAD/F0+iy0Yy7QAAAABJRU5ErkJggg==",V="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAXCAIAAADlZ9q2AAAACXBIWXMAAA7EAAAOxAGVKw4bAAAAEXRFWHRTb2Z0d2FyZQBTbmlwYXN0ZV0Xzt0AAAFDSURBVEiJYwwODmZmZmagDfj79y8LCwsLjUxnYGBgYWFhop3pEDBqAUFAOIbZZXRNlISQ1f359uTymW+6YU6it/dtOP8cv3ZmHR0dfPKybtEBxpJszGxcvLw8vLw8vLwc/15cfSzj5iT6h1lSR1no+cW7nyjxgYIQ34drS5fue48QkrQODzAUZWb49+3J+SOXHxMwgIg4+P0Ti+kMDN+enT954/UPQrpJiWR2QeswmOlPjm4/zGXvYy1KTQv0nJT/PH//l+Hbk6PbN5x/LiLIy0pYEwnlhKG0EJ/wz7tn1h48/fwb0bpIsODa9kXnf/4kXj0EEBFETCzsDAwMDAw/STedgbAP3v/4qa/safrk9Au09MKvoC3G/u/5X0otuLL9qHiIhZGbH6bU7/eXD+y7S8gCxvDwcEJqKAJDvzQdtYAgAADH82Xj4a0N2QAAAABJRU5ErkJggg==",t="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACEAAAAXCAYAAACFxybfAAAACXBIWXMAABJ0AAASdAHeZh94AAACLUlEQVRIie3V0UtTYRjH8a/b5MCU1RnNtlgcbaGxNnW2ro4gI5EcjJKkdWMX/SX9Ed55GUFezfBC2MVgwiFtwYrBCcKTHDzQAYeHhkpv27ALte7qLCx34e/uhffl/by87/s8Pfl8/ohzjue8AXCB+JWuQPj+ZpF/IE78VphIKIS/5WDv7mJ91DEc8R8Q4RS5e2kUWYLmIY5zQMsbIpYcJjmhIhyDjddr1Pb/FSKskp9LEdw32Vgp8s4S0C8jNx0cAVI0zUzmLlMLeQKFZTT7rBFSnFw2RdCpUnilYfcnmV2YJHbJC4Co65QKJVZfWKhP5khlczgvV9Fd3o6rhzk8raJ4TMoFDRuJ9P1JBps6K0uLLC6tYfSOMJVRAButUMb0KKjTw+4E7hAqqSEfdq14cjKFyOUWVrWMJQBhUNrewz8wQhRA6BRrNr6hFOrZISychhc5EkcC4BDx3Yc/JP+cofT3wbcDLAAk4hEZb8M5GZ8JwqRcMWlH08yOS4BFZWuP4Og8Tx/kyD1+RvYGGB+0Y8L4LOkomJUypkuEN5FIPP/TpHbdRFxJMDY2yrXWF96/3UT/6iEYukqf2KG6voa23SY88ZBHapSjz+usvLFpu0T0uO+iErHMPDO3ZVoNG3PLwNjZRSARuh4jdlMhHPDR+FRmuajTSdnqAHFCiSZR74wyGA7g7z3+ojQFjbpBdVOjZnVeNTsu28KqUbJqHW/0u3RFA7tAnOYCcZquQPwALMfElbJmTbkAAAAASUVORK5CYII=",g="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACEAAAAXCAIAAAAKpbGIAAAACXBIWXMAAA7EAAAOxAGVKw4bAAAAEXRFWHRTb2Z0d2FyZQBTbmlwYXN0ZV0Xzt0AAAGgSURBVEiJ1dXPSwJBFAfw7zZTS+sETm3BksFCohRFhIWSBw8dpEMgdVjP/WHdgoiErv2gTkZRnqIiMVhBKLBa2Fxty4UOaXjbzVyod5vHm/kwvPkhpNNp+ByUMUYI8Wl1x3EajQallPoEAKCUMsb6/AO+QhAE3w0Af8aQAhIAaWx8fELhIhDgXPyB4dpwnlxbVVG+KNiRmMroR61cKA7GFkPQj3L5x54YI/Mqvd/ayQMols/aWb04l1mf4ng0emHIkmNVlJlkZLijsvFwYTb7pVHAk9FNz5vvjviTeW77cBwAsjKh8I6kTIzbHholsxbF1eH2VUdO5Io8Gff+/rgZUc5gJjIb09/7ICJMXTdsK5hYj7/mzh9+bTzV38L22d5m60iNpLLLzf2dalKL3GwdhrSlhfPcpZvh1rtnkzBVDbSH8hCsqgHrvY8poZdKrX807CZ4uIOXp9epWDqbaBUSCSEFxwcndyuzqUjwrVxyNwRN09yrOkKJZ1amA3XLIQOkWtg9uLV7bwAARM6JYdQ9Vnf3QdmGpwveij/ztv8D4xO0E3sdlhtJXAAAAABJRU5ErkJggg==",Z="/docs/cocos/assets/edit-build-option.f95b2d70.png",D="/docs/cocos/assets/settings.c4507485.png",F="/docs/cocos/assets/interrupt.1f21b282.gif",L=JSON.parse('{"title":"构建发布面板详解","description":"","frontmatter":{},"headers":[],"relativePath":"zh/manual/editor/publish/build-panel.md","filePath":"zh/manual/editor/publish/build-panel.md"}'),Y={name:"zh/manual/editor/publish/build-panel.md"},J=A('<h1 id="构建发布面板详解" tabindex="-1">构建发布面板详解 <a class="header-anchor" href="#构建发布面板详解" aria-label="Permalink to &quot;构建发布面板详解&quot;">​</a></h1><p>点击编辑器主菜单中的 <strong>项目 -&gt; 构建发布</strong> 或者使用快捷键 <code>Ctrl/Cmd + Shift + B</code> 即可打开 <strong>构建发布</strong> 面板：</p><p><img src="'+d+'" alt="build-panel"></p><p>若已经构建过某一平台，则打开 <strong>构建发布</strong> 面板会进入 <strong>构建任务</strong> 页面。v3.0 各个平台的构建是以构建任务的形式进行，类似于下载任务：</p><p><img src="'+h+'" alt="panel"></p><h2 id="构建发布面板" tabindex="-1">构建发布面板 <a class="header-anchor" href="#构建发布面板" aria-label="Permalink to &quot;构建发布面板&quot;">​</a></h2><p>在 <strong>构建发布</strong> 面板选择需要构建的平台，然后配置 <a href="./build-options.html">构建选项</a>。配置完成后，点击右下角的 <strong>构建</strong> 按钮即可跳转到 <strong>构建任务</strong> 页面执行构建流程。或者点击右上角的 <strong>关闭（X）</strong> 按钮也可以进入 <strong>构建任务</strong> 页面。</p><p><strong>构建发布</strong> 面板上方有三个功能按钮：</p><p><img src="'+b+'" alt="build-options"></p><ul><li><p><img src="'+m+'" alt="doc">：点击该按钮即可跳转到当前平台的官方手册文档。</p></li><li><p><strong>Import</strong>：点击该按钮即可导入保存了构建选项配置的 json 文件。</p></li><li><p><strong>Export</strong>：点击该按钮可将当前平台的构建选项配置导出为 json 文件，用于 <a href="./publish-in-command-line.html">命令行构建</a>，也可以在项目成员之间共享构建选项配置。导出的配置是按照平台区分的，并且带有版本号，请不要删除版本号，以免在跨版本导入配置时无法进行数据迁移。使用命令行构建时，将构建参数 <code>configPath</code> 的文件路径指定为导出的 json 配置文件路径即可。</p></li></ul><blockquote><p><strong>注意</strong>：</p><ol><li><p>构建没有场景的项目是没有意义的，所以如果当前打开的项目没有场景，则打开 <strong>构建发布</strong> 面板时会提示请先创建场景：</p><p><img src="'+u+'" alt="save-scene"></p></li><li><p>在构建之前，请确保当前的场景已经保存，否则点击 <strong>构建</strong> 按钮时将会弹框提示，可以选择 <strong>保存</strong>、<strong>忽略</strong> 或者 <strong>取消构建</strong>。选择 <strong>保存</strong> 和 <strong>忽略</strong> 都会继续执行构建流程。</p><p><img src="'+w+'" alt="save-scene"></p></li></ol></blockquote><h2 id="构建任务页面" tabindex="-1">构建任务页面 <a class="header-anchor" href="#构建任务页面" aria-label="Permalink to &quot;构建任务页面&quot;">​</a></h2><p>在 <strong>构建任务</strong> 页面可以查看当前平台的构建进度及构建结果。</p><ul><li>正在构建中：进度条显示为 <strong>蓝色</strong>。</li><li>构建成功：进度条到达 100%，输出实际构建时间并显示为 <strong>绿色</strong>。</li><li>构建失败：进度条到达 100%，提示构建失败原因或者报错信息，并显示为 <strong>红色</strong>。</li></ul><p><img src="'+B+'" alt="panel"></p><p>该页面上方有三个按钮，包括 <strong>新建构建任务</strong>、<strong>打开构建调试工具</strong> 和 <strong>清空构建缓存</strong>：</p><ul><li><p><strong>新建构建任务</strong>：点击该按钮即可返回 <strong>构建发布</strong> 面板，选择新的平台进行构建。</p></li><li><p><img src="'+n+'" alt="debug">：打开构建调试工具，点击该按钮即可打开构建调试工具，查看在构建过程中产生的全部日志信息包括调用栈。</p></li><li><p><img src="'+E+'" alt="clean">：清空构建缓存。为了复用可被重复利用的构建结果，以便重新构建时加快构建速度、降低内存占用等，构建过程中的很多处理都添加了缓存管理机制，例如压缩纹理、自动图集生成、引擎编译、资源序列化 JSON 等。<br>正常情况下这部分缓存数据是不需要手动清理的，但如果是在特殊情况下需要避免缓存干扰，可以点击该按钮来清空缓存数据。</p><p>项目相关的资源缓存会存储在项目目录下，引擎编译相关的缓存则存储在全局目录下，开发者可根据自己的需要选择清空项目缓存、全局缓存，或者全部清空。</p><p><img src="'+f+'" alt="clean window"></p></li></ul><h3 id="平台构建任务" tabindex="-1">平台构建任务 <a class="header-anchor" href="#平台构建任务" aria-label="Permalink to &quot;平台构建任务&quot;">​</a></h3><p>各个平台的构建是以构建任务的形式进行，类似于下载任务。平台构建任务的名称取决于 <strong>构建发布</strong> 面板中的 <strong>发布路径</strong> 选项，具体可查看 <a href="./build-options.html">构建选项</a> 文档。</p><p><img src="'+X+'" alt="build task"></p><p>每个构建任务都配置了相应的功能按钮方便使用。</p><p><strong>构建任务右上方的移除（X）按钮</strong> 用于移除当前构建任务，可选择 <strong>仅移除构建记录</strong> 或者 <strong>删除源文件</strong>。<strong>删除源文件</strong> 即删除对应平台构建后生成在 <code>build</code> 目录下的项目发布包。</p><p><img src="'+I+'" alt="remove build task"></p><p><strong>构建任务左下方的按钮包括</strong>：</p><ul><li><p><img src="'+R+'" alt="folder">：点击该按钮即可打开对应平台构建后生成的项目发布包（默认在 <code>build</code> 目录下）。</p></li><li><p><img src="'+V+'" alt="editing">：点击该按钮即可返回 <strong>构建发布</strong> 面板，修改对应平台上一次构建时配置的构建选项，然后点击右下方的 <strong>构建</strong> 按钮重新构建。详情请参考下方 <strong>修改构建选项</strong> 部分的内容。</p></li><li><p><img src="'+t+'" alt="setting">：点击该按钮即可返回 <strong>构建发布</strong> 面板，查看对应平台上次构建时配置的构建选项。</p></li><li><p><img src="'+g+'" alt="log-file">：点击该按钮即可打开对应平台在构建过程中产生的日志文件或者日志文件所在目录，可通过 <strong>偏好设置 -&gt; 构建发布 -&gt; 日志文件打开方式</strong> 进行设置。更多内容请参考下方 <strong>构建日志信息查看</strong> 部分的内容。</p></li></ul><p><strong>构建任务右下方的按钮</strong>，主要用于各个平台在构建完成后根据平台要求执行生成、运行、上传等发布流程。<strong>Build</strong> 按钮则是用于重新构建。</p><p>各个平台完成构建后，与构建相关的构建选项配置信息都会保存在项目目录下的 <code>profiles/v2/packages/builder.json</code> 文件中，只要没有在 <strong>构建任务</strong> 页面删除对应平台的构建任务或者删除 <code>build</code> 目录下的项目发布包，就可以在重新打开编辑器后查看上次构建时的构建选项配置，以及继续运行预览等。</p><p>各个平台具体的发布流程，可参考：</p><ul><li><a href="./native-options.html">发布到原生平台</a></li><li><a href="./publish-mini-game.html">发布到小游戏平台</a></li></ul><h3 id="修改构建选项" tabindex="-1">修改构建选项 <a class="header-anchor" href="#修改构建选项" aria-label="Permalink to &quot;修改构建选项&quot;">​</a></h3><p>点击构建任务左下方的编辑按钮，即可返回 <strong>构建发布</strong> 面板修改上次构建时配置的构建选项，以便重新构建。因为只能修改当前平台上一次构建时的构建选项配置，所以页面中的 <strong>发布平台</strong> 项为置灰状态，不可修改。</p><p><img src="'+Z+'" alt="edit build option"></p><p>当前平台上一次构建时的构建选项配置可点击编辑按钮右侧的 <img src="'+t+'" alt="setting"> 按钮查看。</p><p>修改完成后点击 <strong>构建</strong> 按钮就会清空上次构建后生成的项目发布包并重新构建。或者点击 <strong>构建发布</strong> 面板右上方的 <strong>X</strong> 按钮返回 <strong>构建任务</strong> 页面，再点击平台构建任务右下方的 <strong>构建</strong> 按钮也可以重新构建。</p><blockquote><p><strong>注意</strong>：</p><ol><li>原生平台为了避免误删除已定制的内容，在重新构建时仅更新项目资源，不会覆盖原有的原生工程内容。因此在返回 <strong>构建发布</strong> 面板修改之前配置的构建选项时，原生平台相关的构建选项为 <strong>禁用</strong> 状态。如果需要重新生成工程请新建构建任务。</li><li>从 v3.3 开始，原生平台在重新构建时，构建选项 <strong>游戏名称</strong> 为置灰状态，不可修改。</li></ol></blockquote>',35),Q=o("strong",null,"构建",-1),C=o("strong",null,"构建发布",-1),T=o("code",null,"build",-1),v=o("strong",null,"构建发布",-1),K=A('<p><img src="'+D+'" alt="settings"></p><h3 id="构建日志信息查看" tabindex="-1">构建日志信息查看 <a class="header-anchor" href="#构建日志信息查看" aria-label="Permalink to &quot;构建日志信息查看&quot;">​</a></h3><p>由于构建过程会产生非常多的日志信息，默认情况下只有错误信息才会打印到编辑器的 <strong>控制台</strong> 面板中。</p><p>如果需要查看所有的日志信息有以下几种操作方式：</p><ul><li><p><strong>打开构建调试工具</strong></p><p>通过点击主菜单中的 <strong>开发者 -&gt; 打开构建调试工具</strong> 或者点击 <strong>构建任务</strong> 页面右上方的 <img src="'+n+'" alt="debug"> 按钮，即可查看在构建过程中打印出的全部日志信息包括调用栈。</p></li><li><p><strong>打开构建日志记录文件</strong></p><p>每次构建过程中产生的报错信息都会被记录存储在项目目录下的 <code>temp/builder/log</code> 文件夹中。点击构建任务左下方的 <img src="'+g+'" alt="log-file"> 按钮即可查看。在反馈构建相关问题时，可直接附上该文件以便定位问题。</p></li></ul><h3 id="构建队列和取消构建" tabindex="-1">构建队列和取消构建 <a class="header-anchor" href="#构建队列和取消构建" aria-label="Permalink to &quot;构建队列和取消构建&quot;">​</a></h3><p><img src="'+F+'" alt="interupt"></p><p>构建过程中依旧可以添加新的构建任务，此时新的构建任务会加入到构建队列中。 在构建的过程中，可以点击构建任务右侧的 X 按钮来中断当前的构建任务。</p>',8);function x(S,k,O,U,P,_){const r=c("font");return a(),l("div",null,[J,o("p",null,[s("如果修改配置后没有点击 "),Q,s(" 按钮重新构建，修改的配置也会被保存起来。若当前 "),C,s(" 面板中的配置与上次构建后生成的 "),T,s(" 目录下的项目发布包中的配置不一致，"),v,s(" 面板的上方会显示黄色的 "),p(r,{color:"#F0C800"},{default:e(()=>[s("*")]),_:1}),s(" 号键。")]),K])}const z=i(Y,[["render",x]]);export{L as __pageData,z as default};