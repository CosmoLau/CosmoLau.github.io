import{_ as e,c as t,o as a,a4 as o}from"./chunks/framework.uQk9_EO2.js";const r="/docs/cocos/assets/add-spatial-audio.DrX-Fv9H.png",f=JSON.parse('{"title":"XR Spatial Audio","description":"","frontmatter":{},"headers":[],"relativePath":"en/xr/architecture/xr-spatial-audio.md","filePath":"en/xr/architecture/xr-spatial-audio.md","lastUpdated":1712336288000}'),i={name:"en/xr/architecture/xr-spatial-audio.md"},d=o('<h1 id="xr-spatial-audio" tabindex="-1">XR Spatial Audio <a class="header-anchor" href="#xr-spatial-audio" aria-label="Permalink to &quot;XR Spatial Audio&quot;">​</a></h1><p>XR Spatial Audio is an important technology in the virtual reality field that can simulate audio environments from the real world, providing users with a more immersive auditory experience in virtual reality. <strong>Sound-Tracking</strong> technology based on head-mounted displays can simulate audio environments from the real world by tracking the user&#39;s head movements. When users move their heads in a virtual reality environment, the system can adjust the position and direction of the audio based on the user&#39;s head movements and position, creating a simulation of real-world audio environments.</p><h2 id="xr-spatial-audio-features" tabindex="-1">XR Spatial Audio Features <a class="header-anchor" href="#xr-spatial-audio-features" aria-label="Permalink to &quot;XR Spatial Audio Features&quot;">​</a></h2><table><thead><tr><th>Property</th><th>Description</th></tr></thead><tbody><tr><td>Clip</td><td>References the audio file to be played.</td></tr><tr><td>Loop</td><td>Determines if the audio should loop.</td></tr><tr><td>Play On Wake</td><td>Determines if the audio should play automatically when the project starts.</td></tr><tr><td>Volume</td><td>Sets the volume level of the audio.</td></tr><tr><td>Distance Rolloff Model</td><td>Determines the distance-dependent volume attenuation model.</td></tr></tbody></table><h2 id="using-xr-spatial-audio" tabindex="-1">Using XR Spatial Audio <a class="header-anchor" href="#using-xr-spatial-audio" aria-label="Permalink to &quot;Using XR Spatial Audio&quot;">​</a></h2><p>Select the node object to which you want to add audio, and add the component in the property manager <strong>XR -&gt; Extra -&gt; XRSpatialAudioSource</strong>.</p><p><img src="'+r+'" alt="xr-spatial-audio/add-spatial-audio"></p><h2 id="acknowledgments" tabindex="-1">Acknowledgments <a class="header-anchor" href="#acknowledgments" aria-label="Permalink to &quot;Acknowledgments&quot;">​</a></h2><p>The Spatial Audio feature references the GoogleVR library. Please refer to the <code>LICENSE_googlevr.txt</code> file in the licenses folder for the licensing details.</p><p>For Google API service terms that cover this SDK, please refer to <a href="https://developers.google.com/terms/" target="_blank" rel="noreferrer">https://developers.google.com/terms/</a>。</p><blockquote><p><strong>Note</strong>: The Spatial Audio feature requires an extension version &gt;= 1.2.0 and the Cocos Creator version &gt;= 3.7.3.</p></blockquote>',11),s=[d];function n(l,u,h,c,p,m){return a(),t("div",null,s)}const _=e(i,[["render",n]]);export{f as __pageData,_ as default};