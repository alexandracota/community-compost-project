//Require node packages
var express = require("express");
var mongoose = require("mongoose");
var bodyParser = require("body-parser");

//connect on port 3000
var PORT = process.env.PORT || 3000;

//Instantiate express
var app = express();

//Require routes
// var routes = require("./config/routes");

var messageController = require("./controller/message");

//Designate view folder as static directory
app.use(express.static(__dirname + "/view"));

//Include body parser
app.use(bodyParser.urlencoded({
  extended: false
}));

//Define DB
var db = process.env.MONGODB_URI || "mongodb://localhost/ccp-main";

//Connect to DB
mongoose.connect(db, function(error) {
	if (error) {
		console.log(error);
	} else {
		console.log("Mongoose connection successful");
	}
});

//Routes
app.post("/api/message", function(req, res) {
		messageController.save(req.body, function(data) {
			res.json(data);
		});
	});

//Connect on PORT 3000
app.listen(PORT, function() {
  console.log("Listening on port:" + PORT);
});