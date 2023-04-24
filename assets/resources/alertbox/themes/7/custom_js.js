let previewMode = 1;
let iconType = 'fill';
let eventIcons = {
    "{eventType}": {
		"fill": 'https://raw.githubusercontent.com/Slykuiper/slykuiper.github.io/main/assets/resources/alertbox/icons/currency-fill.svg',
		"line": 'https://raw.githubusercontent.com/Slykuiper/slykuiper.github.io/main/assets/resources/alertbox/icons/currency-line.svg'
	}, 
	"donation": {
		"fill": 'https://raw.githubusercontent.com/Slykuiper/slykuiper.github.io/main/assets/resources/alertbox/icons/currency-fill.svg',
		"line": 'https://raw.githubusercontent.com/Slykuiper/slykuiper.github.io/main/assets/resources/alertbox/icons/currency-line.svg'
	}, 
	"fanfunding": {
		"fill": 'https://raw.githubusercontent.com/Slykuiper/slykuiper.github.io/main/assets/resources/alertbox/icons/currency-fill.svg',
		"line": 'https://raw.githubusercontent.com/Slykuiper/slykuiper.github.io/main/assets/resources/alertbox/icons/currency-line.svg'
	},
	"bits": {
		"fill": 'https://raw.githubusercontent.com/Slykuiper/slykuiper.github.io/main/assets/resources/alertbox/icons/tokens-fill.svg',
		"line": 'https://raw.githubusercontent.com/Slykuiper/slykuiper.github.io/main/assets/resources/alertbox/icons/tokens-line.svg'
	},
	"facebook_stars": {
		"fill": 'https://raw.githubusercontent.com/Slykuiper/slykuiper.github.io/main/assets/resources/alertbox/icons/tokens-fill.svg',
		"line": 'https://raw.githubusercontent.com/Slykuiper/slykuiper.github.io/main/assets/resources/alertbox/icons/tokens-line.svg'
	},
	"donordrivedonation": {
		"fill": 'https://raw.githubusercontent.com/Slykuiper/slykuiper.github.io/main/assets/resources/alertbox/icons/charity-fill.svg',
		"line": 'https://raw.githubusercontent.com/Slykuiper/slykuiper.github.io/main/assets/resources/alertbox/icons/charity-line.svg'
	},
	"eldonation": {
		"fill": 'https://raw.githubusercontent.com/Slykuiper/slykuiper.github.io/main/assets/resources/alertbox/icons/charity-fill.svg',
		"line": 'https://raw.githubusercontent.com/Slykuiper/slykuiper.github.io/main/assets/resources/alertbox/icons/charity-line.svg'
	},
	"tiltifydonation": {
		"fill": 'https://raw.githubusercontent.com/Slykuiper/slykuiper.github.io/main/assets/resources/alertbox/icons/charity-fill.svg',
		"line": 'https://raw.githubusercontent.com/Slykuiper/slykuiper.github.io/main/assets/resources/alertbox/icons/charity-line.svg'
	},
	"justgivingdonation": {
		"fill": 'https://raw.githubusercontent.com/Slykuiper/slykuiper.github.io/main/assets/resources/alertbox/icons/charity-fill.svg',
		"line": 'https://raw.githubusercontent.com/Slykuiper/slykuiper.github.io/main/assets/resources/alertbox/icons/charity-line.svg'
	},
	"streamlabscharitydonation": {
		"fill": 'https://raw.githubusercontent.com/Slykuiper/slykuiper.github.io/main/assets/resources/alertbox/icons/charity-fill.svg',
		"line": 'https://raw.githubusercontent.com/Slykuiper/slykuiper.github.io/main/assets/resources/alertbox/icons/charity-line.svg'
	},
	"follow": {
		"fill": 'https://raw.githubusercontent.com/Slykuiper/slykuiper.github.io/main/assets/resources/alertbox/icons/follow-fill.svg',
		"line": 'https://raw.githubusercontent.com/Slykuiper/slykuiper.github.io/main/assets/resources/alertbox/icons/follow-line.svg'
	},
	"facebook_follow": {
		"fill": 'https://raw.githubusercontent.com/Slykuiper/slykuiper.github.io/main/assets/resources/alertbox/icons/follow-fill.svg',
		"line": 'https://raw.githubusercontent.com/Slykuiper/slykuiper.github.io/main/assets/resources/alertbox/icons/follow-line.svg'
	},
	"subscriber": {
		"fill": 'https://raw.githubusercontent.com/Slykuiper/slykuiper.github.io/main/assets/resources/alertbox/icons/follow-fill.svg',
		"line": 'https://raw.githubusercontent.com/Slykuiper/slykuiper.github.io/main/assets/resources/alertbox/icons/follow-line.svg'
	},
	"trovo_follow": {
		"fill": 'https://raw.githubusercontent.com/Slykuiper/slykuiper.github.io/main/assets/resources/alertbox/icons/follow-fill.svg',
		"line": 'https://raw.githubusercontent.com/Slykuiper/slykuiper.github.io/main/assets/resources/alertbox/icons/follow-line.svg'
	},
	"sub": {
		"fill": 'https://raw.githubusercontent.com/Slykuiper/slykuiper.github.io/main/assets/resources/alertbox/icons/subscribe-fill.svg',
		"line": 'https://raw.githubusercontent.com/Slykuiper/slykuiper.github.io/main/assets/resources/alertbox/icons/subscribe-line.svg'
	},
	"resub": {
		"fill": 'https://raw.githubusercontent.com/Slykuiper/slykuiper.github.io/main/assets/resources/alertbox/icons/subscribe-fill.svg',
		"line": 'https://raw.githubusercontent.com/Slykuiper/slykuiper.github.io/main/assets/resources/alertbox/icons/subscribe-line.svg'
	},
	"facebook_support": {
		"fill": 'https://raw.githubusercontent.com/Slykuiper/slykuiper.github.io/main/assets/resources/alertbox/icons/subscribe-fill.svg',
		"line": 'https://raw.githubusercontent.com/Slykuiper/slykuiper.github.io/main/assets/resources/alertbox/icons/subscribe-line.svg'
	},
	"sponsor": {
		"fill": 'https://raw.githubusercontent.com/Slykuiper/slykuiper.github.io/main/assets/resources/alertbox/icons/subscribe-fill.svg',
		"line": 'https://raw.githubusercontent.com/Slykuiper/slykuiper.github.io/main/assets/resources/alertbox/icons/subscribe-line.svg'
	},
	"trovo_sub": {
		"fill": 'https://raw.githubusercontent.com/Slykuiper/slykuiper.github.io/main/assets/resources/alertbox/icons/subscribe-fill.svg',
		"line": 'https://raw.githubusercontent.com/Slykuiper/slykuiper.github.io/main/assets/resources/alertbox/icons/subscribe-line.svg'
	},
	"pledge": {
		"fill": 'https://raw.githubusercontent.com/Slykuiper/slykuiper.github.io/main/assets/resources/alertbox/icons/subscribe-fill.svg',
		"line": 'https://raw.githubusercontent.com/Slykuiper/slykuiper.github.io/main/assets/resources/alertbox/icons/subscribe-line.svg'
	},
	"facebook_support_gifter": {
		"fill": 'https://raw.githubusercontent.com/Slykuiper/slykuiper.github.io/main/assets/resources/alertbox/icons/gift-fill.svg',
		"line": 'https://raw.githubusercontent.com/Slykuiper/slykuiper.github.io/main/assets/resources/alertbox/icons/gift-line.svg'
	},
	"prime_sub_gift": {
		"fill": 'https://raw.githubusercontent.com/Slykuiper/slykuiper.github.io/main/assets/resources/alertbox/icons/gift-fill.svg',
		"line": 'https://raw.githubusercontent.com/Slykuiper/slykuiper.github.io/main/assets/resources/alertbox/icons/gift-line.svg'
	},
	"host": {
		"fill": 'https://raw.githubusercontent.com/Slykuiper/slykuiper.github.io/main/assets/resources/alertbox/icons/viewers-fill.svg',
		"line": 'https://raw.githubusercontent.com/Slykuiper/slykuiper.github.io/main/assets/resources/alertbox/icons/viewers-line.svg'
	},
	"raid": {
		"fill": 'https://raw.githubusercontent.com/Slykuiper/slykuiper.github.io/main/assets/resources/alertbox/icons/viewers-fill.svg',
		"line": 'https://raw.githubusercontent.com/Slykuiper/slykuiper.github.io/main/assets/resources/alertbox/icons/viewers-line.svg'
	},
	"trovo_raid": {
		"fill": 'https://raw.githubusercontent.com/Slykuiper/slykuiper.github.io/main/assets/resources/alertbox/icons/viewers-fill.svg',
		"line": 'https://raw.githubusercontent.com/Slykuiper/slykuiper.github.io/main/assets/resources/alertbox/icons/viewers-line.svg'
	},
	"facebook_like": {
		"fill": 'https://raw.githubusercontent.com/Slykuiper/slykuiper.github.io/main/assets/resources/alertbox/icons/like-fill.svg',
		"line": 'https://raw.githubusercontent.com/Slykuiper/slykuiper.github.io/main/assets/resources/alertbox/icons/like-line.svg'
	},
	"facebook_share": {
		"fill": 'https://raw.githubusercontent.com/Slykuiper/slykuiper.github.io/main/assets/resources/alertbox/icons/share-fill.svg',
		"line": 'https://raw.githubusercontent.com/Slykuiper/slykuiper.github.io/main/assets/resources/alertbox/icons/share-line.svg'
	},
	"sponsored_campaign": {
		"fill": 'https://raw.githubusercontent.com/Slykuiper/slykuiper.github.io/main/assets/resources/alertbox/icons/campaign-fill.svg',
		"line": 'https://raw.githubusercontent.com/Slykuiper/slykuiper.github.io/main/assets/resources/alertbox/icons/campaign-line.svg'
	},
	"treat": {
		"fill": 'https://raw.githubusercontent.com/Slykuiper/slykuiper.github.io/main/assets/resources/alertbox/icons/treat-fill.svg',
		"line": 'https://raw.githubusercontent.com/Slykuiper/slykuiper.github.io/main/assets/resources/alertbox/icons/treat-line.svg'
	},
	"loyalty_store_redemption": {
		"fill": 'https://raw.githubusercontent.com/Slykuiper/slykuiper.github.io/main/assets/resources/alertbox/icons/cloudbot-fill.svg',
		"line": 'https://raw.githubusercontent.com/Slykuiper/slykuiper.github.io/main/assets/resources/alertbox/icons/cloudbot-line.svg'
	},
	"merch":  {
		"fill": 'https://raw.githubusercontent.com/Slykuiper/slykuiper.github.io/main/assets/resources/alertbox/icons/merch-fill.svg',
		"line": 'https://raw.githubusercontent.com/Slykuiper/slykuiper.github.io/main/assets/resources/alertbox/icons/merch-line.svg'
	}
};

