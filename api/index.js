const server = require('./src/app.js');
const { conn } = require('./src/db.js');
const { PGUSER, PGPASSWORD, PGHOST, PGDATABASE, API_KEY, PORT } = process.env;

// Syncing all the models at once.
conn.sync({ force: false }).then(() => {
	server.listen(PORT, () => {
		console.log(`%s listening at ${PORT}`);
	});
});
