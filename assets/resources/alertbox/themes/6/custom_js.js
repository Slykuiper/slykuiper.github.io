let previewMode = 1;
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
        runTimeline();
    });
}

function updateElements(event) {
    let alertEventEl = document.querySelector("#alert-event");
    if ( event.constructor === Object && Object.keys(event).length > 0 ) {
        eventSettings = event.message.message;
        //console.log(eventSettings);
        if (eventSettings.type != null) {
            let event = eventSettings.type;
            alertEventEl.innerHTML = `New ${event}!`;
          alertEventEl.style.display = 'flex';
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

function runTimeline() {
    let timelineDuration = 0;
    const timeline = gsap.timeline({ defaults: {duration: 1.5} });
    timeline
        .fromTo('.wrap1', { y: '15', opacity: '0' }, { y: '0', opacity: '1', ease: "elastic.out(1, 1)" })
        .fromTo("html", { '--bgSize': 25, '--psuedoSize': 50, '--psuedoOpacity': 0 }, { '--bgSize': 100, '--psuedoSize': 200, '--psuedoOpacity': 1, ease: "power4.out", duration: 2 }, '<')
        .fromTo('#alert-event', {y: '0', opacity: '0' }, { y: '-20', opacity: '1', ease: "elastic.out(1, 1)"}, '<0.25')
        //.fromTo('#alert-message::before', {width: '50', height: '50', opacity: '0'}, { width: '200', height: '200', opacity: '1', ease: "elastic.out(1, 1)"}, '<.25')
        ;
    timelineDuration = timeline.duration() * 1000;
    //console.log(timelineDuration);

    setTimeout(() => { timeline.reverse() }, timelineDuration + 1000);
}

mainFunction();