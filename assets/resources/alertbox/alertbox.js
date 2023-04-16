/* TODO:
- make some cool shit
*/

var isClickable = true;
//var vrView;
let themeID;
const eventNames = {"donation": "Donation", "merch": "Merch", "loyalty_store_redemption": "Cloudbot Redemption", "prime_sub_gift": "Ultra Gift", "streamlabscharitydonation": "Charity", "follow": "Follow", "sub": "Sub", "resub": "Resub", "host": "Host", "bits": "Bits", "raid": "Raid", "subscriber": "Sub", "sponsor": "Member", "fanfunding": "Super Chat", "facebook_follow": "Follow", "facebook_stars": "Stars", "facebook_like": "Like", "facebook_support": "Support", "facebook_support_gifter": "Support Gifter", "facebook_share": "Share", "trovo_follow": "Follow", "trovo_sub": "Sub", "trovo_raid": "Raid", "pledge": "Pledge", "sponsored_campaign": "Campaign", "donordrivedonation": "Charity", "eldonation": "Charity", "tiltifydonation": "Charity", "treat": "Treat", "justgivingdonation": "Charity", "gamewispsubscription": "Game Wisp"};
const eventPlatforms = {"donation": "streamlabs", "merch": "streamlabs", "loyalty_store_redemption": "streamlabs", "prime_sub_gift": "streamlabs", "streamlabscharitydonation": "streamlabs", "follow": "twitch", "sub": "twitch", "resub": "twitch", "host": "twitch", "bits": "twitch", "raid": "twitch", "subscriber": "youtube", "sponsor": "youtube", "fanfunding": "youtube", "facebook_follow": "facebook", "facebook_stars": "facebook", "facebook_like": "facebook", "facebook_support": "facebook", "facebook_support_gifter": "facebook", "facebook_share": "facebook", "trovo_follow": "trovo", "trovo_sub": "trovo", "trovo_raid": "trovo", "pledge": "patreon", "sponsored_campaign": "streamlabs", "donordrivedonation": "donordrive", "eldonation": "extralife", "tiltifydonation": "tiltify", "treat": "treatstream", "justgivingdonation": "justgiving"};
const eventOptions = {
  "streamlabs": {
    "donation": "Donation",
    "merch": "Merch",
    "loyalty_store_redemption": "Cloudbot Redemption",
    "prime_sub_gift": "SL Ultra Gift"
  },
  "twitch": {
    "follow": "Follow",
    "sub": "Sub",
    "resub": "Resub",
    "bits": "Bits",
    "raid": "Raid"
  },
  "youtube": {
    "subscriber": "Sub",
    "sponsor": "Member",
    "fanfunding": "Super Chat"
  },
  "facebook": {
    "facebook_follow": "Follow", 
    "facebook_stars": "Stars",
    "facebook_like": "Like", 
    "facebook_support": "Support", 
    "facebook_support_gifter": "Support Gifter", 
    "facebook_share": "Share",
  },
  "trovo": {
    "trovo_follow": "Follow",
    "trovo_sub": "Sub",
    "trovo_raid": "Raid",
  },
  "streamlabscharitydonation": "SL Charity",
  "pledge": "Patreon Pledge",
  "donordrivedonation": "DonorDrive Donations",
  "eldonation": "ExtraLife Donations",
  "tiltifydonation": "Tiltify",
  "treat": "TreatStream",
  "justgivingdonation": "JustGiving"
};

const usernames = ["Corbin", "Slykuiper", "AlKaT", "SamuraiiFunn", "Ethereum_May0", "zzzJump", "xOMAR", "DominoEffect", "DeusXMac", "Hell_O", "AlMat", "IdleHands", "Blindstrike", "Wackojacko", "Lucci", "NoBuddie", "rentBurger", "ar33is", "LucyFurr", "TyGrieves", "HurryUp", "Porknotch", "Rosebed", "MaraconiCheese", "HandsUp", "ChatHarder", " FollowPLS", "NovaGG", "mitchEDITS", "superBONK", "Elytra"]; 
var theme = {};

