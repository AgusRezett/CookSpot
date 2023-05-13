import axios from 'axios';
import {
	TOGGLE_LOADING,
	GET_RECIPES,
	RESET_RECIPES,
	DELETE_RECIPES,
	GET_RANDOM_PICKS,
	GET_VEGAN_RECIPES,
	GET_AMERICAN_RECIPES,
	GET_CARIBBEAN_RECIPES,
	GET_ITALIAN_RECIPES,
	GET_JAPANESE_RECIPES,
	GET_RECIPE_DETAILS,
	DIET_TYPE_FILTER,
	ALPHABETICAL_SORT,
	SCORE_SORT,
	SEARCH_RECIPE,
	GET_DIET_TYPES,
	LOCAL_HOST,
} from './types';

export function toggleLoading(payload) {
	return function (dispatch) {
		return dispatch({ type: TOGGLE_LOADING, payload: payload });
	};
}

export function getRecipes() {
	return function (dispatch) {
		dispatch(toggleLoading(true));
		axios
			.get(`${LOCAL_HOST}/api/recipes`)
			.then((response) => {
				dispatch(toggleLoading(false));
				return dispatch({ type: GET_RECIPES, payload: response.data });
			})
			.catch((error) => {
				console.log(error);
			});
	};
}

export function resetRecipes() {
	return function (dispatch) {
		return dispatch({ type: RESET_RECIPES, payload: '' });
	};
}

export function getRandomPicks() {
	return function (dispatch) {
		dispatch(toggleLoading(true));
		axios
			.get(`${LOCAL_HOST}/api/recipes/random-picks`)
			.then((response) => {
				dispatch(toggleLoading(false));
				return dispatch({ type: GET_RANDOM_PICKS, payload: response.data });
			})
			.catch((error) => {
				dispatch(toggleLoading(false));
				console.log(error);
			});
	};
}

export function getVeganRecipes(payload) {
	return function (dispatch) {
		axios
			.get(`${LOCAL_HOST}/api/recipes/vegan/${payload}`)
			.then((response) => {
				return dispatch({ type: GET_VEGAN_RECIPES, payload: response.data });
			})
			.catch((error) => {
				console.log(error);
			});
	};
}

export function getAmericanRecipes(payload) {
	return function (dispatch) {
		axios
			.get(`${LOCAL_HOST}/api/recipes/american/${payload}`)
			.then((response) => {
				return dispatch({ type: GET_AMERICAN_RECIPES, payload: response.data });
			})
			.catch((error) => {
				console.log(error);
			});
	};
}

export function getCaribbeanRecipes(payload) {
	return function (dispatch) {
		axios
			.get(`${LOCAL_HOST}/api/recipes/caribbean/${payload}`)
			.then((response) => {
				return dispatch({ type: GET_CARIBBEAN_RECIPES, payload: response.data });
			})
			.catch((error) => {
				console.log(error);
			});
	};
}

export function getItalianRecipes(payload) {
	return function (dispatch) {
		axios
			.get(`${LOCAL_HOST}/api/recipes/italian/${payload}`)
			.then((response) => {
				return dispatch({ type: GET_ITALIAN_RECIPES, payload: response.data });
			})
			.catch((error) => {
				console.log(error);
			});
	};
}

export function getJapaneseRecipes(payload) {
	return function (dispatch) {
		axios
			.get(`${LOCAL_HOST}/api/recipes/japanese/${payload}`)
			.then((response) => {
				return dispatch({ type: GET_JAPANESE_RECIPES, payload: response.data });
			})
			.catch((error) => {
				console.log(error);
			});
	};
}

export function getRecipesByName(payload) {
	return function (dispatch) {
		dispatch(toggleLoading(true));
		axios
			.get(`${LOCAL_HOST}/api/recipes?title=${payload}`)
			.then((response) => {
				dispatch(toggleLoading(false));
				return dispatch({ type: SEARCH_RECIPE, payload: response.data });
			})
			.catch((error) => {
				console.log(error);
			});
	};
}

export function getDietTypes() {
	return async function (dispatch) {
		dispatch(toggleLoading(true));
		axios
			.get(`${LOCAL_HOST}/api/types`)
			.then((response) => {
				dispatch(toggleLoading(false));
				return dispatch({ type: GET_DIET_TYPES, payload: response.data.map((d) => d.name) });
			})
			.catch((error) => {
				console.log(error);
			});
	};
}

export function addRecipe(payload) {
	return async function () {
		try {
			var response = await axios.post(`${LOCAL_HOST}/api/recipe`, payload);
			return response;
		} catch (error) {
			console.log(error);
		}
	};
}

export function deleteRecipe(payload) {
	return async function (dispatch) {
		try {
			var response = await axios.delete(`${LOCAL_HOST}/api/recipe/${payload}`);
			if (response.status === 200) {
				return dispatch({ type: DELETE_RECIPES, payload: payload });
			} else {
				return response;
			}
		} catch (error) {
			console.log(error);
		}
	};
}

export function getRecipeDetails(payload) {
	return async function (dispatch) {
		dispatch(toggleLoading(true));
		axios.get(`${LOCAL_HOST}/api/recipes/${payload}`).then((response) => {
			dispatch(toggleLoading(false));
			return dispatch({ type: GET_RECIPE_DETAILS, payload: response.data });
		});
	};
}

export function dietTypeFilter(payload) {
	return {
		type: DIET_TYPE_FILTER,
		payload,
	};
}

export function aplhabeticalSort(payload) {
	return {
		type: ALPHABETICAL_SORT,
		payload,
	};
}

export function scoreSort(payload) {
	return {
		type: SCORE_SORT,
		payload,
	};
}
