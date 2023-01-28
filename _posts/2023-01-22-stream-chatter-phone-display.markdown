---
layout: post
title:  Stream Chatter Phone Display
description: Show your latest stream chatter on a physical display.
date:   2023-01-22 00:00:00 +0000
image:  '/assets/chatter/thumb.png'
tags:   [tool, api, streamlabs, twitch]
---
There's a lot of different ways that a creator's live audience can engage with them. Using Node.js, the [Twitch API](https://dev.twitch.tv/docs/api/) and the [Streamlabs API](https://dev.streamlabs.com/) I programmed a rudimentary widget that let's creators display a viewer's profile picture & name on their phone so they can show it in their webcams. 

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

When it receives an event from Twitch Chat or Streamlabs (For Twitch, YouTube, Facebook, Streamlabs Charity alerts), it grabs their Profile Picture and displays it on a web server that your phone can connect to.

There's definitely a risk when displaying a random user's profile picture on stream, it's an opportunity for trolls to change their profile picture to something that's offensive or might get you banned. I included a small protective measure by including settings that can limit usage to VIPs/Moderators/Subscribers-Only for Twitch Chat. That's okay for a working proof of concept, but not sae enough for something that should be widely distributed.

{% highlight js %}
if (process.env.ENABLE_ALERTS == "true") {
  const streamlabs = io(`https://sockets.streamlabs.com?token=[process.env.SOCKETTOKEN]`, { transports: ['websocket'] });
  streamlabs.on('connect', () => { console.log('Connected to Streamlabs Server'); });

  streamlabs.on('event', (eventData) => {
    if (eventData.for == "streamlabs" || eventData.for == "twitch_account" || eventData.for == "youtube_account" || eventData.for == "facebook_account" || eventData.for == "streamlabscharity") {
      processAlert(eventData.for, eventData.type, eventData.message[0]);
    }
  });
}
{% endhighlight %}

This snippet connects to the Streamlabs Socket API then listens for events from platforms connected to the creators account. From there, a creator can define settings like enabling specific events and setting minimum tip, bit, raid, and superchat amounts to trigger those specific events.

{% highlight js %}
if (process.env.ENABLE_TWITCH_CHAT == "true") {
    const client = new tmi.client({
        options: {},
        connection: {
            reconnect: true,
            secure: true
        },
        identity: {
            username: process.env.TWITCH_IRC_USERNAME,
            password: process.env.TWITCH_IRC_OAUTH
        },
        channels: [process.env.TWITCH_IRC_CHANNEL]
    });

    client.on('connected', twitchOnConnectedHandler);
    client.on('message', twitchOnMessageHandler); // print chat image
    client.connect(); // Connect to Twitch IRC
}
{% endhighlight %}

This snippet uses [tmi.js](https://tmijs.com/), a JS Package for interacting with Twitch Chat via IRC in Node.js. After connecting to a creator's channel, it listens to their chat to handle interactions. It check's the chatter's stats (subscriber, moderator, etc) then uses the [Twitch Helix API](https://dev.twitch.tv/docs/api/reference/) to grab that chatter's Profile Picture. 

{% highlight js %}
function getAvatar(username) {
    var avatar;
    fetch('https://api.twitch.tv/helix/users?login=' + username, {
        method: 'GET',
        headers: {
            'Client-ID': process.env.TWITCH_API_CLIENT_ID,
            'Authorization': 'Bearer ' + accesstoken
        }
    })
    .then(res => res.json())
    .then(res => {
        avatar = res.data[0]['profile_image_url'];
        console.log(username + ": " + avatar);
    });
}
{% endhighlight %}

From there it gets very hacky. It reads a local html layout, switches out some variables (username, profile image url), and overwrites the html file in an [XAMPP](https://www.apachefriends.org/) directory as a local server. The phone, connected on the same wifi, accesses localhost and displays the contents of the html page.