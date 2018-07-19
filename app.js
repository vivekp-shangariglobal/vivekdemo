var express = require('express');
var app = express();

app.get('/',function(req,res) {
  res.send("Hello LLAA");
});

app.listen(8282);
