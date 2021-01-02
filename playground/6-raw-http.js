const http = require("http");
url =
  "http://api.weatherstack.com/current?access_key=a2e4c65b3fd4ee34ae8a2fc98b1af823&query=New%20York";

const request = http.request(url, (response) => {
  let data = "";

  response.on("data", (chunk) => {
    data = data + chunk.toString();
  });

  response.on("end", () => {
    const body = JSON.parse(data);
    console.log(body);
  });
});

request.on('error', (error) => {
  console.log("Error: ", error)
})

request.end();
