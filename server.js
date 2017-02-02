var express = require('express');
var path = require('path');

var app = express();

app.get('/', function(req, res) {
  res.sendFile(path.join(__dirname + 
    '/client/build/index.html'));
});

app.use(express.static('client/build'));

var server = app.listen(3000, function() {
  var host = server.address().address;
  var port = server.address().port;
  console.log('App listening at http://' + host + ':' + port);
});

