// get page elements
const phoneIcon = document.getElementsByClassName("phoneIcon")[0]

const audio1 = document.getElementById("audio1")
const audio2 = document.getElementById("audio2")
const audio3 = document.getElementById("audio3")
const audio4 = document.getElementById("audio4")

// states
let currentAudio =  audio2;
let currPosition = -1; // 0 -> arrival, 1 -> introduction, 2 -> interrogation1, 3 -> interrogation2

const audioClips = [audio1, audio2, audio3, audio4]

const firstBlock = document.getElementById("first")
const secondBlock = document.getElementById("story")
const nav = document.getElementById("nav")

// images and maps
let img = document.getElementById("room_map")
let investigator = document.getElementById("investigatormap")
let daughter = document.getElementById("daughtermap")
let husband = document.getElementById("husbandmap")
let babysitter = document.getElementById("babysittermap")

// nav buttons
let arrivalButton = document.getElementById("arrival")
let introductionButton = document.getElementById("introduction")
let interrogation1Button = document.getElementById("interrogation1")
let interrogation2Button = document.getElementById("interrogation2")

arrivalButton.addEventListener("click", () => {
  currPosition = 0
  console.log(currPosition)
})

introductionButton.addEventListener("click", () => {
  currPosition = 1
  console.log(currPosition)
})

interrogation1Button.addEventListener("click", () => {
  currPosition = 2
  console.log(currPosition)
})


interrogation2Button.addEventListener("click", () => {
  currPosition = 3
  console.log(currPosition)
})

// onLoad 
// firstBlock.style.display = "none"
secondBlock.style.display = "block"
secondBlock.style.display = "none"
nav.style.display = "none"

// audio interactions
phoneIcon.addEventListener("click",() => {
    audio1.play()
    currentAudio = audio1
})

// document.body.onkeyup = function(e) {
//     if (e.keyCode == 80) {
//         if (currentAudio) {
//             currentAudio.pause()
//             // currentAudio = null
//         }
//     }
// }

audio1.addEventListener("ended", () => {
    console.log("audio finished playing")
    firstBlock.style.display = "none"
    secondBlock.style.display = "block"
    nav.style.display = "block"
    img.src = "1.png"
    currentAudio = audio2;
    currentAudio.play()
})


// story interactions
investigator.addEventListener("click", function() {
  img.src = "2.png";
  switch (currPosition) {
    case 0:
      currentAudio.currentTime = 0
      break;

    case 1:
      currentAudio.currentTime = 30
      break;

    case 2:
      currentAudio.currentTime = 42
      break;

    case 3:
        currentAudio.currentTime = 122
      break;

    default:
      break;
  }
});

daughter.addEventListener("click", function() {
  img.src = "3.png";
  switch (currPosition) {
      case 0:
        // currentAudio.currentTime = 30
        break;

      case 1:
        currentAudio.currentTime = 31
        break;

      case 2:
        currentAudio.currentTime = 51
        break;

      case 3:
          currentAudio.currentTime = 158
        break;

      default:
        break;
    }
});

husband.addEventListener("click", function() {
  img.src = "4.png";
  switch (currPosition) {
      case 0:
        // currentAudio.currentTime = 0
        break;

      case 1:
        currentAudio.currentTime = 36
        break;

      case 2:
        currentAudio.currentTime = 75
        break;

      case 3:
          currentAudio.currentTime = 122
        break;

      default:
        break;
    }
});

babysitter.addEventListener("click", function() {
  img.src = "5.png";
  switch (currPosition) {
      case 0:
        // currentAudio.currentTime = 0
        break;

      case 1:
        currentAudio.currentTime = 43 
        break;

      case 2:
        currentAudio.currentTime = 93
        break;

      case 3:
          currentAudio.currentTime = 141
        break;

      default:
        break;
    }
});

audio2.addEventListener("timeupdate",() => {
  const timeNow = Math.floor(audio2.currentTime)
  switch (timeNow) {
    case 0:
      img.src = "1.png"
      break;
    
      case 30:
        img.src = "2.png"
        break;
      
      case 36:
        img.src = "4.png"
        break;
      
      case 42:
        img.src = "5.png";
        break;

      case 51:
        img.src = "3.png"
        break;
      
      case 75:
        img.src = "4.png"
        break;
      
      case 93:
        img.src = "5.png"
        break;
      
      case 122:
        img.src = "4.png"

      case 141:
        img.src = "5.png"
        break;
      
      case 158:
        img.src = "3.png"
        break;
  
    default:
      break;
  }

})
