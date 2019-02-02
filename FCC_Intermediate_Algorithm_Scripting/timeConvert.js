function timeConversion(s) {
    //converts a time to 24 hour time
    let hours = s.match(/\d+/);
    
    if (hours == "12") {hours = "00";}
    
    if (/P/.test(s)) {
        hours = parseInt(hours) + 12;
    }
    return s.substring(0, 8).replace(/\d+/, hours);
}

console.log(timeConversion("02:11:33PM"));