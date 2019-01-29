function destroyer(arr) {
  // Remove all the values

  let cleanItUp = [...arguments[0]];    //take first argument as the search area
  let targets = [];
  
  for (let i = 1; i < arguments.length; i++) {  //hold the target arguments in an array
      targets.push(arguments[i]);
  }
  
  for (let i = 0; i < targets.length; i++) {    //filter the search area by each target
      cleanItUp = cleanItUp.filter(x => x != targets[i]);
  }

  return cleanItUp;
}

destroyer([1, 2, 3, 1, 2, 3], 2, 3);