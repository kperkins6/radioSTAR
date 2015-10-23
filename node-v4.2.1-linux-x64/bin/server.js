var	app = require('express')(),
		http = require('http').Server(app),
		io = require('socket.io')(http),
		sqlite3 = require('sqlite3'),
		filesystem = require('fs'),

		listenerCount = 0,
		port = 32768,
		sockets = [],
		date = new Date(),
		database,
		databaseName = 'radioSTAR.db';

/*
** The following if-else checks if a database
**   exits, and either opens it or opens it and
**   creates an initial table.
*/

if (filesystem.existsSync(databaseName)) {
	database = new sqlite3.Database(databaseName);
} else {
	database = new sqlite3.Database(databaseName);

	Query(database, 'CREATE TABLE Accounts (name TEXT);');
}

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
** Client is a container class to hold socket
**   data about connections, their lifespan,
**   and other data that will be relevant for
**   listener statistics.
*/

function Client(Socket, Age) {
	socket = Socket;
	age = Age;
}

/*
** app.get(...) is the function that responds to
**   http requests with a specified file, acting
**   as a webserver.
*/

app.get('/', function(req, res) {
	res.sendFile(__dirname + '/index.html');
});

app.get('/index.html', function(req, res) {
	res.sendFile(__dirname + '/index.html');
});

app.get('/login.html', function(req, res) {
	res.sendFile(__dirname + '/login.html');
});

app.get('/logout.html', function(req, res) {
	res.sendFile(__dirname + '/logout.html');
	res.sendFile(__dirname + '/logoutSuccess.html');
});

/*
** io.on(...) is the primary function / driver of
**   the application. This function checks for attempted
**   connections and will create, listen to and destroy
**   sockets as people connect and disconnect.
*/

io.on('connection', function(socket) {
	console.log('Connection!');
	sockets.push(new Client(socket, date.getTime()));	
	listenerCount += 1;
	
	socket.on('login', function(data) {
		var data = data.stringify();
		console.log(data);
	});

	socket.on('disconnect', function() {
		for (var i = 0; i < sockets.length; i++) {
			if (sockets[i].socket === this) {
				sockets.splice(i, 1);
				i = sockets.size();
			}	
		}
		console.log('Disconnection!');
		listenerCount -= 1;
	});
});

/*
** http.listen(...) is the function that starts the
** 	 server listening for connections.
*/

http.listen(port, function() {
	console.log('Listening on port ' + port + '...');
});
