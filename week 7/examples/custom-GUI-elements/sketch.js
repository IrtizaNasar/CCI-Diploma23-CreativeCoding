let hasChanged = false;

function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(240);
  noStroke();
  
  if (hasChanged) {
    fill(0, 255, 0); // Green
  } else {
    fill(255, 0, 0); //Red
  }
  
  ellipse(width / 2, height / 2, 100, 100); // Circle in the center
}

function mousePressed() {
  
  let d = dist(mouseX, mouseY, width / 2, height / 2);
  
  if (d < 50) { 
    hasChanged = !hasChanged; // Toggle the hasChanged state
    console.log("Button Pressed");
  }
  
}
