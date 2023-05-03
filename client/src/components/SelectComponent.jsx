import React, { useState } from 'react';
import { FaTimes } from 'react-icons/fa';

export const SelectComponent = ({ label, options, filter, onChange }) => {
	//const [componentActive, setComponentActive] = useState(false);
	const [selectedOption, setSelectedOption] = useState('');

	const unselectOption = () => {
		const select = document.getElementById(`filter-select-${filter}`);
		setSelectedOption();
		select.value = '';
		//onChange(select);
	};

	return (
		<div className="filter-container">
			<div className="filter-content">
				<label className={`filter-label ${selectedOption && 'label-active'}`}>{label}</label>

				<FaTimes
					className={`unselect-filter-button ${selectedOption && 'unselect-filter-button--active'}`}
					size={12}
					color="#4c4c4c"
					onClick={() => unselectOption()}
				/>

				<select
					id={`filter-select-${filter}`}
					className="filter-select"
					name={filter}
					onChange={(e) => {
						setSelectedOption(e.target.value);
						onChange(e);
					}}
					//onClick={() => setComponentActive(!componentActive)}
				>
					{options.map((option) => {
						return (
							<option
								value={option.code}
								key={option.code}
								defaultValue={option.defult}
								style={{ display: option.code === '' ? 'none' : 'inline' }}
							>
								{option.name}
							</option>
						);
					})}
				</select>
			</div>
		</div>
	);
};
