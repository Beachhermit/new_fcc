function orbitalPeriod(arr) {
  var GM = 398600.4418;
  var earthRadius = 6367.4447;
  //for each object, make a new object with properties for 
  //name and orbitalPeriod
  let orbitalArray = [];
  for (let body in arr) {
    let orbitalPeriod = Math.round(2 * Math.PI * (Math.sqrt(Math.pow(arr[body]["avgAlt"] + earthRadius, 3)/GM)));
    orbitalArray.push({"name" : arr[body]["name"], "orbitalPeriod": orbitalPeriod});

  }
  return orbitalArray;
  
}

console.log(orbitalPeriod([{name : "sputnik", avgAlt : 35873.5553}]));