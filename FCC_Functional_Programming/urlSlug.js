// the global variable
var globalTitle = "Winter Is Coming";

// Add your code below this line
function urlSlug(title) {
  return title.trim().split(/\s+/).join("-").toLowerCase();
  
}
// Add your code above this line
console.log(urlSlug(" Winter Is   Coming"));
var winterComing = urlSlug(globalTitle); // Should be "winter-is-coming"