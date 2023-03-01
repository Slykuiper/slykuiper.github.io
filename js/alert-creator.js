$( document ).ready(function() {
  var defaultHTML = `<div id="alert-image-wrap">
    <div id="alert-image">{img}</div>
  </div>
  
  <div id="alert-text-wrap">
    <div id="alert-text">
      <div id="alert-message">{messageTemplate}</div>
      <div id="alert-user-message">{userMessage}</div>
    </div>
  </div>`;
  
  var defaultCSS = `.widget-AlertBox {
    position: relative;
  }
  body,
  html {
      height: 100%;
      width: 100%;
      overflow: hidden;
  }
  #wrap {
      position: relative;
      height: 100%;
      width: 100%;
  }
  #alert-box {
      height: 100%;
      width: 100%;
      position: absolute;
  }
  #alert-box.hidden,
  .hidden {
      opacity: 0;
  }
  #alert-text {
      padding: 20px;
      text-shadow: 0px 0px 1px #000, 0px 0px 2px #000, 0px 0px 3px #000, 0px 0px 4px #000, 0px 0px 5px #000;
  }
  #alert-message,
  #alert-user-message {
      text-align: center;
  }
  #alert-user-message img {
      vertical-align: middle;
      height: 1em;
  }
  #alert-image {
      position: relative;
  }
  #alert-image video {
      width: 100%;
      height: 100%;
      position: absolute;
      top: 0;
      left: 0;
  }
  #alert-message > span > span {
      display: inline-block;
  }
  #alert-image {
      z-index: 6;
      position: relative;
  }
  #alert-text {
      z-index: 6;
      position: relative;
  }
  #alert-text-wrap {
      z-index: 6;
      position: relative;
  }`;

  var defaultJS = ``;
  var defaultJSON = ``;
  $("#html-container > textarea").val(defaultHTML);
  $("#css-container > textarea").val(defaultCSS);
  $("#js-container > textarea").val(defaultJS);
  $("#json-container > textarea").val(defaultJSON);
  $("#m-layout-input-banner").prop("checked", true);
  
  $("div.expand").on("click", function( event ) {
    console.log("click!");
    $(this).find("i").toggleClass("fa-plus");
    $(this).find("i").toggleClass("fa-minus");
    
    var subsettingAddEntry = `<div class="subsetting"><div class="subtitle-column"><div class="entry entry-add"><i class="fa-solid fa-plus"></i></div></div></div>`;
    
    if ($(this).parents("div.setting-row").find("div.subsetting").length === 0) {
      $(this).parents("div.setting-row").append(subsettingAddEntry);
      $(this).parents("div.setting-row").find("div.subsetting").toggle();
    }
  
    if ($(this).parents("div.setting-row").find("div.subsetting").length > 0) {
      $(this).parents("div.setting-row").find("div.subsetting").toggle();
    }
  });
  
  $(".expand-code").on("click", function( event ) {
    $(this).find("i").toggleClass("fa-plus");
    $(this).find("i").toggleClass("fa-minus");
    
    var addCodeTab = `<div class="code-tab"><div class="entry entry-code"><i class="fa-solid fa-plus"></i></div></div>`;
    
    if ($(this).siblings("div.code-tabs").find("div.code-tab").length === 0) {
      // if there is no code tab, create one 
      $(this).siblings("div.code-tabs").append(addCodeTab);
      $(this).siblings("div.code-tabs").find("div.code-tab").toggle();
    }
  
    if ($(this).siblings("div.code-tabs").find("div.code-tab").length > 0) {
      // if there are code tabs, just hide it
      $(this).siblings("div.code-tabs").find("div.code-tab").toggle();
    }
  });
  
  $(".setting-row").on("click", ".entry.entry-remove", function() {
    $(this).parents("div.subsetting").remove();
  });
  
  $(".setting-row").on("click", ".entry.entry-remove-code", function() {
    $(this).parents("div.code-tab").remove();
  });
  
  $(".setting-row").on("click", ".entry.entry-add", function() {
    var options = {"default": "Alert Type", "donation": "SL Donations", "merch": "SL Merch", "loyalty_store_redemption": "SL Cloudbot Redemption", "prime_sub_gift": "SL Prime Gift", "streamlabscharitydonation": "SL Charity Donation", "follow": "Twitch Follows", "sub": "Twitch Subs", "resub": "Twitch Resub", "host": "Twitch Hosts", "bits": "Twitch Bits", "raid": "Twitch Raids", "subscriber": "YT Subs", "sponsor": "YT Members", "fanfunding": "YT Super Chats", "facebook_follow": "FB Follows", "facebook_stars": "FB Stars", "facebook_like": "FB Likes", "facebook_support": "FB Supports", "facebook_support_gifter": "FB Support Gifters", "facebook_share": "FB Shares", "trovo_follow": "Trovo Follows", "trovo_sub": "Trovo Subs", "trovo_raid": "Trovo Raids", "pledge": "Pledges", "sponsored_campaign": "Sponsored Campaign", "donordrivedonation": "Charity Streaming Donations", "eldonation": "Extra Life Donations", "tiltifydonation": "Tiltify Donations", "treat": "Treats", "justgivingdonation": "JustGiving", "gamewispsubscription": "Game Wisp"};
    
    var optionsArray = [];
    var messageTemplateArray = [];
    var messageSettingsArray = [];
    const keys = Object.keys(options);
    for (const [key, value] of Object.entries(options)) {
      if ($(this).parents("div.setting-row").attr("data-type") == "message") {
        if (key == "donation" || key == "eldonation" || key == "tiltifydonation" || key == "treat" || key == "merch" || key == "donordrivedonation" || key == "justgivingdonation" || key == "loyalty_store_redemption" ||key == "streamlabscharitydonation" || key == "bits" || key == "resub") {
          messageSettingsArray.push(`<option value="2` + `${key}` + `">` + `${value}</option>`);
        }
      } else if ($(this).parents("div.setting-row").attr("data-type") == "message_template") {
        messageTemplateArray.push(`<option value="` + `${key}` + `">` + `${value}</option>`);
      }
      else {
        if(key !== "resub") {
          optionsArray.push(`<option value="` + `${key}` + `">` + `${value}</option>`);
        }
      }
    }
    var entryArray = [];
    if ($(this).parents("div.setting-row").attr("data-type") == "message") {
      entryArray = messageSettingsArray;
    } else if ($(this).parents("div.setting-row").attr("data-type") == "message_template") {
      entryArray = messageTemplateArray;
    } else {
      entryArray = optionsArray;
    }
    
    var newHTML = $(this).parents("div.setting-row").find(".setting-column").html();
    var subsettingColumn = `<div class="subsetting-column" id="` + keys[0] + `">` + newHTML + `</div>`;
    
    var subsettingEntry = `<div class="subsetting"><div class="subtitle-column" id="` + keys[0] + `">` + `<div class="entry entry-remove"><i class="fa-solid fa-xmark"></i></div><select class="subsetting-name">` + entryArray + `</select></div>` + subsettingColumn + `</div>`;
    if (subsettingEntry.includes("radio-selected")) {
      subsettingEntry.replaceAll(/radio-selected/g, `radio-unselected`);
    }
    
    var subsettingAddPlusButton = `<div class="subsetting"><div class="subtitle-column"><div class="entry entry-add"><i class="fa-solid fa-plus"></i></div></div></div>`;
    $(this).parents("div.setting-row").append(subsettingEntry);
    $(this).parents("div.setting-row").find(".subsetting-column").find("*").each(function() {
      if (typeof $(this).attr("id") !== 'undefined' && $(this).attr("id") !== false && $(this).attr("id").indexOf("m-") != -1) {
          $(this).attr("id", $(this).attr("id").replace("m", "default"));
      }
      if (typeof $(this).attr("name") !== 'undefined' && $(this).attr("name") !== false && $(this).attr("name").indexOf("m-") != -1) {
          $(this).attr("name", $(this).attr("name").replace("m", "default"));
      }
      if (typeof $(this).attr("for") !== 'undefined' && $(this).attr("for") !== false && $(this).attr("for").indexOf("m-") != -1 ) {
          $(this).attr("for", $(this).attr("for").replace("m", "default"));
      }
      
      if ($(this).is("label")) {
        if ($(this).parent().attr("id") == "default" || $(this).parent().attr("id").indexOf("m-") != -1) {
          if ($(this).hasClass("radio-selected")) {
            $(this).removeClass("radio-selected");
            $(this).addClass("radio-unselected");
          }
        }
      }
      if ($(this).is("input:checkbox")) {
        if ($(this).parent().attr("id") == "default" || $(this).parent().attr("id").indexOf("m-") != -1) {
          $(this).siblings().html("Disabled");
        }
      }
    });
  
    $(this).parents("div.setting-row").append(subsettingAddPlusButton);
    $(this).parents("div.subsetting").remove();
    
    $("input:radio").on("change", $(this).parents("div.subsetting-column"), function() {
      var radioValue = $(this).is(':checked');
      var radioId = $(this).attr("id");
  
      if($(this).is(':checked')) {
        $(this).siblings().each(function() {
          if( $(this).prop("tagName") == "INPUT") {
            $(this).prop( "checked", false );
          };
          if( $(this).prop("tagName") == "LABEL") {
            if ($(this).attr("for") == radioId) {
              $(this).removeClass("radio-unselected");
              $(this).addClass("radio-selected");
              $(this).siblings().each(function() {
                $(this).removeClass("radio-selected");
                $(this).addClass("radio-unselected");
              });
            }
          };
        });
      }
    });
  
    $("div.ui-input-color > input:text").on("change", function() {
      var color = $(this).val();
      if (color.charAt(0) == "#") {
        $(this).siblings().css("background-color", color);
      }
    });

    $("div.ui-preview-color > input").on("change", function() {
      var hex = $(this).val();
      $(this).parent().css("background-color", hex);
      $(this).parent().siblings("input").val(hex);
    });

    $("input:checkbox").on("change", function() {
      if ($(this).prop("checked")) {
        $(this).siblings().html("Enabled");
      } else {
        $(this).siblings().html("Disabled");
      }
    });
    $(".slider").on("input", $(this).parents("div.subsetting-column"), function() {
      if ($(this).attr("id").includes("volume")) {
        var rangeValue = $(this).val() + "%";
      } else {
        var rangeValue = $(this).val() + "s";
      }
      var rangeId = $(this).attr("id");
      $(this).parent().siblings().each(function() {
          $(this).html(rangeValue);
      });
    });
  });
  
  $(".code-tabs").on("click", ".entry.entry-code", function() {
    var options = {"default": "Alert Type", "donation": "SL Donations", "merch": "SL Merch", "loyalty_store_redemption": "SL Cloudbot Redemption", "prime_sub_gift": "SL Prime Gift", "streamlabscharitydonation": "SL Charity Donation", "follow": "Twitch Follows", "sub": "Twitch Subs", "host": "Twitch Hosts", "bits": "Twitch Bits", "raid": "Twitch Raids", "subscriber": "YT Subs", "sponsor": "YT Members", "fanfunding": "YT Super Chats", "facebook_follow": "FB Follows", "facebook_stars": "FB Stars", "facebook_like": "FB Likes", "facebook_support": "FB Supports", "facebook_support_gifter": "FB Support Gifters", "facebook_share": "FB Shares", "trovo_follow": "Trovo Follows", "trovo_sub": "Trovo Subs", "trovo_raid": "Trovo Raids", "pledge": "Pledges", "sponsored_campaign": "Sponsored Campaign", "donordrivedonation": "Charity Streaming Donations", "eldonation": "Extra Life Donations", "tiltifydonation": "Tiltify Donations", "treat": "Treats", "justgivingdonation": "JustGiving", "gamewispsubscription": "Game Wisp"};
    
    var optionsArray = [];
    const keys = Object.keys(options);
    for (const [key, value] of Object.entries(options)) {
      optionsArray.push(`<option value="` + `${key}` + `">` + `${value}</option>`);
    }
  
    var codeTab = `<div class="code-tab"><div class="code-title" id="` + keys[0] + `"><div class="entry entry-remove-code"><i class="fa-solid fa-xmark"></i></div><select class="code-title-select">` + optionsArray + `</select></div></div>`;
    var addCodeTab = `<div class="code-tab"><div class="entry entry-code"><i class="fa-solid fa-plus"></i></div></div>`;
    
    $(this).parents("div.code-tabs").append(codeTab);
    $(this).parents("div.code-tabs").append(addCodeTab);
    $(this).parents("div.code-tab").remove();
  });
  
  $(".setting-row").on("change", "select.code-title-select", function() {
    var options = {"default": "Alert Type", "donation": "SL Donations", "merch": "SL Merch", "loyalty_store_redemption": "SL Cloudbot Redemption", "prime_sub_gift": "SL Prime Gift", "streamlabscharitydonation": "SL Charity Donation", "follow": "Twitch Follows", "sub": "Twitch Subs", "host": "Twitch Hosts", "bits": "Twitch Bits", "raid": "Twitch Raids", "subscriber": "YT Subs", "sponsor": "YT Members", "fanfunding": "YT Super Chats", "facebook_follow": "FB Follows", "facebook_stars": "FB Stars", "facebook_like": "FB Likes", "facebook_support": "FB Supports", "facebook_support_gifter": "FB Support Gifters", "facebook_share": "FB Shares", "trovo_follow": "Trovo Follows", "trovo_sub": "Trovo Subs", "trovo_raid": "Trovo Raids", "pledge": "Pledges", "sponsored_campaign": "Sponsored Campaign", "donordrivedonation": "Charity Streaming Donations", "eldonation": "Extra Life Donations", "tiltifydonation": "Tiltify Donations", "treat": "Treats", "justgivingdonation": "JustGiving"};
    $(this).toggle();
    var entryName = $("option:selected", this).val();
    $(this).parents(".code-title").attr("id", entryName);
    
    var codeType = $(this).parents(".code-header").find(".title").html().toLowerCase();
    var codeName = entryName + "_custom_" + codeType + "_input";
    var codeWindow = `<textarea id="` + codeName + `" style="resize: none;" placeholder="Enter ` + options[entryName] + ` custom ` + codeType.toUpperCase() + `..."></textarea>`;
    
    var codeButton = `<div class="code-button" data-type="` + entryName +  `">` + options[entryName] + `</div>`
    $(this).parents(".code-title").append(codeButton);
    $(this).parents(".code-setting").find("div#" + codeType + "-container").append(codeWindow);
    
    $(this).parents(".code-setting").find("div#" + codeType + "-container > textarea").each(function() {
        if ($(this).attr("id") !== codeName) {
          $(this).hide();
        }
      });
    $(".code-button").on("click", function() {
      var codeType = $(this).parents(".code-header").find(".title").html().toLowerCase();
      var codeName = $(this).attr("data-type");
      var codeInput = codeName + "_custom_" + codeType +  "_input";
      $(this).parents(".code-setting").find("textarea").each(function() {
        if ($(this).attr("id") == codeInput) {
          $(this).show();
        } else {$(this).hide();}
      });
    });
  });
  
  $("div.code-header > div.title").on("click", function() {
    var textareaName = $(this).html().toLowerCase() + "-container-input";
    $(this).parents(".code-setting").find("textarea").each(function() {
        if ($(this).attr("id") == textareaName) {
          $(this).show();
        } else {$(this).hide();}
      });
  })
  
  $(".setting-row").on("change", "select.subsetting-name", function() {
    var entryName = $("option:selected", this).val();
    $(this).parents(".subtitle-column").attr("id", entryName);
    $(this).parents(".subsetting").find(".subsetting-column").attr("id", entryName);
    $(this).parents(".subsetting").find(".subsetting-column").find("*").each(function() {
      if (typeof $(this).attr("id") !== 'undefined' && $(this).attr("id") !== false) {
          var attrId = $(this).attr("id").split("-");
          var newAttrId = [entryName];
          for (let i = 1; i < attrId.length; i++) {
            newAttrId.push(attrId[i]);
          }
          $(this).attr("id", newAttrId.join("_"));
      }
      if (typeof $(this).attr("name") !== 'undefined' && $(this).attr("name") !== false) {
          var attrName = $(this).attr("name").split("-");
          var newAttrName = [entryName];
          for (let i = 1; i < attrName.length; i++) {
            newAttrName.push(attrName[i]);
          }
          $(this).attr("name", newAttrName.join("_"));
      }
      if (typeof $(this).attr("for") !== 'undefined' && $(this).attr("for") !== false) {
          var attrFor = $(this).attr("for").split("-");
          var newAttrFor = [entryName];
          for (let i = 1; i < attrFor.length; i++) {
            newAttrFor.push(attrFor[i]);
          }
          $(this).attr("for", newAttrFor.join("_"));
      }
    });
    if ($(this).parents(".setting-row").attr("data-type") == "message_template") {
      var messageTemplates = {"donation": `{name} tipped {amount}!`, "merch": `{name} bought {product}`, "loyalty_store_redemption": `{name} redeemed {product}!`, "prime_sub_gift": `{name} gifted {giftType} Ultra subscription to {streamer}`, "streamlabscharitydonation": `{name} donated {amount} via Streamlabs charity`, "follow": `{name} is now following!`, "sub": `{name} just subscribed!`, "host": `{name} is now hosting my stream with {count} viewers!`, "bits": `{name} cheered! x{amount}`, "raid": `{name} is raiding with a party of {count}!`, "subscriber": `{name} just subscribed!`, "sponsor": `{name} became a member!`, "fanfunding": `{name} tipped {amount} via Super Chat!`, "facebook_follow": `{name} is now following!`, "facebook_stars": `{name} has sent {amount} stars!`, "facebook_like": `{name} liked the stream!`, "facebook_support": `{name} has subscribed!`, "facebook_support_gifter": `{gifter} has gifted {count} subs!`, "facebook_share": `{name} has shared the stream!`, "trovo_follow": `{name} is now following!`, "trovo_sub": `{name} just subscribed!`, "trovo_raid": `{name} is raiding with a party of {count}!`, "pledge": `{name} pledged {amount} via Patreon`, "sponsored_campaign": `{name} interacted with {campaign}`, "donordrivedonation": `{name} donated {amount} to {charityName}`, "eldonation": `{name} donated {amount} via extralife`, "tiltifydonation": `{name} donated {amount} via tiltify`, "treat": `{name} bought you a {title} treat`, "justgivingdonation": `{name} donated {amount} via JustGiving`, "gamewispsubscription": `{name} just subscribed!`};
      $(this).parent().siblings(".subsetting-column").find("input").val(messageTemplates[entryName]);
    }
  });
  
  $("input:radio").on("change", function() {
    var radioValue = $(this).is(':checked');
    var radioId = $(this).attr("id");
    if($(this).is(':checked')) {
      $(this).siblings().each(function() {
        if( $(this).prop("tagName") == "INPUT") {
          $(this).prop( "checked", false );
        };
        if( $(this).prop("tagName") == "LABEL") {
          if ($(this).attr("for") == radioId) {
            $(this).removeClass("radio-unselected");
            $(this).addClass("radio-selected");
            $(this).siblings().each(function() {
              $(this).removeClass("radio-selected");
              $(this).addClass("radio-unselected");
            });
          }
        };
      });
    }
  });
  
  $("div.ui-input-color > input:text").on("change", function() {
    var color = $(this).val();
    if (color.charAt(0) == "#") {
      $(this).siblings().css("background-color", color);
    }
  });

  $("div.ui-preview-color > input").on("change", function() {
    var hex = $(this).val();
    $(this).parent().css("background-color", hex);
    $(this).parent().siblings("input").val(hex);
    
  });

  
  $("input:checkbox").on("change", function() {
    if ($(this).prop("checked")) {
      $(this).siblings().html("Enabled");
    } else {
      $(this).siblings().html("Disabled");
    }
  });
  
  $("#m-custom_html_enabled-setting > input:checkbox").on("change", function() {
    if ($(this).prop("checked")) {
      
      $("div.setting-row").each( function() {
        if ($(this).attr("data-type") == "custom_html") {
          $(this).css("display", "block");
        }
        if ($(this).attr("data-type") == "custom_css") {
          $(this).css("display", "block");
        }
        if ($(this).attr("data-type") == "custom_js") {
          $(this).css("display", "block");
        }
        if ($(this).attr("data-type") == "custom_json") {
          $(this).css("display", "block");
        }
      });
      
    } else {
      $("div.setting-row").each( function() {
        if ($(this).attr("data-type") == "custom_html") {
          $(this).css("display", "none");
        }
        if ($(this).attr("data-type") == "custom_css") {
          $(this).css("display", "none");
        }
        if ($(this).attr("data-type") == "custom_js") {
          $(this).css("display", "none");
        }
        if ($(this).attr("data-type") == "custom_json") {
          $(this).css("display", "none");
        }
      });
    }
  });
  
  $(".form-fetch-settings").find("textarea").on("input", function() {
    if (fetchCheck($(this).val())) {
      if ($("#save-button").hasClass("locked")) {
        $("#save-button").removeClass("locked");
      }
    } else {
      if ($("#save-button").hasClass("locked") == false) {
        $("#save-button").addClass("locked");
      }
    }
  });
  
  $(".slider").on("input", function() {
    if ($(this).attr("id").includes("volume")) {
      var rangeValue = $(this).val() + "%";
    } else {
      var rangeValue = $(this).val() + "s";
    }
    
    if ($(this).parents("div.setting-column").length) {
      $(this).parents("div.setting-column").find("div.ui-counter").html(rangeValue);
    }
    if ($(this).parents("div.subsetting-column").length) {
      $(this).parents("div.setting-column").find("div.ui-counter").html(rangeValue);
    }
  });
  
  $("button").on("click", function() {
    var textarea = $(this).parent().find("textarea");
    textarea.select();
    document.execCommand('copy');
  });

});

