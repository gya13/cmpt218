var admin = {
  username: 'admin',
  password: 1234
}

function addUsers() {
  var username = document.forms["loginForm"]["username"].value;
  if (username != admin.username || password != admin.password) {
    alert("login credentials cannot be verified");
    return false;
  }
}
