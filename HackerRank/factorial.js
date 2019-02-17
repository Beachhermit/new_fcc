function factorial(num) {
    let product = num;
    if (num == 1) {
        return 1;
    }
    else {
        return product * factorial(num - 1);
    }
}

console.log(factorial(4));