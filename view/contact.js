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
				name: newMessageName,
				email: newMessageEmail,
				messageText: newMessageText
			}
			//Post the data to the server via the "/api/message" route
			$.post("/api/message", messageData).then(function() {
				alert("Thank you for your message!");
				$("#name").val('');
				$("#inputEmail").val('');
				$("#textArea").val('');
			});
		} else {
			console.log("error posting message");
		}

	};

});