window.addEventListener("message",  function(obj) {
    if (obj.data.type === 'display' ) {
       	updateElements(obj.data);
    }
});

function mainFunction() {
    const scripts = ['https://cdnjs.cloudflare.com/ajax/libs/gsap/3.11.5/gsap.min.js'];
    let fetchedStatus = {};
    scripts.forEach(script => fetchedStatus[script] = false);
    
    // ensure necessary external scripts are loaded and available
    function ensureDependencies() {
        return new Promise((resolve, reject) => {
            // check if scripts have already been fetched
            if (Object.values(fetchedStatus).every(script => script)) {
                resolve();
            } else {
            // request all scripts provided
                Promise.all(scripts.map(script => getScriptPromise(script))).then(() => { 
                    resolve();
                }).catch(reason => { 
                    reject(reason);
                });
            }
        });
    }
    
    // wrap $.getScript in promise, fetch a single script
    function getScriptPromise(script) {
        return new Promise((resolve, reject) => {
            $.getScript(script).done(() => {
                // store successful fetch
                fetchedStatus[script] = true;
                resolve();
            }).fail(() => {
                reject(`external javascript error: script ${script} failed to load`);
            });
        });
    }
    
    ensureDependencies().then(() => {
        eventCheck();
        eventIcon(iconType);
        runTimeline();
    });
}

