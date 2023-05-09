const { Router } = require('express');
const { Recipe, Diet } = require('../db');

const router = Router();

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
		console.log(newRecipe);
		res.status(200).send(newRecipe);
	} catch (error) {
		next(error);
	}
});

router.delete('/:id', async (req, res, next) => {
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
