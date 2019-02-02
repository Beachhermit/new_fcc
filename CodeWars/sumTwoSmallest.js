function sumTwoSmallestNumbers(numbers) {  
  numbers = numbers.sort((x, y) => x ==y ? 0 : x > y ? 1 : -1)
  
  return numbers[0] + numbers[1];
};

console.log(sumTwoSmallestNumbers([2, 1, 3, 3, 1]))