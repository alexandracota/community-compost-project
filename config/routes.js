var messageController = require("../controller/message");

module.exports = function(router) {
	router.post("/api/message", function(req, res) {
		messageController.save(req.body, function(data) {
			res.json(data);
		});
	});
};