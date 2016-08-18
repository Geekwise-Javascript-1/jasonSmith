// Ast user for their name
var name = prompt("Enter your first name");


// Capitalize function
// n = name
function capitalize(name) {
  rturn name.charAt(0).toUpperCase() + name.substr(1, name.length).toLowerCase();
}

console.log(capitalize(name));
