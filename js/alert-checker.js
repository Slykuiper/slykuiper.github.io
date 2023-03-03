$( document ).ready(function() {
  var saveTextArea = $(".form-fetch-settings").find("textarea");

  saveTextArea.on("input", function() {
    var saveText = saveTextArea.val();

    if (fetchCheck(saveText)) {

      // show event gallery
      if ($(".event-gallery").hasClass("hidden")) {
        $(".event-gallery").removeClass("hidden");
      }
      if ($(".toolset").hasClass("hidden")) {
        $(".toolset").removeClass("hidden");
      }

      var fetchCommand = saveText.slice(55, -2);
      alertObj = JSON.parse(fetchCommand);
      alertSettingsObj = JSON.parse(alertObj["body"]);
      var eventList = {}
      var eventNames = {"donation": "Donation", "merch": "SL Merch", "loyalty_store_redemption": "Cloudbot Redemption", "prime_sub_gift": "SL Ultra Gift", "streamlabscharitydonation": "SL Charity", "follow": "Twitch Follow", "sub": "Twitch Sub", "resub": "Twitch Resub", "host": "Twitch Host", "bits": "Twitch Bits", "raid": "Twitch Raid", "subscriber": "YT Sub", "sponsor": "YT Member", "fanfunding": "YT Super Chat", "facebook_follow": "FB Follow", "facebook_stars": "FB Stars", "facebook_like": "FB Like", "facebook_support": "FB Support", "facebook_support_gifter": "FB Support Gifter", "facebook_share": "FB Share", "trovo_follow": "Trovo Follow", "trovo_sub": "Trovo Sub", "trovo_raid": "Trovo Raid", "pledge": "Pledge", "sponsored_campaign": "Sponsored Campaign", "donordrivedonation": "Charity Streaming Donations", "eldonation": "Extra Life", "tiltifydonation": "Tiltify", "treat": "Treats", "justgivingdonation": "JustGiving", "gamewispsubscription": "Game Wisp"};
      var eventTypes = {"donation": "Streamlabs", "merch": "Streamlabs", "loyalty_store_redemption": "Streamlabs", "prime_sub_gift": "Streamlabs", "streamlabscharitydonation": "Streamlabs", "follow": "Twitch", "sub": "Twitch", "resub": "Twitch", "host": "Twitch", "bits": "Twitch", "raid": "Twitch", "subscriber": "YT", "sponsor": "YT", "fanfunding": "YT", "facebook_follow": "FB", "facebook_stars": "FB", "facebook_like": "FB", "facebook_support": "FB", "facebook_support_gifter": "FB", "facebook_share": "FB", "trovo_follow": "Trovo", "trovo_sub": "Trovo", "trovo_raid": "Trovo", "pledge": "3P", "sponsored_campaign": "3P", "donordrivedonation": "3P", "eldonation": "3P", "tiltifydonation": "3P", "treat": "3P", "justgivingdonation": "3P", "gamewispsubscription": "3P"};
      
      console.log(alertSettingsObj);
      const keys = Object.keys(alertSettingsObj);
      for (let i = 0; i < keys.length; i++) {
        const key = keys[i];

        // regular event
        if(key.includes("_image_href")) {
          let eventSetting = key.slice(0,-11);
          let eventName = eventNames[eventSetting];
          let eventType = eventTypes[eventSetting];
          let eventImageURL;
          if (alertSettingsObj[key].length >= 1) {
            eventImageURL = alertSettingsObj[key];
          } else {
            eventImageURL = `https://slykuiper.com/assets/resources/alert%20checker/image-not-found.png`;
          }
          
          let eventSoundURL = alertSettingsObj[eventSetting + "_sound_href"];
          let eventImageName = eventImageURL.substring(eventImageURL.lastIndexOf('/')+1);
          let eventSoundName = eventSoundURL.substring(eventSoundURL.lastIndexOf('/')+1);
          let eventImageType = eventImageURL.substring(eventImageURL.lastIndexOf('.')+1);
          let eventImageDiv;
          let eventTypeClass = `<p class="event-type">${eventName}</p>`;

          
          if (!eventImageURL.includes("https://")) {
            eventImageURL = "https://streamlabs.com" + eventImageURL;
          }
          if (!eventSoundURL.includes("https://")) {
            eventSoundURL = "https://streamlabs.com" + eventSoundURL;
          }
          if (eventImageType == "gif" || eventImageType == "png" || eventImageType == "jpg") {
            eventImageDiv = `<img class="event-image" src=${eventImageURL}></img>`;
          } else if (eventImageType == "webm" || eventImageType == "mp4") {
            eventImageDiv = `<video loop="loop" class="event-video" src=${eventImageURL} autoplay muted></video>`;
          }

          if (eventType == "Streamlabs") {
            eventTypeClass = `<p class="event-type event-streamlabs">${eventName}</p>`;
          } else if (eventType == "Twitch") {
            eventTypeClass = `<p class="event-type event-twitch">${eventName}</p>`;
          } else if (eventType == "YT") {
            eventTypeClass = `<p class="event-type event-yt">${eventName}</p>`;
          } else if (eventType == "FB") {
            eventTypeClass = `<p class="event-type event-fb">${eventName}</p>`;
          } else if (eventType == "Trovo") {
            eventTypeClass = `<p class="event-type event-trovo">${eventName}</p>`;
          } else if (eventType == "3P") {
            eventTypeClass = `<p class="event-type event-3p">${eventName}</p>`;
          }

          let eventItem = `
            <li class="event-item">
              ${eventTypeClass}
              <div class="event-files">
                <a class="event-image-name" href=${eventImageURL}>${eventImageName}</a>
                <a class="event-sound-name" href=${eventSoundURL}>${eventSoundName}</a>
              </div>
              ${eventImageDiv}
            </li>`;
          $(".event-gallery").append(eventItem);
        }
        
        // variations
        if (key.includes("_variations") ) {
          if (alertSettingsObj[key]) {
            if (alertSettingsObj[key].length >= 1) {
              for (let i = 0; i < alertSettingsObj[key].length; i++) {
                // each variation
                let eventSetting = key.slice(0,-11);
                let eventName = eventNames[eventSetting] + " Variation: " + alertSettingsObj[key][i]["name"];
                let eventType = eventTypes[eventSetting];
                let eventImageURL;
                if (alertSettingsObj[key][i]["settings"]["image"]["href"].length >= 1) {
                  eventImageURL = alertSettingsObj[key][i]["settings"]["image"]["href"];
                } else {
                  eventImageURL = `https://slykuiper.com/assets/resources/alert%20checker/image-not-found.png`;
                }
                
                let eventSoundURL = alertSettingsObj[key][i]["settings"]["sound"]["href"];
                let eventImageName = eventImageURL.substring(eventImageURL.lastIndexOf('/')+1);
                let eventSoundName = eventSoundURL.substring(eventSoundURL.lastIndexOf('/')+1);
                let eventImageType = eventImageURL.substring(eventImageURL.lastIndexOf('.')+1);
                let eventImageDiv;
                let eventTypeClass = `<p class="event-type">${eventName}</p>`;

                
                if (!eventImageURL.includes("https://")) {
                  eventImageURL = "https://streamlabs.com" + eventImageURL;
                }
                if (!eventSoundURL.includes("https://")) {
                  eventSoundURL = "https://streamlabs.com" + eventSoundURL;
                }
                if (eventImageType == "gif" || eventImageType == "png" || eventImageType == "jpg") {
                  eventImageDiv = `<img class="event-image" src=${eventImageURL}></img>`;
                } else if (eventImageType == "webm" || eventImageType == "mp4") {
                  eventImageDiv = `<video loop="loop" class="event-video" src=${eventImageURL} autoplay muted></video>`;
                }

                if (eventType == "Streamlabs") {
                  eventTypeClass = `<p class="event-type event-streamlabs">${eventName}</p>`;
                } else if (eventType == "Twitch") {
                  eventTypeClass = `<p class="event-type event-twitch">${eventName}</p>`;
                } else if (eventType == "YT") {
                  eventTypeClass = `<p class="event-type event-yt">${eventName}</p>`;
                } else if (eventType == "FB") {
                  eventTypeClass = `<p class="event-type event-fb">${eventName}</p>`;
                } else if (eventType == "Trovo") {
                  eventTypeClass = `<p class="event-type event-trovo">${eventName}</p>`;
                } else if (eventType == "3P") {
                  eventTypeClass = `<p class="event-type event-3p">${eventName}</p>`;
                }

                let eventItem = `
                  <li class="event-item">
                    ${eventTypeClass}
                    <div class="event-files">
                      <a class="event-image-name" href=${eventImageURL}>${eventImageName}</a>
                      <a class="event-sound-name" href=${eventSoundURL}>${eventSoundName}</a>
                    </div>
                    ${eventImageDiv}
                  </li>`;
                $(".event-gallery").append(eventItem);
                
                /*
                var newHTML = obj[key][i]["settings"]["customHtml"].replace(/\"/g, '~3qt~').replace(/\n/g, "~lnb~");
                obj[key][i]["settings"]["customHtml"] = newHTML;
                var newCSS = obj[key][i]["settings"]["customCss"].replace(/\n/g, "~lnb~");
                obj[key][i]["settings"]["customCss"] = newCSS;
                var newJS = obj[key][i]["settings"]["customJs"].replace(/"/g, '~3qt~').replace(/\n/g, '~lnb~');
                obj[key][i]["settings"]["customJs"] = newJS;
                console.log("Variation [" + i + "] set!");
                */
              }
            }
          }
        }
      }

    } else {
      hideGallery();
    }
  });


  $("div#clear-fetch").on("click", function( event ) {
    $(".form-fetch-settings").find("textarea").val("");
    hideGallery();
  });

  function hideGallery() {
    // hide event gallery
    if ($(".event-gallery").hasClass("hidden") == false) {
      $(".event-gallery").addClass("hidden");
      $(".event-item").remove();
    }
    if ($(".toolset").hasClass("hidden") == false) {
      $(".toolset").addClass("hidden");
    }
  }

});

function fetchCheck(string) {
  let fetchStr = string.slice(0, 53);
  if (fetchStr == "fetch(\"https://streamlabs.com/api/v5/widget/alertbox\"") {
    console.log("Fetch passed.");
    return true;
  } else {
    console.log("Fetch failed.");
    return false;
  }
}