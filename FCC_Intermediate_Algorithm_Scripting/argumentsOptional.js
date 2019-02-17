function addTogether(x) {
    //takes either one or two numbers as argments, two numbers, it adds together
    //one number, it returns a function that takes another number to add to first
    //any non-number arguments should return undefined
    
  for (let argument in arguments) {
    if (typeof arguments[argument] != "number") {
      return undefined;
    }
  }
  if (arguments.length == 2) {
    
    return arguments[0] + arguments[1];
  }
  else if (arguments.length == 1) {
    return function(y) {
      if (typeof y == "number") {
      return x + y;
      }
      else {
        return undefined;
      }
    };
  }
  return undefined; 
}

console.log(addTogether(2, 3));