var express = require('express');
var app = express();

app.get('/',function(req,res) {
  res.send("Hello LAAAALA WORLD");
});

app.listen(8282);
