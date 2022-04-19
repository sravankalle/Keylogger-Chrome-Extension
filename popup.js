let on;
chrome.storage.sync.get('on', function(result) {
    console.log(result)
    on = result.on
    if(on){
        document.getElementById('switch').checked = true
        stat.innerHTML = 'ON'
        stat.style.color = '#1fff4f'
    }else{
        document.getElementById('switch').checked = false
        stat.innerHTML = 'OFF'
        stat.style.color = 'red'
    }   
})


const stat = document.getElementById('status')




document.getElementById('switch').addEventListener("change", function(){
    on = !on
    chrome.storage.sync.set({on: on})
    
    if(on) {
        stat.innerHTML = 'ON'
        stat.style.color = '#1fff4f'
    } else {
        stat.innerHTML = 'OFF'
        stat.style.color = 'red'
    }
})