function palindrome(str) {
    //checks if a string is a palindrome

  function prepare(str) {
      //removes any non-alphanumeric characters and converts to lower case
    return str.replace(/[_\W]+/g, "").toLowerCase();
  }
  
  function reverseString(str) {
      //reverses th string, duh
      return str.split("").reverse().join("");
  }
  
  function compareReverse(str1, str2) {
      //compare two strings to see if one is the reverse of the other
    if (str1 == reverseString(str2)){
      return true;
    }
    else {
      return false;
    } 
  }

  function even(str) {
      //splits a string of even length into two and compares them
    let firstHalf = str.substr(0, str.length/2);
    let secondHalf = str.substr(str.length/2, str.length/2);
    return compareReverse(firstHalf, secondHalf);
  }

  function odd(str) {
      //splits a string of odd length into two, excluding centre char, and compares them
    let firstHalf = str.substring(0, Math.ceil((str.length/2) -1));
    let secondHalf = str.substring(Math.ceil(str.length/2), str.length);
    return compareReverse(firstHalf, secondHalf);
  }
  
  let prepared = prepare(str);
  if (prepared.length % 2 == 0) {
      return even(prepared);
  }
  else {
      return odd(prepared);
  }

}



console.log(palindrome("_eye"));