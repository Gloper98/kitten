var player = document.getElementsByClassName("cat");
for(var i=0; i<player.length;i++){
    player[i].addEventListener("click",function animation(event) {
        
    var audio = document.getElementById("audio");
    var playerContainer = document.getElementById("player-container");
    var bpm = audio.dataset.bpm;
    var pulse = (60/bpm)*1000;
    var pulseReverse=858.57142857142856;
        
    if(audio.paused ===false) {
        clearInterval(1);
        clearInterval(2);
        audio.pause();
        audio.currentTime = 0;
       playerContainer.classList.remove("playing");
    }else if(audio.paused ===true){
        
        audio.play();
        playerContainer.classList.add("playing");
        var firstInterval=setInterval(pulseInterval,pulse);
        var secondInterval=setInterval(pulseOut,pulseReverse);
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


