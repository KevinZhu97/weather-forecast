let apiKey = "3df61c3caa6f049766b056bd79c1c5f3"
let weatherDescription = document.querySelector('.weather-description')
let weatherLocation = document.querySelector('.weather-location')
let weatherTemperature = document.querySelector('.weather-temperature-text')
let weatherFeelsLike = document.querySelector('.weather-feels-like')
let weatherWind = document.querySelector('.weather-wind')
let weatherHumidity = document.querySelector('.weather-humidity')
let searchCityInput = document.querySelector('#search')
let searchErrorMessage = document.querySelector('.error-message')
let searchMagGlass = document.querySelector('.search-glass')
let backgroundGif = document.querySelector('html')
let currentCity = []

async function getWeather(city) {
    const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=imperial`, {
        mode: 'cors'
    });
    const weatherData = await response.json();

    if (response.status === 404) {
        searchErrorMessage.style.display = 'block'
    } else {
        searchErrorMessage.style.display = 'none'
    }

    //change innerText to new city search
    weatherFeelsLike.innerText = `Feels like: ${Math.round(weatherData.main.feels_like)}°F`;
    weatherHumidity.innerText = `Humidity: ${weatherData.main.humidity}%`;
    weatherWind.innerText = `Wind: ${weatherData.wind.speed} MPH`
    weatherLocation.innerText = `${weatherData.name}, ${weatherData.sys.country}`
    weatherDescription.innerText = `${capitalizeFirstLetter(weatherData.weather[0].description)}`;
    weatherTemperature.innerText = `${Math.round(weatherData.main.temp)}`

    //change background according to weather description
    if (weatherData.weather[0].description === 'clear sky') {
        backgroundGif.style.background = 'url(sunny.gif) no-repeat center center fixed';
        backgroundGif.style.backgroundSize = 'cover';
    } else if (weatherData.weather[0].description === 'few clouds') {
        backgroundGif.style.background = 'url(sunny.gif) no-repeat center center fixed';
        backgroundGif.style.backgroundSize = 'cover';
    } else if (weatherData.weather[0].description === 'scattered clouds') {
        backgroundGif.style.background = 'url(sunny.gif) no-repeat center center fixed';
        backgroundGif.style.backgroundSize = 'cover';
    } else if (weatherData.weather[0].description === 'broken clouds') {
        backgroundGif.style.background = 'url(storm-world-meteorological-day.gif) no-repeat center center fixed';
        backgroundGif.style.backgroundSize = 'cover';
    } else if (weatherData.weather[0].description === 'shower rain') {
        backgroundGif.style.background = 'url(travel-rain.gif) no-repeat center center fixed';
        backgroundGif.style.backgroundSize = 'cover';
    } else if (weatherData.weather[0].description === 'rain') {
        backgroundGif.style.background = 'url(travel-rain.gif) no-repeat center center fixed';
        backgroundGif.style.backgroundSize = 'cover';
    } else if (weatherData.weather[0].description === 'thunderstorm') {
        backgroundGif.style.background = 'url(storm-world-meteorological-day.gif) no-repeat center center fixed';
        backgroundGif.style.backgroundSize = 'cover';
    } else if (weatherData.weather[0].description === 'snow') {
        backgroundGif.style.background = 'url(snow-icegif-29.gif) no-repeat center center fixed';
        backgroundGif.style.backgroundSize = 'cover';
    } else {
        backgroundGif.style.background = 'url(77422432ef2ee5f1ffbd8828b1bca3b9.gif) no-repeat center center fixed';
        backgroundGif.style.backgroundSize = 'cover';
    };
}

function capitalizeFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
  }

searchCityInput.addEventListener('keyup', (e) => {
    if (e.key === "Enter") {
        currentCity = searchCityInput.value
        getWeather(currentCity)
    }
})
