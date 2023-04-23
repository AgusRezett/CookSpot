import Head from 'next/head';
import Image from 'next/image';
import styles from '@/styles/Home.module.css';

// Components
import HenryLogo from '../assets/images/logo-henry.png';
import CookSpotHorizontalLogo from '../assets/svgs/Logo-H.svg';
import { motion } from 'framer-motion';

export default function Home() {
	return (
		<>
			<Head>
				<title>CookSpot</title>
				<meta name="description" content="Generated by create next app" />
				<meta name="viewport" content="width=device-width, initial-scale=1" />
				<link rel="icon" href="/favicon.ico" />
			</Head>
			<main className={`${styles.welcome}`}>
				<motion.div
					className={styles.wordsRowContainer}
					animate={{
						opacity: [0, 1, 0],
						scale: [0.5, 1.3],
					}}
					transition={{
						duration: 4,
						delay: 0,
						ease: 'easeIn',
					}}
				>
					<Image src={HenryLogo} style={{ width: 230, height: 45 }} priority alt="Henry black variant" />
					<p className={styles.welcomeRegularText} style={{ marginLeft: 10 }}>
						- Agustin Rezett
					</p>
				</motion.div>
				<motion.div
					className={styles.wordsColumnContainer}
					animate={{
						opacity: [0, 1, 0],
						scale: [0.5, 1.3],
					}}
					transition={{
						duration: 4,
						delay: 3.75,
						ease: 'easeIn',
					}}
				>
					<p className={styles.welcomeRegularText}>Full Stack Developer</p>
					<p className={styles.welcomeBoldText}>Foods | Proyecto Individual</p>
				</motion.div>
				<motion.div
					className={styles.wordsColumnContainer}
					animate={{
						opacity: [0, 1],
						scale: [0.5, 1],
					}}
					transition={{
						duration: 4,
						delay: 8,
						ease: 'easeInOut',
					}}
				>
					<Image
						src={CookSpotHorizontalLogo}
						style={{ width: '800px', height: 'auto' }}
						priority
						alt="CookSpot logo"
					/>
					<motion.div
						className={styles.welcomeDivisorContainer}
						animate={{
							opacity: [0, 1],
						}}
						transition={{
							duration: 4,
							delay: 10,
							ease: 'easeInOut',
						}}
					>
						<div className={styles.welcomeLogoDivisor}></div>
						<h6 className={styles.subTitleText}>FOOD . SPOONACULAR . API</h6>
					</motion.div>
				</motion.div>
			</main>
		</>
	);
}
