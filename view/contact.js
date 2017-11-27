//Connect the routes.js
// var messageRoute = require("../config/routes");

$(document).ready(function() {

	$(document).on("click", ".submit", sendMessage);

	function sendMessage(event) {
		event.preventDefault();

		var messageData;
		//Use jquery to get the values from the form fields
		var newMessageName = $("#name").val().trim();
		var newMessageEmail = $("#inputEmail").val().trim();
		var newMessageText = $("#textArea").val().trim();

		if (newMessageName) {
			messageData = {
				messageName: newMessageName,
				messageEmail: newMessageEmail,
				messageText: newMessageText
			};
			//Post the data to the server via the "/api/message" route
			$.post("/api/message", messageData).then(function() {
				console.log("message name posted");
			});
		} else {
			console.log("error posting message");
		}

	};

});


