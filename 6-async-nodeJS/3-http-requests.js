const request = require("postman-request");
const dotenv = require("dotenv");
dotenv.config();

const API_KEY = process.env.API_KEY;

let search_text = "Rotterdam";

const url = `http://api.weatherstack.com/current?access_key=${API_KEY}&query=${search_text}`;

request({ url, json: true }, (error, response) => {
  if (error) {
    console.log("Unable to connect to Weather service!");
  } else if (response.body.error) {
    console.log(response.body.error.info);
  } else {
    const currentTemperature = response.body.current.temperature;
    const weatherDescription = response.body.current.weather_descriptions[0];
    const temperatureFeelsLike = response.body.current.feelslike;
    const precipitation = response.body.current.precip;

    console.log(
      `It is currently ${currentTemperature} degrees Celsius and ${weatherDescription} out in ${search_text}.
    \nIt feels like ${temperatureFeelsLike} degrees out.
    \nAnd there is a ${precipitation}% chance of rain.`
    );
  }
});

// Geocoding
const MAPBOX_access_token = process.env.MAPBOX;
const MAPBOX_url = `https://api.mapbox.com/geocoding/v5/mapbox.places/${search_text}.json?limit=1&access_token=${MAPBOX_access_token}`;

// Address -> Lat/Long -> Weather
request({ url: MAPBOX_url, json: true }, (error, response) => {
  if (error) {
    console.log("Unable to connect to mapbox location service!");
  } else if (response.body.message) {
    console.log(response.body.message);
  } else if (response.body.features.length === 0) {
    console.log("Unable to find location. Please try another search.");
  } else {
    const place_name = response.body.features[0].place_name;
    const longitude = response.body.features[0].center[0];
    const latitude = response.body.features[0].center[1];

    console.log(
      `${place_name} coordinated are ${longitude} Longitude and ${latitude} Latitude.\n`
    );
  }
});
