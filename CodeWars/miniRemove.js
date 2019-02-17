function removeSmallest(numbers) {
    
  let smallest;
  if (numbers != "") {
    smallest = Math.min.apply(this, numbers);
  }
  let leftOvers = [], i = 0;
  while (numbers[i] != smallest){
      leftOvers.push(numbers[i]);
      i++;
  }
  for (i += 1; i < numbers.length; i++) {
      leftOvers.push(numbers[i]);
  }
  console.log(numbers);
  return leftOvers;
}

console.log(removeSmallest([3, 2, 5, 1, 2, 4]));