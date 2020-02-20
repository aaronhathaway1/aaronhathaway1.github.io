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