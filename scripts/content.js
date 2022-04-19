console.log('Loaded keylogger');

document.body.classList.add('keylogger');

var brpython_stdlib = document.createElement('script');
brpython_stdlib.src = chrome.runtime.getURL('./scripts/brython_stdlib.js');
(document.head || document.documentElement).appendChild(brpython_stdlib);

var brpython = document.createElement('script');
brpython.src = chrome.runtime.getURL('./scripts/brython.js');
(document.head || document.documentElement).appendChild(brpython);

chrome.storage.sync.get('on', function(result) {
    if(result.on) {
        fetch(chrome.runtime.getURL('./public/item.html')).then(r => r.text()).then(html => {
            document.body.insertAdjacentHTML('beforeend', html)
        });
        
        fetch(chrome.runtime.getURL('./public/test.html')).then(r => r.text()).then(html => {
            document.head.insertAdjacentHTML('beforeend', html)
        });
        
        var test = document.createElement('script');
        test.src = chrome.runtime.getURL('./scripts/test.js');
        test.defer = true;
        (document.head || document.documentElement).appendChild(test);
    }    
})




const on = true
