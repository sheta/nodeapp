

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

var sequelize = new Sequelize('database', 'sheta', 'mysqlroot', {
    host: 'localhost',
    port: 3000,
    timestamps: false
});

var User = sequelize.define('User', {
	userID: Sequelize.INTEGER,
	userName: Sequelize.TEXT,
	password: Sequelize.TEXT
}
, {
instanceMethods: {
    getUserId: function() {
      return this.userID;
    }
  }
}
);

var Post = sequelize.define('Post', {
	userID: Sequelize.INTEGER,
	postText: Sequelize.TEXT,
	date: Sequelize.DATE,
	postID: Sequelize.INTEGER
}
, {
instanceMethods: {
    getPost: function() {
      return this.postText;
    }
    
  }
}
);

var Comment = sequelize.define('Comment', {
	postID: Sequelize.INTEGER,
	commentText: Sequelize.TEXT,
	date: Sequelize.DATE,
	commentID: Sequelize.INTEGER } 
, {
instanceMethods: {
    getComment: function() {
      return this.commentText;
    }
   
  }
}

);

var Tag = sequelize.define('Tag', {
	tagID: Sequelize.INTEGER,
	tagText: Sequelize.TEXT,
	postID: Sequelize.INTEGER
}
, {
instanceMethods: {
    getTag: function() {
      return this.tagText;
    }
  }
}
);

//Associations
Post.belongsTo(User);
Post.hasOne(User);
User.hasMany(Post);
Post.hasMany(Comment);
Comment.belongsTo(User);
Comment.hasOne(User);
User.hasMany(Comment);
Post.hasMany(Tag);
Tag.hasMany(Post);


sequelize.sync();

User.create({ userID: 1, userName: 'ravi', password: 'chinnu'}).success(function(task) {
  console.log("inserted");
  // you can now access the newly created task via the variable task
});
// search for attributes
var ravi = User.findAll({ where: {userName: 'ravi'} }).success(function(project) {
  console.log("hi");
  // project will be the first entry of the Projects table with the title 'aProject' || null
});
app.listen(3000);
console.log('Listening on port 3000');
