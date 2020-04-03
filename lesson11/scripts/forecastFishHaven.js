let forecastURL = 'https://api.openweathermap.org/data/2.5/forecast?zip=83287,us&appid=95bbd03231863ab385f03d018a4aeaaa&units=imperial';

fetch(forecastURL)
    .then(
        response => {
            return response.json()
        }
    )
    .then(
        jsObject => {

            console.log(jsObject);

            let j = 1;

            for (i = 0; i < 40; i++) {

                let date = jsObject.list[i].dt_txt;
                // console.log(date);
                let correctTime = date.includes('18:00:00');
                if (correctTime && j === 1) {
                    // console.log(correctTime);
                    let temp1 = jsObject.list[i].main.temp_max;
                    // console.log(temp1);
                    temp1 = Math.round(temp1);
                    console.log(temp1);
                    document.getElementById('temp1').innerHTML = temp1 + ' &degF'

                    let image1 = 'https://openweathermap.org/img/wn/' +
                        jsObject.list[i].weather[0].icon +
                        '.png';
                    document.querySelector('#img1')
                        .setAttribute('src', image1);

                    j++;
                } else if (correctTime && j === 2) {
                    // console.log(correctTime);
                    let temp2 = jsObject.list[i].main.temp_max;
                    // console.log(temp2);
                    temp2 = Math.round(temp2);
                    console.log(temp2);
                    document.getElementById('temp2').innerHTML = temp2 + ' &degF'

                    let image2 = 'https://openweathermap.org/img/wn/' +
                        jsObject.list[i].weather[0].icon +
                        '.png';
                    document.querySelector('#img2')
                        .setAttribute('src', image2);
                    j++;
                } else if (correctTime && j === 3) {
                    // console.log(correctTime);
                    let temp3 = jsObject.list[3].main.temp_max;
                    // console.log(temp3);
                    temp3 = Math.round(temp3);
                    console.log(temp3);
                    document.getElementById('temp3').innerHTML = temp3 + ' &degF'

                    let image3 = 'https://openweathermap.org/img/wn/' +
                        jsObject.list[i].weather[0].icon +
                        '.png';
                    document.querySelector('#img3')
                        .setAttribute('src', image3);
                    j++;
                } else if (correctTime && j === 4) {
                    // console.log(correctTime);
                    let temp4 = jsObject.list[i].main.temp_max;
                    // console.log(temp4);
                    temp4 = Math.round(temp4);
                    console.log(temp4);
                    document.getElementById('temp4').innerHTML = temp4 + ' &degF'

                    let image4 = 'https://openweathermap.org/img/wn/' +
                        jsObject.list[i].weather[0].icon +
                        '.png';
                    document.querySelector('#img4')
                        .setAttribute('src', image4);
                    j++;
                } else if (correctTime && j === 5) {
                    // console.log(correctTime);
                    let temp5 = jsObject.list[i].main.temp_max;
                    // console.log(temp5);
                    temp5 = Math.round(temp5);
                    console.log(temp5);
                    document.getElementById('temp5').innerHTML = temp5 + ' &degF'

                    let image5 = 'https://openweathermap.org/img/wn/' +
                        jsObject.list[i].weather[0].icon +
                        '.png';
                    document.querySelector('#img5')
                        .setAttribute('src', image5);
                    j++;
                }
            }


        }
    );