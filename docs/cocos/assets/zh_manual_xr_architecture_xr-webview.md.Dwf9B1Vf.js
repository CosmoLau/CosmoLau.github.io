import{_ as t,c as e,o as r,a5 as a}from"./chunks/framework.CqnjdYks.js";const o="/docs/cocos/assets/create-webview.Pvp1_Z-V.png",s="/docs/cocos/assets/web-effect.veesaSHn.png",b=JSON.parse('{"title":"XR 网页浏览器","description":"","frontmatter":{},"headers":[],"relativePath":"zh/manual/xr/architecture/xr-webview.md","filePath":"zh/manual/xr/architecture/xr-webview.md"}'),n={name:"zh/manual/xr/architecture/xr-webview.md"},c=a('<h1 id="xr-网页浏览器" tabindex="-1">XR 网页浏览器 <a class="header-anchor" href="#xr-网页浏览器" aria-label="Permalink to &quot;XR 网页浏览器&quot;">​</a></h1><p>在XR中，网页浏览器可以让用户在虚拟现实环境中访问和浏览网页。用户可以设备控制器与网页界面进行交互，如选择链接、滚动页面等等操作，以增强用户的沉浸感和体验。</p><h2 id="xr-网页浏览器功能" tabindex="-1">XR 网页浏览器功能 <a class="header-anchor" href="#xr-网页浏览器功能" aria-label="Permalink to &quot;XR 网页浏览器功能&quot;">​</a></h2><table><thead><tr><th>属性</th><th>描述</th></tr></thead><tbody><tr><td>Content</td><td>指定用于渲染网页内容的MeshRenderer对象。</td></tr><tr><td>Url</td><td>网页链接。</td></tr></tbody></table><h2 id="使用-xr-网页浏览器" tabindex="-1">使用 XR 网页浏览器 <a class="header-anchor" href="#使用-xr-网页浏览器" aria-label="Permalink to &quot;使用 XR 网页浏览器&quot;">​</a></h2><p>层级管理器右键 <strong>创建 &gt; XR &gt; XR Webview</strong>。</p><p>默认创建一个带有 cc.MeshRenderer 组件的节点作为子节点 Webview Content。</p><p><img src="'+o+'" alt=""></p><p>构建发布应用即可看到网页内容。</p><p><img src="'+s+'" alt=""></p><p>注：</p><ul><li><p>使用网页浏览器功能需要扩展版本 <strong>&gt;=1.2.0</strong>，编辑器版本 <strong>&gt;=3.7.3</strong>。</p></li><li><p>Vulkan目前不支持视频播放器。</p></li></ul>',12),i=[c];function d(l,h,p,_,u,m){return r(),e("div",null,i)}const g=t(n,[["render",d]]);export{b as __pageData,g as default};