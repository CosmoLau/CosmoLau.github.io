import{_ as t,v as e,b as l,R as a}from"./chunks/framework.5ffcbaff.js";const g=JSON.parse('{"title":"Cocos Shader 内置全局 Uniform","description":"","frontmatter":{},"headers":[],"relativePath":"zh/manual/shader/uniform.md","filePath":"zh/manual/shader/uniform.md"}'),d={name:"zh/manual/shader/uniform.md"},n=a('<h1 id="cocos-shader-内置全局-uniform" tabindex="-1">Cocos Shader 内置全局 Uniform <a class="header-anchor" href="#cocos-shader-内置全局-uniform" aria-label="Permalink to &quot;Cocos Shader 内置全局 Uniform&quot;">​</a></h1><p>要在 Cocos Shader 中使用内置变量 Uniform，需要包含对应的着色器片段（Chunk）即可，如下代码所示：</p><div class="language-ts"><button title="Copy Code" class="copy"></button><span class="lang">ts</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#676E95;font-style:italic;">//local uniforms</span></span>\n<span class="line"><span style="color:#A6ACCD;">#include </span><span style="color:#89DDFF;">&lt;</span><span style="color:#A6ACCD;">builtin</span><span style="color:#89DDFF;">/</span><span style="color:#A6ACCD;">uniforms</span><span style="color:#89DDFF;">/</span><span style="color:#A6ACCD;">cc</span><span style="color:#89DDFF;">-</span><span style="color:#A6ACCD;">local</span><span style="color:#89DDFF;">&gt;</span></span>\n<span class="line"><span style="color:#676E95;font-style:italic;">//global uniforms</span></span>\n<span class="line"><span style="color:#A6ACCD;">#include </span><span style="color:#89DDFF;">&lt;</span><span style="color:#A6ACCD;">builtin</span><span style="color:#89DDFF;">/</span><span style="color:#A6ACCD;">uniforms</span><span style="color:#89DDFF;">/</span><span style="color:#A6ACCD;">cc</span><span style="color:#89DDFF;">-</span><span style="color:#A6ACCD;">global</span><span style="color:#89DDFF;">&gt;</span></span></code></pre></div><p>以下是常用内置变量，按所在着色器片段进行分组，列表如下：</p><h2 id="cc-local-chunk" tabindex="-1"><code>cc-local.chunk</code> <a class="header-anchor" href="#cc-local-chunk" aria-label="Permalink to &quot;`cc-local.chunk`&quot;">​</a></h2><table><thead><tr><th style="text-align:left;">Name</th><th style="text-align:left;">Type</th><th style="text-align:left;">Info</th></tr></thead><tbody><tr><td style="text-align:left;"><code>cc_matWorld</code></td><td style="text-align:left;">mat4</td><td style="text-align:left;">模型空间转世界空间矩阵</td></tr><tr><td style="text-align:left;"><code>cc_matWorldIT</code></td><td style="text-align:left;">mat4</td><td style="text-align:left;">模型空间转世界空间逆转置矩阵</td></tr></tbody></table><h2 id="cc-global-chunk" tabindex="-1"><code>cc-global.chunk</code> <a class="header-anchor" href="#cc-global-chunk" aria-label="Permalink to &quot;`cc-global.chunk`&quot;">​</a></h2><table><thead><tr><th style="text-align:left;">Name</th><th style="text-align:left;">Type</th><th style="text-align:left;">Info</th></tr></thead><tbody><tr><td style="text-align:left;"><code>cc_time</code></td><td style="text-align:left;">vec4</td><td style="text-align:left;">x：游戏运行时间（秒）<br> y：帧时间（秒）<br> z：游戏运行帧数 <br>w：未使用</td></tr><tr><td style="text-align:left;"><code>cc_screenSize</code></td><td style="text-align:left;">vec4</td><td style="text-align:left;">xy：屏幕尺寸<br>zw：屏幕尺寸倒数</td></tr><tr><td style="text-align:left;"><code>cc_screenScale</code></td><td style="text-align:left;">vec4</td><td style="text-align:left;">xy：屏幕缩放<br>zw：屏幕缩放倒数</td></tr><tr><td style="text-align:left;"><code>cc_nativeSize</code></td><td style="text-align:left;">vec4</td><td style="text-align:left;">xy：实际着色缓冲的尺寸<br>zw：实际着色缓冲的尺寸倒数</td></tr><tr><td style="text-align:left;"><code>cc_matView</code></td><td style="text-align:left;">mat4</td><td style="text-align:left;">视图矩阵</td></tr><tr><td style="text-align:left;"><code>cc_matViewInv</code></td><td style="text-align:left;">mat4</td><td style="text-align:left;">视图逆矩阵</td></tr><tr><td style="text-align:left;"><code>cc_matProj</code></td><td style="text-align:left;">mat4</td><td style="text-align:left;">投影矩阵</td></tr><tr><td style="text-align:left;"><code>cc_matProjInv</code></td><td style="text-align:left;">mat4</td><td style="text-align:left;">投影逆矩阵</td></tr><tr><td style="text-align:left;"><code>cc_matViewProj</code></td><td style="text-align:left;">mat4</td><td style="text-align:left;">视图投影矩阵</td></tr><tr><td style="text-align:left;"><code>cc_matViewProjInv</code></td><td style="text-align:left;">mat4</td><td style="text-align:left;">视图投影逆矩阵</td></tr><tr><td style="text-align:left;"><code>cc_cameraPos</code></td><td style="text-align:left;">vec4</td><td style="text-align:left;">xyz：相机位置<br> w：combineSignY</td></tr><tr><td style="text-align:left;"><code>cc_exposure</code></td><td style="text-align:left;">vec4</td><td style="text-align:left;">x：相机曝光<br>y：相机曝光倒数<br>z：是否启用 HDR<br>w：HDR 转 LDR 缩放参数</td></tr><tr><td style="text-align:left;"><code>cc_mainLitDir</code></td><td style="text-align:left;">vec4</td><td style="text-align:left;">xyz：主方向光源方向 <br>w：是否启用阴影</td></tr><tr><td style="text-align:left;"><code>cc_mainLitColor</code></td><td style="text-align:left;">vec4</td><td style="text-align:left;">xyz：主方向光颜色<br>w：主方向光强度</td></tr><tr><td style="text-align:left;"><code>cc_ambientSky</code></td><td style="text-align:left;">vec4</td><td style="text-align:left;">xyz：天空颜色<br>w：亮度</td></tr><tr><td style="text-align:left;"><code>cc_ambientGround</code></td><td style="text-align:left;">vec4</td><td style="text-align:left;">xyz：地面反射光颜色<br> w：环境贴图 Mipmap 等级</td></tr></tbody></table><h2 id="cc-environment-chunk" tabindex="-1"><code>cc-environment.chunk</code> <a class="header-anchor" href="#cc-environment-chunk" aria-label="Permalink to &quot;`cc-environment.chunk`&quot;">​</a></h2><table><thead><tr><th style="text-align:left;">Name</th><th style="text-align:left;">Type</th><th style="text-align:left;">Info</th></tr></thead><tbody><tr><td style="text-align:left;"><code>cc_environment</code></td><td style="text-align:left;">samplerCube</td><td style="text-align:left;">IBL 环境贴图</td></tr></tbody></table><h2 id="cc-forward-light-chunk" tabindex="-1"><code>cc-forward-light.chunk</code> <a class="header-anchor" href="#cc-forward-light-chunk" aria-label="Permalink to &quot;`cc-forward-light.chunk`&quot;">​</a></h2><table><thead><tr><th style="text-align:left;">Name</th><th style="text-align:left;">Type</th><th style="text-align:left;">Info</th></tr></thead><tbody><tr><td style="text-align:left;"><code>cc_sphereLitPos[MAX_LIGHTS]</code></td><td style="text-align:left;">vec4</td><td style="text-align:left;">xyz：球面光位置</td></tr><tr><td style="text-align:left;"><code>cc_sphereLitSizeRange[MAX_LIGHTS]</code></td><td style="text-align:left;">vec4</td><td style="text-align:left;">x：球光尺寸<br>y：球光范围</td></tr><tr><td style="text-align:left;"><code>cc_sphereLitColor[MAX_LIGHTS]</code></td><td style="text-align:left;">vec4</td><td style="text-align:left;">xyz：球光颜色<br>w：球光强度</td></tr><tr><td style="text-align:left;"><code>cc_spotLitPos[MAX_LIGHTS]</code></td><td style="text-align:left;">vec4</td><td style="text-align:left;">xyz：聚光灯位置</td></tr><tr><td style="text-align:left;"><code>cc_spotLitSizeRangeAngle[MAX_LIGHTS]</code></td><td style="text-align:left;">vec4</td><td style="text-align:left;">x：聚光灯尺寸<br>y：聚光灯范围<br>z：聚光灯角度</td></tr><tr><td style="text-align:left;"><code>cc_spotLitDir[MAX_LIGHTS]</code></td><td style="text-align:left;">vec4</td><td style="text-align:left;">xyz：聚光灯方向</td></tr><tr><td style="text-align:left;"><code>cc_spotLitColor[MAX_LIGHTS]</code></td><td style="text-align:left;">vec4</td><td style="text-align:left;">xyz：聚光灯颜色<br>w：聚光灯强度</td></tr></tbody></table><h2 id="cc-shadow-chunk" tabindex="-1"><code>cc-shadow.chunk</code> <a class="header-anchor" href="#cc-shadow-chunk" aria-label="Permalink to &quot;`cc-shadow.chunk`&quot;">​</a></h2><table><thead><tr><th style="text-align:left;">Name</th><th style="text-align:left;">Type</th><th style="text-align:left;">Info</th></tr></thead><tbody><tr><td style="text-align:left;"><code>cc_matLightPlaneProj</code></td><td style="text-align:left;">mat4</td><td style="text-align:left;">平面阴影的变换矩阵</td></tr><tr><td style="text-align:left;"><code>cc_shadowColor</code></td><td style="text-align:left;">vec4</td><td style="text-align:left;">阴影颜色</td></tr></tbody></table><p>完整常量列表，请参考 <strong>internal/builtin/uniforms/</strong> 目录。</p>',15),c=[n];function s(o,r,i,y,f,x){return e(),l("div",null,c)}const p=t(d,[["render",s]]);export{g as __pageData,p as default};