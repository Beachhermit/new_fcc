function convertToRoman(num) {

    
    function splitNumber(num) {
        let thousands = Math.floor(num/1000);
        num = num - (1000 * thousands);
        let hundreds = Math.floor(num/100);
        num = num - (100 * hundreds);
        let tens = Math.floor(num/10), 
        ones = num - (10 * tens);
        return {"thousands": thousands, "hundreds": hundreds, "tens": tens, "ones": ones};
    }
    

    
    function addLetters(number, position) {

        switch (number) {
            case 1:
               return position[0];
            case 2:
                return position[0] + position[0];
            case 3:
                return position[0] + position[0] + position[0];
            case 4:
                return position[0] + position[1];
            case 5:
                return position[1];
            case 6:
                return position[1] + position[0];
            case 7:
                return position[1] + position[0] + position[0];
            case 8:
                return position[1] + position[0] + position[0] + position[0];
            case 9:
                return position[0] + position[2];
            }
    }
    
    const SPLIT_NUM = splitNumber(num);
    let result = "";
    
    if (SPLIT_NUM["thousands"] > 0) {
        result += addLetters(SPLIT_NUM["thousands"], ["M"])
    }
    if (SPLIT_NUM["hundreds"] > 0) {
       result += addLetters(SPLIT_NUM["hundreds"], ["C", "D", "M"]); 
    }
    if (SPLIT_NUM["tens"] > 0) {
       result += addLetters(SPLIT_NUM["tens"], ["X", "L", "C"]); 
    }
    if (SPLIT_NUM["ones"] > 0) {
       result += addLetters(SPLIT_NUM["ones"], ["I", "V", "X"]); 
    }
    
 return result;
}

console.log(convertToRoman(15));