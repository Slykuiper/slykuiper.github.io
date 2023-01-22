---
layout: post
title:  Stream Chatter Phone Display
description: Show your latest stream chatter on a physical display.
date:   2023-01-22 00:00:00 +0000
image:  '/assets/resources/alert box creator/thumb.jpg'
tags:   [tool]
---
I've been brainstorming different ways that viewers in a livestream can participate and influence a creator's stream. Physically displaying them alongside the streamer in their room came to mind and I built a rudimentary widget to do just that.

<div class="gallery-box">
  <div class="gallery">
    <img src="/assets/chatter/vlc_bsShc2XXZW.jpg">
    <img src="/assets/chatter/vlc_BUNw39YoiS.jpg">
    <img src="/assets/chatter/vlc_loi9ZoNw4B.jpg">
    <img src="/assets/chatter/vlc_nwlGndRpg6.jpg">
    <img src="/assets/chatter/vlc_qbUfZvVyLv.jpg">
    <img src="/assets/chatter/vlc_R04vs8qZ0y.jpg">
  </div>
  <em>Phone displaying Live Stream Chatters</em>
</div>

It's definitely not a fully-fledged polished application, it's pretty unpolished and barebones but it works! Using the Twitch & Streamlabs APIs I pulled together a widget that detects a user interactions, grabs their Profile Picture, then displays it on a server for you to display on your phone. It works for:
+ Twitch Alerts
+ Twitch Chat
+ YouTube Alerts
+ Trovo Alerts
+ Facebook Alerts

There's definitely a risk when displaying a random user's profile picture on stream, it's an opportunity for trolls to change their profile picture to something that's offensive or might get you banned. There's plenty of ways around this:

+ Approval queue that let's the creator approve/deny an image before displaying it on stream.
+ Blur the profile picture by adding a blur CSS filter on the image element.
+ Limit it to certain user groups: VIPs, Moderators, Staff, Subscribers-Only, etc

None of these are implemented in this project. 