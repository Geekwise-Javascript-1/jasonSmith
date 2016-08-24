var btn = document.getElementById("btn");
var input1 = document.getElementById("input1")
var input2 = document.getElementById("input2").value;
var div = document.getElementById("output");
var helloJS = "Hello JavaScript!";

function alertUser() {
  input1.value = "";
  input1.value = helloJS;
  alert(helloJS);
}

function inputText() {
  div.innerHTML = "";
  div.innerHTML = div.innerHTML + input2;
}

function btnClick() {
  alertUser();
  console.log(input1);
  console.log(input2);
  inputText();
}

btn.onclick = btnClick;

/*
create js object for input1, input2, btn, div;
after inputting values for input1 and input2;
user clicks go;
input1 value replaced with text "Hellos JavaScript!";
alert new value of input1;
replace div text with value of input2;
*/
