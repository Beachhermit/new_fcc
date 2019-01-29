function diffArray(arr1, arr2) {
  var newArr = [];
  let regex;
  
  for (let i = 0; i < arr1.length; i++) {
    regex = new RegExp(arr1[i]);
    if (!regex.test(arr2)) {
      newArr.push(arr1[i]);
    }
  }

  for (let i = 0; i < arr2.length; i++) {
    regex = new RegExp(arr2[i]);
    if (!regex.test(arr1)) {
      newArr.push(arr2[i]);
    }
  }
  
  return newArr;
}

console.log(diffArray([1, 2, 3, 5, 6], [1, 2, 3, 4, 5]));