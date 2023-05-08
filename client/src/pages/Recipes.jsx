/* eslint-disable no-unused-vars */

import React, { useState, useEffect } from 'react';

// Components
import Recipe from '../components/Recipe';
import SearchBar from '../components/SearchBar';
import Pagination from '../components/Pagination';
import { SelectComponent } from '../components/SelectComponent';

// Styles
import '../styles/Recipes.css';

// Redux
import { useDispatch, useSelector } from 'react-redux';
import { getRecipes, dietTypeFilter, aplhabeticalSort, scoreSort } from '../actions';

let prevId = 1;

export default function Recipes() {
	const dispatch = useDispatch();
	const allRecipes = useSelector((state) => state.recipes);
	/* const allRecipes = [
		{
			id: 782585,
			image: 'https://spoonacular.com/recipeImages/782585-312x231.jpg',
			title: 'Cannellini Bean and Asparagus Salad with Mushrooms',
			diets: ['gluten free', 'dairy free', 'lacto ovo vegetarian', 'vegan'],
			aggregateLikes: 309,
			readyInMinutes: 45,
			cheap: true,
		},
		{
			id: 716426,
			image: 'https://spoonacular.com/recipeImages/716426-312x231.jpg',
			title: 'Cauliflower, Brown Rice, and Vegetable Fried Rice',
			diets: ['gluten free', 'dairy free', 'lacto ovo vegetarian', 'vegan'],
			aggregateLikes: 3689,
			readyInMinutes: 30,
		},
		{
			id: 715497,
			image: 'https://spoonacular.com/recipeImages/715497-312x231.jpg',
			title: 'Berry Banana Breakfast Smoothie',
			diets: ['lacto ovo vegetarian'],
			aggregateLikes: 689,
			readyInMinutes: 5,
		},
		{
			id: 715415,
			image: 'https://spoonacular.com/recipeImages/715415-312x231.jpg',
			title: 'Red Lentil Soup with Chicken and Turnips',
			diets: ['gluten free', 'dairy free'],
			aggregateLikes: 1866,
			readyInMinutes: 55,
		},
		{
			id: 716406,
			image: 'https://spoonacular.com/recipeImages/716406-312x231.jpg',
			title: 'Asparagus and Pea Soup: Real Convenience Food',
			diets: ['gluten free', 'dairy free', 'paleolithic', 'lacto ovo vegetarian', 'primal', 'vegan'],
			aggregateLikes: 207,
			readyInMinutes: 20,
		},
		{
			id: 644387,
			image: 'https://spoonacular.com/recipeImages/644387-312x231.jpg',
			title: 'Garlicky Kale',
			diets: ['gluten free', 'dairy free', 'paleolithic', 'lacto ovo vegetarian', 'primal', 'whole 30', 'vegan'],
			aggregateLikes: 19,
			readyInMinutes: 45,
		},
		{
			id: 715446,
			image: 'https://spoonacular.com/recipeImages/715446-312x231.jpg',
			title: 'Slow Cooker Beef Stew',
			diets: ['gluten free', 'dairy free'],
			aggregateLikes: 57,
			readyInMinutes: 490,
		},
		{
			id: 782601,
			image: 'https://spoonacular.com/recipeImages/782601-312x231.jpg',
			title: 'Red Kidney Bean Jambalaya',
			diets: ['gluten free', 'dairy free', 'lacto ovo vegetarian', 'vegan'],
			aggregateLikes: 53,
			readyInMinutes: 45,
		},
		{
			id: 795751,
			image: 'https://spoonacular.com/recipeImages/795751-312x231.jpg',
			title: 'Chicken Fajita Stuffed Bell Pepper',
			diets: ['gluten free'],
			aggregateLikes: 159,
			readyInMinutes: 45,
		},
		{
			id: 766453,
			image: 'https://spoonacular.com/recipeImages/766453-312x231.jpg',
			title: "Hummus and Za'atar",
			diets: ['gluten free', 'dairy free', 'lacto ovo vegetarian', 'vegan'],
			aggregateLikes: 35,
			readyInMinutes: 45,
		},
		{
			id: 716627,
			image: 'https://spoonacular.com/recipeImages/716627-312x231.jpg',
			title: 'Easy Homemade Rice and Beans',
			diets: ['gluten free', 'dairy free', 'lacto ovo vegetarian', 'vegan'],
			aggregateLikes: 471,
			readyInMinutes: 35,
		},
		{
			id: 664147,
			image: 'https://spoonacular.com/recipeImages/664147-312x231.jpg',
			title: 'Tuscan White Bean Soup with Olive Oil and Rosemary',
			diets: ['gluten free', 'dairy free', 'lacto ovo vegetarian', 'vegan'],
			aggregateLikes: 22,
			readyInMinutes: 45,
		},
		{
			id: 640941,
			image: 'https://spoonacular.com/recipeImages/640941-312x231.jpg',
			title: 'Crunchy Brussels Sprouts Side Dish',
			diets: ['gluten free', 'dairy free', 'paleolithic', 'lacto ovo vegetarian', 'primal'],
			aggregateLikes: 26,
			readyInMinutes: 30,
		},
		{
			id: 715495,
			image: 'https://spoonacular.com/recipeImages/715495-312x231.jpg',
			title: 'Turkey Tomato Cheese Pizza',
			diets: [],
			aggregateLikes: 910,
			readyInMinutes: 15,
		},
		{
			id: 794349,
			image: 'https://spoonacular.com/recipeImages/794349-312x231.jpg',
			title: 'Broccoli and Chickpea Rice Salad',
			diets: ['gluten free', 'dairy free', 'lacto ovo vegetarian', 'vegan'],
			aggregateLikes: 44,
			readyInMinutes: 45,
		},
		{
			id: 716381,
			image: 'https://spoonacular.com/recipeImages/716381-312x231.jpg',
			title: 'Nigerian Snail Stew',
			diets: ['gluten free', 'dairy free', 'whole 30'],
			aggregateLikes: 361,
			readyInMinutes: 45,
		},
		{
			id: 660306,
			image: 'https://spoonacular.com/recipeImages/660306-312x231.jpg',
			title: 'Slow Cooker: Pork and Garbanzo Beans',
			diets: ['gluten free', 'dairy free'],
			aggregateLikes: 22,
			readyInMinutes: 45,
		},
		{
			id: 756814,
			image: 'https://spoonacular.com/recipeImages/756814-312x231.jpg',
			title: 'Powerhouse Almond Matcha Superfood Smoothie',
			diets: ['gluten free', 'dairy free'],
			aggregateLikes: 80,
			readyInMinutes: 10,
		},
		{
			id: 715769,
			image: 'https://spoonacular.com/recipeImages/715769-312x231.jpg',
			title: 'Broccolini Quinoa Pilaf',
			diets: ['gluten free', 'dairy free', 'lacto ovo vegetarian', 'vegan'],
			aggregateLikes: 94,
			readyInMinutes: 30,
		},
		{
			id: 642129,
			image: 'https://spoonacular.com/recipeImages/642129-312x231.jpg',
			title: 'Easy To Make Spring Rolls',
			diets: ['gluten free', 'dairy free', 'pescatarian'],
			aggregateLikes: 22,
			readyInMinutes: 45,
		},
		{
			id: 642605,
			image: 'https://spoonacular.com/recipeImages/642605-312x231.jpg',
			title: 'Farro With Mushrooms and Asparagus',
			diets: ['dairy free', 'lacto ovo vegetarian'],
			aggregateLikes: 47,
			readyInMinutes: 75,
		},
		{
			id: 636589,
			image: 'https://spoonacular.com/recipeImages/636589-312x231.jpg',
			title: 'Butternut Squash Frittata',
			diets: ['gluten free'],
			aggregateLikes: 18,
			readyInMinutes: 45,
		},
		{
			id: 646738,
			image: 'https://spoonacular.com/recipeImages/646738-312x231.jpg',
			title: "Herbivoracious' White Bean and Kale Soup",
			diets: ['gluten free', 'dairy free', 'lacto ovo vegetarian', 'vegan'],
			aggregateLikes: 10,
			readyInMinutes: 45,
		},
		{
			id: 715540,
			image: 'https://spoonacular.com/recipeImages/715540-312x231.jpg',
			title: 'Summer Berry Salad',
			diets: ['gluten free', 'dairy free', 'paleolithic', 'lacto ovo vegetarian', 'primal', 'vegan'],
			aggregateLikes: 17,
			readyInMinutes: 45,
		},
		{
			id: 663559,
			image: 'https://spoonacular.com/recipeImages/663559-312x231.jpg',
			title: 'Tomato and lentil soup',
			diets: ['gluten free', 'dairy free', 'lacto ovo vegetarian', 'vegan'],
			aggregateLikes: 11,
			readyInMinutes: 45,
		},
		{
			id: 662670,
			image: 'https://spoonacular.com/recipeImages/662670-312x231.jpg',
			title: 'Swiss Chard Wraps',
			diets: ['gluten free', 'dairy free', 'paleolithic', 'lacto ovo vegetarian', 'primal', 'vegan'],
			aggregateLikes: 14,
			readyInMinutes: 45,
		},
		{
			id: 640062,
			image: 'https://spoonacular.com/recipeImages/640062-312x231.jpg',
			title: 'Corn Avocado Salsa',
			diets: ['gluten free', 'dairy free', 'lacto ovo vegetarian', 'vegan'],
			aggregateLikes: 44,
			readyInMinutes: 25,
		},
		{
			id: 715421,
			image: 'https://spoonacular.com/recipeImages/715421-312x231.jpg',
			title: 'Cheesy Chicken Enchilada Quinoa Casserole',
			diets: ['gluten free'],
			aggregateLikes: 9912,
			readyInMinutes: 30,
		},
		{
			id: 648320,
			image: 'https://spoonacular.com/recipeImages/648320-312x231.jpg',
			title: 'Jade Buddha Salmon Tartare',
			diets: ['gluten free', 'dairy free', 'paleolithic', 'primal', 'pescatarian'],
			aggregateLikes: 28,
			readyInMinutes: 45,
		},
		{
			id: 716432,
			image: 'https://spoonacular.com/recipeImages/716432-312x231.jpg',
			title: 'Finger Foods: Frittata Muffins',
			diets: ['gluten free', 'lacto ovo vegetarian', 'primal', 'ketogenic'],
			aggregateLikes: 601,
			readyInMinutes: 45,
		},
		{
			id: 798400,
			image: 'https://spoonacular.com/recipeImages/798400-312x231.jpg',
			title: 'Spicy Black-Eyed Pea Curry with Swiss Chard and Roasted Eggplant',
			diets: ['gluten free', 'dairy free', 'lacto ovo vegetarian', 'vegan'],
			aggregateLikes: 32,
			readyInMinutes: 45,
		},
		{
			id: 782600,
			image: 'https://spoonacular.com/recipeImages/782600-312x231.jpg',
			title: 'Quinoa Salad with Vegetables and Cashews',
			diets: ['gluten free', 'dairy free', 'lacto ovo vegetarian', 'vegan'],
			aggregateLikes: 88,
			readyInMinutes: 45,
		},
		{
			id: 652417,
			image: 'https://spoonacular.com/recipeImages/652417-312x231.jpg',
			title: 'Moroccan chickpea and lentil stew',
			diets: ['dairy free', 'lacto ovo vegetarian', 'vegan'],
			aggregateLikes: 11,
			readyInMinutes: 30,
		},
		{
			id: 639535,
			image: 'https://spoonacular.com/recipeImages/639535-312x231.jpg',
			title: 'Citrusy Pecan Garbanzo Couscous: A Salad For Cold Weather',
			diets: ['dairy free', 'lacto ovo vegetarian', 'vegan'],
			aggregateLikes: 41,
			readyInMinutes: 45,
		},
		{
			id: 729366,
			image: 'https://spoonacular.com/recipeImages/729366-312x231.jpg',
			title: 'Plantain Salad',
			diets: ['gluten free', 'pescatarian'],
			aggregateLikes: 126,
			readyInMinutes: 45,
		},
		{
			id: 661925,
			image: 'https://spoonacular.com/recipeImages/661925-312x231.jpg',
			title: 'Strawberry-Mango Quinoa Salad',
			diets: ['gluten free', 'lacto ovo vegetarian'],
			aggregateLikes: 41,
			readyInMinutes: 45,
		},
		{
			id: 794538,
			image: 'https://spoonacular.com/recipeImages/794538-312x231.jpg',
			title: 'Almond Joy Protein Shake',
			diets: ['gluten free', 'dairy free', 'fodmap friendly', 'ketogenic'],
			aggregateLikes: 22,
			readyInMinutes: 45,
		},
		{
			id: 649931,
			image: 'https://spoonacular.com/recipeImages/649931-312x231.jpg',
			title: 'Lentil Salad With Vegetables',
			diets: ['gluten free', 'dairy free', 'lacto ovo vegetarian', 'vegan'],
			aggregateLikes: 7,
			readyInMinutes: 45,
		},
		{
			id: 636787,
			image: 'https://spoonacular.com/recipeImages/636787-312x231.jpg',
			title: 'Caldo Verde - Portuguese Kale Soup',
			diets: ['gluten free', 'dairy free', 'whole 30'],
			aggregateLikes: 13,
			readyInMinutes: 45,
		},
		{
			id: 641975,
			image: 'https://spoonacular.com/recipeImages/641975-312x231.jpg',
			title: 'Easy Ginger Beef Broccoli',
			diets: ['dairy free'],
			aggregateLikes: 23,
			readyInMinutes: 45,
		},
		{
			id: 652423,
			image: 'https://spoonacular.com/recipeImages/652423-312x231.jpg',
			title: 'Moroccan Couscous and Chickpea Salad',
			diets: ['dairy free', 'lacto ovo vegetarian', 'vegan'],
			aggregateLikes: 72,
			readyInMinutes: 45,
		},
		{
			id: 715447,
			image: 'https://spoonacular.com/recipeImages/715447-312x231.jpg',
			title: 'Easy Vegetable Beef Soup',
			diets: ['dairy free'],
			aggregateLikes: 130,
			readyInMinutes: 150,
		},
		{
			id: 716311,
			image: 'https://spoonacular.com/recipeImages/716311-312x231.jpg',
			title: 'Mango Fried Rice',
			diets: ['gluten free', 'dairy free'],
			aggregateLikes: 262,
			readyInMinutes: 45,
		},
		{
			id: 715543,
			image: 'https://spoonacular.com/recipeImages/715543-312x231.jpg',
			title: 'Homemade Guacamole',
			diets: ['gluten free', 'dairy free', 'paleolithic', 'lacto ovo vegetarian', 'primal', 'whole 30', 'vegan'],
			aggregateLikes: 1330,
			readyInMinutes: 45,
		},
		{
			id: 157344,
			image: 'https://spoonacular.com/recipeImages/157344-312x231.jpg',
			title: 'Spicy Salad with Kidney Beans, Cheddar, and Nuts',
			diets: ['gluten free', 'lacto ovo vegetarian'],
			aggregateLikes: 6,
			readyInMinutes: 10,
		},
		{
			id: 658509,
			image: 'https://spoonacular.com/recipeImages/658509-312x231.jpg',
			title: 'Roasted Broccoli with Lemon and Garlic',
			diets: ['gluten free', 'dairy free', 'paleolithic', 'lacto ovo vegetarian', 'primal', 'whole 30', 'vegan'],
			aggregateLikes: 11,
			readyInMinutes: 45,
		},
		{
			id: 716195,
			image: 'https://spoonacular.com/recipeImages/716195-312x231.jpg',
			title: 'Spicy Indian-Style Hummus',
			diets: ['gluten free', 'dairy free', 'lacto ovo vegetarian', 'vegan'],
			aggregateLikes: 161,
			readyInMinutes: 45,
		},
		{
			id: 716361,
			image: 'https://spoonacular.com/recipeImages/716361-312x231.jpg',
			title: 'Stir Fried Quinoa, Brown Rice and Chicken Breast',
			diets: ['gluten free'],
			aggregateLikes: 39,
			readyInMinutes: 45,
		},
		{
			id: 765011,
			image: 'https://spoonacular.com/recipeImages/765011-312x231.jpg',
			title: 'Snap Pea and Green Bean Salad with Arugula Pesto',
			diets: ['gluten free', 'lacto ovo vegetarian', 'primal'],
			aggregateLikes: 127,
			readyInMinutes: 45,
		},
		{
			id: 660228,
			image: 'https://spoonacular.com/recipeImages/660228-312x231.jpg',
			title: 'Skinny Kale Basil Pesto',
			diets: ['gluten free'],
			aggregateLikes: 10,
			readyInMinutes: 45,
		},
	]; */
	const [order, setOrder] = useState('');

	const [page, setPage] = useState(1);
	const [recipesPage, setRecipesPage] = useState(9);

	const alphabeticalOptions = [
		{
			name: '',
			code: '',
			defult: true,
		},
		{
			name: 'Ascendant',
			code: 'ztoa',
		},
		{
			name: 'Descendant',
			code: 'atoz',
		},
	];
	const scoreOptions = [
		{
			name: '',
			code: '',
			defult: true,
		},
		{
			name: 'From Min to Max',
			code: 'asc',
		},
		{
			name: 'From Max to Min',
			code: 'desc',
		},
	];
	const dietsOptions = [
		{
			name: '',
			code: '',
			defult: true,
		},
		{
			name: 'Gluten Free',
			code: 'gluten free',
		},
		{
			name: 'Keto',
			code: 'ketogenic',
		},
		{
			name: 'Vegetarian',
			code: 'vegetarian',
		},
		{
			name: 'Lacto-Vegetarian',
			code: 'lacto vegetarian',
		},
		{
			name: 'Ovo-Vegetarian',
			code: 'ovo vegetarian',
		},
		{
			name: 'Lacto-Ovo-Vegetarian',
			code: 'lacto ovo vegetarian',
		},
		{
			name: 'Vegan',
			code: 'vegan',
		},
		{
			name: 'Pescetarian',
			code: 'pescetarian',
		},
		{
			name: 'Paleo',
			code: 'paleolithic',
		},
		{
			name: 'Primal',
			code: 'primal',
		},
		{
			name: 'Low FODMAP',
			code: 'low fodmap',
		},
		{
			name: 'Whole30',
			code: 'whole 30',
		},
		{
			name: 'Dairy Free',
			code: 'dairy free',
		},
	];

	const quantityRecipesPage = page * recipesPage;
	const firstRecipePage = quantityRecipesPage - recipesPage;
	const showRecipesPage = allRecipes.slice(firstRecipePage, quantityRecipesPage);

	const paged = function (pageNumber) {
		setPage(pageNumber);
	};

	useEffect(() => {
		dispatch(getRecipes());
	}, [dispatch]);

	function handleClick(e) {
		e.preventDefault();
		dispatch(getRecipes());
		setPage(1);
	}

	function handleDietTypeFilter(e) {
		e.preventDefault();
		dispatch(dietTypeFilter(e.target.value));
		setPage(1);
	}

	function handleAlphabeticalSort(e) {
		e.preventDefault();
		dispatch(aplhabeticalSort(e.target.value));
		setPage(1);
		setOrder(`Order ${e.target.value}`);
	}

	function handleScoreSort(e) {
		e.preventDefault();
		dispatch(scoreSort(e.target.value));
		setPage(1);
		setOrder(`Order ${e.target.value}`);
	}

	return (
		<div className="all-recipes-container">
			<h1 className="initialMsg">Recipes</h1>
			<p style={{ fontWeight: 400, marginTop: 10 }}>Look through your favorites plates.</p>
			<SearchBar />
			<div className="filter-selects-container">
				<SelectComponent
					label={'Alphabetical'}
					options={alphabeticalOptions}
					onChange={handleAlphabeticalSort}
					filter="alphabetical"
					key={'select-filter-alphabetical'}
				/>
				<SelectComponent
					label={'Score'}
					options={scoreOptions}
					onChange={handleScoreSort}
					filter="numerical"
					key={'select-filter-score'}
				/>
				<SelectComponent
					label={'Diet'}
					options={dietsOptions}
					onChange={handleDietTypeFilter}
					filter="diets"
					key={'select-filter-diets'}
				/>
			</div>

			<div></div>
			<Pagination recipesPage={recipesPage} allRecipes={allRecipes.length} paged={paged} currentPage={page} />
			<div className="recipes-container">
				{showRecipesPage?.map((e) => {
					console.log(e);
					return (
						<Recipe
							id={e.id}
							image={
								e.image
									? e.image
									: 'https://images.unsplash.com/photo-1635321593217-40050ad13c74?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1748&q=80'
							}
							title={e.title}
							name={e.name}
							dietTypes={e.diets}
							aggregateLikes={e.aggregateLikes}
							readyInMinutes={e.readyInMinutes}
							cheap={e.cheap}
							key={prevId++}
						/>
					);
				})}
			</div>

			<Pagination
				recipesPage={recipesPage}
				allRecipes={allRecipes.length}
				paged={paged}
				currentPage={page}
				style={{ paddingBottom: 150 }}
			/>
		</div>
	);
}
