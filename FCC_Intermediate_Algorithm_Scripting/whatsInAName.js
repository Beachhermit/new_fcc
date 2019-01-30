function whatIsInAName(collection, source) {
  // What's in a name?
  var arr = [];
  let temp = 0;   //counter

  let searchProp = Object.keys(source);   //creates an array of property names from the source
  for (let obj in collection) {         //for each object in the collection
    for (let i = 0; i < searchProp.length; i++) {   
      //check if that object has property[i] from source, and if the value of that property is the same as source
      if (collection[obj].hasOwnProperty(searchProp[i]) && collection[obj][searchProp[i]] == source[searchProp[i]]) {
        temp++;   //finding a propery-value match adds one to the counter
      }
      if (temp == searchProp.length) {    //if the counter shows as many matches as properties in the source
        arr.push(collection[obj]);      //push that object to the final collection
      }
      
    }
    temp = 0;   //reset the counter to prepare for the next object in the collection
  }
  
  // Only change code above this line
  return arr;
}

console.log(whatIsInAName([{ first: "Romeo", last: "Montague" }, { first: "Mercutio", last: null }, { first: "Tybalt", last: "Capulet" }, { first: "Juliet", last: "Capulet" }], { last: "Capulet" }));
console.log(whatIsInAName([{ "apple": 1, "bat": 2 }, { "bat": 2 }, { "apple": 1, "bat": 2, "cookie": 2 }], { "apple": 1, "bat": 2 }));
console.log(whatIsInAName([{"a": 1, "b": 2, "c": 3}], {"a": 1, "b": 9999, "c": 3}));