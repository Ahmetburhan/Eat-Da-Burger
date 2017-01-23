// Burger App - Week 14 HW Assignment
// Author: Ali Zaidi
// Date: 2017.01.21 - 2017.01.28

//Dependencies
var express = require('express');
var methodOverride = require('method-override');
var bodyParser = require('body-parser');

// Create an instance of the express app.
var app = express();

// set port to 3000 or whatever heroku (deployment site) sets it to
var PORT = process.env.PORT || 3000;

// express middleware needed for serving static files. For more details
// see here: http://expressjs.com/en/starter/static-files.html
app.use(express.static(__dirname + '/app/public'));

/// bodyparsers 
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(bodyParser.json({ type: 'application/*+json' }));
app.use(bodyParser.raw({ type: 'application/vnd.custom-type' }));
app.use(bodyParser.text({ type: 'text/html' }));

// Set Handlebars as the default templating engine.
app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

// Set up database connection
var connection = mysql.createConnection({
	host: "localhost",
	port: 3306,
	user: "root",
	password: "root",
	database: "burgers_db" 
});

// not strictly required, but best practice to establish connection
// it's possible query establishes the connection
connection.connect();

// more to come





// Initiate the listener.
app.listen(PORT, function() {
  console.log("App listening on PORT " + PORT);
});