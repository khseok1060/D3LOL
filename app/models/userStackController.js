var Q = require('q');
var userStack = require('./userStack.js');

// Promisify a few mongoose methods with the `q` promise library
var findUserStack = Q.nbind(userStack.find, userStack);

module.exports = {
  searchUserStack: function(req, res, next){
  	console.log('nickName = ', req.query.nickName );

    let query = {
    	nickname: req.query.nickName
    };

  	findUserStack( query )
      .then(function(userStack) {
      	if( userStack.length ) {
      		res.send( userStack );
        } 
        else {
          res.json( [] );
        }
      	
      })
      .fail(function (error) {
      	res.json( error );
      });
	}
};
