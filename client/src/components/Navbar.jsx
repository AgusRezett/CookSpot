import React, { useEffect } from 'react';
//import PropTypes from 'prop-types';

// Router
import { Link } from 'react-router-dom';

// Styles
import '../styles/Navbar.css';

// Images-Icons
import CookSpotHorizontalLogo from '../assets/svgs/Logo-H.svg';

const navigation = [
	{ name: 'Home', href: '/home' },
	//{ name: 'Add Recipe', href: '/recipe' },
	{ name: 'All Recipes', href: '/recipes' },
	//{ name: 'Saved', href: '/saved' },
	//{ name: 'Liked', href: '/likes' },
];

const Navbar = ({ applyHeight }) => {
	// Apply the current navbar height used for padding the main
	useEffect(() => {
		const navbarContainer = document.getElementById('navbars-container');
		const onResizeGetPadding = () => {
			applyHeight(navbarContainer.offsetHeight);
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
	}, [applyHeight]);

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
