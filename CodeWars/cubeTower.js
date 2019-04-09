function findNb(m) {

  function addACube (step) {
    return step*step*step;
  }
   
    if (Math.sqrt(m) % 1 != 0) {return (-1);}
    else {
      let runningCount = 0, step = 0;
      while (runningCount < m) {
        runningCount = runningCount + addACube(step + 1);
        step++;
      }
      if (runningCount == m) {return step}
      else {return -1}
    }
}


console.log(findNb(4183059834009), 2022);
console.log(findNb(24723578342962), -1);
console.log(findNb(135440716410000), 4824);
console.log(findNb(40539911473216), 3568);
