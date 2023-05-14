import React from 'react';

// Styles
import '../styles/Landing.css';

// Images-Icons
import CookSpotHorizontalLogo from '../assets/svgs/Logo-H.svg';
import { IoIosArrowForward } from 'react-icons/io';

export default function Landing() {
	return (
		<div className={'welcome'}>
			<div className={'wordsColumnContainer'}>
				<img src={CookSpotHorizontalLogo} style={{ width: '140%', height: 'auto' }} priority="true" alt="CookSpot logo" />
				<div className={'welcomeDivisorContainer'}>
					<div className={'welcomeLogoDivisor'}></div>
					<h6 className={'subTitleText'}>RECIPES . SPOONACULAR . API</h6>
					<a href="/home" id="click">
						<div className={'nextViewButton'}>
							<IoIosArrowForward />
						</div>
					</a>
				</div>
			</div>
		</div>
	);
}
