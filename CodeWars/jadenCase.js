String.prototype.toJadenCase = function () {
  let arr = this.split(" ");
  //console.log(arr);
  for (let i = 0; i < arr.length; i++) {
      arr[i] = arr[i][0].toUpperCase() + arr[i].substr(1, arr[i].length-1);
  }
  return arr.join(" ");
};

console.log("hello hello".toJadenCase());