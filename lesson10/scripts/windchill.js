const apiURL = 'https://api.openweathermap.org/data/2.5/weather?id=5604473&appid=95bbd03231863ab385f03d018a4aeaaa&units=imperial';

fetch(apiURL)
    .then(
        response => {return response.json()})
        .then(
            jsObject => {
                console.log(jsObject)
                let currentTemp = jsObject.main.temp;
                let windSpeed = jsObject.wind.speed;
                let windChill = 0;
            }
        )        

if (currentTemp <= 50 && windSpeed >=3){
    windChill = 35.74 + 0.6215 * currentTemp - 35.75 * Math.pow(windSpeed, 0.16) + 0.4275 * currentTemp * Math.pow(windSpeed, 0.16);
    document.querySelector('#wind_Chill').innerHTML = windChill.toFixed(0) + '&deg' ; //50&deg
}   else{
    windChill = 'N/A';
    document.querySelector('#wind_Chill').innerHTML = windChill; 
}

document.querySelector('#current-temp').innerHTML = `{windChill}&deg` ; //50&deg
document.querySelector('#wind-speed').innerHTML = windSpeed +'mph'; //10mph
document.querySelector('#wind_Chill').innerHTML = windChill + '&deg' ; //50&deg