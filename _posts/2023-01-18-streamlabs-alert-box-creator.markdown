---
layout: post
title:  Streamlabs Alert Box Creator
description: Dynamic and powerful Alert Box creator tool.
date:   2023-01-18 00:00:00 +0000
image:  '/assets/resources/alert box creator/thumb.jpg'
tags:   [tool, streamlabs]
---
The [Alert Box](https://streamlabs.com/desktop-widgets/alert-box) is a widget from [Streamlabs](https://streamlabs.com/) that displays a graphic every time viewers engage with a creator's channel - following their channel, subscribing, or tipping the creator. I created an Alert Box Creator tool that gives designers a more intuitive way to have granular control over settings when setting up an Alert Box Theme. 

This tool speeds up a designer's Alert Box setup process considerably by allowing designers to support 30 event types in a few short clicks, as opposed to the 30 individual pages with various settings that a designer would have to navigate normally to fully support the Alert Box. 

<p class="codepen" data-height="1099.9999694824219" data-default-tab="result" data-slug-hash="LYmdovY" data-user="Slykuiper" style="height: 1099.9999694824219px; box-sizing: border-box; display: flex; align-items: center; justify-content: center; border: 2px solid; margin: 1em 0; padding: 1em;">
  <span>See the Pen <a href="https://codepen.io/Slykuiper/pen/LYmdovY">
  Alert Box Creator</a> by Corbin Scott (<a href="https://codepen.io/Slykuiper">@Slykuiper</a>)
  on <a href="https://codepen.io">CodePen</a>.</span>
</p>
<script async src="https://cpwebassets.codepen.io/assets/embed/ei.js"></script>


### The Issue
One of the biggest gripes about configuring an Alert Box widget as a designer in the livestreaming industry is that there are many repetitive tasks which take time to do. There are **30 different event types** (Follow, Subscription, Donation, etc) that can be supported across multiple platforms (Twitch, Facebook, Trovo, YouTube, Charity, etc), and each event type has 12+ settings that need to be updated individually. There's no way to apply settings across multiple event types at once - designers have to update multiple settings for one event, switch to the next event type and repeat.

### The Solution
[I created a tool on CodePen](https://codepen.io/Slykuiper/full/LYmdovY) using jQuery that allows you to define global alert settings and branch out to apply individual settings for any specific event. The tool outputs 4 fetch commands that designers apply on the Streamlabs Dashboard to save these settings. 

A typical setup for designers that create Alert Box Themes is to have each event type follow the same sound, font, and custom code settings for each event and only change the **image** setting. This image is a dynamic animation or graphic that displays "New Follower!" or "New Subscriber!" in the animation file. With this tool you can create this setup (and more) very easily.  
  
![Alert Box Creator]({{site.baseurl}}/assets/resources/alert box creator/wide-img.jpg#wide)
*Background Photo by [Rudi West](https://unsplash.com/photos/IHCHpxUIIVs) on [Unsplash](https://unsplash.com/)*

All settings are the same except for the ones under the Image setting. The other non-Twitch events will use **fire_main.webm** since it's defined as the global image setting. 

### Getting Started

If you're a designer creator Alert Box Themes in the space, I recommend creating accounts on Twitch, YouTube, Trovo, Facebook, and StreamlabsCharity. Then merging them to your account under [Account Settings](https://streamlabs.com/dashboard#/settings/account-settings/platforms). This way you're supporting a wider range of platforms & integrations for the Alert Box with ease, expanding your clientbase. 

There's a short video demonstrating in the top-right of the tool on CodePen that shows it in action. CodePen doesn't have an uploader component, so you'll have to upload media to the Streamlabs Media Gallery like normal, then copy the link and paste it in the CodePen. 