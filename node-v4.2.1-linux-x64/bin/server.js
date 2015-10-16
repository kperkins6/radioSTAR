var	app = require('express')(),
	http = require('http').Server(app),
	io = require('socket.io')(http);
var listeners = 0;

app.get('/', function(req, res) {
	res.sendFile(__dirname + '/index.html');
});

io.on('connection', function(socket) {
	listeners += 1;
	console.log('Connection!');
	socket.emit('count', listeners);
	socket.on('chat', function(data) {
		console.log(data);
	});
	socket.on('disconnect', function() {
		console.log('Disconnection!');
		listeners -= 1;
	});
});

http.listen(32768, function() {
	console.log('Listening on port ' + 32768 + '...');
});
