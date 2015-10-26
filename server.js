/////////////////////////////////
// BEGIN VARIABLE DECLARATIONS //

	var express  			= require('express');
	var app      			= express();
	var http 					= require('http').Server(app);
	var port    			= process.env.PORT || 32768;
	//var mongoose 			= require('mongoose');
	var passport 			= require('passport');
	var flash    			= require('connect-flash');
	var io 						= require('socket.io')(http);
	var sqlite3 			= require('sqlite3');


	var morgan       	= require('morgan');
	var cookieParser 	= require('cookie-parser');
	var bodyParser   	= require('body-parser');
	var session      	= require('express-session');


	var djCount			 	= 0;
	var port 				 	= 32768;
	var sockets 		 	= [];
	var date 					= new Date();
	var database = new sqlite3.Database(databaseName);

// END VARIABLE DECLARATIONS //
///////////////////////////////

////////////////////////////////
// EXPRESS APPLICATION SET-UP //

	// Log every request to server console
	app.use(morgan('dev'));

	// Read cookies for authentication methods
	app.use(cookieParser());

	// Get information from html forms
	app.use(bodyParser());

//END EXPRESS APPLICATION SET-UP//
/////////////////////////////////

app.set('view engine', 'ejs'); // set up ejs for templating

/*
** Query(...) takes a database and a string as
**   parameters and queries the given database.
*/

function Query(Database, Command) {
	Database.serialize(function() {
		Database.run(Command);
	});
};

/*
** app.get(...) is the function that responds to
**   http requests with a specified file, acting
**   as a webserver.
*/


app.get('/', function(req, res) {
	res.render(__dirname + '/views/index.ejs');
});

app.get('/index.ejs', function(req, res) {
	res.render(__dirname + '/views/index.ejs');
});

app.get('/login.ejs', function(req, res) {
	res.render(__dirname + '/views/login.ejs');
});

app.get('/logout.ejs', function(req, res) {
	res.render(__dirname + '/views/logout.ejs');
});

app.get('/logoutSuccess', function(req, res){
	res.render(__dirname + 'views/logoutSuccess.ejs');
});
/*
** io.on(...) is the primary function / driver of
**   the application. This function checks for attempted
**   connections and will create, listen to and destroy
**   sockets as people connect and disconnect.
*/

io.on('connection', function(socket) {
	console.log('Connection!');

	socket.username = "temp";
	socket.password = "";
	socket.age = date.getTime();
	sockets.push(socket);

	djCount += 1;


	socket.on('login', function(data) {
		var data = data.stringify();
		console.log(data);
	});

	socket.on('chat', function(data) {
		//broadcast to all OTHER sockets
		socket.broadcast.emit('chat', this.username + " said: " + data);
	});

	socket.on('disconnect', function() {
		for (var i = 0; i < sockets.length; i++) {
			if (sockets[i].socket === this) {
				sockets.splice(i, 1);
				i = sockets.size();
			}
		}
		console.log('Disconnection!');
		djCount -= 1;
	});
});

/*
** http.listen(...) is the function that starts the
** 	 server listening for connections.
*/

http.listen(port, function() {
	console.log('Listening on port ' + port + '...');
});
