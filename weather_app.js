const API_URL = "https://api.open-meteo.com/v1/forecast";

async function getWeather(city, latitude, longitude) {
  const url = `${API_URL}?latitude=${latitude}&longitude=${longitude}&current=temperature_2m,relative_humidity_2m,wind_speed_10m,weather_code`;

  const response = await fetch(url);
  if (!response.ok) {
    throw new Error("Unable to fetch weather data");
  }

  const data = await response.json();

  return {
    city,
    temperature: data.current.temperature_2m,
    humidity: data.current.relative_humidity_2m,
    windSpeed: data.current.wind_speed_10m,
    weatherCode: data.current.weather_code,
  };
}

function displayWeather(weather) {
  console.log(`\nWeather in ${weather.city}`);
  console.log(`Temperature: ${weather.temperature}°C`);
  console.log(`Humidity: ${weather.humidity}%`);
  console.log(`Wind: ${weather.windSpeed} km/h`);
  console.log(`Weather code: ${weather.weatherCode}`);
}

async function main() {
  // Example: Casablanca coordinates
  const weather = await getWeather("Casablanca", 33.5731, -7.5898);
  displayWeather(weather);
}

main().catch((error) => {
  console.error("Error:", error.message);
});
