import{_ as e}from"./chunks/menu-button.CjNMAp13.js";import{_ as t,c as s,o as i,a4 as r}from"./chunks/framework.uQk9_EO2.js";const a="/docs/cocos/assets/size_overtime.BzP5tGiT.gif",o="/docs/cocos/assets/size_module.Dm7M6Bsl.png",l="/docs/cocos/assets/size_module_curve.C4kT_y_k.png",x=JSON.parse('{"title":"Size Overtime Module","description":"","frontmatter":{},"headers":[],"relativePath":"en/particle-system/size-module.md","filePath":"en/particle-system/size-module.md","lastUpdated":1712305443000}'),n={name:"en/particle-system/size-module.md"},c=r('<h1 id="size-overtime-module" tabindex="-1">Size Overtime Module <a class="header-anchor" href="#size-overtime-module" aria-label="Permalink to &quot;Size Overtime Module&quot;">​</a></h1><p>The Size module is used to set the size of the particles during their lifetime, thus achieving particle effects like flames and snowflakes of varying sizes.</p><p><img src="'+a+'" alt="size_overtime"></p><h2 id="properties" tabindex="-1">Properties <a class="header-anchor" href="#properties" aria-label="Permalink to &quot;Properties&quot;">​</a></h2><p><img src="'+o+'" alt="size_overtime"></p><table><thead><tr><th style="text-align:left;">Properties</th><th style="text-align:left;">Description</th></tr></thead><tbody><tr><td style="text-align:left;"><strong>SeparateAxes</strong></td><td style="text-align:left;">Whether to set particle size separately on X, Y, Z axis. <br>When you click the <img src="'+e+'" alt="menu button"> button on the right side of the input box and switch to use curve editing, it indicates whether the three axes are scaled separately. Please refer to the following for details.</td></tr><tr><td style="text-align:left;"><strong>Size</strong></td><td style="text-align:left;">Set the particle size. <br>When switching to use curve editing, you can set the curve of particle size versus time. <br>This item and the <strong>separateAxes</strong> attribute, only one of the two can be selected.</td></tr></tbody></table><h2 id="separate-axes" tabindex="-1">Separate Axes <a class="header-anchor" href="#separate-axes" aria-label="Permalink to &quot;Separate Axes&quot;">​</a></h2><p>Check the <strong>SeparateAxes</strong> property, click the <img src="'+e+'" alt="menu button"> button and select <strong>Curve</strong> to switch to curve editing mode. You can then define the curve to specify the size change of the particle in the X, Y and Z directions during its lifetime (Z is only used for mesh particles).</p><p><img src="'+l+'" alt="size_module_curve"></p><p>For details, please refer to <a href="./editor/curve-editor">Curve Editor</a>.</p>',10),d=[c];function h(p,m,u,_,f,g){return i(),s("div",null,d)}const y=t(n,[["render",h]]);export{x as __pageData,y as default};