$( document ).ready(function() {
  themeID = $('#theme-id')[0].innerHTML;
  watchSelector();

  fetch(`./assets/resources/alertbox/themes/${themeID}/settings.json`)
    .then((response) => response.json())
    .then((json) => {
      theme = json;

      $('#play-button').on("click", function() {
        if (isClickable) {
          isClickable = false;
          $('#play-button')[0].classList.add("not-clickable");
          // add clickable support, show duration bar, support other events
          let alertLevel = getSelectedLevel();
          if (alertLevel === 'platformParent') {
            let event = $("#selector").find(":selected").val();
            sendAlert(event, theme, '#widget-frame-sm')
          }

          if (alertLevel === 'platformChild') {
            let platform = $("#selector").find(":selected").val();
            let eventText = $("#event-selector").find(":selected").text();
            let event = $("#event-selector").find(":selected").val();

            if (event == 'random') {
              let obj = eventOptions[platform];
              var keyArray = Object.keys(obj);
              let randomEvent = keyArray[Math.floor(Math.random() * keyArray.length)];
              sendAlert(randomEvent, theme, '#widget-frame-sm')
            } else {
              sendAlert(event, theme, '#widget-frame-sm')
            }
          }
        }
      });

      
      let eventArray = Object.keys(eventPlatforms);
      let randomEvent = eventArray[Math.floor(Math.random() * eventArray.length)];
      setTimeout(sendAlert(randomEvent, theme, '#widget-frame'), 1500);
      setTimeout(sendAlertLoop(theme, '#widget-frame'), 1500);
    });
});

function getSelectedLevel() {
  let option = $("#selector").find(":selected").val();

  if (typeof eventOptions[option] === 'string') {
    return 'platformParent';
  } else if (typeof eventOptions[option] === 'object') {
    return 'platformChild';
  }
}

function watchSelector() {
  // watch selector, change text on select
  let option = $("#selector").find(":selected").text();
  $('#play-button')[0].textContent = `Test ${option} Alert`;
  checkEventDropdown();
  
  $("#selector").on("change", function() {
    option = $("#selector").find(":selected").text();
    $('#play-button')[0].textContent = `Test ${option} Alert`;
    checkEventDropdown();
  });
}

function checkEventDropdown() {
  let alertLevel = getSelectedLevel();

  if ($('#event-selector').length) {
    $('#event-selector')[0].remove();
  }

  if (alertLevel === 'platformChild') {
    createEventDropdown();
  }
}

function createEventDropdown() {
  let platform = $("#selector").find(":selected").val();
  let platformObj = eventOptions[platform];

  let platformEventSelector = document.createElement('select');
  platformEventSelector.id = 'event-selector';
  $('#selector')[0].insertAdjacentElement('afterend', platformEventSelector);

  let platformEventOption = document.createElement('option');
  platformEventOption.textContent = 'Random Event';
  platformEventOption.value = 'random';
  platformEventSelector.insertAdjacentElement('beforeend', platformEventOption);

  for (const [key, value] of Object.entries(platformObj)) {
    let platformEventOption = document.createElement('option');
    platformEventOption.textContent = value;
    platformEventOption.value = key;
    platformEventSelector.insertAdjacentElement('beforeend', platformEventOption);
  }
}

function sendAlertLoop(theme, parentEl) {
  setInterval(() => {
    let eventArray = Object.keys(eventPlatforms);
    let randomEvent = eventArray[Math.floor(Math.random() * eventArray.length)];
    sendAlert(randomEvent, theme, parentEl);
  }, theme.alert_duration + 100);
}

function sendAlert(event, theme, parentEl) {
  let username = getUsername();

  if (theme.custom_html_enabled) {
    const iframe = document.createElement('iframe');
    iframe.src = `/assets/resources/alertbox/themes/${themeID}/custom_html.html?event=${event}&username=${username}`;
    iframe.style.border = '0px';
    iframe.style.position = 'relative';
    iframe.style.height = '100%';
    iframe.style.width = '100%';
    iframe.setAttribute('data-tilt', '');
    iframe.setAttribute('data-tilt-full-page-listening', '');
    $(parentEl)[0].innerHTML = '';
    $(parentEl)[0].appendChild(iframe);
    
    if (parentEl == '#widget-frame') {setEventList(event);}
    
  } else {
    setLayout(theme);
    
    let msg = setMessageTemplate(event, username, theme.font_color2);
    if (parentEl == '#widget-frame') {setEventList(event, msg);}
    setThemeImage(theme.image_href);
  }
  // create duration bar
  if (parentEl == '#widget-frame-sm') {
    let tlDuration = theme.alert_duration / 1000;
    if ($('.event-duration-bar').length) {
      let tl = gsap.timeline();
      tl.fromTo(".event-duration-bar", { width: '100%'}, { width: '0%', duration: tlDuration });
    } else {
      let eventDurationBar = document.createElement('div');
      eventDurationBar.classList.add('event-duration-bar');
      $('.widget-wrap-sm')[0].insertAdjacentElement('afterbegin', eventDurationBar);

      let tl = gsap.timeline();
      tl.to(".event-duration-bar", { width: '0%', duration: tlDuration });
    }
  }

  setThemeDuration(theme.alert_duration, theme.show_animation, theme.hide_animation, parentEl);
}

