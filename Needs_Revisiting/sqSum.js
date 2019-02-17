function decompose(n) {
    /*I wasn't expecting to be able to do this. I get valid sequences and it's accepted by the tester
    but the description stipulates the sequence with largest numbers, which this doesn't give because
    if it hits a dead-end, it can't backtrack and try another path. eg Decompose 44 starts with 43
    then tries 9, but it can't finish with 9, so it discards 44 and tries 43. I need to work out how 
    to get it to discard the 9, or whichever is the last number it put in when it failed. 
    
    Given a positive integral number n, return a strictly increasing sequence 
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