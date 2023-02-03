---
layout: post
title:  Marc Statz - Catharsis
image: /assets/images/work/musicvideos/marcstatz-darktrapbeat/subwayfar.jpg
tags:
- motion-graphics
- music-video

---

This music video is a visualization of the second song [Marc Statz](https://www.marcstatz.com/), sent me. When I first [listened](https://soundcloud.com/marcstatz/catharsis) to it, I immediately imagined a dark subway scene and got to work building it. This project is a little more indepth than the previous music video and went through a few iterations, I'm happy with the mixed combination of realistic and cartoon visuals. I plan to further develop this visual style in future 3D projects.

<div class="vid" > <iframe width="640" height="360" src="https://www.youtube-nocookie.com/embed/XHJ1_UoQ7Ik?controls=1&amp;showinfo=0" frameborder="0" allowfullscreen></iframe></div>

The majority of the work for the visuals came out of C4D. After Effects was used to create audio visualizer on the windows as well as the audio sync of the glow on the windows with Trapcode Soundkeys. The scene was rendered with the Standard renderer, Sketch and Toon was used for the subway car and simple materials were used for the rest of the scene. Render time was about 4-8 seconds per frame with a total of 4583 frames.

---

### Scene setup

<div class="gallery-box">
  <div class="gallery">
    <img src="/assets/images/work/musicvideos/marcstatz-darktrapbeat/scene1.jpg">
	  <img src="/assets/images/work/musicvideos/marcstatz-darktrapbeat/scene2.jpg">
  </div>
  <em>Viewport View</em>
</div>


The scene is pretty basic, consisting of a long subway platform and a ton of pillars. There's a few background details like scattered luggage, papers, and metal. The tiles pushing out of the ground was achieved by making a long plane with a PolyFX modifier. A Plain effector was used to raise the tiles out of the ground and rotate them, wrapped in a Cloth Surface to give it some thickness. The smoke was formed with an Emitter with three different sized low-poly spheres wrapped in a Metaball. Turbulence and Gravity were used to make it more dynamic and a Taper was added to make the geometry smaller where it spawns. The motion trails consist of three emitters (for the top, left, and right sides of the subway car) parented to a Tracer, which is a child of a Sweep Object along with a circle spline.  


<div class="gallery-box">
  <div class="gallery">
    <img src="/assets/images/work/musicvideos/marcstatz-darktrapbeat/tiles.png">
	<img src="/assets/images/work/musicvideos/marcstatz-darktrapbeat/smoke.png">
  </div>
</div>

The original scene was planned to have more camera shots than a single scene. I developed the interior of the subway car and wanted to have some shots inside as well as over the top shots of the subway car traveling through a tunnel. It turned out to be too ambitious for the timeframe I could allot for the project.

<div class="vid" > <iframe width="640" height="360" src="https://www.youtube-nocookie.com/embed/1VIKz97JffA?controls=1&amp;showinfo=0" frameborder="0" allowfullscreen></iframe></div>

<div class="gallery-box">
  <div class="gallery">
    <img src="/assets/images/work/musicvideos/marcstatz-darktrapbeat/initialscene1.jpg">
	<img src="/assets/images/work/musicvideos/marcstatz-darktrapbeat/initialscene2.jpg">
  </div>
</div>

<div class="gallery-box">
  <div class="gallery">
    <img src="/assets/images/work/musicvideos/marcstatz-darktrapbeat/initialscene3.jpg">
	<img src="/assets/images/work/musicvideos/marcstatz-darktrapbeat/initialscene4.jpg">
  </div>
</div>