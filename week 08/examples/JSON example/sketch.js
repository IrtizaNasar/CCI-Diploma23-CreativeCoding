//Understand API response parameters https://openweathermap.org/current

let weatherData;

function preload() {

  // Let's load our json data file
  // weatherData = loadJSON('newyork_weather.json');
  weatherData = loadJSON('london_weather.json');

}

function setup() {
  createCanvas(600, 600);
  noLoop(); 
}

function draw() {
  background(200);

  // Access weather condition data
  let weather = weatherData.weather[0].main; // Clouds
  let description = weatherData.weather[0].description; // overcast clouds
  let temp = weatherData.main.temp; // 9.35

  // Displaying the data on the canvas
  // Read about string interpolation here https://www.geeksforgeeks.org/string-interpolation-in-javascript/

  textSize(16);
  text(`Weather: ${weather}`, 10, 30);
  text(`Description: ${description}`, 10, 50);
  text(`Temperature: ${temp}°C`, 10, 70);

  // Debug
  print(`Weather: ${weather}`);
  print(`Description: ${description}`);
  print(`Temperature: ${temp}°C`);
}
