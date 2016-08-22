function userName() {
  var usrN= prompt("Enter your username:");
  checkUsrName(usrN);
}

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

function formatUsername(n) {
  var sn = n.split(" ");

  if (sn.length == 1) {
    return sn[0].charAt(0).toUpperCase() + sn[0].substr(1, sn[0].length).toLowerCase();
  } else {
    var first = sn[0];
    var last = sn[1];
    return first.charAt(0).toUpperCase() + first.substr(1, first.length).toLowerCase() + " " + lastFormat(last);
  }
}

function lastFormat(lN) {
  if (lN[0].toLowerCase() === "m" && lN[1].toLowerCase() === "a" && lN[2].toLowerCase() === "c") {
    return lN.charAt(0).toUpperCase() + lN.substr(1, 2).toLowerCase() + lN.charAt(3).toUpperCase() + lN.substr(4, lN.length).toLowerCase();
  } else if (lN[0].toLowerCase() === "m" && lN[1].toLowerCase() === "c") {
    return lN.charAt(0).toUpperCase() + lN.charAt(1).toLowerCase() + lN.charAt(2).toUpperCase() + lN.substr(3, lN.length).toLowerCase();
  } else if (lN[0].toLowerCase() === "o") {
    return lN.charAt(0).toUpperCase() + lN.charAt(1) + lN.charAt(2).toUpperCase() + lN.substr(3, lN.length).toLowerCase();
  } else {
    var sln = lN.split("-");
    if (sln.length == 1) {
      return sln[0].charAt(0).toUpperCase() + sln[0].substr(1, sln[0].length).toLowerCase();
    } else {
      var slnF = sln[0];
      var slnS = sln[1];
      return slnF.charAt(0).toUpperCase() + slnF.substr(1, slnF.length).toLowerCase() + "-" + slnS.charAt(0).toUpperCase() + slnS.substr(1, slnS.length).toLowerCase();
    }
  }

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

userName();
