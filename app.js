var express= require('express');
var app = express();
app.use("/public", express.static(__dirname + '/public'));
app.get('/', function(req, res) {
  res.render('index.jade', {
    locals: {
        title: 'Resilience'
    }
  });
});

mongoose = require('mongoose').Mongoose
db = mongoose.connect('mongodb://localhost/nodepad')

app.listen(3000);
console.log('Listening on port 3000');
