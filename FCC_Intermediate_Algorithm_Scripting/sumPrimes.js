function sumPrimes(num) {
    //Sum all the prime numbers up to and including the provided number.

    function isPrime(x) {
    //find if a number is prime
        if (x <= 1) {return false}  //special cases
        if (x == 2) {return true}
        if (x % 2 == 0) {return false} //cuts loop in half
        
        for (let i = 3; i*i <= x; i+=2) {
            if (x%i == 0) {return false}
        }
        return true;
    }
    
    let sum = 2;
    for (let i = 3; i <= num; i++) {
        if (isPrime(i)) {
            sum+=i;
        }
    }
    
  return sum;
}

console.log(sumPrimes(5));