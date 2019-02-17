function getTotalX(a, b) {
    
        /*
     * Given 2 sets (arrays) of numbers, find how many numbers (n) fulfil the conditions:
     * 1) All numbers in set 1 evenly divide into n
     * 2) n must divide evenly into all numbers in set2
     */
    
    function factorsOfNum(arr, num) {
        //takes an array (arr) and checks that all in the array are factors of num (criterion 1)

        for (let number in arr) {
            if (num % arr[number] != 0) {
                return false;
            }
        }
        return true;
    }
    
    function factorInArr(arr, num) {
        //takes an array (arr) and checks that num is a factor of every item (criterion 2)
        
        for (let number in arr) {
            if (arr[number] % num != 0) {
                return false;
            }
        }
        return true;
    }
    

     let lastIndexA = a.length - 1, hits = 0; //name last index for readability and hits to count... hits

     //starting with the first number in setB, decreasing each time by multiples of the smallest in set A
     for (let i = a[lastIndexA]; i <= b[0]; i += a[lastIndexA]) {
         //check if i fits both criteria
         if (factorsOfNum(a, i) && factorInArr(b, i)) {     
             hits++;
             console.log("i = ", i);
         }
     }
     return hits;
}

console.log(getTotalX([1], [100]));