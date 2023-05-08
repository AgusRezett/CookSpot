import React from 'react';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { getRecipesByName } from '../actions';
//import './searchbar.css';
import { IoSearch } from 'react-icons/io5';

export default function SearchBar() {
	const dispatch = useDispatch();
	const [searchValue, setSearchValue] = useState('');

	function handleChange(e) {
		// e.preventDefault();
		setSearchValue(e);
	}

	function handleSubmit(e) {
		try {
			console.log('busque');
			dispatch(getRecipesByName(searchValue));
		} catch (error) {
			return error;
		}

		setSearchValue('');
	}

	return (
		<div className="search-recipe-container">
			<input
				type="text"
				className="search-input"
				placeholder="Search"
				value={searchValue}
				onChange={(e) => handleChange(e.target.value)}
			/>
			<button className="search-button" type="submit" onClick={(e) => handleSubmit(e)}>
				<IoSearch size={18} color="#6b7280" />
			</button>
		</div>
	);
}
