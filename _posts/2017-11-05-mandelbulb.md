---
layout: post
title:  "Mandelbulb"
image: /assets/images/work/mandelbulb/scarab1_800.jpg
grid:
  - grid-type: "After Effects"
    grid-items:
    - grid-name: "display"
      grid-link: "https://www.dropbox.com/s/cg0adocmejcschc/display_3200.png?raw=1"
      grid-img: "display_1600.png"
    - grid-name: "airway"
	  grid-link: "https://www.dropbox.com/s/tcgm9d5k84gq932/airway_2160.png?raw=1"
      grid-img: "airway_1080.png"
	- grid-name: "tristar"
      grid-link: "https://www.dropbox.com/s/6xgzbk31ktwuag6/tristar_2160.png?raw=1"
      grid-img: "tristar_1080.png"
	- grid-name: "target"
      grid-link: "https://www.dropbox.com/s/3gdizieadimhunj/target_2160.png?raw=1"
      grid-img: "target_1080.png"
	- grid-name: "spacemine 03"
      grid-link: "https://www.dropbox.com/s/2367z5jfmdipxui/spacemine3_2160.png?raw=1"
      grid-img: "spacemine3_1080.png"
	- grid-name: "spacemine 02"
      grid-link: "https://www.dropbox.com/s/7eucnop67ub5lf9/spacemine2_3000.png?raw=1"
      grid-img: "spacemine2_1000.png"
	- grid-name: "spacemine 01"
      grid-link: "https://www.dropbox.com/s/2wzklepxd6wvcnv/spacemine1_3000.png?raw=1"
      grid-img: "spacemine1_1000.png"
	- grid-name: "arbiter 03"
      grid-link: "https://www.dropbox.com/s/voia10kr00ijtyf/arbiter%203_2000.jpg?raw=1"
      grid-img: "arbiter3_800.jpg"
	- grid-name: "arbiter 02"
      grid-link: "https://www.dropbox.com/s/dupfvzqxhhr85x4/arbiter%202_2000.jpg?raw=1"
      grid-img: "arbiter2_800.jpg"
	- grid-name: "arbiter 01"
      grid-link: "https://www.dropbox.com/s/m7kunfm086qnkqk/arbiter%201_2000.jpg?raw=1"
      grid-img: "arbiter1_800.jpg"
	- grid-name: "royal 03"
      grid-link: "https://www.dropbox.com/s/des69478z0pnop7/royal3_2000.jpg?raw=1"
      grid-img: "royal3_800.jpg"
	- grid-name: "royal 02"
      grid-link: "https://www.dropbox.com/s/bxpqaem2rrgujhg/royal2_2000.jpg?raw=1"
      grid-img: "royal2_800.jpg"
	- grid-name: "royal 01"
      grid-link: "https://www.dropbox.com/s/0xl5lejvdtenhix/royal1_2000.jpg?raw=1"
      grid-img: "royal1_800.jpg"
	- grid-name: "scarab 03"
      grid-link: "https://www.dropbox.com/s/jz2v43bejzalabx/scarab3_2000.jpg?raw=1"
      grid-img: "scarab3_800.jpg"
	- grid-name: "scarab 02"
      grid-link: "https://www.dropbox.com/s/68lorm2s2b9dv4c/scarab2_2000.jpg?raw=1"
      grid-img: "scarab2_800.jpg"
	- grid-name: "scarab 01"
      grid-link: "https://www.dropbox.com/s/yhsdumrja39xvli/scarab1_2000.jpg?raw=1"
      grid-img: "scarab1_800.jpg"
---

Fractals are an interesting thing.

I finally took the dive to explore Mandelbulb, a 3-dimensional fractal discovered in 2009 by Daniel White and Paul Nylander. Using Mandelbulb3D, I'm able to capture my journey into generative fractal art, modifying and adding parameters that distort the fractal set into interesting shapes and colors. Check out the **ongoing gallery with the icon on the top right of the page**, and click each image to view it in full resolution. Stay tuned for more pictures and videos in the future.

For bulk download, here's the [dropbox folder](https://www.dropbox.com/sh/ik8v5yzsgknxo7s/AADT3kxg_kQi4hlGpERgcI7ia?dl=0).


<figure class="third">
	<a href="/assets/images/work/mandelbulb/scarab1_800.jpg"><img src="https://www.dropbox.com/s/yhsdumrja39xvli/scarab1_2000.jpg?raw=1"></a>
	<a href="/assets/images/work/mandelbulb/scarab2_800.jpg"><img src="https://www.dropbox.com/s/68lorm2s2b9dv4c/scarab2_2000.jpg?raw=1"></a>
	<a href="/assets/images/work/mandelbulb/scarab3_800.jpg"><img src="https://www.dropbox.com/s/jz2v43bejzalabx/scarab3_2000.jpg?raw=1"></a>
</figure>

<section class="section-padding bg-black">
    <div class="grid">
        {% for grid in page.grid %}
        <ul class="container-triple" itemscope itemtype="http://schema.org/Blog">
            {% for item in grid.grid-items %}
            <li class="preview" itemprop="blogPost" itemscope itemtype="http://schema.org/BlogPosting">
                <a class="preview__link" href="{{ item.grid-link }}" itemprop="url">
                    <div class="preview__img bg-white wow slideInUp">
						<h3 class="wow fadeInUp" data-wow-delay="150ms" itemprop="name">{{ item.grid-name }}</h4>
                        <figure class="absolute-bg wow fadeIn" data-wow-delay="900ms" style="background-image: url('/assets/images/work/mandelbulb/{{ item.grid-img }}');"></figure>
                    </div>
                </a>
            </li>
            {% endfor %}
        </ul>
        {% endfor %}
    </div>
</section>