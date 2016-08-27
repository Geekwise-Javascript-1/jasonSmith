var submitBtn = document.getElementById('submit');
var form = document.getElementsByTagName('form')[0];
// var submit = document.getElementById('submit');
var btn = document.getElementById('btn');

submitBtn.onclick = getVals;

function getVals(e){
    e.preventDefault();
    var valArr = [];
    for(var i = 0; i < form.elements.length; i++){
        valArr.push(form.elements[i].value);
    }
    valArr.pop();
    console.log(valArr);
}

function addInput(e) {
  e.preventDefault();
  var inputEl = document.createElement('input');
  inputEl.id = 'newId';
  inputEl.name = 'new';
  inputEl.type = 'email';
  inputEl.placeholder = 'example@email.com';
  form.insertBefore(inputEl, submit);
  // console.log(inputEl);
}


submit.onclick = addInput;
