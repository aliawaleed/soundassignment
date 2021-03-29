<<<<<<< HEAD
const phoneIcon = document.getElementsByClassName("phoneIcon")[0]

const audio1 = document.getElementById("audio1")
const audio2 = document.getElementById("audio2")
const audio3 = document.getElementById("audio3")
const audio4 = document.getElementById("audio4")

const audioClips = [audio1, audio2, audio3, audio4]

// states
let currentAudio = null;

phoneIcon.addEventListener("click",() => {
    audio1.play()
    currentAudio = audio1
})

document.body.onkeyup = function(e) {
    if (e.keyCode == 80) {
        if (currentAudio) {
            currentAudio.pause()
            currentAudio = null
        }
    }
}

audio1.addEventListener("ended", () => {
    console.log("audio finished playing")
})


console.log(phoneIcon)
=======
let img = document.getElementById("room_map")
let investigator = document.getElementById("investigatormap")
let daughter = document.getElementById("daughtermap")
let husband = document.getElementById("husbandmap")
let babysitter = document.getElementById("babysittermap")

investigator.addEventListener("click", function() {
  img.src = "2.png";
});

daughter.addEventListener("click", function() {
  img.src = "3.png";
});

husband.addEventListener("click", function() {
  img.src = "4.png";
});

babysitter.addEventListener("click", function() {
  img.src = "5.png";
});
>>>>>>> aeda59fc6543168793314735585f48a6c3b756b0
