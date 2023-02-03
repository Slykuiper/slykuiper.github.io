---
layout: post
title:  Stream POS Printer
description: POS Printer that prints out stream alerts
date:   2023-01-28 00:00:00 +0000
image:  '/assets/pos/thumb.gif'
tags:   [tool, api, streamlabs]
---
POS Printers that interact with live streams are nothing new, and many are a search away for creators to download and configure. In 2021 wanted to figure out the entire process of programming my own from scratch, to manipulate the events and have full control over what prints out. In July of 2021 I purchased a [TEROW Thermal Receipt Printer](https://www.amazon.com/gp/product/B07848ZBXT/ref=ppx_yo_dt_b_asin_title_o06_s01?ie=UTF8&th=1) and Thermal Rolls to start the process. 

<p><iframe src="https://www.youtube-nocookie.com/embed/UjvRDH2ulxE" loading="lazy" frameborder="0" allowfullscreen></iframe></p>

Printers are all kinds of confusing, in the beginning I tried all kinds of things to get it to print like using VirtualBox running Ubuntu to print raw files hoping it would work.

![Ubuntu Gif]({{site.baseurl}}/assets/pos/ubuntu.gif)

It did but I had such limited control, and I eventually figured out you can use Windows and assign a USB printer to an LPT port, then run the shell command exec(`more \"${filepath}\" > lpt1:`) to read and print the contents of a text file. Printing "Hello World" would call this function: TextPrint("testfile", 0, "Hello World!")

{% highlight js %}
function TextPrint(output, padding, string) {
    var topPadding = "";
    for (let i = 0; i < padding; i++) {
        topPadding += "\n ";
    }
    string = topPadding + string + "\n \n \n \n"
    fs.writeFile(path.resolve(__dirname, `./assets/${output}.txt`), string, 'utf8', function (err) {
        if (err) {
            return console.log("TextPrint: " + err);
        }
    });
    printText(output)
}

function printText(filename) { 
    var filepath = path.resolve(__dirname, `./assets/${filename}.txt`);
    exec(`more \"${filepath}\" > lpt1:`, (error, stdout, stderr) => {
        if (error) {
            console.log(`error: ${error.message}`);
            return;
        }
        if (stderr) {
            console.log(`stderr: ${stderr}`);
            return;
        }
    });
}
{% endhighlight %}

<div class="gallery-box">
  <div class="gallery">
    <img src="/assets/pos/testing.gif">
    <img src="/assets/pos/chatters.png">
  </div>
</div>

Using [tmi.js](https://tmijs.com/), you can easily connect to a Twitch Channel and pull in chat to trigger the printer. 

Printing text files is fine for fastfood receipts but not for interacting with viewers on a live broadcast, I need more control. I want to be able to display profile pictures and customize the layout any way I want. It turns out that MSPaint is a decent way to print images on a POS Printer. I made a shell command that call's MSPaint's print function to local images.

{% highlight js %}
function printImage(event) { 
    var filepath = path.resolve(__dirname, `./pages/${event}_log.png`);
    exec(`start /min mspaint /p \"${filepath}\"`, (error, stdout, stderr) => {
        if (error) {
            console.log(`error: ${error.message}`);
            return;
        }
        if (stderr) {
            console.log(`stderr: ${stderr}`);
            return;
        }
    });
}
{% endhighlight %}

There were issues with getting the formatting right. MSPaint's print settings aren't accessible via command line and they get reset every time the program is launched, so I had to find another solution. I found a [Node.js library that generates images from HTML files](https://www.npmjs.com/package/node-html-to-image) but I was having issues with the supported options to display correctly on a tiny POS printer. Using Google Chrome turned out to be a decent hacky solution to get the job done. 

The setup was as follows. Use the [Streamlabs API](https://dev.streamlabs.com/) to receive events from Twitch, YouTube, & Facebook. If the event was from Twitch, use [Twitch's Helix API](https://dev.twitch.tv/docs/api/) to grab the profile picture then format and write the event data into an HTML file. Call a command to open that HTML file in Chrome, which launches the built-in print function on page load to print to the POS printer. I covered some NodeJS snippets on how to connect to these in a [previous blog](/stream-chatter-phone-display/).

{% highlight js %}
if (platform == 'twitch_account') {
    fetch(`https://api.twitch.tv/helix/users?login=${name}`, {
        method: 'GET',
        headers: {
            'Client-ID': process.env.TWITCH_API_CLIENT_ID,
            'Authorization': 'Bearer ' + accesstoken
        }
    })
    .then(res => res.json())
    .then(res => {
        profile_picture = res.data[0]['profile_image_url'];
        fs.readFile(path.resolve(__dirname, `./pages/layouts/event-${layout}.html`), 'utf8', function(err, data) {
            if (err) {
                return console.log("No Event Layout found for " + layout);
            }
            var result = data.replace(/{event}/g, event).replace(/{messageTemplate}/g, messageTemplate).replace(/{profile_picture}/g, profile_picture).replace(/{username}/g, name);
            fs.writeFile(path.resolve(__dirname, `./pages/${layout}_log.html`), result, 'utf8', function (err) {
                if (err) return console.log("processAlert Error 2: " + err);
            });
        });
    }).then(printChrome(layout));
}
{% endhighlight %}

The above detects if the Streamlabs alert was from Twitch. If so, grab the user's profile picture. Read an event-specific html file and replace the event name, message template, profile picture, and username. Save this in a new directly then call the function below launch Chrome in kiosk mode.

{% highlight js %}
function printChrome(event) {
    var filepath = path.resolve(__dirname, `./pages/${event}_log.html`);
    var stringpath = "\"" + filepath + "\""
    var Chrome = '"C:\\Program Files (x86)\\Google\\Chrome\\Application\\chrome.exe" --kiosk-printing ' + stringpath;

    exec(Chrome, function(err, data) {
        if (err != null) {
            console.log("printEvent Error 1: " + err);
            console.log("printEvent Error 2: " + data.toString());
        }
    });
}
{% endhighlight %}

{% highlight html %}
<script>
    window.onload = function() {
        window.print();
        window.onafterprint = function() {
            window.close();
        }
    };
</script>
{% endhighlight %}

The snippet above is included in the html file that's called. Very straightforward - It calls window.print after Chrome loads, then closes.
I think the most frustrating part of all of this was figuring out the formatting to display what I wanted on 58mm thermal rolls. The html files were printing upside down, so the most straightforward (and probably only) solution was to just flip the entire page upside down with CSS transforms. 

<p class="codepen" data-height="254.90908813476562" data-default-tab="html,result" data-slug-hash="GRBByNZ" data-user="Slykuiper" style="height: 254.90908813476562px; box-sizing: border-box; display: flex; align-items: center; justify-content: center; border: 2px solid; margin: 1em 0; padding: 1em;">
  <span>See the Pen <a href="https://codepen.io/Slykuiper/pen/GRBByNZ">
  POS Printer Layout</a> by Corbin Scott (<a href="https://codepen.io/Slykuiper">@Slykuiper</a>)
  on <a href="https://codepen.io">CodePen</a>.</span>
</p>
<script async src="https://cpwebassets.codepen.io/assets/embed/ei.js"></script>

![layouts]({{site.baseurl}}/assets/pos/alert-layouts.jpg)

I experimented with different layouts to different alerts and integrations, it turned out pretty well overlay. 