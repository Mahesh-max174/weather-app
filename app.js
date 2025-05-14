async function getWeather() {
  const city = document.getElementById("cityInput").value;
  const apiKey = "7fc2a40be5cc46d397b13833251405"; // Replace with your WeatherAPI key
  const apiUrl = `https://api.weatherapi.com/v1/current.json?key=${apiKey}&q=${city}`;

  try {
    const response = await fetch(apiUrl);
    const data = await response.json();

    const weatherResult = document.getElementById("weatherResult");
   weatherResult.innerHTML = `
  <h3>${data.location.name}</h3>
  <img src="${data.current.condition.icon}" alt="Weather Icon" style="width: 64px;">
  <p>Temperature: ${data.current.temp_c}°C</p>
  <p>Weather: ${data.current.condition.text}</p>
`;
  } catch (error) {
    alert("City not found!");
  }
}
