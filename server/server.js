var path = require('path');
var express = require('express');
var favicon = require('serve-favicon');
var bodyParser = require('body-parser');
var compression = require('compression');

const firebaseApp = process.env.FIREBASE_URL;

var app = express();

// Enable gzip
app.use(compression());

// Serve dist
app.use(express.static(path.resolve(__dirname, '../dist')));

// Parse json for mails
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

// Favicon
app.use(favicon(path.join(__dirname, 'fav.ico')));

// View render
app.set('views', path.join(__dirname, './views'));
app.set('view engine', 'ejs');


// Render files
app.get('*', function (req, res) {
  res.render('index', {ENV: JSON.stringify({
    firebaseApp: firebaseApp
  })});
});


// Mail endpoint
app.post('/endpoint', function(req, res) {
  res.send({body: 'Test endpoint'});
});

// Launch app
var server = app.listen((process.env.PORT || 9000), function () {

  var host = server.address().address;
  var port = server.address().port;

  console.log('Example app listening at http://%s:%s', host, port);

});
