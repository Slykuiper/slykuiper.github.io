const iFrameURL = new URL(document.location.href);
const iFrameParams = new URLSearchParams(iFrameURL.search);
const eventType = iFrameParams.get("event");
const username = iFrameParams.get("username");

const messageTemplates = {"donation": `{name} tipped {amount}!`, "merch": `{name} bought {product}!`, "loyalty_store_redemption": `{name} redeemed {product}!`, "prime_sub_gift": `{name} gifted {giftType} Ultra subscription to {streamer}!`, "streamlabscharitydonation": `{name} donated {amount} via Streamlabs Charity!`, "follow": `{name} is now following!`, "sub": `{name} just subscribed!`, "resub": `{name} subscribed for {months} months!`, "host": `{name} is now hosting my stream with {count} viewers!`, "bits": `{name} cheered! x{amount}`, "raid": `{name} is raiding with a party of {count}!`, "subscriber": `{name} just subscribed!`, "sponsor": `{name} became a member!`, "fanfunding": `{name} tipped {amount} via Super Chat!`, "facebook_follow": `{name} is now following!`, "facebook_stars": `{name} has sent {amount} stars!`, "facebook_like": `{name} liked the stream!`, "facebook_support": `{name} has subscribed!`, "facebook_support_gifter": `{gifter} has gifted {count} subs!`, "facebook_share": `{name} has shared the stream!`, "trovo_follow": `{name} is now following!`, "trovo_sub": `{name} just subscribed!`, "trovo_raid": `{name} is raiding with a party of {count}!`, "pledge": `{name} pledged {amount} via Patreon!`, "sponsored_campaign": `{name} interacted with {campaign}!`, "donordrivedonation": `{name} donated {amount} to {charityName}!`, "eldonation": `{name} donated {amount} via ExtraLife!`, "tiltifydonation": `{name} donated {amount} via Tiltify!`, "treat": `{name} bought you a {title} treat!`, "justgivingdonation": `{name} donated {amount} via JustGiving!`, "gamewispsubscription": `{name} just subscribed!`};
let eventNames = {"donation": "Donation", "merch": "Merch", "loyalty_store_redemption": "Cloudbot Redemption", "prime_sub_gift": "Ultra Gift", "streamlabscharitydonation": "Charity", "follow": "Follow", "sub": "Sub", "resub": "Resub", "host": "Host", "bits": "Bits", "raid": "Raid", "subscriber": "Sub", "sponsor": "Member", "fanfunding": "Super Chat", "facebook_follow": "Follow", "facebook_stars": "Stars", "facebook_like": "Like", "facebook_support": "Support", "facebook_support_gifter": "Support Gifter", "facebook_share": "Share", "trovo_follow": "Follow", "trovo_sub": "Sub", "trovo_raid": "Raid", "pledge": "Pledge", "sponsored_campaign": "Campaign", "donordrivedonation": "Charity", "eldonation": "Charity", "tiltifydonation": "Charity", "treat": "Treat", "justgivingdonation": "Charity", "gamewispsubscription": "Game Wisp"};
const merchProducts = ["T-Shirt", "Mug", "Hat", "Joggers", "Hoodie", "Mousepad"];
const usernames2 = ["Jane", "John", "Michael", "Jeremy", "Joshua", "Hailey"];
const charityNames = ["American Red Cross", "Project HOPE", "Feeding America", "Stand Up To Cancer", "Skate Bud", "Robotics For All"];
const treats = ["Pizza", "Candy", "Chipotle", "Burrito", "Burger", "Nachos", "Chili", "Soup", "Sandwich"];
const giftTypes = ["Annual", "Monthly"];

let theme = {};
fetch(`./settings.json`)
    .then((response) => response.json())
    .then((json) => {
        theme = json;

        replaceVariables();
        mainFunction();
    });

