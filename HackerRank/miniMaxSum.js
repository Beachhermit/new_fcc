function miniMaxSum(arr) {
/*Given five positive integers, find the minimum and maximum 
values that can be calculated by summing exactly four of the 
five integers. Then print the respective minimum and maximum 
values as a single line of two space-separated long integers.*/

//sort array
let temp = arr.sort((x, y) => x == y ? 0 : x > y ? 1 : -1);

// min = sum of first 4 items
let min = 0;
for (let i = 0; i < arr.length - 1; i++) {
    min += arr[i];
}

//max = sum of last 4 items
let max = 0;
for (let i = 1; i < arr.length; i++) {
    max += arr[i];
}

//load min and max into a string for output
console.log(min + " " + max);
}

miniMaxSum([0, 1, 1, 1, 2]);