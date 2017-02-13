var Q = require('q');
var userStack = require('./userStack.js');

// Promisify a few mongoose methods with the `q` promise library
var findUserStack = Q.nbind(userStack.find, userStack);

module.exports = {
  searchUserStack: function(req, res, next){
  	console.log('nickName = ', req.query.keyword );

    let query = {};

    // query['playerOrTeamName'] = { "$regex": req.query.keyword };
    query['wins'] = 93;
   
  	findUserStack( query )
      .then(function(info) {
        console.log('then::::', info)
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
	},

  insertUserStack: function(req, res, next){

    var nickName = req.body.keyword;
    let newUserStack = {keyword: nickName};

    createWord( newUserStack )
      .then(function(result){
        res.json( result.length );
      })
      .fail(function(err){
        res.json( error );
      });
  }
};
