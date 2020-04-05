const weatherProvoURL = 'https://api.openweathermap.org/data/2.5/weather?id=5780026&appid=95bbd03231863ab385f03d018a4aeaaa&units=imperial';

fetch(weatherProvoURL)
    .then(
        response => {
            return response.json()
        }
    )
    .then(
        jsObject => {

            console.log(jsObject);
            
            let currently = jsObject.weather[0].main;
            let currentTemp = jsObject.main.temp;
            let windSpeed = jsObject.wind.speed;
            let windChill = 0;
            let humidity = jsObject.main.humidity;


        //     let image = 'https://openweathermap.org/img/wn/' +
        //     jsObject.weather[0].icon + 
        //     '.png';
            
        // document.querySelector('#weather-icon')
        //     .setAttribute('src', image);

            // console.log(currently);
            // console.log('currentTemp = ' + currentTemp); // logging out the response
            // console.log('humidty = ' + humidity);
            // console.log('windSpeed = ' + windSpeed);
            // console.log('windChill = ' + windChill);

            currentTemp = Math.round(currentTemp); // rounding the answer
            windSpeed = Math.round(windSpeed);     // rounding the answer


            if (currentTemp <= 50 && windSpeed >= 3) {
                windChill = 35.74 + (0.6215 * currentTemp) - (35.75 * Math.pow(windSpeed, 0.16)) + (0.4275 * currentTemp * Math.pow(windSpeed, 0.16));
                document.getElementById('windChillProvo').innerHTML = windChill.toFixed(0) + ' &deg' + 'F'; //50&deg
            } else {
                windChill = 'N/A';
                document.getElementById('windChillProvo').innerHTML = windChill;
            }

            console.log(windChill);

            document.getElementById('currentlyProvo').innerHTML = currently;
            document.getElementById('currentTempProvo').innerHTML = currentTemp + ' &deg' + 'F';
            document.getElementById('humidityProvo').innerHTML = humidity + '%';
            document.getElementById('windSpeedProvo').innerHTML = windSpeed + ' mph';

            // Optimized
            // let weatherIcon = document.querySelector('#weather-icaon');
            // weatherIcon.setAttribute('src', image);
            // weatherIcon.setAttribute('alt', alt);

            }
        );