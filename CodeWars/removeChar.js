function removeChar(str){
 //You got this!
 if (str.length < 2) {
 return str;
 }
 else {
 
    return str.substring(1, str.length-1);
 }

};



console.log(removeChar("eloquent"));