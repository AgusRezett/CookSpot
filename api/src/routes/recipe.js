const { Router } = require('express');
const { Recipe, Diet } = require('../db');

const router = Router();

router.post('/', async (req, res, next) => {
	try {
		const { name, summary, healthScore, steps, dietTypes } = req.body;
		console.log(req.body);

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

module.exports = router;
