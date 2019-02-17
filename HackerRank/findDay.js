
// The days of the week are: "Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"
function getDayName(dateString) {
    
    let dayName = new Date(dateString).toString().substr(0, 3);
    switch (dayName) {
        case "Mon":
            return "Monday";
        case "Tue":
            return "Tuesday";
        case "Wed":
            return "Wednesday";
        case "Thu":
            return "Thursday";
        case "Fri":
            return "Friday";
        case "Sat":
            return "Saturday";
        case "Sun":
            return "Sunday";
        default:
            return "Error";
    }

}

console.log(getDayName("12/13/2016"));