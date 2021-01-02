const request = require('postman-request')

const geocode = (address, callback) => {
  const url = `https://api.mapbox.com/geocoding/v5/mapbox.places/${encodeURIComponent(
    address
  )}.json?limit=1&access_token=${process.env.MAPBOX}`;

  request({ url, json: true }, (error, {body: response}) => {
    if (error) {
      callback("Unable to connect to mapbox location service!", undefined);
    } else if (!response.features) {
      callback(
        "Unable to find location. Please try another search.",
        undefined
      );
    } else {
      callback(
        undefined,
        (data = {
          longitude: response.features[0].center[0],
          latitude: response.features[0].center[1],
          location: response.features[0].place_name,
        })
      );
    }
  });
};

module.exports = geocode;