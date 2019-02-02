function convertHTML(str) {
  //Convert the characters &, <, >, " (double quote), and ' (apostrophe), 
  //in a string to their corresponding HTML entities.
  
  str = str.replace(/&/g, "&amp;");
  str = str.replace(/</g, "&lt;");
  str = str.replace(/>/g, "&gt;");
  str = str.replace(/"/g, "&quot;");
  str = str.replace(/'/g, "&apos;");
  return str;
}

console.log(convertHTML("Hamburgers < Pizza < Tacos"));