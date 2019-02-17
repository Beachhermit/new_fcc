function telephoneCheck(str) {
    
    function correctDigits(str) {
        //does the string have either 10 or 11 digits? If 11, does it start with a 1?
        let digits = str.match(/\d/g);
        if (digits.length != 10 && digits.length != 11) {
            return false;
        }
        if (digits.length == 11 && digits[0] != 1) {
            return false;
        }
        return true;
    }
    
    function removeLast(str) {  //removes last char if it's a dash or space
        if (str[str.length-1] == " " || str[str.length-1] == "-") { 
            return str.substring(0, str.length-1);
        }
        else {return str}
    }
    
    function checkOpenBrackets(str) {
        let opener = str.split("").indexOf("(");
                                        
        if (!(opener == 0 || opener == 1 || opener == 2)) {    //open bracket must be at index 0, 1 or 2 ((555)... or 1(555)... or 1 (555)...) 
            return false;
        }
        if (str[opener+4] != ")") {return false}    //check for matching close bracket
        if (opener == 1 && str[0] != "1") {return false}    //bracket in position 1 can only have a 1 before it
        if (opener == 2 && str[1] != " ") {return false}    //bracket in position 2 can only have a space before it
        return true;
    }
    
    if (!correctDigits(str)) {return false}
    
    //check that the string ends in exactly 4 digits preceded by a dash or space or another number
    if (!/[\d- ]\d{4}$/.test(str)) {
        return false}
    str = str.substring(0, str.length-4);       //get rid of the last 4 digits
    str = removeLast(str); //remove dash or space if present
    
    
    //check that this string ends in exactly 3 digits, preceded by space, dash, close bracket or another number
    if (!/[\)\d- ]\d{3}$/.test(str)) {return false}
    str = str.substring(0, str.length-3);       //get rid of the last 3 digits
    str = removeLast(str); //remove dash or space if present
    
    //if there is an open bracket, check there's a pair and in the right place
    if (str.split("").indexOf("(") != -1) {       //only check for positions if there's an opener present somewhere
        if (!checkOpenBrackets(str)) {
            return false;
        }
    }
    
    if (str[str.length-1] == ")") {     //if there's a close bracket, it should be at the end now. check for matching one
        if (str[str.length-5] != "(") {
            return false} 
        else {
            str = str.replace(/\(|\)/g, ""); //if brackets are present and check out, remove them from string
        }
    }
    if (!/[\d- ]?\d{3}$/.test(str)) {return false}

    return true;
  
}

console.log(telephoneCheck("555-555 5555") + " should return true");
console.log(telephoneCheck("(555)555-5555") + " should return true");
console.log(telephoneCheck("(555) 555-5555") + " should return true");
console.log(telephoneCheck("123 456 789") + " should return false");
console.log(telephoneCheck("555 555 5555") + " should return true");
console.log(telephoneCheck("1 555 555 5555") + " should return true");
console.log(telephoneCheck("1 555)555-5555") + " should return false");
console.log(telephoneCheck("2 (757) 622-7382") + " should return false");
console.log(telephoneCheck("(555-555-5555") + " should return false");
console.log(telephoneCheck("10 (757) 622-7382") + " should return false");
console.log(telephoneCheck("555)-555-5555") + " should return false");
console.log(telephoneCheck("1 (555) 555 5555") + " should return true");
console.log(telephoneCheck("1(555)555-5555") + " should return true");