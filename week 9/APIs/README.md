
# Some APIs to play with

This README provides a list of simple APIs that generate data, which can be used in your p5.js sketches to learn more about data while thinking about your project and assignements.  

Some of these APIs require you to insert your API Key. This is a bit like a password which allow the API provider to know who is making each call. Feel free to ask more about this if you are not sure how to get one.

Some of the examples below don'y have a draw() function to keep things short, of course you might need to add one depending on what you are working on.

## OpenWeather API
- **Description**: Access weather data for over 200,000 cities with historical data over the past 40 years. This is the same API used in the weather example.
- **p5.js Example**:
```javascript
function setup() {
  loadJSON('https://api.openweathermap.org/data/2.5/weather?q=London&appid=YOUR_API_KEY', gotData);
}

function gotData(data) {
  // Use the weather data in your p5.js sketch
  console.log(data);
}
```

## NASA API
- **Description**: Get various sources of space-related data, including weather on Mars and imagery. This example displays an image from the Astronomy Picture of the day, read more about it here: https://apod.nasa.gov/apod/astropix.html
- **p5.js Example**:
```javascript
function setup() {
  loadJSON('https://api.nasa.gov/planetary/apod?api_key=YOUR_API_KEY', gotData);
}

function gotData(data) {
  // Use the NASA data in your p5.js sketch
  createImg(data.url);
}
```

## Where is the ISS API

- **Description**: Try this api to get back data about the ISS like latitude, longitude, altitude, velocity, etc.. More info about the API can be found here: https://wheretheiss.at/w/developer

- **p5.js Example**:
```javascript
let issData;

function preload() {
  issData = loadJSON('https://api.wheretheiss.at/v1/satellites/25544');
}

function setup() {
  createCanvas(600, 600);
  textSize(16);
  noLoop(); 

function draw() {
  background(200);
  if (issData) {
    text('Name: ' + issData.name, 10, 20);
    text('Latitude: ' + issData.latitude, 10, 40);
    text('Longitude: ' + issData.longitude, 10, 60);
  }
}

```



## COVID-19 API
- **Description**: Access data related to the COVID-19 pandemic, including infection rates and spread over time.
- **p5.js Example**:
```javascript
function setup() {
  loadJSON('https://api.covid19api.com/total/dayone/country/south-africa', gotData);
}

function gotData(data) {
  // Visualize the COVID data in your p5.js sketch
  console.log(data);
}
```

## Unsplash API
- **Description**: Utilize a vast library of high-quality, royalty-free images. This example sketch will display a random image in your p5.js sketch. There are lots of other things you can try, the full documentation can be found here: https://unsplash.com/documentation#search-photos
- **p5.js Example**:
```javascript
function setup() {
  let url = 'https://api.unsplash.com/photos/random?client_id=YOUR_API_KEY';
  loadJSON(url, gotData);
}

function gotData(data) {
  // Display a random image from Unsplash in your p5.js sketch
  createImg(data.urls.regular);
}
```

Remember to replace `YOUR_API_KEY` with your actual API key for the respective service.
