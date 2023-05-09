import {
	GET_RECIPES,
	RESET_RECIPES,
	ADD_RECIPE,
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

		case GET_DIET_TYPES:
			return {
				...state,
				dietTypes: action.payload,
			};

		default:
			return state;
	}
}
