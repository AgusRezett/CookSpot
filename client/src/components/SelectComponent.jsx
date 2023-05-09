import React, { useState } from 'react';
import { FaTimes } from 'react-icons/fa';

export const SelectComponent = ({ label, options, filter, onChange, unselectFunction, currentOrder }) => {
	const [selectedOption, setSelectedOption] = useState('');

	const unselectOption = () => {
		const select = document.getElementById(`filter-select-${filter}`);
		unselectFunction();
		setSelectedOption();
		select.value = '';
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
					disabled={
						currentOrder !== ''
							? filter === 'alphabetical'
								? currentOrder !== 'atoz' && currentOrder !== 'ztoa'
								: filter === 'numerical'
								? currentOrder !== 'asc' && currentOrder !== 'desc'
								: false
							: false
					}
					/* filter === 'alphabetical'
						? currentOrder !== 'atoz' || currentOrder !== 'ztoa'
							? true
							: filter === 'numerical'
							? currentOrder !== 'asc' || currentOrder !== 'desc'
								? true
								: false
							: false
						: false */
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
