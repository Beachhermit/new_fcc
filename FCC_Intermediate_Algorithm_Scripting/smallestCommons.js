function smallestCommons(arr) {
    //see also in Needs_Revisiting folder
    
    if (arr[0] > arr[1]) {arr = [arr[1], arr[0]]}
    let product = 1;
    for (let i = arr[0]; i <= arr[1]; i++) {
        product = i*product;
    }
    
    for (let j = 2; j < arr[1]; j++) {
        let testProduct = product/j;
        if (testProduct%1 != 0) {
            continue;}
        let tester = [];
        for (let i = arr[0]; i <= arr[1]; i++) {
            tester.push(testProduct%i === 0);
        }
        if (!/false/.test(tester)){
            product = testProduct;
            j--;
        }
    }
    
    
    return product;
    

}


console.log(smallestCommons([1,13]));