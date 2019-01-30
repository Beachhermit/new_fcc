// Complete the plusMinus function below.
function plusMinus(arr) {
    let plus = 0, minus = 0, zero = 0;
    
    for (let value in arr) {
        arr[value] == 0 ? zero++ : arr[value] > 0 ? plus++ : minus++;
    }
    
    console.log((plus/arr.length).toFixed(6));
    console.log((minus/arr.length));
    console.log((zero/arr.length));

}

plusMinus([-1, -1, 0, 1, 1, -1]);

