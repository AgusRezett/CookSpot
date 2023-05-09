const { Router } = require('express');
const {
	getApiById,
	getAllRecipes,
	getDbById,
	getRandomPicks,
	getVeganRecipes,
	getAmericanRecipes,
	getItalianRecipes,
	getCaribbeanRecipes,
	getJapaneseRecipes,
} = require('../controllers/recipes');

const router = Router();

router.get('/', async (req, res, next) => {
	try {
		const { title } = req.query;
		let allRecipes = await getAllRecipes();
		let finalRecipes = allRecipes;

		if (title) {
			let recipesByName = allRecipes.filter((e) =>
				e.title
					? e.title.toLowerCase().includes(title.toString().toLowerCase())
					: e.name.toLowerCase().includes(title.toString().toLowerCase())
			);
			if (recipesByName.length) {
				finalRecipes = recipesByName;
			} else {
				return res.status(404).send('Sorry, recipe not found');
			}
		} else {
			finalRecipes = allRecipes.map((e) => {
				return {
					id: e.id,
					image: e.image,
					title: e.title,
					name: e.name,
					diets: e.diets ? e.diets : e.diets.map((e) => e.name),
					healthScore: e.healthScore,
					aggregateLikes: e.aggregateLikes,
					readyInMinutes: e.readyInMinutes,
					cheap: e.cheap,
				};
			});
		}
		return res.status(200).send(finalRecipes);
	} catch (error) {
		return res.status(400).send(error.message);
	}
});

router.get('/random-picks', async (req, res, next) => {
	try {
		let randomBreakfast = await getRandomPicks('breakfast');
		let randomMeal = await getRandomPicks('meal');
		let randomLunch = await getRandomPicks('lunch');
		let randomSnack = await getRandomPicks('snack');
		let randomDinner = await getRandomPicks('dinner');

		let todaysMeals = [
			{ ...randomBreakfast.data, type: 'breakfast' },
			{ ...randomMeal.data, type: 'meal' },
			{ ...randomLunch.data, type: 'lunch' },
			{ ...randomSnack.data, type: 'snack' },
			{ ...randomDinner.data, type: 'dinner' },
		];

		let recipes = todaysMeals.map((e) => {
			const recipe = e.recipes[0];
			return {
				id: recipe.id,
				title: recipe.title,
				type: e.type,
				image: recipe.image,
				summary: recipe.summary,
				cuisins: recipe.cuisines,
				dishTypes: recipe.dishTypes,
				readyInMinutes: recipe.readyInMinutes,
				aggregateLikes: recipe.aggregateLikes,
			};
		});

		return res.status(200).send(recipes);
	} catch (error) {
		console.log(error);
		return res.status(400).send(error.message);
	}
});

router.get('/vegan/:ammount', async (req, res, next) => {
	const { ammount } = req.params;
	try {
		let veganRecipes = await getVeganRecipes(ammount);

		let recipes = veganRecipes.data.recipes.map((e) => {
			return {
				id: e.id,
				title: e.title,
				type: e.type,
				image: e.image,
				summary: e.summary,
				cuisins: e.cuisines,
				dishTypes: e.dishTypes,
				readyInMinutes: e.readyInMinutes,
				aggregateLikes: e.aggregateLikes,
			};
		});

		return res.status(200).send(recipes);
	} catch (error) {
		console.log(error);
		return res.status(400).send(error.message);
	}
});

router.get('/american/:ammount', async (req, res, next) => {
	const { ammount } = req.params;
	try {
		let americanRecipes = await getAmericanRecipes(ammount);

		let recipes = americanRecipes.data.recipes.map((e) => {
			return {
				id: e.id,
				title: e.title,
				type: e.type,
				image: e.image,
				summary: e.summary,
				cuisins: e.cuisines,
				dishTypes: e.dishTypes,
				readyInMinutes: e.readyInMinutes,
				aggregateLikes: e.aggregateLikes,
			};
		});

		return res.status(200).send(recipes);
	} catch (error) {
		console.log(error);
		return res.status(400).send(error.message);
	}
});

router.get('/italian/:ammount', async (req, res, next) => {
	const { ammount } = req.params;
	try {
		let italianRecipes = await getItalianRecipes(ammount);

		let recipes = italianRecipes.data.recipes.map((e) => {
			return {
				id: e.id,
				title: e.title,
				type: e.type,
				image: e.image,
				summary: e.summary,
				cuisins: e.cuisines,
				dishTypes: e.dishTypes,
				readyInMinutes: e.readyInMinutes,
				aggregateLikes: e.aggregateLikes,
			};
		});

		return res.status(200).send(recipes);
	} catch (error) {
		console.log(error);
		return res.status(400).send(error.message);
	}
});

router.get('/caribbean/:ammount', async (req, res, next) => {
	const { ammount } = req.params;
	try {
		let caribbeanRecipes = await getCaribbeanRecipes(ammount);

		let recipes = caribbeanRecipes.data.recipes.map((e) => {
			return {
				id: e.id,
				title: e.title,
				type: e.type,
				image: e.image,
				summary: e.summary,
				cuisins: e.cuisines,
				dishTypes: e.dishTypes,
				readyInMinutes: e.readyInMinutes,
				aggregateLikes: e.aggregateLikes,
			};
		});

		return res.status(200).send(recipes);
	} catch (error) {
		console.log(error);
		return res.status(400).send(error.message);
	}
});

router.get('/japanese/:ammount', async (req, res, next) => {
	const { ammount } = req.params;
	try {
		let japaneseRecipes = await getJapaneseRecipes(ammount);

		let recipes = japaneseRecipes.data.recipes.map((e) => {
			return {
				id: e.id,
				title: e.title,
				type: e.type,
				image: e.image,
				summary: e.summary,
				cuisins: e.cuisines,
				dishTypes: e.dishTypes,
				readyInMinutes: e.readyInMinutes,
				aggregateLikes: e.aggregateLikes,
			};
		});

		return res.status(200).send(recipes);
	} catch (error) {
		console.log(error);
		return res.status(400).send(error.message);
	}
});

router.get('/:id', async (req, res, next) => {
	const { id } = req.params;
	try {
		if (/^[0-9a-fA-F]{8}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{12}$/.test(id)) {
			let dbRecipesById = await getDbById(id);
			console.log(dbRecipesById);
			return res.status(200).json(dbRecipesById);
		} else {
			apiRecipesById = await getApiById(id);
			if (apiRecipesById.data.id) {
				return res.status(200).send(apiRecipesById.data);
			}
		}
	} catch (error) {
		console.log(error);
		return res.status(404).send('Recipe not found');
	}
});

module.exports = router;
