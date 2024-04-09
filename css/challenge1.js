function showCurrentTime() {
    const now = new Date(); 
    const formattedTime = now.getHours() + ':' + now.getMinutes() + ':' + now.getSeconds(); 
    alert('Current Time: ' + formattedTime); 
}

document.addEventListener('dblclick', function() {
    showCurrentTime(); 
});
