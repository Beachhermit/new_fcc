function birthdayCakeCandles(ar) {
    //exercise had long-winded story but the algorithm basically takes
    //an array and returns how many times the largest number appears.
    
    console.log(ar);

    let sortedCandles = ar.sort((x, y) => x == y ? 0 : x < y ? 1 : -1);
    console.log(sortedCandles);
    

    let counter = 1;
    for (let i = 1; i < sortedCandles.length; i++) {
        if (sortedCandles[i-1] > sortedCandles[i]){
            return counter;
        }
        else {
            counter++;
        }
    }
    
    return ar.length;
    
}

console.log(birthdayCakeCandles([3, 2, 2, 1, 4, 5, 5, 5, 5, 5, 5, 5]));