var express = require('express');
var app = express();

app.get('/',function(req,res) {
  res.send("Hello LALLLALALALA WORLD");
});

app.listen(8282);
