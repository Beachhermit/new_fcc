function mxdiflg(a1, a2) {
    
    function getLengths(arr) {
        let result = [];
        for(let str in arr) {
            result.push(arr[str].length);
        }
        return result;
    }
    
    if (a1 == "" || a2 == "") {
        return -1;
    }
    else {
    const a1Lengths = getLengths([...a1]), a2Lengths = getLengths([...a2]);
    const min1 = Math.min(...a1Lengths), min2 = Math.min(...a2Lengths),
          max1 = Math.max(...a1Lengths), max2 = Math.max(...a2Lengths);
    
    return Math.max(Math.abs(max2-min1), Math.abs(max1-min2));
    }
}

var s1 = ["hoqq", "bbllkw", "oox", "ejjuyyy", "plmiis", "xxxzgpsssa", "xxwwkktt", "znnnnfqknaz", "qqquuhii", "dvvvwz"];
var s2 = [];

console.log(mxdiflg(s1, s2));