// Set up database connection
var connection = mysql.createConnection({
	host: "localhost",
	port: 3306,
	user: "root",
	password: "",
	database: "burgers_db" 
});

// not strictly required, but best practice to establish connection
// it's possible query establishes the connection
connection.connect();

module.exports = connection;