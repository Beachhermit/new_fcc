let testArray = [-2, -4, -6]

function positiveSum(arr) {
    if (arr != "") {
      let workingArray = [...arr]; //to quarantine input from mutations
      
      //filter for positives
      workingArray = workingArray.filter((value) => value > 0);
      
      //add what's left (if any) and return
      return workingArray.reduce((total, next) => total + next, 0);
    }
    else {
      return 0;
    }
  
}

console.log(positiveSum(testArray));