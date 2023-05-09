import {
	GET_RECIPES,
	RESET_RECIPES,
	ADD_RECIPE,
	DELETE_RECIPES,
	DIET_TYPE_FILTER,
	ALPHABETICAL_SORT,
	SCORE_SORT,
	SEARCH_RECIPE,
	GET_DIET_TYPES,
	GET_RECIPE_DETAILS,
	GET_RANDOM_PICKS,
	GET_VEGAN_RECIPES,
	GET_AMERICAN_RECIPES,
	GET_CARIBBEAN_RECIPES,
	GET_ITALIAN_RECIPES,
	GET_JAPANESE_RECIPES,
} from '../actions/types';

const initialState = {
	recipes: [],
	randomPicks: [],
	allRecipes: [],
	dietTypes: [],
	recipeDetails: [],
	homeCarouselRecipes: [],
};

export default function rootReducer(state = initialState, action) {
	switch (action.type) {
		case GET_RECIPES:
			return {
				...state,
				recipes: action.payload,
				allRecipes: action.payload,
			};

		case RESET_RECIPES:
			return {
				...state,
				recipes: state.allRecipes,
			};

		case GET_RANDOM_PICKS:
			return {
				...state,
				randomPicks: action.payload,
			};

		case GET_VEGAN_RECIPES:
			return {
				...state,
				homeCarouselRecipes: { ...state.homeCarouselRecipes, veganRecipes: action.payload },
			};

		case GET_AMERICAN_RECIPES:
			return {
				...state,
				homeCarouselRecipes: { ...state.homeCarouselRecipes, americanRecipes: action.payload },
			};

		case GET_CARIBBEAN_RECIPES:
			return {
				...state,
				homeCarouselRecipes: { ...state.homeCarouselRecipes, caribbeanRecipes: action.payload },
			};

		case GET_ITALIAN_RECIPES:
			return {
				...state,
				homeCarouselRecipes: { ...state.homeCarouselRecipes, italianRecipes: action.payload },
			};

		case GET_JAPANESE_RECIPES:
			return {
				...state,
				homeCarouselRecipes: { ...state.homeCarouselRecipes, japaneseRecipes: action.payload },
			};

		/* This case is handling the action of filtering recipes by diet type. It creates a copy of the
		current state's `allRecipes` array, and then filters it based on the value of the `action.payload`
		parameter. It checks if any of the recipe's `diets` array contains a diet type that matches the
		`action.payload` value (ignoring case sensitivity), and returns a new array with only the recipes
		that match the filter. The filtered array is then returned as part of the updated state, replacing
		the previous `recipes` array. */
		case DIET_TYPE_FILTER:
			const allRecipes = state.allRecipes;
			const filteredByDietType = allRecipes.filter((r) =>
				r.diets?.some((d) => {
					const value = !d.name ? d : d.name;
					return value.toLowerCase() === action.payload.toLowerCase();
				})
			);
			return {
				...state,
				recipes: filteredByDietType,
			};

		/* This case is handling the action of sorting recipes alphabetically. It creates a copy of the
		current state's recipes array, and then sorts it based on the value of the `action.payload`
		parameter. If `action.payload` is equal to `'atoz'`, the array is sorted in ascending order by
		recipe title/name. If `action.payload` is not equal to `'atoz'`, the array is sorted in descending
		order by recipe title/name. The sorted array is then returned as part of the updated state. */
		case ALPHABETICAL_SORT:
			let sortedRecipes = [...state.recipes];
			sortedRecipes =
				action.payload === 'atoz'
					? state.recipes.sort(function (a, b) {
							const valueA = a.title ? a.title : a.name;
							const valueB = b.title ? b.title : b.name;
							if (valueA.toLowerCase() > valueB.toLowerCase()) return 1;
							if (valueA.toLowerCase() < valueB.toLowerCase()) return -1;
							return 0;
					  })
					: state.recipes.sort(function (a, b) {
							const valueA = a.title ? a.title : a.name;
							const valueB = b.title ? b.title : b.name;
							if (valueA.toLowerCase() < valueB.toLowerCase()) return 1;
							if (valueA.toLowerCase() > valueB.toLowerCase()) return -1;
							return 0;
					  });
			return {
				...state,
				recipes: sortedRecipes,
			};

		/* This case is handling the action of sorting recipes by health score. It creates a copy of the
		current state's recipes array, and then sorts it based on the value of the `action.payload`
		parameter. If `action.payload` is equal to `'asc'`, the array is sorted in ascending order by
		health score. If `action.payload` is not equal to `'asc'`, the array is sorted in descending order
		by health score. The sorted array is then returned as part of the updated state. */
		case SCORE_SORT:
			let sortedRecipesByScore = [...state.recipes];
			sortedRecipesByScore =
				action.payload === 'asc'
					? state.recipes.sort(function (a, b) {
							if (a.healthScore > b.healthScore) return 1;
							if (a.healthScore < b.healthScore) return -1;
							return 0;
					  })
					: state.recipes.sort(function (a, b) {
							if (a.healthScore < b.healthScore) return 1;
							if (a.healthScore > b.healthScore) return -1;
							return 0;
					  });
			return {
				...state,
				recipes: sortedRecipesByScore,
			};

		case SEARCH_RECIPE:
			return {
				...state,
				recipes: action.payload,
			};

		case GET_RECIPE_DETAILS:
			return {
				...state,
				recipeDetails: action.payload,
			};

		case ADD_RECIPE:
			return {
				...state,
			};

		/* This case is handling the action of deleting a recipe from the state's `recipes` array. It creates
		a new array called `existingRecipes` by filtering the current state's `recipes` array, and
		removing the recipe with the `id` that matches the `action.payload` parameter. The filtered array
		is then returned as part of the updated state, replacing the previous `recipes` array.
		Additionally, the `console.log` statement is not related to the functionality of the case and can
		be removed. */
		case DELETE_RECIPES:
			console.log('adssda');
			const existingRecipes = state.recipes.filter((recipe) => {
				return recipe.id !== action.payload;
			});
			return {
				...state,
				recipes: existingRecipes,
			};

		case GET_DIET_TYPES:
			return {
				...state,
				dietTypes: action.payload,
			};

		default:
			return state;
	}
}
