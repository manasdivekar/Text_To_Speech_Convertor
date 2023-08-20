let speech = new SpeechSynthesisUtterance();

let variousVoices = [];

let voiceSelect = document.querySelector("select");

window.speechSynthesis.onvoiceschanged = () => {
    variousVoices = window.speechSynthesis.getVoices();
    speech.voice = variousVoices[0];

    variousVoices.forEach((voice, i) => (voiceSelect.options[i] = new Option( voice.name,i)));
};

voiceSelect.addEventListener("change", ()=> {
    speech.voice = variousVoices[voiceSelect.value];

});

document.querySelector("button").addEventListener("click",() => {
    speech.text = document.querySelector("textarea").value;
    window.speechSynthesis.speak(speech);
});