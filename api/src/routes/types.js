const { Router } = require('express');
const { dietTypesDb } = require('../controllers/types');
const { Diet } = require('../db');

const router = Router();

/* When a GET request is made to the root URL ('/'), the route first loops through an array of diet
types and creates a new record in the database for each type if it doesn't already exist. Then, it
retrieves all the diet types from the database and sends them as a response to the client. If there
is an error, it passes the error to the next middleware function. */
router.get('/', async (req, res, next) => {
	try {
		dietTypesDb.forEach((e) => {
			Diet.findOrCreate({
				where: { name: e },
			});
		});
		const dietTypes = await Diet.findAll();
		res.send(dietTypes);
	} catch (error) {
		next(error);
	}
});

module.exports = router;
