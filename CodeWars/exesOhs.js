function XO(str) {
  let eckses = str.match(/x/ig), ohses =  str.match(/o/ig);
  if (eckses == null || ohses == null) {
    if (eckses == null && ohses == null) {
      return true;
      }
      else {
        return false;
      }
    }
    else {
      return eckses.length == ohses.length;
    }
  
  }

console.log(XO("xxxm"));