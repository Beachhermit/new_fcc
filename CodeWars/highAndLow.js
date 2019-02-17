function highAndLow(numbers){
  let arr = numbers.split(" ");
  let numArr = [];
  for (let num in arr) {
      numArr[num] = parseInt(arr[num]);
  }
  let newArr = numArr.sort((x, y) => y - x);
  return newArr[0] + " " + newArr[newArr.length - 1];
}

console.log(highAndLow("4 5 29 54 4 0 -214 542 -64 1 -3 6 -6"));