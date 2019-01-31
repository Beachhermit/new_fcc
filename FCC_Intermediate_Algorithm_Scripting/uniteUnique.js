function uniteUnique(arr) {
    /*Write a function that takes two or more arrays and returns 
    a new array of unique values in the order of the original 
    provided arrays. In other words, all values present from all 
    arrays should be included in their original order, but with 
    no duplicates in the final array.*/
    
    //concatenate arrays
    let fullArray = [];
    for (let i = 0; i < arguments.length; i++) {
        fullArray = fullArray.concat(arguments[i]);
       // console.log("Concat Pass " + i + " = " + fullArray);
    }
    
    //search and destroy duplicates
    let finalArray = [];
    let iterations = fullArray.length;
    for (let i = 0; i < iterations; i++) {
        let current = fullArray.shift();
        finalArray.push(current);
        while (fullArray.indexOf(current) != -1) {
            fullArray.splice(fullArray.indexOf(current), 1);
            iterations--;
        }
        //console.log("SnD pass " + i + " = " + " finalArray = " + finalArray + " fullArray = " + fullArray + " iterations = " + iterations);
    }
    
  return finalArray;
}

uniteUnique([1, 3, 2], [5, 2, 1, 4], [2, 1]);