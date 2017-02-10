var userStackController = require('./models/userStackController.js');

module.exports = function(app) {

	// server routes ===========================================================
	// handle things like api calls
	// authentication routes
	app.get('/search', userStackController.searchUserStack);
	app.post('/insert', userStackController.insertUserStack);

	// frontend routes =========================================================
	// route to handle all angular requests
	app.get('*', function(req, res) {
		res.sendfile('./public/index.html');
	});

};