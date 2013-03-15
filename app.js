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

var Sequelize = require("sequelize");
//var sequelize = new Sequelize('database', 'sheta');

var sequelize = new Sequelize('database', 'postgres', 'samcates0', {
  host: "localhost", //your server
  port: 5432 //server port
  dialect: 'postgres'
});


var Post = sequelize.define('Posts', {
	postID: Sequelize.INTEGER,
	postText: Sequelize.TEXT,
	date: Sequelize.TEXT,
}
, {
instanceMethods: {
    getPost: function() {
      return this.postText;
    }
    
  }
}
);


sequelize.sync();

app.listen(3000);
console.log('Listening on port 3000');
