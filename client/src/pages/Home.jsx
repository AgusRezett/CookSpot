/* eslint-disable no-unused-vars */

import React from 'react';
import Paged from '../components/Paged';
import SearchBar from '../components/SearchBar';

//Styles
import '../styles/Home.css';

// Components
import { Link } from 'react-router-dom';
import Recipe from '../components/Recipe';
import PrincipalRecipe from '../components/PrincipalRecipe';
import { Carousel } from 'primereact/carousel';

// Redux
import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
	getRecipes,
	getRandomPicks,
	getVeganRecipes,
	getAmericanRecipes,
	getCaribbeanRecipes,
	getItalianRecipes,
	getJapaneseRecipes,
	dietTypeFilter,
	aplhabeticalSort,
	scoreSort,
} from '../actions';

let prevId = 1;

export default function Home() {
	const dispatch = useDispatch();
	const allRecipes = useSelector((state) => state.recipes);
	//const randomPicks = useSelector((state) => state.randomPicks);
	//const veganRecipes = useSelector((state) => state.homeCarrouselRecipes);
	const homeCarrouselRecipes = useSelector((state) => state.homeCarrouselRecipes);

	const randomPicks = [
		{
			type: 'breakfast',
			vegetarian: false,
			vegan: false,
			glutenFree: false,
			dairyFree: false,
			veryHealthy: false,
			cheap: false,
			veryPopular: false,
			sustainable: false,
			lowFodmap: false,
			weightWatcherSmartPoints: 6,
			gaps: 'no',
			preparationMinutes: -1,
			cookingMinutes: -1,
			aggregateLikes: 4,
			healthScore: 1,
			creditsText: 'Foodista.com – The Cooking Encyclopedia Everyone Can Edit',
			license: 'CC BY 3.0',
			sourceName: 'Foodista',
			pricePerServing: 72.63,
			extendedIngredients: [
				[Object],
				[Object],
				[Object],
				[Object],
				[Object],
				[Object],
				[Object],
				[Object],
				[Object],
				[Object],
				[Object],
			],
			id: 664359,
			title: 'Veal Piccatas',
			readyInMinutes: 45,
			servings: 4,
			sourceUrl: 'https://www.foodista.com/recipe/4Z5SV5FY/veal-piccatas',
			image: 'https://spoonacular.com/recipeImages/664359-556x370.jpg',
			imageType: 'jpg',
			summary: `The recipe Veal Piccatas can be made <b>in around 45 minutes</b>. For <b>73 cents per serving</b>, this recipe <b>covers 6%</b> of your daily requirements of vitamins and minerals. One portion of this dish contains roughly <b>2g of protein</b>, <b>13g of fat</b>, and a total of <b>160 calories</b>. This recipe serves 4. It works well as a hor d'oeuvre. Head to the store and pick up veal scaloppine, capers, parsley, and a few other things to make it today. Only a few people made this recipe, and 4 would say it hit the spot. It is brought to you by Foodista. With a spoonacular <b>score 
	  of 11%</b>, this dish is not so super. If you like this recipe, take a look at these similar recipes: <a href="https://spoonacular.com/recipes/veal-giuseppe-754816">Veal Giuseppe</a>, <a href="https://spoonacular.com/recipes/veal-scallopini-415460">Veal Scallopini</a>, and <a href="https://spoonacular.com/recipes/veal-saltimbocca-754876">Veal Saltimbocca</a>.`,
			cuisines: [],
			dishTypes: ['antipasti', 'starter', 'snack', 'appetizer', 'antipasto', "hor d'oeuvre"],
			diets: [],
			occasions: [],
			instructions:
				'Season veal scaloppine with salt and pepper, then dust with flour. In a skillet add the butter and the vegetable oil, and heat over medium-high.\n' +
				'Saut the scaloppine 2-3 minutes on one side. Flip the scaloppine over and saut the other side 1-2 minutes with the pan covered. Transfer the scaloppine to a warmed platter; pour off the fat from the pan.\n' +
				'Deglaze pan with wine and add minced garlic. Cook until garlic is slightly brown and liquid is nearly evaporated, about 2 minutes.\n' +
				'Add broth, lemon juice and capers. Return veal scaloppine to pan and cook on each side for 1 minute. Transfer to a warm plates.\n' +
				'Finish sauce with butter and lemons. Once butter melts, pour sauce over veal.\n' +
				'Garnish with chopped fresh parsley and serve.',
			analyzedInstructions: [[Object]],
			originalId: null,
			spoonacularSourceUrl: 'https://spoonacular.com/veal-piccatas-664359',
		},
		{
			type: 'Meal',
			vegetarian: false,
			vegan: false,
			glutenFree: true,
			dairyFree: true,
			veryHealthy: false,
			cheap: false,
			veryPopular: false,
			sustainable: false,
			lowFodmap: false,
			weightWatcherSmartPoints: 5,
			gaps: 'no',
			preparationMinutes: -1,
			cookingMinutes: -1,
			aggregateLikes: 4,
			healthScore: 12,
			creditsText: 'foodista.com',
			sourceName: 'foodista.com',
			pricePerServing: 147.42,
			extendedIngredients: [[Object], [Object], [Object], [Object], [Object], [Object], [Object], [Object]],
			id: 655771,
			title: 'Persian Rhubarb Stew (Khoresh Rivas)',
			readyInMinutes: 45,
			servings: 6,
			sourceUrl: 'http://www.foodista.com/recipe/35KFKR47/persian-rhubarb-stew-khoresh-rivas',
			image: 'https://spoonacular.com/recipeImages/655771-556x370.jpg',
			imageType: 'jpg',
			summary: `Persian Rhubarb Stew (Khoresh Rivas) could be just the <b>gluten free and dairy free</b> recipe you've been looking for. For <b>$1.47 per serving</b>, this recipe <b>covers 16%</b> of your daily requirements of vitamins and minerals. One serving contains <b>236 calories</b>, <b>24g of protein</b>, and <b>11g of fat</b>. This recipe serves 6. Not a lot of people really liked this main course. 4 people have tried and liked this recipe. From preparation to the plate, this recipe takes roughly <b>45 minutes</b>. It is perfect for <b>Mother's Day</b>. If you have lamb stew meat, sugar or, 
	  salt and pepper, and a few other ingredients on hand, you can make it. It is brought to you by Foodista. Overall, this recipe earns a <b>solid spoonacular score of 56%</b>. <a href="https://spoonacular.com/recipes/persian-lamb-stew-1328503">Persian Lamb Stew</a>, <a href="https://spoonacular.com/recipes/persian-lamb-stew-15762">Persian Lamb Stew</a>, and <a href="https://spoonacular.com/recipes/persian-chicken-stew-330791">Persian Chicken Stew</a> are very similar to this recipe.`,
			cuisines: [],
			dishTypes: ['lunch', 'soup', 'main course', 'main dish', 'dinner'],
			diets: ['gluten free', 'dairy free'],
			occasions: ['spring', "mother's day", 'fall', 'winter'],
			instructions:
				'<ol><li>In a pan, heat 2-3 tablespoons of oil and saute chopped onions until translucent. Add turmeric, stir, add the meat and brown on all sides. Add salt and pepper to taste. Pour enough water to cover the meat. Cover and cook for an hour on medium to low heat, longer if it is not yet tender.</li><li>In a medium-sized frying pan, saute the 	  chopped parsley and mint together in 2 tablespoons of oil over medium heat.Combine the parsley and mint mixture with the 	  meat sauce half way through the cooking. Add water if necessary.</li><li>Lightly saute sliced rhubarbs in 2 tablespoons of olive oil for 2-3 minutes on medium heat. Add the rhubarb to the pot, lower the heat to a gentle simmer and cook for an additional 15 minutes.</li><li>Taste and add 2-3 tablespoons of sugar or to taste, gently stir and cook for an additional 5 minutes.</li><li>Serve warm with basmati rice.</li></ol>',
			analyzedInstructions: [[Object]],
			originalId: null,
			spoonacularSourceUrl: 'https://spoonacular.com/persian-rhubarb-stew-khoresh-rivas-655771',
		},
		{
			type: 'lunch',
			vegetarian: false,
			vegan: false,
			glutenFree: false,
			dairyFree: false,
			veryHealthy: false,
			cheap: false,
			veryPopular: false,
			sustainable: false,
			lowFodmap: false,
			weightWatcherSmartPoints: 23,
			gaps: 'no',
			preparationMinutes: -1,
			cookingMinutes: -1,
			aggregateLikes: 7,
			healthScore: 1,
			creditsText: 'Foodista.com – The Cooking Encyclopedia Everyone Can Edit',
			license: 'CC BY 3.0',
			sourceName: 'Foodista',
			pricePerServing: 96.88,
			extendedIngredients: [[Object], [Object], [Object], [Object], [Object], [Object], [Object], [Object]],
			id: 642003,
			title: 'Easy Key Lime Pie',
			readyInMinutes: 45,
			servings: 8,
			sourceUrl: 'http://www.foodista.com/recipe/H7JT66DF/easy-key-lime-pie',
			image: 'https://spoonacular.com/recipeImages/642003-556x370.jpg',
			imageType: 'jpg',
			summary:
				'Easy Key Lime Pie takes about <b>45 minutes</b> from beginning to end. One serving contains <b>481 calories</b>, <b>6g of protein</b>, and <b>32g of fat</b>. This recipe serves 8. For <b>97 cents per serving</b>, this recipe <b>covers 7%</b> of your daily requirements of vitamins and minerals. It is brought to you by Foodista. Only a few people really liked this dessert. 7 people found this recipe to be scrumptious and satisfying. Head to the store and pick up butter, whipped cream, graham crackers, and a few other things to make it today. With a spoonacular <b>score of 22%</b>, this dish is rather bad. If you like this recipe, take a look at these similar recipes: <a href="https://spoonacular.com/recipes/easy-key-lime-pie-i-607222">Easy Key Lime Pie I</a>, <a href="https://spoonacular.com/recipes/easy-key-lime-pie-69916">Easy Key Lime Pie</a>, and <a href="https://spoonacular.com/recipes/easy-key-lime-pie-69910">Easy Key Lime Pie</a>.',
			cuisines: [],
			dishTypes: ['dessert'],
			diets: [],
			occasions: [],
			instructions:
				'<ol><li>Crust: melt butter and stir in 1/4 cup sugar. Add crushed crackers and toss to mix well. Spread evenly into a 9-inch pie plate and press onto bottom and sides. Chill 1 hour or until firm. Can also bake in a 375 degree oven for 4-5 minutes and then cool before filling.</li><li>In a medium bowl, beat egg yolks with a whisk or a fork. gradually whisk/stir in condensed milk. Add lime juice, water, and a few drops of green food coloring if desired. Mixture will thicken as you stir.</li><li>Spoon filling into the crust. Bake in a 350 degree oven for 25 minutes and cool for 1 hour, then chill for 3-4 hours. Top with whipped cream and serve.</li></ol>',
			analyzedInstructions: [[Object]],
			originalId: null,
			spoonacularSourceUrl: 'https://spoonacular.com/easy-key-lime-pie-642003',
		},
		{
			type: 'snack',
			vegetarian: true,
			vegan: false,
			glutenFree: true,
			dairyFree: false,
			veryHealthy: false,
			cheap: false,
			veryPopular: false,
			sustainable: false,
			lowFodmap: false,
			weightWatcherSmartPoints: 11,
			gaps: 'no',
			preparationMinutes: -1,
			cookingMinutes: -1,
			aggregateLikes: 2,
			healthScore: 6,
			creditsText: 'Foodista.com – The Cooking Encyclopedia Everyone Can Edit',
			license: 'CC BY 3.0',
			sourceName: 'Foodista',
			pricePerServing: 88.86,
			extendedIngredients: [[Object], [Object], [Object], [Object], [Object], [Object]],
			id: 639778,
			title: 'Coconut Israeli Couscous Studded With Pomegranate',
			readyInMinutes: 45,
			servings: 4,
			sourceUrl: 'https://www.foodista.com/recipe/M54ZMLKL/coconut-israeli-couscous-studded-with-pomegranate',
			image: 'https://spoonacular.com/recipeImages/639778-556x370.jpg',
			imageType: 'jpg',
			summary: `Coconut Israeli Couscous Studded With Pomegranate is a side dish that serves 4. One serving contains <b>216 calories</b>, <b>4g of protein</b>, and <b>17g of fat</b>. For <b>89 cents per serving</b>, this recipe <b>covers 9%</b> of your daily requirements of vitamins and minerals. 2 people have made this recipe and would make it again. Head to the store and pick up milk, sugar, pods cardamom, and a few other things to make it today. It is a good option if you're following a <b>gluten free and lacto ovo vegetarian</b> diet. From preparation to the plate, this recipe takes roughly <b>45 minutes</b>. It is brought to you by Foodista. All things considered, we decided this recipe <b>deserves a spoonacular score of 41%</b>. This score is pretty good. Try <a href="https://spoonacular.com/recipes/coconut-israeli-couscous-studded-with-pomegranate-1348513">Coconut Israeli Couscous Studded With Pomegranate</a>, <a href="https://spoonacular.com/recipes/pan-seared-airline-chicken-breasts-with-israeli-couscous-pomegranate-and-haricot-verts-747757">Pan-Seared Airline Chicken Breasts with Israeli Couscous, Pomegranate and Haricot Verts</a>, and <a href="https://spoonacular.com/recipes/breakfast-israeli-couscous-with-apricots-almonds-coconut-527018">Breakfast Israeli Couscous (With Apricots, Almonds & Coconut)</a> for similar recipes.`,
			cuisines: [],
			dishTypes: ['side dish'],
			diets: ['gluten free', 'lacto ovo vegetarian'],
			occasions: [],
			instructions:
				'Smash the cardamom pods open with the flat side of your knife (thats right, like a garlic clove).\n' +
				'Combine the milk, coconut milk, and cardamom in a saucepan and place over low heat. Bring to just below a boil, stirring every once in awhile. It will be a little foamy.\n' +
				'Strain the cardamom pods out since the shells are not so good to eat.\n' +
				'Add the couscous and simmer on low for 10-12 minutes, until all the liquid absorbs. The couscous should be tender but still with some chew to it.\n' +
				'Stir in the cinnamon, sugar, and pomegranate seeds. I used the seeds from half a pomegranate. If you dont have pomegranate seeds, or dont like them, try substituting raisins or dried cranberries.',
			analyzedInstructions: [],
			originalId: null,
			spoonacularSourceUrl: 'https://spoonacular.com/coconut-israeli-couscous-studded-with-pomegranate-639778',
		},
		{
			type: 'dinner',
			vegetarian: true,
			vegan: false,
			glutenFree: false,
			dairyFree: false,
			veryHealthy: false,
			cheap: false,
			veryPopular: false,
			sustainable: false,
			lowFodmap: false,
			weightWatcherSmartPoints: 17,
			gaps: 'no',
			preparationMinutes: -1,
			cookingMinutes: -1,
			aggregateLikes: 2,
			healthScore: 0,
			creditsText: 'Foodista.com – The Cooking Encyclopedia Everyone Can Edit',
			license: 'CC BY 3.0',
			sourceName: 'Foodista',
			pricePerServing: 64.17,
			extendedIngredients: [
				[Object],
				[Object],
				[Object],
				[Object],
				[Object],
				[Object],
				[Object],
				[Object],
				[Object],
				[Object],
			],
			id: 646361,
			title: 'Hawaiian Cookie Tarts',
			readyInMinutes: 75,
			servings: 12,
			sourceUrl: 'http://www.foodista.com/recipe/3PMSLV76/hawaiian-cookie-tarts',
			image: 'https://spoonacular.com/recipeImages/646361-556x370.jpg',
			imageType: 'jpg',
			summary:
				'Hawaiian Cookie Tarts is a <b>lacto ovo vegetarian</b> dessert. One serving contains <b>362 calories</b>, <b>3g of protein</b>, and <b>10g of fat</b>. This recipe serves 12. For <b>64 cents per serving</b>, this recipe <b>covers 4%</b> of your daily requirements of vitamins and minerals. 2 people have tried and liked this recipe. It is brought to you by Foodista. A mixture of ap flour, pineapple preserves, granulated sugar, and a handful of other ingredients are all it takes to make this recipe so delicious. From preparation to the plate, this recipe takes roughly <b>1 hour and 15 minutes</b>. Overall, this recipe earns a <b>not so awesome spoonacular score of 15%</b>. Try <a href="https://spoonacular.com/recipes/hawaiian-cookie-balls-545954">Hawaiian Cookie Balls</a>, <a href="https://spoonacular.com/recipes/fruity-cookie-tarts-408700">Fruity Cookie Tarts</a>, and <a href="https://spoonacular.com/recipes/linzer-cookie-tarts-177953">Linzer Cookie Tarts</a> for similar recipes.',
			cuisines: [],
			dishTypes: ['dessert'],
			diets: ['lacto ovo vegetarian'],
			occasions: [],
			instructions:
				'<ol><li>Pre heat oven to 350 degrees F. In a large bowl combine flour, powdered sugar, and cornstarch. Using a spoon, mix in apple sauce and vanilla extract until a soft dough forms.</li><li>Shape dough into 1-inch balls and place in prepared muffin pans. Press dough in bottom and up the side of each muffin cup. Bake the dough-lined cup for about 8-10 minutes. Remove the muffin pan from the oven and let rest for a few minutes. Spoon 1 teaspoon of preserves into each muffin cup.</li><li>In a small bowl mix together sugar, egg and coconut with a fork until well blended. Spoon a teaspoon of coconut mixture over preserves in each cup.</li><li>Bake 23 -33 minutes or until cookie crusts are lightly golden brown. Cool in pans on a cooling rack for 30 minutes.</li><li>Gently remove each cookie tart, sprinkle with confectioners sugar and serve!</li></ol>',
			analyzedInstructions: [[Object]],
			originalId: null,
			spoonacularSourceUrl: 'https://spoonacular.com/hawaiian-cookie-tarts-646361',
		},
	];

	useEffect(() => {
		//dispatch(getRecipes(), getRandomPicks());
		//dispatch(getRecipes());
		//dispatch(getRandomPicks());
		//dispatch(getVeganRecipes(10));
		//dispatch(getAmericanRecipes(10));
		//dispatch(getCaribbeanRecipes(10));
		//dispatch(getItalianRecipes(10));
		//dispatch(getJapaneseRecipes(10));
	}, [dispatch]);

	const weekday = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
	const d = new Date();
	let day = weekday[d.getDay()];

	return (
		<div className="home">
			<div className="home-todays-picks-title-container">
				<h2>Today's Menú</h2>
				<div className="todays-recipes-divisor"></div>
				{JSON.stringify(homeCarrouselRecipes)}
				<p>our {day.toLocaleLowerCase()} balanced picks...</p>
			</div>
			<div className="todays-recipes-container">
				{randomPicks?.map((recipe, index) => {
					return <PrincipalRecipe key={recipe.id} data={recipe} index={index + 1} />;
				})}
			</div>
			{/* <div>
				<button className="refreshButton" onClick={handleClick}>
					Refresh recipes
				</button>
				<Link to="/recipe">
					<button className="addButton">Add new recipe</button>
				</Link>
			</div> */}

			<div className="allrecipes">
				{allRecipes?.map((e) => {
					return (
						<div className="eachRecipe" key={prevId++}>
							<Link className="linkRecetas" to={`home/${e.id}`}>
								<Recipe
									image={
										e.image
											? e.image
											: 'https://images.unsplash.com/photo-1635321593217-40050ad13c74?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1748&q=80'
									}
									name={e.name}
									dietTypes={e.dietTypes}
								/>
							</Link>
						</div>
					);
				})}
			</div>
		</div>
	);
}
