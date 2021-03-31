// get page elements
const phoneIcon = document.getElementsByClassName("phoneIcon")[0]

const audio1 = document.getElementById("audio1")
const audio2 = document.getElementById("audio2")
const audio3 = document.getElementById("audio3")
const audio4 = document.getElementById("audio4")

const audioClips = [audio1, audio2, audio3, audio4]
// states
// let currentAudio =  audio2;

let currPosition = -1; // 0 -> arrival, 1 -> introduction, 2 -> interrogation1, 3 -> interrogation2

const firstBlock = document.getElementById("first")
const secondBlock = document.getElementById("story")
const nav = document.getElementById("nav")
const thirdBlock = document.getElementById("third")
const revealBlock = document.getElementById("reveal")

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
secondBlock.style.display = "none"
secondBlock.style.display = "none"
nav.style.display = "none"
thirdBlock.style.display = "none"
revealBlock.style.display = "none"

// audio interactions

phoneIcon.addEventListener("click",() => {
  audio1.play()
  currentAudio = audio1
})

audio1.addEventListener("ended", () => {
    console.log("audio finished playing")
    firstBlock.style.display = "none"
    secondBlock.style.display = "block"
    nav.style.display = "block"
    // img.src = "full.png"
    currentAudio = audio2;
    currentAudio.play()
})

audio2.addEventListener("ended",() => {
  img.src = "./images/full.png"
  secondBlock.style.display = "none"
  nav.style.display = "none"
  thirdBlock.style.display = "block"
  currentAudio = audio3;
  currentAudio.play()
})

audio3.addEventListener("ended", () => {
  audio3.controls = false
  document.getElementById("suspects").style.display = "block"
})


// story interactions
investigator.addEventListener("click", function() {
  img.src = "./images/inv.png";
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
  img.src = "./images/daughter.png";
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
  img.src = "./images/father.png";
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
  img.src = "./images/babysitter.png";
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
    case 0: {
      img.src = "./images/full.png"
      break;
    }
    case 14: {
      img.src = "./images/inv.png"
      break;
    }
    case 33: {
      img.src = "./images/daughter.png"
      break;
    }
    case 37: {
      img.src = "./images/inv.png"
      break;
    }
    case 40: {
      img.src = "./images/father.png"
      break;
    }
    case 42: {
      img.src = "./images/inv.png"
      break;
    }
    case 43: {
      img.src = "./images/babysitter.png"
      break;
    }
    case 46: {
      img.src = "./images/inv.png"
      break;
    }
    case 50: {
      img.src = "./images/daughter.png"
      break;
    }
    case 53: {
      img.src = "./images/school.png"
      break;
    }
    case 57: {
      img.src = "./images/clinic.png"
      break;
    }
    case 60: {
      img.src = "./images/coffee.png"
      break;
    }
    case 64: {
      img.src = "./images/daughter.png"
      break;
    }
    case 74: {
      img.src = "./images/inv.png"
      break;
    }
    case 77: {
      img.src = "./images/father.png"
      break;
    }
    case 80: {
      img.src = "./images/meeting.png"
      break;
    }
    case 83: {
      img.src = "./images/father.png"
      break;
    }
    case 92: {
      img.src = "./images/inv.png"
      break;
    }
    case 97: {
      img.src = "./images/babysitter.png"
      break;
    }
    case 98: {
      img.src = "./images/son.png"
      break;
    }
    case 103: {
      img.src = "./images/grocery.png"
      break;
    }
    case 107: {
      img.src = "./images/babysitter.png"
      break;
    }
    case 110: {
      img.src = "./images/inv.png"
      break;
    }
    case 113: {
      img.src = "./images/babysitter.png"
      break;
    }
    case 120: {
      img.src = "./images/inv.png"
      break;
    }
    case 129: {
      img.src = "./images/father.png"
      break;
    }
    case 140 : {
      img.src = "./images/inv.png"
      break;
    }
    case 148: {
      img.src = "./images/babysitter.png"
      break;
    }
    case 157: {
      img.src = "./images/inv.png"
      break;
    }
    case 164: {
      img.src = "./images/daughter.png"
      break;
    }
    case 167: {
      img.src = "./images/inv.png"
      break;
    }
    case 170: {
      img.src = "./images/daughter.png"
      break;
    }
    default:
      break;
  }

})

// suspect selections
const daughterSus = document.getElementById("daughter")
const husbandSus = document.getElementById("father")
const babysitterSus = document.getElementById("babysitter")

daughterSus.addEventListener("click", () => {
  daughterSus.style.filter = "grayscale(100%)"
  reveal()
})

husbandSus.addEventListener("click", () => {
  husbandSus.style.filter = "grayscale(100%)"
  reveal()
})

babysitterSus.addEventListener("click", () => {
  babysitterSus.style.filter = "grayscale(100%)"
  reveal()
})

const reveal  = () => {
  revealBlock.style.display = "block"
  const revealButton = document.getElementById("revealButton")
  revealBlock.addEventListener("click", () => {
    audio4.play()
  })
}