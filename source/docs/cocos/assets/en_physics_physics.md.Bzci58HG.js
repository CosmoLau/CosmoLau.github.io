import{_ as e,c as s,o as t,a4 as i}from"./chunks/framework.uQk9_EO2.js";const o="/docs/cocos/assets/physics-system.DX5CnJ-M.jpg",a="/docs/cocos/assets/physics-world.Wd6q-4KI.jpg",n="/docs/cocos/assets/physics-pipeline.B7SYKZkE.png",r="/docs/cocos/assets/physics-element.1YxiU2tO.png",w=JSON.parse('{"title":"3D Physics System","description":"","frontmatter":{},"headers":[],"relativePath":"en/physics/physics.md","filePath":"en/physics/physics.md","lastUpdated":1712305443000}'),c={name:"en/physics/physics.md"},h=i('<h1 id="_3d-physics-system" tabindex="-1">3D Physics System <a class="header-anchor" href="#_3d-physics-system" aria-label="Permalink to &quot;3D Physics System&quot;">​</a></h1><h2 id="introduction" tabindex="-1">Introduction <a class="header-anchor" href="#introduction" aria-label="Permalink to &quot;Introduction&quot;">​</a></h2><p><img src="'+o+'" alt="physics-system"></p><p>The physics system is a crucial component of game engine, as it imbues the game world with the physical properties of the real world such as mass, gravity, and friction. This allows the game world to behave in a more realistic manner. The physics engine is responsible for simulating the motion and collision feedback of objects in the game world based on their physical properties. It is worth noting that the physics system is a complex system that interacts with not only game logic, but also the rendering system, animation system, and audio system. Typically, the game physics system only covers the basics of Newtonian mechanics, such as collision detection and rigid body motion. Other physical phenomena, such as fluid dynamics or soft body physics, require alternative approaches. Users can use the API provided by the physics engine to manipulate the physics system and achieve various physical effects in the game.</p><p>Cocos Creator supports the following physics engines.</p><ul><li><strong>Bullet</strong>: default physics engine, asm.js/wasm version of <a href="https://pybullet.org/wordpress/" target="_blank" rel="noreferrer">Bullet</a>. A physics engine with collision detection and physics simulation.</li><li><strong>builtin</strong>: built-in physics engine, lightweight engine for collision detection only.</li><li><strong>cannon.js</strong>: physics engine with collision detection and physics simulation.</li><li><strong>PhysX</strong>: Game physics engine developed by <a href="https://developer.nvidia.com/physx-sdk" target="_blank" rel="noreferrer">NVIDIA</a>. A physics engine with collision detection and physics simulation.</li></ul><p>Developers choose different physics engines according to their development needs for physics features or application scenarios, please refer to: <a href="./physics-engine">Physics Engines</a> for details.</p><blockquote><p><strong>Note</strong>: PhysX is not supported in earlyer versions. To use PhysX please make sure the engine is upgraded to the latest version.</p></blockquote><h2 id="physics-worlds" tabindex="-1">Physics Worlds <a class="header-anchor" href="#physics-worlds" aria-label="Permalink to &quot;Physics Worlds&quot;">​</a></h2><p>Each element in the physics world can be understood as a separate <strong>rigid body</strong>, which can be made physical in Cocos Creator 3.x by adding a <a href="./physics-collider">Collider</a> or <a href="./physics-rigidbody">RigidBody</a> to the game object. Gives physics elements their physical properties. The physics system will perform physics calculations for these elements, such as calculating whether the objects collide and what forces are applied to the objects. When the calculations are complete, the physics system will update the physics world to the scene world, simulating the physical behavior that is restored in the real world.</p><p>Scene world and physics world:</p><p><img src="'+a+'" alt="Scene World vs. Physics World"></p><blockquote><p><strong>Note</strong>: The &quot;rigid body&quot; here refers to an object in the physics world that remains unchanged in shape and size and whose relative positions of internal points remain unchanged while in motion or after being acted upon by a force.</p></blockquote><h3 id="physics-work-flow" tabindex="-1">Physics Work Flow <a class="header-anchor" href="#physics-work-flow" aria-label="Permalink to &quot;Physics Work Flow&quot;">​</a></h3><p>After all components are <code>lateUpdate</code>, the engine will synchronize the nodes holding physical properties (rigid body component, collider component) to the physics world and drive the physics engine to simulate them, and then synchronize the results calculated by the physics engine to each node of the scene after the simulation is completed. The overall process is shown in the following figure:</p><p><img src="'+n+'" alt="phy"></p><h2 id="add-physics-elements" tabindex="-1">Add Physics Elements <a class="header-anchor" href="#add-physics-elements" aria-label="Permalink to &quot;Add Physics Elements&quot;">​</a></h2><p><img src="'+r+'" alt="add-element"></p><p>Adding a physics element to the game world can be done in the following steps:</p><ol><li>Create a new node. Here create a new cube model <strong>Cube</strong>.</li><li>Add a collider component, here add a <a href="./physics-collider#BoxCollider">BoxCollider</a>. Click the <strong>Add Component</strong> button at the bottom of the <strong>Inspector</strong> panel, select <strong>BoxCollider</strong> in the <strong>Physics</strong> directory and adjust the parameters.</li><li>To give it a physical behavior, then add a <a href="./physics-rigidbody">RigidBody</a> component.</li></ol><p>This gives us a physics element with <strong>both collider and physics behavior</strong>.</p><h2 id="raycast-and-geometry-cast" tabindex="-1">Raycast and Geometry cast <a class="header-anchor" href="#raycast-and-geometry-cast" aria-label="Permalink to &quot;Raycast and Geometry cast&quot;">​</a></h2><p>When developing a game, we may need some type of physics casting, such as whether a bullet hits its target, or whether a piece of furniture can be placed in a certain location. The usual way to do this is to cast a ray or project some kind of geometry(including boxes, spheres, capsules, etc) and can be found in the following documentations.</p><ul><li><a href="./physics-raycast">Raycast Detection</a></li><li><a href="./physics-sweep">Geometry Cast Detection</a></li></ul>',24),l=[h];function d(p,y,m,g,u,f){return t(),s("div",null,l)}const _=e(c,[["render",d]]);export{w as __pageData,_ as default};