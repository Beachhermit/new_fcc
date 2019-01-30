function staircase(n) {
    //outputs a right-aligned staircase of n steps
    let i, j, k;
    let oneLine = "";
    for (i = 0; i < n; i++) {
        for (j = n - i-1; j > 0; j--) {
            oneLine += " ";
        }
        for (k = 0; k <= i; k++) {
            oneLine += "#";
        }
        console.log(oneLine);
        oneLine = "";
    }

}

staircase(33);