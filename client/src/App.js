import { BrowserRouter, Route, Switch } from 'react-router-dom';
import HomePage from './pages/HomePage';
import LandingPage from './pages/LandingPage';
import AddRecipe from './components/AddRecipe';
import RecipeDetails from './components/RecipeDetails';
import Navbar from './components/Navbar';

function App() {
	return (
		<BrowserRouter>
			<Navbar />
			<Switch>
				<Route exact path="/" component={LandingPage} />
				<Route path="/home" exact component={HomePage} />
				<Route path="/recipe" exact component={AddRecipe} />
				<Route path="/home/:id" component={RecipeDetails} />
			</Switch>
		</BrowserRouter>
	);
}

export default App;
