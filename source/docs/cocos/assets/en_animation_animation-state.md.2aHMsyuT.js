import{_ as t,c as e,o as a,a4 as i}from"./chunks/framework.uQk9_EO2.js";const n="/docs/cocos/assets/playback-control.DXf5B-Kk.svg",k=JSON.parse('{"title":"Animation State","description":"","frontmatter":{},"headers":[],"relativePath":"en/animation/animation-state.md","filePath":"en/animation/animation-state.md","lastUpdated":1712305443000}'),o={name:"en/animation/animation-state.md"},s=i(`<h1 id="animation-state" tabindex="-1">Animation State <a class="header-anchor" href="#animation-state" aria-label="Permalink to &quot;Animation State&quot;">​</a></h1><p>Animation clips only describe the animation data of a certain type of object, such as a character running, walking, jumping, etc., but are not bound to the specific object to be animated. Animation states are Animation Clips that are used to control the animation on a certain object, similar to a player. In addition to providing simple control functions that are also available for Animation components, they also provide more animation information and an animation control interface that allows control of animation playback such as speed control, setting loop mode, etc. An Animation Clip can be used by multiple animation states at the same time.</p><p>Animation states are managed by <a href="./__APIDOC__/en/class/AnimationState">Class <code>AnimationState</code></a>.</p><h2 id="setting-the-playback-speed" tabindex="-1">Setting the playback speed <a class="header-anchor" href="#setting-the-playback-speed" aria-label="Permalink to &quot;Setting the playback speed&quot;">​</a></h2><p>First get the animation state by <a href="./__APIDOC__/en/class/Animation?id=getState">getState()</a>:</p><div class="language-ts vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">ts</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// Get the Animation component</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">const</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> animationComponent</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> =</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> node.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">getComponent</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(Animation);</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// Get the animation clips on the Animation component</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">const</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> [ </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">idleClip</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">runClip</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> ] </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> animationComponent.clips;</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// Get the animation state of &#39;idleClip&#39;</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">const</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> idleState</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> =</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> animationComponent.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">getState</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(idleClip.name);</span></span></code></pre></div><p>Then set the speed of the animation to play at:</p><div class="language-ts vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">ts</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// Play the &#39;idleClip&#39; animation at two times the speed</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">animationComponent.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">getState</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;idle&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">).speed </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> 2.0</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">; </span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// the larger the speed value the faster it is, the smaller the value the slower it is</span></span></code></pre></div><p>The animation state also provides <code>play()</code>, <code>pause()</code>, <code>resume()</code>, <code>stop()</code> methods for playback control, please refer to the <strong>play state</strong> section below for more details.</p><h2 id="play-time" tabindex="-1">Play Time <a class="header-anchor" href="#play-time" aria-label="Permalink to &quot;Play Time&quot;">​</a></h2><p>The animation state records the <strong>cumulative play time</strong> of the animation. Initially, the accumulated play time is 0. As the animation plays naturally, the time will be accumulated. For example, when the animation loops, the cumulative play time will be <strong>animation period * 2</strong> just after the second loop.</p><p>The playback position of the animation at any given moment is called <strong>progress time</strong>, so the progress time is always in the range <code>[0, animation period]</code>.</p><ul><li>The <strong>cumulative play time</strong> is obtained from the <a href="./__APIDOC__/en/class/AnimationState?id=time">time</a> field of <code>AnimationState</code>, and can be set explicitly.</li><li>The <strong>progress time</strong> is obtained from the <a href="./__APIDOC__/en/class/AnimationState?id=current">current</a> field of <code>AnimationState</code>, and is <strong>read-only</strong>.</li></ul><p>The wrap mode and repeat count of the animation determines the progress time of the animation when it reaches a certain time, whether the <strong>cumulative play time</strong> is increased by time or changed by direct setting, the <strong>progress time</strong> will be changed accordingly.</p><h2 id="wrap-mode-and-repeat-count" tabindex="-1">Wrap Mode and Repeat Count <a class="header-anchor" href="#wrap-mode-and-repeat-count" aria-label="Permalink to &quot;Wrap Mode and Repeat Count&quot;">​</a></h2><p>Animation can be played to the end and stop, or it can be looped all the time, or it can be played to the end and then looped from the end to the beginning, these are collectively called wrap modes and are represented by the enumeration <a href="./__APIDOC__/en/class/AnimationState?id=current"><code>AnimationClip.WrapMode</code></a>, the following are included:</p><table><thead><tr><th style="text-align:left;">Wrap Mode</th><th style="text-align:left;">Description</th></tr></thead><tbody><tr><td style="text-align:left;"><code>AnimationClip.WrapMode.Normal</code></td><td style="text-align:left;">Play from the beginning to the end and then stop.</td></tr><tr><td style="text-align:left;"><code>AnimationClip.WrapMode.Loop</code></td><td style="text-align:left;">Play from the beginning to the end continuously.</td></tr><tr><td style="text-align:left;"><code>AnimationClip.WrapMode.PingPong</code></td><td style="text-align:left;">Play from the beginning to the end, then reverse from the end to the beginning, and so on.</td></tr></tbody></table><p>In addition, there are <strong>reverse</strong> looping modes for each of the looping modes in the table above:</p><table><thead><tr><th style="text-align:left;">Wrap Mode</th><th style="text-align:left;">Description</th></tr></thead><tbody><tr><td style="text-align:left;"><code>AnimationClip.WrapMode.Reverse</code></td><td style="text-align:left;">Play from the end to the beginning and then stop.</td></tr><tr><td style="text-align:left;"><code>AnimationClip.WrapMode.LoopReverse</code></td><td style="text-align:left;">Play from the end to the beginning continuously.</td></tr><tr><td style="text-align:left;"><code>AnimationClip.WrapMode.PingPongReverse</code></td><td style="text-align:left;">Play from the end to the beginning, then reverse from the beginning to the end, and so on.</td></tr></tbody></table><p>The initial wrap mode of the animation state will be read from the animation clip. When you need to change the wrap mode of the animation state, simply set the <code>wrapMode</code> field of the animation state.</p><blockquote><p><strong>Note</strong>: setting the wrap mode will reset the <strong>cumulative play time</strong> of the animation state.</p></blockquote><p>Except <code>AnimationClip.WrapMode.Normal</code> and its counterpart <code>AnimationClip.WrapMode.Reverse</code> (which can be interpreted as a single loop), all other wrap modes perform an infinite loop. The infinite loop needs to be used in conjunction with <code>repeatCount</code> of <code>AnimationState</code> to achieve the effect, and the number of loops can be set and retrieved via the <code>repeatCount</code> field.</p><p>When the animation wrap mode is:</p><ul><li>Single loop mode: <code>repeatCount</code> will be set to <strong>1</strong>.</li><li>Infinite loop mode: <code>repeatCount</code> will be set to <code>Number.Infinity</code>, i.e. infinite loop.</li></ul><blockquote><p><strong>Note</strong>: setting the repeat count should be done after setting the wrap mode, because resetting the wrap mode will reset the repeat count.</p></blockquote><h2 id="playback-control" tabindex="-1">Playback Control <a class="header-anchor" href="#playback-control" aria-label="Permalink to &quot;Playback Control&quot;">​</a></h2><p>The animation state provides the following methods to control the play, pause, resume and stop of the animation:</p><table><thead><tr><th style="text-align:left;">Method</th><th style="text-align:left;">Description</th></tr></thead><tbody><tr><td style="text-align:left;"><code>play()</code></td><td style="text-align:left;">Reset the playback time to 0 and start the animation.</td></tr><tr><td style="text-align:left;"><code>pause()</code></td><td style="text-align:left;">Pause the animation.</td></tr><tr><td style="text-align:left;"><code>resume()</code></td><td style="text-align:left;">Resume the animation from the current time.</td></tr><tr><td style="text-align:left;"><code>stop()</code></td><td style="text-align:left;">Stop the animation.</td></tr></tbody></table><p>The playing status of the animation can be queried by the following fields:</p><table><thead><tr><th style="text-align:left;">Field (read-only)</th><th style="text-align:left;">Description</th></tr></thead><tbody><tr><td style="text-align:left;"><code>isPlaying</code></td><td style="text-align:left;">If or not the animation is in playing state.</td></tr><tr><td style="text-align:left;"><code>isPaused</code></td><td style="text-align:left;">If or not the animation is paused.</td></tr><tr><td style="text-align:left;"><code>isMotionless</code></td><td style="text-align:left;">If or not the animation is paused or has been stopped.</td></tr></tbody></table><p>The relationship between the playback control and the playback state is shown in the following figure:</p><p><img src="`+n+'" alt="Playback control"></p><p>The animation state allows getting information about all the animations in order to use this information to determine what needs to be done. For more interfaces, please refer to <a href="./__APIDOC__/en/class/AnimationState">Class <code>AnimationState</code></a>.</p>',33),l=[s];function d(r,h,p,c,m,g){return a(),e("div",null,l)}const f=t(o,[["render",d]]);export{k as __pageData,f as default};