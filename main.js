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
