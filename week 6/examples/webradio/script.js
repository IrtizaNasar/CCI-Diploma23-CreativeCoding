document.addEventListener("DOMContentLoaded", function() {
    const radioPlayer = document.getElementById("radioPlayer");
    const playNTS1 = document.getElementById("playNTS1");
    const playNTS2 = document.getElementById("playNTS2");
    const playNTSRAP = document.getElementById("playNTSRAP");
    const stopButton = document.getElementById("stopButton");
    const volumeControl = document.getElementById("volumeControl");
    const loadingMessage = document.getElementById("loadingMessage");

    playNTS1.addEventListener("click", function() {
        playStation("https://stream-relay-geo.ntslive.net/stream");
    });

    playNTS2.addEventListener("click", function() {
        playStation("https://stream-relay-geo.ntslive.net/stream2");
    });

    playNTSRAP.addEventListener("click", function() {
        playStation("https://stream-mixtape-geo.ntslive.net/mixtape22");
    });

    stopButton.addEventListener("click", function() {
        radioPlayer.pause();
        radioPlayer.src = "";  // clear the audio source
        loadingMessage.style.display = "none";
    });

    volumeControl.addEventListener("input", function() {
        radioPlayer.volume = volumeControl.value;
    });

    radioPlayer.addEventListener("play", function() {
        loadingMessage.style.display = "block";
    });

    radioPlayer.addEventListener("playing", function() {
        loadingMessage.style.display = "none";
    });

    function playStation(url) {
        if (radioPlayer.src !== url) {
            radioPlayer.src = url;
            radioPlayer.load();  // reload audio to apply new source
        }
        radioPlayer.play();
    }
});
