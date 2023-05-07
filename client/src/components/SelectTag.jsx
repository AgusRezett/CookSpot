import React from 'react';

export const SelectTag = ({ diet, handleChange, selected }) => {
	return (
		<div
			onClick={() => handleChange(diet)}
			className={`diet-check-container ${selected && 'diet-check-container--active'}`}
		>
			<p className="dietTypes">{diet}</p>
		</div>
	);
};
