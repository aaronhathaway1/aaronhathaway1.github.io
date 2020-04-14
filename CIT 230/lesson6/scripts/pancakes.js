var date = new Date();
var year = date.getFullYear();

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

var day = date.getDay();

var dayOfWeek = daysOfWeek[day];

if (day == 5) {
    document.getElementById('pancakes').style.display = "block";
}
