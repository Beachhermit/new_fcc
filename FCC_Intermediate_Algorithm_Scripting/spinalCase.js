function spinalCase(str) {
  // "It's such a fine line between stupid, and clever."
  // --David St. Hubbins
  let newStr = "";
  for (let i = 0; i < str.length; i++) {
      if (/[a-z]/.test(str[i])) {
          newStr += str[i];
      }
      else if (/[A-Z]/.test(str[i])) {
          if (i == 0) {
              newStr = str[i].toLowerCase();
          }
          else if (/[a-z]/.test(str[i-1])) {
            newStr = newStr + "-" + str[i].toLowerCase();
          }
          else {
              newStr = newStr + str[i].toLowerCase();
          }
      }
      else {
          if (i == str.length){  
          }
          else {
            newStr = newStr + "-";
          }
      }
  }
  return newStr;
}
console.log(spinalCase("This Is Spinal Tap"));
console.log(spinalCase("The_Andy_Griffith_Show"));
console.log(spinalCase("thisIsSpinalTap"));
console.log(spinalCase("teletubbies say Eh-oh"));
console.log(spinalCase("AllThe-small Things"));