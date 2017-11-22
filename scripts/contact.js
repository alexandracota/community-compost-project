//Connect the routes.js
var messageRoute = require("../config/routes");

$(document).ready(function() {

	//Set intial variable values
	var messageName = "";
	var messageEmail = "";
	var messageText = "";

	//Use jquery to get the values from the form fields
	$(".submit").on("click", function() {
		messageName = $("#name").val().trim();
		messageEmail = $("#inputEmail").val().trim();
		messageText = $("#textArea").val().trim();
	});

	//Post the data to the server via the "/api/message" route

});


