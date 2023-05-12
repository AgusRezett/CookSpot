const server = require('./src/app.js');
const { conn } = require('./src/db.js');
const { PGUSER, PGPASSWORD, PGHOST, PGDATABASE, API_KEY } = process.env;

// Syncing all the models at once.
conn.sync({ force: false }).then(() => {
	server.listen(3001, () => {
		console.log(`%s ${PGUSER}`);
		console.log(`%s ${PGPASSWORD}`);
		console.log(`%s ${PGHOST}`);
		console.log(`%s ${PGDATABASE}`);
		console.log(`%s ${API_KEY}`);
		console.log('%s listening at 3001');
	});
});
