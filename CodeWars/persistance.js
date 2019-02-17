function persistence(num) {
   /*Write a function, persistence, that takes in a positive parameter num and 
   returns its multiplicative persistence, which is the number of times you 
   must multiply the digits in num until you reach a single digit.*/
  
   
   function multiplyString(str) {
      //takes a string made up of numbers, divides into digits, multiplies and returns result as string

      if (str.length < 1) {return str}
      let strArray = str.split("");
      
      let product = strArray.reduce((pro, fac) => pro * fac);
      
      return product.toString();
   }


   
  let counter = 0;
  num = num.toString();
  while (num.length > 1) {
     num = multiplyString(num);
     counter++;
  } 
  
  return counter;
}

console.log(persistence(4));