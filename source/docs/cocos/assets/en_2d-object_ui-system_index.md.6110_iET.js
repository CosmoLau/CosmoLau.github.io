import{_ as e,c as t,o as n,a4 as o}from"./chunks/framework.uQk9_EO2.js";const a="/docs/cocos/assets/resolution_config.Df3MNItv.png",i="/docs/cocos/assets/create-ui.NxwIJRx3.png",s="/docs/cocos/assets/add-ui-component.BzZHGKGH.png",b=JSON.parse('{"title":"UI System","description":"","frontmatter":{},"headers":[],"relativePath":"en/2d-object/ui-system/index.md","filePath":"en/2d-object/ui-system/index.md","lastUpdated":1712305443000}'),r={name:"en/2d-object/ui-system/index.md"},c=o('<h1 id="ui-system" tabindex="-1">UI System <a class="header-anchor" href="#ui-system" aria-label="Permalink to &quot;UI System&quot;">​</a></h1><p>This section introduces the powerful and flexible UI (User Interface) system in Cocos Creator. By assembling different UI components to produce UI interfaces that can be adapted to multiple screen resolutions, dynamically generate and update display content from data, and support multiple layout styles.</p><h2 id="getting-started-with-ui" tabindex="-1">Getting Started with UI <a class="header-anchor" href="#getting-started-with-ui" aria-label="Permalink to &quot;Getting Started with UI&quot;">​</a></h2><p>The difference between defining UI and 2D rendering objects in the engine mainly lies in adaptation and interaction. All UI needs to be under a Canvas node to make adaptation behavior, and the Canvas component itself inherits from <code>RenderRoot2D</code> component, it can also be used as an entry point for data collection.</p><p>The UI is a necessary interactive part of game development. Generally, buttons, text, backgrounds, etc. on the game are made through the UI. When starting to create a UI, first it is necessary to determine the size of the display area (design resolution) of the current design content, which can be set in the <strong>Project -&gt; Project Settings -&gt; Project Data</strong> panel in the menu bar.</p><p><img src="'+a+'" alt="resolution-config"></p><p>Once the design resolution is set, start creating UI elements, all of which are contained under the Canvas node. The Canvas node can be created by clicking the <strong>+</strong> button in the <strong>Hierarchy</strong> panel on the top left and selecting <strong>UI Component -&gt; Canvas</strong>. The Canvas node has a <a href="./../../ui-system/components/editor/canvas">Canvas</a> component, which can be associated with a camera.</p><blockquote><p><strong>Notes</strong>:</p><ol><li>Multiple Canvas nodes can exist in a scene, but a Canvas node should not be nested under another Canvas node or its children.</li><li>Canvas components are not one-to-one with camera, their previous rendering depends on the layer of the node and the Visibility of the camera, so you should pay extra attention to layer management to get the desired rendering effect when you have multiple Canvas.</li></ol></blockquote><p>Next, create UI nodes under the Canvas node. The editor comes with the following UI nodes:</p><p><img src="'+i+'" alt="create-ui"></p><p>UI components can be viewed by selecting the node and clicking <strong>Add Component</strong> in the <strong>Inspector</strong> panel.</p><p><img src="'+s+'" alt="add-ui-component"></p><p>The order in which UI components are rendered is a depth ordering scheme, which means that the ordering of the child nodes under the Canvas node already determines the entire <a href="./../../ui-system/components/engine/priority">rendering order</a>.</p><p>In general game development, the necessary UI elements are not only basic 2D renderable components such as Sprite, Label (text), Mask, but also Layout, Widget (alignment), etc., which are used to quickly build the interface. Sprite and Label are used to render images and text, Mask is mainly used to limit the display content, more commonly used in chat boxes and backpacks, etc. Layout is generally used for single arrangement of buttons, neat arrangement of props in backpacks, etc. <br> The last important feature is the Widget, which is mainly used for display alignment. When finishing designing the UI and publish it to different platforms, the actual device resolution of the platform is bound to be different from our design resolution, therefore some trade-offs need to be made in order to adapt it. It is necessary to add a widget component to it, and always ensure that it is aligned to the top left of our design resolution. Please review the <a href="./../../ui-system/components/engine/widget-align">Alignment Strategy</a> and <a href="./../../ui-system/components/editor/widget">Alignment</a> documentation.</p><p>Once the interface is created, some people may notice that the iPhone 7 displays differently than the iPhone X. This is actually the same problem with the device resolution we mentioned above. When you design in design resolution and finally publish in device resolution, there is a pixel deviation because the resolution of different models of mobile devices may not be the same, so there is another conversion process that needs to be done that is screen adaptation. <br> Notice in the <strong>Projects -&gt; Project Settings -&gt; Project Data</strong> page in the menu bar, there are two more options <strong>Fit Width / Fit Height</strong>, which can be easily adapted to different devices by following the screen adaptation rules and combining with the Widget component. The specific adaptation rules can be found in the <a href="./../../ui-system/components/engine/multi-resolution">Multi-Resolution Adaptation Scheme</a> documentation.</p><h2 id="ui-components" tabindex="-1">UI components <a class="header-anchor" href="#ui-components" aria-label="Permalink to &quot;UI components&quot;">​</a></h2><p>UI components mostly do not have rendering capabilities themselves, but hold 2D renderable components for rendering, which themselves have more ability to quickly form user-interactive interfaces, and take on functions such as event response, typography adaptation, etc.</p><p>For specific descriptions of each UI component, please refer to the <a href="./../../ui-system/components/editor/base-component">UI Components</a> documentation.</p><h2 id="ui-practice-guide" tabindex="-1">UI Practice Guide <a class="header-anchor" href="#ui-practice-guide" aria-label="Permalink to &quot;UI Practice Guide&quot;">​</a></h2><ul><li><a href="./../../ui-system/components/engine/multi-resolution">Multi-Resolution Adaptation Scheme</a></li><li><a href="./../../ui-system/components/engine/widget-align">Alignment Strategy</a></li><li><a href="./../../ui-system/components/engine/label-layout">Label Layout</a></li><li><a href="./../../ui-system/components/engine/auto-layout">Auto Layout Container</a></li><li><a href="./../../ui-system/components/engine/list-with-data">Create a List of Dynamically Generated Content</a></li><li><a href="./../../ui-system/components/engine/sliced-sprite">Use a Sliced Sprite to make a UI image</a></li></ul>',20),d=[c];function l(h,p,m,u,g,f){return n(),t("div",null,d)}const v=e(r,[["render",l]]);export{b as __pageData,v as default};