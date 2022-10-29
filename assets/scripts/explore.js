// explore.js

window.addEventListener('DOMContentLoaded', init);

function init() {
  const speech = window.speechSynthesis;
  const voices = speech.getVoices();
  const select = document.getElementById("voice-select");
  voices.forEach((text,index) => {
    let opt = document.createElement("option");
    opt.value = index;
    opt.textContent = text;
    select.appendChild(opt);
  });
  
  const play = document.querySelector("button");
  const input = document.getElementById("text-to-speak");
  const face = document.querySelector("img");
  play.addEventListener('click', function() {
    const utter = new SpeechSynthesisUtterance(input.value)
    if(!isNaN(select.value)) { utter.voice = voices[select.value] }
    else { return; }
    face.src = "assets/images/smiling-open.png";
    speech.speak(utter);
    face.src = "assets/images/smiling.png";
  })
}