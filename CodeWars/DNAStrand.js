function DNAStrand(dna){
  
  let compArray = [];
  for (let i = 0; i < dna.length; i++) {
    switch(dna[i]) {
      case "A":
        compArray.push("T");
        break;
      case "T":
        compArray.push("A");
        break;
      case "C":
        compArray.push("G");
        break;
      case "G":
        compArray.push("C");
        break;
    }
  }
  return compArray.join("");
}

console.log(DNAStrand("ATTGC"));