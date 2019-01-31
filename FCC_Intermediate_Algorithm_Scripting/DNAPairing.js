function pairElement(str) {
    
    const solution = [];
    
    for (let i = 0; i < str.length; i++) {
        switch (str[i]) {
            case "C":
                solution.push(["C", "G"]);
                break;
            case "G":
                solution.push(["G", "C"]);
                break;
            case "A":
                solution.push(["A", "T"]);
                break;    
            case "T":
                solution.push(["T", "A"]);
                break;        
        }
    }
    
  return solution;
}

console.log(pairElement("GCG"));  //[["G", "C"], ["C", "G"], ["G", "C"]]