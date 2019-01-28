function sumAll(arr) {

  function addUp(x, y) {
    
    const addArray = [];
    for (let i = x; i <= y; i++) {
      addArray.push(i);
    }
    return addArray.reduce((total, next) => total + next);
  }
  
  if (arr[0] == arr[1]) {
    return arr[0] + arr[1];
  }
  else if (arr[0] > arr[1]) {
    return addUp(arr[1], arr[0]);
  }
  else {
    return addUp(arr[0], arr[1])
  }
}

console.log(sumAll([1, 4]));