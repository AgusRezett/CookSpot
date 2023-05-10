import React from 'react';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { getRecipesByName } from '../actions';
import { IoSearch } from 'react-icons/io5';
import { FaTimes } from 'react-icons/fa';

export default function SearchBar() {
	const dispatch = useDispatch();
	const [searchValue, setSearchValue] = useState('');

	function handleChange(e) {
		// e.preventDefault();
		setSearchValue(e);
	}

	function handleSubmit(e) {
		e.preventDefault();
		try {
			dispatch(getRecipesByName(searchValue));
		} catch (error) {
			return error;
		}

		setSearchValue('');
	}

	function handleRefresh(e) {
		e.preventDefault();
		try {
			dispatch(getRecipesByName(''));
		} catch (error) {
			return error;
		}

		setSearchValue('');
	}

	return (
		<form className="search-recipe-container" onSubmit={(e) => handleSubmit(e)}>
			<input
				type="text"
				className="search-input"
				placeholder="Search"
				value={searchValue}
				onChange={(e) => handleChange(e.target.value)}
			/>

			<div className="search-button" onClick={(e) => handleRefresh(e)} style={{ right: 40 }}>
				<FaTimes size={18} color="#6b7280" />
			</div>

			<button className="search-button" type="submit" onClick={(e) => handleSubmit(e)}>
				<IoSearch size={18} color="#6b7280" />
			</button>
		</form>
	);
}
