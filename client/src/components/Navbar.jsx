import React from 'react';
//import PropTypes from 'prop-types';

// Router
import { Link } from 'react-router-dom';

// Styles
import '../styles/Navbar.css';

// Images-Icons
import CookSpotHorizontalLogo from '../assets/svgs/Logo-H.svg';

const navigation = [
	{ name: 'Home', href: '/home' },
	{ name: 'Recipes', href: '/recipe' },
	{ name: 'Saved', href: '/saved' },
	{ name: 'Liked', href: '/likes' },
];

const Navbar = (props) => {
	return (
		<nav id="navbars-container">
			<div className="first-navbar-container">
				<Link to={'/home'} key={'Home'}>
					<img src={CookSpotHorizontalLogo} alt="CookSpot vertical logo" className="logo-image" />
				</Link>
			</div>
			<div className="second-navbar-container">
				{navigation.map((item) => (
					<Link to={item.href} key={item.name} className="nav-item">
						{item.name}
					</Link>
				))}
			</div>
		</nav>
	);
};

//Navbar.propTypes = {};

export default Navbar;
