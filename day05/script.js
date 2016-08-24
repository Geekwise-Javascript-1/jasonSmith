// var fruitColors = [];
// var apple = ["apple", "red"];
// var banana = ["banana", "yellow"];
// var grape = ["grape", "green"];
//
// fruitColors.push(apple);
// fruitColors.push(banana);
// fruitColors.push(grape);
//
// var fruits = ["banana", "apple", "strawberry", "grape"];
// fruits.push("kiwi");
//
// var lastFruit = fruitColors.pop();
// var firstFruit = fruitColors.shift();
//
// /*console.log(firstFruit)
// console.log(fruitColors)*/
// /*console.log(fruitColors[0][1]);
// console.log(fruitColors[1][1]);
// console.log(fruitColors[2][1]);*/
//
// var selectedFruit = fruits.slice(1, 4 + 1);
// console.log(selectedFruit);



/*function main() {
  var items = [];
  function addItem(item) {
    items.push(item);
  }

  function removeItem(remove) {
    items.splice(remove, 1);
  }

  while (true) {
    var item = prompt("Please enter and item:");

    if (item.toLowerCase() === "done" || !item || item == null) {
      for (var i = 0; i < items.length; i++) {
        console.log(items[i]);
      }
      break;
    } else if(item.toLowerCase() === "remove") {
      var remove = parseInt(prompt("Please enter a number:"));
      removeItem(remove);
      continue;
    } else {
      addItem(item);
      continue;
    }
  }
}*/

/*function main() {
  var i = 1;

  do {
    if (i === 5 || i === 7) {
      i++
      continue;
    } else if ( i === 6) {
      break;
    }
    console.log(i);
    i++
  } while (i <= 10)
}

main();*/
