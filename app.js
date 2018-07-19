var express = require('express');
var app = express();

app.get('/',function(req,res) {
  res.send("Hello LALLLLLLLLA WORLD");
});

app.listen(8282);