function setLayout(theme) {
  const defaultLayout = `
    <div id="alert-image-wrap">
      <div id="alert-image"></div>
    </div>
    <div id="alert-text-wrap">
      <div id="alert-text">
        <div id="alert-message"></div>
        <div id="alert-user-message"></div>
      </div>
    </div>
    `;
  let wrapEl = $('#wrap')[0];
  wrapEl.textContent = '';
  wrapEl.innerHTML = defaultLayout;

  $('#alert-message')[0].style.fontFamily = theme.font;
  $('#alert-message')[0].style.fontSize = theme.font_size;
  $('#alert-message')[0].style.fontWeight = theme.font_weight;
  $('#alert-message')[0].style.color = theme.font_color;
}

async function setThemeDuration(duration, show_animation, hide_animation, parentEl) {
  if (show_animation === 'none') {
    $(parentEl)[0].classList.remove('hidden');
    $(parentEl)[0].classList.add('animated');
    const result1 = await setVisibility(duration, hide_animation, parentEl);
    if (parentEl == '#widget-frame-sm') {isClickable = true; $('#play-button')[0].classList.remove("not-clickable");}
  } else {
    $(parentEl)[0].classList.remove('hidden');
    $(parentEl)[0].classList.add('animated', show_animation);
    const result0 = await setFadeOut(duration - 1000, show_animation, hide_animation, parentEl);
    const result1 = await setVisibility(1000, hide_animation, parentEl);
    if (parentEl == '#widget-frame-sm') {isClickable = true; $('#play-button')[0].classList.remove("not-clickable");}
  }
}

function setFadeOut(duration, show_animation, hide_animation, parentEl) {
  return new Promise(resolve => {
    setTimeout(() => {
      $(parentEl)[0].classList.remove(show_animation);
      $(parentEl)[0].classList.add(hide_animation);
      resolve(`fadeOut ${duration}`);
    }, duration);
  });
}

function setVisibility(duration, hide_animation, parentEl) {
  if (hide_animation === 'none') {
    return new Promise(resolve => {
      setTimeout(() => {
        $(parentEl)[0].classList.remove('animated');
        $(parentEl)[0].classList.add('hidden');
        $(parentEl)[0].innerHTML = '';
        resolve(`hidden ${duration}`);
      }, duration);
    });
  } else {
    return new Promise(resolve => {
      setTimeout(() => {
        console.log(parentEl);
        $(parentEl)[0].classList.remove('animated', hide_animation);
        $(parentEl)[0].classList.add('hidden');
        $(parentEl)[0].innerHTML = '';
        resolve(`hidden ${duration}`);
      }, duration);
    });
  }
}

function setEventList(event, message) {
  if ($('.event-item').length) {
    $('.event-item')[0].remove();
  }

  console.log(`event: ${event}`);
  let eventItem = document.createElement('div');
  eventItem.classList.add('event-item');
  $('.eventlist')[0].insertAdjacentElement('beforeend', eventItem);

  let platform = eventPlatforms[event];
  let eventPlatform = document.createElement('span');
  eventPlatform.textContent = platform;
  eventPlatform.classList.add(`event-${platform}`);
  eventPlatform.classList.add(`event-platform`);
  $('.event-item')[0].insertAdjacentElement('beforeend', eventPlatform);

  if (platform === 'twitch' || platform === 'facebook' || platform === 'youtube' || platform === 'trovo') {
    // event element
    let eventType = document.createElement('span');
    let eventName = eventNames[event];
    eventType.classList.add(`event-default`);
    eventType.textContent = eventName.charAt(0).toUpperCase() + eventName.slice(1);
    $('.event-item')[0].insertAdjacentElement('beforeend', eventType);
  }
  
  /*
  if (message) {
    let eventMessage = document.createElement('span');
    eventMessage.classList.add(`event-default`);
    eventMessage.textContent = message.charAt(0).toUpperCase() + message.slice(1);
    $('.event-item')[0].insertAdjacentElement('beforeend', eventMessage);
  }
  */

  let tl = gsap.timeline({ defaults: {duration: 1} })
  tl.fromTo(".event-item", { y: '10', opacity: '0' }, { y: '0', opacity: '1', ease: "elastic.out(1, 1)" });
}

