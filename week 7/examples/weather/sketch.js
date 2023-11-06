let input, button;
let weatherCondition = {}; // Object to hold weather data
let sounds = {}; // Object to hold sounds

function preload() {
  // Preload sounds for different weather conditions
  sounds['Clear'] = loadSound('crickets.mp3');
  sounds['Clouds'] = loadSound('guitar.mp3');
  sounds['Snow'] = loadSound('hey.mp3');
}

function setup() {
  createCanvas(600, 600);
  background(200);
  
  input = createInput();
  input.position(20, 65);

  // Create button
  button = createButton('Get Weather');
  button.position(input.x + input.width, 65);
  button.mousePressed(fetchWeather);
}

function fetchWeather() {
  let city = input.value();
  let url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=226fbb9dacb884f50a64b69dffdb7c25`; // Replace 'your_api_key' with your actual API key

  // Fetch weather data from OpenWeather API
  loadJSON(url, gotData);
  console.log(url);
}

function gotData(data) {
  // This function will be triggered once the data is received
  if (data && data.weather) {
    weatherCondition = {
      city: data.name,
      weather: data.weather[0].main,
      description: data.weather[0].description,
      temperature: data.main.temp
    };
    drawWeather();
    playSoundForWeather(weatherCondition.weather);
  } else {
    weatherCondition = {
      city: '',
      weather: '',
      description: 'Data not available. Please try again.',
      temperature: ''
    };
    drawWeather();
  }
}

function drawWeather() {
  // Clear background with a light grey color
  background(200);

  // Set up text for the city name, weather description, and temperature
  textSize(18);
  textAlign(CENTER);
  fill(0);
  text(`${weatherCondition.city}`, width / 2, height / 2 - 100);
  text(`${weatherCondition.weather}: ${weatherCondition.description}`, width / 2, height / 2 - 60);
  text(`Temperature: ${weatherCondition.temperature}°C`, width / 2, height / 2 - 40);

  // Set up visuals for weather conditions using shapes
  if (weatherCondition.weather === "Clear") {
    fill(255, 215, 0); // Gold color for sun
    ellipse(width / 2, height / 2 + 60, 100, 100); 

  } else if (weatherCondition.weather === "Rain") {

    fill(100, 100, 255); 
    ellipse(width / 2, height / 2 + 60, 100, 50); 
    fill(0, 0, 255); // Blue color for raindrops
 
  } else if (weatherCondition.weather === "Clouds") {
    fill(255); // White color for snow
    ellipse(width / 2, height / 2 + 60, 100, 50); // Cloud
    fill(240); // Light grey for snowflakes

  }
}

function playSoundForWeather(weather) {
  // Stop all sounds before playing the new one
  for (let sound in sounds) {
    if (sounds[sound].isPlaying()) {
      sounds[sound].stop();
    }
  }

  // Play the sound associated with the current weather condition
  if (sounds[weather]) {
    sounds[weather].play();
  }
}
