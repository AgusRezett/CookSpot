const express = require('express');
const cookieParser = require('cookie-parser');
const morgan = require('morgan');
const routes = require('./routes/index.js');
const { json } = require('express');

require('./db.js');

const cors = {
	origin: ['https://cookspot.vercel.app/', 'https://localhost:3000'],
	default: 'https://cookspot.vercel.app/',
};

const server = express();
server.name = 'API';

server.use(express.urlencoded({ extended: true, limit: '50mb' }));
server.use(json({ limit: '50mb' }));
server.use(cookieParser());
server.use(morgan('dev'));
server.use((req, res, next) => {
	console.log(req.header);
	const origin = cors.origin.includes(req.header('origin').toLowerCase()) ? req.headers.origin : cors.default;
	res.header('Access-Control-Allow-Origin', origin);

	res.header('Access-Control-Allow-Credentials', 'true');
	res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
	res.header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, DELETE');
	next();
});

server.use('/api', routes);

server.get('/', async (req, res) => {
	res.send('Bienvenido a Cookspot');
});

/* This is an error handling middleware function that is used to handle any errors that occur during
the request-response cycle. It takes four parameters: `err`, `req`, `res`, and `next`. If an error
occurs in any of the middleware functions that are called before this one, the error will be passed
to this function as the first parameter (`err`). The function then sets the status code of the
response to either the status code of the error (`err.status`) or 500 (Internal Server Error) if no
status code is provided. It also sets the message of the response to either the error message
(`err.message`) or the error object itself if no message is provided. Finally, it logs the error to
the console and sends the response back to the client. */
server.use((err, req, res, next) => {
	const status = err.status || 500;
	const message = err.message || err;
	console.error(err);
	res.status(status).send({ message });
});

module.exports = server;
