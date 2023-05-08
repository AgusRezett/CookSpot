const axios = require('axios');
const db = require('../db');
const { Diet, Recipe } = require('../db');
const { API_KEY } = process.env;

// Controller functions:
const getApiInfo = async () => {
	try {
		const apiUrl = await axios.get(
			`https://api.spoonacular.com/recipes/complexSearch?apiKey=${API_KEY}&addRecipeInformation=true&number=50`
		);

		const apiInfo = await apiUrl.data.results.map((e) => {
			return {
				id: e.id,
				image: e.image,
				title: e.title,
				cheap: e.cheap,
				diets: e.diets,
				aggregateLikes: e.aggregateLikes,
				readyInMinutes: e.readyInMinutes,
				healthScore: e.healthScore,
			};
		});

		return apiInfo;
	} catch (error) {
		console.log(error.response.data.message);
		return [];
		//+next(error.response.data.message);
	}
};

const getDbInfo = async () => {
	return await Recipe.findAll({
		include: {
			model: Diet,
			attributes: ['name'],
			through: {
				attributes: [],
			},
		},
	});
};

const getApiById = async (id) => {
	return await axios.get(`https://api.spoonacular.com/recipes/${id}/information?apiKey=${API_KEY}`);
};

const getRandomPicks = async (type, ammount = 1) => {
	return await axios.get(
		`https://api.spoonacular.com/recipes/random?type=${type}&number=${ammount}&apiKey=${API_KEY}`
	);
};

const getVeganRecipes = async (ammount = 1) => {
	return await axios.get(`https://api.spoonacular.com/recipes/random?number=${ammount}&tags=vegan&apiKey=${API_KEY}`);
};

const getAmericanRecipes = async (ammount = 1) => {
	return await axios.get(
		`https://api.spoonacular.com/recipes/random?&cuisine=American&number=${ammount}&apiKey=${API_KEY}`
	);
};

const getItalianRecipes = async (ammount = 1) => {
	return await axios.get(
		`https://api.spoonacular.com/recipes/random?&cuisine=Italian&number=${ammount}&apiKey=${API_KEY}`
	);
};

const getCaribbeanRecipes = async (ammount = 1) => {
	return await axios.get(
		`https://api.spoonacular.com/recipes/random?&cuisine=Caribbean&number=${ammount}&apiKey=${API_KEY}`
	);
};

const getJapaneseRecipes = async (ammount = 1) => {
	return await axios.get(
		`https://api.spoonacular.com/recipes/random?&cuisine=Japanese&number=${ammount}&apiKey=${API_KEY}`
	);
};

const getDbById = async (id) => {
	return await Recipe.findByPk(id, {
		include: {
			model: Diet,
			attributes: ['name'],
			through: {
				attributes: [],
			},
		},
	});
};

const getAllRecipes = async () => {
	const apiInfo = await getApiInfo();
	const dbInfo = await getDbInfo();
	console.log(dbInfo);
	const totalInfo = apiInfo.concat(dbInfo);

	return totalInfo;
};

module.exports = {
	getApiInfo,
	getDbInfo,
	getAllRecipes,
	getDbById,
	getApiById,
	getRandomPicks,
	getVeganRecipes,
	getAmericanRecipes,
	getItalianRecipes,
	getCaribbeanRecipes,
	getJapaneseRecipes,
};