function updateElements(event) {
    let alertEventEl = document.querySelector("#alert-event");
    if ( event.constructor === Object && Object.keys(event).length > 0 ) {
        eventSettings = event.message.message;
        if (eventSettings.type != null) {
            let event = eventSettings.type;
            alertEventEl.innerHTML = `New ${event}!`;
            alertEventEl.style.display = 'flex';
            document.querySelector("#alert-icon").src = eventIcons[event][iconType];
        }
    } else {
        alertEventEl.style.display = 'none';
    }
}

function eventCheck() {
    let alertEventEl = document.querySelector("#alert-event");
    if (alertEventEl.innerHTML.length) {
        alertEventEl.style.display = 'flex';
    } else {
        alertEventEl.style.display = 'none';
    }
}

function eventIcon(type) {
    let eventEl = document.querySelector("#event-type");
    if (eventEl.innerHTML.length) {
        document.querySelector("#alert-icon").src = eventIcons[eventEl.innerHTML][type];
    }
}

function runTimeline() {
    let timelineDuration = 0;
    const timeline = gsap.timeline({ defaults: {duration: 1.5} });
    timeline
        .fromTo('.wrap1', { y: '15', opacity: '0' }, { y: '0', opacity: '1', ease: "elastic.out(1, 1)" })
        .fromTo("html", { '--bgSize': 25, '--psuedoSize': 50, '--psuedoOpacity': 0 }, { '--bgSize': 100, '--psuedoSize': 200, '--psuedoOpacity': 1, ease: "power4.out", duration: 2 }, '<')
        .fromTo('#alert-event', {y: '0', opacity: '0' }, { y: '-20', opacity: '1', ease: "elastic.out(1, 1)"}, '<0.25')
        .fromTo('#alert-icon', {y: '0', opacity: '0' }, { y: '20', opacity: '1', ease: "elastic.out(1, 1)"}, '<0.25')
        //.fromTo('#alert-message::before', {width: '50', height: '50', opacity: '0'}, { width: '200', height: '200', opacity: '1', ease: "elastic.out(1, 1)"}, '<.25')
        ;
    timelineDuration = timeline.duration() * 1000;
    //console.log(timelineDuration);

    setTimeout(() => { timeline.reverse() }, timelineDuration + 1000);
}

mainFunction();