$( document ).ready(function() {
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
});

function addTrovoKeys(obj) {
  // add "trovo_" to Object Keys
  let addTrovoArray = ['follow_variations', 'sub_variations', 'raid_variations', 'follow_layout', 'follow_enabled', 'follow_message_template', 'follow_text_animation', 'follow_image_href', 'follow_sound_href', 'follow_sound_volume', 'follow_font', 'follow_font_size', 'follow_font_weight', 'follow_font_color', 'follow_font_color2', 'follow_alert_duration', 'follow_text_delay', 'follow_show_animation', 'follow_hide_animation', 'follow_custom_html_enabled', 'follow_custom_html', 'follow_custom_js', 'follow_custom_css', 'follow_custom_json', 'sub_layout', 'sub_enabled', 'sub_message_template', 'sub_text_animation', 'sub_image_href', 'sub_sound_href', 'sub_sound_volume', 'sub_font', 'sub_font_size', 'sub_font_weight', 'sub_font_color', 'sub_font_color2', 'sub_alert_duration', 'sub_text_delay', 'sub_show_animation', 'sub_hide_animation', 'sub_custom_html_enabled', 'sub_custom_html', 'sub_custom_js', 'sub_custom_css', 'sub_custom_json', 'resub_message_font_size', 'resub_message_font', 'resub_message_font_weight', 'resub_message_font_color', 'resub_message_allow_emotes', 'resub_tts_enabled', 'resub_tts_include_message_template', 'resub_tts_language', 'resub_tts_security', 'resub_tts_repetition_block_length', 'resub_tts_volume', 'raid_layout', 'raid_enabled', 'raid_message_template', 'raid_text_animation', 'raid_image_href', 'raid_sound_href', 'raid_sound_volume', 'raid_font', 'raid_font_size', 'raid_font_weight', 'raid_font_color', 'raid_font_color2', 'raid_alert_duration', 'raid_text_delay', 'raid_raider_minimum', 'raid_show_animation', 'raid_hide_animation', 'raid_custom_html_enabled', 'raid_custom_html', 'raid_custom_js', 'raid_custom_css', 'raid_custom_json'];
    
  addTrovoArray.forEach(function (e) {
    var newKey = "trovo_" + e;
    obj[newKey] = obj[e];

    if (e == 'raid_text_delay' || e == 'sub_font_size' || e == 'follow_font_size' || e == 'raid_font_size' || e == 'resub_message_font_size' || e == 'sub_text_delay' || e == 'follow_text_delay') {
    } else {
      delete obj[e];
    }
  });

  obj['show_trovo_resub_message'] = obj['show_resub_message'];
  delete obj['show_resub_message'];
  
}

function setKeys(obj) {
  let setFontSizeArray = ['follow_font_size', 'sub_font_size', 'host_font_size', 'resub_message_font_size', 'bits_font_size', 'bits_message_font_size', 'raid_font_size', 'subscriber_font_size', 'sponsor_font_size', 'fanfunding_font_size', 'fanfunding_message_font_size', 'pledge_message_font_size', 'facebook_follow_font_size', 'facebook_share_font_size', 'facebook_stars_font_size', 'facebook_stars_message_font_size', 'facebook_like_font_size', 'facebook_support_font_size', 'facebook_support_gifter_font_size', 'sticker_font_size', 'sticker_message_font_size', 'effect_font_size', 'effect_message_font_size', 'prime_sub_gift_message_font_size'];
  
  // if num, convert to Strings
  let setFontSizeArray2 = ['donation_font_size', 'donation_message_font_size', 'pledge_font_size', 'eldonation_font_size', 'eldonation_message_font_size', 'tiltifydonation_font_size', 'tiltifydonation_message_font_size', 'gamewispsubscription_font_size', 'treat_font_size', 'treat_message_font_size', 'merch_font_size', 'merch_message_font_size', 'donordrivedonation_font_size', 'donordrivedonation_message_font_size', 'justgivingdonation_font_size', 'justgivingdonation_message_font_size', 'loyalty_store_redemption_font_size', 'loyalty_store_redemption_message_font_size', 'prime_sub_gift_font_size', 'sponsored_campaign_font_size', 'streamlabscharitydonation_font_size', 'streamlabscharitydonation_message_font_size', 'trovo_follow_font_size', 'trovo_sub_font_size', 'trovo_resub_message_font_size', 'trovo_raid_font_size'];
  
  let setAlertDurationArray = ['host_alert_duration', 'raid_alert_duration', 'follow_alert_duration', 'bits_alert_duration', 'host_text_delay', 'sub_alert_duration', 'bits_text_delay', 'sub_text_delay', 'follow_text_delay'];

  setFontSizeArray.forEach(function (e) {
    obj[e] = 10;
  });

  setFontSizeArray2.forEach(function (e) {
    let stringVar = obj[e];
    if (typeof stringVar === 'number')
    {
      let numVar = stringVar.toString();
      obj[e] = numVar;
    }
  });
  
  setAlertDurationArray.forEach(function (e) {
    obj[e] = 0;
  });
}

