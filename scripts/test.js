
try{
    setTimeout(() => {
        brython(1)
        console.log('called brython');
    }, 1000)
}catch(e){
    alert(e);
}

