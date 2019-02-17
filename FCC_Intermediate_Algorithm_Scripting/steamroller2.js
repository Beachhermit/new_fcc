function steamrollArray(arr) {

    function flatten(array, result) {
        for (let i = 0; i < arr.length; i++) {

            if (Array.isArray(array[i])) {
                flatten(array[i], result);
            }
            else {
                result.push(array[i]);
            }
        }
        return result;
    }
    let result = [];
    
    flatten(arr, result);
    result = result.filter(x => x != undefined);
    
  return result;
}

console.log(steamrollArray(["a", "b"]));
//console.log(steamrollArray([[["a"]], [["b"]]]));
console.log(steamrollArray([1, [2], [3, [[4]]]]));
//console.log(steamrollArray([1, [], [3, [[4]]]]));
console.log(steamrollArray([1, {}, [3, [[4]]]]));