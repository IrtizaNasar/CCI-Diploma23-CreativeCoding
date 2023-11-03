let nycI = 0;
let nyc_json;

const NYC_BOUND = [
  [-74.05, -73.95],
  [40.7, 40.8],
];

function latToX(lat) {
  return map(lat, ...NYC_BOUND[0], 0, width);
}

function longToY(long) {
  return map(long, ...NYC_BOUND[1], max(width, height), 0);
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
  nyc_json = loadJSON('nyc-dcm-streets.json');
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  background(0);
}

function draw() {
  noFill();
  stroke(128);

  for (let i = 0; i < 15; i++) {
    beginShape();
    for (const coord of nyc_json.features[nycI].geometry.coordinates) {
      const [lat, long] = coord;
      const x = latToX(lat);
      const y = longToY(long);
      vertex(x, y);
    }
    endShape();
    nycI = nycI + 1;
  }
}
