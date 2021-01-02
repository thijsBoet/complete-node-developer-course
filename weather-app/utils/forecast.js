const request = require("postman-request");

const forecast = (latitude, longitude, callback) => {
  const url = `http://api.weatherstack.com/current?access_key=${process.env.API_KEY}&query=${latitude},${longitude}&units=m`;

  request({ url, json: true }, (error, { body }) => {
    if (error) {
      callback("Unable to connect to Weatherstack weather service!", undefined);
    } else if (body.error) {
      callback(body.error.info, undefined);
    } else {
      callback(
        undefined,
        (data = {
          temperature: body.current.temperature,
          weather_description: body.current.weather_descriptions[0],
          temperatureFeelsLike: body.current.feelslike,
          precipitation: body.current.precip,
          weather_icon: body.current.weather_icons[0],
          wind_speed: body.current.wind_speed,
          wind_dir: body.current.wind_dir,
        })
      );
    }
  });
};

module.exports = forecast;
