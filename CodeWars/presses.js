function presses(phrase) {
  if (phrase == "") {return 0;}
  const KEYPAD =  [ ['A', 'B', 'C', '2'],
                  ['D', 'E', 'F', '3'],
                  ['G', 'H', 'I', '4'],
                  ['J', 'K', 'L', '5'],
                  ['M', 'N', 'O', '6'],
                  ['P', 'Q', 'R', 'S', '7'],
                  ['T', 'U', 'V', '8'],
                  ['W', 'X', 'Y', 'Z', '9'],
                  [' ', '0'],
                  ['*'],
                  ['#'],
                  ['1']];
                  
  let sum = 0;
  
  for (let i = 0; i < phrase.length; i++) {
      let temp = phrase[i].toUpperCase();
    for (let j = 0; j < KEYPAD.length; j++) {
      if (KEYPAD[j].indexOf(temp) != -1) {
        sum += KEYPAD[j].indexOf(temp) +1;
        break;
      }
    }
  }
  return sum;
  
}



//console.log(presses("LOL"), 9, "should work for simple examples");
console.log(presses("HOW R U"), 13, "should work for phrases with spaces");