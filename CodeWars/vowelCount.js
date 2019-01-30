function getCount(str) {
  var vowelsCount = 0;
  
  if (str.match(/[aeiou]/g) != null) {
    vowelsCount = str.match(/[aeiou]/g).length;
  }
  
  return vowelsCount;
}

console.log(getCount(""));