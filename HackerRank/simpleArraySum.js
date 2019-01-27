function simpleArraySum(ar) {
    
  return ar.reduce((total, next) => total + next);  
/*    let total = 0;

    for (let item in ar) {
        total += ar.pop();
        console.log(total + " left in ar: " + ar);
        
    }
    return total;
    */

}

console.log(simpleArraySum([1, 2, 3, 4, 10, 11]));