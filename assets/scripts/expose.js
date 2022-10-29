// expose.js

window.addEventListener('DOMContentLoaded', init);

function init() {
  const jsConfetti = new JSConfetti();
  const hornSelector = document.getElementById("horn-select");
  const hornImg = document.querySelector("img");
  const sound = document.querySelector("audio");
  let pHorn = false;
  hornSelector.addEventListener('change', function() {
    let result = this.value;
    pHorn = false;
    if(result == "Air Horn") {
      hornImg.src = "assets/images/air-horn.svg";
      sound.src = "assets/audio/air-horn.mp3";
    } else if(result == "Car Horn") {
      hornImg.src = "assets/images/car-horn.svg";
      sound.src = "assets/audio/car-horn.mp3";
    } else if(result == "Party Horn") {
      hornImg.src = "assets/images/party-horn.svg";
      sound.src = "assets/audio/party-horn.mp3";
      pHorn = true;
    } else {
      hornImg.src = "assets/images/no-image.png";
      sound.src = "";
    }
  })

  const vol = document.getElementById("volume");
  const volImg = document.querySelector("#volume-controls img");
  vol.addEventListener('input', function() {
    let result = this.value;
    if(result == 0) {
      volImg.src = "assets/icons/volume-level-0.svg";
      sound.volume = result/100;
    } else if(result < 33) {
      volImg.src = "assets/icons/volume-level-1.svg";
      sound.volume = result/100;
    } else if(result < 67) {
      volImg.src = "assets/icons/volume-level-2.svg";
      sound.volume = result/100;
    } else {
      volImg.src = "assets/icons/volume-level-3.svg";
      sound.volume = result/100;
    }
  })
  
  const play = document.querySelector("button");
  play.addEventListener('click', function() {
    if(pHorn) {
      jsConfetti.addConfetti();
    }
    sound.play();
  })
}