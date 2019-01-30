function noSpace(x){

    return x.split(" ").join("");
    
    //comments in a solution pointed out that spaces at the start would break it.
    //should use trim.
    //another popular solution was x.replace(/\s/g, "")

}

console.log(noSpace("here is a sentence"));