const weatherForm = document.querySelector("form");
const search = document.querySelector("input");
const messageOne = document.querySelector("#message-1");
const messageTwo = document.querySelector("#message-2");
const weatherIcon = document.querySelector("#weather-icon");


weatherForm.addEventListener("submit", (e) => {
  e.preventDefault();

  const location = search.value;

  messageOne.textContent = "Loading...";
  messageTwo.textContent = "";

  fetch(
    `http://api.weatherstack.com/current?access_key=a2e4c65b3fd4ee34ae8a2fc98b1af823&query=${location}`
  ).then((response) => {
    response.json().then((data) => {
      if (data.error) {
        messageOne.textContent = data.error.info
      } else {
        messageOne.textContent = data.location.name;
        messageTwo.textContent = `Currently ${data.current.weather_descriptions[0]} with a temperature of ${data.current.temperature} degrees and a ${data.current.precip}% chance of rain.`
        weatherIcon.src = data.current.weather_icons[0];
      }
    });
});
