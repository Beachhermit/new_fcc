function dropElements(arr, func) {
  // Drop them elements until func returns true, leave the rest
  
  //iterate through array, dropping
  //when func is true, return array.
  
    let test = false;
    while (test == false) {
        if (!func(arr[0])) {
            arr.shift();
        }
        else {
            test = true;
        }
    }
      return arr;
}
  



console.log(dropElements([1, 2, 3], function(n) {return n >= 3; }));