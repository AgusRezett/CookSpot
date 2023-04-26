import React from 'react';
import PropTypes from 'prop-types';

// Router
import { Link } from 'react-router-dom';

// Styles
import '../styles/Navbar.css';

// Images-Icons
import CookSpotHorizontalLogo from '../assets/svgs/Logo-H.svg';

const navigation = [
	{ name: 'Home', href: '/home' },
	{ name: 'My Recipes', href: '/recipe' },
	{ name: 'Likes', href: '/likes' },
	{ name: 'About Us', href: '/team' },
];

const Navbar = (props) => {
	return (
		<nav className="navbars-container">
			<div className="first-navbar-container">
				<Link to={'/home'} passHref key={'Home'}>
					<img src={CookSpotHorizontalLogo} alt="CookSpot vertical logo" className="logo-image" />
				</Link>
			</div>
			<div className="second-navbar-container">
				{navigation.map((item) => (
					<Link to={item.href} passHref key={item.name} className="nav-item">
						{item.name}
					</Link>
				))}
			</div>
		</nav>
	);
};

Navbar.propTypes = {};

export default Navbar;
