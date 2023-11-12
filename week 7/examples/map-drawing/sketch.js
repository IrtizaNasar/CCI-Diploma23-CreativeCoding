// counter variable for features of new york city
let nycI = 0;
// where we'll store the JSON we load
let nyc_json;
// map boundary coordinates for where NYC is on
// the globe
const NYC_BOUND = [
  [-74.05, -73.95],
  [40.7, 40.8],
];

function latToX(lat) {
  return map(lat, NYC_BOUND[0][0], NYC_BOUND[0][1], 0, width);
}

function longToY(long) {
  return map(long, NYC_BOUND[1][0], NYC_BOUND[1][1], max(width, height), 0);
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}

function toggleFullScreen() {
  if (!document.fullscreenElement) {
    document.documentElement.requestFullscreen();
  } else if (document.exitFullscreen) {
    document.exitFullscreen();
  }
}

document.addEventListener(
  'keydown',
  (e) => {
    if (e.key === 'Enter') {
      toggleFullScreen();
    }
  },
  false,
);

function preload() {
  // has to be in here otherwise loadJSON
  // won't be defined yet by p5
  nyc_json = loadJSON('nyc-dcm-streets.json');
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  background(0);
}

function draw() {
  noFill();
  stroke(128);

  // let's control the speed of drawing with a for loop
  for (let i = 0; i < 15; i++) {
    beginShape();
    // iterate over the list of coordinates per feature in the
    // JSON
    for (
      let coordinateI = 0;
      coordinateI < nyc_json.features[nycI].geometry.coordinates.length;
      coordinateI++
    ) {
      const coord = nyc_json.features[nycI].geometry.coordinates[coordinateI];
      const lat = coord[0];
      const long = coord[1];
      const x = latToX(lat);
      const y = longToY(long);
      vertex(x, y);
    }
    endShape();
    nycI = nycI + 1;
  }
}
