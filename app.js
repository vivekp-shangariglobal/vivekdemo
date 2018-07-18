var express = require('express');
var app = express();

app.get('/',function(req,res) {
  res.send("Hello Indiaaaaaaaaa");
});

app.listen(4000);