function replaceVariables() {
  let messageSettings = getMessageSettings(eventType, username);
  let alertEventEl = document.querySelector("#alert-event");
  let alertImageEl = document.querySelector('#alert-image');
  let alertMessageEl = document.querySelector('#alert-message');
  let alertUsermessageEl = document.querySelector('#alert-user-message');

  if (alertImageEl && alertImageEl.textContent.includes("{img}")) {
    alertImageEl.textContent = alertImageEl.textContent.replace("{img}", theme.image_href);
  }

  if (alertMessageEl && alertMessageEl.textContent.includes("{messageTemplate}")) {
    alertMessageEl.textContent = alertMessageEl.textContent.replace("{messageTemplate}", messageSettings["messageTemplate"]);
  }

  if (alertEventEl && alertEventEl.textContent.includes("{event}")) {
    alertEventEl.textContent = alertEventEl.textContent.replace("{event}", `New ${eventNames[eventType]}!`);
  }

  if (alertUsermessageEl && alertUsermessageEl.textContent.includes("{userMessage}")) {
    if (eventType === "bits" || eventType === "donation" )
    {
      alertUsermessageEl.textContent = alertUsermessageEl.textContent.replace("{userMessage}", messageSettings["userMessage"]);
    } else {
      alertUsermessageEl.textContent = '';
    }
  }
}

function getMessageSettings(event, name) {
    let messageTemplate = messageTemplates[event];

    if (messageTemplate.includes('{name}')) {
      messageTemplate = messageTemplate.replace("{name}", name);
    }
    if (messageTemplate.includes('{product}')) {
      if (event === "loyalty_store_redemption") {
        messageTemplate = messageTemplate.replace("{product}", "Dummy");
      } else { // merch
        messageTemplate = messageTemplate.replace("{product}", merchProducts[Math.floor(Math.random() * merchProducts.length)]);
      }
      
    }
    if (messageTemplate.includes('{amount}')) {
      if (event === "donation" || event === "streamlabscharitydonation" || event === "fanfunding" || event === "pledge" || event === "donordrivedonation" || event === "tiltifydonation" || event === "eldonation" || event === "justgivingdonation") {
        let amount = getRandomInt(5, 200).toString() + ".00"; 
        messageTemplate = messageTemplate.replace("{amount}", `$${amount}`);
      }
      if (event === "bits" || event === "facebook_stars") {
        let amount = getRandomInt(5, 10000).toString(); 
        messageTemplate = messageTemplate.replace("{amount}", amount);
      }
    }
    if (messageTemplate.includes('{months}')) {
      let months = getRandomInt(2, 12).toString(); 
      messageTemplate = messageTemplate.replace("{months}", months);
    }
    if (messageTemplate.includes('{giftType}')) {
      messageTemplate = messageTemplate.replace("{giftType}", giftTypes[Math.floor(Math.random() * giftTypes.length)]);
    }
    if (messageTemplate.includes('{streamer}')) {
      messageTemplate = messageTemplate.replace("{streamer}", usernames2[Math.floor(Math.random() * usernames2.length)]);
    }
    if (messageTemplate.includes('{gifter}')) {
      messageTemplate = messageTemplate.replace("{gifter}", usernames2[Math.floor(Math.random() * usernames2.length)]);
    }
    if (messageTemplate.includes('{count}')) {
      let count = getRandomInt(5, 800).toString();  
      messageTemplate = messageTemplate.replace("{count}", count);
    }
    if (messageTemplate.includes('{campaign}')) { 
      messageTemplate = messageTemplate.replace("{campaign}", "Plarium");
    }
    if (messageTemplate.includes('{title}')) {
      messageTemplate = messageTemplate.replace("{title}", treats[Math.floor(Math.random() * treats.length)]);
    }
    if (messageTemplate.includes('{charityName}')) {
      messageTemplate = messageTemplate.replace("{charityName}", charityNames[Math.floor(Math.random() * charityNames.length)]);
    }
    


    //console.log(`${event}: ${messageTemplate}`);

    let userMessage = 'This is a test';
    /*
    if (event === "donation" ) {
      userMessage = `This is a test donation for $${amount}.`;
    } else if (event === "bits" ) {
      userMessage = `${amount} this is a test bit alert.`;
    }
    */
    return {"messageTemplate": messageTemplate, "userMessage": userMessage};
  }

  function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min) + min); // The maximum is exclusive and the minimum is inclusive
  }