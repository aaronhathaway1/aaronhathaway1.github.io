/* <!-- Copyright and Last Modified functions --> */

var date = new Date();
var year = date.getFullYear();

console.debug(year);

document.getElementById('currentYear').innerHTML = year;
document.getElementById("lastModified").innerHTML = document.lastModified;


/* <!-- Pancake Banner --> */
const currentDate = new Date();
const aside = document.querySelector('aside');

if (currentDate.getDay() === 6){
    aside.style.display = 'block';
} else{
        aside.style.display = 'none';
    }

/* <!-- Windchill Declaration --> */
let f, t, s;
t = 50;
s = 50;

if (t <= 50 && s >=3){
    f = 35.74 + 0.6215 * t - 35.75 * Math.pow(s, 0.16) + 0.4275 * t * Math.pow(s, 0.16);
    document.querySelector('#wind_Chill').innerHTML = f.toFixed(2) + '&deg' ; //50&deg
}   else{
    f = 'N/A';
    document.querySelector('#wind_Chill').innerHTML = f; 
}

document.querySelector('#current-temp').innerHTML = `{t}&deg` ; //50&deg
document.querySelector('#wind-speed').innerHTML = s +'mph' ; //10mph
document.querySelector('#wind_Chill').innerHTML = f + '&deg' ; //50&deg
