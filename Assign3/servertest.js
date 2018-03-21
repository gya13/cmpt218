var express = require('express');
var app = express();
//var serverIndex = require('serve-index');
var http = require('http');

var url = require('url');
// var MongoClient = require('mongodb').MongoClient;
//
// var url = 'mongodb://gya13:afsdfdas@127.0.0.1:27017/cmpt218_gya13?authSource=admin';
//
// MongoClient.connect(url, function(err, client) {
//   if (err) {throw err;}
//   else {
//     console.log("Connected successfully to server");
//   }
// });

var port = 8080;

var options = {
  // etag: false,
  // index: 'login.html'
  root: './pub_html/'
}

var adminOptions = {
  etag: false,
  index: 'admintest.html'
}

var helper = require('./helper.js');
// app.use('/', function(req, res, next) {
//   console.log(req.methhod, 'request', req.url);
//   next();
//
// });

//app.use('/', express.static('public', options));

// serve login.html
//app.use('/', express.static('./pub_html', options));


// app.use('/', function(req,res,next){
//   console.log(req.method, 'request:', req.url, JSON.stringify(req.body));
//   console.log('');
//   next();
// });

app.get('/', function(req,res) {
  res.sendFile('login.html', options);
});

app.post('/login', function(req,res) {
  console.log(req.body.username);
  // helper.checkLogin(req.body.username,req.body.password,function(validated){
  //   if(validated) {
      res.redirect('/login');
      // function(helper.generateAdminPage(function(err,content) {
      //   if(err) {
      //     console.log(err);
      //   }

      // }

    // }
  // });
});


app.get('/login', function(req,res) {
//  helper.generateAdminPage();
  console.log(req.Url.search);
  helper.checkLogin(req.query.username,req.query.password,function(validated) {
    if(validated) {

      res.redirect('/admin/'+req.query.username+'/'+req.query.password; // CHANGE TO DYNAMIC LATER
    }
  });
//    console.log("hi :)");

});

app.get('/admin/admin/password', function(req,res){
  helper.checkLogin(req.params.username,req.params.password,function(validated) {
    if(validated) {

      res.redirect('/admin/'+req.query.username+'/'+req.query.password; // CHANGE TO DYNAMIC LATER
    }
  });
});


http.createServer(app).listen(port);
console.log('running on port ',port);
