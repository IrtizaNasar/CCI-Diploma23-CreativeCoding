const cities = ['Dhaka', 'Ho Chi Minh City', 'New York', 'Hong Kong', 'London', 'Paris', 'Los Angeles'];
const dBa = [119, 103, 95, 89, 86, 80, 71];
const latlong = [[23.78, 90.34], [10.75, 106.07], [40.69, -74.14], [22.35, 113.97], [51.53, -0.266], [48.86, 2.265], [34.02, -118.74]];

let mic;

// convert from linear volume [0,1] to decibel scale
function todB(vol) {
  return Math.log10(vol) * 20;
}

function setup() {
  createCanvas(400, 400);
  frameRate(12);
  mic = new p5.AudioIn();
  mic.start();
}

function draw() {
  let vol = mic.getLevel();
  background(0);
  noStroke();
  for (let i = 0; i < 5; i++) {
    for (let j = 0; j < 8; j++) {
      if (random() < vol) {
        fill(255, 0, 0);
      } else {
        fill(255);
      }
      if (random() > vol) {
        circle(j * 40 + 60, i * 40 + 60, 40);
      }
    }
  }
  
  

  let city = "None";
  let coord;
  const dBLevel = todB(vol) + 60 + 71;
  for (let i = 0; i < dBa.length; i++) {
    if (dBa[i] > dBLevel) {
      city = cities[i];
      coord = latlong[i];
    }
  }
  fill(255);
  text(city, 40, 300);
  text(coord, 40, 340);
}