// grab the mongoose module
var mongoose = require('mongoose');

// define our nerd model
// module.exports allows us to pass this to other files when it is called
var userStackSchema = new mongoose.Schema({
	nickName : {type : String, required: true},
	level : {type : String, default: ''},
	victory : {type : String, default: ''},
	defeat : {type : String, default: ''},
	KDA : {type : String, default: ''},
	item : {type : String, default: ''},
	team : {type : String, default: ''},
	enemy : {type : String, default: ''},
	rank : {type : String, default: ''}
});

module.exports = mongoose.model('userStack', userStackSchema);