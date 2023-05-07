import React, { useState } from 'react';
import { FaTimes } from 'react-icons/fa';

export const InputText = ({ label, name, value, setValue, type = 'text' }) => {
	const [selectedOption, setSelectedOption] = useState('');

	const deleteContent = () => {
		const input = document.getElementById(`input-element-${name}`);
		console.log(input);
		setValue(input, true);
		setSelectedOption(false);
	};

	return (
		<div className="input-container">
			<div className="input-content">
				<label className={`input-label ${selectedOption && 'label-active'}`}>{label}</label>

				<FaTimes
					className={`unselect-input-button ${selectedOption && 'unselect-input-button--active'}`}
					size={12}
					color="#4c4c4c"
					onClick={() => deleteContent()}
				/>

				<input
					id={`input-element-${name}`}
					className="input-element"
					name={name}
					type={type}
					value={value}
					onChange={(e) => {
						setSelectedOption(e.target.value.length > 0);
						type !== 'number' ? setValue(e) : e.target.value >= 0 && e.target.value <= 100 && setValue(e);
					}}
				/>
			</div>
		</div>
	);
};
