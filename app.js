var express = require('express');
var app = express();

app.get('/',function(req,res) {
  res.send("Hello LALLLALALAA WORLD");
});

app.listen(8282);
