---
layout: post
title:  "Mandelbulb"
image: "/assets/images/work/mandelbulb/scarab1_800.jpg""
rscs:
  - rsc-type: "Mandelbulb"
    rsc-items:
    - rsc-name: "display"
      rsc-link: "https://www.dropbox.com/s/cg0adocmejcschc/display_3200.png?raw=1"
      rsc-img: "display_1600.png"
    - rsc-name: "airway"
	  rsc-link: "https://www.dropbox.com/s/tcgm9d5k84gq932/airway_2160.png?raw=1"
      rsc-img: "airway_1080.png"
	- rsc-name: "tristar"
      rsc-link: "https://www.dropbox.com/s/6xgzbk31ktwuag6/tristar_2160.png?raw=1"
      rsc-img: "tristar_1080.png"
	- rsc-name: "target"
      rsc-link: "https://www.dropbox.com/s/3gdizieadimhunj/target_2160.png?raw=1"
      rsc-img: "target_1080.png"
	- rsc-name: "spacemine 03"
      rsc-link: "https://www.dropbox.com/s/2367z5jfmdipxui/spacemine3_2160.png?raw=1"
      rsc-img: "spacemine3_1080.png"
	- rsc-name: "spacemine 02"
      rsc-link: "https://www.dropbox.com/s/7eucnop67ub5lf9/spacemine2_3000.png?raw=1"
      rsc-img: "spacemine2_1000.png"
	- rsc-name: "spacemine 01"
      rsc-link: "https://www.dropbox.com/s/2wzklepxd6wvcnv/spacemine1_3000.png?raw=1"
      rsc-img: "spacemine1_1000.png"
	- rsc-name: "arbiter 03"
      rsc-link: "https://www.dropbox.com/s/voia10kr00ijtyf/arbiter%203_2000.jpg?raw=1"
      rsc-img: "arbiter3_800.jpg"
	- rsc-name: "arbiter 02"
      rsc-link: "https://www.dropbox.com/s/dupfvzqxhhr85x4/arbiter%202_2000.jpg?raw=1"
      rsc-img: "arbiter2_800.jpg"
	- rsc-name: "arbiter 01"
      rsc-link: "https://www.dropbox.com/s/m7kunfm086qnkqk/arbiter%201_2000.jpg?raw=1"
      rsc-img: "arbiter1_800.jpg"
	- rsc-name: "royal 03"
      rsc-link: "https://www.dropbox.com/s/des69478z0pnop7/royal3_2000.jpg?raw=1"
      rsc-img: "royal3_800.jpg"
	- rsc-name: "royal 02"
      rsc-link: "https://www.dropbox.com/s/bxpqaem2rrgujhg/royal2_2000.jpg?raw=1"
      rsc-img: "royal2_800.jpg"
	- rsc-name: "royal 01"
      rsc-link: "https://www.dropbox.com/s/0xl5lejvdtenhix/royal1_2000.jpg?raw=1"
      rsc-img: "royal1_800.jpg"
	- rsc-name: "scarab 03"
      rsc-link: "https://www.dropbox.com/s/jz2v43bejzalabx/scarab3_2000.jpg?raw=1"
      rsc-img: "scarab3_800.jpg"
	- rsc-name: "scarab 02"
      rsc-link: "https://www.dropbox.com/s/68lorm2s2b9dv4c/scarab2_2000.jpg?raw=1"
      rsc-img: "scarab2_800.jpg"
	- rsc-name: "scarab 01"
      rsc-link: "https://www.dropbox.com/s/yhsdumrja39xvli/scarab1_2000.jpg?raw=1"
      rsc-img: "scarab1_800.jpg"
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
        {% for rsc in page.rscs %}
		<h2 class="section-header">{{ rsc.rsc-type }}</h2>
        <ul class="container-triple" itemscope itemtype="http://schema.org/Blog">
            {% for item in rsc.rsc-items %}
            <li class="preview" itemprop="blogPost" itemscope itemtype="http://schema.org/BlogPosting">
                <a class="preview__link" href="{{ item.rsc-link }}" itemprop="url">
                    <div class="preview__img bg-white wow slideInUp">
						<h3 class="wow fadeInUp" data-wow-delay="150ms" itemprop="name">{{ item.rsc-name }}</h4>
                        <figure class="absolute-bg wow fadeIn" data-wow-delay="900ms" style="background-image: url('/assets/images/work/mandelbulb/{{ item.rsc-img }}');"></figure>
                    </div>
                </a>
            </li>
            {% endfor %}
        </ul>
        {% endfor %}
    </div>
</section>