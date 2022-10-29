// explore.js

window.addEventListener('DOMContentLoaded', init);

function init() {
  const speech = window.speechSynthesis;
  speech.addEventListener("voiceschanged", () => {
    const voices = speech.getVoices();
    const select = document.getElementById("voice-select");
    for(let index = 0; index < voices.length; index++) {
      select.options[index] = new Option(voices[index].name, index);
    }
    
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
    });
  })
}