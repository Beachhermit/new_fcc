function SeriesSum(n)
{
  //returns the sum of following series upto nth term(parameter) to 2 decimal places
  //Series: 1 + 1/4 + 1/7 + 1/10 + 1/13 + 1/16 +...
  
  if (n == 0) {return "0.00"}
  
  let sum = 1, denom = 1;
  
  for (let i = 1; i < n; i++) {
      sum = sum + 1/(denom + (3 * i));
  }
  
  return sum.toFixed(2);
  
}

console.log(SeriesSum(2));
