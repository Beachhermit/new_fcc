function translatePigLatin(str) {
    
    if (!/[aeiou]/.test(str)) {   
        return str + "ay";
    }
    
    if (/[aeiou]/.test(str[0])) {
        return str + "way";
    }
    
    while (/[^aeiou]/.test(str[0])) {
        str = str.substring(1) + str[0];
    }
    return str + "ay";
 
}

console.log(translatePigLatin("gypsya"));