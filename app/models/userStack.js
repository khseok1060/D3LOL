// grab the mongoose module
var mongoose = require('mongoose');

// define our nerd model
// module.exports allows us to pass this to other files when it is called
var userStackSchema = new mongoose.Schema({
	playerOrTeamName : {type : String, required: true},
	leaguePoints : {type : Number, default: ''},
	wins : {type : Number, default: ''},
	losses : {type : Number, default: ''},
	division : {type : String, default: ''}
});

module.exports = mongoose.model('userStack', userStackSchema);