var socket = io.connect('http://localhost:5000');
console.log('in io')
socket.on('connect', function() {
    console.log('Connected to server');
    // socket.emit('connected', {data: 'I\'m connected!'});
});

// socket.on('rec', (data) => {
//     console.log(data)
// })

window.addEventListener('keydown', (e) => {
    socket.emit('connected', {data: e.key})
})


