//Message Model
//====================================

//Require mongoose
var mongoose = require("mongoose");

//Create schema object using the mongoose schema method
var Schema = mongoose.Schema;

//Create a messageSchema with the schema object
var messageSchema = new Schema({
	name: {
		type: String
		// trim: true,
		// required: "Please enter your full name"
	},
	email: {
		type: String
		// trim: true,
  //   	match: [/.+\@.+\..+/, "Please enter a valid e-mail address"]
	},
	messageText: {
		type: String
		// trim: true,
		// required: "Please enter a message"
	}
});

//Create Message model using the messageSchema
var Message = mongoose.model("Message", messageSchema);

//Export the Message model
module.exports = Message;