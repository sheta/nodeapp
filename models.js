var mysql = require('mysql');
var client = mysql.createConnection({
	host: 'localhost',
	port: 3000
});

client.query(
	'SELECT "Hello, world!"',
	function (err, results, fields) {
	console.log(results);
	console.log(fields);
	client.end();
	}
);