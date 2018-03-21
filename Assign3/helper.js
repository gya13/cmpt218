
var admin = {
  username: 'admin',
  password: '1234'
}

exports.checkLogin = function(username,password,callback) {
  // var username = document.forms["loginForm"]["username"].value;
  console.log('inputed username' + username);
  if (username != admin.username || password != admin.password) {
    console.log("login credentials cannot be verified");
    callback(false);
    return;
  }
  console.log("VERIFIED");
  callback(true);
}
