/*function hello() {
  var msg = "Hello";
  return msg;
}

function world() {
  alert(hello() + " world");
}

world();*/

function userName() {
  var usrN= prompt("Enter your username:");
  checkUsrName(usrN);
}

function craftMsg(uN) {
  var msg = "Welcome ";
  msg += formatUsername(uN);
  msg += " to my site.";
  alertUsr(msg);
}

function alertUsr(m) {
  alert(m);
}

function formatUsername(first) {
  return first.charAt(0).toUpperCase() + first.substr(1, first.length).toLowerCase();
}


// userName();


function checkUsrName(user) {
  var pU = parseInt(user);
  if (!isNaN(user) || user === null || user == "") {
    alert("that's not a proper username.");
    return;
  }


  var tU = user.trim();
  if (!tU) {
    alert("please enter a username");
    return;
  }
  craftMsg(tU);


}

// userName();
