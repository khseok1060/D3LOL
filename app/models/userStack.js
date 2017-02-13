// grab the mongoose module
//var mongoose = require('mongoose');
var mongoose = require('../../config/db');

// define our nerd model
// module.exports allows us to pass this to other files when it is called
var UserStackSchema = new mongoose.Schema({
  leaguePoints : {type : Number, default: ''},
  isFreshBlood : {type : Boolean, default : ''},
  isHotStreak : {type : Boolean, default: ''},
  division : {type : String, default: ''},
  isInactive : {type : Boolean, default: ''},
  isVeteran : {type : Boolean, default : ''},
  losses : {type : Number, default: ''},
  playerOrTeamName : {type : String, required : true},
  playerOrTeamId : {type : String, default : ''},
  wins : {type : Number, default : ''}
}, {collection: 'UserStacks'});

module.exports = mongoose.model('UserStack', UserStackSchema);

