function rot13(str) { // LBH QVQ VG!
    //takes a string of upper-case chars, cycles them 13 places backwards
    let decoded = str.split("").map(x => {
                                  let y = x.charCodeAt(0);
                                  if ((y > 64) && (y < 91)) {
                                    y = y - 13;
                                    if (y < 65) { 
                                      y += 26;
                                    }
                                    return String.fromCharCode(y);
                                  }
                                  else return x;
                                });
 
  return decoded.join("");
}

// Change the inputs below to test
console.log(rot13("SERR PBQR PNZC"));