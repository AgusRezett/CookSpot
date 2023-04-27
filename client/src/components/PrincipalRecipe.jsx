import React from 'react';

const PrincipalRecipe = ({ data, index }) => {
	return (
		<div className={`random-pick-container recipe-${index}`}>
			<div className="random-pick-background" style={{ backgroundImage: `url(${data.image})` }}></div>
			{/* <div className=''></div> */}
			{data.title}
		</div>
	);
};

export default PrincipalRecipe;
