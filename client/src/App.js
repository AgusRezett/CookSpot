import { useEffect, useState } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Navbar from './components/Navbar';
import Landing from './pages/Landing';
import Home from './pages/Home';
import Recipes from './pages/Recipes';
import AddRecipe from './components/AddRecipe';
import RecipeDetails from './components/RecipeDetails';

function App() {
	const [mainContainerPaddingTop, setMainContainerPaddingTop] = useState('');

	const paddingMainContainerStyles = {
		padding: 20,
		paddingTop: mainContainerPaddingTop === 40 ? mainContainerPaddingTop + 50 : mainContainerPaddingTop + 25,
	};

	// Apply the current navbar height used for padding the main
	useEffect(() => {
		const navbarContainer = document.getElementById('navbars-container');
		const onResizeGetPadding = () => {
			setMainContainerPaddingTop(navbarContainer.offsetHeight);
		};

		onResizeGetPadding();

		window.addEventListener('resize', function () {
			onResizeGetPadding();
		});

		return () => {
			window.removeEventListener('resize', function () {
				onResizeGetPadding();
			});
		};
	}, []);

	return (
		<BrowserRouter>
			<Navbar />
			<div className="main-container" style={paddingMainContainerStyles}>
				<Switch>
					<Route exact path="/" component={Landing} />
					<Route path="/home" exact component={Home} />
					<Route path="/recipe" exact component={AddRecipe} />
					<Route path="/recipes" exact component={Recipes} />
					<Route path="/home/:id" component={RecipeDetails} />
				</Switch>
			</div>
		</BrowserRouter>
	);
}

export default App;
