import{_ as s,v as a,b as n,R as o}from"./chunks/framework.5ffcbaff.js";const A=JSON.parse('{"title":"配置系统","description":"","frontmatter":{},"headers":[],"relativePath":"zh/manual/editor/extension/profile.md","filePath":"zh/manual/editor/extension/profile.md"}'),l={name:"zh/manual/editor/extension/profile.md"},p=o(`<h1 id="配置系统" tabindex="-1">配置系统 <a class="header-anchor" href="#配置系统" aria-label="Permalink to &quot;配置系统&quot;">​</a></h1><p>Cocos Creator 扩展提供了一套配置管理机制，用于在扩展保存用户设置和数据。</p><h2 id="配置类型" tabindex="-1">配置类型 <a class="header-anchor" href="#配置类型" aria-label="Permalink to &quot;配置类型&quot;">​</a></h2><p>配置类型有两种：</p><ol><li>编辑器配置（editor）</li><li>项目配置（project）</li></ol><h3 id="编辑器配置" tabindex="-1">编辑器配置 <a class="header-anchor" href="#编辑器配置" aria-label="Permalink to &quot;编辑器配置&quot;">​</a></h3><p>编辑器配置用于存放一些编辑器相关的用户设置和数据，分成三个优先级，从高到低今次为：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">local -&gt; global -&gt; default</span></span></code></pre></div><p>在进行配置数据获取时，会优先采用 <code>local</code> 中的配置项，若 <code>local</code> 中无对应配置项，则会采用 <code>global</code> 中的配置项，若 <code>global</code> 中也找不到对应配置项，则会采用默认的 <code>default</code> 配置。</p><h3 id="项目配置" tabindex="-1">项目配置 <a class="header-anchor" href="#项目配置" aria-label="Permalink to &quot;项目配置&quot;">​</a></h3><p>项目配置用于存放一些和项目相关的用户设置和数据，分成两优先级，从高到低为：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">local -&gt; default</span></span></code></pre></div><p>和 <strong>编辑器配置</strong> 的规则类似，在进行配置数据获取时，会优先采用 <code>local</code> 中的配置项，若 <code>local</code> 中无对应配置项，则会采用默认的 <code>default</code> 配置。</p><h2 id="注册配置" tabindex="-1">注册配置 <a class="header-anchor" href="#注册配置" aria-label="Permalink to &quot;注册配置&quot;">​</a></h2><p>若要使用配置系统，需要在扩展定义文件 <code>package.json</code> 的 <code>contributions</code> 字段中定义 <code>profile</code> 相关信息，如下所示：</p><div class="language-json"><button title="Copy Code" class="copy"></button><span class="lang">json</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C792EA;">name</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">hello-world</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C792EA;">contributions</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">        </span><span style="color:#89DDFF;">&quot;</span><span style="color:#FFCB6B;">profile</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">            </span><span style="color:#89DDFF;">&quot;</span><span style="color:#F78C6C;">editor</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">                </span><span style="color:#89DDFF;">&quot;</span><span style="color:#F07178;">test.a</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">                    </span><span style="color:#89DDFF;">&quot;</span><span style="color:#916B53;">default</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">0</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#A6ACCD;">                    </span><span style="color:#89DDFF;">&quot;</span><span style="color:#916B53;">message</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">editorTestAChanged</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#A6ACCD;">                    </span><span style="color:#89DDFF;">&quot;</span><span style="color:#916B53;">label</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">测试编辑器配置</span><span style="color:#89DDFF;">&quot;</span></span>
<span class="line"><span style="color:#A6ACCD;">                </span><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#A6ACCD;">            </span><span style="color:#89DDFF;">},</span></span>
<span class="line"><span style="color:#A6ACCD;">            </span><span style="color:#89DDFF;">&quot;</span><span style="color:#F78C6C;">project</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">                </span><span style="color:#89DDFF;">&quot;</span><span style="color:#F07178;">test.a</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">                    </span><span style="color:#89DDFF;">&quot;</span><span style="color:#916B53;">default</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">1</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#A6ACCD;">                    </span><span style="color:#89DDFF;">&quot;</span><span style="color:#916B53;">message</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">projectTestAChanged</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#A6ACCD;">                    </span><span style="color:#89DDFF;">&quot;</span><span style="color:#916B53;">label</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">测试项目配置</span><span style="color:#89DDFF;">&quot;</span></span>
<span class="line"><span style="color:#A6ACCD;">                </span><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#A6ACCD;">            </span><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#A6ACCD;">        </span><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">},</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span></code></pre></div><p><strong>contributions.profile</strong> 相关的字段释义如下：</p><ul><li><code>editor</code>:{} - 编辑器配置</li><li><code>project</code>:{} - 项目配置</li><li><code>test.a</code>：{} - key 为 test.a 的配置项</li><li><code>default</code>:any - 此配置项的默认值，可选参数</li><li><code>message</code>:string - 此配置项被修改时会触发此消息，可选参数</li><li><code>label</code>:string - 在可以显示配置的地方，可能会显示这个描述。支持 i18n:key 格式，可选参数</li></ul><p><code>profile</code> 相关的 TypeScript 接口定义如下：</p><div class="language-typescript"><button title="Copy Code" class="copy"></button><span class="lang">typescript</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#C792EA;">interface</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">ProfileInfo</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#F07178;">editor</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span><span style="color:#A6ACCD;"> [ </span><span style="color:#A6ACCD;font-style:italic;">key</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">string</span><span style="color:#A6ACCD;"> ]</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">ProfileItem</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">};</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#F07178;">project</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span><span style="color:#A6ACCD;"> [ </span><span style="color:#A6ACCD;font-style:italic;">key</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">string</span><span style="color:#A6ACCD;"> ]</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">ProfileItem</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">};</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#C792EA;">interface</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">ProfileItem</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#89DDFF;">    </span><span style="color:#676E95;font-style:italic;">// 配置的默认数据</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#F07178;">default</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">any</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#89DDFF;">    </span><span style="color:#676E95;font-style:italic;">// 配置更改后，会自动发送这个消息进行通知</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#F07178;">message</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">string</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#89DDFF;">    </span><span style="color:#676E95;font-style:italic;">// 简单的描述配置信息的作用，支持 i18n:key 语法</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#F07178;">label</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">string</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span></code></pre></div><h2 id="读取与修改配置" tabindex="-1">读取与修改配置 <a class="header-anchor" href="#读取与修改配置" aria-label="Permalink to &quot;读取与修改配置&quot;">​</a></h2><h3 id="导入扩展定义" tabindex="-1">导入扩展定义 <a class="header-anchor" href="#导入扩展定义" aria-label="Permalink to &quot;导入扩展定义&quot;">​</a></h3><div class="language-typescript"><button title="Copy Code" class="copy"></button><span class="lang">typescript</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#89DDFF;font-style:italic;">import</span><span style="color:#A6ACCD;"> packageJSON </span><span style="color:#89DDFF;font-style:italic;">from</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">../package.json</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">;</span></span></code></pre></div><p><code>Editor.Profile.getConfig</code> 最后一个参数为空的情况，会进行 <a href="#编辑器配置">优先级</a> 匹配。</p><p>若指定了获取位置（<code>local</code> 、 <code>global</code> 、<code>default</code> 三者之一），则会返回对应的值。如下所示，获取到的 <code>local</code> 和 <code>global</code> 为 <code>undefined</code> 是因为未对其进行设置。</p><div class="language-typescript"><button title="Copy Code" class="copy"></button><span class="lang">typescript</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#89DDFF;font-style:italic;">await</span><span style="color:#A6ACCD;"> Editor</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">Profile</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">getConfig</span><span style="color:#A6ACCD;">(packageJSON</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">name</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">test.a</span><span style="color:#89DDFF;">&#39;</span><span style="color:#A6ACCD;">)</span><span style="color:#89DDFF;">;</span><span style="color:#A6ACCD;"> </span><span style="color:#676E95;font-style:italic;">// 0</span></span>
<span class="line"><span style="color:#89DDFF;font-style:italic;">await</span><span style="color:#A6ACCD;"> Editor</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">Profile</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">getConfig</span><span style="color:#A6ACCD;">(packageJSON</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">name</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">test.a</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">local</span><span style="color:#89DDFF;">&#39;</span><span style="color:#A6ACCD;">)</span><span style="color:#89DDFF;">;</span><span style="color:#A6ACCD;"> </span><span style="color:#676E95;font-style:italic;">// undefined</span></span>
<span class="line"><span style="color:#89DDFF;font-style:italic;">await</span><span style="color:#A6ACCD;"> Editor</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">Profile</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">getConfig</span><span style="color:#A6ACCD;">(packageJSON</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">name</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">test.a</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">global</span><span style="color:#89DDFF;">&#39;</span><span style="color:#A6ACCD;">)</span><span style="color:#89DDFF;">;</span><span style="color:#A6ACCD;"> </span><span style="color:#676E95;font-style:italic;">// undefined</span></span></code></pre></div><h3 id="修改编辑器配置" tabindex="-1">修改编辑器配置 <a class="header-anchor" href="#修改编辑器配置" aria-label="Permalink to &quot;修改编辑器配置&quot;">​</a></h3><p>用以下代码修改配置后再调用 <code>getConfig</code> 可以看到对应变化。</p><div class="language-typescript"><button title="Copy Code" class="copy"></button><span class="lang">typescript</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#89DDFF;font-style:italic;">await</span><span style="color:#A6ACCD;"> Editor</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">Profile</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">setConfig</span><span style="color:#A6ACCD;">(packageJSON</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">name</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">test.a</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">1</span><span style="color:#A6ACCD;">)</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#89DDFF;font-style:italic;">await</span><span style="color:#A6ACCD;"> Editor</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">Profile</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">setConfig</span><span style="color:#A6ACCD;">(packageJSON</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">name</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">test.a</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">local</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">2</span><span style="color:#A6ACCD;">)</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#89DDFF;font-style:italic;">await</span><span style="color:#A6ACCD;"> Editor</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">Profile</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">setConfig</span><span style="color:#A6ACCD;">(packageJSON</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">name</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">test.a</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">global</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">3</span><span style="color:#A6ACCD;">)</span><span style="color:#89DDFF;">;</span></span></code></pre></div><h3 id="读取项目配置" tabindex="-1">读取项目配置 <a class="header-anchor" href="#读取项目配置" aria-label="Permalink to &quot;读取项目配置&quot;">​</a></h3><p><code>Editor.Profile.getProject</code> 最后一个参数为空的情况，会进行 <a href="#项目配置">优先级</a> 匹配。</p><p>若指定了获取位置（<code>local</code> 、<code>default</code> 二者之一），则会返回对应的值。如下所示，获取到的 <code>local</code> 为 <code>undefined</code> 是因为未对其进行设置。</p><div class="language-typescript"><button title="Copy Code" class="copy"></button><span class="lang">typescript</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#89DDFF;font-style:italic;">await</span><span style="color:#A6ACCD;"> Editor</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">Profile</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">getProject</span><span style="color:#A6ACCD;">(packageJSON</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">name</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">test.a</span><span style="color:#89DDFF;">&#39;</span><span style="color:#A6ACCD;">)</span><span style="color:#89DDFF;">;</span><span style="color:#A6ACCD;"> </span><span style="color:#676E95;font-style:italic;">// 1</span></span>
<span class="line"><span style="color:#89DDFF;font-style:italic;">await</span><span style="color:#A6ACCD;"> Editor</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">Profile</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">getProject</span><span style="color:#A6ACCD;">(packageJSON</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">name</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">test.a</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">local</span><span style="color:#89DDFF;">&#39;</span><span style="color:#A6ACCD;">)</span><span style="color:#89DDFF;">;</span><span style="color:#A6ACCD;"> </span><span style="color:#676E95;font-style:italic;">// undefined</span></span></code></pre></div><h3 id="修改项目配置" tabindex="-1">修改项目配置 <a class="header-anchor" href="#修改项目配置" aria-label="Permalink to &quot;修改项目配置&quot;">​</a></h3><p>用以下代码修改配置后再调用 <code>getProject</code> 可以看到对应变化。</p><div class="language-typescript"><button title="Copy Code" class="copy"></button><span class="lang">typescript</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#89DDFF;font-style:italic;">await</span><span style="color:#A6ACCD;"> Editor</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">Profile</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">setProject</span><span style="color:#A6ACCD;">(packageJSON</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">name</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">test.a</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">1</span><span style="color:#A6ACCD;">)</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#89DDFF;font-style:italic;">await</span><span style="color:#A6ACCD;"> Editor</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">Profile</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">setProject</span><span style="color:#A6ACCD;">(packageJSON</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">name</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">test.a</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">local</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">2</span><span style="color:#A6ACCD;">)</span><span style="color:#89DDFF;">;</span></span></code></pre></div><h2 id="存储路径" tabindex="-1">存储路径 <a class="header-anchor" href="#存储路径" aria-label="Permalink to &quot;存储路径&quot;">​</a></h2><h3 id="编辑器配置存储路径" tabindex="-1">编辑器配置存储路径 <a class="header-anchor" href="#编辑器配置存储路径" aria-label="Permalink to &quot;编辑器配置存储路径&quot;">​</a></h3><table><thead><tr><th>层级</th><th>路径</th></tr></thead><tbody><tr><td>local</td><td><code>{projectPath}/profiles/v2/extensions/{extensionName}.json</code></td></tr><tr><td>global(mac)</td><td><code>Users/{name}/.CocosCreator/profiles/v2/extensions/{extensionName}.json</code></td></tr><tr><td>global(window)</td><td><code>c/Users/{name}/.CocosCreator/profiles/v2/extensions/{extensionName}.json</code></td></tr><tr><td>default</td><td><code>{extensionPath}/package.json</code></td></tr></tbody></table><h3 id="项目配置存储路径" tabindex="-1">项目配置存储路径 <a class="header-anchor" href="#项目配置存储路径" aria-label="Permalink to &quot;项目配置存储路径&quot;">​</a></h3><table><thead><tr><th>层级</th><th>路径</th></tr></thead><tbody><tr><td>local</td><td><code>{projectPath}/settings/v2/extensions/{extensionName}.json</code></td></tr><tr><td>default</td><td><code>{extensionPath}/package.json</code></td></tr></tbody></table>`,41),e=[p];function t(c,r,D,y,F,C){return a(),n("div",null,e)}const d=s(l,[["render",t]]);export{A as __pageData,d as default};