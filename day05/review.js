function getUser() {
  var user = prompt("what is your name?");
  checkUser(user);
}

function checkUser(user) {
  var canParse = parseInt(user);
  if (isNaN(canParse) && user !== null) {

  }
}


getUser();
