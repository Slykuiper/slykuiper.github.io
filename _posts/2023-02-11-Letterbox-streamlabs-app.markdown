---
layout: post
title:  Letterbox - A Basic Streamlabs App
description: Overview of a basic Streamlabs App. 
date:   2023-02-11 00:00:00 +0000
image:  '/assets/slapps/letterbox-thumb.jpg'
tags:   [tool, api, streamlabs, livestreaming]
---
### Introduction

I'm not a software engineer by profession - I like creating graphics and making them move. But I've picked up a lot of programming knowledge over the years making video game mods, web sites, and scripts for After Effects. I've tinkered with custom-coded [widgets](https://streamlabs.com/widgets) in Streamlabs and naturally thought the next extension of that is creating an [App for Streamlabs Desktop](https://streamlabs.com/app-store). 

[The Streamlabs Platform docs](https://slobs-platform.readme.io/docs) are a great resource to get started. It shows you how to create a basic app that responds to the Streamlabs API. 

In October 2022, I created a basic app called "Letterbox", that let's chat control the height, transition speed, and color of a Letterbox that a streamer adds to their scene in Streamlabs Desktop. There's no purpose for something like this beyond coding practice and something chat can change on stream, but it should inspire some more-interesting ideas for anyone reading this. Source Code is available at the bottom of the page.

> Letterbox: a technique for displaying a wide-screen film or landscape video on a narrower screen by reducing its size but retaining the aspect ratio, with black bands filling the screen above and below the picture (often used attributively).
>
> <cite>[Dictionary.com](https://www.dictionary.com/browse/letterbox)</cite>

***

### How it works

<div class="gallery-box">
  <div class="gallery">
    <img src="/assets/slapps/letterbox_demo.gif">
  </div>
  <em>Color & Height changes with a transition speed of 2000ms.</em>
</div>

Chat can control the letterbox by starting a message with **!letterbox** then typing one of three commands.
1. **!letterbox #00ff00** - Changes the color of the letterbox source to #00ff00 (solid green)
2. **!letterbox 20%** - Changes the height of the letterbox source to 20%.
3. **!letterbox 300ms** - Changes the speed of the color & height changes to 300ms.

{% highlight js %}
// fires when a user chats
streamlabs.onChatMessage(function(event) {

    // receive a twitch message
    if (event.payload.command == "PRIVMSG") {
        var message = event.body.split(" ");

        // if first word is !letterbox
        if (message[0] == "!letterbox") {

            // if second word is a hex code, change color. ie !letterbox #00ff00
            if (message[1].length == 7 && message[1].startsWith("#")) { 
                $("div.rectangle").css("background-color", message[1]);
            }

            // if second word includes a percentage between 0-50, change height. ie !letterbox 50%
            if (message[1].slice(-1) == "%") {
                if (message[1].slice(0, -1) > 0 && message[1].slice(0, -1) < 51) {
                    $("div.rectangle").css("height", message[1]);
                    console.log("Letterbox height set to " + message[1]);
                }
            }
            // if second word includes a "ms", change transition speed. ie !letterbox 300ms
            if (message[1].slice(-2) == "ms") {
                $("div.rectangle").css("transition", "all " + message[1]);
                console.log("Letterbox speed set to " + message[1]);
            }
        }
    }
});
{% endhighlight %}

<div class="gallery-box">
  <div class="gallery">
    <img src="/assets/slapps/letterbox-source.png">
  </div>
  <em>Adding the app to your scene in Streamlabs Desktop.</em>
</div>

The image and text settings that display on the right side of the screen when adding the source to your scene are defined in the "about" section your manifest.json. For more detail check out [The Application Manifest](https://slobs-platform.readme.io/docs/the-application-manifest) page of the Platform Docs. 

***

### App Settings
These apps include an App Settings page that is only visible to the streamer. I used this settings page to allow streamers to manually adjust their letterbox. If this was developed further, some good options would be to enable/disable chat commands and the ability to restrict commands to specific user groups (moderators, subscribers, vips, etc).

<div class="gallery-box">
  <div class="gallery">
    <img src="/assets/slapps/letterbox-settings1.png">
    <img src="/assets/slapps/letterbox-settings2.png">
  </div>
</div>

***

### Source Code
The full source of this project is [available on GitHub](https://github.com/Slykuiper/Letterbox). It should give a bit more insight on this project or serve is a base for basic tinkering. 
