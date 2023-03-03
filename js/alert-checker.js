$( document ).ready(function() {
  var saveTextArea = $(".form-fetch-settings").find("textarea");

  saveTextArea.on("input", function() {
    var saveText = saveTextArea.val();

    if (fetchCheck(saveText)) {

      // show event gallery
      if ($(".event-gallery").hasClass("hidden")) {
        $(".event-gallery").removeClass("hidden");
      }

      var fetchCommand = saveText.slice(55, -2);
      alertObj = JSON.parse(fetchCommand);
      alertSettingsObj = JSON.parse(alertObj["body"]);
      var eventList = {}
      var eventNames = {"donation": "Donation", "merch": "SL Merch", "loyalty_store_redemption": "Cloudbot Redemption", "prime_sub_gift": "SL Ultra Gift", "streamlabscharitydonation": "SL Charity", "follow": "Twitch Follow", "sub": "Twitch Sub", "resub": "Twitch Resub", "host": "Twitch Host", "bits": "Twitch Bits", "raid": "Twitch Raid", "subscriber": "YT Sub", "sponsor": "YT Member", "fanfunding": "YT Super Chat", "facebook_follow": "FB Follow", "facebook_stars": "FB Stars", "facebook_like": "FB Like", "facebook_support": "FB Support", "facebook_support_gifter": "FB Support Gifter", "facebook_share": "FB Share", "trovo_follow": "Trovo Follow", "trovo_sub": "Trovo Sub", "trovo_raid": "Trovo Raid", "pledge": "Pledge", "sponsored_campaign": "Sponsored Campaign", "donordrivedonation": "Charity Streaming Donations", "eldonation": "Extra Life", "tiltifydonation": "Tiltify", "treat": "Treats", "justgivingdonation": "JustGiving", "gamewispsubscription": "Game Wisp"};

      //console.log(alertSettingsObj);
      const keys = Object.keys(alertSettingsObj);
      for (let i = 0; i < keys.length; i++) {
        const key = keys[i];

        if(key.includes("_image_href")) {
          let eventSetting = key.slice(0,-11);
          let eventName = eventNames[eventSetting];
          let eventImageURL = alertSettingsObj[key];
          let eventSoundURL = alertSettingsObj[eventSetting + "_sound_href"];
          let eventImageName = eventImageURL.substring(eventImageURL.lastIndexOf('/')+1);
          let eventSoundName = eventSoundURL.substring(eventSoundURL.lastIndexOf('/')+1);
          let eventImageType = eventImageURL.substring(eventImageURL.lastIndexOf('.')+1);
          let eventImageDiv;

          console.log(eventImageURL);
          if (!eventImageURL.includes("https://")) {
            eventImageURL = "https://streamlabs.com" + eventImageURL;
          }
          if (eventImageType == "gif" || eventImageType == "png" || eventImageType == "jpg") {
            eventImageDiv = `<img class="event-image" src=${eventImageURL}></img>`;
          } else if (eventImageType == "webm" || eventImageType == "mp4") {
            eventImageDiv = `<video loop="loop" class="event-video" src=${eventImageURL} autoplay muted></video>`;
          }

          let eventItem = `
            <li class="event-item">
              <p class="event-type">${eventName}</p>
              <div class="event-files">
                <p class="event-image-name">${eventImageName}</p>
                <p class="event-sound-name">${eventSoundName}</p>
              </div>
              ${eventImageDiv}
            </li>`;
          $(".event-gallery").append(eventItem);
        }
      }

    } else {
      // hide event gallery
      if ($(".event-gallery").hasClass("hidden") == false) {
        $(".event-gallery").addClass("hidden");
        $(".event-item").remove();
      }
    }
  });
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


