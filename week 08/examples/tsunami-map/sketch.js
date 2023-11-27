let tsunamiData;
let mapData;

function latToY(lat) {
  return map(lat, -90, 90, width, 0);
}

function longToX(long) {
  return map(long, -180, 180, 0, height);
}

// preload() is used for loading data. p5 doesn't move on until the
// data is loaded
function preload() {
  tsunamiData = loadJSON(
    'https://gis.ngdc.noaa.gov/arcgis/rest/services/web_mercator/hazards/MapServer/0/query?where=%20(TS_INTENSITY%20%3E%200)%20&outFields=*&outSR=4326&f=json',
  );
  mapData = loadJSON('ne_110m_land.json');
}

function setup() {
  createCanvas(400, 400);
  textFont('IBM Plex Mono');
  textSize(16);
}

function draw() {
  background(0);
  // here, we're dividing frameCount by 10, to slow down by a factor of
  // 10x
  const tsunamiI = Math.round(frameCount / 10) % tsunamiData.features.length;
  const tsunami = tsunamiData.features[tsunamiI];

  fill(128);
  noStroke();
  // draw our map
  for (let featureI = 0; featureI < mapData.features.length; featureI++) {
    beginShape();
    for (
      let coordinateI = 0;
      coordinateI < mapData.features[featureI].geometry.coordinates[0].length;
      coordinateI++
    ) {
      const coord =
        mapData.features[featureI].geometry.coordinates[0][coordinateI];
      const lat = coord[1];
      const long = coord[0];
      const x = longToX(long);
      const y = latToY(lat);
      vertex(x, y);
    }
    endShape();
  }

  noFill();
  stroke('blue');
  // draw a circle based on the tsunami intensity
  circle(
    longToX(tsunami.attributes.LONGITUDE),
    latToY(tsunami.attributes.LATITUDE),
    tsunami.attributes.TS_INTENSITY * 10,
  );
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
