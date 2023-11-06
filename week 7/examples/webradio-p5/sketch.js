let radioPlayer;
let volumeControl;
let currentStation = ''; // Variable to hold the name of the current station
let isLoading = false; // Flag to indicate loading


function setup() {

    createCanvas(600, 600);

    // Select the existing audio element from the HTML and check if a source is playing
    radioPlayer = select("#radioPlayer");
    radioPlayer.elt.addEventListener('play', () => { isLoading = true; });
    radioPlayer.elt.addEventListener('playing', () => { isLoading = false; });

    // Create slider for volume control
    volumeControl = createSlider(0, 100, 50, 1);
    volumeControl.position(450, 30);
    volumeControl.input(changeVolume);

    // Create buttons for each station
    let playNTS1 = createButton('NTS 1');
    playNTS1.position(10, 520);

    //attach a call back to the button and assign the playRadioStation function to it
    playNTS1.mousePressed(() => playRadioStation("https://stream-relay-geo.ntslive.net/stream", 'NTS 1'));

    let playNTS2 = createButton('NTS 2');
    playNTS2.position(110, 520);
    playNTS2.mousePressed(() => playRadioStation("https://stream-relay-geo.ntslive.net/stream2", 'NTS 2'));

    let playNTSRAP = createButton('NTS RAP');
    playNTSRAP.position(213, 520);
    playNTSRAP.mousePressed(() => playRadioStation("https://stream-mixtape-geo.ntslive.net/mixtape22", 'NTS RAP'));

    let stopButton = createButton('STOP');
    stopButton.position(500, 520);
    stopButton.mousePressed(stopRadio);


}

function draw() {
    let vol = volumeControl.value();

    background(0);
    fill(255);
    textSize(50);

    // Display current station or "Radio" if no station is selected
    text(currentStation || "RADIO", 10, 50);

    // Change text size based on volume
    textSize(30);
    text(vol, 390, 45);

    // Draw a square if isLoading is true
    if (isLoading) {
        console.log("loading");
        ellipse(width / 2, height / 2, 50); 
        
    } else if (currentStation == 'NTS 1') {
        ellipse(width / 2, height / 2, 100); 

    } else if (currentStation == 'NTS 2') {
        ellipse(width / 2, height / 2, 100); 

    } else if (currentStation == 'NTS RAP') {
        ellipse(width / 2, height / 2, 100); 
    } 

    //add currentStation == ''
}



function playRadioStation(url, stationName) {
    if (radioPlayer.elt.src !== url) {
        radioPlayer.elt.src = url;
        radioPlayer.elt.load(); // reload audio to apply new source
        currentStation = stationName; // Update the current station
    }
    radioPlayer.elt.play();
}

function stopRadio() {
    radioPlayer.elt.pause();
    radioPlayer.elt.src = ''; // clear the audio source
    loadingMessage.style('display', 'none');
    currentStation = ''; // Clear the current station
}


function changeVolume() {
    radioPlayer.elt.volume = volumeControl.value();
}

