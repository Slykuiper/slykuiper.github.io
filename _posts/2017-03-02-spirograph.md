---
layout: post
title:  Spirograph
image: /assets/images/work/spirograph/thumb.png
tags:
- motion-graphics
- free
- tutorial
---

I created a spirograph inside of After Effects, with some sliders for customizing the visuals. [Project File for download](https://www.dropbox.com/s/t1acebe25pygyve/Spirograph.aep?dl=0)

<div class="gallery-box">
  <div class="gallery">
    <img src="/assets/images/work/spirograph/spirograph-motion.gif">
  </div>
</div>

I saw [this tweet](https://twitter.com/shiffman/status/836623202591862784) on my timeline and wondered how I could recreate it in After Effects. I created three shapelayers - once for each circle - with the inner two having lines. The small, outer circle is the indicator and most important null for drawing the spirographs. The way I visualized the spirograph was by parenting a point light to the outer circle, and using the light as an emitter in Trapcode Particular. 

<div class="gallery-box">
  <div class="gallery">
    <img src="/assets/images/work/spirograph/controls.png">
  </div>
</div>

**pathVisibility** is a checkbox that toggles the visibility of the shapelayers.  
**numPoints** specifices the number of points or vertices you want the spirograph to have.  
**revPerSecond** indiciated the number of revolutions per second. Setting it to 1 would make the object do one complete rotation every second. Each of these values are keyframe-able but numPoints creates interesting results when keyframed.

<div class="gallery-box">
  <div class="gallery">
    <img src="/assets/images/work/spirograph/numpoints3.png">
    <img src="/assets/images/work/spirograph/numpoints6.png">
	<img src="/assets/images/work/spirograph/numpoints14.png">
  </div>
  <em>numPoints 3, 6, and 14 respectively.</em>
</div>

<div class="gallery-box">
  <div class="gallery">
    <img src="https://www.dropbox.com/s/aracahpyachl4z8/spirograph1.gif?raw=1">
    <img src="https://www.dropbox.com/s/11zpt9sg0nbsl9a/spirograph2.gif?raw=1">
	<img src="https://www.dropbox.com/s/y2ffsuxhktdpob6/spirograph3.gif?raw=1">
  </div>
  <em>Playing with settings in Trapcode Particular, I created some interesting visuals.</em>
</div>