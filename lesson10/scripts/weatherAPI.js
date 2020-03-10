const apiURL = 'https://api.openweathermap.org/data/2.5/weather?id=5604473&appid=95bbd03231863ab385f03d018a4aeaaa&units=imperial';

fetch(apiURL)
    .then(
        response => {
            return response.json()
        }
    )
    .then(
        jsObject => {
            document.querySelector('#current-temp')
                .textContent = jsObject.main.temp;
            let image = 'https://openweathermap.org/img/wn/' +
                jsObject.weather[0].icon + 
                '.png';
                
            document.querySelector('#weather-icon')
                .setAttribute('src', image);

            let alt = jsObject.weather[0].description;

            document.querySelector('#weather-icon')
                .setAttribute('alt', alt);

            // Optimized
            // let weatherIcon = document.querySelector('#weather-icaon');
            // weatherIcon.setAttribute('src', image);
            // weatherIcon.setAttribute('alt', alt);

        }
    );

