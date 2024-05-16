document.querySelector(".download-button").addEventListener('click', function() {
    let audio = document.getElementById('mySound');
    audio.currentTime = 0; // Rewind the audio
    audio.play();
});