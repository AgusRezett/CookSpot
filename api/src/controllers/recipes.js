const axios = require('axios');
const { Diet, Recipe } = require('../db');
const { API_KEY } = process.env;

/**
 * This function retrieves recipe information from the Spoonacular API and returns an array of selected
 * data for each recipe.
 * @returns The function `getApiInfo` returns an array of objects containing information about recipes
 * obtained from the Spoonacular API. The objects have the following properties: `id`, `image`,
 * `title`, `cheap`, `diets`, `aggregateLikes`, `readyInMinutes`, and `healthScore`. If there is an
 * error, an empty array is returned.
 */
const getApiInfo = async () => {
	try {
		const apiUrl = await axios.get(
			`https://api.spoonacular.com/recipes/complexSearch?apiKey=${API_KEY}&addRecipeInformation=true&number=20`
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
		return [];
	}
};

/**
 * This function retrieves information from a database about recipes and their associated diets.
 * @returns The function `getDbInfo` is returning a Promise that resolves to an array of Recipe
 * objects, where each Recipe object includes the associated Diet object(s) with only the `name`
 * attribute included and no additional attributes from the join table.
 */
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

/**
 * This function retrieves recipe information from the Spoonacular API based on a given ID.
 * @param id - The `id` parameter is a unique identifier for a recipe in the Spoonacular API. It is
 * used to retrieve information about a specific recipe.
 * @returns The `getApiById` function is returning a Promise that resolves to the result of an HTTP GET
 * request to the Spoonacular API endpoint for recipe information, using the provided `id` parameter
 * and `API_KEY` constant. The result is obtained using the `axios` library and is awaited to ensure
 * that the Promise resolves before returning the result.
 */
const getApiById = async (id) => {
	return await axios.get(`https://api.spoonacular.com/recipes/${id}/information?apiKey=${API_KEY}`);
};

/**
 * This function retrieves a specified number of random recipes of a specified type using the
 * Spoonacular API.
 * @param type - The type of recipe to retrieve. This could be "main course", "dessert", "appetizer",
 * "salad", "soup", "bread", "breakfast", "beverage", "sauce", "marinade", "fingerfood", "snack", or "
 * @param [ammount=1] - The number of random recipes to retrieve. The default value is 1 if no value is
 * provided.
 * @returns The `getRandomPicks` function is returning a Promise that resolves to the result of an HTTP
 * GET request to the Spoonacular API endpoint for retrieving random recipes of a specified type and
 * amount, using the provided API key. The response data will be in JSON format.
 */
const getRandomPicks = async (type, ammount = 1) => {
	return await axios.get(
		`https://api.spoonacular.com/recipes/random?type=${type}&number=${ammount}&apiKey=${API_KEY}`
	);
};

/**
 * This function retrieves a specified number of random vegan recipes using the Spoonacular API.
 * @param [ammount=1] - The number of vegan recipes to retrieve from the API. The default value is 1 if
 * no value is provided.
 * @returns The `getVeganRecipes` function is returning a Promise that resolves to an Axios response
 * object containing information about a random number of vegan recipes (specified by the `ammount`
 * parameter) retrieved from the Spoonacular API using an API key (`API_KEY`).
 */
const getVeganRecipes = async (ammount = 1) => {
	return await axios.get(`https://api.spoonacular.com/recipes/random?number=${ammount}&tags=vegan&apiKey=${API_KEY}`);
};

/**
 * This function retrieves a specified number of random American recipes using the Spoonacular API.
 * @param [ammount=1] - The number of American recipes to retrieve from the API. The default value is 1
 * if no value is provided.
 * @returns The function `getAmericanRecipes` is returning a Promise that resolves to the result of an
 * HTTP GET request to the Spoonacular API endpoint for retrieving a random number of American recipes.
 * The number of recipes to retrieve is determined by the `ammount` parameter, which defaults to 1 if
 * not provided. The API key used for authentication is stored in the `API_KEY` variable.
 */
const getAmericanRecipes = async (ammount = 1) => {
	return await axios.get(
		`https://api.spoonacular.com/recipes/random?&cuisine=American&number=${ammount}&apiKey=${API_KEY}`
	);
};

/**
 * This function retrieves a specified number of random Italian recipes using the Spoonacular API.
 * @param [ammount=1] - The number of Italian recipes to retrieve from the API. If no value is
 * provided, it defaults to 1.
 * @returns The `getItalianRecipes` function is returning a Promise that resolves to an Axios response
 * object containing Italian recipes fetched from the Spoonacular API. The number of recipes returned
 * is determined by the `ammount` parameter, which defaults to 1 if not provided. The API key used to
 * make the request is stored in the `API_KEY` variable.
 */
const getItalianRecipes = async (ammount = 1) => {
	return await axios.get(
		`https://api.spoonacular.com/recipes/random?&cuisine=Italian&number=${ammount}&apiKey=${API_KEY}`
	);
};

/**
 * This function retrieves a specified number of random Caribbean recipes using the Spoonacular API.
 * @param [ammount=1] - The number of Caribbean recipes to retrieve from the API. The default value is
 * 1 if no value is provided.
 * @returns The function `getCaribbeanRecipes` is returning a Promise that resolves to an Axios
 * response object containing information about a random Caribbean recipe. The number of recipes
 * returned is determined by the `ammount` parameter, which defaults to 1 if not provided. The API key
 * used to make the request is stored in the `API_KEY` variable.
 */
const getCaribbeanRecipes = async (ammount = 1) => {
	return await axios.get(
		`https://api.spoonacular.com/recipes/random?&cuisine=Caribbean&number=${ammount}&apiKey=${API_KEY}`
	);
};

/**
 * This function retrieves a specified number of random Japanese recipes using the Spoonacular API.
 * @param [ammount=1] - The number of Japanese recipes to retrieve from the API. The default value is 1
 * if no value is provided.
 * @returns The `getJapaneseRecipes` function is returning a Promise that resolves to an Axios response
 * object containing information about one or more randomly generated Japanese recipes. The number of
 * recipes returned is determined by the `amount` parameter, which defaults to 1 if not provided. The
 * API endpoint used to fetch the recipes is the Spoonacular API, and the API key used to authenticate
 * the request is stored in the `
 */
const getJapaneseRecipes = async (ammount = 1) => {
	return await axios.get(
		`https://api.spoonacular.com/recipes/random?&cuisine=Japanese&number=${ammount}&apiKey=${API_KEY}`
	);
};

/**
 * This function retrieves a recipe from a database by its ID and includes its associated diets.
 * @param id - The id parameter is the unique identifier of the recipe that we want to retrieve from
 * the database.
 * @returns The function `getDbById` is returning a Promise that resolves to a Recipe object with the
 * specified `id` from the database. The Recipe object will also include the associated Diet object(s)
 * with their `name` attribute(s) through a many-to-many relationship. The `attributes` option is used
 * to specify which attributes of the Diet model should be included in the result, and the `through`
 */
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

/**
 * The function retrieves all recipe information from both an API and a database and returns it as a
 * combined array.
 * @returns The function `getAllRecipes` is returning a Promise that resolves to an array containing
 * the concatenated results of the `getApiInfo` and `getDbInfo` functions.
 */
const getAllRecipes = async () => {
	const apiInfo = await getApiInfo();
	const dbInfo = await getDbInfo();
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
