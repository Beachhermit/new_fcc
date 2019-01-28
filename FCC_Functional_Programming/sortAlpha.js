function alphabeticalOrder(arr) {
    //seems to be not working in fcc. The shortcut return arr.sort() did work, though.
    //forum says it will be updated
  // Add your code below this line
  return arr.sort(function(a, b) {
    //return a > b;       apparently, this no longer works in Chrome
    return a == b ? 0 : a > b ? 1 : 0;
  });
  // sort needs to return -1 for a to go before b, 1 to go after, 0 to stay in place
  // at least in Chrome
  
  // Add your code above this line
}
console.log(alphabeticalOrder(["a", "d", "c", "a", "z", "g"]));