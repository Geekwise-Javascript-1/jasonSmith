// Ast user for their name
var name = prompt("Enter your first name");


// Capitalize function
// n = name
function capitalize(n) {
  /*// Convert n into lower case
  n = n.toLowerCase();

  // Remove the first letter from n
  var subN = n.slice(1, n.length);

  // Isolate and capitalize first letter of n
  var firstLetter = n.charAt(0).toUpperCase();

  // Return capitalized firsrt letter to sliced copy of n
  return firstLetter + subN;*/

  rturn n.charAt(0).toUpperCase() + n.substr(1, n.length).toLowerCase();
}

console.log(capitalize(name));
