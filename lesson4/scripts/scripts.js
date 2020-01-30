var date = new Date();

var year = date.getFullYear();

console.debug(year);

document.getElementById('currentYear').innerHTML = year;

document.getElementById('lastModified').innerHTML = document.lastModified;


/*     Thursday, 30 January 2020   */

var currentDate = new Date();
let fullDate;

/*     Day of Week   */

let daysOfWeek = [
    'Sunday',
    'Monday',
    'Tuesday',
    'Wednesday',
    'Thursday',
    'Friday',
    'Saturday'
]

let dayOfWeek = currentDate.getDay(0);

fullDate = daysOfWeek[dayOfWeek];

/*     Day of Month   */

let dayOfMonth  = currentDate.getDate();
fullDate += ", " + dayOfMonth;

/*        Month       */

let months = [
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
    'July',
    'August',
    'September',
    'October',
    'November',
    'December'
];

fullDate += ' ' + months[currentDate.getMonth()];

/*         Year       */

fullDate += ' ' + year;

/*     Full Date   */

document.querySelector('#currentDate').textContent = fullDate;