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
var sequelize = new Sequelize('database', 'sheta');

var User = sequelize.define('User', {
	userID: Sequelize.INTEGER,
	password: Sequelize.TEXT
});

var Post = sequelize.define('Post', {
	userID: Sequelize.INTEGER,
	postText: Sequelize.TEXT,
	date: Sequelize.DATE,
	postID: Sequelize.INTEGER
});

var Comment = sequelize.define('Comment', {
	postID: Sequelize.INTEGER,
	commentText: Sequelize.TEXT,
	date: Sequelize.DATE,
	commentID: Sequelize.INTEGER
});

var Tag = sequelize.define('Tag', {
	tagID: Sequelize.INTEGER,
	tagText: Sequelize.TEXT,
	postID: Sequelize.INTEGER
});

sequelize.sync();
app.listen(3000);
console.log('Listening on port 3000');
