let tsunamiData;

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
}

function draw() {
  background(0);
  // %, modulo, or 'mod' for short, calculates the remainder, i.e.
  // 15 % 4 = 3, because 15/4 gives 3 with 3 left over (4 * 3 + 3 = 15)
  // modulo is useful for for counting up to a certain number, i.e.
  // frameCount % 15 will always be in the range [0, 14]
  // here, we're using it to count up to the end of our array,
  // and using frameCount to change which tsunami we display every frame
  const tsunamiI = frameCount % tsunamiData.features.length;
  const tsunami = tsunamiData.features[tsunamiI];

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
