function sumFibs(num) {
    //Given a positive integer num, return the sum of all odd 
    //Fibonacci numbers that are less than or equal to num.
    
    //make array of Fibonnacci numbers
    let fibonnacci = [1, 1];
    let current = 0;
    
    /*Not entirely happy with the bit below. It works, but I have
    the same test in there twice, once to stop the loop and a second
    time to avoid a final invalid value. I thought of putting a break 
    (or however you break out of a loop) inside the if block, but I still
    need the i's for counting and finding the previous two numbers*/
    for (let i = 2; current < num; i++) {
        current = fibonnacci[i-1] + fibonnacci[i-2];
        if (current <= num) {
            fibonnacci.push(current);
        }
    }

    //pick out odd numbers
    let oddFibs = fibonnacci.filter(x => x%2 != 0);
    
    //sum
    return oddFibs.reduce((x, y) => x + y);
}

console.log(sumFibs(10));