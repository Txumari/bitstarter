var express = require('express');
var fs = requiere('fs');


var app = express.createServer(express.logger());

app.get('/', function(request, response) {
//  var data = fs.readFileSync('index.html',"utf8");

// response.send(buffer.toString());
   response.send('hola');


});

var port = process.env.PORT || 5000;
app.listen(port, function() {
  console.log("Listening on " + port);
});
