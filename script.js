alert("Her bir pixeli sırasıyla sına")
let best = document.getElementById("best");
let img = document.querySelector("#imgs img");
let video = document.getElementById("similar");
let audio = document.querySelector("audio");
let text = document.getElementById("you");
best.addEventListener("change", function () {
  let val = best.value;
  if (val === "1080p") {
    img.style.display = "none";
    video.style.display = "block";
    audio.setAttribute("autoplay", "true");
    text.style.display = "flex";
    audio.play();
  } else {
    video.style.display = "none";
    img.style.display = "block";
    img.setAttribute("src", `img/${val}.jpg`);
    audio.pause();
    text.style.display = "none";
  }
});
