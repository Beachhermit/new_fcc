function largestOfFour(arr) {

    
   //freeCodeCamp challenge. Takes 4 arrays of 4 numbers and returns an array with the largest number from each array.

    
  let newArr = [];

  for (let subArr in arr) {

      newArr.push(Math.max(...arr[subArr]));

  }
 
  
  
  return newArr;

}