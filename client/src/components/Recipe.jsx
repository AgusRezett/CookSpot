import React from 'react';

// Styles
import '../styles/Recipes.css';

// Icons
import { HiHeart } from 'react-icons/hi';
import { Link, useNavigate } from 'react-router-dom';
import { IoIosTimer, IoMdTrash } from 'react-icons/io';
import { MdAttachMoney, MdMoneyOffCsred } from 'react-icons/md';

// Redux
import { useDispatch } from 'react-redux';
import { deleteRecipe } from '../actions';

let prevId = 1;

export default function Recipe(recipes) {
	const { id, image, name, title, dietTypes, aggregateLikes, readyInMinutes, cheap } = recipes;
	const dispatch = useDispatch();
	let navigate = useNavigate();
	const recipeFromDb = String(id).includes('-');

	const handleDeleteRecipe = async () => {
		if (recipeFromDb) {
			if (window.confirm('Are you sure you want to delete this recipe?')) {
				await dispatch(deleteRecipe(id)).then((res) => {
					res.status ? alert(res.data) : alert('Recipe deleted successfully!');
				});
			}
		}
	};

	const handleClick = (event) => {
		event.preventDefault();
		try {
			if (event.target.tagName === 'IMG') {
				navigate(`/recipes/${id}`);
			} else {
				switch (event.detail) {
					case 1: {
						handleDeleteRecipe();
						break;
					}
					default: {
						break;
					}
				}
			}
		} catch (error) {}
	};

	return (
		<div className="recipe-container">
			<div className="recipe-link">
				<Link className="recipe-image-container" to={`/recipes/${id}`} onClick={(e) => handleClick(e)}>
					<img className="recipeImg" src={image} alt="Not found" />
					{recipeFromDb && (
						<form onSubmit={handleDeleteRecipe} className="delete-recipe-button">
							<IoMdTrash color="#fff" />
						</form>
					)}

					{cheap !== undefined && (
						<div className={`money-bubble ${cheap && 'cheap-recipe'}`}>
							{cheap ? (
								<MdAttachMoney size={19} color="#fff" />
							) : (
								<MdMoneyOffCsred size={19} color="#fff" />
							)}
						</div>
					)}
				</Link>

				<Link className="recipe-title-container" to={`/recipes/${id}`}>
					{title ? title : name}
				</Link>

				<div className="dietcointainer">
					{dietTypes?.map((e) => {
						return (
							<h5 className="diets" key={prevId++}>
								{!e.name ? e : e.name}
							</h5>
						);
					})}
				</div>
				{aggregateLikes && (
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
				)}
			</div>
		</div>
	);
}
