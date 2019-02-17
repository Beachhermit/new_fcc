function decompose(n) {
    /*Given a positive integral number n, return a strictly increasing sequence 
    (list/array/string depending on the language) of numbers, so that the sum 
    of the squares is equal to n².*/
    
    let nSquared = n * n;
    
    for (let i = n-1; i > 0; i--) {
      let squares = [];
      squares.push(i * i);
      for (let j = i - 1; j > 0; j--) {
        if ((squares.reduce((a, b) => a + b) + (j * j)) <= nSquared) {
          squares.push(j * j);
          if (squares.reduce((a, b) => a + b) == nSquared) {
            squares = squares.map(a => Math.sqrt(a)).reverse();
            return squares;
          }
        }

      }
      
    }
    
    return null;
}

console.log(decompose(44));