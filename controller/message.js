//take the data from the input fields
//Store them in a variable
//push the variable as a JSON object to the server

var Message = require("../model/Message.js");

console.log("controller/message.js reached");
// var makeDate = require("../view/date.js");

module.exports = {
	save: function(data, cb) {
		var newMessage = {
			name: data.name,
			email: data.email,
			messageText: data.messageText
		}

		Message.create(newMessage, function(err, doc) {
			if (err) {
				console.log("Error in contoller/message.js" + err);
			} else {
				console.log("controller/message.js works" + doc);
				cb(doc)
			}
		});

	}
};