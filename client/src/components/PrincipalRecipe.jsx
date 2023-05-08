import React, { useState } from 'react';

// Components
import { IoIosTimer } from 'react-icons/io';
import { FcLikePlaceholder, FcLike } from 'react-icons/fc';
import { Link, useNavigate } from 'react-router-dom';

const PrincipalRecipe = ({ data, index }) => {
	const [recipeLiked, setRecipeLiked] = useState(false);
	let navigate = useNavigate();

	const handleClick = (event) => {
		event.preventDefault();

		try {
			if (!event.target.className?.includes('random-pick')) {
				switch (event.detail) {
					case 2: {
						setRecipeLiked(!recipeLiked);
						break;
					}
					default: {
						break;
					}
				}
			} else {
				navigate(`/recipes/${data.id}`);
			}
		} catch (error) {}
	};

	return (
		<Link
			to={`recipes/${data.id}`}
			className={`random-pick-container recipe-${index}`}
			onClick={(e) => handleClick(e)}
		>
			<div className="random-pick-background" style={{ backgroundImage: `url(${data.image})` }}></div>
			<div className="random-pick-category">{data.type?.charAt(0).toUpperCase() + data.type.slice(1)}</div>
			<div
				className={`random-pick-like ${
					recipeLiked ? 'random-pick-like--active' : 'random-pick-like--inactive'
				}`}
				style={{ opacity: recipeLiked && 1, transform: recipeLiked && 'scale(1)' }}
				onClick={() => setRecipeLiked(!recipeLiked)}
			>
				{recipeLiked ? <FcLikePlaceholder size={24} /> : <FcLike size={24} />}
			</div>
			<div className="random-pick-stats">
				<IoIosTimer size={20} color="#6b7280"></IoIosTimer>
				{data.readyInMinutes}'
			</div>
			<div className="random-pick-title" title={data.title}>
				{data.title}
			</div>
		</Link>
	);
};

export default PrincipalRecipe;
