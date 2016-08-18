var shoppingList = [];
var itemQuantity = [];

function addItem() {
  shoppingList.push(newItem);
  itemQuantity.push(itemQuant);
  for (var i = 0; i < shoppingList.length; i++) {
    console.log(newItem + " " + itemQuant);
  }
}

function showList() {
  var spacing = " ......... ";
  var text;

  for (var i = 0; i < shoppingList.length; i++) {
    text += shoppingList[i] + spacing + itemQuantity[i] + "\n";
  }
  alert(text);
}

function showHelp() {
  alert("Show - will show you what is currently on your list. \nHelp - will show you the Help alert. \nDone - will end the add items option and show you your list.");
}

function displayList() {
  var count = 0;
  var spacing = " ......... ";
  var text;
  for (var j = 0; j < shoppingList.length; j++) {
    text += shoppingList[j] + spacing + itemQuantity[j] + "\n";
  }
  alert("Here is your lsit:\n" + text);

}


// main program loop
while (true) {
  var newItem = prompt("What would you like to add to your list?").toLowerCase();

  if (newItem == "done") {
    var usrInput = confirm("Are you sure you want to quit?");

    if (usrInput) {
      break;
    } else {
      continue;
    }
  } else if (newItem == "show") {
    showList();
    continue;
  } else if (newItem == "help") {
    showHelp();
    continue;
  } else {
    var itemQuant = parseInt(prompt("How many of " + newItem + " would you like?"));
    addItem();
  }
}

displayList();
