---
layout: post
title:  Streamlabs Alert Box Creator
description: Dynamic and powerful Alert Box creator tool.
date:   2022-01-18 00:00:00 +0000
image:  '/assets/resources/alert box creator/thumb.jpg'
tags:   [tool]
---
The Alert Box is a widget from Streamlabs that displays a graphic every time viewers engage with a creator's channel. I created a tool that gives designers more granular control over setting up an Alert Box. This tool gives you the ability to quickly create an Alert Box theme that supports 30 different event types in a few short clicks, and easily make adjustments for each event all on one page. 

[Alert Box Creator](https://codepen.io/Slykuiper/full/LYmdovY) tool on CodePen.

### The Issue
The biggest gripe about creating an Alert Box widget as a designer in this space is that there are many repetitive tasks that take a lot of time. There are **30 different event types** (Follow, Subscription, Donation, etc) that can be supported across multiple platforms (Twitch, Facebook, Trovo, YouTube, Charity, etc), and each event type has settings that need to be updated individually. There's no way to apply settings across multiple event types at once - designers have to update the image/sound/font/code settings for one event, then switch to the next tab and do it all over again multiple times. 

### The Solution
[I created a tool on CodePen](https://codepen.io/Slykuiper/full/LYmdovY) using jQuery that allows you to define global alert settings and branch out to apply individual settings for any specific event. The end result is a set of 4 fetch commands that you apply in your dashboard. 

For example - most designers create Alert Box themes that have custom image/sound/font/code settings but the only setting that's different per event is the **image** setting. This is a dynamic animation that displays "New Follower!" or "New Subscriber!" in the animation file, but all other settings remain the same for each event. With this tool you can have a setup that looks like this:  
  
![Panels]({{site.baseurl}}/assets/resources/alert box creator/wide-img.jpg#wide)
*Background Photo by [Rudi West](https://unsplash.com/photos/IHCHpxUIIVs) on [Unsplash](https://unsplash.com/)*

All settings are the same except for the ones under the Image setting. The other non-Twitch events will use **fire_main.webm** since it's defined as the global image setting. 

### Getting Started

If you're a designer creator Alert Box Themes in the space, I recommend creating accounts on Twitch, YouTube, Trovo, Facebook, and StreamlabsCharity. Then merging them to your account under [Account Settings](https://streamlabs.com/dashboard#/settings/account-settings/platforms). That way you're supporting a wider range of creators with little effort. 

There's a short video demonstrating in the top-right of the tool on CodePen that shows it in action. CodePen doesn't have an uploader component, so you'll have to upload media to the Streamlabs Media Gallery like normal, then copy the link and paste it in the CodePen. 