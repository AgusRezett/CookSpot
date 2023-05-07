import { useEffect, useState } from 'react';
import { Route, Routes, useLocation } from 'react-router-dom';
import Navbar from './components/Navbar';
import Landing from './pages/Landing';
import Home from './pages/Home';
import Recipes from './pages/Recipes';
import AddRecipe from './pages/AddRecipe';
import RecipeDetails from './pages/RecipeDetails';

function App() {
	let location = useLocation();
	const [mainContainerPaddingTop, setMainContainerPaddingTop] = useState('');
	const [showNavbar, setShowNavbar] = useState(false);

	const paddingMainContainerStyles = {
		padding: 20,
		paddingLeft: location.pathname === '/new-recipe' && window.innerWidth < 640 ? 40 : 20,
		paddingTop: showNavbar
			? mainContainerPaddingTop === 40
				? mainContainerPaddingTop + 50
				: mainContainerPaddingTop === 82
				? mainContainerPaddingTop + 65
				: mainContainerPaddingTop + 25
			: 20,
	};

	useEffect(() => {
		setShowNavbar(location.pathname !== '/' || location.pathname !== '/');
		//console.log('Cambié');
	}, [location]);

	return (
		<>
			{showNavbar && <Navbar applyHeight={setMainContainerPaddingTop} />}
			<div className="main-container" style={paddingMainContainerStyles}>
				<Routes>
					<Route path="/" exact element={<Landing />} />
					<Route path="/home" exact element={<Home />} />
					<Route path="/new-recipe" exact element={<AddRecipe />} />
					<Route path="/recipes" exact element={<Recipes />} />
					<Route path="/recipes/:id" exact element={<RecipeDetails />} />
				</Routes>
			</div>
		</>
	);
}

export default App;
