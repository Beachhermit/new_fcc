function sockMerchant(n, ar) {

    function findAndDelete(ar) {
        if (ar.length > 1) {
        for (let i = 1; i < ar.length; i++) {
            if (ar[0] == ar[i]) {
                return true;
            }
        }
        return false;
    }
    else return false;
    }

//take first entry in ar, does it have a match?
//yes, delete both, increment counter; no, delete entry
    let temp = [...ar], count = 0;
    while (temp.length > 0) {
        if (findAndDelete(temp)) {
            temp.splice(temp.lastIndexOf(temp[0]), 1);
            temp.splice(0, 1);
            count++;
        }
        else {
            temp.splice(0, 1);
        }
    }
    return count;
}

console.log(sockMerchant(9, [10, 20, 20, 10, 10, 30, 50, 10, 20]), 3);
console.log(sockMerchant(10, [1, 1, 3, 1, 2, 1, 3, 3, 3, 3]), 4); 