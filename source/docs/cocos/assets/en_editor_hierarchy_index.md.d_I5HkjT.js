import{_ as e,c as t,o,a4 as n}from"./chunks/framework.uQk9_EO2.js";const r="/docs/cocos/assets/thumb.B3oskedV.gif",s="/docs/cocos/assets/create.DCKGvktu.png",a="/docs/cocos/assets/node-name.DTA7xAzJ.png",i="/docs/cocos/assets/search-type.D4Onc-gm.png",l="/docs/cocos/assets/search.A3CXp8gU.png",d="/docs/cocos/assets/drop.BFFC2OCZ.png",h="/docs/cocos/assets/drop1.DdzPxh7z.png",c="/docs/cocos/assets/drop2.Bs6JFBX6.png",g="/docs/cocos/assets/rename.BS3KSAf3.png",P=JSON.parse('{"title":"Hierarchy Panel","description":"","frontmatter":{},"headers":[],"relativePath":"en/editor/hierarchy/index.md","filePath":"en/editor/hierarchy/index.md","lastUpdated":1712305443000}'),p={name:"en/editor/hierarchy/index.md"},u=n('<h1 id="hierarchy-panel" tabindex="-1">Hierarchy Panel <a class="header-anchor" href="#hierarchy-panel" aria-label="Permalink to &quot;Hierarchy Panel&quot;">​</a></h1><p>The <strong>Hierarchy</strong> panel consists of two main sections, the <strong>Toolbar</strong> and the <strong>Node List</strong>, which are used to show the relationships between the nodes that are editable in the current scene. There are still some private nodes in the scene that are not visible and will not be displayed here.</p><p>You can single-select, multi-select, create, copy, move, delete and rename nodes. Any node can create a child node, whose coordinates are relative to the parent node and follow it.</p><p><img src="'+r+'" alt="Panel Overview"></p><ul><li>When a node is selected, it is highlighted on a blue background and its detailed properties are displayed in the <strong>Inspector</strong> panel. Click on the blank area of the panel to <strong>unselect</strong> it.</li><li>Functions in the <strong>Toolbar</strong> include: <strong>New Node(+)</strong>, <strong>Search Type</strong>, <strong>Search Box</strong>, and <strong>All Collapse</strong>.</li><li>The <strong>Node list</strong> mainly reflects the hierarchical relationship of nodes, the root node is <strong>Scene</strong>. When editing the Prefab file, its own node is used as the root node. Add or delete nodes is done here with the right-click menu or a drag-and-drop operation.</li><li>The panel supports the following keyboard shortcuts: <ul><li><strong>Copy</strong>: Ctrl/Cmd + C</li><li><strong>Paste</strong>: Ctrl/Cmd + V</li><li><strong>Clone</strong>: Ctrl/Cmd + D, Ctrl + drag nodes</li><li><strong>Delete</strong>: Delete</li><li><strong>Select up and down</strong>: Up and Down arrows</li><li><strong>Collapse nodes</strong>: Left arrow</li><li><strong>Expand nodes</strong>: Right arrow</li><li><strong>Multi-select</strong>: Ctrl or Cmd + click</li><li><strong>Multi-select Continuously</strong>: Shift + click</li><li><strong>Rename</strong>: Enter/F2</li><li><strong>Cancel input</strong>: Esc</li></ul></li></ul><h2 id="new-node" tabindex="-1">New Node <a class="header-anchor" href="#new-node" aria-label="Permalink to &quot;New Node&quot;">​</a></h2><p>Click the <strong>New Node (+)</strong> button in the upper left corner of the panel or right-click directly in the panel to create a node.</p><p><img src="'+s+'" alt="create-node"></p><p>When creating a node, an <strong>Input box</strong> will appear asking for the name of the node, which is allowed to be empty and will be named by the default node name if it is empty.</p><blockquote><p>The menus are a little different when you create a project through the Project(2D) template in the Cocos Dashboard.</p><ul><li>Only 2D objects can be created.</li><li>All 3D objects, terrain, particle systems and lights are invalid.</li></ul></blockquote><p><img src="'+a+'" alt="node-name"></p><ul><li>If there isn&#39;t a node selected in the tree list, the new node will be created under the current root node by default (<code>Scene</code>).</li><li>If there are multiple nodes selected, the new node will be created under the first selected node.</li></ul><h3 id="ui-nodes" tabindex="-1">UI nodes <a class="header-anchor" href="#ui-nodes" aria-label="Permalink to &quot;UI nodes&quot;">​</a></h3><p>For a UI node to display properly, any of its parent nodes must have at least one <strong>UITransform</strong> component. When creating a UI node, if it does not meet the rules, a <strong>Canvas</strong> node will be automatically created as the root of the UI node, as described in the <a href="./../../2d-object/ui-system/">UI Structure Description</a> documentation.</p><h3 id="prefab-nodes" tabindex="-1">Prefab nodes <a class="header-anchor" href="#prefab-nodes" aria-label="Permalink to &quot;Prefab nodes&quot;">​</a></h3><p>For a Prefab node, drag a <strong>Prefab</strong> asset from the <strong>Assets</strong> panel directly into the <strong>Hierarchy</strong> panel to generate a Prefab node. Also, dragging a <strong>Prefab</strong> node from the <strong>Hierarchy</strong> panel into the <strong>Assets</strong> panel to generate a Prefab asset.</p><h2 id="search-nodes" tabindex="-1">Search Nodes <a class="header-anchor" href="#search-nodes" aria-label="Permalink to &quot;Search Nodes&quot;">​</a></h2><p>Search types include: <strong>Search Name or UUID</strong>, <strong>Search UUID</strong>, <strong>Search Path</strong>, <strong>Search Component Name</strong>, <strong>Search Asset UUID</strong>, and <strong>Only Nodes With Missing Asset</strong>.</p><p><img src="'+i+'" alt="search-type"></p><p><strong>Search Component Name</strong> will search out all nodes in the node list containing the specified component, which can be viewed in the <strong>Inspector</strong> panel, such as <strong>MeshRenderer</strong>.</p><p>The <strong>Search box</strong> will update the search results instantly based on the input content. When a node is selected in the search results and the search is cleared, the selected node will still be located in the asset list.</p><p><img src="'+l+'" alt="search"></p><h2 id="change-the-display-order-of-nodes" tabindex="-1">Change the display order of nodes <a class="header-anchor" href="#change-the-display-order-of-nodes" aria-label="Permalink to &quot;Change the display order of nodes&quot;">​</a></h2><p>The order of nodes in the list can be changed by dragging them up and down. Moving nodes are divided into <strong>moved nodes</strong> and <strong>target placement nodes</strong>.</p><ul><li><p>Drag the <strong>moved node</strong> on top of the <strong>target placement node</strong>, both are <strong>level</strong>.</p><p>As shown below, select the Cube node and drag it above the Sphere node. The Sphere node will be highlighted in yellow and have a blue line above it indicating where the Cube node will be inserted.</p><p><img src="'+d+'" alt="drop"></p></li><li><p>Drag the <strong>moved node</strong> onto the <strong>target placement node</strong>, and the <strong>moved node</strong> will be at the end as a child of the <strong>target placement node</strong>.</p><p>In the following figure, select the Cube node and drag it to the Sphere node. The Sphere node will be highlighted in yellow on a light blue background, indicating that the Cube node will become a child of the Sphere.</p><p><img src="'+h+'" alt="drop"></p></li><li><p>Drag the <strong>moved node</strong> below the <strong>target placement node</strong>, both are <strong>level</strong>.</p><p>As shown below, select the Sphere node and drag it below the Cube node. The Cube node will appear highlighted in yellow and have a blue line below it indicating where the Sphere node will be inserted.</p><p><img src="'+c+'" alt="drop"></p></li></ul><h2 id="rename-nodes" tabindex="-1">Rename Nodes <a class="header-anchor" href="#rename-nodes" aria-label="Permalink to &quot;Rename Nodes&quot;">​</a></h2><p>Select a node, then right click and select <strong>Rename</strong> to change the node name, or just use the shortcut keys <strong>Enter</strong> or <strong>F2</strong>. Click elsewhere in the panel or press the shortcut <strong>Esc</strong> to cancel the renaming.</p><p>Different nodes can have the same name.</p><p><img src="'+g+'" alt="rename"></p><h2 id="other-operations" tabindex="-1">Other Operations <a class="header-anchor" href="#other-operations" aria-label="Permalink to &quot;Other Operations&quot;">​</a></h2><p>The menu that pops up when right-clicking on a node also includes the following actions.</p><ul><li><p><strong>Copy/Paste</strong>: Copy the node to the clipboard, then you can paste it to another location, or open another scene to paste the node that was just copied.</p></li><li><p><strong>Duplicate</strong>: Generate a copy of the node that is exactly the same as the selected node, with the generated node and the selected node in the same hierarchy.</p></li><li><p><strong>Select All</strong>: Select all nodes in the same hierarchy.</p></li><li><p><strong>Copy and print UUID/PATH</strong>: In complex scenarios, we sometimes need to get the UUID or full hierarchy path of a node in order to access it when the script is running. Click this option to see the UUID of the currently selected node and the node&#39;s hierarchical path in the <strong>Console</strong> panel.</p></li><li><p><strong>Lock Node</strong>: Mouse over the node and there will be a lock button on the left side, the node cannot be selected in the <strong>Scene</strong> panel once it is locked.</p><p>Starting from v3.1.1, batch locking of nodes and their children is supported. Select any node, hold down the <kbd>Alt</kbd> and click the lock button, and the node and its children will all be locked.</p></li></ul>',32),m=[u];function b(f,w,y,_,C,k){return o(),t("div",null,m)}const v=e(p,[["render",b]]);export{P as __pageData,v as default};