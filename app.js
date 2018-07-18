var express = require('express');
var app = express();

app.get('/',function(req,res) {
  res.send("Hello LALAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA");
});

app.listen(4000);
