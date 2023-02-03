---
layout: post
title:  White Katana - Sorcerer
image: /assets/images/work/musicvideos/white-katana-sorcerer/jup.jpg
tags:
- motion graphics
- music video

sorcerergrid:
  - var1: /assets/images/work/musicvideos/white-katana-sorcerer/planets/1.jpg
  - var1: /assets/images/work/musicvideos/white-katana-sorcerer/planets/2.jpg
  - var1: /assets/images/work/musicvideos/white-katana-sorcerer/planets/3.jpg
  - var1: /assets/images/work/musicvideos/white-katana-sorcerer/planets/4.jpg
  - var1: /assets/images/work/musicvideos/white-katana-sorcerer/planets/5.jpg
  - var1: /assets/images/work/musicvideos/white-katana-sorcerer/planets/6.jpg
  - var1: /assets/images/work/musicvideos/white-katana-sorcerer/planets/7.jpg
  - var1: /assets/images/work/musicvideos/white-katana-sorcerer/planets/8.jpg
  - var1: /assets/images/work/musicvideos/white-katana-sorcerer/planets/9.jpg
  - var1: /assets/images/work/musicvideos/white-katana-sorcerer/planets/10.jpg
  - var1: /assets/images/work/musicvideos/white-katana-sorcerer/planets/11.jpg
  - var1: /assets/images/work/musicvideos/white-katana-sorcerer/planets/12.jpg
  - var1: /assets/images/work/musicvideos/white-katana-sorcerer/planets/13.jpg
  - var1: /assets/images/work/musicvideos/white-katana-sorcerer/planets/14.jpg
  - var1: /assets/images/work/musicvideos/white-katana-sorcerer/planets/15.jpg
  - var1: /assets/images/work/musicvideos/white-katana-sorcerer/planets/16.jpg
  - var1: /assets/images/work/musicvideos/white-katana-sorcerer/planets/17.jpg
  - var1: /assets/images/work/musicvideos/white-katana-sorcerer/planets/18.jpg
  - var1: /assets/images/work/musicvideos/white-katana-sorcerer/planets/19.jpg
  - var1: /assets/images/work/musicvideos/white-katana-sorcerer/planets/20.jpg
  - var1: /assets/images/work/musicvideos/white-katana-sorcerer/planets/21.jpg
  - var1: /assets/images/work/musicvideos/white-katana-sorcerer/planets/22.jpg

