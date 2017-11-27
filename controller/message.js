//take the data from the input fields
//Store them in a variable
//push the variable as a JSON object to the server

var Message = require("../model/Message.js");
var makeDate = require("../view/date.js");

module.exports = {
	save: function(data, cb) {
		var newMessage = {
			_id: data._id,
			date: makeDate(),
			name: data.name,
			email: data.email,
			messageText: data.messageText
		};

		Message.create(newMessage, function(err, doc) {
			if (err) {
				console.log(err);
			} else {
				console.log(doc);
				cb(doc)
			}
		});

	}
}