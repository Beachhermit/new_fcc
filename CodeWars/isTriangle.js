function isTriangle(a,b,c)
{
  let sorted = [a, b, c].sort(function(e, f) {return e - f});
  return sorted[0] + sorted[1] > sorted[2];
}

console.log(isTriangle(7, 2, 2));