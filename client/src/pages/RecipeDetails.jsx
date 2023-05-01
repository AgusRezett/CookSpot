import React from 'react';
import { useEffect } from 'react';

// Components
import { Link } from 'react-router-dom';

// Styles
import '../styles/RecipeDetails.css';

//Redux
import { useDispatch, useSelector } from 'react-redux';
import { getRecipeDetails } from '../actions';

export default function RecipeDetails(props) {
	const dispatch = useDispatch();
	const id = props.match.params.id;

	useEffect(() => {
		//dispatch(getRecipeDetails(id));
	}, [dispatch, id]);

	//const recipeDetails = useSelector((state) => state.recipeDetails);
	const recipeDetails = {
		vegetarian: true,
		vegan: true,
		glutenFree: true,
		dairyFree: true,
		veryHealthy: true,
		cheap: false,
		veryPopular: true,
		sustainable: false,
		lowFodmap: false,
		weightWatcherSmartPoints: 4,
		gaps: 'no',
		preparationMinutes: -1,
		cookingMinutes: -1,
		aggregateLikes: 3689,
		healthScore: 75,
		creditsText: 'Full Belly Sisters',
		license: 'CC BY-SA 3.0',
		sourceName: 'Full Belly Sisters',
		pricePerServing: 112.39,
		extendedIngredients: [
			{
				id: 11090,
				aisle: 'Produce',
				image: 'broccoli.jpg',
				consistency: 'SOLID',
				name: 'broccoli',
				nameClean: 'broccoli',
				original: '2 cups cooked broccoli, chopped small',
				originalName: 'cooked broccoli, chopped small',
				amount: 2,
				unit: 'cups',
				meta: [Array],
				measures: [Object],
			},
			{
				id: 11135,
				aisle: 'Produce',
				image: 'cauliflower.jpg',
				consistency: 'SOLID',
				name: 'cauliflower',
				nameClean: 'cauliflower',
				original: '1 head of cauliflower, raw',
				originalName: 'cauliflower, raw',
				amount: 1,
				unit: 'head',
				meta: [Array],
				measures: [Object],
			},
			{
				id: 4047,
				aisle: 'Health Foods;Baking',
				image: 'oil-coconut.jpg',
				consistency: 'LIQUID',
				name: 't coconut oil',
				nameClean: 'coconut oil',
				original: '1 + 1 T coconut oil or butter',
				originalName: '1 T coconut oil or butter',
				amount: 1,
				unit: '',
				meta: [],
				measures: [Object],
			},
			{
				id: 20041,
				aisle: 'Pasta and Rice',
				image: 'rice-brown-cooked.png',
				consistency: 'SOLID',
				name: 'brown rice',
				nameClean: 'cooked brown rice',
				original: '3 cups of cooked brown rice, cold',
				originalName: 'cooked brown rice, cold',
				amount: 3,
				unit: 'cups',
				meta: [Array],
				measures: [Object],
			},
			{
				id: 11215,
				aisle: 'Produce',
				image: 'garlic.png',
				consistency: 'SOLID',
				name: 'garlic',
				nameClean: 'garlic',
				original: '5 cloves of garlic, chopped',
				originalName: 'garlic, chopped',
				amount: 5,
				unit: 'cloves',
				meta: [Array],
				measures: [Object],
			},
			{
				id: 4517,
				aisle: 'Oil, Vinegar, Salad Dressing',
				image: 'vegetable-oil.jpg',
				consistency: 'LIQUID',
				name: 't grapeseed oil',
				nameClean: 'grape seed oil',
				original: '1 + 1 T grapeseed oil',
				originalName: '1 T grapeseed oil',
				amount: 1,
				unit: '',
				meta: [],
				measures: [Object],
			},
			{
				id: 16424,
				aisle: 'Ethnic Foods;Condiments',
				image: 'soy-sauce.jpg',
				consistency: 'LIQUID',
				name: 'soy sauce',
				nameClean: 'lower sodium soy sauce',
				original: '3T reduced-sodium soy sauce',
				originalName: 'reduced-sodium soy sauce',
				amount: 3,
				unit: 'T',
				meta: [Array],
				measures: [Object],
			},
			{
				id: 11304,
				aisle: 'Produce',
				image: 'peas.jpg',
				consistency: 'SOLID',
				name: 'peas',
				nameClean: 'petite peas',
				original: '1 cup frozen peas',
				originalName: 'frozen peas',
				amount: 1,
				unit: 'cup',
				meta: [Array],
				measures: [Object],
			},
			{
				id: 2047,
				aisle: 'Spices and Seasonings',
				image: 'salt.jpg',
				consistency: 'SOLID',
				name: 'salt',
				nameClean: 'table salt',
				original: 'salt, to taste',
				originalName: 'salt, to taste',
				amount: 8,
				unit: 'servings',
				meta: [Array],
				measures: [Object],
			},
			{
				id: 11291,
				aisle: 'Produce',
				image: 'spring-onions.jpg',
				consistency: 'SOLID',
				name: 'additional scallion tops',
				nameClean: 'spring onions',
				original: 'additional chopped scallion tops for garnish',
				originalName: 'additional chopped scallion tops for garnish',
				amount: 8,
				unit: 'servings',
				meta: [Array],
				measures: [Object],
			},
			{
				id: 11291,
				aisle: 'Produce',
				image: 'spring-onions.jpg',
				consistency: 'SOLID',
				name: 'scallions',
				nameClean: 'spring onions',
				original: '7 scallions, chopped (keep white/light green ends separate from dark green tops)',
				originalName: 'scallions, chopped (keep white/light green ends separate from dark green tops)',
				amount: 7,
				unit: '',
				meta: [Array],
				measures: [Object],
			},
			{
				id: 4058,
				aisle: 'Ethnic Foods',
				image: 'sesame-oil.png',
				consistency: 'LIQUID',
				name: 'sesame oil',
				nameClean: 'sesame oil',
				original: '2t toasted sesame oil',
				originalName: 'toasted sesame oil',
				amount: 2,
				unit: 't',
				meta: [Array],
				measures: [Object],
			},
			{
				id: 12023,
				aisle: 'Ethnic Foods;Spices and Seasonings',
				image: 'sesame-seeds.png',
				consistency: 'SOLID',
				name: 'sesame seeds',
				nameClean: 'sesame seeds',
				original: 'toasted sesame seeds, optional',
				originalName: 'toasted sesame seeds, optional',
				amount: 8,
				unit: 'servings',
				meta: [Array],
				measures: [Object],
			},
		],
		id: 716426,
		title: 'Cauliflower, Brown Rice, and Vegetable Fried Rice',
		readyInMinutes: 30,
		servings: 8,
		sourceUrl: 'http://fullbellysisters.blogspot.com/2012/01/cauliflower-fried-rice-more-veggies.html',
		image: 'https://spoonacular.com/recipeImages/716426-556x370.jpg',
		imageType: 'jpg',
		summary: `You can never have too many Chinese recipes, so give Cauliflower, Brown Rice, and Vegetable Fried Rice a try. 
	  This recipe serves 8 and costs $1.12 per serving. This hor d'oeuvre has <b>192 calories</b>, <b>7g of protein</b>, and <b>6g of fat</b> per serving. Head to the store and pick up broccoli, sesame seeds, soy sauce, and a few other things to make it today. 3689 people were impressed by this recipe. It is brought to you by fullbellysisters.blogspot.com. It is a good 
	  option if you're following a <b>gluten free, dairy free, lacto ovo vegetarian, and vegan</b> diet. From preparation to the plate, this recipe takes roughly <b>30 minutes</b>. Overall, this recipe earns a <b>spectacular spoonacular score of 100%</b>. If you like this recipe, you might also like recipes such as <a href="https://spoonacular.com/recipes/cauliflower-brown-rice-and-vegetable-fried-rice-1584601">Cauliflower, Brown Rice, and Vegetable Fried Rice</a>, <a href="https://spoonacular.com/recipes/cauliflower-brown-rice-and-vegetable-fried-rice-1238897">Cauliflower, Brown Rice, and Vegetable Fried Rice</a>, and <a href="https://spoonacular.com/recipes/cauliflower-brown-rice-and-vegetable-fried-rice-1230097">Cauliflower, 
	  Brown Rice, and Vegetable Fried Rice</a>.`,
		cuisines: ['Chinese', 'Asian'],
		dishTypes: ['side dish', 'antipasti', 'starter', 'snack', 'appetizer', 'antipasto', "hor d'oeuvre"],
		diets: ['gluten free', 'dairy free', 'lacto ovo vegetarian', 'vegan'],
		occasions: [],
		winePairing: {
			pairedWines: [
				'wine',
				'alcoholic drink',
				'white wine',
				'ingredient',
				'food product category',
				'riesling',
				'drink',
				'menu item type',
				'gewurztraminer',
				'chenin blanc',
			],
			pairingText:
				'Vegetable Fried Rice can be paired with Wine, Alcoholic Drink, and White Wine. The best wine for Asian food depends on the cuisine and dish - of course - but these acidic whites pair with a number of traditional meals, spicy or not. One wine you could try is Luna Nuda Prosecco. It has 4.7 out of 5 stars and a bottle costs about 15 dollars.',
			productMatches: [[Object]],
		},
		instructions: `<ol><li><span></span>Remove the cauliflower's tough stem and reserve for another use. Using a food processor, pulse cauliflower florets until they resemble rice or couscous. You should end up with around four cups of "cauliflower rice."</li><li>Heat 1T butter and 1T oil in a large skillet over medium heat. Add garlic and the white and light green 
	  pieces of scallion. Sauté about a minute.</li><li>Add the cauliflower to the pan. Stir to coat with oil, then spread out in pan and let sit; you want it cook a bit and to caramelize (get a bit brown), which will bring out the sweetness. After a couple of minutes, stir and spread out again.</li><li>Add cold rice (it separates easily, so it won't clump up during cooking), plus the additional grapeseed and coconut oil or butter. Raise heat to medium-high. Toss everything together and, again, spread the mixture out over the whole pan and press a bit into the bottom. Let it sit for about two minutes—so the rice can get toasted and a little crispy. Add the peas and broccoli and stir again. Drizzle soy sauce and toasted sesame oil over rice.</li><li>Cook for another minute or so and turn off heat. Add chopped scallion tops and toss.</li><li>I like to toast some sesame seeds in a dry pan; I sprinkle these and some more raw, chopped scallion over the top of the rice for 
	  added flavor and crunch.</li><li>Season to taste with salt and, if you'd like, more soy sauce. Keep in mind that if you're serving this with something salty and saucy (ie. teriyaki chicken) you may want to hold off on adding too much salt to the fried rice.</li></ol>`,
		analyzedInstructions: [{ name: '', steps: [Array] }],
		originalId: null,
		spoonacularSourceUrl: 'https://spoonacular.com/cauliflower-brown-rice-and-vegetable-fried-rice-716426',
	};
	//console.log(recipeDetails);

	return (
		<div className="recipe-details-container" key={id}>
			<div className="recipe-details-content" key={id}>
				<div className="recipe-details-header-container">
					<div className="recipe-image-container">
						<img
							className="detailImg"
							src={
								recipeDetails.image
									? recipeDetails.image
									: 'https://images.unsplash.com/photo-1635321593217-40050ad13c74?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1748&q=80'
							}
							alt="Pic not found"
						/>
					</div>
					<h4>
						Photo by {recipeDetails.creditsText}, {recipeDetails.sourceName}; {recipeDetails.license}
					</h4>
				</div>

				<h3 className="middle-article-title">Recipe</h3>
				<h1 className="middle-recipe-title">{recipeDetails.title}</h1>

				{recipeDetails.dishTypes ? (
					<div className="ddsh">
						<h2 className="texts">Dish Type: </h2>
						{recipeDetails.dishTypes?.map((e) => {
							return (
								<h2 className="dishesanddiets" key={e}>
									{e}
								</h2>
							);
						})}
					</div>
				) : (
					<br />
				)}

				<div className="ddsh">
					<h2 className="texts">Diet Type: </h2>
					{recipeDetails.diets
						? recipeDetails.diets.map((e) => {
								return (
									<h2 className="dishesanddiets" key={e}>
										{e}
									</h2>
								);
						  })
						: recipeDetails.diets?.map((e) => {
								return (
									<h2 className="dishesanddiets" key={e.title}>
										{e.title}
									</h2>
								);
						  })}
				</div>

				<div className="ddsh">
					<h3 className="texts">Summary: </h3>
					<p className="summary">{recipeDetails.summary?.replace(/<[^>]*>/g, '')}</p>
				</div>

				<div className="ddsh">
					<h3 className="scores">Score: {recipeDetails.score}</h3>
					<h3 className="scores">Healthiness points: {recipeDetails.healthScore}</h3>
				</div>

				<div className="ddsh">
					<h3 className="texts">Steps: </h3>
					<ul className="steps">
						{Array.isArray(recipeDetails.steps) ? (
							recipeDetails.steps.map((e) => {
								return <li key={e.number}>{e.step}</li>;
							})
						) : (
							<li>{recipeDetails.steps}</li>
						)}
					</ul>
				</div>

				<Link to="/home">
					<button className="backButton">Go back to recipes</button>
				</Link>
			</div>
		</div>
	);
}
