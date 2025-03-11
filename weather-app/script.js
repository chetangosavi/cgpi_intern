const apiKey='03bde50036ac8a385b069316421c663b'

const getWeather = async () => {
    const city = document.getElementById('city').value.trim();
    const weatherInfo = document.querySelector('.weatherInfo');

    if (!city) {
        weatherInfo.innerHTML = `<p class="mt-2">Please enter a city name.</p>`;
        return;
    }

    try {
        const response = await fetch(
            `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${apiKey}`

        );
        const data = await response.json();

        if (data.cod === 200) {
            const { main, weather, name, wind } = data;

            weatherInfo.innerHTML = `
                <div class="mt-5 bg-white text-black p-4 rounded-lg shadow-md w-full">
                    <h3 class="text-2xl font-bold">${name}</h3>
                    <p class="text-lg capitalize">${weather[0].description}</p>
                    <p class="text-xl font-bold">${main.temp}°C</p>
                    <p>Humidity: ${main.humidity}%</p>
                    <p>Wind Speed: ${wind.speed} m/s</p>
                </div>
            `;
        } else {
            weatherInfo.innerHTML = `<p class="text-red-500 mt-4">${data.message}</p>`;
        }
    } catch (error) {
        weatherInfo.innerHTML = `<p class="text-red-500 mt-4">Error fetching weather data. Please try again.</p>`;
    }
};