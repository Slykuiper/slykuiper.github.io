---
layout: post
title:  White Katana - Sorcerer
exclude: true
image: /assets/images/work/musicvideos/white-katana-sorcerer/sorcerer-1.jpg
tags:
- motion graphics
- music video

---
[White Katana](https://soundcloud.com/whitekatana)'s work is celestial, here's my visual interpretation of his track "[SORCERER](https://soundcloud.com/whitekatana/sorcerer)". He's got this distressed, otherworldly theme across all of his work that I'm attached to. I tried to capture a bit of that in this video.

<div class="vid"><iframe width="640" height="360" src="https://www.youtube-nocookie.com/embed/_s-DNQRer-A?controls=1&amp;showinfo=0" frameborder="0" allowfullscreen></iframe></div>

---

### Breakdown
<figure class="third">
	<a href="/assets/images/work/musicvideos/white-katana-sorcerer/mars-1.jpg"><img src="/assets/images/work/musicvideos/white-katana-sorcerer/mars-1.jpg"></a>
	<a href="/assets/images/work/musicvideos/white-katana-sorcerer/side-by-side-3.jpg"><img src="/assets/images/work/musicvideos/white-katana-sorcerer/side-by-side-3.jpg"></a>
	<a href="/assets/images/work/musicvideos/white-katana-sorcerer/venus-cold.jpg"><img src="/assets/images/work/musicvideos/white-katana-sorcerer/venus-cold.jpg"></a>
</figure>

This project was my excuse to dive deeper into VideoCopilot's [Orb](https://www.videocopilot.net/orb/). I touched on it briefly in my last video but wasn't happy with the results given how powerful the results can be with a little time invested. The most important factor I've found for making great planets are the maps. Textures were sourced from [Nasa's Space Images](https://www.jpl.nasa.gov/spaceimages/) page as well as [Solar System Scope](https://www.solarsystemscope.com/textures/). Diffuse textures play a small role in setting up a nice scene, normal and height maps are required to bring out a lot of detail. I generated normal and height maps from the diffuse map using an incredible little program called [Materialize](http://boundingboxsoftware.com/materialize/).

<figure>
	<a href="/assets/images/work/musicvideos/white-katana-sorcerer/mercury-prepass-1.jpg"><img src="/assets/images/work/musicvideos/white-katana-sorcerer/mercury-prepass-1.jpg"></a>
	<figcaption>Laser Targeting System</figcaption>
</figure>

<figure class="sm-right">
	<a href="/assets/images/work/musicvideos/white-katana-sorcerer/vfx-moon.jpg"><img src="/assets/images/work/musicvideos/white-katana-sorcerer/vfx-moon.jpg"></a>
</figure>

A lot of the scenes are straightforward, but a few are interesting enough to break down here. For the scene at the start where the moon turns dark before the drop, I animated an 8K solid with a ton of **Advanced Lightning** effects stacked to create a corrupted look. It uses the original moon's illumination map as a matte to appear only at certain values on the texture to give it an illusion of depth. 

<figure class="sm-left">
	<a href="/assets/images/work/musicvideos/white-katana-sorcerer/vfx-moon2.jpg"><img src="/assets/images/work/musicvideos/white-katana-sorcerer/vfx-moon2.jpg"></a>
</figure>

I use this technique again at 0:40 in combination with VideoCopilot's Saber to set the moon on fire. A scrolling Fractal Noise layer was used as a matte for the illumination layer to incorporate some flowing movement on the planet's surface.

<figure class="half">
	<a href="/assets/images/work/musicvideos/white-katana-sorcerer/moon-dark.jpg"><img src="/assets/images/work/musicvideos/white-katana-sorcerer/moon-dark.jpg"></a>
	<a href="/assets/images/work/musicvideos/white-katana-sorcerer/moon-dark-2.jpg"><img src="/assets/images/work/musicvideos/white-katana-sorcerer/moon-dark-2.jpg"></a>
	<figcaption>Advanced Lightning as Orb's Illumination Map.</figcaption>
</figure>

<figure>
	<a href="/assets/images/work/musicvideos/white-katana-sorcerer/venus-cold-2.jpg"><img src="/assets/images/work/musicvideos/white-katana-sorcerer/venus-cold-2.jpg"></a>
	<figcaption>0:53 - 0:59</figcaption>
</figure>

<figure class="sm-right">
	<a href="/assets/images/work/musicvideos/white-katana-sorcerer/venus_cold_unwrap_2.gif"><img src="/assets/images/work/musicvideos/white-katana-sorcerer/venus_cold_unwrap_2.gif"></a>
</figure>

The two main effects in the front-facing shot come out of Trapcode Particular and Fractal Noise. Particular is used for the particles leaving the planet and coming towards the camera. For the lines traversing along the planet's surface towards the center, it's an Illumination Map built out of a stretched Fractal Noise layer with Turbulence Displace to give an uneven look.

<figure class="sm-left">
	<a href="/assets/images/work/musicvideos/white-katana-sorcerer/venus_cold_wrap_2.gif"><img src="/assets/images/work/musicvideos/white-katana-sorcerer/venus_cold_wrap_2.gif"></a>
</figure>
Polar Coordinates was used to turn the vertical composition spherical. I came across an invaluable project file from Andrew Kramer for [seamlessly mapping equirectangular compositions](https://www.videocopilot.net/blog/2014/04/seamless-spherical-maps/). Without this, large vfx comps look warped and distorted when mapped on a sphere.

<figure>
	<a href="/assets/images/work/musicvideos/white-katana-sorcerer/venus-cold-3.jpg"><img src="/assets/images/work/musicvideos/white-katana-sorcerer/venus-cold-3.jpg"></a>
	<figcaption>0:59 - 1:06</figcaption>
</figure>

<figure class="half">
	<a href="/assets/images/work/musicvideos/white-katana-sorcerer/venus-cold-beam-solo.jpg"><img src="/assets/images/work/musicvideos/white-katana-sorcerer/venus-cold-beam-solo.jpg"></a>
	<a href="/assets/images/work/musicvideos/white-katana-sorcerer/venus-cold-beam-breakdown.jpg"><img src="/assets/images/work/musicvideos/white-katana-sorcerer/venus-cold-beam-breakdown.jpg"></a>
	<figcaption>Energy Beam</figcaption>
</figure>

This one is pretty straightforward, the beam is just a stretched Fractal Noise comp wrapped with CC Cylinder and some Bulge near the planet's surface. Glow and Shine are ysed to brighten the beam. The tiny particles coming off of the beam are Particular.

<figure class="half">
	<a href="/assets/images/work/musicvideos/white-katana-sorcerer/mercury-1.jpg"><img src="/assets/images/work/musicvideos/white-katana-sorcerer/mercury-1.jpg"></a>
	<a href="/assets/images/work/musicvideos/white-katana-sorcerer/mercury-2.jpg"><img src="/assets/images/work/musicvideos/white-katana-sorcerer/mercury-2.jpg"></a>
</figure>