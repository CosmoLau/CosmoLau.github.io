import{_ as a,c as s,o as t,a4 as i}from"./chunks/framework.uQk9_EO2.js";const g=JSON.parse('{"title":"Project","description":"","frontmatter":{},"headers":[],"relativePath":"zh/editor/extension/api/project.md","filePath":"zh/editor/extension/api/project.md","lastUpdated":1712305443000}'),e={name:"zh/editor/extension/api/project.md"},p=i('<h1 id="project" tabindex="-1">Project <a class="header-anchor" href="#project" aria-label="Permalink to &quot;Project&quot;">​</a></h1><p>当前打开的项目基本信息</p><h2 id="变量" tabindex="-1">变量 <a class="header-anchor" href="#变量" aria-label="Permalink to &quot;变量&quot;">​</a></h2><h3 id="name" tabindex="-1">name <a class="header-anchor" href="#name" aria-label="Permalink to &quot;name&quot;">​</a></h3><p>• <strong>name</strong>: <code>string</code></p><p>当前项目名称(取自 package.json)</p><div class="language-typescript vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">typescript</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">const</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> projectName</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> =</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> Editor.Project.name; </span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// &quot;Hello World 3.4.0&quot;</span></span></code></pre></div><h3 id="path" tabindex="-1">path <a class="header-anchor" href="#path" aria-label="Permalink to &quot;path&quot;">​</a></h3><p>• <strong>path</strong>: <code>string</code></p><p>当前项目路径</p><div class="language-typescript vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">typescript</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">const</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> projectPath</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> =</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> Editor.Project.path;  </span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// &quot;E:\\\\workSpace\\\\Hello World 3.4.0&quot;</span></span></code></pre></div><h3 id="tmpdir" tabindex="-1">tmpDir <a class="header-anchor" href="#tmpdir" aria-label="Permalink to &quot;tmpDir&quot;">​</a></h3><p>• <strong>tmpDir</strong>: <code>string</code></p><p>当前项目临时文件夹</p><div class="language-typescript vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">typescript</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">const</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> projectTmpDir</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> =</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> Editor.Project.tmpDir;  </span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// &quot;E:\\\\workSpace\\\\Hello World 3.4.0\\\\temp&quot;</span></span></code></pre></div><h3 id="uuid" tabindex="-1">uuid <a class="header-anchor" href="#uuid" aria-label="Permalink to &quot;uuid&quot;">​</a></h3><p>• <strong>uuid</strong>: <code>string</code></p><p>当前项目 uuid</p><div class="language-typescript vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">typescript</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">const</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> projectUUID</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> =</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> Editor.Project.uuid;  </span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// &quot;7aa7c089-8e53-4611-8689-98b69ab28e22&quot;</span></span></code></pre></div>',19),o=[p];function n(r,h,l,d,c,k){return t(),s("div",null,o)}const m=a(e,[["render",n]]);export{g as __pageData,m as default};