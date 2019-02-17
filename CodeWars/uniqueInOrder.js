var uniqueInOrder=function(iterable){
  
  if (iterable == "") {return [];} //handles empty arrays
  let result = [iterable[0]];
  for (let i = 1; i < iterable.length; i++) {  //test each element in iterable after the first
      if (iterable[i] != iterable[i-1]) {      //if it's not the same as previous element, 
        result.push(iterable[i]);              //push onto result
      }
    
  }
  return result;
}

console.log(uniqueInOrder([]));