function fetchCheck(string) {
  let fetchStr = string.slice(0, 53);
  if (fetchStr == "fetch(\"https://streamlabs.com/api/v5/widget/alertbox\"") {
    return true;
  } else {
    return false;
  }
}

function saveAlertBox() {
  var saveTextArea = $(".form-fetch-settings").find("textarea");
  var saveText = saveTextArea.val();
  if (fetchCheck(saveText)) {
    var fetchCmd = saveText.slice(0, 55);
    var fetchCommand = saveText.slice(55, -2);
    alertObj = JSON.parse(fetchCommand);
    alertSettings = alertObj["body"];
    alertSettingsObj = JSON.parse(alertSettings);
    
    //saveTextArea.val(JSON.stringify(alertSettingsObj, null, 4));
    var settingsAlertDefaults = {};
    var settingAlertEvents = {};
    var settingsTwitch = {};
    var settingsYouTube = {};
    var settingsFacebook = {};
    var settingsTrovo = {};
    settingsAlertDefaults["main_enabled"] = true;
    var messageTemplateDefaults = {"donation": `{name} tipped {amount}!`, "merch": `{name} bought {product}`, "loyalty_store_redemption": `{name} redeemed {product}!`, "prime_sub_gift": `{name} gifted {giftType} prime subscription to {streamer}`, "streamlabscharitydonation": `{name} donated {amount} via Streamlabs charity`, "follow": `{name} is now following!`, "sub": `{name} just subscribed!`, "host": `{name} is now hosting my stream with {count} viewers!`, "bits": `{name} cheered! x{amount}`, "raid": `{name} is raiding with a party of {count}!`, "subscriber": `{name} just subscribed!`, "sponsor": `{name} became a member!`, "fanfunding": `{name} tipped {amount} via Super Chat!`, "facebook_follow": `{name} is now following!`, "facebook_stars": `{name} has sent {amount} stars!`, "facebook_like": `{name} liked the stream!`, "facebook_support": `{name} has subscribed!`, "facebook_support_gifter": `{gifter} has gifted {count} subs!`, "facebook_share": `{name} has shared the stream!`, "trovo_follow": `{name} is now following!`, "trovo_sub": `{name} just subscribed!`, "trovo_raid": `{name} is raiding with a party of {count}!`, "pledge": `{name} pledged {amount} via Patreon`, "sponsored_campaign": `{name} interacted with {campaign}`, "donordrivedonation": `{name} donated {amount} to {charityName}`, "eldonation": `{name} donated {amount} via extralife`, "tiltifydonation": `{name} donated {amount} via tiltify`, "treat": `{name} bought you a {title} treat`, "justgivingdonation": `{name} donated {amount} via JustGiving`, "resub": `{name} resubscribed for {months} months!`, "gamewispsubscription": `{name} just subscribed!`};

    $("div.setting").each(function() {
      var dataType = $(this).parent(".setting-row").attr("data-type");
      var settingName = "main_" + dataType;
      var settingValue = 0;

      if (dataType == "layout") {
        $(this).find("div.setting-column input").each(function() {
          if ($(this).prop("checked")) {
            settingValue = $(this).val();
          }
        });
        settingsAlertDefaults[settingName] = settingValue;
      }
      if (dataType == "animation") {
        $(this).find("div.setting-column > select").each(function() {
          settingName = "main_" + $(this).attr("id").split("-")[1] + "_" + $(this).parents("div.setting-row").attr("data-type");
          settingValue = $(this).val();
          settingsAlertDefaults[settingName] = settingValue;
        });
      }
      if (dataType == "alert_duration" || dataType == "sound_volume" || dataType == "text_delay") {
        settingValue = $(this).find("div.ui-counter").html();
        if (dataType == "alert_duration" || dataType == "text_delay") {
          settingsAlertDefaults[settingName] = Number(settingValue.replace("s", ""));
        }
        if (dataType == "sound_volume") {
          settingsAlertDefaults[settingName] = Number(settingValue.replace("%", ""));
        }
      }
      if (dataType == "image_href" || dataType == "sound_href" || dataType == "message_template") {
        settingValue = $(this).find("div.ui-input > input").val();
        settingsAlertDefaults[settingName] = settingValue;
      }
      if (dataType == "text_animation") {
        $(this).find("select").each(function() {
          settingValue = $(this).val();
          settingsAlertDefaults[settingName] = settingValue;
        });
      }
      if (dataType == "font" || dataType == "message") {
        $(this).find("select").each(function() {
          settingName = "main_" + $(this).attr("id").split("-")[1];
          settingValue = $(this).val();
          settingsAlertDefaults[settingName] = settingValue;
        });
        $(this).find(".ui-input-white").each(function() {
          settingName = "main_" + $(this).find("input").attr("id").split("-")[1];
          settingValue = $(this).find("input").val();
          if (settingName.includes("font_size")) {
            settingValue = $(this).find("input").val().replace("px", "");
          }
          settingsAlertDefaults[settingName] = settingValue;
        });
        $(this).find(".ui-input-color").each(function() {
          settingName = "main_" + $(this).find("input").attr("id").split("-")[1];
          settingValue = $(this).find("input").val();
          settingsAlertDefaults[settingName] = settingValue;
        });
      }
      if (dataType == "custom_html_enabled") {
        $(this).find(".setting-column input").each(function() {
          settingValue = $(this).prop("checked");
          settingsAlertDefaults[settingName] = settingValue;
        });
      }
    });

    $("div.subsetting").each(function() {
      $(this).find(".subtitle-column").each(function() {
        if (typeof $(this).attr("id") !== 'undefined' && $(this).attr("id") !== false && $(this).attr("id") !== "default") {
          var dataType = $(this).parents(".setting-row").attr("data-type");
          var settingName = $(this).attr("id") + "_" + dataType;
          var settingValue = 0;

          if (dataType == "layout") {
            $(this).siblings().find("input").each(function() {
              if ($(this).is(':checked')) {
                settingValue = $(this).val();
              } else {
                settingValue = "above";
              }
            });
            settingAlertEvents[settingName] = settingValue;
          }
          if (dataType == "animation") {
            $(this).siblings().find("select").each(function() {
              settingName = $(this).attr("id");
              settingValue = $(this).val();
              settingAlertEvents[settingName] = settingValue;
            });
          }
          if (dataType == "alert_duration" || dataType == "sound_volume" || dataType == "text_delay") {
            settingValue = $(this).siblings().find("div.ui-counter").html();
            if (dataType == "alert_duration" || dataType == "text_delay") {
              settingAlertEvents[settingName] = Number(settingValue.replace("s", ""));
            }
            if (dataType == "sound_volume") {
              settingAlertEvents[settingName] = Number(settingValue.replace("%", ""));
            }
          }
          if (dataType == "image_href" || dataType == "sound_href" || dataType == "message_template") {
            settingValue = $(this).siblings().find("div.ui-input > input").val();
            settingAlertEvents[settingName] = settingValue;
          }
          if (dataType == "text_animation") {
            $(this).siblings().find("select").each(function() {
              settingValue = $(this).val();
              settingAlertEvents[settingName] = settingValue;
            });
          }
          if (dataType == "font" || dataType == "message") {
            $(this).siblings().find("select").each(function() {
              settingValue = $(this).val();
              settingName = $(this).attr("id");
              settingAlertEvents[settingName] = settingValue;
            });
            $(this).siblings().find(".ui-input-white").each(function() {
              settingValue = $(this).find("input").val();
              settingName = $(this).find("input").attr("id");
              if (settingName.includes("font_size")) {
                settingValue = $(this).find("input").val().replace("px", "");
              }
              settingAlertEvents[settingName] = settingValue;
            });
            $(this).siblings().find(".ui-input-color").each(function() {
              settingValue = $(this).find("input").val();
              settingName = $(this).find("input").attr("id");
              settingAlertEvents[settingName] = settingValue;
            });
          }
          if (dataType == "custom_html_enabled") {
            $(this).siblings().find("input").each(function() {
              settingValue = $(this).prop("checked");
              settingAlertEvents[settingName] = settingValue;
            });
          }
        }
      });
    });

    $("div.code-setting").find(".container > textarea").each(function() {
      var settingName = "";
      var settingValue = "";
      var dataType = $(this).parents(".setting-row").attr("data-type");
      if ($(this).index() === 0) {
        // main setting
        settingName = "main_" + dataType;
        settingValue = $(this).val();
        settingsAlertDefaults[settingName] = settingValue;
      } else {
        // sub setting
        settingName = $(this).attr("id").replace("_input", "");
        settingValue = $(this).val();
        settingAlertEvents[settingName] = settingValue;
      }
    });

    var allSettings = {
      "donation_variations": [],
      "merch_variations": [],
      "pledge_variations": [],
      "eldonation_variations": [],
      "tiltifydonation_variations": [],
      "gamewispsubscription_variations": [],
      "treat_variations": [],
      "donordrivedonation_variations": [],
      "justgivingdonation_variations": [],
      "loyalty_store_redemption_variations": [],
      "sponsored_campaign_variations": [],
      "prime_sub_gift_variations": [],
      "streamlabscharitydonation_variations": [],
      "subscriber_variations": [],
      "sponsor_variations": [],
      "fanfunding_variations": [],
      "follow_variations": [],
      "sub_variations": [],
      "host_variations": [],
      "bit_variations": [],
      "raid_variations": [],
      "facebook_follow_variations": [],
      "facebook_stars_variations": [],
      "facebook_like_variations": [],
      "facebook_support_variations": [],
      "facebook_support_gifter_variations": [],
      "facebook_share_variations": [],
      "trovo_follow_variations": [],
      "trovo_sub_variations": [],
      "trovo_raid_variations": [],
      "background_color": "#151515",
      "alert_delay": 0,
      "moderation_delay": 0,
      "censor_streamer_recent_events": false,
      "unlimited_media_moderation_delay": false,
      "layout": settingsAlertDefaults["main_layout"],
      "display_mtg_codes": true,
      "automatically_reset_session": false,
      "donation_moderation": true,
      "donation_clipping_enabled": true,
      "interrupt_mode": false,
      "interrupt_mode_delay": 0.5,
      "alerts_master_sound_volume": 100,
      "tts_master_sound_volume": 100,
      "prime_sub_gift_enable_confetti": true,
      "mobile_custom_theme_id": 1,
      "prime_sub_enabled": true,
      "auto_host_enabled": false,
      "host_viewer_minimum": 0,
      "merch_moderation": true,
      "loyalty_store_redemption_moderation": true,
      "sponsored_campaign_moderation": true,
      "gamewispsubscription_resub_message_template": "{name} resubscribed for {months} months!",
      "gamewispsubscription_tier_upgrade_message_template": "{name} upgraded for Tier {tier}!",
      "auto_streamlabscharitydonation_enabled": false,
      "streamlabscharitydonation_viewer_minimum": 0,
      "recent_events_host_min_viewer_count": 0,
      "recent_events_raid_min_viewer_count": 0,
      "raid_raider_minimum": 0,
      "merch_use_custom_image": true,
      "loyalty_store_redemption_use_custom_image": true,
      "donation_gif_enabled": true,
      "donation_gfycat_library_enabled": true,
      "donation_gif_library_enabled": true,
      "donation_gif_animation": "before",
      "donation_max_gif_duration": 4,
      "donation_gif_library_defaults": "[1,2,3,4,5,6]",
      "streamlabscharitydonation_gif_enabled": true,
      "donation_gifs_min_amount_to_share": 1,
      "streamlabscharitydonation_gifs_min_amount_to_share": 1,
      "streamlabscharitydonation_gfycat_library_enabled": true,
      "streamlabscharitydonation_gif_library_enabled": true,
      "streamlabscharitydonation_gif_animation": "before",
      "streamlabscharitydonation_max_gif_duration": 4,
      "streamlabscharitydonation_gif_library_defaults": "[1,2,3,4,5,6]",
      "donation_tts_enabled": false,
      "donation_tts_include_message_template": false,
      "donation_tts_language": "en",
      "donation_tts_security": 1,
      "donation_tts_repetition_block_length": 0,
      "donation_tts_volume": 75,
      "streamlabscharitydonation_tts_enabled": false,
      "streamlabscharitydonation_tts_include_message_template": false,
      "streamlabscharitydonation_tts_language": "en",
      "streamlabscharitydonation_tts_security": 1,
      "streamlabscharitydonation_tts_repetition_block_length": 0,
      "streamlabscharitydonation_tts_volume": 75,
      "resub_tts_enabled": false,
      "resub_tts_include_message_template": false,
      "resub_tts_language": "en",
      "resub_tts_security": 1,
      "resub_tts_repetition_block_length": 0,
      "resub_tts_volume": 75,
      "bits_tts_enabled": false,
      "bits_tts_include_message_template": false,
      "bits_tts_language": "en",
      "bits_tts_security": 1,
      "bits_tts_repetition_block_length": 0,
      "bits_tts_volume": 75,
      "trovo_resub_tts_enabled": false,
      "trovo_resub_tts_include_message_template": false,
      "trovo_resub_tts_language": "Salli",
      "trovo_resub_tts_security": 1,
      "trovo_resub_tts_repetition_block_length": 0,
      "trovo_resub_tts_volume": 75,
      "facebook_stars_tts_enabled": false,
      "facebook_stars_tts_include_message_template": false,
      "facebook_stars_tts_language": "en",
      "facebook_stars_tts_security": 1,
      "facebook_stars_tts_repetition_block_length": 0,
      "facebook_stars_tts_volume": 75,
      "fanfunding_tts_enabled": false,
      "fanfunding_tts_include_message_template": false,
      "fanfunding_tts_language": "en",
      "fanfunding_tts_security": 1,
      "fanfunding_tts_repetition_block_length": 0,
      "fanfunding_tts_volume": 75,
      "streamlabscharitydonation_alert_message_min_amount": 0,
      "justgivingdonation_alert_message_min_amount": 0,
      "donordrivedonation_alert_message_min_amount": 0,
      "donation_tts_min_amount": 0,
      "streamlabscharitydonation_tts_min_amount": 0,
      "recent_events_donation_min_amount": 0,
      "donation_alert_message_min_amount": 0,
      "donation_alert_min_amount": 0,
      "eldonation_alert_message_min_amount": 0,
      "facebook_stars_alert_min_amount": 0,
      "facebook_stars_alert_message_min_amount": 0,
      "facebook_stars_tts_min_amount": 0,
      "recent_events_fanfunding_min_amount": 0,
      "fanfunding_alert_min_amount": 0,
      "fanfunding_alert_message_min_amount": 0,
      "fanfunding_tts_min_amount": 0,
      "recent_events_bits_min_amount": 0,
      "streamlabscharitydonation_alert_min_amount": 0,
      "recent_events_streamlabscharitydonation_min_amount": 0,
      "tiltifydonation_alert_message_min_amount": 0,
      "recent_events_tiltifydonation_min_amount": 0,
      "bits_alert_min_amount": 0,
      "bits_alert_message_min_amount": 0,
      "bits_tts_min_amount": 0,
      "show_donation_message": true,
      "show_trovo_resub_message": true,
      "show_fanfunding_message": true,
      "show_bits_message": true,
      "show_resub_message": true,
      "show_streamlabscharitydonation_message": true,
      "show_loyalty_store_redemption_message": true,
      "show_justgivingdonation_message": true,
      "show_donordrivedonation_message": true,
      "show_merch_message": true,
      "show_treat_message": true,
      "show_tiltifydonation_message": true,
      "show_eldonation_message": true,
      "facebook_show_stars_message": true,
      "member_gift_message_template": "{gifter} has gifted {amount} memberships to viewers!",
      "member_gift_message_level_template": "{gifter} has gifted {amount} ({levelName}) memberships to viewers!",
      "member_gif_image_href": "https://uploads.twitchalerts.com/image-defaults/5ec6dc0e2bf09.gif",
      "member_gift_sound_href": "https://uploads.twitchalerts.com/sound-defaults/positive-win-game-sound-5.ogg",
      "sticker_text_delay": 0,
      "sticker_font_size": 10,
      "sticker_alert_duration": 0,
      "sticker_message_font_size": 10,
      "effect_text_delay": 0,
      "effect_font_size": 10,
      "effect_alert_duration": 0,
      "effect_message_font_size": 10,
      "trovo_raid_raider_minimum": 0,
      "pledge_message_font_size": 10,
      "prime_sub_gift_message_font_size": 10
  }

    var eventsTypes = ["donation", "merch", "loyalty_store_redemption", "prime_sub_gift", "streamlabscharitydonation", "follow", "sub", "host", "bits", "raid", "subscriber", "sponsor", "fanfunding", "facebook_follow", "facebook_stars", "facebook_like", "facebook_support", "facebook_support_gifter", "facebook_share", "trovo_follow", "trovo_sub", "trovo_raid", "pledge", "sponsored_campaign", "donordrivedonation", "eldonation", "tiltifydonation", "treat", "justgivingdonation", "gamewispsubscription"];

    eventsTypes.forEach(function (event) {
      allSettings[event + "_enabled"] = true;
      allSettings[event + "_layout"] = settingAlertEvents[event + "_layout"];
      allSettings[event + "_message_template"] = settingAlertEvents[event + "_message_template"];
      allSettings[event + "_text_animation"] = settingAlertEvents[event + "_text_animation"];
      allSettings[event + "_image_href"] = settingAlertEvents[event + "_image_href"];
      allSettings[event + "_sound_href"] = settingAlertEvents[event + "_sound_href"];
      allSettings[event + "_sound_volume"] = settingAlertEvents[event + "_sound_volume"];
      allSettings[event + "_font"] = settingAlertEvents[event + "_font"];
      allSettings[event + "_font_size"] = settingAlertEvents[event + "_font_size"];
      allSettings[event + "_font_weight"] = settingAlertEvents[event + "_font_weight"];
      allSettings[event + "_font_color"] = settingAlertEvents[event + "_font_color"];
      allSettings[event + "_font_color2"] = settingAlertEvents[event + "_font_color2"];
      allSettings[event + "_alert_duration"] = settingAlertEvents[event + "_alert_duration"];
      allSettings[event + "_text_delay"] = settingAlertEvents[event + "_text_delay"];
      allSettings[event + "_show_animation"] = settingAlertEvents[event + "_show_animation"];
      allSettings[event + "_hide_animation"] = settingAlertEvents[event + "_hide_animation"];
      allSettings[event + "_custom_html_enabled"] = settingAlertEvents[event + "_custom_html_enabled"];
      allSettings[event + "_custom_html"] = settingAlertEvents[event + "_custom_html"];
      allSettings[event + "_custom_js"] = settingAlertEvents[event + "_custom_js"];
      allSettings[event + "_custom_css"] = settingAlertEvents[event + "_custom_css"];
      allSettings[event + "_custom_json"] = settingAlertEvents[event + "_custom_json"];
    });

    var messageEvents = ["donation", "bits", "resub", "loyalty_store_redemption", "streamlabscharitydonation", "justgivingdonation", "donordrivedonation", "merch", "treat", "tiltifydonation", "eldonation", "fanfunding", "trovo_resub", "facebook_stars"];

    messageEvents.forEach(function (event) {
      allSettings[event + "_message_font_size"] = settingAlertEvents[event + "_message_font_size"];
      allSettings[event + "_message_font"] = settingAlertEvents[event + "_message_font"];
      allSettings[event + "_message_font_weight"] = settingAlertEvents[event + "_message_font_weight"];
      allSettings[event + "_message_font_color"] = settingAlertEvents[event + "_message_font_color"];
      allSettings[event + "_message_allow_emotes"] = true;
    });
    // if editable settings aren't defined, pull from defaults
    const keys = Object.keys(allSettings);
    for (let i = 0; i < keys.length; i++) {
      const key = keys[i];

      if (allSettings[key] == undefined) {
        if(key.includes("_layout")) {allSettings[key] = settingsAlertDefaults["main_layout"];}
        if(key.includes("_message_template")) {
          var splitKey = key.split("_message_template");
          allSettings[key] = messageTemplateDefaults[splitKey[0]];
        }
        if(key.includes("_text_animation")) {allSettings[key] = settingsAlertDefaults["main_text_animation"];}
        if(key.includes("_image_href")) {allSettings[key] = settingsAlertDefaults["main_image_href"];}
        if(key.includes("_sound_href")) {allSettings[key] = settingsAlertDefaults["main_sound_href"];}
        if(key.includes("_sound_volume")) {allSettings[key] = settingsAlertDefaults["main_sound_volume"];}
        if(key.includes("_font") && !key.includes("_message") && !key.includes("size") && !key.includes("weight") && !key.includes("color")) {
          allSettings[key] = settingsAlertDefaults["main_font"];
        }
        if(key.includes("_font_size") && !key.includes("_message")) {
          allSettings[key] = settingsAlertDefaults["main_font_size"];
        }
        if(key.includes("_font_weight") && !key.includes("_message")) {
          allSettings[key] = settingsAlertDefaults["main_font_weight"];
        }
        if(key.includes("_font_color") && !key.includes("_message") && !key.includes("color2")) {
          allSettings[key] = settingsAlertDefaults["main_font_color"];
        }
        if(key.includes("_font_color2")) {allSettings[key] = settingsAlertDefaults["main_font_color2"];}
        if(key.includes("_alert_duration")) {allSettings[key] = settingsAlertDefaults["main_alert_duration"];}
        if(key.includes("_text_delay")) {allSettings[key] = settingsAlertDefaults["main_text_delay"];}
        if(key.includes("_show_animation")) {allSettings[key] = settingsAlertDefaults["main_show_animation"];}
        if(key.includes("_hide_animation")) {allSettings[key] = settingsAlertDefaults["main_hide_animation"];}
        if(key.includes("_custom_html_enabled")) {allSettings[key] = settingsAlertDefaults["main_custom_html_enabled"];}
        if(key.includes("_custom_html") && !key.includes("_enabled")) {allSettings[key] = settingsAlertDefaults["main_custom_html"];}
        if(key.includes("_custom_js") && !key.includes("_json")) {allSettings[key] = settingsAlertDefaults["main_custom_js"];}
        if(key.includes("_custom_css")) {allSettings[key] = settingsAlertDefaults["main_custom_css"];}
        if(key.includes("_custom_json")) {allSettings[key] = settingsAlertDefaults["main_custom_json"];}
        if(key.includes("_message_font_size")) {
          allSettings[key] = settingsAlertDefaults["main_message_font_size"];
        }
        if(key.includes("_message_font") && !key.includes("size") && !key.includes("weight") && !key.includes("color")) {
          allSettings[key] = settingsAlertDefaults["main_message_font"];
        }
        if(key.includes("_message_font_weight")) {allSettings[key] = settingsAlertDefaults["main_message_font_weight"];}
        if(key.includes("_message_font_color")) {allSettings[key] = settingsAlertDefaults["main_message_font_color"];}
      }
      
      if(key.includes("_custom_html") && !key.includes("_enabled")) {
        var newHTML1 = allSettings[key];
        if (!newHTML1) {
          allSettings[key] = null;
        } else {
          var newHTMLKey = newHTML1.replace(/\"/g, '~3qt~').replace(/\n/g, "\\n").replace(/\t/g, "\\t");
          allSettings[key] = newHTMLKey;
        }
      }

      if(key.includes("_custom_js") && !key.includes("_json")) {
        var newJS1 = allSettings[key];
        if (!newJS1) {
          allSettings[key] = null;
        } else {
          var newJSKey = newJS1.replace(/"/g, '~3qt~').replace(/\n/g, '\\n');
          allSettings[key] = newJSKey;
        }
      }

      if(key.includes("_custom_json")) {
        var newJSON = allSettings[key];
        if (!newJSON) {
          allSettings[key] = null;
        } else {
          allSettings[key] = JSON.parse(newJSON);
        }
      }
      
      if(key.includes("_custom_css")) {
        var newCSS1 = allSettings[key];
        if (!newCSS1) {
          allSettings[key] = null;
        } else {
          var newCSSKey = newCSS1.replace(/\n/g, "\\n").replace(/\t/g, "\\t");
          allSettings[key] = newCSSKey;
        }
      }
    }

    $(".form").find("*").each(function() {
      if ($(this).attr("id") == "twitch") {
        var twitchKeys = ["donation_variations","merch_variations","pledge_variations","eldonation_variations","tiltifydonation_variations","gamewispsubscription_variations","treat_variations","donordrivedonation_variations","justgivingdonation_variations","loyalty_store_redemption_variations","sponsored_campaign_variations","prime_sub_gift_variations","streamlabscharitydonation_variations","background_color","alert_delay","moderation_delay","censor_streamer_recent_events","unlimited_media_moderation_delay","layout","display_mtg_codes","automatically_reset_session","donation_layout","donation_enabled","donation_tts_enabled","donation_tts_include_message_template","donation_tts_language","donation_tts_security","donation_tts_repetition_block_length","donation_tts_volume","donation_message_template","donation_text_animation","donation_image_href","donation_sound_href","donation_sound_volume","donation_font","donation_font_size","donation_font_weight","donation_font_color","donation_font_color2","donation_alert_duration","donation_text_delay","donation_alert_min_amount","recent_events_donation_min_amount","donation_alert_message_min_amount","donation_tts_min_amount","donation_moderation","show_donation_message","donation_show_animation","donation_hide_animation","donation_custom_html_enabled","donation_custom_html","donation_custom_js","donation_custom_css","donation_custom_json","donation_message_font_size","donation_message_font","donation_message_font_weight","donation_message_font_color","donation_message_allow_emotes","donation_gif_enabled","donation_gifs_min_amount_to_share","donation_gfycat_library_enabled","donation_gif_library_enabled","donation_gif_animation","donation_max_gif_duration","donation_gif_library_defaults","donation_clipping_enabled","pledge_layout","pledge_enabled","pledge_message_template","pledge_text_animation","pledge_image_href","pledge_sound_href","pledge_sound_volume","pledge_font","pledge_font_size","pledge_font_weight","pledge_font_color","pledge_font_color2","pledge_alert_duration","pledge_text_delay","pledge_show_animation","pledge_hide_animation","pledge_custom_html_enabled","pledge_custom_html","pledge_custom_js","pledge_custom_css","pledge_custom_json","eldonation_layout","eldonation_enabled","eldonation_message_template","eldonation_text_animation","eldonation_image_href","eldonation_sound_href","eldonation_sound_volume","eldonation_font","eldonation_font_size","eldonation_font_weight","eldonation_font_color","eldonation_font_color2","eldonation_alert_duration","eldonation_text_delay","eldonation_show_animation","eldonation_hide_animation","eldonation_custom_html_enabled","eldonation_custom_html","eldonation_custom_js","eldonation_custom_css","eldonation_custom_json","show_eldonation_message","eldonation_message_font_size","eldonation_message_font","eldonation_message_font_weight","eldonation_message_font_color","eldonation_alert_message_min_amount","tiltifydonation_layout","tiltifydonation_enabled","tiltifydonation_message_template","tiltifydonation_text_animation","tiltifydonation_image_href","tiltifydonation_sound_href","tiltifydonation_sound_volume","tiltifydonation_font","tiltifydonation_font_size","tiltifydonation_font_weight","tiltifydonation_font_color","tiltifydonation_font_color2","tiltifydonation_alert_duration","tiltifydonation_text_delay","tiltifydonation_show_animation","tiltifydonation_hide_animation","tiltifydonation_custom_html_enabled","tiltifydonation_custom_html","tiltifydonation_custom_js","tiltifydonation_custom_css","tiltifydonation_custom_json","show_tiltifydonation_message","tiltifydonation_message_font_size","tiltifydonation_message_font","tiltifydonation_message_font_weight","tiltifydonation_message_font_color","tiltifydonation_alert_message_min_amount","recent_events_tiltifydonation_min_amount","gamewispsubscription_layout","gamewispsubscription_enabled","gamewispsubscription_message_template","gamewispsubscription_resub_message_template","gamewispsubscription_tier_upgrade_message_template","gamewispsubscription_text_animation","gamewispsubscription_image_href","gamewispsubscription_sound_href","gamewispsubscription_sound_volume","gamewispsubscription_font","gamewispsubscription_font_size","gamewispsubscription_font_weight","gamewispsubscription_font_color","gamewispsubscription_font_color2","gamewispsubscription_alert_duration","gamewispsubscription_text_delay","gamewispsubscription_show_animation","gamewispsubscription_hide_animation","gamewispsubscription_custom_html_enabled","gamewispsubscription_custom_html","gamewispsubscription_custom_js","gamewispsubscription_custom_css","gamewispsubscription_custom_json","treat_layout","treat_enabled","treat_message_template","treat_text_animation","treat_image_href","treat_sound_href","treat_sound_volume","treat_font","treat_font_size","treat_font_weight","treat_font_color","treat_font_color2","treat_alert_duration","treat_text_delay","treat_show_animation","treat_hide_animation","treat_custom_html_enabled","treat_custom_html","treat_custom_js","treat_custom_css","treat_custom_json","show_treat_message","treat_message_font_size","treat_message_font","treat_message_font_weight","treat_message_font_color","merch_layout","merch_enabled","merch_message_template","merch_text_animation","merch_image_href","merch_sound_href","merch_sound_volume","merch_font","merch_font_size","merch_font_weight","merch_font_color","merch_font_color2","merch_alert_duration","merch_text_delay","merch_moderation","show_merch_message","merch_show_animation","merch_hide_animation","merch_custom_html_enabled","merch_custom_html","merch_custom_js","merch_custom_css","merch_custom_json","merch_message_font_size","merch_message_font","merch_message_font_weight","merch_message_font_color","merch_message_allow_emotes","merch_use_custom_image","donordrivedonation_layout","donordrivedonation_enabled","donordrivedonation_message_template","donordrivedonation_text_animation","donordrivedonation_image_href","donordrivedonation_sound_href","donordrivedonation_sound_volume","donordrivedonation_font","donordrivedonation_font_size","donordrivedonation_font_weight","donordrivedonation_font_color","donordrivedonation_font_color2","donordrivedonation_alert_duration","donordrivedonation_text_delay","donordrivedonation_show_animation","donordrivedonation_hide_animation","donordrivedonation_custom_html_enabled","donordrivedonation_custom_html","donordrivedonation_custom_js","donordrivedonation_custom_css","donordrivedonation_custom_json","show_donordrivedonation_message","donordrivedonation_message_font_size","donordrivedonation_message_font","donordrivedonation_message_font_weight","donordrivedonation_message_font_color","donordrivedonation_alert_message_min_amount","justgivingdonation_layout","justgivingdonation_enabled","justgivingdonation_message_template","justgivingdonation_text_animation","justgivingdonation_image_href","justgivingdonation_sound_href","justgivingdonation_sound_volume","justgivingdonation_font","justgivingdonation_font_size","justgivingdonation_font_weight","justgivingdonation_font_color","justgivingdonation_font_color2","justgivingdonation_alert_duration","justgivingdonation_text_delay","justgivingdonation_show_animation","justgivingdonation_hide_animation","justgivingdonation_custom_html_enabled","justgivingdonation_custom_html","justgivingdonation_custom_js","justgivingdonation_custom_css","justgivingdonation_custom_json","show_justgivingdonation_message","justgivingdonation_message_font_size","justgivingdonation_message_font","justgivingdonation_message_font_weight","justgivingdonation_message_font_color","justgivingdonation_alert_message_min_amount","loyalty_store_redemption_layout","loyalty_store_redemption_enabled","loyalty_store_redemption_message_template","loyalty_store_redemption_text_animation","loyalty_store_redemption_image_href","loyalty_store_redemption_sound_href","loyalty_store_redemption_sound_volume","loyalty_store_redemption_font","loyalty_store_redemption_font_size","loyalty_store_redemption_font_weight","loyalty_store_redemption_font_color","loyalty_store_redemption_font_color2","loyalty_store_redemption_alert_duration","loyalty_store_redemption_text_delay","loyalty_store_redemption_moderation","show_loyalty_store_redemption_message","loyalty_store_redemption_show_animation","loyalty_store_redemption_hide_animation","loyalty_store_redemption_custom_html_enabled","loyalty_store_redemption_custom_html","loyalty_store_redemption_custom_js","loyalty_store_redemption_custom_css","loyalty_store_redemption_custom_json","loyalty_store_redemption_message_font_size","loyalty_store_redemption_message_font","loyalty_store_redemption_message_font_weight","loyalty_store_redemption_message_font_color","loyalty_store_redemption_message_allow_emotes","loyalty_store_redemption_use_custom_image","prime_sub_gift_layout","prime_sub_gift_enabled","prime_sub_gift_message_template","prime_sub_gift_text_animation","prime_sub_gift_image_href","prime_sub_gift_sound_href","prime_sub_gift_sound_volume","prime_sub_gift_font","prime_sub_gift_font_size","prime_sub_gift_font_weight","prime_sub_gift_font_color","prime_sub_gift_font_color2","prime_sub_gift_alert_duration","prime_sub_gift_text_delay","prime_sub_gift_show_animation","prime_sub_gift_hide_animation","prime_sub_gift_custom_html_enabled","prime_sub_gift_custom_html","prime_sub_gift_custom_js","prime_sub_gift_custom_css","prime_sub_gift_custom_json","prime_sub_gift_enable_confetti","sponsored_campaign_layout","sponsored_campaign_enabled","sponsored_campaign_message_template","sponsored_campaign_text_animation","sponsored_campaign_image_href","sponsored_campaign_sound_href","sponsored_campaign_sound_volume","sponsored_campaign_font","sponsored_campaign_font_size","sponsored_campaign_font_weight","sponsored_campaign_font_color","sponsored_campaign_font_color2","sponsored_campaign_alert_duration","sponsored_campaign_text_delay","sponsored_campaign_moderation","sponsored_campaign_show_animation","sponsored_campaign_hide_animation","sponsored_campaign_custom_html_enabled","sponsored_campaign_custom_html","sponsored_campaign_custom_js","sponsored_campaign_custom_css","sponsored_campaign_custom_json","interrupt_mode","interrupt_mode_delay","alerts_master_sound_volume","tts_master_sound_volume","streamlabscharitydonation_layout","streamlabscharitydonation_enabled","streamlabscharitydonation_message_template","streamlabscharitydonation_text_animation","streamlabscharitydonation_image_href","streamlabscharitydonation_sound_href","streamlabscharitydonation_sound_volume","streamlabscharitydonation_font","streamlabscharitydonation_font_size","streamlabscharitydonation_font_weight","streamlabscharitydonation_font_color","streamlabscharitydonation_font_color2","streamlabscharitydonation_alert_duration","streamlabscharitydonation_text_delay","auto_streamlabscharitydonation_enabled","streamlabscharitydonation_viewer_minimum","streamlabscharitydonation_show_animation","streamlabscharitydonation_hide_animation","streamlabscharitydonation_custom_html_enabled","streamlabscharitydonation_custom_html","streamlabscharitydonation_custom_js","streamlabscharitydonation_custom_css","streamlabscharitydonation_custom_json","show_streamlabscharitydonation_message","streamlabscharitydonation_message_font_size","streamlabscharitydonation_message_font","streamlabscharitydonation_message_font_weight","streamlabscharitydonation_message_font_color","streamlabscharitydonation_alert_message_min_amount","streamlabscharitydonation_gif_enabled","streamlabscharitydonation_gifs_min_amount_to_share","streamlabscharitydonation_gfycat_library_enabled","streamlabscharitydonation_gif_library_enabled","streamlabscharitydonation_gif_animation","streamlabscharitydonation_max_gif_duration","streamlabscharitydonation_gif_library_defaults","streamlabscharitydonation_tts_enabled","streamlabscharitydonation_tts_include_message_template","streamlabscharitydonation_tts_language","streamlabscharitydonation_tts_security","streamlabscharitydonation_tts_repetition_block_length","streamlabscharitydonation_tts_volume","streamlabscharitydonation_tts_min_amount","streamlabscharitydonation_alert_min_amount","recent_events_streamlabscharitydonation_min_amount","mobile_custom_theme_id","follow_variations","sub_variations","host_variations","bit_variations","raid_variations","follow_layout","follow_enabled","follow_message_template","follow_text_animation","follow_image_href","follow_sound_href","follow_sound_volume","follow_font","follow_font_size","follow_font_weight","follow_font_color","follow_font_color2","follow_alert_duration","follow_text_delay","follow_show_animation","follow_hide_animation","follow_custom_html_enabled","follow_custom_html","follow_custom_js","follow_custom_css","follow_custom_json","sub_layout","sub_enabled","sub_message_template","sub_text_animation","sub_image_href","sub_sound_href","sub_sound_volume","sub_font","sub_font_size","sub_font_weight","sub_font_color","sub_font_color2","sub_alert_duration","sub_text_delay","prime_sub_enabled","sub_show_animation","sub_hide_animation","sub_custom_html_enabled","sub_custom_html","sub_custom_js","sub_custom_css","sub_custom_json","host_layout","host_enabled","host_message_template","host_text_animation","host_image_href","host_sound_href","host_sound_volume","host_font","host_font_size","host_font_weight","host_font_color","host_font_color2","host_alert_duration","host_text_delay","auto_host_enabled","host_viewer_minimum","recent_events_host_min_viewer_count","host_show_animation","host_hide_animation","host_custom_html_enabled","host_custom_html","host_custom_js","host_custom_css","host_custom_json","resub_message_font_size","resub_message_font","resub_message_font_weight","resub_message_font_color","resub_message_allow_emotes","show_resub_message","resub_tts_enabled","resub_tts_include_message_template","resub_tts_language","resub_tts_security","resub_tts_repetition_block_length","resub_tts_volume","bits_layout","bits_enabled","bits_tts_enabled","bits_tts_include_message_template","bits_tts_language","bits_tts_security","bits_tts_repetition_block_length","bits_tts_volume","bits_message_template","bits_text_animation","bits_image_href","bits_sound_href","bits_sound_volume","bits_font","bits_font_size","bits_font_weight","bits_font_color","bits_font_color2","bits_alert_duration","bits_text_delay","bits_alert_min_amount","bits_alert_message_min_amount","bits_tts_min_amount","show_bits_message","bits_show_animation","bits_hide_animation","bits_message_font_size","bits_message_font","bits_message_font_weight","bits_message_font_color","bits_message_allow_emotes","bits_custom_html_enabled","bits_custom_html","bits_custom_js","bits_custom_css","bits_custom_json","recent_events_bits_min_amount","recent_events_raid_min_viewer_count","raid_layout","raid_enabled","raid_message_template","raid_text_animation","raid_image_href","raid_sound_href","raid_sound_volume","raid_font","raid_font_size","raid_font_weight","raid_font_color","raid_font_color2","raid_alert_duration","raid_text_delay","raid_raider_minimum","raid_show_animation","raid_hide_animation","raid_custom_html_enabled","raid_custom_html","raid_custom_js","raid_custom_css","raid_custom_json","subscriber_font_size","sponsor_font_size","fanfunding_font_size","fanfunding_message_font_size","pledge_message_font_size","facebook_follow_font_size","facebook_share_font_size","facebook_stars_font_size","facebook_stars_message_font_size","facebook_like_font_size","facebook_support_font_size","facebook_support_gifter_font_size","sticker_font_size","sticker_message_font_size","effect_font_size","effect_message_font_size","prime_sub_gift_message_font_size","trovo_follow_font_size","trovo_sub_font_size","trovo_resub_message_font_size","trovo_raid_font_size","subscriber_text_delay","sponsor_text_delay","fanfunding_text_delay","facebook_stars_text_delay","facebook_follow_text_delay","facebook_share_text_delay","facebook_like_text_delay","facebook_support_text_delay","facebook_support_gifter_text_delay","sticker_text_delay","effect_text_delay","trovo_follow_text_delay","trovo_sub_text_delay","trovo_raid_text_delay","subscriber_alert_duration","sponsor_alert_duration","fanfunding_alert_duration","facebook_follow_alert_duration","facebook_support_alert_duration","facebook_support_gifter_alert_duration","facebook_stars_alert_duration","facebook_share_alert_duration","facebook_like_alert_duration","sticker_alert_duration","effect_alert_duration","trovo_follow_alert_duration","trovo_sub_alert_duration","trovo_raid_alert_duration"];

        twitchKeys.forEach(function (event) {
          settingsTwitch[event] = allSettings[event];
        });
        
        
        fontsizeArray = ["facebook_follow_font_size", "facebook_share_font_size", "facebook_stars_font_size", "facebook_stars_message_font_size", "facebook_like_font_size", "facebook_support_font_size", "facebook_support_gifter_font_size", "sticker_font_size", "sticker_message_font_size", "effect_font_size", "effect_message_font_size", "prime_sub_gift_message_font_size", "facebook_follow_font_size", "facebook_follow_font_size", "trovo_follow_font_size", "trovo_sub_font_size", "trovo_resub_message_font_size", "trovo_raid_font_size"];
        fontsizeArray.forEach(function (event) {
          settingsTwitch[event] = 10;
        });
        
        delayDurationArray = ["subscriber_text_delay", "sponsor_text_delay", "fanfunding_text_delay", "facebook_stars_text_delay", "facebook_follow_text_delay", "facebook_share_text_delay", "facebook_like_text_delay", "facebook_support_text_delay", "facebook_support_gifter_text_delay", "sticker_text_delay", "effect_text_delay", "trovo_follow_text_delay", "trovo_sub_text_delay", "trovo_raid_text_delay", "subscriber_alert_duration", "sponsor_alert_duration", "fanfunding_alert_duration", "facebook_follow_alert_duration", "facebook_support_alert_duration", "facebook_support_gifter_alert_duration", "facebook_stars_alert_duration", "facebook_share_alert_duration", "facebook_like_alert_duration", "sticker_alert_duration", "effect_alert_duration", "trovo_follow_alert_duration", "trovo_sub_alert_duration", "trovo_raid_alert_duration"];
        delayDurationArray.forEach(function (event) {
          settingsTwitch[event] = 0;
        });
        var settingsTwitch1 = JSON.stringify(settingsTwitch);
        var settingsTwitchString = settingsTwitch1.replace(/\"/g, '\\"').replace(/~3qt~/g,'\\\\\\\"').replace(/~lnb~/g,'\\\\n').replace(/tz-index/g, '\\tz-index');
        
        const settingsTwitchCommand = '{\n  \"headers\": ' + JSON.stringify(alertObj["headers"], null, 4) + ', \n  \"referrer\": \"' + alertObj['referrer'] + '\", \n  \"referrerPolicy\": \"' + alertObj['referrerPolicy'] + '\", \n  \"body\": \"' + settingsTwitchString + '\", \n  \"method\": \"' + alertObj['method'] + '\", \n  \"mode\": \"' +  alertObj['mode'] + '\", \n  \"credentials\": \"' + alertObj['credentials'] + '\"';
        
       $(this).find("textarea").val(fetchCmd + settingsTwitchCommand + '\n});');
      }
      if ($(this).attr("id") == "youtube") {
        var youtubeKeys = ["donation_variations","merch_variations","pledge_variations","eldonation_variations","tiltifydonation_variations","gamewispsubscription_variations","treat_variations","donordrivedonation_variations","justgivingdonation_variations","loyalty_store_redemption_variations","sponsored_campaign_variations","prime_sub_gift_variations","streamlabscharitydonation_variations","background_color","alert_delay","moderation_delay","censor_streamer_recent_events","unlimited_media_moderation_delay","layout","display_mtg_codes","automatically_reset_session","donation_layout","donation_enabled","donation_tts_enabled","donation_tts_include_message_template","donation_tts_language","donation_tts_security","donation_tts_repetition_block_length","donation_tts_volume","donation_message_template","donation_text_animation","donation_image_href","donation_sound_href","donation_sound_volume","donation_font","donation_font_size","donation_font_weight","donation_font_color","donation_font_color2","donation_alert_duration","donation_text_delay","donation_alert_min_amount","recent_events_donation_min_amount","donation_alert_message_min_amount","donation_tts_min_amount","donation_moderation","show_donation_message","donation_show_animation","donation_hide_animation","donation_custom_html_enabled","donation_custom_html","donation_custom_js","donation_custom_css","donation_custom_json","donation_message_font_size","donation_message_font","donation_message_font_weight","donation_message_font_color","donation_message_allow_emotes","donation_gif_enabled","donation_gifs_min_amount_to_share","donation_gfycat_library_enabled","donation_gif_library_enabled","donation_gif_animation","donation_max_gif_duration","donation_gif_library_defaults","donation_clipping_enabled","pledge_layout","pledge_enabled","pledge_message_template","pledge_text_animation","pledge_image_href","pledge_sound_href","pledge_sound_volume","pledge_font","pledge_font_size","pledge_font_weight","pledge_font_color","pledge_font_color2","pledge_alert_duration","pledge_text_delay","pledge_show_animation","pledge_hide_animation","pledge_custom_html_enabled","pledge_custom_html","pledge_custom_js","pledge_custom_css","pledge_custom_json","eldonation_layout","eldonation_enabled","eldonation_message_template","eldonation_text_animation","eldonation_image_href","eldonation_sound_href","eldonation_sound_volume","eldonation_font","eldonation_font_size","eldonation_font_weight","eldonation_font_color","eldonation_font_color2","eldonation_alert_duration","eldonation_text_delay","eldonation_show_animation","eldonation_hide_animation","eldonation_custom_html_enabled","eldonation_custom_html","eldonation_custom_js","eldonation_custom_css","eldonation_custom_json","show_eldonation_message","eldonation_message_font_size","eldonation_message_font","eldonation_message_font_weight","eldonation_message_font_color","eldonation_alert_message_min_amount","tiltifydonation_layout","tiltifydonation_enabled","tiltifydonation_message_template","tiltifydonation_text_animation","tiltifydonation_image_href","tiltifydonation_sound_href","tiltifydonation_sound_volume","tiltifydonation_font","tiltifydonation_font_size","tiltifydonation_font_weight","tiltifydonation_font_color","tiltifydonation_font_color2","tiltifydonation_alert_duration","tiltifydonation_text_delay","tiltifydonation_show_animation","tiltifydonation_hide_animation","tiltifydonation_custom_html_enabled","tiltifydonation_custom_html","tiltifydonation_custom_js","tiltifydonation_custom_css","tiltifydonation_custom_json","show_tiltifydonation_message","tiltifydonation_message_font_size","tiltifydonation_message_font","tiltifydonation_message_font_weight","tiltifydonation_message_font_color","tiltifydonation_alert_message_min_amount","recent_events_tiltifydonation_min_amount","gamewispsubscription_layout","gamewispsubscription_enabled","gamewispsubscription_message_template","gamewispsubscription_resub_message_template","gamewispsubscription_tier_upgrade_message_template","gamewispsubscription_text_animation","gamewispsubscription_image_href","gamewispsubscription_sound_href","gamewispsubscription_sound_volume","gamewispsubscription_font","gamewispsubscription_font_size","gamewispsubscription_font_weight","gamewispsubscription_font_color","gamewispsubscription_font_color2","gamewispsubscription_alert_duration","gamewispsubscription_text_delay","gamewispsubscription_show_animation","gamewispsubscription_hide_animation","gamewispsubscription_custom_html_enabled","gamewispsubscription_custom_html","gamewispsubscription_custom_js","gamewispsubscription_custom_css","gamewispsubscription_custom_json","treat_layout","treat_enabled","treat_message_template","treat_text_animation","treat_image_href","treat_sound_href","treat_sound_volume","treat_font","treat_font_size","treat_font_weight","treat_font_color","treat_font_color2","treat_alert_duration","treat_text_delay","treat_show_animation","treat_hide_animation","treat_custom_html_enabled","treat_custom_html","treat_custom_js","treat_custom_css","treat_custom_json","show_treat_message","treat_message_font_size","treat_message_font","treat_message_font_weight","treat_message_font_color","merch_layout","merch_enabled","merch_message_template","merch_text_animation","merch_image_href","merch_sound_href","merch_sound_volume","merch_font","merch_font_size","merch_font_weight","merch_font_color","merch_font_color2","merch_alert_duration","merch_text_delay","merch_moderation","show_merch_message","merch_show_animation","merch_hide_animation","merch_custom_html_enabled","merch_custom_html","merch_custom_js","merch_custom_css","merch_custom_json","merch_message_font_size","merch_message_font","merch_message_font_weight","merch_message_font_color","merch_message_allow_emotes","merch_use_custom_image","donordrivedonation_layout","donordrivedonation_enabled","donordrivedonation_message_template","donordrivedonation_text_animation","donordrivedonation_image_href","donordrivedonation_sound_href","donordrivedonation_sound_volume","donordrivedonation_font","donordrivedonation_font_size","donordrivedonation_font_weight","donordrivedonation_font_color","donordrivedonation_font_color2","donordrivedonation_alert_duration","donordrivedonation_text_delay","donordrivedonation_show_animation","donordrivedonation_hide_animation","donordrivedonation_custom_html_enabled","donordrivedonation_custom_html","donordrivedonation_custom_js","donordrivedonation_custom_css","donordrivedonation_custom_json","show_donordrivedonation_message","donordrivedonation_message_font_size","donordrivedonation_message_font","donordrivedonation_message_font_weight","donordrivedonation_message_font_color","donordrivedonation_alert_message_min_amount","justgivingdonation_layout","justgivingdonation_enabled","justgivingdonation_message_template","justgivingdonation_text_animation","justgivingdonation_image_href","justgivingdonation_sound_href","justgivingdonation_sound_volume","justgivingdonation_font","justgivingdonation_font_size","justgivingdonation_font_weight","justgivingdonation_font_color","justgivingdonation_font_color2","justgivingdonation_alert_duration","justgivingdonation_text_delay","justgivingdonation_show_animation","justgivingdonation_hide_animation","justgivingdonation_custom_html_enabled","justgivingdonation_custom_html","justgivingdonation_custom_js","justgivingdonation_custom_css","justgivingdonation_custom_json","show_justgivingdonation_message","justgivingdonation_message_font_size","justgivingdonation_message_font","justgivingdonation_message_font_weight","justgivingdonation_message_font_color","justgivingdonation_alert_message_min_amount","loyalty_store_redemption_layout","loyalty_store_redemption_enabled","loyalty_store_redemption_message_template","loyalty_store_redemption_text_animation","loyalty_store_redemption_image_href","loyalty_store_redemption_sound_href","loyalty_store_redemption_sound_volume","loyalty_store_redemption_font","loyalty_store_redemption_font_size","loyalty_store_redemption_font_weight","loyalty_store_redemption_font_color","loyalty_store_redemption_font_color2","loyalty_store_redemption_alert_duration","loyalty_store_redemption_text_delay","loyalty_store_redemption_moderation","show_loyalty_store_redemption_message","loyalty_store_redemption_show_animation","loyalty_store_redemption_hide_animation","loyalty_store_redemption_custom_html_enabled","loyalty_store_redemption_custom_html","loyalty_store_redemption_custom_js","loyalty_store_redemption_custom_css","loyalty_store_redemption_custom_json","loyalty_store_redemption_message_font_size","loyalty_store_redemption_message_font","loyalty_store_redemption_message_font_weight","loyalty_store_redemption_message_font_color","loyalty_store_redemption_message_allow_emotes","loyalty_store_redemption_use_custom_image","prime_sub_gift_layout","prime_sub_gift_enabled","prime_sub_gift_message_template","prime_sub_gift_text_animation","prime_sub_gift_image_href","prime_sub_gift_sound_href","prime_sub_gift_sound_volume","prime_sub_gift_font","prime_sub_gift_font_size","prime_sub_gift_font_weight","prime_sub_gift_font_color","prime_sub_gift_font_color2","prime_sub_gift_alert_duration","prime_sub_gift_text_delay","prime_sub_gift_show_animation","prime_sub_gift_hide_animation","prime_sub_gift_custom_html_enabled","prime_sub_gift_custom_html","prime_sub_gift_custom_js","prime_sub_gift_custom_css","prime_sub_gift_custom_json","prime_sub_gift_enable_confetti","sponsored_campaign_layout","sponsored_campaign_enabled","sponsored_campaign_message_template","sponsored_campaign_text_animation","sponsored_campaign_image_href","sponsored_campaign_sound_href","sponsored_campaign_sound_volume","sponsored_campaign_font","sponsored_campaign_font_size","sponsored_campaign_font_weight","sponsored_campaign_font_color","sponsored_campaign_font_color2","sponsored_campaign_alert_duration","sponsored_campaign_text_delay","sponsored_campaign_moderation","sponsored_campaign_show_animation","sponsored_campaign_hide_animation","sponsored_campaign_custom_html_enabled","sponsored_campaign_custom_html","sponsored_campaign_custom_js","sponsored_campaign_custom_css","sponsored_campaign_custom_json","interrupt_mode","interrupt_mode_delay","alerts_master_sound_volume","tts_master_sound_volume","streamlabscharitydonation_layout","streamlabscharitydonation_enabled","streamlabscharitydonation_message_template","streamlabscharitydonation_text_animation","streamlabscharitydonation_image_href","streamlabscharitydonation_sound_href","streamlabscharitydonation_sound_volume","streamlabscharitydonation_font","streamlabscharitydonation_font_size","streamlabscharitydonation_font_weight","streamlabscharitydonation_font_color","streamlabscharitydonation_font_color2","streamlabscharitydonation_alert_duration","streamlabscharitydonation_text_delay","auto_streamlabscharitydonation_enabled","streamlabscharitydonation_viewer_minimum","streamlabscharitydonation_show_animation","streamlabscharitydonation_hide_animation","streamlabscharitydonation_custom_html_enabled","streamlabscharitydonation_custom_html","streamlabscharitydonation_custom_js","streamlabscharitydonation_custom_css","streamlabscharitydonation_custom_json","show_streamlabscharitydonation_message","streamlabscharitydonation_message_font_size","streamlabscharitydonation_message_font","streamlabscharitydonation_message_font_weight","streamlabscharitydonation_message_font_color","streamlabscharitydonation_alert_message_min_amount","streamlabscharitydonation_gif_enabled","streamlabscharitydonation_gifs_min_amount_to_share","streamlabscharitydonation_gfycat_library_enabled","streamlabscharitydonation_gif_library_enabled","streamlabscharitydonation_gif_animation","streamlabscharitydonation_max_gif_duration","streamlabscharitydonation_gif_library_defaults","streamlabscharitydonation_tts_enabled","streamlabscharitydonation_tts_include_message_template","streamlabscharitydonation_tts_language","streamlabscharitydonation_tts_security","streamlabscharitydonation_tts_repetition_block_length","streamlabscharitydonation_tts_volume","streamlabscharitydonation_tts_min_amount","streamlabscharitydonation_alert_min_amount","recent_events_streamlabscharitydonation_min_amount","mobile_custom_theme_id","subscriber_variations","sponsor_variations","fanfunding_variations","subscriber_layout","subscriber_enabled","subscriber_message_template","subscriber_text_animation","subscriber_image_href","subscriber_sound_href","subscriber_sound_volume","subscriber_font","subscriber_font_size","subscriber_font_weight","subscriber_font_color","subscriber_font_color2","subscriber_alert_duration","subscriber_text_delay","subscriber_show_animation","subscriber_hide_animation","subscriber_custom_html_enabled","subscriber_custom_html","subscriber_custom_js","subscriber_custom_css","subscriber_custom_json","member_gift_message_template","member_gift_message_level_template","member_gif_image_href","member_gift_sound_href","sponsor_layout","sponsor_enabled","sponsor_message_template","sponsor_text_animation","sponsor_image_href","sponsor_sound_href","sponsor_sound_volume","sponsor_font","sponsor_font_size","sponsor_font_weight","sponsor_font_color","sponsor_font_color2","sponsor_alert_duration","sponsor_text_delay","sponsor_show_animation","sponsor_hide_animation","sponsor_custom_html_enabled","sponsor_custom_html","sponsor_custom_js","sponsor_custom_css","sponsor_custom_json","fanfunding_layout","fanfunding_enabled","fanfunding_tts_enabled","fanfunding_tts_include_message_template","fanfunding_tts_language","fanfunding_tts_security","fanfunding_tts_repetition_block_length","fanfunding_tts_volume","fanfunding_message_template","fanfunding_text_animation","fanfunding_image_href","fanfunding_sound_href","fanfunding_sound_volume","fanfunding_font","fanfunding_font_size","fanfunding_font_weight","fanfunding_font_color","fanfunding_font_color2","fanfunding_alert_duration","fanfunding_text_delay","fanfunding_alert_min_amount","fanfunding_alert_message_min_amount","fanfunding_tts_min_amount","fanfunding_custom_html_enabled","fanfunding_custom_html","fanfunding_custom_js","fanfunding_custom_css","fanfunding_custom_json","show_fanfunding_message","fanfunding_show_animation","fanfunding_hide_animation","fanfunding_message_font_size","fanfunding_message_font","fanfunding_message_font_weight","fanfunding_message_font_color","recent_events_fanfunding_min_amount","follow_font_size","sub_font_size","host_font_size","raid_font_size","bits_message_font_size","bits_font_size","resub_message_font_size","pledge_message_font_size","facebook_follow_font_size","facebook_share_font_size","facebook_stars_font_size","facebook_stars_message_font_size","facebook_like_font_size","facebook_support_font_size","facebook_support_gifter_font_size","sticker_font_size","sticker_message_font_size","effect_font_size","effect_message_font_size","prime_sub_gift_message_font_size","trovo_follow_font_size","trovo_sub_font_size","trovo_resub_message_font_size","trovo_raid_font_size","host_text_delay","follow_text_delay","bits_text_delay","sub_text_delay","raid_text_delay","facebook_stars_text_delay","facebook_follow_text_delay","facebook_share_text_delay","facebook_like_text_delay","facebook_support_text_delay","facebook_support_gifter_text_delay","sticker_text_delay","effect_text_delay","trovo_follow_text_delay","trovo_sub_text_delay","trovo_raid_text_delay","host_alert_duration","raid_alert_duration","follow_alert_duration","bits_alert_duration","sub_alert_duration","facebook_follow_alert_duration","facebook_support_alert_duration","facebook_support_gifter_alert_duration","facebook_stars_alert_duration","facebook_share_alert_duration","facebook_like_alert_duration","sticker_alert_duration","effect_alert_duration","trovo_follow_alert_duration","trovo_sub_alert_duration","trovo_raid_alert_duration"];
        youtubeKeys.forEach(function (event) {
          settingsYouTube[event] = allSettings[event];
        });
        
        fontsizeArray = ["follow_font_size", "sub_font_size", "host_font_size", "raid_font_size", "bits_message_font_size", "bits_font_size", "resub_message_font_size", "pledge_message_font_size", "facebook_follow_font_size", "facebook_share_font_size", "facebook_stars_font_size", "facebook_stars_message_font_size", "facebook_like_font_size", "facebook_support_font_size", "facebook_support_gifter_font_size", "sticker_font_size", "sticker_message_font_size", "effect_font_size", "effect_message_font_size", "prime_sub_gift_message_font_size", "trovo_follow_font_size", "trovo_sub_font_size", "trovo_resub_message_font_size", "trovo_raid_font_size"];
        fontsizeArray.forEach(function (event) {
          settingsYouTube[event] = 10;
        });
        
        delayDurationArray = ["host_text_delay", "follow_text_delay", "bits_text_delay", "sub_text_delay", "raid_text_delay", "facebook_stars_text_delay", "facebook_follow_text_delay", "facebook_share_text_delay", "facebook_like_text_delay", "facebook_support_text_delay", "facebook_support_gifter_text_delay", "sticker_text_delay", "effect_text_delay", "trovo_follow_text_delay", "trovo_sub_text_delay", "trovo_raid_text_delay", "host_alert_duration", "raid_alert_duration", "follow_alert_duration", "bits_alert_duration", "sub_alert_duration", "facebook_follow_alert_duration", "facebook_support_alert_duration", "facebook_support_gifter_alert_duration", "facebook_stars_alert_duration", "facebook_share_alert_duration", "facebook_like_alert_duration", "sticker_alert_duration", "effect_alert_duration", "trovo_follow_alert_duration", "trovo_sub_alert_duration", "trovo_raid_alert_duration"];
        delayDurationArray.forEach(function (event) {
          settingsYouTube[event] = 0;
        });
        
        var settingsYouTubeString = JSON.stringify(settingsYouTube).replace(/\"/g, '\\"').replace(/~3qt~/g,'\\\\\\\"').replace(/~lnb~/g,'\\\\n').replace(/tz-index/g, '\\tz-index');
        const settingsYouTubeCommand = '{\n  \"headers\": ' + JSON.stringify(alertObj["headers"], null, 4) + ', \n  \"referrer\": \"' + alertObj['referrer'] + '\", \n  \"referrerPolicy\": \"' + alertObj['referrerPolicy'] + '\", \n  \"body\": \"' + settingsYouTubeString + '\", \n  \"method\": \"' + alertObj['method'] + '\", \n  \"mode\": \"' +  alertObj['mode'] + '\", \n  \"credentials\": \"' + alertObj['credentials'] + '\"';
        
        $(this).find("textarea").val(fetchCmd + settingsYouTubeCommand + '\n});');
      }
      if ($(this).attr("id") == "facebook") {
        var facebookKeys = ["donation_variations","merch_variations","pledge_variations","eldonation_variations","tiltifydonation_variations","gamewispsubscription_variations","treat_variations","donordrivedonation_variations","justgivingdonation_variations","loyalty_store_redemption_variations","sponsored_campaign_variations","prime_sub_gift_variations","streamlabscharitydonation_variations","background_color","alert_delay","moderation_delay","censor_streamer_recent_events","unlimited_media_moderation_delay","layout","display_mtg_codes","automatically_reset_session","donation_layout","donation_enabled","donation_tts_enabled","donation_tts_include_message_template","donation_tts_language","donation_tts_security","donation_tts_repetition_block_length","donation_tts_volume","donation_message_template","donation_text_animation","donation_image_href","donation_sound_href","donation_sound_volume","donation_font","donation_font_size","donation_font_weight","donation_font_color","donation_font_color2","donation_alert_duration","donation_text_delay","donation_alert_min_amount","recent_events_donation_min_amount","donation_alert_message_min_amount","donation_tts_min_amount","donation_moderation","show_donation_message","donation_show_animation","donation_hide_animation","donation_custom_html_enabled","donation_custom_html","donation_custom_js","donation_custom_css","donation_custom_json","donation_message_font_size","donation_message_font","donation_message_font_weight","donation_message_font_color","donation_message_allow_emotes","donation_gif_enabled","donation_gifs_min_amount_to_share","donation_gfycat_library_enabled","donation_gif_library_enabled","donation_gif_animation","donation_max_gif_duration","donation_gif_library_defaults","donation_clipping_enabled","pledge_layout","pledge_enabled","pledge_message_template","pledge_text_animation","pledge_image_href","pledge_sound_href","pledge_sound_volume","pledge_font","pledge_font_size","pledge_font_weight","pledge_font_color","pledge_font_color2","pledge_alert_duration","pledge_text_delay","pledge_show_animation","pledge_hide_animation","pledge_custom_html_enabled","pledge_custom_html","pledge_custom_js","pledge_custom_css","pledge_custom_json","eldonation_layout","eldonation_enabled","eldonation_message_template","eldonation_text_animation","eldonation_image_href","eldonation_sound_href","eldonation_sound_volume","eldonation_font","eldonation_font_size","eldonation_font_weight","eldonation_font_color","eldonation_font_color2","eldonation_alert_duration","eldonation_text_delay","eldonation_show_animation","eldonation_hide_animation","eldonation_custom_html_enabled","eldonation_custom_html","eldonation_custom_js","eldonation_custom_css","eldonation_custom_json","show_eldonation_message","eldonation_message_font_size","eldonation_message_font","eldonation_message_font_weight","eldonation_message_font_color","eldonation_alert_message_min_amount","tiltifydonation_layout","tiltifydonation_enabled","tiltifydonation_message_template","tiltifydonation_text_animation","tiltifydonation_image_href","tiltifydonation_sound_href","tiltifydonation_sound_volume","tiltifydonation_font","tiltifydonation_font_size","tiltifydonation_font_weight","tiltifydonation_font_color","tiltifydonation_font_color2","tiltifydonation_alert_duration","tiltifydonation_text_delay","tiltifydonation_show_animation","tiltifydonation_hide_animation","tiltifydonation_custom_html_enabled","tiltifydonation_custom_html","tiltifydonation_custom_js","tiltifydonation_custom_css","tiltifydonation_custom_json","show_tiltifydonation_message","tiltifydonation_message_font_size","tiltifydonation_message_font","tiltifydonation_message_font_weight","tiltifydonation_message_font_color","tiltifydonation_alert_message_min_amount","recent_events_tiltifydonation_min_amount","gamewispsubscription_layout","gamewispsubscription_enabled","gamewispsubscription_message_template","gamewispsubscription_resub_message_template","gamewispsubscription_tier_upgrade_message_template","gamewispsubscription_text_animation","gamewispsubscription_image_href","gamewispsubscription_sound_href","gamewispsubscription_sound_volume","gamewispsubscription_font","gamewispsubscription_font_size","gamewispsubscription_font_weight","gamewispsubscription_font_color","gamewispsubscription_font_color2","gamewispsubscription_alert_duration","gamewispsubscription_text_delay","gamewispsubscription_show_animation","gamewispsubscription_hide_animation","gamewispsubscription_custom_html_enabled","gamewispsubscription_custom_html","gamewispsubscription_custom_js","gamewispsubscription_custom_css","gamewispsubscription_custom_json","treat_layout","treat_enabled","treat_message_template","treat_text_animation","treat_image_href","treat_sound_href","treat_sound_volume","treat_font","treat_font_size","treat_font_weight","treat_font_color","treat_font_color2","treat_alert_duration","treat_text_delay","treat_show_animation","treat_hide_animation","treat_custom_html_enabled","treat_custom_html","treat_custom_js","treat_custom_css","treat_custom_json","show_treat_message","treat_message_font_size","treat_message_font","treat_message_font_weight","treat_message_font_color","merch_layout","merch_enabled","merch_message_template","merch_text_animation","merch_image_href","merch_sound_href","merch_sound_volume","merch_font","merch_font_size","merch_font_weight","merch_font_color","merch_font_color2","merch_alert_duration","merch_text_delay","merch_moderation","show_merch_message","merch_show_animation","merch_hide_animation","merch_custom_html_enabled","merch_custom_html","merch_custom_js","merch_custom_css","merch_custom_json","merch_message_font_size","merch_message_font","merch_message_font_weight","merch_message_font_color","merch_message_allow_emotes","merch_use_custom_image","donordrivedonation_layout","donordrivedonation_enabled","donordrivedonation_message_template","donordrivedonation_text_animation","donordrivedonation_image_href","donordrivedonation_sound_href","donordrivedonation_sound_volume","donordrivedonation_font","donordrivedonation_font_size","donordrivedonation_font_weight","donordrivedonation_font_color","donordrivedonation_font_color2","donordrivedonation_alert_duration","donordrivedonation_text_delay","donordrivedonation_show_animation","donordrivedonation_hide_animation","donordrivedonation_custom_html_enabled","donordrivedonation_custom_html","donordrivedonation_custom_js","donordrivedonation_custom_css","donordrivedonation_custom_json","show_donordrivedonation_message","donordrivedonation_message_font_size","donordrivedonation_message_font","donordrivedonation_message_font_weight","donordrivedonation_message_font_color","donordrivedonation_alert_message_min_amount","justgivingdonation_layout","justgivingdonation_enabled","justgivingdonation_message_template","justgivingdonation_text_animation","justgivingdonation_image_href","justgivingdonation_sound_href","justgivingdonation_sound_volume","justgivingdonation_font","justgivingdonation_font_size","justgivingdonation_font_weight","justgivingdonation_font_color","justgivingdonation_font_color2","justgivingdonation_alert_duration","justgivingdonation_text_delay","justgivingdonation_show_animation","justgivingdonation_hide_animation","justgivingdonation_custom_html_enabled","justgivingdonation_custom_html","justgivingdonation_custom_js","justgivingdonation_custom_css","justgivingdonation_custom_json","show_justgivingdonation_message","justgivingdonation_message_font_size","justgivingdonation_message_font","justgivingdonation_message_font_weight","justgivingdonation_message_font_color","justgivingdonation_alert_message_min_amount","loyalty_store_redemption_layout","loyalty_store_redemption_enabled","loyalty_store_redemption_message_template","loyalty_store_redemption_text_animation","loyalty_store_redemption_image_href","loyalty_store_redemption_sound_href","loyalty_store_redemption_sound_volume","loyalty_store_redemption_font","loyalty_store_redemption_font_size","loyalty_store_redemption_font_weight","loyalty_store_redemption_font_color","loyalty_store_redemption_font_color2","loyalty_store_redemption_alert_duration","loyalty_store_redemption_text_delay","loyalty_store_redemption_moderation","show_loyalty_store_redemption_message","loyalty_store_redemption_show_animation","loyalty_store_redemption_hide_animation","loyalty_store_redemption_custom_html_enabled","loyalty_store_redemption_custom_html","loyalty_store_redemption_custom_js","loyalty_store_redemption_custom_css","loyalty_store_redemption_custom_json","loyalty_store_redemption_message_font_size","loyalty_store_redemption_message_font","loyalty_store_redemption_message_font_weight","loyalty_store_redemption_message_font_color","loyalty_store_redemption_message_allow_emotes","loyalty_store_redemption_use_custom_image","prime_sub_gift_layout","prime_sub_gift_enabled","prime_sub_gift_message_template","prime_sub_gift_text_animation","prime_sub_gift_image_href","prime_sub_gift_sound_href","prime_sub_gift_sound_volume","prime_sub_gift_font","prime_sub_gift_font_size","prime_sub_gift_font_weight","prime_sub_gift_font_color","prime_sub_gift_font_color2","prime_sub_gift_alert_duration","prime_sub_gift_text_delay","prime_sub_gift_show_animation","prime_sub_gift_hide_animation","prime_sub_gift_custom_html_enabled","prime_sub_gift_custom_html","prime_sub_gift_custom_js","prime_sub_gift_custom_css","prime_sub_gift_custom_json","prime_sub_gift_enable_confetti","sponsored_campaign_layout","sponsored_campaign_enabled","sponsored_campaign_message_template","sponsored_campaign_text_animation","sponsored_campaign_image_href","sponsored_campaign_sound_href","sponsored_campaign_sound_volume","sponsored_campaign_font","sponsored_campaign_font_size","sponsored_campaign_font_weight","sponsored_campaign_font_color","sponsored_campaign_font_color2","sponsored_campaign_alert_duration","sponsored_campaign_text_delay","sponsored_campaign_moderation","sponsored_campaign_show_animation","sponsored_campaign_hide_animation","sponsored_campaign_custom_html_enabled","sponsored_campaign_custom_html","sponsored_campaign_custom_js","sponsored_campaign_custom_css","sponsored_campaign_custom_json","interrupt_mode","interrupt_mode_delay","alerts_master_sound_volume","tts_master_sound_volume","streamlabscharitydonation_layout","streamlabscharitydonation_enabled","streamlabscharitydonation_message_template","streamlabscharitydonation_text_animation","streamlabscharitydonation_image_href","streamlabscharitydonation_sound_href","streamlabscharitydonation_sound_volume","streamlabscharitydonation_font","streamlabscharitydonation_font_size","streamlabscharitydonation_font_weight","streamlabscharitydonation_font_color","streamlabscharitydonation_font_color2","streamlabscharitydonation_alert_duration","streamlabscharitydonation_text_delay","auto_streamlabscharitydonation_enabled","streamlabscharitydonation_viewer_minimum","streamlabscharitydonation_show_animation","streamlabscharitydonation_hide_animation","streamlabscharitydonation_custom_html_enabled","streamlabscharitydonation_custom_html","streamlabscharitydonation_custom_js","streamlabscharitydonation_custom_css","streamlabscharitydonation_custom_json","show_streamlabscharitydonation_message","streamlabscharitydonation_message_font_size","streamlabscharitydonation_message_font","streamlabscharitydonation_message_font_weight","streamlabscharitydonation_message_font_color","streamlabscharitydonation_alert_message_min_amount","streamlabscharitydonation_gif_enabled","streamlabscharitydonation_gifs_min_amount_to_share","streamlabscharitydonation_gfycat_library_enabled","streamlabscharitydonation_gif_library_enabled","streamlabscharitydonation_gif_animation","streamlabscharitydonation_max_gif_duration","streamlabscharitydonation_gif_library_defaults","streamlabscharitydonation_tts_enabled","streamlabscharitydonation_tts_include_message_template","streamlabscharitydonation_tts_language","streamlabscharitydonation_tts_security","streamlabscharitydonation_tts_repetition_block_length","streamlabscharitydonation_tts_volume","streamlabscharitydonation_tts_min_amount","streamlabscharitydonation_alert_min_amount","recent_events_streamlabscharitydonation_min_amount","mobile_custom_theme_id","facebook_follow_variations","facebook_stars_variations","facebook_like_variations","facebook_support_variations","facebook_support_gifter_variations","facebook_share_variations","facebook_follow_layout","facebook_follow_enabled","facebook_follow_message_template","facebook_follow_text_animation","facebook_follow_image_href","facebook_follow_sound_href","facebook_follow_sound_volume","facebook_follow_font","facebook_follow_font_size","facebook_follow_font_weight","facebook_follow_font_color","facebook_follow_font_color2","facebook_follow_alert_duration","facebook_follow_text_delay","facebook_follow_show_animation","facebook_follow_hide_animation","facebook_follow_custom_html_enabled","facebook_follow_custom_html","facebook_follow_custom_js","facebook_follow_custom_css","facebook_follow_custom_json","facebook_stars_layout","facebook_stars_enabled","facebook_stars_tts_enabled","facebook_stars_tts_include_message_template","facebook_stars_tts_language","facebook_stars_tts_security","facebook_stars_tts_repetition_block_length","facebook_stars_tts_volume","facebook_stars_message_template","facebook_stars_text_animation","facebook_stars_image_href","facebook_stars_sound_href","facebook_stars_sound_volume","facebook_stars_font","facebook_stars_font_size","facebook_stars_font_weight","facebook_stars_font_color","facebook_stars_font_color2","facebook_stars_alert_duration","facebook_stars_text_delay","facebook_stars_show_animation","facebook_stars_hide_animation","facebook_stars_custom_html_enabled","facebook_stars_custom_html","facebook_stars_custom_js","facebook_stars_custom_css","facebook_stars_custom_json","facebook_show_stars_message","facebook_stars_message_font_size","facebook_stars_message_font","facebook_stars_message_font_weight","facebook_stars_message_font_color","facebook_stars_alert_min_amount","facebook_stars_alert_message_min_amount","facebook_stars_tts_min_amount","facebook_like_layout","facebook_like_enabled","facebook_like_message_template","facebook_like_text_animation","facebook_like_image_href","facebook_like_sound_href","facebook_like_sound_volume","facebook_like_font","facebook_like_font_size","facebook_like_font_weight","facebook_like_font_color","facebook_like_font_color2","facebook_like_alert_duration","facebook_like_text_delay","facebook_like_show_animation","facebook_like_hide_animation","facebook_like_custom_html_enabled","facebook_like_custom_html","facebook_like_custom_js","facebook_like_custom_css","facebook_like_custom_json","facebook_support_layout","facebook_support_enabled","facebook_support_message_template","facebook_support_text_animation","facebook_support_image_href","facebook_support_sound_href","facebook_support_sound_volume","facebook_support_font","facebook_support_font_size","facebook_support_font_weight","facebook_support_font_color","facebook_support_font_color2","facebook_support_alert_duration","facebook_support_custom_html_enabled","facebook_support_custom_html","facebook_support_custom_js","facebook_support_custom_css","facebook_support_custom_json","facebook_support_show_animation","facebook_support_hide_animation","facebook_support_text_delay","facebook_share_layout","facebook_share_enabled","facebook_share_message_template","facebook_share_text_animation","facebook_share_image_href","facebook_share_sound_href","facebook_share_sound_volume","facebook_share_font","facebook_share_font_size","facebook_share_font_weight","facebook_share_font_color","facebook_share_font_color2","facebook_share_alert_duration","facebook_share_custom_html_enabled","facebook_share_custom_html","facebook_share_custom_js","facebook_share_custom_css","facebook_share_custom_json","facebook_share_show_animation","facebook_share_hide_animation","facebook_share_text_delay","facebook_support_gifter_layout","facebook_support_gifter_enabled","facebook_support_gifter_message_template","facebook_support_gifter_text_animation","facebook_support_gifter_image_href","facebook_support_gifter_sound_href","facebook_support_gifter_sound_volume","facebook_support_gifter_font","facebook_support_gifter_font_size","facebook_support_gifter_font_weight","facebook_support_gifter_font_color","facebook_support_gifter_font_color2","facebook_support_gifter_alert_duration","facebook_support_gifter_custom_html_enabled","facebook_support_gifter_custom_html","facebook_support_gifter_custom_js","facebook_support_gifter_custom_css","facebook_support_gifter_custom_json","facebook_support_gifter_show_animation","facebook_support_gifter_hide_animation","facebook_support_gifter_text_delay","follow_font_size","sub_font_size","host_font_size","raid_font_size","bits_message_font_size","bits_font_size","resub_message_font_size","subscriber_font_size","sponsor_font_size","fanfunding_font_size","fanfunding_message_font_size","pledge_message_font_size","sticker_font_size","sticker_message_font_size","effect_font_size","effect_message_font_size","prime_sub_gift_message_font_size","trovo_follow_font_size","trovo_sub_font_size","trovo_resub_message_font_size","trovo_raid_font_size","host_text_delay","follow_text_delay","bits_text_delay","sub_text_delay","subscriber_text_delay","sponsor_text_delay","fanfunding_text_delay","raid_text_delay","sticker_text_delay","effect_text_delay","trovo_follow_text_delay","trovo_sub_text_delay","trovo_raid_text_delay","host_alert_duration","raid_alert_duration","follow_alert_duration","bits_alert_duration","sub_alert_duration","subscriber_alert_duration","sponsor_alert_duration","fanfunding_alert_duration","sticker_alert_duration","effect_alert_duration","trovo_follow_alert_duration","trovo_sub_alert_duration","trovo_raid_alert_duration"];
        facebookKeys.forEach(function (event) {
          settingsFacebook[event] = allSettings[event];
        });
        fontsizeArray = ["follow_font_size", "sub_font_size", "host_font_size", "raid_font_size", "bits_message_font_size", "bits_font_size", "resub_message_font_size", "pledge_message_font_size", "subscriber_font_size", "sponsor_font_size", "fanfunding_font_size", "fanfunding_message_font_size", "sticker_font_size", "sticker_message_font_size", "effect_font_size", "effect_message_font_size", "prime_sub_gift_message_font_size", "trovo_follow_font_size", "trovo_sub_font_size", "trovo_resub_message_font_size", "trovo_raid_font_size"];
        fontsizeArray.forEach(function (event) {
          settingsFacebook[event] = 10;
        });
        
        delayDurationArray = ["host_text_delay", "follow_text_delay", "bits_text_delay", "sub_text_delay", "raid_text_delay", "subscriber_text_delay", "sponsor_text_delay", "fanfunding_text_delay", "sticker_text_delay", "effect_text_delay", "trovo_follow_text_delay", "trovo_sub_text_delay", "trovo_raid_text_delay", "host_alert_duration", "raid_alert_duration", "follow_alert_duration", "bits_alert_duration", "sub_alert_duration", "subscriber_alert_duration", "sponsor_alert_duration", "fanfunding_alert_duration", "sticker_alert_duration", "effect_alert_duration", "trovo_follow_alert_duration", "trovo_sub_alert_duration", "trovo_raid_alert_duration"];
        delayDurationArray.forEach(function (event) {
          settingsFacebook[event] = 0;
        });
        
        var settingsFacebookString = JSON.stringify(settingsFacebook).replace(/\"/g, '\\"').replace(/~3qt~/g,'\\\\\\\"').replace(/~lnb~/g,'\\\\n').replace(/tz-index/g, '\\tz-index');
        const settingsFacebookCommand = '{\n  \"headers\": ' + JSON.stringify(alertObj["headers"], null, 4) + ', \n  \"referrer\": \"' + alertObj['referrer'] + '\", \n  \"referrerPolicy\": \"' + alertObj['referrerPolicy'] + '\", \n  \"body\": \"' + settingsFacebookString + '\", \n  \"method\": \"' + alertObj['method'] + '\", \n  \"mode\": \"' +  alertObj['mode'] + '\", \n  \"credentials\": \"' + alertObj['credentials'] + '\"';
        
        $(this).find("textarea").val(fetchCmd + settingsFacebookCommand + '\n});');
      }
      if ($(this).attr("id") == "trovo") {
        var trovoKeys = ["donation_variations","merch_variations","pledge_variations","eldonation_variations","tiltifydonation_variations","gamewispsubscription_variations","treat_variations","donordrivedonation_variations","justgivingdonation_variations","loyalty_store_redemption_variations","sponsored_campaign_variations","prime_sub_gift_variations","streamlabscharitydonation_variations","background_color","alert_delay","moderation_delay","censor_streamer_recent_events","unlimited_media_moderation_delay","layout","display_mtg_codes","automatically_reset_session","donation_layout","donation_enabled","donation_tts_enabled","donation_tts_include_message_template","donation_tts_language","donation_tts_security","donation_tts_repetition_block_length","donation_tts_volume","donation_message_template","donation_text_animation","donation_image_href","donation_sound_href","donation_sound_volume","donation_font","donation_font_size","donation_font_weight","donation_font_color","donation_font_color2","donation_alert_duration","donation_text_delay","donation_alert_min_amount","recent_events_donation_min_amount","donation_alert_message_min_amount","donation_tts_min_amount","donation_moderation","show_donation_message","donation_show_animation","donation_hide_animation","donation_custom_html_enabled","donation_custom_html","donation_custom_js","donation_custom_css","donation_custom_json","donation_message_font_size","donation_message_font","donation_message_font_weight","donation_message_font_color","donation_message_allow_emotes","donation_gif_enabled","donation_gifs_min_amount_to_share","donation_gfycat_library_enabled","donation_gif_library_enabled","donation_gif_animation","donation_max_gif_duration","donation_gif_library_defaults","donation_clipping_enabled","pledge_layout","pledge_enabled","pledge_message_template","pledge_text_animation","pledge_image_href","pledge_sound_href","pledge_sound_volume","pledge_font","pledge_font_size","pledge_font_weight","pledge_font_color","pledge_font_color2","pledge_alert_duration","pledge_text_delay","pledge_show_animation","pledge_hide_animation","pledge_custom_html_enabled","pledge_custom_html","pledge_custom_js","pledge_custom_css","pledge_custom_json","eldonation_layout","eldonation_enabled","eldonation_message_template","eldonation_text_animation","eldonation_image_href","eldonation_sound_href","eldonation_sound_volume","eldonation_font","eldonation_font_size","eldonation_font_weight","eldonation_font_color","eldonation_font_color2","eldonation_alert_duration","eldonation_text_delay","eldonation_show_animation","eldonation_hide_animation","eldonation_custom_html_enabled","eldonation_custom_html","eldonation_custom_js","eldonation_custom_css","eldonation_custom_json","show_eldonation_message","eldonation_message_font_size","eldonation_message_font","eldonation_message_font_weight","eldonation_message_font_color","eldonation_alert_message_min_amount","tiltifydonation_layout","tiltifydonation_enabled","tiltifydonation_message_template","tiltifydonation_text_animation","tiltifydonation_image_href","tiltifydonation_sound_href","tiltifydonation_sound_volume","tiltifydonation_font","tiltifydonation_font_size","tiltifydonation_font_weight","tiltifydonation_font_color","tiltifydonation_font_color2","tiltifydonation_alert_duration","tiltifydonation_text_delay","tiltifydonation_show_animation","tiltifydonation_hide_animation","tiltifydonation_custom_html_enabled","tiltifydonation_custom_html","tiltifydonation_custom_js","tiltifydonation_custom_css","tiltifydonation_custom_json","show_tiltifydonation_message","tiltifydonation_message_font_size","tiltifydonation_message_font","tiltifydonation_message_font_weight","tiltifydonation_message_font_color","tiltifydonation_alert_message_min_amount","recent_events_tiltifydonation_min_amount","gamewispsubscription_layout","gamewispsubscription_enabled","gamewispsubscription_message_template","gamewispsubscription_resub_message_template","gamewispsubscription_tier_upgrade_message_template","gamewispsubscription_text_animation","gamewispsubscription_image_href","gamewispsubscription_sound_href","gamewispsubscription_sound_volume","gamewispsubscription_font","gamewispsubscription_font_size","gamewispsubscription_font_weight","gamewispsubscription_font_color","gamewispsubscription_font_color2","gamewispsubscription_alert_duration","gamewispsubscription_text_delay","gamewispsubscription_show_animation","gamewispsubscription_hide_animation","gamewispsubscription_custom_html_enabled","gamewispsubscription_custom_html","gamewispsubscription_custom_js","gamewispsubscription_custom_css","gamewispsubscription_custom_json","treat_layout","treat_enabled","treat_message_template","treat_text_animation","treat_image_href","treat_sound_href","treat_sound_volume","treat_font","treat_font_size","treat_font_weight","treat_font_color","treat_font_color2","treat_alert_duration","treat_text_delay","treat_show_animation","treat_hide_animation","treat_custom_html_enabled","treat_custom_html","treat_custom_js","treat_custom_css","treat_custom_json","show_treat_message","treat_message_font_size","treat_message_font","treat_message_font_weight","treat_message_font_color","merch_layout","merch_enabled","merch_message_template","merch_text_animation","merch_image_href","merch_sound_href","merch_sound_volume","merch_font","merch_font_size","merch_font_weight","merch_font_color","merch_font_color2","merch_alert_duration","merch_text_delay","merch_moderation","show_merch_message","merch_show_animation","merch_hide_animation","merch_custom_html_enabled","merch_custom_html","merch_custom_js","merch_custom_css","merch_custom_json","merch_message_font_size","merch_message_font","merch_message_font_weight","merch_message_font_color","merch_message_allow_emotes","merch_use_custom_image","donordrivedonation_layout","donordrivedonation_enabled","donordrivedonation_message_template","donordrivedonation_text_animation","donordrivedonation_image_href","donordrivedonation_sound_href","donordrivedonation_sound_volume","donordrivedonation_font","donordrivedonation_font_size","donordrivedonation_font_weight","donordrivedonation_font_color","donordrivedonation_font_color2","donordrivedonation_alert_duration","donordrivedonation_text_delay","donordrivedonation_show_animation","donordrivedonation_hide_animation","donordrivedonation_custom_html_enabled","donordrivedonation_custom_html","donordrivedonation_custom_js","donordrivedonation_custom_css","donordrivedonation_custom_json","show_donordrivedonation_message","donordrivedonation_message_font_size","donordrivedonation_message_font","donordrivedonation_message_font_weight","donordrivedonation_message_font_color","donordrivedonation_alert_message_min_amount","justgivingdonation_layout","justgivingdonation_enabled","justgivingdonation_message_template","justgivingdonation_text_animation","justgivingdonation_image_href","justgivingdonation_sound_href","justgivingdonation_sound_volume","justgivingdonation_font","justgivingdonation_font_size","justgivingdonation_font_weight","justgivingdonation_font_color","justgivingdonation_font_color2","justgivingdonation_alert_duration","justgivingdonation_text_delay","justgivingdonation_show_animation","justgivingdonation_hide_animation","justgivingdonation_custom_html_enabled","justgivingdonation_custom_html","justgivingdonation_custom_js","justgivingdonation_custom_css","justgivingdonation_custom_json","show_justgivingdonation_message","justgivingdonation_message_font_size","justgivingdonation_message_font","justgivingdonation_message_font_weight","justgivingdonation_message_font_color","justgivingdonation_alert_message_min_amount","loyalty_store_redemption_layout","loyalty_store_redemption_enabled","loyalty_store_redemption_message_template","loyalty_store_redemption_text_animation","loyalty_store_redemption_image_href","loyalty_store_redemption_sound_href","loyalty_store_redemption_sound_volume","loyalty_store_redemption_font","loyalty_store_redemption_font_size","loyalty_store_redemption_font_weight","loyalty_store_redemption_font_color","loyalty_store_redemption_font_color2","loyalty_store_redemption_alert_duration","loyalty_store_redemption_text_delay","loyalty_store_redemption_moderation","show_loyalty_store_redemption_message","loyalty_store_redemption_show_animation","loyalty_store_redemption_hide_animation","loyalty_store_redemption_custom_html_enabled","loyalty_store_redemption_custom_html","loyalty_store_redemption_custom_js","loyalty_store_redemption_custom_css","loyalty_store_redemption_custom_json","loyalty_store_redemption_message_font_size","loyalty_store_redemption_message_font","loyalty_store_redemption_message_font_weight","loyalty_store_redemption_message_font_color","loyalty_store_redemption_message_allow_emotes","loyalty_store_redemption_use_custom_image","prime_sub_gift_layout","prime_sub_gift_enabled","prime_sub_gift_message_template","prime_sub_gift_text_animation","prime_sub_gift_image_href","prime_sub_gift_sound_href","prime_sub_gift_sound_volume","prime_sub_gift_font","prime_sub_gift_font_size","prime_sub_gift_font_weight","prime_sub_gift_font_color","prime_sub_gift_font_color2","prime_sub_gift_alert_duration","prime_sub_gift_text_delay","prime_sub_gift_show_animation","prime_sub_gift_hide_animation","prime_sub_gift_custom_html_enabled","prime_sub_gift_custom_html","prime_sub_gift_custom_js","prime_sub_gift_custom_css","prime_sub_gift_custom_json","prime_sub_gift_enable_confetti","sponsored_campaign_layout","sponsored_campaign_enabled","sponsored_campaign_message_template","sponsored_campaign_text_animation","sponsored_campaign_image_href","sponsored_campaign_sound_href","sponsored_campaign_sound_volume","sponsored_campaign_font","sponsored_campaign_font_size","sponsored_campaign_font_weight","sponsored_campaign_font_color","sponsored_campaign_font_color2","sponsored_campaign_alert_duration","sponsored_campaign_text_delay","sponsored_campaign_moderation","sponsored_campaign_show_animation","sponsored_campaign_hide_animation","sponsored_campaign_custom_html_enabled","sponsored_campaign_custom_html","sponsored_campaign_custom_js","sponsored_campaign_custom_css","sponsored_campaign_custom_json","interrupt_mode","interrupt_mode_delay","alerts_master_sound_volume","tts_master_sound_volume","streamlabscharitydonation_layout","streamlabscharitydonation_enabled","streamlabscharitydonation_message_template","streamlabscharitydonation_text_animation","streamlabscharitydonation_image_href","streamlabscharitydonation_sound_href","streamlabscharitydonation_sound_volume","streamlabscharitydonation_font","streamlabscharitydonation_font_size","streamlabscharitydonation_font_weight","streamlabscharitydonation_font_color","streamlabscharitydonation_font_color2","streamlabscharitydonation_alert_duration","streamlabscharitydonation_text_delay","auto_streamlabscharitydonation_enabled","streamlabscharitydonation_viewer_minimum","streamlabscharitydonation_show_animation","streamlabscharitydonation_hide_animation","streamlabscharitydonation_custom_html_enabled","streamlabscharitydonation_custom_html","streamlabscharitydonation_custom_js","streamlabscharitydonation_custom_css","streamlabscharitydonation_custom_json","show_streamlabscharitydonation_message","streamlabscharitydonation_message_font_size","streamlabscharitydonation_message_font","streamlabscharitydonation_message_font_weight","streamlabscharitydonation_message_font_color","streamlabscharitydonation_alert_message_min_amount","streamlabscharitydonation_gif_enabled","streamlabscharitydonation_gifs_min_amount_to_share","streamlabscharitydonation_gfycat_library_enabled","streamlabscharitydonation_gif_library_enabled","streamlabscharitydonation_gif_animation","streamlabscharitydonation_max_gif_duration","streamlabscharitydonation_gif_library_defaults","streamlabscharitydonation_tts_enabled","streamlabscharitydonation_tts_include_message_template","streamlabscharitydonation_tts_language","streamlabscharitydonation_tts_security","streamlabscharitydonation_tts_repetition_block_length","streamlabscharitydonation_tts_volume","streamlabscharitydonation_tts_min_amount","streamlabscharitydonation_alert_min_amount","recent_events_streamlabscharitydonation_min_amount","mobile_custom_theme_id","trovo_follow_variations","trovo_sub_variations","trovo_raid_variations","trovo_follow_layout","trovo_follow_enabled","trovo_follow_message_template","trovo_follow_text_animation","trovo_follow_image_href","trovo_follow_sound_href","trovo_follow_sound_volume","trovo_follow_font","trovo_follow_font_size","trovo_follow_font_weight","trovo_follow_font_color","trovo_follow_font_color2","trovo_follow_alert_duration","trovo_follow_text_delay","trovo_follow_show_animation","trovo_follow_hide_animation","trovo_follow_custom_html_enabled","trovo_follow_custom_html","trovo_follow_custom_js","trovo_follow_custom_css","trovo_follow_custom_json","trovo_sub_layout","trovo_sub_enabled","trovo_sub_message_template","trovo_sub_text_animation","trovo_sub_image_href","trovo_sub_sound_href","trovo_sub_sound_volume","trovo_sub_font","trovo_sub_font_size","trovo_sub_font_weight","trovo_sub_font_color","trovo_sub_font_color2","trovo_sub_alert_duration","trovo_sub_text_delay","trovo_sub_show_animation","trovo_sub_hide_animation","trovo_sub_custom_html_enabled","trovo_sub_custom_html","trovo_sub_custom_js","trovo_sub_custom_css","trovo_sub_custom_json","trovo_resub_message_font_size","trovo_resub_message_font","trovo_resub_message_font_weight","trovo_resub_message_font_color","trovo_resub_message_allow_emotes","show_trovo_resub_message","trovo_resub_tts_enabled","trovo_resub_tts_include_message_template","trovo_resub_tts_language","trovo_resub_tts_security","trovo_resub_tts_repetition_block_length","trovo_resub_tts_volume","trovo_raid_layout","trovo_raid_enabled","trovo_raid_message_template","trovo_raid_text_animation","trovo_raid_image_href","trovo_raid_sound_href","trovo_raid_sound_volume","trovo_raid_font","trovo_raid_font_size","trovo_raid_font_weight","trovo_raid_font_color","trovo_raid_font_color2","trovo_raid_alert_duration","trovo_raid_text_delay","trovo_raid_raider_minimum","trovo_raid_show_animation","trovo_raid_hide_animation","trovo_raid_custom_html_enabled","trovo_raid_custom_html","trovo_raid_custom_js","trovo_raid_custom_css","trovo_raid_custom_json","follow_font_size","sub_font_size","host_font_size","raid_font_size","bits_message_font_size","bits_font_size","resub_message_font_size","subscriber_font_size","sponsor_font_size","fanfunding_font_size","fanfunding_message_font_size","pledge_message_font_size","facebook_follow_font_size","facebook_share_font_size","facebook_stars_font_size","facebook_stars_message_font_size","facebook_like_font_size","facebook_support_font_size","facebook_support_gifter_font_size","sticker_font_size","sticker_message_font_size","effect_font_size","effect_message_font_size","prime_sub_gift_message_font_size","host_text_delay","follow_text_delay","bits_text_delay","sub_text_delay","subscriber_text_delay","sponsor_text_delay","fanfunding_text_delay","raid_text_delay","facebook_stars_text_delay","facebook_follow_text_delay","facebook_share_text_delay","facebook_like_text_delay","facebook_support_text_delay","facebook_support_gifter_text_delay","sticker_text_delay","effect_text_delay","host_alert_duration","raid_alert_duration","follow_alert_duration","bits_alert_duration","sub_alert_duration","subscriber_alert_duration","sponsor_alert_duration","fanfunding_alert_duration","facebook_follow_alert_duration","facebook_support_alert_duration","facebook_support_gifter_alert_duration","facebook_stars_alert_duration","facebook_share_alert_duration","facebook_like_alert_duration","sticker_alert_duration","effect_alert_duration"];
        trovoKeys.forEach(function (event) {
          settingsTrovo[event] = allSettings[event];
        });
        fontsizeArray = ["follow_font_size", "sub_font_size", "host_font_size", "raid_font_size", "bits_message_font_size", "bits_font_size", "resub_message_font_size", "pledge_message_font_size", "subscriber_font_size", "sponsor_font_size", "fanfunding_font_size", "fanfunding_message_font_size", "sticker_font_size", "sticker_message_font_size", "effect_font_size", "effect_message_font_size", "prime_sub_gift_message_font_size", "facebook_follow_font_size", "facebook_share_font_size", "facebook_stars_font_size", "facebook_stars_message_font_size", "facebook_like_font_size", "facebook_support_font_size", "facebook_support_gifter_font_size"];
        fontsizeArray.forEach(function (event) {
          settingsTrovo[event] = 10;
        });
        
        delayDurationArray = ["host_text_delay", "follow_text_delay", "bits_text_delay", "sub_text_delay", "raid_text_delay", "subscriber_text_delay", "sponsor_text_delay", "fanfunding_text_delay", "sticker_text_delay", "effect_text_delay", "facebook_stars_text_delay", "facebook_follow_text_delay", "facebook_share_text_delay", "facebook_like_text_delay", "facebook_support_text_delay", "facebook_support_gifter_text_delay", "host_alert_duration", "raid_alert_duration", "follow_alert_duration", "bits_alert_duration", "sub_alert_duration", "subscriber_alert_duration", "sponsor_alert_duration", "fanfunding_alert_duration", "sticker_alert_duration", "effect_alert_duration", "facebook_follow_alert_duration", "facebook_support_alert_duration", "facebook_support_gifter_alert_duration", "facebook_stars_alert_duration", "facebook_share_alert_duration", "facebook_like_alert_duration"];
        delayDurationArray.forEach(function (event) {
          settingsTrovo[event] = 0;
        });
        var settingsTrovoString = JSON.stringify(settingsTrovo).replace(/\"/g, '\\"').replace(/~3qt~/g,'\\\\\\\"').replace(/~lnb~/g,'\\\\n').replace(/tz-index/g, '\\tz-index');
        const settingsTrovoCommand = '{\n  \"headers\": ' + JSON.stringify(alertObj["headers"], null, 4) + ', \n  \"referrer\": \"' + alertObj['referrer'] + '\", \n  \"referrerPolicy\": \"' + alertObj['referrerPolicy'] + '\", \n  \"body\": \"' + settingsTrovoString + '\", \n  \"method\": \"' + alertObj['method'] + '\", \n  \"mode\": \"' +  alertObj['mode'] + '\", \n  \"credentials\": \"' + alertObj['credentials'] + '\"';
        
        $(this).find("textarea").val(fetchCmd + settingsTrovoCommand + '\n});');
      }
    });
    $(".form").show();
  }
}