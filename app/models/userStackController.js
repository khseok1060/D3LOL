var Q = require('q');
var UserStack = require('./userStack.js');

// Promisify a few mongoose methods with the `q` promise library
var findUserStack = Q.nbind(UserStack.find, UserStack);

module.exports = {
  searchUserStack: function(req, res, next){
  	console.log('keyword = ', req.query.keyword );

    var query = {};
    query['playerOrTeamName'] = req.query.keyword;

  	findUserStack(query)
      .then(function(info) {
        console.log('info = ', info);
      	if( info.length ) {
      		res.send( info );
        } 
        else {
          res.json( [] );
        }
      	
      })
      .fail(function (error) {
        console.log('error::::', error)
      	res.json( error );
      });
	}
};
