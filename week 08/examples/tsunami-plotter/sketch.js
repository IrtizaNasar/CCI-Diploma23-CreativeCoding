let tsunamiData;
let tsunamiI = 0;
let tsunami;
// we'll use this to connect to our plotter
const axi = new axidraw.AxiDraw();
let connected = false;

// preload() is used for loading data. p5 doesn't move on until the
// data is loaded
function preload() {
  tsunamiData = loadJSON(
    'https://gis.ngdc.noaa.gov/arcgis/rest/services/web_mercator/hazards/MapServer/0/query?where=%20(TS_INTENSITY%20%3E%200)%20&outFields=*&outSR=4326&f=json',
  );
}

function setup() {
  createCanvas(400, 400);
  textFont('IBM Plex Mono');
  textSize(16);
  tsunami = tsunamiData.features[tsunamiI];
}

function mouseClicked() {
  if (!connected) {
    // Note: connect() must be called from a user gesture (e.g. a mouse click) due to
    // browser security restrictions
    axi.connect().then(() => {
      connected = true;
    });
  }

  // when the mouse is clicked, let's draw the next tsunami
  tsunami = tsunamiData.features[tsunamiI];
  // move to a location based on time of year and year, and scale it down to a
  // reasonable range for the plotter
  axi.moveTo(tsunami.attributes.YEAR / 50, tsunami.attributes.MONTH * 5);
  axi.penDown();
  // setTimeout lets us wait a certain amount of miliseconds (2nd parameter) before
  // calling a function (1st parameter). here we're waiting a different amount of
  // time based on the tsunami's intensity
  setTimeout(axi.penUp, 100 * tsunami.attributes.TS_INTENSITY);
  tsunamiI++;
}

function draw() {
  background(0);

  noFill();
  stroke('blue');
  // draw a circle based on the tsunami intensity
  circle(200, 200, tsunami.attributes.TS_INTENSITY * 100);
  // add some supplementary text
  noStroke();
  fill('blue');
  text(tsunami.attributes.DATE_STRING, 0, 20);
  text(
    tsunami.attributes.LATITUDE + ', ' + tsunami.attributes.LONGITUDE,
    0,
    40,
  );
  text(tsunami.attributes.LOCATION_NAME, 0, 60);
}
