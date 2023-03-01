---
layout: post
title:  Streamlabs Trovo Alert Converter
description: Dynamic and powerful Alert Box creator tool.
date:   2023-01-18 00:00:00 +0000
image:  '/assets/resources/trovo converter/thumb.jpg'
tags: [streamlabs, tool, livestreaming]
---
Designers that create Alert Box themes in the industry primarily focus on the big platforms - Twitch & YouTube. These platforms draw the most concurrent viewership and have the largest userbase of creators. However, there are smaller emerging platforms like Trovo that can be a promising source of potential clients for designers looking to expand their reach. With a few short clicks, designers can now easily convert their Twitch Alert Box themes to support Trovo as well. 

I created the [Streamlabs Trovo Alert Converter]({{site.baseurl}}/tools/trovo-alert-converter/) on CodePen which converts your Twitch Alert Box settings to Trovo in one click. All you need to do is grab your Twitch settings (see how by clicking the Tutorial hyperlink in the CodePen) and paste it in the field, then click Convert Alert. Head back to your Streamlabs Dashboard, switch platforms to Trovo and paste your resulting code via DevTools.

[View Trovo Alert Converter]({{site.baseurl}}/tools/trovo-alert-converter/)



### The Issue and Solution
Setting up Alert Box themes can be pretty tedious when there's pages full of repetitive settings that need to be input manually. Having a one-click solution can help designers quickly port over large libraries of Alert Box themes they've created. I started on this tool when I noticed that Trovo has all of the same event types as Twitch:

- Follow
- Subscriber
- Raid

It made me wonder if it was possible to speed up a workflow since a designer doesn't need to create any new animations for this platform. Work on this tool took some time since it was my first dive into jQuery, but the foundation built on jQuery, JSON, and fetch requests lead me to create the more advanced [Alert Box Creator](/streamlabs-alert-box-creator/) tool that I shortly after. 
  
![Trovo Converter]({{site.baseurl}}/assets/resources/trovo converter/wide-img.jpg#wide)
*Background Photo by [Jenn Buxton](https://unsplash.com/photos/VbehmJNj5Tc) on [Unsplash](https://unsplash.com/)*