---
[White Katana](https://soundcloud.com/whitekatana)'s work is celestial, here's my visual interpretation of his track "[SORCERER](https://soundcloud.com/whitekatana/sorcerer)". He's got this distressed, otherworldly theme across all of his work that I'm attached to, I tried to capture a bit of that in this video.

<div class="vid"><iframe width="640" height="360" src="https://www.youtube-nocookie.com/embed/_s-DNQRer-A?controls=1&amp;showinfo=0" frameborder="0" allowfullscreen></iframe></div>

---

### Breakdown
<div class="gallery-box">
  <div class="gallery">
    <img src="/assets/images/work/musicvideos/white-katana-sorcerer/mars-1.jpg">
    <img src="/assets/images/work/musicvideos/white-katana-sorcerer/side-by-side-3.jpg">
    <img src="/assets/images/work/musicvideos/white-katana-sorcerer/venus-cold.jpg">
  </div>
</div>

This project was my excuse to dive deeper into VideoCopilot's [Orb](https://www.videocopilot.net/orb/). I touched on it briefly in my last video but wasn't happy with the results given how powerful the results can be with a little time invested. The most important factor I've found for making great planets are the maps. Textures were sourced from [Nasa's Space Images](https://www.jpl.nasa.gov/spaceimages/) page as well as [Solar System Scope](https://www.solarsystemscope.com/textures/). Diffuse textures play a small role in setting up a nice scene, normal and height maps are required to bring out a lot of detail. I generated normal and height maps from the diffuse map using an incredible little program called [Materialize](http://boundingboxsoftware.com/materialize/).

<div class="gallery-box">
  <div class="gallery">
    <img src="/assets/images/work/musicvideos/white-katana-sorcerer/mercury-prepass-1.jpg">
  </div>
  <em>Laser Targeting System</em>
</div>

<div class="gallery-box">
  <div class="gallery">
    <img src="/assets/images/work/musicvideos/white-katana-sorcerer/vfx-moon.jpg">
  </div>
</div>

A lot of the scenes are straightforward, but a few are interesting enough to break down here. For the scene at the start where the moon turns dark before the drop, I animated an 8K solid with a ton of **Advanced Lightning** effects stacked to create a corrupted look. It uses the original moon's illumination map as a matte to appear only at certain values on the texture to give it an illusion of depth. 

<div class="gallery-box">
  <div class="gallery">
    <img src="/assets/images/work/musicvideos/white-katana-sorcerer/vfx-moon2.jpg">
  </div>
</div>


I use this technique again at 0:40 in combination with VideoCopilot's Saber to set the moon on fire. A scrolling Fractal Noise layer was used as a matte for the illumination layer to incorporate some flowing movement on the planet's surface.

<div class="gallery-box">
  <div class="gallery">
    <img src="/assets/images/work/musicvideos/white-katana-sorcerer/moon-dark.jpg">
    <img src="/assets/images/work/musicvideos/white-katana-sorcerer/moon-dark-2.jpg">
  </div>
  <em>Advanced Lightning as Orb's Illumination Map.</em>
</div>

<div class="gallery-box">
  <div class="gallery">
    <img src="/assets/images/work/musicvideos/white-katana-sorcerer/venus-cold-2.jpg">
  </div>
  <em>0:53 - 0:59</em>
</div>


<div class="gallery-box">
  <div class="gallery">
    <img src="/assets/images/work/musicvideos/white-katana-sorcerer/venus_cold_unwrap_2.gif">
  </div>
</div>

The two main effects in the front-facing shot come out of Trapcode Particular and Fractal Noise. Particular is used for the particles leaving the planet and coming towards the camera. For the lines traversing along the planet's surface towards the center, it's an Illumination Map built out of a stretched Fractal Noise layer with Turbulence Displace to give an uneven look.

<div class="gallery-box">
  <div class="gallery">
    <img src="/assets/images/work/musicvideos/white-katana-sorcerer/venus_cold_wrap_2.gif">
  </div>
</div>
Polar Coordinates was used to turn the vertical composition spherical. I came across an invaluable project file from Andrew Kramer for [seamlessly mapping equirectangular compositions](https://www.videocopilot.net/blog/2014/04/seamless-spherical-maps/). Without this, large vfx comps look warped and distorted when mapped on a sphere.

<div class="gallery-box">
  <div class="gallery">
    <img src="/assets/images/work/musicvideos/white-katana-sorcerer/venus-cold-3.jpg">
  </div>
  <em>0:59 - 1:06</em>
</div>

<div class="gallery-box">
  <div class="gallery">
    <img src="/assets/images/work/musicvideos/white-katana-sorcerer/venus-cold-beam-solo.jpg">
    <img src="/assets/images/work/musicvideos/white-katana-sorcerer/venus-cold-beam-breakdown.jpg">
  </div>
  <em>Energy Beam</em>
</div>

This one is pretty straightforward, the beam is just a stretched Fractal Noise comp wrapped with CC Cylinder and some Bulge near the planet's surface. Glow and Shine are used to brighten the beam. The tiny particles coming off of the beam are Particular.

<div class="gallery-box">
  <div class="gallery">
    <img src="/assets/images/work/musicvideos/white-katana-sorcerer/mercury-1.jpg">
  </div>
  <em>1:06 - 1:13</em>
</div>

This shot and the next one were the last shots I completed for this video. I came up with these on the spot [during a livestream](https://youtu.be/WgSTbiePVzM) if you're curious to see my process. The idea for this was a laser targeting the planet, similar to a [laser engraving machine aligning to a surface before engraving](https://www.youtube.com/watch?v=v0LI8q4hSVQ).

<div class="gallery-box">
  <div class="gallery">
    <img src="/assets/images/work/musicvideos/white-katana-sorcerer/mercury-2.jpg">
  </div>
  <em>1:13 - 1:19</em>
</div>

I want to make a more in-depth video tutorial/breakdown for this effect because I haven't seen a similar technique like this before. It's a stack of very simple effects that made a result that can have a wide variety of outcomes. 

<div class="gallery-box">
  <div class="gallery">
    <img src="/assets/images/work/musicvideos/white-katana-sorcerer/emitter-line-zoomout.jpg">
    <img src="/assets/images/work/musicvideos/white-katana-sorcerer/emitter-line-zoomin.jpg">
  </div>
  <em>Energy Pulse without Polar Coordinates.</em>
</div>

<div class="gallery-box">
  <div class="gallery">
    <img src="/assets/images/work/musicvideos/white-katana-sorcerer/emitter-line-shapelayer.jpg">
  </div>
</div>

It's just a shape layer and an adjustment layer. The shape layer is horizontal bar with a Gradient Overlay layer style to fit an even gradient across it's height. The bar starts out small at the top of the composition and moves down while increasing it's height. The magic comes out of the effects stacked on the adjustment layer and how it's animated.

<div class="gallery-box">
  <div class="gallery">
    <img src="/assets/images/work/musicvideos/white-katana-sorcerer/emitter-line-shapelayer-displace.jpg">
  </div>
</div>

The adjustment layer is masked to only cover half of the shape layer. As the shape layer moves and expands, the mask's feather increases to cover it's height. The adjustment layer is stacked with bunch of Roughen Edges, a Directional Blur, and a Displacement Map. The Roughen Edges [stretch the shape layer taller and create random variation in the peaks and valleys](/assets/images/work/musicvideos/white-katana-sorcerer/emitter-line-shapelayer-displace-roughenedges.jpg). There's diminishing returns with stacking any more Roughen Edges, so the Directional Blur stretches the striations longer and fades them out smoothly. The Displacement Map plays the key role in changing how the visuals of the effect look, and there's several ways to design the Fractal Noise to tailor the visuals any way you want.

<div class="gallery-box">
  <div class="gallery">
    <img src="/assets/images/work/musicvideos/white-katana-sorcerer/emitter-line-shapelayer-displace-displacementmap.jpg">
  </div>
  <em>Polar Coordinates warps the vertical composition to an outward burst.</em>
</div>

<div class="gallery-box">
  <div class="gallery">
    <img src="/assets/images/work/musicvideos/white-katana-sorcerer/emitter-circle-zoomout.jpg">
    <img src="/assets/images/work/musicvideos/white-katana-sorcerer/emitter-circle-zoomin.jpg">
  </div>
  <em>Energy Pulse with Polar Coordinates.</em>
</div>

<section class="section-padding bg-black">
    <div class="postgrid">
        <div class="columns-wrapper">
            <div class="columns">
                {% for item in page.sorcerergrid %}
                <a href="{{ item.var1 }}" class="spacer">
                    <div class="postcolumn" style="background-image: url({{ item.var1 }})">
                        <div class="postcolumn__inner"><p></p></div>
                    </div>
                </a>
                {% endfor %}
            </div>
        </div>
    </div>
</section>

Those are the only shots I felt worth breaking down. This was a fun project, Orb is very powerful and it was a good excercise to explore spherical mapping and some new effect ideas. Support White Katana on [Soundcloud](https://soundcloud.com/whitekatana), [Bandcamp](https://whitekatana.bandcamp.com/), and [Spotify](https://open.spotify.com/artist/5OtyZM8MxtHrYqOPxetwji).