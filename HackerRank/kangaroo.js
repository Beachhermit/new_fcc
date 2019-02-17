function kangaroo(x1, v1, x2, v2) {

    if (((x1 < x2) && (v1 < v2)) || ((x2 < x1 ) && (v2 < v1 ))) {
        return "NO";
    }
    
    let smaller, larger;
    if (x1 <= x2) {
        smaller = [x1, v1];
        larger = [x2, v2];
    }
    else {
        smaller = [x2, v2];
        larger = [x1, v1];
     }

    do {
        if (smaller[0] == larger[0]) {
            return "YES";
        }
        else { 
            smaller = [smaller[0] + smaller[1], smaller[1]];
            larger = [larger[0] + larger[1], larger[1]];
        }

    } while (smaller[0] <= larger[0]);

}

console.log(kangaroo(0, 3, 4, 2))