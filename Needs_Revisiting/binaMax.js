function getMaxLessThanK(n, k) {
    //exercise in use of bitwise & - takes & between all numbers up to n and finds highest value less than k
    //took crazy long time to first realise that I didn't need to convert to binary first (I had to look at a spoiler)
    //then took a long time to work out the loop synergy - they kept almost working with odd errors
    var binRecord= 0, temp = 0;
        for (var i = 1; i < n; i++) {
            for (var j = i+1; j <= n; j++) {
                temp = i & j;
                if ((temp < k) && (temp > binRecord)) { binRecord = temp; }
                if (binRecord == k - 1) { return k - 1; }
            }
        }
    return binRecord;
}


console.log("should return 121: " + getMaxLessThanK(123, 122));
console.log("should return 277: " + getMaxLessThanK(601, 278));
console.log("should return 448: " + getMaxLessThanK(535, 449));
console.log("should return 108: " + getMaxLessThanK(293, 109));
