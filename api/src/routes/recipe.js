const { Router } = require('express');
const { Recipe, Diet } = require('../db');

const router = Router();

/* This is a route handler for a POST request to create a new recipe. It receives the request body
which should contain the recipe's name, summary, health score, steps, and diet types. It then
creates a new recipe in the database using the Recipe model's create method and adds the diet types
to the recipe using the addDiet method. Finally, it sends a response with the newly created recipe
and a status code of 200 if successful, or an error message and status code of 500 if an error
occurs. */
router.post('/', async (req, res, next) => {
	try {
		const { name, summary, healthScore, steps, dietTypes } = req.body;

		const newRecipe = await Recipe.create({
			name,
			summary,
			healthScore,
			steps,
		});

		let dietTypesRecipeDb = await Diet.findAll({
			where: { name: dietTypes },
		});
		newRecipe.addDiet(dietTypesRecipeDb);
		res.status(200).send(newRecipe);
	} catch (error) {
		next(error);
	}
});

/* This is a route handler for a DELETE request to delete a recipe from the database. It receives the
recipe's ID as a parameter in the URL, and then uses the Recipe model's destroy method to delete the
recipe from the database. If the recipe is successfully deleted, it sends a response with a status
code of 200 and a success message. If the recipe is not found, it sends a response with a status
code of 404 and an error message. If an error occurs during the deletion process, it sends a
response with a status code of 500 and an error message. */
router.delete('/:id', async (req, res) => {
	try {
		const { id } = req.params;
		const result = await Recipe.destroy({ where: { id: id } });
		if (result) {
			return res.status(200).send('Recipe deleted successfully!');
		} else {
			return res.status(404).send("Couldn't delete, recipe not found.");
		}
	} catch (error) {
		res.status(500).send('An error has occurred.');
	}
});

module.exports = router;
