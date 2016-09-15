// Global Variables
var ul = document.getElementById('list');
var btn = document.getElementById('btn');
var i = 1;
var s;

var taskArr = [];

window.onload = display;
function display() {
  
  
  
  // Check for items in localStorage
  if (localStorage.length === 0 ) {
    // Do nothing if nothing in localStorage
    return;
  } else {
    // Update i to last number added plus 1
    // I don't know why this works, but it does.
    // i = parseInt(sessionStorage.getItem(sessionStorage.key(0))) + 1;
    var json = JSON.parse(localStorage.items);
    // Loop through localStorage and display items
    for (var c = 0; c<JSON.length + 1; c++) {
      var lsItem = taskArr[c];
      build(lsItem);
    
    
    
    }
  }
  
}

function remove(obj){
  var parent = obj.parentElement;
  var index = taskArr.indexOf(obj);
  parent.parentElement.removeChild(parent);
  // taskArr.splice(index, 1);
  console.log(taskArr);
}

function addItem(e){
  e.preventDefault();  
  var item = document.getElementById('item').value;

  // localStorage.setItem('Task ' + i, item);
  taskArr.push(item);
  localStorage.setItem('items', JSON.stringify(taskArr));
  build(item);
  
  s = i;
  // sessionStorage.setItem('task num', s);
  i++;
}

function build(newItem){

  var li = document.createElement('li');
  var remove = document.createElement('span');
  var removeBtn = document.createElement('button');
  
  // Add attributes to list item
  li.className = "item";
  
  // Add attributes to span - remove
  remove.className = "fa fa-times remove";
  remove.setAttribute('onclick', 'remove(this);');
  
  // Insert item into list item
  li.innerHTML = newItem;
  li.appendChild(remove);

  ul.appendChild(li);
  console.log(newItem);
}

/*
function test(e) {
  e.preventDefault();
  console.log(i);
  i++;
}
*/

btn.onclick = addItem;
// btn.addEventListener('click', addItem);







