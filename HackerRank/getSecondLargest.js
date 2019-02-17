function getSecondLargest(nums) {
    // Complete the function
    let arr = [...nums];
    arr = arr.sort((x, y) => x == y ? 0 : x > y ? -1 : 1);
    let compare;
    while (arr != "") {
        compare = arr.shift();
        if (compare > arr[0]) {
            return arr[0];
        }
    }
}

console.log(getSecondLargest([1, 2]));

console.log(getSecondLargest([5, 2, 1, 4, 3]));