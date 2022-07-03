function weather() {
    fetch('http://api.openweathermap.org/data/2.5/weather?q=ODESA&units=metric&APPID=5d066958a60d315387d9492393935c19', {
        method: "GET"
    })
        .then((res) => {
            if (res.ok) {
                return res.json();
            }
        })
        .then((result) => {
            const city = result.name;
            const temp = Math.round(result.main.temp);
            const feels = Math.round(result.main.feels_like);
            const pressure = result.main.pressure;
            const description = result.weather[0].description;
            const humidity = result.main.humidity;
            const speedWind = Math.round(result.wind.speed);
            const degWind = result.wind.deg;
            const icon = result.weather[0].icon;

            document.querySelector('.weather').innerHTML = `
            <div class="weather__wrap">
                <h2 class="weather__city">${city}</h2>
                <img src="http://openweathermap.org/img/w/${icon}.png" alt="icon-weather">
            </div>
            <p class="weather__temp">${temp}&#176;C</p>
            <p class="weather__feels">Feels like: ${feels}&#176;C</p>
            <p class="weather__description">${description}</p>
            <div class="weather__row">
                <div class="weather__row-item">
                    <p class="weather__row-title">Pressure</p>
                    <p class="weather__row-text">${pressure} hPa</p>
                </div>
                <div class="weather__row-item">
                    <p class="weather__row-title">Humidity</p>
                    <p class="weather__row-text">${humidity}%</p>
                </div>
                <div class="weather__row-item">
                    <p class="weather__row-title">Wind</p>
                    <p class="weather__row-text">${speedWind} m/s</p>
                    <p class="weather__row-text">${degWind}&#176;</p>
                </div>
            </div>`;
        })
            .catch(error => {
                console.log(error);
                document.querySelector('.weather').innerHTML = 'ERROR';
            })
}
weather();