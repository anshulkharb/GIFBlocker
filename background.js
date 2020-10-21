chrome.runtime.onMessage.addListener( function (request, sender, sendResponse) {
    if (request.refresh) {
        window.location = window.location
    } else if (request.thispage) {
        chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
            var currTab = tabs[0];
            if (currTab) {
                chrome.tabs.executeScript(currTab.id, { file: 'auto.js' });
            }
          });
    }
})

chrome.storage.sync.get('status', function (res) {
    console.log(res.status)
    if (res.status) {
        chrome.webRequest.onBeforeRequest.addListener(
            function (details) {
                // console.log(details)
                if (details.url) {
                    const status = details.url.includes('.gif') && !details.url.includes('cleardot')
                    return { cancel: status }
                }
            },
            {
                urls: ["<all_urls>"]
            },
            ["blocking"]
        );
    }
})


chrome.tabs.onUpdated.addListener(function (tabId, info) {
    if (info.status == 'complete') {
        chrome.tabs.executeScript(tabId, { file: 'auto.js' });
    }
});

chrome.runtime.onInstalled.addListener(function (object) {
    chrome.storage.sync.set({ status: true })
});
