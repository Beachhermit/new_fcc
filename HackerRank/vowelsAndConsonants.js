function vowelsAndConsonants(s) {
 /*First, print each vowel in  on a new line. The English vowels are a, e, i, o, and u, 
 and each vowel must be printed in the same order as it appeared in.
 Second, print each consonant (i.e., non-vowel) in  on a new line in the same order as it appeared in */   
 
 while (/[aeiou]/.test(s)) {
     console.log(s.match(/[aeiou]/)[0]);
     s = s.replace(/[aeiou]/, "");
 }
 while (s.length > 0) {
          console.log(s.match(/[\w\W]/)[0]);
     s = s.replace(/[\w\W]/, "");
 }
 
}

vowelsAndConsonants("Hello");