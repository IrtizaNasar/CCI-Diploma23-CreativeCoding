var textInput;
var button;
var colorSlider; // A slider to control the hue
var myName = ""; // Initialize the name variable to be used in draw()

function setup() {
  createCanvas(600, 600);
  colorMode(HSB, 255); // Use HSB color mode, maxing out at 255
  textInput = createInput();
  textInput.position(20, 30);
  button = createButton("GO!");
  button.position(180, 30);
  button.mousePressed(updateName);

  // Create a hue slider ranging from 0 to 255
  colorSlider = createSlider(0, 255, 0);
  colorSlider.position(20, 60);

}

function draw() {
  background(200);

  if (myName !== "") {
    textSize(30);
    var hueValue = colorSlider.value(); // Get the current value of the slider

    for (var i = 0; i < 30; i++) {
      fill(hueValue, 255, 255); // Set fill color using the hue value
      text(myName, random(width), random(height));
    }
  }
}

function updateName() {
  myName = textInput.value();
}
