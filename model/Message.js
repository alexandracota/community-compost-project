//Message Model
//====================================

//Require mongoose
var mongoose = require("mongoose");

//Create schema object using the mongoose schema method
var Schema = mongoose.Schema;

//Create a messageSchema with the schema object
var messageSchema = new Schema({
	_id: {
		type: Schema.Types.ObjectId
	},
	date: String,
	messageText: String
});

//Create Message model using the messageSchema
var Message = mongoose.model("Message", messageSchema);

//Export the Message model
module.exports = Message;