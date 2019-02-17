function myReplace(str, before, after) {
    
    /*Perform a search and replace on the sentence using the arguments provided 
    and return the new sentence.
    First argument is the sentence to perform the search and replace on.
    Second argument is the word that you will be replacing (before).
    Third argument is what you will be replacing the second argument with (after).
    Note
    Preserve the case of the first character in the original word when you are 
    replacing it. For example if you mean to replace the word "Book" with the word 
    "dog", it should be replaced as "Dog"*/
    
    let startIndex = str.indexOf(before);
    
    if (/[A-Z]/.test(str[startIndex])) {
        after = after[0].toUpperCase() + after.substring(1);
        console.log("after: " + after);
    }

    return str.replace(before, after);
    
    
}

console.log(myReplace("A quick brown fox jumped over the lazy dog", "jumped", "leaped"));