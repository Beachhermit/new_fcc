function steamrollArray(arr) {
    
   function nestTest(array){
       
       for (let i = 0; i < array.length; i++) {
           if (Array.isArray(array[i])){
               return true;
           }
       }
       return false;
       
   }
   
   function pushAll(popArray, resultArray) {
       //push all items on popArray, onto resultArray
       while (popArray.length > 0) {
           resultArray.push(popArray.shift());
       }
   }
   
   function nextLevel(array, result) {
       console.log("nextLevel called with " + array);
       while (array != "") {
           console.log("inside nextLevel while loop: array = " + array + " arr = " + arr + " result = " + result);
           if (!Array.isArray(array[0])) {
               result.push(array[0]);
               delete array[0];
               continue;
           }
       else if (!nestTest(array[0])) {
       
            pushAll(array[0], result);
            continue;
        }
        
        else {
            nextLevel(array[0], result);
        }
       }
       return;
   }
   
   let result = [];
   
    while (arr != "") {
        console.log("main function: arr = " + arr + " result = " + result);

        if (!nestTest(arr)) {
       
            pushAll(arr, result);
            return result;
        }
        else if (!Array.isArray(arr[0])){
            if (arr[0] == undefined) {
                arr.pop();
                continue;
            }
            result.push(arr.shift());
            continue;
        }
        else if (!nestTest(arr[0])){
            pushAll(arr[0], result);
            delete(arr[0]);
            continue;
        }
        else {
            while (arr[0] != "" && arr[0] != undefined) {
                nextLevel(arr[0], result);
                }
        }
        if (arr[0] == "" || arr[0] == undefined) {
            delete arr[0];
        }
       
    return result;
           
       
   }
   
}

console.log(steamrollArray(["a", "b"]));
//console.log(steamrollArray([[["a"]], [["b"]]]));
console.log(steamrollArray([1, [2], [3, [[4]]]]));
//console.log(steamrollArray([1, [], [3, [[4]]]]));
//console.log(steamrollArray([1, {}, [3, [[4]]]]));