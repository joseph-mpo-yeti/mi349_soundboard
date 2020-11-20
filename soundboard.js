document.addEventListener("click", onClickListener);
document.addEventListener("keyup", onKeyUpListener);

function onClickListener(event){
    if(event.target.classList.contains("pad")){
        const audioElement = document.querySelector("."+event.target.id)
        
        if(audioElement){
            playAudio(audioElement);
        }

    }
}

function onKeyUpListener(event) {
    const id = getID(event.key);
    const element = document.querySelector("."+id);
    
    if(id && element){
        playAudio(element);
    }
}

function playAudio(audioElement){
    audioElement.currentTime = 0;
    audioElement.play();
    
    const button = document.getElementById(audioElement.classList[0]);
    button.classList.add("playing");

    audioElement.addEventListener("ended", function(){
        button.classList.remove("playing");
    })
}

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