function nbDig(n, d) {

    let squares = [];
    for (let i = 0; i <= n; i++) {
      squares.push(i * i);
    }
    
    let digit = new RegExp(d, 'g');
    return squares.toString().match(digit).length;
}

console.log(nbDig(10, 1));