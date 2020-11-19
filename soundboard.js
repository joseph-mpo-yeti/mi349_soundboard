document.addEventListener("click", function(event) {
    if(event.target.classList.contains("pad")){
        var audioElement = document.querySelector("."+event.target.id)
        
        if(audioElement !== null){
            playAudio(audioElement);
        }

    }
})

document.addEventListener("keyup", function(event){
    var id = getID(event.key);
    if(id){
        var element = document.querySelector("."+id);
        playAudio(element);
    }
})

function getID(key){
    switch (event.key) {
        case "q":
            return "crash-a";
        case "w":
            return "crash-b";
        case "e":
            return "crash-c";
        case "a":
            return "kick";
        case "s":
            return "ride-cymbal";
        case "i":
            return "snare";
        case "o":
            return "splash";
        case "p":
            return "tom-floor";
        case "k":
            return "tom-mid";
        case "l":
            return "tom-high";
        default:
            return "";
    }
}

function playAudio(audioElement){
    audioElement.currentTime = 0;
    audioElement.play();
    
    var button = document.getElementById(audioElement.classList[0]);
    button.classList.add("playing");

    audioElement.addEventListener("ended", function(){
        button.classList.remove("playing");
    })
}