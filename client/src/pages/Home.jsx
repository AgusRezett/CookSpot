/* eslint-disable no-unused-vars */

import React from 'react';

//Styles
import '../styles/Home.css';

// Components
import PrincipalRecipe from '../components/PrincipalRecipe';
import { Carousel } from '../components/Carousel';

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

export default function Home() {
	const dispatch = useDispatch();
	const allRecipes = useSelector((state) => state.recipes);
	//const randomPicks = useSelector((state) => state.randomPicks);
	//const veganRecipes = useSelector((state) => state.homeCarouselRecipes.veganRecipes);
	//const americanRecipes = useSelector((state) => state.homeCarouselRecipes.americanRecipes);
	//const caribbeanganRecipes = useSelector((state) => state.homeCarouselRecipes.caribbeanRecipes);
	//const italianRecipes = useSelector((state) => state.homeCarouselRecipes.italianRecipes);
	//const japaneseRecipes = useSelector((state) => state.homeCarouselRecipes.japaneseRecipes);

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

	const veganRecipes = [
		{
			id: 662968,
			title: 'Tempered Spicy Potatoes',
			image: 'https://spoonacular.com/recipeImages/662968-556x370.jpg',
			summary:
				'Need a <b>gluten free, dairy free, lacto ovo vegetarian, and whole 30 side dish</b>? Tempered Spicy Potatoes could be a great recipe to try. For <b>$1.86 per serving</b>, this recipe <b>covers 21%</b> of your daily requirements of vitamins and minerals. One serving contains <b>172 calories</b>, <b>5g of protein</b>, and <b>2g of fat</b>. This recipe serves 4. It is brought to you by Foodista. Head to the store and pick up chilli flakes, salt, par potatoes, and a few other things to make it today. 3 people have made this recipe and would make it again. From preparation to the plate, this recipe takes around <b>45 minutes</b>. Taking all factors into account, this recipe <b>earns a spoonacular score of 94%</b>, which is amazing. Similar recipes include <a href="https://spoonacular.com/recipes/butter-dal-fry-tempered-yellow-lentils-33618">Butter Dal Fry - Tempered Yellow Lentils</a>, <a href="https://spoonacular.com/recipes/spicy-potatoes-43778">Spicy Potatoes</a>, and <a href="https://spoonacular.com/recipes/spicy-potatoes-218811">Spicy potatoes</a>.',
			cuisins: [],
			dishTypes: ['side dish'],
			readyInMinutes: 45,
			aggregateLikes: 3,
		},
		{
			id: 665000,
			title: 'Watercress Salad With Miso-Lime Dressing',
			image: 'https://spoonacular.com/recipeImages/665000-556x370.jpg',
			summary:
				'If you have about <b>45 minutes</b> to spend in the kitchen, Watercress Salad With Miso-Lime Dressing might be a tremendous <b>gluten free, dairy free, lacto ovo vegetarian, and vegan</b> recipe to try. One serving contains <b>111 calories</b>, <b>5g of protein</b>, and <b>7g of fat</b>. This recipe serves 4. For <b>$1.78 per serving</b>, this recipe <b>covers 18%</b> of your daily requirements of vitamins and minerals. 2 people were impressed by this recipe. Head to the store and pick up miso, mung bean sprouts, sesame oil, and a few other things to make it today. Only a few people really liked this hor d\'oeuvre. It is brought to you by Foodista. All things considered, we decided this recipe <b>deserves a spoonacular score of 91%</b>. This score is great. If you like this recipe, you might also like recipes such as <a href="https://spoonacular.com/recipes/watercress-salad-with-lime-dressing-343037">Watercress Salad with Lime Dressing</a>, <a href="https://spoonacular.com/recipes/salmon-avocado-salad-with-miso-lime-dressing-1256199">Salmon & Avocado Salad with Miso Lime Dressing</a>, and <a href="https://spoonacular.com/recipes/salmon-avocado-salad-with-miso-lime-dressing-1215153">Salmon & Avocado Salad with Miso Lime Dressing</a>.',
			cuisins: [],
			dishTypes: [
				'side dish',
				'antipasti',
				'salad',
				'starter',
				'snack',
				'appetizer',
				'antipasto',
				"hor d'oeuvre",
			],
			readyInMinutes: 45,
			aggregateLikes: 2,
		},
		{
			id: 664473,
			title: 'Vegan Peanut Butter Chocolate Fudge',
			image: 'https://spoonacular.com/recipeImages/664473-556x370.jpg',
			summary:
				'Vegan Peanut Butter Chocolate Fudge takes about <b>45 minutes</b> from beginning to end. This dessert has <b>158 calories</b>, <b>2g of protein</b>, and <b>9g of fat</b> per serving. This recipe serves 6. For <b>56 cents per serving</b>, this recipe <b>covers 4%</b> of your daily requirements of vitamins and minerals. This recipe from Foodista has 9 fans. Head to the store and pick up coconut butter, peanut butter, bananas, and a few other things to make it today. It is a good option if you\'re following a <b>gluten free, dairy free, lacto ovo vegetarian, and vegan</b> diet. With a spoonacular <b>score of 33%</b>, this dish is rather bad. If you like this recipe, take a look at these similar recipes: <a href="https://spoonacular.com/recipes/4-ingredient-chocolate-peanut-butter-freezer-fudge-vegan-gluten-free-794297">4-Ingredient Chocolate & Peanut Butter Freezer Fudge (vegan & gluten free!)</a>, <a href="https://spoonacular.com/recipes/easy-chocolate-peanut-butter-fudge-refined-sugar-free-vegan-883118">Easy Chocolate Peanut Butter Fudge (Refined Sugar Free + Vegan)</a>, and <a href="https://spoonacular.com/recipes/skinny-chocolate-peanut-butter-graham-fudge-pops-vegan-gluten-free-520244">Skinny Chocolate Peanut Butter Graham Fudge Pops (vegan, gluten-free*)</a>.',
			cuisins: [],
			dishTypes: ['dessert'],
			readyInMinutes: 45,
			aggregateLikes: 9,
		},
		{
			id: 637162,
			title: 'Carrot and Cabbage Salad With Coriander+cumin Dry Rub',
			image: 'https://spoonacular.com/recipeImages/637162-556x370.jpg',
			summary:
				'If you want to add more <b>gluten free, dairy free, paleolithic, and lacto ovo vegetarian</b> recipes to your repertoire, Carrot and Cabbage Salad With Coriander+cumin Dry Rub might be a recipe you should try. This recipe serves 1. One portion of this dish contains about <b>6g of protein</b>, <b>10g of fat</b>, and a total of <b>222 calories</b>. For <b>$1.4 per serving</b>, this recipe <b>covers 27%</b> of your daily requirements of vitamins and minerals. 4 people have made this recipe and would make it again. Head to the store and pick up sunflower seeds, cumin seed powder, juice of lime, and a few other things to make it today. It works well as an affordable hor d\'oeuvre. From preparation to the plate, this recipe takes roughly <b>25 minutes</b>. It is brought to you by Foodista. Overall, this recipe earns a <b>super spoonacular score of 96%</b>. If you like this recipe, you might also like recipes such as <a href="https://spoonacular.com/recipes/carrot-and-cabbage-salad-with-coriandercumin-dry-rub-1230725">Carrot and Cabbage Salad With Coriander+cumin Dry Rub</a>, <a href="https://spoonacular.com/recipes/carrot-and-cabbage-salad-with-coriandercumin-dry-rub-1350633">Carrot and Cabbage Salad With Coriander+cumin Dry Rub</a>, and <a href="https://spoonacular.com/recipes/carrot-and-cabbage-salad-with-coriandercumin-dry-rub-1253443">Carrot and Cabbage Salad With Coriander+cumin Dry Rub</a>.',
			cuisins: [],
			dishTypes: [
				'side dish',
				'antipasti',
				'salad',
				'starter',
				'snack',
				'appetizer',
				'antipasto',
				"hor d'oeuvre",
			],
			readyInMinutes: 25,
			aggregateLikes: 4,
		},
		{
			id: 642346,
			title: 'Egyptain Cauliflower Side Salad',
			image: 'https://spoonacular.com/recipeImages/642346-556x370.jpg',
			summary:
				'Egyptain Cauliflower Side Salad could be just the <b>gluten free, dairy free, paleolithic, and lacto ovo vegetarian</b> recipe you\'ve been looking for. This recipe makes 2 servings with <b>183 calories</b>, <b>4g of protein</b>, and <b>15g of fat</b> each. For <b>$1.51 per serving</b>, this recipe <b>covers 18%</b> of your daily requirements of vitamins and minerals. This recipe is liked by 3 foodies and cooks. It works well as a hor d\'oeuvre. A mixture of cauliflower, cumin, parsley, and a handful of other ingredients are all it takes to make this recipe so yummy. It is brought to you by Foodista. From preparation to the plate, this recipe takes approximately <b>25 minutes</b>. All things considered, we decided this recipe <b>deserves a spoonacular score of 93%</b>. This score is excellent. Similar recipes include <a href="https://spoonacular.com/recipes/roasted-broccoli-and-cauliflower-simple-for-the-side-581739">Roasted Broccoli and Cauliflower: Simple for the Side</a>, <a href="https://spoonacular.com/recipes/sauteed-beef-with-broccoli-and-shiitake-mushrooms-and-a-side-of-my-new-fave-cauliflower-rice-551311">Sauteed Beef with Broccoli and Shiitake Mushrooms (and a side of my new fave: cauliflower rice)</a>, and <a href="https://spoonacular.com/recipes/black-bean-and-corn-salad-spicy-mexican-salad-side-dish-95696">Black Bean and Corn Salad - Spicy Mexican Salad/Side Dish</a>.',
			cuisins: [],
			dishTypes: [
				'side dish',
				'antipasti',
				'salad',
				'starter',
				'snack',
				'appetizer',
				'antipasto',
				"hor d'oeuvre",
			],
			readyInMinutes: 25,
			aggregateLikes: 3,
		},
		{
			id: 642878,
			title: "Finger Lickin' Good Stewed Quince Dessert",
			image: 'https://spoonacular.com/recipeImages/642878-556x370.jpg',
			summary:
				'Finger Lickin\' Good Stewed Quince Dessert is a hor d\'oeuvre that serves 6. For <b>$2.87 per serving</b>, this recipe <b>covers 5%</b> of your daily requirements of vitamins and minerals. One portion of this dish contains about <b>1g of protein</b>, <b>7g of fat</b>, and a total of <b>190 calories</b>. This recipe from Foodista has 3 fans. A mixture of quinces, unrefined oil, cinnamon, and a handful of other ingredients are all it takes to make this recipe so yummy. It is a good option if you\'re following a <b>gluten free, dairy free, lacto ovo vegetarian, and vegan</b> diet. From preparation to the plate, this recipe takes around <b>45 minutes</b>. All things considered, we decided this recipe <b>deserves a spoonacular score of 19%</b>. This score is rather bad. If you like this recipe, you might also like recipes such as <a href="https://spoonacular.com/recipes/finger-lickin-good-shrimp-428519">Finger-Lickin\'-Good Shrimp</a>, <a href="https://spoonacular.com/recipes/finger-lickin-good-chicken-marinade-143838">Finger Lickin\' Good Chicken Marinade</a>, and <a href="https://spoonacular.com/recipes/finger-lickin-good-bbq-sauce-146789">Finger Lickin Good BBQ Sauce</a>.',
			cuisins: [],
			dishTypes: ['antipasti', 'soup', 'starter', 'snack', 'appetizer', 'antipasto', "hor d'oeuvre"],
			readyInMinutes: 45,
			aggregateLikes: 3,
		},
		{
			id: 663771,
			title: 'Traditional Panzanella',
			image: 'https://spoonacular.com/recipeImages/663771-556x370.jpg',
			summary:
				'Traditional Panzanella might be a good recipe to expand your side dish repertoire. This recipe makes 6 servings with <b>356 calories</b>, <b>10g of protein</b>, and <b>16g of fat</b> each. For <b>$1.28 per serving</b>, this recipe <b>covers 19%</b> of your daily requirements of vitamins and minerals. 2 people found this recipe to be delicious and satisfying. This recipe is typical of Mediterranean cuisine. This recipe from Foodista requires tomatoes, extra virgin olive oil, basil leaves, and onion. It is a good option if you\'re following a <b>dairy free, lacto ovo vegetarian, and vegan</b> diet. From preparation to the plate, this recipe takes roughly <b>45 minutes</b>. Overall, this recipe earns a <b>solid spoonacular score of 62%</b>. Similar recipes are <a href="https://spoonacular.com/recipes/traditional-panzanella-1380033">Traditional Panzanella</a>, <a href="https://spoonacular.com/recipes/panzanella-30201">Panzanella</a>, and <a href="https://spoonacular.com/recipes/panzanella-915868">Panzanella</a>.',
			cuisins: ['Mediterranean', 'Italian', 'European'],
			dishTypes: ['side dish'],
			readyInMinutes: 45,
			aggregateLikes: 2,
		},
		{
			id: 1098357,
			title: 'Three Ingredient Frozen Pina Colada',
			image: 'https://spoonacular.com/recipeImages/1098357-556x370.jpg',
			summary:
				'Three Ingredient Frozen Pina Colada takes about <b>5 minutes</b> from beginning to end. For <b>$2.15 per serving</b>, this recipe <b>covers 12%</b> of your daily requirements of vitamins and minerals. Watching your figure? This gluten free, dairy free, lacto ovo vegetarian, and vegan recipe has <b>320 calories</b>, <b>2g of protein</b>, and <b>8g of fat</b> per serving. This recipe serves 3. This recipe from Foodista requires pineapple, pineapple juice, coconut milk, and coconut rum. It works well as a beverage. 6 people were glad they tried this recipe. This recipe is typical of Mexican cuisine. Taking all factors into account, this recipe <b>earns a spoonacular score of 45%</b>, which is good. Try <a href="https://spoonacular.com/recipes/three-ingredient-frozen-pina-colada-1378921">Three Ingredient Frozen Pina Colada</a>, <a href="https://spoonacular.com/recipes/three-ingredient-frozen-pina-colada-1383683">Three Ingredient Frozen Pina Colada</a>, and <a href="https://spoonacular.com/recipes/three-ingredient-frozen-pina-colada-1383707">Three Ingredient Frozen Pina Colada</a> for similar recipes.',
			cuisins: ['Mexican'],
			dishTypes: ['beverage', 'drink'],
			readyInMinutes: 5,
			aggregateLikes: 6,
		},
		{
			id: 663164,
			title: 'Thai Sweet Coconut Sticky Rice With Fresh Mango',
			image: 'https://spoonacular.com/recipeImages/663164-556x370.jpg',
			summary:
				'The recipe Thai Sweet Coconut Sticky Rice With Fresh Mango could satisfy your Asian craving in about <b>45 minutes</b>. One serving contains <b>852 calories</b>, <b>6g of protein</b>, and <b>25g of fat</b>. For <b>$2.16 per serving</b>, this recipe <b>covers 15%</b> of your daily requirements of vitamins and minerals. This recipe serves 4. Head to the store and pick up coconut milk, sugar, mangoes, and a few other things to make it today. It works well as a rather cheap side dish. 4 people have made this recipe and would make it again. It is a good option if you\'re following a <b>gluten free, dairy free, lacto ovo vegetarian, and vegan</b> diet. It is brought to you by Foodista. Overall, this recipe earns a <b>pretty good spoonacular score of 40%</b>. <a href="https://spoonacular.com/recipes/thai-coconut-sticky-rice-with-mango-626762">Thai Coconut Sticky Rice with Mango</a>, <a href="https://spoonacular.com/recipes/how-to-make-thai-mango-with-coconut-sticky-rice-53895">How To Make Thai Mango With Coconut Sticky Rice</a>, and <a href="https://spoonacular.com/recipes/coconut-sticky-sweet-rice-with-mango-558768">Coconut Sticky Sweet Rice with Mango</a> are very similar to this recipe.',
			cuisins: ['Thai', 'Asian'],
			dishTypes: ['side dish'],
			readyInMinutes: 45,
			aggregateLikes: 4,
		},
		{
			id: 636292,
			title: 'Brown Rice Mushroom Pilaf',
			image: 'https://spoonacular.com/recipeImages/636292-556x370.jpg',
			summary:
				'Brown Rice Mushroom Pilaf might be just the hor d\'oeuvre you are searching for. One portion of this dish contains about <b>5g of protein</b>, <b>5g of fat</b>, and a total of <b>228 calories</b>. This recipe serves 4. For <b>65 cents per serving</b>, this recipe <b>covers 11%</b> of your daily requirements of vitamins and minerals. This recipe from Foodista requires onion, brown rice, ground pepper, and unrefined sunflower oil. A couple people made this recipe, and 15 would say it hit the spot. From preparation to the plate, this recipe takes approximately <b>45 minutes</b>. It is a good option if you\'re following a <b>gluten free, dairy free, lacto ovo vegetarian, and vegan</b> diet. Overall, this recipe earns a <b>super spoonacular score of 93%</b>. Similar recipes include <a href="https://spoonacular.com/recipes/brown-rice-mushroom-pilaf-100507">Brown Rice-Mushroom Pilaf</a>, <a href="https://spoonacular.com/recipes/quick-brown-rice-and-mushroom-pilaf-268223">Quick Brown Rice and Mushroom Pilaf</a>, and <a href="https://spoonacular.com/recipes/brown-rice-pilaf-18826">Brown Rice Pilaf</a>.',
			cuisins: [],
			dishTypes: ['side dish', 'antipasti', 'starter', 'snack', 'appetizer', 'antipasto', "hor d'oeuvre"],
			readyInMinutes: 45,
			aggregateLikes: 15,
		},
	];
	const americanRecipes = [
		{
			id: 664110,
			name: 'Turmeric Ginger Beer',
			image: 'https://spoonacular.com/recipeImages/664110-556x370.jpg',
			summary:
				'If you want to add more <b>gluten free, dairy free, lacto ovo vegetarian, and fodmap friendly</b> recipes to your recipe box, Turmeric Ginger Beer might be a recipe you should try. One portion of this dish contains around <b>0g of protein</b>, <b>0g of fat</b>, and a total of <b>90 calories</b>. For <b>29 cents per serving</b>, you get a side dish that serves 8. This recipe from Foodista has 3 fans. From preparation to the plate, this recipe takes approximately <b>45 minutes</b>. It will be a hit at your <b>Father\'s Day</b> event. If you have prepare as, turmeric ginger syrup, sugar, and a few other ingredients on hand, you can make it. Overall, this recipe earns a <b>not so excellent spoonacular score of 19%</b>. Similar recipes include <a href="https://spoonacular.com/recipes/turmeric-ginger-cookies-914018">Turmeric Ginger Cookies</a>, <a href="https://spoonacular.com/recipes/turmeric-ginger-cauliflower-30341">Turmeric-Ginger Cauliflower</a>, and <a href="https://spoonacular.com/recipes/turmeric-ginger-tea-41786">Turmeric-ginger Tea</a>.',
			cuisins: [],
			dishTypes: ['side dish'],
			readyInMinutes: 45,
			aggregateLikes: 3,
		},
		{
			id: 638557,
			name: 'Chili Gobi',
			image: 'https://spoonacular.com/recipeImages/638557-556x370.jpg',
			summary:
				'Chili Gobi is an American side dish. For <b>$1.33 per serving</b>, this recipe <b>covers 22%</b> of your daily requirements of vitamins and minerals. This recipe serves 4. One serving contains <b>281 calories</b>, <b>7g of protein</b>, and <b>16g of fat</b>. This recipe is liked by 2 foodies and cooks. It is perfect for <b>The Super Bowl</b>. It is a good option if you\'re following a <b>dairy free and lacto ovo vegetarian</b> diet. From preparation to the plate, this recipe takes roughly <b>30 minutes</b>. A mixture of soy sauce, egg, flour, and a handful of other ingredients are all it takes to make this recipe so tasty. It is brought to you by Foodista. All things considered, we decided this recipe <b>deserves a spoonacular score of 58%</b>. This score is pretty good. <a href="https://spoonacular.com/recipes/tandoori-gobi-or-gobi-tikka-how-to-make-tandoori-gobi-gobi-s-487270">tandoori gobi or gobi tikka, how to make tandoori gobi | gobi s</a>, <a href="https://spoonacular.com/recipes/gobi-pakora-how-to-make-gobi-pakoras-or-cauliflower-fritters-1291129">gobi pakora , how to make gobi pakoras or cauliflower fritters</a>, and <a href="https://spoonacular.com/recipes/gobi-pakora-how-to-make-gobi-pakoras-or-cauliflower-fritters-488633">gobi pakora , how to make gobi pakoras or cauliflower fritters</a> are very similar to this recipe.',
			cuisins: ['American'],
			dishTypes: ['side dish'],
			readyInMinutes: 30,
			aggregateLikes: 2,
		},
		{
			id: 641651,
			name: 'Dried Fruit and Ginger Scones',
			image: 'https://spoonacular.com/recipeImages/641651-556x370.jpg',
			summary:
				'Dried Fruit and Ginger Scones is an European breakfast. This recipe makes 8 servings with <b>273 calories</b>, <b>5g of protein</b>, and <b>11g of fat</b> each. For <b>50 cents per serving</b>, this recipe <b>covers 6%</b> of your daily requirements of vitamins and minerals. It is brought to you by Foodista. This recipe is liked by 55 foodies and cooks. Head to the store and pick up baking powder, turbinado sugar, cake flour, and a few other things to make it today. From preparation to the plate, this recipe takes approximately <b>45 minutes</b>. Taking all factors into account, this recipe <b>earns a spoonacular score of 28%</b>, which is rather bad. If you like this recipe, take a look at these similar recipes: <a href="https://spoonacular.com/recipes/low-fat-dried-fruit-scones-128926">Low Fat Dried Fruit Scones</a>, <a href="https://spoonacular.com/recipes/chicken-with-passion-fruit-sauce-over-dried-fruit-and-nuts-orzo-227172">Chicken with Passion Fruit Sauce over Dried Fruit and Nuts Orzo</a>, and <a href="https://spoonacular.com/recipes/gluten-free-ginger-cream-scones-with-homemade-candied-ginger-525984">Gluten Free Ginger Cream Scones with Homemade Candied Ginger</a>.',
			cuisins: ['English', 'Scottish', 'British', 'European'],
			dishTypes: ['morning meal', 'dessert', 'brunch', 'breakfast'],
			readyInMinutes: 45,
			aggregateLikes: 55,
		},
		{
			id: 641958,
			name: 'Easy Eggplant Curry',
			image: 'https://spoonacular.com/recipeImages/641958-556x370.jpg',
			summary:
				'The recipe Easy Eggplant Curry can be made <b>in roughly 45 minutes</b>. One serving contains <b>139 calories</b>, <b>3g of protein</b>, and <b>8g of fat</b>. This recipe serves 6. For <b>95 cents per serving</b>, this recipe <b>covers 10%</b> of your daily requirements of vitamins and minerals. It works well as a hor d\'oeuvre. It is a <b>very affordable</b> recipe for fans of Indian food. 14 people were glad they tried this recipe. Head to the store and pick up tomatoes, centimeters piece of ginger, cumin seeds/ground cumin, and a few other things to make it today. It is brought to you by Foodista. It is a good option if you\'re following a <b>gluten free, dairy free, lacto ovo vegetarian, and whole 30</b> diet. Overall, this recipe earns a <b>solid spoonacular score of 51%</b>. Similar recipes include <a href="https://spoonacular.com/recipes/easy-eggplant-curry-1356887">Easy Eggplant Curry</a>, <a href="https://spoonacular.com/recipes/easy-eggplant-curry-1378235">Easy Eggplant Curry</a>, and <a href="https://spoonacular.com/recipes/easy-eggplant-curry-1353003">Easy Eggplant Curry</a>.',
			cuisins: ['Indian', 'Asian'],
			dishTypes: ['antipasti', 'starter', 'snack', 'appetizer', 'antipasto', "hor d'oeuvre"],
			readyInMinutes: 45,
			aggregateLikes: 14,
		},
		{
			id: 149199,
			name: 'Easy, All-Natural Protein Bars',
			image: 'https://spoonacular.com/recipeImages/149199-556x370.jpg',
			summary:
				'The recipe Easy, All-Natural Protein Bars can be made <b>in about 15 minutes</b>. This side dish has <b>241 calories</b>, <b>8g of protein</b>, and <b>13g of fat</b> per serving. This gluten free, dairy free, paleolithic, and lacto ovo vegetarian recipe serves 6 and costs <b>99 cents per serving</b>. This recipe from spoonacular user <a href="/profile/coffeebean">coffeebean</a> requires almonds, dates, figs, and hemp protein powder. Try <a href="https://spoonacular.com/recipes/easy-all-natural-protein-bars-1212819">Easy, All-Natural Protein Bars</a>, <a href="https://spoonacular.com/recipes/easy-all-natural-protein-bars-1323247">Easy, All-Natural Protein Bars</a>, and <a href="https://spoonacular.com/recipes/easy-all-natural-protein-bars-1190019">Easy, All-Natural Protein Bars</a> for similar recipes.',
			cuisins: [],
			dishTypes: ['side dish'],
			readyInMinutes: 15,
			aggregateLikes: 2,
		},
		{
			id: 663824,
			name: 'Trinidadian Chicken Potato Curry',
			image: 'https://spoonacular.com/recipeImages/663824-556x370.jpg',
			summary:
				'If you have about <b>45 minutes</b> to spend in the kitchen, Trinidadian Chicken Potato Curry might be an excellent <b>gluten free, dairy free, and whole 30</b> recipe to try. This recipe makes 4 servings with <b>574 calories</b>, <b>35g of protein</b>, and <b>37g of fat</b> each. For <b>$1.2 per serving</b>, this recipe <b>covers 23%</b> of your daily requirements of vitamins and minerals. This recipe from Foodista has 11 fans. A few people really liked this main course. A mixture of chicken thighs, salt, garlic cloves, and a handful of other ingredients are all it takes to make this recipe so yummy. This recipe is typical of Indian cuisine. All things considered, we decided this recipe <b>deserves a spoonacular score of 65%</b>. This score is pretty good. If you like this recipe, take a look at these similar recipes: <a href="https://spoonacular.com/recipes/toms-trinidadian-chicken-curry-17227">Tom’s Trinidadian Chicken Curry</a>, <a href="https://spoonacular.com/recipes/trinidadian-chicken-curry-with-coconut-grits-collard-greens-1230781">Trinidadian Chicken Curry with Coconut Grits & Collard Greens</a>, and <a href="https://spoonacular.com/recipes/trinidadian-chicken-curry-with-coconut-grits-collard-greens-1231161">Trinidadian Chicken Curry with Coconut Grits & Collard Greens</a>.',
			cuisins: ['Indian', 'Asian'],
			dishTypes: ['lunch', 'main course', 'main dish', 'dinner'],
			readyInMinutes: 45,
			aggregateLikes: 11,
		},
		{
			id: 638568,
			name: 'Chili Pie with Green Chile and Cheddar Cornbread Crust',
			image: 'https://spoonacular.com/recipeImages/638568-556x370.jpg',
			summary:
				'If you want to add more <b>Southern</b> recipes to your repertoire, Chili Pie with Green Chile and Cheddar Cornbread Crust might be a recipe you should try. This recipe serves 8 and costs $1.57 per serving. One serving contains <b>644 calories</b>, <b>22g of protein</b>, and <b>40g of fat</b>. This recipe is liked by 15 foodies and cooks. If you have garlic, eggs, cornmeal, and a few other ingredients on hand, you can make it. It is brought to you by Foodista. <b>The Super Bowl</b> will be even more special with this recipe. From preparation to the plate, this recipe takes approximately <b>1 hour</b>. Overall, this recipe earns a <b>solid spoonacular score of 61%</b>. Users who liked this recipe also liked <a href="https://spoonacular.com/recipes/skillet-chili-with-jalapeo-cheddar-cornbread-crust-1277531">Skillet Chili with Jalapeño Cheddar Cornbread Crust</a>, <a href="https://spoonacular.com/recipes/skillet-chili-with-jalapeo-cheddar-cornbread-crust-839045">Skillet Chili with Jalapeño Cheddar Cornbread Crust</a>, and <a href="https://spoonacular.com/recipes/cheddar-chili-cornbread-pie-609897">Cheddar Chili Cornbread Pie</a>.',
			cuisins: ['Southern'],
			dishTypes: [],
			readyInMinutes: 60,
			aggregateLikes: 15,
		},
		{
			id: 644570,
			name: 'Ginger Cookies- gluten free, soy free, vegan',
			image: 'https://spoonacular.com/recipeImages/644570-556x370.jpg',
			summary:
				'If you want to add more <b>gluten free and dairy free</b> recipes to your recipe box, Ginger Cookies- gluten free, soy free, vegan might be a recipe you should try. One serving contains <b>125 calories</b>, <b>2g of protein</b>, and <b>2g of fat</b>. For <b>36 cents per serving</b>, this recipe <b>covers 2%</b> of your daily requirements of vitamins and minerals. This recipe serves 20. 5 people have made this recipe and would make it again. It is brought to you by Foodista. It works best as a hor d\'oeuvre, and is done in about <b>45 minutes</b>. Head to the store and pick up brown sugar, ground cloves, chunky applesauce, and a few other things to make it today. All things considered, we decided this recipe <b>deserves a spoonacular score of 21%</b>. This score is not so super. Users who liked this recipe also liked <a href="https://spoonacular.com/recipes/creamy-vegan-corn-and-red-pepper-blender-soup-gluten-free-soy-free-nut-free-grain-free-salt-free-520519">Creamy Vegan Corn and Red Pepper Blender Soup (gluten-free, soy-free, nut-free, grain-free, salt-free)</a>, <a href="https://spoonacular.com/recipes/thousand-island-dressing-gluten-free-corn-free-dairy-free-soy-free-nut-free-gum-free-and-refined-sugar-free-512186">Thousand Island Dressing (Gluten-Free, Corn-Free, Dairy-Free, Soy-Free, Nut-Free, Gum-Free and Refined Sugar-Free)</a>, and <a href="https://spoonacular.com/recipes/vegan-scrambled-chickpea-eggs-with-quick-hash-egg-free-soy-free-gluten-free-1238977">Vegan Scrambled Chickpea “Eggs” with Quick Hash (Egg-Free, Soy-Free + Gluten-Free)</a>.',
			cuisins: [],
			dishTypes: ['antipasti', 'starter', 'snack', 'appetizer', 'antipasto', "hor d'oeuvre"],
			readyInMinutes: 45,
			aggregateLikes: 5,
		},
		{
			id: 635795,
			name: 'Braised Bean Curds',
			image: 'https://spoonacular.com/recipeImages/635795-556x370.jpg',
			summary:
				'If you want to add more <b>gluten free, dairy free, and pescatarian</b> recipes to your recipe box, Braised Bean Curds might be a recipe you should try. For <b>$2.17 per serving</b>, you get a main course that serves 2. One serving contains <b>328 calories</b>, <b>16g of protein</b>, and <b>22g of fat</b>. 4 people have made this recipe and would make it again. It is brought to you by Foodista. If you have bean curds-tofu, oyster sauce, some frying oil, and a few other ingredients on hand, you can make it. From preparation to the plate, this recipe takes around <b>45 minutes</b>. All things considered, we decided this recipe <b>deserves a spoonacular score of 61%</b>. This score is good. If you like this recipe, you might also like recipes such as <a href="https://spoonacular.com/recipes/fried-cheese-curds-1009393">Fried Cheese Curds</a>, <a href="https://spoonacular.com/recipes/fried-cheese-curds-742873">Fried Cheese Curds</a>, and <a href="https://spoonacular.com/recipes/deep-fried-cheese-curds-529333">Deep Fried Cheese Curds</a>.',
			cuisins: [],
			dishTypes: ['lunch', 'main course', 'main dish', 'dinner'],
			readyInMinutes: 45,
			aggregateLikes: 4,
		},
		{
			id: 636523,
			name: 'Butter-Bread',
			image: 'https://spoonacular.com/recipeImages/636523-556x370.jpg',
			summary:
				'Butter-Bread is a <b>lacto ovo vegetarian</b> recipe with 6 servings. One serving contains <b>583 calories</b>, <b>12g of protein</b>, and <b>30g of fat</b>. For <b>78 cents per serving</b>, this recipe <b>covers 11%</b> of your daily requirements of vitamins and minerals. Head to the store and pick up liquid malt extract, yeast, butter, and a few other things to make it today. 3 people were impressed by this recipe. It is brought to you by Foodista. From preparation to the plate, this recipe takes roughly <b>1 hour and 30 minutes</b>. Overall, this recipe earns a <b>not so excellent spoonacular score of 35%</b>. If you like this recipe, you might also like recipes such as <a href="https://spoonacular.com/recipes/peanut-butter-banana-bread-we-call-it-savannah-bread-865600">Peanut Butter Banana Bread: We Call It Savannah Bread</a>, <a href="https://spoonacular.com/recipes/chocolate-chunk-almond-butter-zucchini-bread-with-salted-maple-butter-1500505">Chocolate Chunk Almond Butter Zucchini Bread with Salted Maple Butter</a>, and <a href="https://spoonacular.com/recipes/bread-baking-apple-butter-swirl-bread-203814">Bread Baking: Apple Butter Swirl Bread</a>.',
			cuisins: [],
			dishTypes: [],
			readyInMinutes: 90,
			aggregateLikes: 3,
		},
	];
	const caribbeanRecipes = [
		{
			id: 649944,
			title: 'Lentil Mango Salad',
			image: 'https://spoonacular.com/recipeImages/649944-556x370.jpg',
			summary:
				'Lentil Mango Salad is a main course that serves 4. One serving contains <b>253 calories</b>, <b>12g of protein</b>, and <b>6g of fat</b>. For <b>$1.59 per serving</b>, this recipe <b>covers 25%</b> of your daily requirements of vitamins and minerals. It is brought to you by Foodista. 3 people found this recipe to be tasty and satisfying. From preparation to the plate, this recipe takes around <b>45 minutes</b>. It is a good option if you\'re following a <b>gluten free, dairy free, lacto ovo vegetarian, and vegan</b> diet. Head to the store and pick up cilantro, white wine vinegar, onion, and a few other things to make it today. Taking all factors into account, this recipe <b>earns a spoonacular score of 94%</b>, which is amazing. Users who liked this recipe also liked <a href="https://spoonacular.com/recipes/lentil-burger-with-mango-salsa-509088">LENTIL BURGER with Mango Salsa</a>, <a href="https://spoonacular.com/recipes/plumcot-orange-lentil-salad-fave-five-friday-lovely-lentil-dishes-529696">Plumcot, Orange & Lentil Salad… & Fave Five Friday: Lovely Lentil Dishes</a>, and <a href="https://spoonacular.com/recipes/simple-coconut-quinoa-and-lentil-curry-with-lime-mango-705061">Simple Coconut Quinoan and Lentil Curry with Lime Mango</a>.',
			cuisins: [],
			dishTypes: ['side dish', 'lunch', 'main course', 'salad', 'main dish', 'dinner'],
			readyInMinutes: 45,
			aggregateLikes: 3,
		},
		{
			id: 632269,
			title: 'Amaranth and Roast Veggie Salad',
			image: 'https://spoonacular.com/recipeImages/632269-556x370.jpg',
			summary:
				'Amaranth and Roast Veggie Salad could be just the <b>gluten free, dairy free, lacto ovo vegetarian, and vegan</b> recipe you\'ve been looking for. This recipe serves 2 and costs $2.47 per serving. This hor d\'oeuvre has <b>361 calories</b>, <b>9g of protein</b>, and <b>18g of fat</b> per serving. From preparation to the plate, this recipe takes roughly <b>45 minutes</b>. This recipe from Foodista requires amaranth, punnet baby tomatoes, bell pepper, and pumpkin. 5 people have tried and liked this recipe. Overall, this recipe earns an <b>outstanding spoonacular score of 95%</b>. If you like this recipe, take a look at these similar recipes: <a href="https://spoonacular.com/recipes/mums-roast-veggie-salad-12573">Mum’s Roast Veggie Salad</a>, <a href="https://spoonacular.com/recipes/amaranth-yogurt-parfait-popped-amaranth-parfait-with-fruits-1235383">amaranth yogurt parfait – popped amaranth parfait with fruits</a>, and <a href="https://spoonacular.com/recipes/amaranth-yogurt-parfait-popped-amaranth-parfait-with-fruits-1238997">amaranth yogurt parfait – popped amaranth parfait with fruits</a>.',
			cuisins: [],
			dishTypes: [
				'side dish',
				'antipasti',
				'salad',
				'starter',
				'snack',
				'appetizer',
				'antipasto',
				"hor d'oeuvre",
			],
			readyInMinutes: 45,
			aggregateLikes: 5,
		},
		{
			id: 795751,
			title: 'Chicken Fajita Stuffed Bell Pepper',
			image: 'https://spoonacular.com/recipeImages/795751-556x370.jpg',
			summary:
				'Chicken Fajita Stuffed Bell Pepper takes approximately <b>45 minutes</b> from beginning to end. Watching your figure? This gluten free recipe has <b>526 calories</b>, <b>50g of protein</b>, and <b>24g of fat</b> per serving. For <b>$4.35 per serving</b>, you get a main course that serves 3. 159 people have made this recipe and would make it again. This recipe is typical of Mexican cuisine. This recipe from Pink When requires cumin, cilantro, salsa, and chili powder. All things considered, we decided this recipe <b>deserves a spoonacular score of 98%</b>. This score is amazing. Users who liked this recipe also liked <a href="https://spoonacular.com/recipes/stuffed-bell-peppers-551310">Stuffed Bell Peppers</a>, <a href="https://spoonacular.com/recipes/stuffed-bell-pepper-1348405">Stuffed Bell Pepper</a>, and <a href="https://spoonacular.com/recipes/stuffed-bell-pepper-526845">Stuffed Bell Pepper</a>.',
			cuisins: ['Mexican'],
			dishTypes: ['lunch', 'main course', 'main dish', 'dinner'],
			readyInMinutes: 45,
			aggregateLikes: 159,
		},
		{
			id: 659174,
			title: 'Salsa Verde By Mommie Cooks',
			image: 'https://spoonacular.com/recipeImages/659174-556x370.jpg',
			summary:
				'If you want to add more <b>Mexican</b> recipes to your recipe box, Salsa Verde By Mommie Cooks might be a recipe you should try. For <b>$2.28 per serving</b>, this recipe <b>covers 17%</b> of your daily requirements of vitamins and minerals. This recipe makes 6 servings with <b>147 calories</b>, <b>4g of protein</b>, and <b>4g of fat</b> each. 2 people found this recipe to be tasty and satisfying. Head to the store and pick up coriander, garlic cloves, onion, and a few other things to make it today. It works best as a hor d\'oeuvre, and is done in around <b>45 minutes</b>. It is brought to you by Foodista. It is a good option if you\'re following a <b>gluten free, dairy free, paleolithic, and lacto ovo vegetarian</b> diet. Overall, this recipe earns a <b>good spoonacular score of 80%</b>. Similar recipes include <a href="https://spoonacular.com/recipes/chicken-fajitas-by-mommie-cooks-638085">Chicken Fajitas By Mommie Cooks</a>, <a href="https://spoonacular.com/recipes/vegetarian-tamales-mommie-cooks-664720">Vegetarian Tamales - Mommie Cooks</a>, and <a href="https://spoonacular.com/recipes/turkey-goulash-by-mommie-cooks-664031">Turkey Goulash By Mommie Cooks</a>.',
			cuisins: ['Mexican'],
			dishTypes: [
				'antipasti',
				'condiment',
				'starter',
				'snack',
				'appetizer',
				'dip',
				'antipasto',
				"hor d'oeuvre",
				'spread',
			],
			readyInMinutes: 45,
			aggregateLikes: 2,
		},
		{
			id: 803364,
			title: 'Stuffed Buttercup Squash- Whole Grain Rice & Chicken',
			image: 'https://spoonacular.com/recipeImages/803364-556x370.jpg',
			summary:
				'Stuffed Buttercup Squash- Whole Grain Rice & Chicken might be just the side dish you are searching for. Watching your figure? This gluten free and dairy free recipe has <b>1016 calories</b>, <b>33g of protein</b>, and <b>40g of fat</b> per serving. This recipe serves 2 and costs $2.85 per serving. 3 people were impressed by this recipe. Head to the store and pick up almonds, grain rice, sunflower seeds, and a few other things to make it today. From preparation to the plate, this recipe takes approximately <b>1 hour</b>. It is brought to you by Pink When. All things considered, we decided this recipe <b>deserves a spoonacular score of 89%</b>. This score is spectacular. <a href="https://spoonacular.com/recipes/buttercup-squash-casserole-105073">Buttercup Squash Casserole</a>, <a href="https://spoonacular.com/recipes/buttercup-squash-gnocchi-598361">Buttercup Squash Gnocchi</a>, and <a href="https://spoonacular.com/recipes/buttercup-squash-with-apples-164568">Buttercup Squash with Apples</a> are very similar to this recipe.',
			cuisins: [],
			dishTypes: ['side dish'],
			readyInMinutes: 60,
			aggregateLikes: 3,
		},
		{
			id: 650546,
			title: 'Macaroni and Cheese Gratin',
			image: 'https://spoonacular.com/recipeImages/650546-556x370.jpg',
			summary:
				'Macaroni and Cheese Gratin might be just the side dish you are searching for. This recipe serves 6 and costs $2.71 per serving. One portion of this dish contains roughly <b>42g of protein</b>, <b>38g of fat</b>, and a total of <b>859 calories</b>. 2 people have made this recipe and would make it again. If you have milk, butter, gruyere, and a few other ingredients on hand, you can make it. This recipe is typical of American cuisine. It is brought to you by Foodista. From preparation to the plate, this recipe takes approximately <b>45 minutes</b>. Taking all factors into account, this recipe <b>earns a spoonacular score of 72%</b>, which is good. If you like this recipe, you might also like recipes such as <a href="https://spoonacular.com/recipes/macaroni-au-gratin-376048">Macaroni Au Gratin</a>, <a href="https://spoonacular.com/recipes/macaroni-gratin-598591">Macaroni Gratin</a>, and <a href="https://spoonacular.com/recipes/potato-and-macaroni-gratin-118108">Potato and Macaroni Gratin</a>.',
			cuisins: ['American'],
			dishTypes: ['side dish'],
			readyInMinutes: 45,
			aggregateLikes: 2,
		},
		{
			id: 649195,
			title: 'Lamb Burgers With Tzatziki Sauce',
			image: 'https://spoonacular.com/recipeImages/649195-556x370.jpg',
			summary:
				'If you want to add more <b>Mediterranean</b> recipes to your collection, Lamb Burgers With Tzatziki Sauce might be a recipe you should try. One serving contains <b>617 calories</b>, <b>38g of protein</b>, and <b>37g of fat</b>. For <b>$3.6 per serving</b>, you get a main course that serves 4. 12 people were impressed by this recipe. This recipe from Foodista requires cucumber, greek yogurt, ground lamb, and juice of lemon. From preparation to the plate, this recipe takes approximately <b>45 minutes</b>. Taking all factors into account, this recipe <b>earns a spoonacular score of 77%</b>, which is solid. <a href="https://spoonacular.com/recipes/lamb-burgers-with-tzatziki-sauce-1308601">Lamb Burgers With Tzatziki Sauce</a>, <a href="https://spoonacular.com/recipes/greek-lamb-burgers-with-tzatziki-sauce-888153">Greek Lamb Burgers with Tzatziki Sauce</a>, and <a href="https://spoonacular.com/recipes/greek-lamb-burgers-with-tzatziki-sauce-1303797">Greek Lamb Burgers with Tzatziki Sauce</a> are very similar to this recipe.',
			cuisins: ['Mediterranean', 'European', 'Greek'],
			dishTypes: ['lunch', 'main course', 'main dish', 'dinner'],
			readyInMinutes: 45,
			aggregateLikes: 12,
		},
		{
			id: 647279,
			title: 'Honey Sesame Crisps-Eggless,Sugarless & Flourless',
			image: 'https://spoonacular.com/recipeImages/647279-556x370.jpg',
			summary:
				'If you want to add more <b>gluten free, lacto ovo vegetarian, and primal</b> recipes to your recipe box, Honey Sesame Crisps-Eggless,Sugarless & Flourless might be a recipe you should try. One portion of this dish contains around <b>2g of protein</b>, <b>6g of fat</b>, and a total of <b>85 calories</b>. For <b>36 cents per serving</b>, this recipe <b>covers 3%</b> of your daily requirements of vitamins and minerals. This recipe serves 15. If you have less than of salt, honey, butter, and a few other ingredients on hand, you can make it. Not a lot of people really liked this hor d\'oeuvre. From preparation to the plate, this recipe takes approximately <b>45 minutes</b>. This recipe is liked by 3 foodies and cooks. It is brought to you by Foodista. With a spoonacular <b>score of 16%</b>, this dish is rather bad. Try <a href="https://spoonacular.com/recipes/honey-sesame-lace-crisps-79707">Honey Sesame Lace Crisps</a>, <a href="https://spoonacular.com/recipes/flourless-monster-cookies-flourless-eggless-butterless-1520863">Flourless Monster Cookies (Flourless, Eggless, Butterless)</a>, and <a href="https://spoonacular.com/recipes/flourless-eggless-peanut-butter-cookies-228295">Flourless Eggless Peanut Butter Cookies</a> for similar recipes.',
			cuisins: [],
			dishTypes: ['antipasti', 'starter', 'snack', 'appetizer', 'antipasto', "hor d'oeuvre"],
			readyInMinutes: 45,
			aggregateLikes: 3,
		},
		{
			id: 639593,
			title: 'Classic Daiquiri Cocktail',
			image: 'https://spoonacular.com/recipeImages/639593-556x370.jpg',
			summary:
				'If you want to add more <b>gluten free, dairy free, lacto ovo vegetarian, and fodmap friendly</b> recipes to your collection, Classic Daiquiri Cocktail might be a recipe you should try. For <b>$1.84 per serving</b>, this recipe <b>covers 2%</b> of your daily requirements of vitamins and minerals. This recipe makes 1 servings with <b>182 calories</b>, <b>0g of protein</b>, and <b>0g of fat</b> each. A mixture of lime juice, lime wedge, simple syrup, and a handful of other ingredients are all it takes to make this recipe so flavorful. It works well as a rather inexpensive beverage. It is brought to you by Foodista. 23 people have made this recipe and would make it again. From preparation to the plate, this recipe takes approximately <b>45 minutes</b>. Overall, this recipe earns a <b>not so excellent spoonacular score of 11%</b>. Similar recipes include <a href="https://spoonacular.com/recipes/classic-daiquiri-83202">Classic Daiquiri</a>, <a href="https://spoonacular.com/recipes/classic-daiquiri-1534557">Classic Daiquiri</a>, and <a href="https://spoonacular.com/recipes/the-hemingway-daiquiri-cocktail-956609">The Hemingway Daiquiri Cocktail</a>.',
			cuisins: [],
			dishTypes: ['beverage', 'drink'],
			readyInMinutes: 45,
			aggregateLikes: 23,
		},
		{
			id: 641649,
			title: 'Dried Cranberry Chocolate Cookies',
			image: 'https://spoonacular.com/recipeImages/641649-556x370.jpg',
			summary:
				'Dried Cranberry Chocolate Cookies is a dessert that serves 35. One portion of this dish contains approximately <b>3g of protein</b>, <b>5g of fat</b>, and a total of <b>177 calories</b>. For <b>26 cents per serving</b>, this recipe <b>covers 4%</b> of your daily requirements of vitamins and minerals. Head to the store and pick up semisweet chocolate chips, baking soda, flour, and a few other things to make it today. This recipe is liked by 5 foodies and cooks. From preparation to the plate, this recipe takes about <b>45 minutes</b>. It is brought to you by Foodista. All things considered, we decided this recipe <b>deserves a spoonacular score of 17%</b>. This score is not so outstanding. If you like this recipe, you might also like recipes such as <a href="https://spoonacular.com/recipes/dried-cranberry-shortbread-cookies-55577">Dried Cranberry Shortbread Cookies</a>, <a href="https://spoonacular.com/recipes/dried-cranberry-walnut-oatmeal-cookies-129117">Dried Cranberry-Walnut Oatmeal Cookies</a>, and <a href="https://spoonacular.com/recipes/wild-rice-and-dried-cranberry-cookies-758435">Wild Rice and Dried Cranberry Cookies</a>.',
			cuisins: [],
			dishTypes: ['dessert'],
			readyInMinutes: 45,
			aggregateLikes: 5,
		},
	];
	const italianRecipes = [
		{
			id: 636212,
			title: 'Broccoli Rabe with Tomatoes, Anchovies & Spaghetti',
			image: 'https://spoonacular.com/recipeImages/636212-556x370.jpg',
			summary:
				'Need a <b>pescatarian side dish</b>? Broccoli Rabe with Tomatoes, Anchovies & Spaghetti could be an awesome recipe to try. One portion of this dish contains roughly <b>31g of protein</b>, <b>12g of fat</b>, and a total of <b>596 calories</b>. This recipe serves 4. For <b>$2.07 per serving</b>, this recipe <b>covers 31%</b> of your daily requirements of vitamins and minerals. 6 people found this recipe to be yummy and satisfying. This recipe from Foodista requires tomatoes, anchovies, garlic, and juice of lemon. From preparation to the plate, this recipe takes approximately <b>45 minutes</b>. Taking all factors into account, this recipe <b>earns a spoonacular score of 92%</b>, which is super. <a href="https://spoonacular.com/recipes/my-broccoli-rabe-spaghetti-tomatoes-chicken-10391">My Broccoli Rabe “spaghetti,” Tomatoes, & Chicken</a>, <a href="https://spoonacular.com/recipes/broccoli-rabe-with-anchovies-and-breadcrumbs-84627">Broccoli Rabe with Anchovies and Breadcrumbs</a>, and <a href="https://spoonacular.com/recipes/broccoli-rabe-with-garlic-anchovies-163">Broccoli Rabe With Garlic & Anchovies</a> are very similar to this recipe.',
			cuisins: [],
			dishTypes: ['side dish'],
			readyInMinutes: 45,
			aggregateLikes: 6,
		},
		{
			id: 654271,
			title: 'Overnight Oatmeal',
			image: 'https://spoonacular.com/recipeImages/654271-556x370.jpg',
			summary:
				'If you want to add more <b>gluten free and lacto ovo vegetarian</b> recipes to your recipe box, Overnight Oatmeal might be a recipe you should try. This recipe serves 4 and costs $1.42 per serving. One portion of this dish contains about <b>9g of protein</b>, <b>7g of fat</b>, and a total of <b>380 calories</b>. It is brought to you by Foodista. Only a few people really liked this breakfast. From preparation to the plate, this recipe takes approximately <b>45 minutes</b>. Head to the store and pick up cranberries, water, half-and-half, and a few other things to make it today. 3 people were impressed by this recipe. Taking all factors into account, this recipe <b>earns a spoonacular score of 32%</b>, which is rather bad. Users who liked this recipe also liked <a href="https://spoonacular.com/recipes/clean-eating-oatmeal-cookie-overnight-oatmeal-1384595">Clean Eating Oatmeal Cookie Overnight Oatmeal</a>, <a href="https://spoonacular.com/recipes/clean-eating-oatmeal-cookie-overnight-oatmeal-1299571">Clean Eating Oatmeal Cookie Overnight Oatmeal</a>, and <a href="https://spoonacular.com/recipes/clean-eating-oatmeal-cookie-overnight-oatmeal-881324">Clean Eating Oatmeal Cookie Overnight Oatmeal</a>.',
			cuisins: [],
			dishTypes: ['morning meal', 'brunch', 'breakfast'],
			readyInMinutes: 45,
			aggregateLikes: 3,
		},
		{
			id: 637942,
			title: 'Chicken Arrozcaldo',
			image: 'https://spoonacular.com/recipeImages/637942-556x370.jpg',
			summary:
				'The recipe Chicken Arrozcaldo can be made <b>in around 45 minutes</b>. This main course has <b>1449 calories</b>, <b>75g of protein</b>, and <b>107g of fat</b> per serving. This recipe serves 9. For <b>$4.93 per serving</b>, this recipe <b>covers 47%</b> of your daily requirements of vitamins and minerals. 2 people have made this recipe and would make it again. It is a good option if you\'re following a <b>gluten free and dairy free</b> diet. If you have put-in the hardboiled eggs, add chicken and stir until it melts, salt and pepper, and a few other ingredients on hand, you can make it. It is brought to you by Foodista. Overall, this recipe earns a <b>solid spoonacular score of 64%</b>. If you like this recipe, you might also like recipes such as <a href="https://spoonacular.com/recipes/chicken-arrozcaldo-1243403">Chicken Arrozcaldo</a>, <a href="https://spoonacular.com/recipes/i-aint-chicken-chicken-crispy-roasted-chicken-breasts-with-orange-and-cardamom-1191579">I Ain\'t Chicken Chicken: Crispy Roasted Chicken Breasts with Orange and Cardamom</a>, and <a href="https://spoonacular.com/recipes/i-aint-chicken-chicken-crispy-roasted-chicken-breasts-with-orange-and-cardamom-1243251">I Ain\'t Chicken Chicken: Crispy Roasted Chicken Breasts with Orange and Cardamom</a>.',
			cuisins: [],
			dishTypes: ['lunch', 'main course', 'main dish', 'dinner'],
			readyInMinutes: 45,
			aggregateLikes: 2,
		},
		{
			id: 640907,
			title: 'Croissants With Sesame Seeds (Kifli)',
			image: 'https://spoonacular.com/recipeImages/640907-556x370.jpg',
			summary:
				'The recipe Croissants With Sesame Seeds (Kifli) could satisfy your Southern craving in roughly <b>45 minutes</b>. This recipe makes 50 servings with <b>135 calories</b>, <b>4g of protein</b>, and <b>7g of fat</b> each. For <b>39 cents per serving</b>, this recipe <b>covers 6%</b> of your daily requirements of vitamins and minerals. 5 people have tried and liked this recipe. It works well as a hor d\'oeuvre. This recipe from Foodista requires milk, active yeast, vegetable oil, and flour. Taking all factors into account, this recipe <b>earns a spoonacular score of 26%</b>, which is rather bad. If you like this recipe, you might also like recipes such as <a href="https://spoonacular.com/recipes/croissants-with-sesame-seeds-and-feta-cheese-macedonian-cheese-rolls-kifli-566274">Croissants with Sesame Seeds and Feta Cheese – Macedonian Cheese Rolls – Kifli</a>, <a href="https://spoonacular.com/recipes/vegan-croissants-posni-kifli-664428">Vegan Croissants - Posni Kifli</a>, and <a href="https://spoonacular.com/recipes/honey-teriyaki-chicken-fingers-with-sesame-seeds-with-sesame-cellophane-noodles-and-snap-peas-351353">Honey-Teriyaki Chicken Fingers with Sesame Seeds with Sesame Cellophane Noodles and Snap Peas</a>.',
			cuisins: ['Southern'],
			dishTypes: ['antipasti', 'starter', 'snack', 'appetizer', 'antipasto', "hor d'oeuvre"],
			readyInMinutes: 45,
			aggregateLikes: 5,
		},
		{
			id: 664110,
			title: 'Turmeric Ginger Beer',
			image: 'https://spoonacular.com/recipeImages/664110-556x370.jpg',
			summary:
				'If you want to add more <b>gluten free, dairy free, lacto ovo vegetarian, and fodmap friendly</b> recipes to your recipe box, Turmeric Ginger Beer might be a recipe you should try. One portion of this dish contains around <b>0g of protein</b>, <b>0g of fat</b>, and a total of <b>90 calories</b>. For <b>29 cents per serving</b>, you get a side dish that serves 8. This recipe from Foodista has 3 fans. From preparation to the plate, this recipe takes approximately <b>45 minutes</b>. It will be a hit at your <b>Father\'s Day</b> event. If you have prepare as, turmeric ginger syrup, sugar, and a few other ingredients on hand, you can make it. Overall, this recipe earns a <b>not so excellent spoonacular score of 19%</b>. Similar recipes include <a href="https://spoonacular.com/recipes/turmeric-ginger-cookies-914018">Turmeric Ginger Cookies</a>, <a href="https://spoonacular.com/recipes/turmeric-ginger-cauliflower-30341">Turmeric-Ginger Cauliflower</a>, and <a href="https://spoonacular.com/recipes/turmeric-ginger-tea-41786">Turmeric-ginger Tea</a>.',
			cuisins: [],
			dishTypes: ['side dish'],
			readyInMinutes: 45,
			aggregateLikes: 3,
		},
		{
			id: 632280,
			title: 'Amaretto Almond Cookies',
			image: 'https://spoonacular.com/recipeImages/632280-556x370.jpg',
			summary:
				'Amaretto Almond Cookies might be just the dessert you are searching for. One serving contains <b>196 calories</b>, <b>4g of protein</b>, and <b>14g of fat</b>. This recipe serves 18. For <b>41 cents per serving</b>, this recipe <b>covers 5%</b> of your daily requirements of vitamins and minerals. 3 people have tried and liked this recipe. This recipe from Foodista requires butter, molasses, lemon rind, and pastry flour. It is a good option if you\'re following a <b>lacto ovo vegetarian</b> diet. From preparation to the plate, this recipe takes roughly <b>45 minutes</b>. Overall, this recipe earns a <b>rather bad spoonacular score of 20%</b>. Similar recipes are <a href="https://spoonacular.com/recipes/amaretto-almond-bliss-cookies-369827">Amaretto-Almond Bliss Cookies</a>, <a href="https://spoonacular.com/recipes/almond-amaretto-cupcakes-with-amaretto-whipped-cream-518795">Almond Amaretto Cupcakes with Amaretto Whipped Cream</a>, and <a href="https://spoonacular.com/recipes/almond-joy-chewy-amaretto-cookies-amaretti-morbidi-734876">Almond Joy: Chewy Amaretto Cookies (Amaretti Morbidi)</a>.',
			cuisins: [],
			dishTypes: ['dessert'],
			readyInMinutes: 45,
			aggregateLikes: 3,
		},
		{
			id: 638619,
			title: 'Chimichurri',
			image: 'https://spoonacular.com/recipeImages/638619-556x370.jpg',
			summary:
				'The recipe Chimichurri is ready <b>in roughly 45 minutes</b> and is definitely an excellent <b>gluten free, dairy free, paleolithic, and lacto ovo vegetarian</b> option for lovers of Latin American food. This recipe serves 4. One portion of this dish contains around <b>1g of protein</b>, <b>7g of fat</b>, and a total of <b>75 calories</b>. For <b>$1.08 per serving</b>, this recipe <b>covers 8%</b> of your daily requirements of vitamins and minerals. Only a few people really liked this sauce. 2 people have tried and liked this recipe. A mixture of ground pepper, salt, garlic cloves, and a handful of other ingredients are all it takes to make this recipe so flavorful. It is brought to you by Foodista. With a spoonacular <b>score of 50%</b>, this dish is pretty good. Similar recipes include <a href="https://spoonacular.com/recipes/steak-with-chimichurri-sauce-carne-con-chimichurri-1294491">Steak with Chimichurri Sauce (Carne con Chimichurri)</a>, <a href="https://spoonacular.com/recipes/bistec-argentino-al-chimichurri-steak-with-chimichurri-sauce-144447">Bistec Argentino al Chimichurri (Steak with Chimichurri Sauce)</a>, and <a href="https://spoonacular.com/recipes/bistec-argentino-al-chimichurri-steak-with-chimichurri-sauce-1194721">Bistec Argentino al Chimichurri (Steak with Chimichurri Sauce)</a>.',
			cuisins: ['South American', 'Latin American'],
			dishTypes: ['sauce'],
			readyInMinutes: 45,
			aggregateLikes: 2,
		},
		{
			id: 661864,
			title: 'Strawberry Pretzel Salad',
			image: 'https://spoonacular.com/recipeImages/661864-556x370.jpg',
			summary:
				'Strawberry Pretzel Salad requires roughly <b>45 minutes</b> from start to finish. For <b>$2.29 per serving</b>, you get a hor d\'oeuvre that serves 4. Watching your figure? This dairy free recipe has <b>384 calories</b>, <b>7g of protein</b>, and <b>31g of fat</b> per serving. It can be enjoyed any time, but it is especially good for <b>Mother\'s Day</b>. 4 people were impressed by this recipe. It is brought to you by Foodista. Head to the store and pick up cucumber, avocado, spring greens, and a few other things to make it today. Overall, this recipe earns a <b>solid spoonacular score of 56%</b>. Similar recipes are <a href="https://spoonacular.com/recipes/strawberry-pretzel-salad-507583">Strawberry Pretzel Salad</a>, <a href="https://spoonacular.com/recipes/strawberry-pretzel-salad-206426">Strawberry Pretzel Salad</a>, and <a href="https://spoonacular.com/recipes/strawberry-pretzel-salad-808862">Strawberry Pretzel Salad</a>.',
			cuisins: [],
			dishTypes: [
				'side dish',
				'antipasti',
				'salad',
				'starter',
				'snack',
				'appetizer',
				'antipasto',
				"hor d'oeuvre",
			],
			readyInMinutes: 45,
			aggregateLikes: 4,
		},
		{
			id: 633970,
			title: 'Banana & Oreo Muffin',
			image: 'https://spoonacular.com/recipeImages/633970-556x370.jpg',
			summary:
				'Banana & Oreo Muffin is a <b>lacto ovo vegetarian</b> recipe with 4 servings. One portion of this dish contains approximately <b>8g of protein</b>, <b>26g of fat</b>, and a total of <b>535 calories</b>. For <b>60 cents per serving</b>, this recipe <b>covers 11%</b> of your daily requirements of vitamins and minerals. It is brought to you by Foodista. If you have egg, vanillan essence, baking powder, and a few other ingredients on hand, you can make it. This recipe is liked by 15 foodies and cooks. It works best as a breakfast, and is done in about <b>45 minutes</b>. This recipe is typical of Southern cuisine. All things considered, we decided this recipe <b>deserves a spoonacular score of 33%</b>. This score is rather bad. Similar recipes are <a href="https://spoonacular.com/recipes/banana-muffin-763481">Banana Muffin</a>, <a href="https://spoonacular.com/recipes/the-best-ever-banana-muffin-65697">The Best Ever Banana Muffin</a>, and <a href="https://spoonacular.com/recipes/banana-nut-muffin-535217">Banana Nut Muffin</a>.',
			cuisins: ['Southern'],
			dishTypes: ['morning meal', 'brunch', 'breakfast'],
			readyInMinutes: 45,
			aggregateLikes: 15,
		},
		{
			id: 665822,
			title: '{No Bake} Cinnamon Butterscotch Energy Bites',
			image: 'https://spoonacular.com/recipeImages/665822-556x370.jpg',
			summary:
				'{No Bake} Cinnamon Butterscotch Energy Bites might be a good recipe to expand your side dish recipe box. This dairy free recipe serves 14 and costs <b>33 cents per serving</b>. One portion of this dish contains roughly <b>10g of protein</b>, <b>18g of fat</b>, and a total of <b>279 calories</b>. This recipe from Foodista has 2 fans. From preparation to the plate, this recipe takes about <b>45 minutes</b>. Head to the store and pick up ground oats, oats, peanut butter, and a few other things to make it today. Taking all factors into account, this recipe <b>earns a spoonacular score of 54%</b>, which is good. Try <a href="https://spoonacular.com/recipes/no-bake-cinnamon-butterscotch-energy-bites-1378981">{No Bake} Cinnamon Butterscotch Energy Bites</a>, <a href="https://spoonacular.com/recipes/no-bake-cinnamon-butterscotch-energy-bites-1244961">{No Bake} Cinnamon Butterscotch Energy Bites</a>, and <a href="https://spoonacular.com/recipes/apple-cinnamon-no-bake-energy-bites-831420">Apple Cinnamon No Bake Energy Bites</a> for similar recipes.',
			cuisins: [],
			dishTypes: ['side dish'],
			readyInMinutes: 45,
			aggregateLikes: 2,
		},
	];
	const japaneseRecipes = [
		{
			id: 643129,
			title: 'Flawless Chocolate Fudge',
			image: 'https://spoonacular.com/recipeImages/643129-556x370.jpg',
			summary:
				'Flawless Chocolate Fudge requires approximately <b>1 hour</b> from start to finish. One portion of this dish contains roughly <b>2g of protein</b>, <b>10g of fat</b>, and a total of <b>291 calories</b>. This recipe serves 16 and costs 33 cents per serving. This recipe from Foodista has 9 fans. It is a good option if you\'re following a <b>gluten free</b> diet. If you have butter, marshmallow fluff, real vanillan extract, and a few other ingredients on hand, you can make it. It works well as a very affordable dessert. Overall, this recipe earns a <b>rather bad spoonacular score of 15%</b>. If you like this recipe, you might also like recipes such as <a href="https://spoonacular.com/recipes/bakers-fabulously-flawless-fudge-142413">Baker\'s Fabulously Flawless Fudge</a>, <a href="https://spoonacular.com/recipes/chocolate-fudge-cupcakes-filled-with-chocolate-fudge-cookie-bar-and-marshmallow-meringue-frosting-373158">Chocolate Fudge Cupcakes filled with Chocolate Fudge Cookie Bar and Marshmallow Meringue Frosting</a>, and <a href="https://spoonacular.com/recipes/chocolate-fudge-cake-recipe-mega-chocolate-fudge-cake-60909">Chocolate Fudge Cake Recipe (mega Chocolate Fudge Cake)</a>.',
			cuisins: [],
			dishTypes: ['dessert'],
			readyInMinutes: 60,
			aggregateLikes: 9,
		},
		{
			id: 661218,
			title: 'Spicy Tuna Cakes',
			image: 'https://spoonacular.com/recipeImages/661218-556x370.jpg',
			summary:
				'If you want to add more <b>pescatarian</b> recipes to your repertoire, Spicy Tuna Cakes might be a recipe you should try. One portion of this dish contains around <b>24g of protein</b>, <b>4g of fat</b>, and a total of <b>232 calories</b>. This recipe serves 3. For <b>$1.44 per serving</b>, this recipe <b>covers 20%</b> of your daily requirements of vitamins and minerals. A mixture of mirepoix, hot sauce, juice of lemon, and a handful of other ingredients are all it takes to make this recipe so delicious. It is brought to you by Foodista. From preparation to the plate, this recipe takes around <b>45 minutes</b>. Only a few people made this recipe, and 5 would say it hit the spot. Overall, this recipe earns a <b>pretty good spoonacular score of 70%</b>. If you like this recipe, you might also like recipes such as <a href="https://spoonacular.com/recipes/spicy-tuna-cakes-1584517">Spicy Tuna Cakes</a>, <a href="https://spoonacular.com/recipes/spicy-tuna-cakes-1305729">Spicy Tuna Cakes</a>, and <a href="https://spoonacular.com/recipes/spicy-tuna-cakes-1310663">Spicy Tuna Cakes</a>.',
			cuisins: [],
			dishTypes: [],
			readyInMinutes: 45,
			aggregateLikes: 5,
		},
		{
			id: 661291,
			title: 'Spinach Cheese Tortellini',
			summary:
				'The recipe Spinach Cheese Tortellini can be made <b>in around 45 minutes</b>. This recipe makes 8 servings with <b>199 calories</b>, <b>4g of protein</b>, and <b>16g of fat</b> each. For <b>65 cents per serving</b>, this recipe <b>covers 11%</b> of your daily requirements of vitamins and minerals. 2 people have made this recipe and would make it again. This recipe from Foodista requires olive oil, onion, pepper flakes, and spinach. It works well as a very reasonably priced hor d\'oeuvre. With a spoonacular <b>score of 39%</b>, this dish is not so excellent. If you like this recipe, take a look at these similar recipes: <a href="https://spoonacular.com/recipes/spinach-cheese-tortellini-1363967">Spinach Cheese Tortellini</a>, <a href="https://spoonacular.com/recipes/three-cheese-spinach-tortellini-532949">Three Cheese Spinach Tortellini</a>, and <a href="https://spoonacular.com/recipes/spinach-and-cheese-tortellini-primavera-497197">Spinach and Cheese Tortellini Primavera</a>.',
			cuisins: [],
			dishTypes: ['side dish', 'antipasti', 'starter', 'snack', 'appetizer', 'antipasto', "hor d'oeuvre"],
			readyInMinutes: 45,
			aggregateLikes: 2,
		},
		{
			id: 1098299,
			title: 'Berry Frozen Yogurt Popsicles',
			image: 'https://spoonacular.com/recipeImages/1098299-556x370.jpg',
			summary:
				'If you want to add more <b>gluten free, dairy free, lacto ovo vegetarian, and fodmap friendly</b> recipes to your recipe box, Berry Frozen Yogurt Popsicles might be a recipe you should try. For <b>63 cents per serving</b>, this recipe <b>covers 3%</b> of your daily requirements of vitamins and minerals. One portion of this dish contains around <b>1g of protein</b>, <b>2g of fat</b>, and a total of <b>64 calories</b>. This recipe serves 10. If you have vanilla yogurt, raspberries, blueberries, and a few other ingredients on hand, you can make it. 2 people have made this recipe and would make it again. It is brought to you by Foodista. From preparation to the plate, this recipe takes about <b>4 hours and 20 minutes</b>. With a spoonacular <b>score of 28%</b>, this dish is rather bad. Similar recipes are <a href="https://spoonacular.com/recipes/berry-frozen-yogurt-popsicles-1405011">Berry Frozen Yogurt Popsicles</a>, <a href="https://spoonacular.com/recipes/raspberry-maple-frozen-yogurt-popsicles-573923">Raspberry-Maple Frozen Yogurt Popsicles</a>, and <a href="https://spoonacular.com/recipes/berry-yogurt-popsicles-50710">Berry Yogurt Popsicles</a>.',
			cuisins: [],
			dishTypes: [],
			readyInMinutes: 260,
			aggregateLikes: 2,
		},
		{
			id: 637624,
			title: 'Cheesecake Ice-Cream With Mango Syrup',
			image: 'https://spoonacular.com/recipeImages/637624-556x370.jpg',
			summary:
				'If you have about <b>45 minutes</b> to spend in the kitchen, Cheesecake Ice-Cream With Mango Syrup might be a spectacular <b>gluten free and lacto ovo vegetarian</b> recipe to try. For <b>$1.27 per serving</b>, you get a dessert that serves 10. One serving contains <b>304 calories</b>, <b>8g of protein</b>, and <b>11g of fat</b>. 18 people were impressed by this recipe. Head to the store and pick up condensed milk, milk, water, and a few other things to make it today. It is brought to you by Foodista. Taking all factors into account, this recipe <b>earns a spoonacular score of 42%</b>, which is good. Try <a href="https://spoonacular.com/recipes/mango-chili-ice-cream-best-lick-2008-ice-cream-contest-entr-58729">Mango Chili Ice Cream Best Lick! 2008 Ice Cream Contest Entr</a>, <a href="https://spoonacular.com/recipes/patriotic-ice-cream-sandwiches-with-red-velvet-shortbread-stars-cheesecake-ice-cream-497575">Patriotic Ice Cream Sandwiches, with Red Velvet Shortbread Stars & Cheesecake Ice Cream</a>, and <a href="https://spoonacular.com/recipes/cherry-cheesecake-ice-cream-best-lick-2008-ice-cream-contes-70731">Cherry Cheesecake Ice Cream Best Lick! 2008 Ice Cream Contes</a> for similar recipes.',
			cuisins: [],
			dishTypes: ['dessert'],
			readyInMinutes: 45,
			aggregateLikes: 18,
		},
		{
			id: 775666,
			title: 'Easy Homemade Apple Fritters',
			image: 'https://spoonacular.com/recipeImages/775666-556x370.jpg',
			summary:
				'Easy Homemade Apple Fritters might be just the breakfast you are searching for. One portion of this dish contains approximately <b>2g of protein</b>, <b>1g of fat</b>, and a total of <b>148 calories</b>. This recipe serves 12 and costs 16 cents per serving. If you have egg, apple, sugar, and a few other ingredients on hand, you can make it. 1334 people were impressed by this recipe. It is brought to you by recipe-of-today.blogspot.com. From preparation to the plate, this recipe takes around <b>30 minutes</b>. It is a good option if you\'re following a <b>lacto ovo vegetarian</b> diet. Taking all factors into account, this recipe <b>earns a spoonacular score of 26%</b>, which is rather bad. Try <a href="https://spoonacular.com/recipes/easy-gluten-free-apple-fritters-1138722">Easy Gluten Free Apple Fritters</a>, <a href="https://spoonacular.com/recipes/easy-homemade-apple-sauce-676445">Easy Homemade Apple Sauce</a>, and <a href="https://spoonacular.com/recipes/easy-homemade-apple-oat-muesli-506904">Easy Homemade Apple & Oat Muesli</a> for similar recipes.',
			cuisins: [],
			dishTypes: ['morning meal', 'brunch', 'breakfast'],
			readyInMinutes: 30,
			aggregateLikes: 1334,
		},
		{
			id: 639608,
			title: 'Classic Hush Puppies',
			image: 'https://spoonacular.com/recipeImages/639608-556x370.jpg',
			summary:
				'Need a <b>lacto ovo vegetarian side dish</b>? Classic Hush Puppies could be a great recipe to try. One serving contains <b>230 calories</b>, <b>6g of protein</b>, and <b>6g of fat</b>. This recipe serves 8. For <b>34 cents per serving</b>, this recipe <b>covers 8%</b> of your daily requirements of vitamins and minerals. 3 people were impressed by this recipe. If you have cornmeal, milk, flour, and a few other ingredients on hand, you can make it. This recipe is typical of Southern cuisine. It is brought to you by Foodista. From preparation to the plate, this recipe takes roughly <b>45 minutes</b>. With a spoonacular <b>score of 42%</b>, this dish is solid. Similar recipes are <a href="https://spoonacular.com/recipes/hush-puppies-1403953">Hush Puppies</a>, <a href="https://spoonacular.com/recipes/hush-puppies-1378395">Hush Puppies</a>, and <a href="https://spoonacular.com/recipes/hush-puppies-749725">Hush Puppies</a>.',
			cuisins: ['Southern'],
			dishTypes: ['side dish'],
			readyInMinutes: 45,
			aggregateLikes: 3,
		},
		{
			id: 641227,
			title: 'Dandelion pesto',
			image: 'https://spoonacular.com/recipeImages/641227-556x370.jpg',
			summary:
				'If you want to add more <b>gluten free, dairy free, paleolithic, and lacto ovo vegetarian</b> recipes to your repertoire, Dandelion pesto might be a recipe you should try. For <b>59 cents per serving</b>, this recipe <b>covers 6%</b> of your daily requirements of vitamins and minerals. This recipe serves 4. This condiment has <b>144 calories</b>, <b>1g of protein</b>, and <b>15g of fat</b> per serving. 103 people have tried and liked this recipe. If you have macadamia nuts, basil leaves, sea salt, and a few other ingredients on hand, you can make it. It is brought to you by Foodista. From preparation to the plate, this recipe takes roughly <b>45 minutes</b>. With a spoonacular <b>score of 62%</b>, this dish is pretty good. If you like this recipe, take a look at these similar recipes: <a href="https://spoonacular.com/recipes/dandelion-pesto-14296">Dandelion Pesto</a>, <a href="https://spoonacular.com/recipes/dandelion-pumpkin-seed-pesto-14309">Dandelion Pumpkin Seed Pesto</a>, and <a href="https://spoonacular.com/recipes/almond-herb-tarts-with-dandelion-pesto-truffled-fontina-figs-9087">Almond Herb Tarts With Dandelion Pesto, Truffled Fontina & Figs</a>.',
			cuisins: [],
			dishTypes: ['condiment', 'dip', 'sauce', 'spread'],
			readyInMinutes: 45,
			aggregateLikes: 103,
		},
		{
			id: 982365,
			title: 'Instant Pot Hawaiian Chicken',
			image: 'https://spoonacular.com/recipeImages/982365-556x370.jpg',
			summary:
				'Instant Pot Hawaiian Chicken is a <b>gluten free and dairy free</b> main course. For <b>$2.35 per serving</b>, this recipe <b>covers 23%</b> of your daily requirements of vitamins and minerals. This recipe makes 4 servings with <b>473 calories</b>, <b>38g of protein</b>, and <b>5g of fat</b> each. It is brought to you by Pink When. A mixture of barbecue sauce, chicken breasts, dole pineapple tidbits, and a handful of other ingredients are all it takes to make this recipe so delicious. This recipe is liked by 19 foodies and cooks. From preparation to the plate, this recipe takes around <b>18 minutes</b>. With a spoonacular <b>score of 73%</b>, this dish is pretty good. Try <a href="https://spoonacular.com/recipes/instant-pot-hawaiian-chicken-1398443">Instant Pot Hawaiian Chicken</a>, <a href="https://spoonacular.com/recipes/instant-pot-hawaiian-chicken-1385119">Instant Pot Hawaiian Chicken</a>, and <a href="https://spoonacular.com/recipes/instant-pot-hawaiian-chicken-1326743">Instant Pot Hawaiian Chicken</a> for similar recipes.',
			cuisins: [],
			dishTypes: ['lunch', 'main course', 'main dish', 'dinner'],
			readyInMinutes: 18,
			aggregateLikes: 19,
		},
		{
			id: 636598,
			title: 'Butternut Squash Souffle Side Dish',
			image: 'https://spoonacular.com/recipeImages/636598-556x370.jpg',
			summary:
				'Need a <b>gluten free, lacto ovo vegetarian, and primal hor d\'oeuvre</b>? Butternut Squash Souffle Side Dish could be an amazing recipe to try. One serving contains <b>234 calories</b>, <b>6g of protein</b>, and <b>18g of fat</b>. This recipe serves 4 and costs 81 cents per serving. Only a few people really liked this Mediterranean dish. From preparation to the plate, this recipe takes roughly <b>45 minutes</b>. 2 people found this recipe to be tasty and satisfying. Head to the store and pick up butter to grease the ramekins, milk, heavy cream, and a few other things to make it today. It is brought to you by Foodista. Taking all factors into account, this recipe <b>earns a spoonacular score of 39%</b>, which is not so awesome. If you like this recipe, take a look at these similar recipes: <a href="https://spoonacular.com/recipes/butternut-squash-souffle-side-dish-1270109">Butternut Squash Souffle Side Dish</a>, <a href="https://spoonacular.com/recipes/side-dish-saturdays-twice-baked-butternut-squash-492796">Side Dish Saturdays: Twice Baked Butternut Squash</a>, and <a href="https://spoonacular.com/recipes/easy-butternut-squash-skillet-my-new-favorite-side-dish-504257">Easy Butternut Squash Skillet – My New Favorite Side Dish</a>.',
			cuisins: ['Mediterranean', 'French', 'European'],
			dishTypes: ['antipasti', 'starter', 'snack', 'appetizer', 'antipasto', "hor d'oeuvre"],
			readyInMinutes: 45,
			aggregateLikes: 2,
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

	const responsiveOptions = [
		{
			breakpoint: '1199px',
			numVisible: 5,
			numScroll: 1,
		},
		{
			breakpoint: '874px',
			numVisible: 4,
			numScroll: 1,
		},
		{
			breakpoint: '567px',
			numVisible: 3,
			numScroll: 1,
		},
		{
			breakpoint: '446px',
			numVisible: 2,
			numScroll: 1,
		},
	];

	return (
		<div className="home">
			<div className="home-todays-picks-title-container">
				<h2>Today's Menú</h2>
				<div className="todays-recipes-divisor"></div>
				<p>our {day.toLocaleLowerCase()} balanced picks...</p>
			</div>
			<div className="todays-recipes-container">
				{randomPicks?.map((recipe, index) => {
					return <PrincipalRecipe key={recipe.id} data={recipe} index={index + 1} />;
				})}
			</div>

			<div className="carousel-component-container">
				<div className="background"></div>
				<h3>Nutritious vegan recipes</h3>
				<Carousel value={veganRecipes} />
				<h3>Caribbean surprises</h3>
				<Carousel value={caribbeanRecipes} />
				<h3>Popular American recipes</h3>
				<Carousel value={americanRecipes} />
				<h3>Italy food</h3>
				<Carousel value={italianRecipes} />
				<h3>Japanese tradition</h3>
				<Carousel value={japaneseRecipes} />
			</div>
			{/* <div>
				<button className="refreshButton" onClick={handleClick}>
					Refresh recipes
				</button>
				<Link to="/recipe">
					<button className="addButton">Add new recipe</button>
				</Link>
			</div> */}

			{/* <div className="allrecipes">
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
			</div> */}
		</div>
	);
}
