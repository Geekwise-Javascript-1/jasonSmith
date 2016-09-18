// Global Variables
var ul = document.getElementById('list');
var btn = document.getElementById('btn');
var form = document.getElementsByTagName('form');
var i = 1;
var s;
var itemIdNum = 0;

var taskArr = [];



window.onload = display;
function display() {
  // Check for items in localStorage
  if (localStorage.length === 0 ) {
    // Do nothing if nothing in localStorage
    return;
  } else {
    // I don't know why this works, but it does.
    // i = parseInt(sessionStorage.getItem(sessionStorage.key(0))) + 1;
    var retrievedItems = localStorage.getItem('items');
    var data = JSON.parse(retrievedItems);
    // alert(data.length);
    // Loop through localStorage and display items
    for (var c = 0; c < data.length; c++) {
      var lsItem = data[c];
      rebuildArr(lsItem);
      build(lsItem);
    }    
  }  
}

function updateStorage() {  
  localStorage.setItem("items", JSON.stringify(taskArr));
}

function updateTask(obj) {
  var id = obj.getAttribute('id');
  var taskV = taskArr[id];
  var update = prompt("Update your task:", taskV);
  
  var location = window.location;
  
  var p = document.getElementsByTagName('p'[id]);
  
  taskArr.splice(id, 1, update);
  // li.innerText = update;
  location.reload();
  updateStorage();
  console.log(update);  
}

function rebuildArr(item) {
  taskArr.push(item);
}

// REMOVE ITEM
function remove(obj){
  /*
    Remove item from list
    Remove item from array
    update the localStorage 
  */
  var parent = obj.parentElement;
  var id = obj.getAttribute('id');
  taskArr.splice(id, 1);
  updateStorage();
  parent.parentElement.removeChild(parent);
  console.log(taskArr);
}

function addItem(e){
  e.preventDefault();  
  var item = document.getElementById('item').value;

  taskArr.push(item);
  localStorage.setItem('items', JSON.stringify(taskArr));
  build(item);
}

function build(newItem){
  var li = document.createElement('li');
  var remove = document.createElement('span');
  var removeBtn = document.createElement('button');
  var p = document.createElement('p');
  
  // Add attributes to list item
  li.className = "item";
  
  // Add attributes to span - remove
  remove.id = itemIdNum;
  remove.className = "fa fa-times remove";
  remove.setAttribute('onclick', 'remove(this);');
  
  // Add attributes to p  
  p.id = itemIdNum;
  p.setAttribute('onclick', 'updateTask(this);');
  
  // Insert item into list item
  p.innerHTML = newItem;
  li.appendChild(p);
  li.appendChild(remove);
  
  

  ul.appendChild(li);
  console.log(newItem);
  itemIdNum++
}

btn.onclick = addItem;