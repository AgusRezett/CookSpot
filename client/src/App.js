import { useEffect, useState } from 'react';
import { BrowserRouter, Route, Switch, useLocation } from 'react-router-dom';
import Navbar from './components/Navbar';
import Landing from './pages/Landing';
import Home from './pages/Home';
import Recipes from './pages/Recipes';
import AddRecipe from './components/AddRecipe';
import RecipeDetails from './pages/RecipeDetails';

function App() {
	const location = new useLocation();
	const [mainContainerPaddingTop, setMainContainerPaddingTop] = useState('');
	const [showNavbar, setShowNavbar] = useState(true);

	const paddingMainContainerStyles = {
		padding: 20,
		paddingTop: showNavbar
			? mainContainerPaddingTop === 40
				? mainContainerPaddingTop + 50
				: mainContainerPaddingTop + 25
			: 20,
	};

	useEffect(() => {
		setShowNavbar(location.pathname !== '/');
	}, [location.pathname]);

	return (
		<BrowserRouter>
			{showNavbar && <Navbar applyHeight={setMainContainerPaddingTop} />}
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
