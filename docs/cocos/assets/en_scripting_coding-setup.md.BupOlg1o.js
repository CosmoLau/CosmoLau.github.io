import{_ as t,c as i,o as s,a4 as o}from"./chunks/framework.uQk9_EO2.js";const n="/docs/cocos/assets/vscode.Boa8efZq.png",e="/docs/cocos/assets/gear.BZLt4Cjk.png",a="/docs/cocos/assets/vscode-setting.BPXGM904.png",r="/docs/cocos/assets/vscode-exclude.OQaV3DOS.png",l="/docs/cocos/assets/vscode-workflow.CuiOct8i.png",c="/docs/cocos/assets/curl-download.BI1Rv_GY.png",d="/docs/cocos/assets/tasks-json.oJjGE9Qw.png",h="/docs/cocos/assets/task-compile.CFLyFX4i.png",p="/docs/cocos/assets/run-task.Dxs7cIAU.png",g="/docs/cocos/assets/set-compile.cNo6kGm2.png",u="/docs/cocos/assets/debugger-for-chrome.DxPYFquf.png",k="/docs/cocos/assets/launch-json.DFstjUzX.png",m="/docs/cocos/assets/debug-chrome.CX57UzI9.png",x=JSON.parse('{"title":"Configuring The Code Editing Environment","description":"","frontmatter":{},"headers":[],"relativePath":"en/scripting/coding-setup.md","filePath":"en/scripting/coding-setup.md","lastUpdated":1712305443000}'),f={name:"en/scripting/coding-setup.md"},C=o('<h1 id="configuring-the-code-editing-environment" tabindex="-1">Configuring The Code Editing Environment <a class="header-anchor" href="#configuring-the-code-editing-environment" aria-label="Permalink to &quot;Configuring The Code Editing Environment&quot;">​</a></h1><p>The <a href="./../editor/preferences/#external-program">Default Script Editor</a> can be specified in the <strong>Preferences</strong> panel. Double-click the script file in <strong>Assets</strong> panel to open the code editor to quickly edit the code. Visual Studio Code is used as an example to introduce how to configure the development environment. <a href="https://code.visualstudio.com/" target="_blank" rel="noreferrer">Visual Studio Code</a> (hereinafter referred to as VS Code) is a lightweight cross-platform IDE created by Microsoft. It supports Windows, Mac, and Linux platforms. Installation and configuration are very simple. Using VS Code to manage and edit project script codes can easily realize functions such as syntax highlighting, smart code prompts, and web page debugging.</p><h2 id="installing-vs-code" tabindex="-1">Installing VS Code <a class="header-anchor" href="#installing-vs-code" aria-label="Permalink to &quot;Installing VS Code&quot;">​</a></h2><p>Go to the <a href="https://code.visualstudio.com/" target="_blank" rel="noreferrer">VS Code Official Website</a> and click the download link on the homepage to download it.</p><p>MacOS users should decompress the downloaded package and double-click <strong>Visual Studio Code</strong> to run it.</p><p>Windows users should run <strong>VSCodeUserSetup.exe</strong> after downloading it and follow the prompts to complete the installation.</p><h2 id="intellisence-data" tabindex="-1">IntelliSence Data <a class="header-anchor" href="#intellisence-data" aria-label="Permalink to &quot;IntelliSence Data&quot;">​</a></h2><p>When creating a project in Cocos Creator 3.x, a <a href="./tsconfig">tsconfig.json</a> file will be automatically generated in the project directory, which is configured with a directory file path for code hinting. When opening the project with VS Code and writing code, it will automatically pop up the Cocos Creator engine API suggestions. If the project is upgraded, the engine API will also be updated automatically.</p><p>After starting VS Code, select <strong>File -&gt; Open Folder...</strong> in the main menu, and select the project root directory in the pop-up dialog box, which is the path where <code>assets</code> and <code>project.json</code> are located. Then when creating a new script, or opening the original script for editing, there will be a syntax prompt.</p><p><img src="'+n+'" alt="vs code"></p><blockquote><p><strong>Note</strong>: when using a custom engine, or switching to use the built-in engine/custom engine, if the API code hinting are not updated, please follow the steps below to get the latest code hinting:</p><ol><li>Delete the <code>cache</code> folder under the <code>bin</code> directory in the custom engine (the built-in engine is the <code>resources\\resources\\3d\\engine\\bin</code> directory)</li><li>Execute <code>npm run build-declaration</code> in the engine directory</li></ol></blockquote><h2 id="setting-file-display-and-search-filter" tabindex="-1">Setting file display and search filter <a class="header-anchor" href="#setting-file-display-and-search-filter" aria-label="Permalink to &quot;Setting file display and search filter&quot;">​</a></h2><p>In the main menu of VS Code, select <strong>File (Windows)/Code (Mac) -&gt; Preferences -&gt; Settings</strong>, or select the <strong>Setting</strong> option in <img src="'+e+'" alt="gear.png"> in the lower left corner, this operation will open the user configuration file <strong>USER SETTINGS</strong>:</p><p><img src="'+a+'" alt="vs code"></p><p>Now, enter <strong>exclude</strong> search in the search box above and find <strong>Files: Exclude</strong> and <strong>Search: Exclude</strong> modules:</p><p><img src="'+r+`" alt="vs code"></p><p>Next, click <strong>Add Pattern</strong> to add the missing parts in the following content:</p><div class="language-json vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">json</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">{</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">    &quot;files.exclude&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: {</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">        &quot;**/.git&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">true</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">        &quot;**/.DS_Store&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">true</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">        &quot;**/*.meta&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">true</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">        &quot;library/&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">true</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">        &quot;local/&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">true</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">        &quot;temp/&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">true</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    },</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">    &quot;search.exclude&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: {</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">        &quot;**/node_modules&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">true</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">        &quot;**/bower_components&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">true</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">        &quot;build/&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">true</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">        &quot;temp/&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">true</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">        &quot;library/&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">true</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">        &quot;**/*.anim&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">true</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    }</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">}</span></span></code></pre></div><p>The fields above will set the directories to exclude from the search for VS Code, as well as the types of files to hide in the file list. Since <code>build</code>, <code>temp</code>, and <code>library</code> are all paths automatically generated when the editor is running, and will contain the content of the script we wrote, they should be excluded from the search. And each file in the <code>assets</code> directory will generate a <code>.meta</code> file. Generally speaking, there is no need to care about its content, just let the editor help manage these files.</p><h2 id="vs-code-advanced-use" tabindex="-1">VS Code Advanced Use <a class="header-anchor" href="#vs-code-advanced-use" aria-label="Permalink to &quot;VS Code Advanced Use&quot;">​</a></h2><p>Cocos Creator integrates the <strong>Add Compilation Task</strong> and <strong>Add Chrome Debug Configuration</strong> functions in <strong>Developer -&gt; VS Code Workflow</strong> in the top menu bar to better assist development:</p><p><img src="`+l+'" alt="vscode workflow"></p><ul><li><p><strong>Add compilation task</strong>: used to trigger the script compilation of Creator in VS Code. For details, please refer to the content in the <strong>Use VS Code to activate script compilation</strong> section.</p></li><li><p><strong>Add Chrome Debug configuration</strong>: used to debug the web version of the game. For details, please refer to the following <strong>Use VS Code to debug the web version of the game</strong> section.</p></li></ul><h3 id="using-vs-code-to-activate-script-compilation" tabindex="-1">Using VS Code to activate script compilation <a class="header-anchor" href="#using-vs-code-to-activate-script-compilation" aria-label="Permalink to &quot;Using VS Code to activate script compilation&quot;">​</a></h3><p>After using the external script editor to modify the project script, return to Cocos Creator to trigger script compilation. <br>The <strong>add compilation task</strong> function is provided in Creator, which activates the compilation of Creator by sending a request to a specific address through the API of a preview server. After modifying the project script the external script editor, executing the <strong>compilation task</strong> can trigger script compilation without returning to Cocos Creator.</p><h4 id="installing-curl" tabindex="-1">Installing cURL <a class="header-anchor" href="#installing-curl" aria-label="Permalink to &quot;Installing cURL&quot;">​</a></h4><p>First, make sure that the <a href="https://curl.haxx.se/" target="_blank" rel="noreferrer">cURL command</a> can be run in the operating system. If when running the <code>curl</code> command on the command line of the Windows operating system and the command cannot be found, install cURL to operating system:</p><ul><li><p>Visit this webpage: <a href="http://www.confusedbycode.com/curl/" target="_blank" rel="noreferrer">http://www.confusedbycode.com/curl/</a></p></li><li><p>Click the control shown by the arrow in the figure below to complete the human-machine identity verification.</p><p><img src="'+c+'" alt="curl download"></p></li><li><p>Click <code>curl-7.46.0-win64.exe</code> to start downloading and installing</p></li></ul><h4 id="adding-vs-code-compilation-task" tabindex="-1">Adding VS Code compilation task <a class="header-anchor" href="#adding-vs-code-compilation-task" aria-label="Permalink to &quot;Adding VS Code compilation task&quot;">​</a></h4><p>To activate script compilation in VS Code, perform the following steps:</p><ol><li><p>Click <strong>Developer -&gt; VS Code Workflow -&gt; Add Compilation Task</strong> on the top menu bar of Creator. This operation will add the task configuration file ,<code>tasks.json</code>, under the <code>.vscode</code> folder of the project directory.</p><p><img src="'+d+'" alt="task.json"></p></li><li><p>Press the shortcut key <kbd>Cmd/Ctrl + P</kbd> in VS Code to activate the <strong>Quick Open</strong> input box, then enter <code>task CocosCreator compile</code>, select <code>CocosCreator compile</code>.</p><p><img src="'+h+'" alt="task compile"></p><p>Next, select the output type:</p><p><img src="'+p+'" alt="task compile"></p></li><li><p>After the task is completed, the results will be displayed in the output panel at the bottom of the VS Code window (the output results will vary depending on the VS Code version and configuration).</p></li></ol><p>In this way, after using VS Code to edit the script, execute the second step to trigger the script compilation of Creator without returning to Creator.</p><p>VS Code can also configure shortcut keys for compilation tasks, select <strong>File (Windows)/Code (Mac) -&gt; Preferences -&gt; Keyboard Shortcuts</strong> in the main menu, or select the <strong>Keyboard shortcut</strong> option in <img src="'+e+'" alt="gear.png"> in the lower left corner, this operation will open the shortcut configuration file. Then modify the shortcut keys of the compilation task as needed. For example, set it to <kbd>Cmd/Ctrl + Shift + B</kbd> in the following figure:</p><p><img src="'+g+'" alt="set compile"></p><p>Next, press the shortcut key <kbd>Cmd/Ctrl + Shift + B</kbd> in VS Code and it will automatically display <code>CocosCreator compile</code>, no need to search manually.</p><p>For more information about configuring and executing tasks in VS Code, please refer to the <a href="https://code.visualstudio.com/docs/editor/tasks" target="_blank" rel="noreferrer">Integrate with External Tools via Tasks</a> documentation.</p><h3 id="using-vs-code-to-debug-web-games" tabindex="-1">Using VS Code to debug web games <a class="header-anchor" href="#using-vs-code-to-debug-web-games" aria-label="Permalink to &quot;Using VS Code to debug web games&quot;">​</a></h3><p>VS Code has excellent debugging capabilities. It is possible to directly debug the web version of the game program in the source code project.</p><p>First, install:</p><ul><li><p><a href="https://www.google.com/chrome/" target="_blank" rel="noreferrer">Google Chrome</a></p></li><li><p>VS Code plug-in: Debugger for Chrome</p><p>Click the <strong>Extensions</strong> button in the left navigation bar of VS Code to open the extension panel, enter <strong>Debugger for Chrome</strong> in the search box and click Install. After installation, you may need to restart VS Code to take effect.</p><p><img src="'+u+'" alt="debugger for chrome"></p></li></ul><p>Next, click <strong>Developer -&gt; VS Code Workflow -&gt; Add Chrome Debug Configuration</strong> in the top menu bar of Cocos Creator, this menu command will add a <code>.vscode/launch.json</code> file under the project folder as the configuration of the debugger:</p><p><img src="'+k+'" alt="launch.json"></p><p>Third, click the <strong>Debug</strong> button in the left column in VS Code to open the debugging panel, and select <code>Cocos Creator Launch Chrome against localhost</code> in the debugging configuration at the top, and then click the green start button on the left to debug.</p><p><img src="'+m+'" alt="debug chrome"></p><p>Debugging relies on the built-in Web server of the Cocos Creator editor, therefore debugging can only be carried out when the editor is started. If the port used by the editor to preview the game is not the default port, manually modify the <code>url</code> field in <code>launch.json</code> to add the correct port.</p><p>During the debugging process, it is possible to directly set breakpoints on the source file for monitoring, which is a more convenient and friendly workflow than using Chrome&#39;s built-in DevTools to debug.</p><h2 id="learning-how-to-use-vs-code" tabindex="-1">Learning how to use VS Code <a class="header-anchor" href="#learning-how-to-use-vs-code" aria-label="Permalink to &quot;Learning how to use VS Code&quot;">​</a></h2><p>Visit the <a href="https://code.visualstudio.com/Docs" target="_blank" rel="noreferrer">VS Code official website documentation</a> to learn how to use it from editing function operations, personalization, syntax highlighting settings to plug-in extensions.</p>',48),b=[C];function E(y,w,v,S,F,_){return s(),i("div",null,b)}const V=t(f,[["render",E]]);export{x as __pageData,V as default};