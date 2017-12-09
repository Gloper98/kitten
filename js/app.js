var player = document.getElementsByClassName("cat");
for(var i=0; i<player.length;i++){
    player[i].addEventListener("click",function animation(event) {
    var audio = document.getElementById("audio");
    var playerContainer = document.getElementById("player-container");
    var bpm = audio.dataset.bpm;
    var pulse = (60/bpm)*1000;
    if(audio.paused ===true) {
       audio.play();
        playerContainer.classList.add("playing");
        
        var hello = setInterval(pulseInterval,428.57142857142856);
        
        var hello2 = setInterval(pulseOut,858.57142857142856);
        console.log(pulse);
    }else {
        
        clearInterval(hello);
        console.log(pulse);
        audio.pause();
        audio.currentTime = 0;
       playerContainer.classList.remove("playing");
    }
})

    
}

function pulseInterval(event) {
     var playerContainer = document.getElementById("player-container");
    playerContainer.classList.add("pulse");
}
function pulseOut(event) {
    var playerContainer = document.getElementById("player-container");
    var playerContainer = document.getElementById("player-container");
    playerContainer.classList.remove("pulse");
    playerContainer.classList.add("antiPulse");
}


