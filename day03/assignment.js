// Ast user for their name
var name = prompt("Enter your first name");


// Capitalize function
// n = name
function capitalize(n) {
  rturn n.charAt(0).toUpperCase() + n.substr(1, n.length).toLowerCase();
}

console.log(capitalize(name));
