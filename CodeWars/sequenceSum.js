    const sequenceSum = (begin, end, step) => {
  if (begin > end) {
    return 0;
    }
    
    let sum = begin;
    while(true) {
        begin += step;
        if (begin <= end) {
        sum += begin;
        }
        else break;
    }
    
  //begin - end / step to find how many steps - floor
  /*let steps = Math.floor((end - begin)/step);
  let path = [begin], sum = begin;
  for (let i = 0; i < steps; i++) {
    path.push(sum += step);
  }
  
  return path.reduce((x, y) => x + y, 0);*/
  return sum;
};

console.log(sequenceSum(2, 6, 2), 12);
console.log(sequenceSum(1, 5, 1), 15);
console.log(sequenceSum(1, 5, 3), 5);