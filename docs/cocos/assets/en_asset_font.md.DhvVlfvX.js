import{_ as e,c as t,o,a4 as n}from"./chunks/framework.uQk9_EO2.js";const s="/docs/cocos/assets/imported.DDFazU2k.png",a="/docs/cocos/assets/create_label.CnhYvCxm.png",r="/docs/cocos/assets/create_label_main_menu.BJAFg2xU.png",i="/docs/cocos/assets/assign_font_file.D8b5TrSH.png",_=JSON.parse('{"title":"Fonts","description":"","frontmatter":{},"headers":[],"relativePath":"en/asset/font.md","filePath":"en/asset/font.md","lastUpdated":1712305443000}'),d={name:"en/asset/font.md"},c=n('<h1 id="fonts" tabindex="-1">Fonts <a class="header-anchor" href="#fonts" aria-label="Permalink to &quot;Fonts&quot;">​</a></h1><p>There are three types of font assets available to games made with <strong>Cocos Creator</strong>: <strong>system fonts</strong>, <strong>dynamic fonts</strong>, and <strong>bitmap fonts</strong>.</p><p>The <strong>system font</strong> renders text by calling the <strong>system font</strong> that comes with the game running platform, and does not require the user to add any related assets to the project. To use <strong>system fonts</strong>, use the <strong>Use System Font</strong> property in the <a href="./../ui-system/components/editor/label">Label</a> documentation.</p><h2 id="importing-font-assets" tabindex="-1">Importing font assets <a class="header-anchor" href="#importing-font-assets" aria-label="Permalink to &quot;Importing font assets&quot;">​</a></h2><h3 id="dynamic-fonts" tabindex="-1">Dynamic fonts <a class="header-anchor" href="#dynamic-fonts" aria-label="Permalink to &quot;Dynamic fonts&quot;">​</a></h3><p><strong>Cocos Creator</strong> currently supports dynamic fonts in <strong>True Type</strong> format. Simply drag a font file with an extension of <code>.ttf</code> into the <strong>Assets</strong> panel, and you can import the font asset.</p><h3 id="bitmap-fonts" tabindex="-1">Bitmap fonts <a class="header-anchor" href="#bitmap-fonts" aria-label="Permalink to &quot;Bitmap fonts&quot;">​</a></h3><p>The bitmap font is composed of a font file in <code>.fnt</code> format and a <code>.png</code> image. The <code>.fnt</code> file provides an index of each character thumbnail. Fonts in this format can be generated by specialized software, please refer to:</p><ul><li><a href="https://71squared.com/glyphdesigner" target="_blank" rel="noreferrer">Glyph Designer</a></li><li><a href="https://github.com/libgdx/libgdx/wiki/Hiero" target="_blank" rel="noreferrer">Hiero</a></li><li><a href="http://www.angelcode.com/products/bmfont/" target="_blank" rel="noreferrer">BMFont (Windows)</a></li></ul><p>When importing bitmap fonts, be sure to drag both the <code>.fnt</code> file and the <code>.png</code> file into the <strong>Assets</strong> panel at the same time.</p><blockquote><p><strong>Note</strong>: after importing the bitmap font, you need to change the type of the <code>.png</code> file to <strong>sprite-frame</strong>, otherwise the bitmap font will not work properly.</p></blockquote><p>The imported fonts are displayed in the <strong>Assets</strong> panel, as follows:</p><p><img src="'+s+'" alt="imported font asset"></p><blockquote><p><strong>Note</strong>: in order to improve the efficiency of asset management, it is recommended that the imported <code>.fnt</code> and <code>.png</code> files be stored in separate directories and not mixed with other assets.</p></blockquote><h2 id="using-font-assets" tabindex="-1">Using font assets <a class="header-anchor" href="#using-font-assets" aria-label="Permalink to &quot;Using font assets&quot;">​</a></h2><p>The font asset needs to be rendered through the <code>Label</code> component. Here is how to create a <code>Node</code> with a <code>Label</code> component in the scene.</p><h3 id="creating-a-label-font-node-using-the-menu" tabindex="-1">Creating a Label (Font) Node Using the Menu <a class="header-anchor" href="#creating-a-label-font-node-using-the-menu" aria-label="Permalink to &quot;Creating a Label (Font) Node Using the Menu&quot;">​</a></h3><p>Click on the <strong>Create Node</strong> button in the upper left corner of the <strong>Hierarchy</strong> panel and select <code>Create Render Node --&gt; Label (Text)</code>, and a component with <code>Label</code> will be created in the <code>Scene</code> node.</p><p><img src="'+a+'" alt="from hierarchy"></p><p>You can also complete the creation through <code>Node --&gt; Create Render Node --&gt; Label (Text)</code> of the main menu, the effect is the same as the above method.</p><p><img src="'+r+'" alt="from main menu"></p><h3 id="associated-font-assets" tabindex="-1">Associated Font Assets <a class="header-anchor" href="#associated-font-assets" aria-label="Permalink to &quot;Associated Font Assets&quot;">​</a></h3><p>The font components created using the above method use the <strong>system font</strong> as the associated asset, by default. If you want to use a <strong>TTF</strong> or <strong>bitmap fonts</strong> in the project, you can drag your font assets to the created <code>Label</code> component.</p><p><img src="'+i+'" alt="assign font file"></p><p>Currently, the font used in a scene will be immediately rendered using the font asset specified. You can also freely switch the <code>Font</code> property of the same <code>Label</code> component to use <strong>TTF</strong> or <strong>bitmap fonts</strong> according to the needs of the project. When switching font files, other properties of the <code>Label</code> component are not affected.</p><p>If you want to restore the use of <strong>system fonts</strong>, you can click the property check box of <strong>Use System Font</strong> to clear the font file specified in the <strong>Font</strong> property.</p><h3 id="dragging-and-dropping-to-create-a-label-node" tabindex="-1">Dragging and dropping to create a Label node <a class="header-anchor" href="#dragging-and-dropping-to-create-a-label-node" aria-label="Permalink to &quot;Dragging and dropping to create a Label node&quot;">​</a></h3><p>Another quick way to create font nodes using specified assets is to directly <strong>drag and drop</strong> font files, either <strong>TTF</strong> or <strong>bitmap fonts</strong>, from the <strong>Assets</strong> panel into the <strong>Hierarchy</strong> panel. The only difference from the menu created above is that text nodes created using drag and drop will automatically use the dragged font asset to set the <code>Font</code> property of the <strong>Label</strong> component.</p>',28),h=[c];function l(p,g,f,m,u,b){return o(),t("div",null,h)}const T=e(d,[["render",l]]);export{_ as __pageData,T as default};