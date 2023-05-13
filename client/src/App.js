import { useEffect, useState } from 'react';
import { Route, Routes, useLocation } from 'react-router-dom';
import Navbar from './components/Navbar';
import Landing from './pages/Landing';
import Home from './pages/Home';
import Recipes from './pages/Recipes';
import AddRecipe from './pages/AddRecipe';
import RecipeDetails from './pages/RecipeDetails';
import { LoadingScreen } from './components/LoadingScreen';

function App() {
	let location = useLocation();
	const [mainContainerPaddingTop, setMainContainerPaddingTop] = useState('');
	const [showNavbar, setShowNavbar] = useState(false);

	const paddingMainContainerStyles = {
		padding: 20,
		paddingLeft: location.pathname === '/new-recipe' && window.innerWidth < 640 ? 20 : 20,
		paddingTop: showNavbar ? (location.pathname === '/new-recipe' ? mainContainerPaddingTop : mainContainerPaddingTop + 20) : 20,
		paddingBottom: location.pathname === '/new-recipe' && 0,
	};

	useEffect(() => {
		setShowNavbar(location.pathname !== '/' || location.pathname !== '/');
	}, [location]);

	return (
		<>
			{showNavbar && <Navbar applyHeight={setMainContainerPaddingTop} />}
			<LoadingScreen styles={paddingMainContainerStyles} />
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
