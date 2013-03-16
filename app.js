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



//or native libpq bindings
//var pg = require('pg').native

var pg = require('pg'); 
//or native libpq bindings
//var pg = require('pg').native

var conString = "tcp://postgres:1234@localhost/postgres";

//note: error handling omitted
/*var client = new pg.Client(conString);
client.connect(function(err) {
  client.query('SELECT NOW() AS "theTime"', function(err, result) {
      console.log(result.rows[0].theTime);
      //output: Tue Jan 15 2013 19:12:47 GMT-600 (CST)
  })
});

client.query("CREATE TEMP TABLE beatles(name varchar(10), height integer, birthday timestamptz)");
client.query("INSERT INTO beatles(name, height, birthday) values($1, $2, $3)", ['John', 68, new Date(1944, 10, 13)]);
var query = client.query("SELECT * FROM beatles WHERE name = $1", ['John']);

//can stream row results back 1 at a time
query.on('row', function(row) {
  console.log(row);
  console.log("Beatle name: %s", row.name); //Beatle name: John
  console.log("Beatle birth year: %d", row.birthday.getYear()); //dates are returned as javascript dates
  console.log("Beatle height: %d' %d\"", Math.floor(row.height/12), row.height%12); //integers are returned as javascript ints
});

//fired after last row is emitted
query.on('end', function() { 
  client.end();
}); */
var Sequelize = require("sequelize");
//var sequelize = new Sequelize('database', 'sheta');

var sequelize = new Sequelize('database', 'postgres', 'samcates0', {
  host: "localhost", 
  port: 5432,
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

Post.create({ postID: 2, postText: 'I did well on my exam!', date:'March 11', id: 1}).success(function(task) {
  // you can now access the newly created task via the variable task
})

// since v1.3.0: only select some attributes and rename one
Post.findAll().success(function(post) {
  // project will be the first entry of the Projects table with the title 'aProject' || null
  // project.title will contain the name of the project
  console.log(post);
})

app.listen(3000);
console.log('Listening on port 3000');