async function setThemeImage(img) {
  if (img) {
    var imageElem = $('#alert-image');
    let eventImageHrefType = img.substring(img.lastIndexOf('.')+1);
    let blob = await fetch(img).then(r => r.blob());
    var mediaURL = createObjectURL(blob);

    if (eventImageHrefType == "gif" || eventImageHrefType == "png" || eventImageHrefType == "jpg") {
      // remove video elem if exists
      if ($('#webm-video').length < 0) {
        $('#webm-video').remove();
      }

      // create img elem if doesnt exist
      if ($('#alert-image > img').length == 0) {
        let innerImageElem = document.createElement("img");
        imageElem.append(innerImageElem);
      }

      $('#alert-image')[0].style.backgroundImage = `url(${mediaURL})`;
      $('#alert-image')[0].style.backgroundRepeat = 'no-repeat';
      $('#alert-image')[0].style.backgroundSize = 'contain';
      $('#alert-image')[0].style.backgroundPosition = 'center';

      $('#alert-image > img')[0].setAttribute('src', mediaURL);
      $('#alert-image > img')[0].style.opacity = 0;
      $('#alert-image > img')[0].style.width = '1px';
      $('#alert-image > img')[0].style.height = '1px';
    } else if (eventImageHrefType == "webm" || eventImageHrefType == "mp4") {
      // remove img elem if exists
      if ($('#alert-image > img').length < 0) {
        $('#alert-image > img').remove();
      }

      // create video elem if doesnt exist
      if ($('#webm-video').length == 0) {
        let videoElem = document.createElement("video");
        imageElem.append(videoElem);
        videoElem.setAttribute('id','webm-video');
        videoElem.autoplay = true;
        videoElem.loop = true;
      }

      $('#webm-video')[0].setAttribute('src', mediaURL);
      playVideo($('#webm-video')[0]);
    }
  }
}

function getUsername() {
  const randomName = Math.floor(Math.random() * usernames.length);
  return usernames[randomName];
}

function setMessageTemplate(event, name, highlightcolor) {
  let messageTemplate = '';
  $('#alert-message')[0].innerHTML = '';

  addMsgSpan(name, 'name', highlightcolor, $('#alert-message')[0]);
  
  if (event === "follow") {
    messageTemplate = `${name} has followed!`;
    $('#alert-message')[0].append(' has followed!');
  } else if (event === "sub" ) {
    messageTemplate = `${name} has subscribed!`;
    $('#alert-message')[0].append(' has subscribed!');
  } else if (event === "donation" ) {
    let amount = getRandomInt(5, 200).toString() + ".00"; 
    messageTemplate = `${name} has tipped $${amount}!`;

    $('#alert-user-message')[0].innerHTML = `This is a test donation for $${amount}.`;
    $('#alert-message')[0].append(' has tipped $');
    addMsgSpan(amount, 'amount', highlightcolor, $('#alert-message')[0]);
    $('#alert-message')[0].append('!');
  } else if (event === "bits" ) {
    let amount = getRandomInt(5, 5000).toString(); 
    messageTemplate = `${name} cheered! x${amount}!`;

    $('#alert-user-message')[0].innerHTML = `${amount} this is a test bit alert.`;
    $('#alert-message')[0].append(' cheered! x');
    addMsgSpan(amount, 'amount', highlightcolor, $('#alert-message')[0]);
    $('#alert-message')[0].append('!');
  } else if (event === "raid" ) {
    let amount = getRandomInt(5, 800).toString();  
    messageTemplate = `${name} has raided with ${amount} viewers!`;
    $('#alert-message')[0].append(' has raided with ');
    addMsgSpan(amount, 'amount', highlightcolor, $('#alert-message')[0]);
    $('#alert-message')[0].append(' viewers!');
  } else if (event === "merch" ) {
    const products = ["T-Shirt", "Mug", "Hat", "Joggers", "Hoodie", "Mousepad"];
    const randomProduct = Math.floor(Math.random() * products.length);
    let product = products[randomProduct];
    messageTemplate = `${name} bought ${product}!`;
    $('#alert-message')[0].append(' bought ');
    addMsgSpan(product, 'product', highlightcolor, $('#alert-message')[0]);
  }
  return messageTemplate;
}

function addMsgSpan(textContent, tokenString, highlightcolor, parentElem) {
  let spanElem = document.createElement('span');
  spanElem.setAttribute('data-token', tokenString);
  spanElem.style.color = highlightcolor;
  spanElem.textContent = textContent;

  parentElem.append(spanElem);
}

async function playVideo(elem) {
  try {
    elem.currentTime = 0;
    await elem.play();
    elem.classList.add("playing");
  } catch (err) {
    console.log(err);
  }
}

function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min) + min); // The maximum is exclusive and the minimum is inclusive
}

function createObjectURL(object) {
  return (window.URL) ? window.URL.createObjectURL(object) : window.webkitURL.createObjectURL(object);
}