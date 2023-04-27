import React from 'react';
import { Link } from 'react-router-dom';

// Styles
import '../styles/Home.css';

// Components
import { motion } from 'framer-motion';

// Images-Icons
import HenryLogo from '../assets/images/logo-henry.png';
import CookSpotHorizontalLogo from '../assets/svgs/Logo-H.svg';
import { IoIosArrowForward } from 'react-icons/io';

export default function Landing() {
	return (
		<div className={'welcome'}>
			<motion.div
				className={'wordsRowContainer'}
				animate={{
					opacity: [0, 1, 0],
					scale: [0.5, 1.3],
				}}
				transition={{
					duration: 5,
					delay: 0,
					ease: 'easeIn',
				}}
			>
				<img src={HenryLogo} style={{ width: 210, height: 40 }} priority alt="Henry black variant" />
				<p className={'welcomeRegularText'} style={{ marginLeft: 10 }}>
					- Agustin Rezett
				</p>
			</motion.div>
			<motion.div
				className={'wordsColumnContainer'}
				animate={{
					opacity: [0, 1, 0],
					scale: [0.5, 1.3],
				}}
				transition={{
					duration: 4,
					delay: 4.7,
					ease: 'easeIn',
				}}
			>
				<p className={'welcomeRegularText'}>Full Stack Developer</p>
				<p className={'welcomeBoldText'}>Foods | Proyecto Individual</p>
			</motion.div>
			<motion.div
				className={'wordsColumnContainer'}
				animate={{
					opacity: [0, 1],
					scale: [0.5, 1],
				}}
				transition={{
					duration: 3,
					delay: 8.7,
					ease: 'easeInOut',
				}}
			>
				<img
					src={CookSpotHorizontalLogo}
					style={{ width: '800px', height: 'auto' }}
					priority
					alt="CookSpot logo"
				/>
				<motion.div
					className={'welcomeDivisorContainer'}
					animate={{
						opacity: [0, 1],
					}}
					transition={{
						duration: 2,
						delay: 12,
						ease: 'easeInOut',
					}}
				>
					<div className={'welcomeLogoDivisor'}></div>
					<h6 className={'subTitleText'}>RECIPES . SPOONACULAR . API</h6>
					<motion.div
						className={'welcomeDivisorContainer'}
						animate={{
							opacity: [0, 1],
							marginTop: ['85px', '40px'],
						}}
						transition={{
							duration: 1,
							delay: 12,
							ease: 'easeInOut',
						}}
					>
						<Link to="/home" id="click">
							<div className={'nextViewButton'}>
								<IoIosArrowForward />
							</div>
						</Link>
					</motion.div>
				</motion.div>
			</motion.div>
		</div>
	);
}
