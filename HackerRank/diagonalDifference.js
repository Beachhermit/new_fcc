let tester = [[1, 2, 3], [4, 5, 6], [-9, 8, 9]];

// Complete the diagonalDifference function below.
function diagonalDifference(arr) {
    let n = arr.length;
    let d1 = 0;
    let d2 = 0;
    let maxIndex = n-1;
    
    //add together every arr[i][i] <- gives first diagonal (d1)
    //add together every arr[i][maxIndex - i] <- gives second diagonal (d2)
    for (let i = 0; i < n; i++) {
        d1 += arr[i][i];
        d2 += arr[i][maxIndex - i];

    }
    
    return Math.abs(d1 - d2);

}

console.log(diagonalDifference(tester));