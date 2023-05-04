import React from 'react';
import '../styles/Recipes.css';
import { HiHeart } from 'react-icons/hi';
import { Link } from 'react-router-dom';
import { IoIosTimer } from 'react-icons/io';
import { MdAttachMoney, MdMoneyOffCsred } from 'react-icons/md';

let prevId = 1;

export default function Recipe(recipes) {
	const { id, image, title, dietTypes, aggregateLikes, readyInMinutes, cheap } = recipes;

	return (
		<div className="recipe-container">
			<div className="recipe-link">
				<Link className="recipe-image-container" to={`/home/${id}`}>
					<img className="recipeImg" src={image} alt="Not found" />

					<div className={`money-bubble ${cheap && 'cheap-recipe'}`}>
						{cheap ? <MdAttachMoney size={19} color="#fff" /> : <MdMoneyOffCsred size={19} color="#fff" />}
					</div>
				</Link>

				<Link className="recipe-title-container" to={`/home/${id}`}>
					{title}
				</Link>

				<div className="dietcointainer">
					{dietTypes?.map((e) => {
						return (
							<h5 className="diets" key={prevId++}>
								{e}
							</h5>
						);
					})}
				</div>
				<div className="bubbles-container">
					<div className="recipe-likes-container">
						<div className="likes-bubble-container">
							<HiHeart color="#fff" size={16} />
						</div>
						<p>{aggregateLikes}</p>
					</div>
					<div className="recipe-minutes-container">
						<div className="minutes-bubble-container">
							<IoIosTimer color="#fff" size={16} />
						</div>
						<p>{readyInMinutes}'</p>
					</div>
				</div>
			</div>
		</div>
	);
}
