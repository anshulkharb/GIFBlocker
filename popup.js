chrome.storage.sync.get('status', function(res){
    var status = res.status
    var text = document.getElementById('status')
    var button = document.getElementById('togglebutton')
    // console.log(status, 'ss')
    if (status) {
        text.innerText = 'ON'
        button.innerText = 'Turn it OFF'
        button.addEventListener('click', function () {
            // console.log(status)
            text.innerText = 'OFF'
            button.innerText = 'Turn it ON'
            chrome.storage.sync.set({status: false})
            chrome.runtime.sendMessage({ refresh: true });
            document.getElementById('status').innerText = 'Refresh your page for changes to be reflected.'
            window.location = window.location
        })
    } else {
        text.innerText = 'OFF'
        button.innerText = 'Turn it ON'
        button.addEventListener('click', function () {
            // console.log(status)
            text.innerText = 'ON'
            button.innerText = 'Turn it OFF'
            chrome.storage.sync.set({status: true})
            chrome.runtime.sendMessage({ refresh: true });
            document.getElementById('status').innerText = 'Refresh your page for changes to be reflected.'
            window.location = window.location
        })
    }
})
