function fearNotLetter(str) {

  const alpha = "abcdefghijklmnopqrstuvwxyz";
  const start = alpha.indexOf(str[0]);
  for (let i = 1; i < str.length; i++) {
    if (str[i] != alpha[start+i]) {
      return alpha[start+i];
    }
  }
  return undefined;
}

fearNotLetter("abce");