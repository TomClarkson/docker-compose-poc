var app = require('express')();
var http = require('http').Server(app);
// var io = require('socket.io')(http);

//io.use((socket, next) => {
//next();
// // if (socket.request.headers.cookie) return next();
// // next(new Error('Authentication error'));
//});

var bodyParser = require('body-parser');
app.use(bodyParser.json()); // support json encoded bodies
app.use(bodyParser.urlencoded({ extended: true })); // support encoded bodies

var knex = require('knex')({
  client: 'mysql',
  connection: {
    host: process.env.MYSQL_PORT_3306_TCP_ADDR || '127.0.0.1',
    user: 'docker',
    password:'docker',
    database:'api_db'
  }
});

app.get('/', (req, res) => {
	var users = knex.select().from('users').then(function(users) {
		// console.log('u', users);
		return res.json(users);
	});
	
	// console.log('process', process);
    // return res.json('!still works with knex!');
});

// app.post('/notification', (req, res) => {
//     var notification = req.body;

//     candyUserSockets.emitToUserId(notification.userId, 'notification', notification);

//     return res.json('notification received');
// });

// io.on('connection', (socket) => {
//     candyUserSockets.addSocketToPool(socket);

//     socket.on('disconnect', function(){
//      candyUserSockets.removeSocket(socket);
//     });
// });

http.listen(3000, () => {
    console.log('listening on *:3000');
});