function copyText() {
  var textarea = document.getElementById("fetch-input");
  textarea.select();
  document.execCommand('copy');
}

function fetchCheck(string) {
  let fetchStr = string.slice(0, 53);
  if (fetchStr == "fetch(\"https://streamlabs.com/api/v5/widget/alertbox\"") {
    return true;
  } else {
    return false;
  }
}

function convertTrovo() {
  var textarea = document.getElementById("fetch-input");
  var textareaText = textarea.value;
  
  if (fetchCheck(textareaText)) {
    var fetchCmd = textareaText.slice(0, 55);
    var fetchCommand = textareaText.slice(55, -2);
    alertObj = JSON.parse(fetchCommand);
    alertSettings = alertObj["body"];
    alertSettingsObj = JSON.parse(alertSettings);
    console.log(alertSettingsObj);
    
    addTrovoKeys(alertSettingsObj); // add "trovo_" to Object Keys
    removeTwitchKeys(alertSettingsObj); // remove keys
    renameCodeKeys(alertSettingsObj); // format code keys
    setKeys(alertSettingsObj);
    
    strAlertSettingsObj = JSON.stringify(alertSettingsObj);
    escAlertSettingsObj = strAlertSettingsObj.replace(/\"/g, '\\"').replace(/~3qt~/g,'\\\\\\\"').replace(/~lnb~/g,'\\\\n').replace(/tz-index/g, '\\tz-index');
    
    const trovoCommand = '{\n  \"headers\": ' + JSON.stringify(alertObj["headers"], null, 4) + ', \n  \"referrer\": \"' + alertObj['referrer'] + '\", \n  \"referrerPolicy\": \"' + alertObj['referrerPolicy'] + '\", \n  \"body\": \"' + escAlertSettingsObj + '\", \n  \"method\": \"' + alertObj['method'] + '\", \n  \"mode\": \"' +  alertObj['mode'] + '\", \n  \"credentials\": \"' + alertObj['credentials'] + '\"'
    
    textarea.value = fetchCmd + trovoCommand + '\n});';

    $( "#copy-button" ).css("display", "inline-block");
    
  }
}

function removeTwitchKeys(obj) {
  let removeTwitchArray = ['host_variations', 'bit_variations', 'prime_sub_enabled', 'host_layout', 'host_enabled', 'host_message_template', 'host_text_animation', 'host_image_href', 'host_sound_href', 'host_sound_volume', 'host_font', 'host_font_weight', 'host_font_color', 'host_font_color2', 'auto_host_enabled', 'host_viewer_minimum', 'recent_events_host_min_viewer_count', 'host_show_animation', 'host_hide_animation', 'host_custom_html_enabled', 'host_custom_html', 'host_custom_js', 'host_custom_css', 'host_custom_json', 'bits_layout', 'bits_enabled', 'bits_tts_enabled', 'bits_tts_include_message_template', 'bits_tts_language', 'bits_tts_security', 'bits_tts_repetition_block_length', 'bits_tts_volume', 'bits_message_template', 'bits_text_animation', 'bits_image_href', 'bits_sound_href', 'bits_sound_volume', 'bits_font', 'bits_font_weight', 'bits_font_color', 'bits_font_color2', 'bits_alert_min_amount', 'bits_alert_message_min_amount', 'bits_tts_min_amount', 'show_bits_message', 'bits_show_animation', 'bits_hide_animation', 'bits_message_font', 'bits_message_font_weight', 'bits_message_font_color', 'bits_message_allow_emotes', 'bits_custom_html_enabled', 'bits_custom_html', 'bits_custom_js', 'bits_custom_css', 'bits_custom_json', 'recent_events_bits_min_amount', 'recent_events_raid_min_viewer_count'];
    
  removeTwitchArray.forEach(function (e) {
    delete obj[e];
  });
}

function renameCodeKeys(obj) {
  // custom html & css get escaped linebreaks: '\n' to '\\n'
  // custom html & js get escaped double quotes: '\\"' to '\\\"'
  const keys = Object.keys(obj);
  
  for (let i = 0; i < keys.length; i++) {
    const key = keys[i]; 

    if(key.includes("_custom_html") && !key.includes("_enabled")) {
      var newHTML1 = obj[key];
      if (!newHTML1) {
        obj[key] = null;
      } else {
        var newHTMLKey = newHTML1.replace(/\"/g, '~3qt~').replace(/\n/g, "\\n").replace(/\t/g, "\\t");
        obj[key] = newHTMLKey;
      }
    }

    if(key.includes("_custom_js") && !key.includes("_json")) {
      var newJS1 = obj[key];
      if (!newJS1) {
        obj[key] = null;
      } else {
        var newJSKey = newJS1.replace(/"/g, '~3qt~').replace(/\n/g, '\\n');
        obj[key] = newJSKey;
      }
    }

    if(key.includes("_custom_css")) {
      var newCSS1 = obj[key];
      if (!newCSS1) {
        obj[key] = null;
      } else {
        var newCSSKey = newCSS1.replace(/\n/g, "\\n").replace(/\t/g, "\\t");
        obj[key] = newCSSKey;
      }
    }

    if(key.includes("_custom_json")) {
      var newJSON = obj[key];
      if (!newJSON) {
        obj[key] = null;
      } else {
        // issue with getrekt here, test with getrektlabs_twitch_alertbox_donation-custom-json.txt
        //console.log(`key: ${key}, value: ${JSON.stringify(newJSON)}`);
        //obj[key] = JSON.stringify(newJSON);
        //console.log(`key: ${key}`);
        //console.log(newJSON);
        //console.log(JSON.parse(newJSON));
        //obj[key] = JSON.parse(newJSON);
        obj[key] = newJSON;
      }
    }
    
    if (key.includes("_variations") ) {
      if (obj[key]) {
        if (obj[key].length >= 1) {
          for (let i = 0; i < obj[key].length; i++) {
            var newHTML = obj[key][i]["settings"]["customHtml"].replace(/\"/g, '~3qt~').replace(/\n/g, "~lnb~");
            obj[key][i]["settings"]["customHtml"] = newHTML;
            var newCSS = obj[key][i]["settings"]["customCss"].replace(/\n/g, "~lnb~");
            obj[key][i]["settings"]["customCss"] = newCSS;
            var newJS = obj[key][i]["settings"]["customJs"].replace(/"/g, '~3qt~').replace(/\n/g, '~lnb~');
            obj[key][i]["settings"]["customJs"] = newJS;
            //console.log("Variation [" + i + "] set!");
          }
        }
      }
    }
  }
}