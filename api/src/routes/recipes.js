const { Router } = require('express');
const axios = require('axios');
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
const { Recipe, Diet } = require('../db');
const { API_KEY, API_KEY1 } = process.env;

const router = Router();

const Data = require('../../../client/src/data/featured_recipes.json');

router.get('/', async (req, res, next) => {
	/* const allRecipes = Data.featuredRecipes;
	console.log(fina); */
	try {
		const { name } = req.query;
		let allRecipes = await getAllRecipes();
		let finalRecipes = allRecipes;

		if (name) {
			let recipesByName = allRecipes.filter((e) =>
				e.title.toLowerCase().includes(title.toString().toLowerCase())
			);
			console.log(recipesByName);
			console.log('recipesByName');
			if (recipesByName.length) {
				finalRecipes = recipesByName;
				/* let recipes = recipesByName.map((e) => {
					return {
						image: e.image,
						title: e.title,
						diets: e.diets ? e.diets : e.diets.map((e) => e.title),
						healthScore: e.healthScore,
						id: e.id,
					};
				}); */
				//return res.status(200).send(recipes);
			}
			return res.status(404).send('Sorry, recipe not found');
		} else {
			let recipes = allRecipes.map((e) => {
				return {
					image: e.image,
					title: e.title,
					diets: e.diets ? e.diets : e.diets.map((e) => e.title),
					healthScore: e.healthScore,
					id: e.id,
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
			console.log(recipe);
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
			return res.status(200).json(dbRecipesById);
		} else {
			console.log('buscando');
			apiRecipesById = await getApiById(id);
			console.log('encontre');
			if (apiRecipesById.data.id) {
				//console.log(apiRecipesById.data);
				/* let recipeDetails = {
					id: apiRecipesById.data.id,
					image: apiRecipesById.data.image,
					title: apiRecipesById.data.title,
					dishTypes: apiRecipesById.data.dishTypes,
					dietTypes: apiRecipesById.data.diets,
					summary: apiRecipesById.data.summary,
					score: apiRecipesById.data.spoonacularScore,
					algo: null,
					healthScore: apiRecipesById.data.healthScore,
					steps: apiRecipesById.data.analyzedInstructions[0]?.steps.map((e) => {
						return {
							number: e.number,
							step: e.step,
						};
					}),
				}; */
				console.log(apiRecipesById);
				return res.status(200).send(apiRecipesById.data);
			}
		}
	} catch (error) {
		console.log(error);
		return res.status(404).send('Recipe not found');
	}
});

module.exports = router;
