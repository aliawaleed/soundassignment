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