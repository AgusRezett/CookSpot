import React from 'react';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { IoReload, IoSearch } from 'react-icons/io5';
import { getRecipes, getRecipesByName } from '../actions';

export default function SearchBar() {
	const dispatch = useDispatch();
	const [searchValue, setSearchValue] = useState('');
	const [refreshing, setRefreshing] = useState(false);

	function handleChange(e) {
		setSearchValue(e);
	}

	function handleSubmit(e) {
		e.preventDefault();
		try {
			if (searchValue === '') {
				dispatch(getRecipes());
			} else {
				dispatch(getRecipesByName(searchValue));
			}
		} catch (error) {
			return error;
		}

		setSearchValue('');
	}

	function handleRefresh(e) {
		e.preventDefault();
		setRefreshing(true);
		try {
			dispatch(getRecipes());
		} catch (error) {
			return error;
		}

		setSearchValue('');
	}

	return (
		<form className="search-recipe-container" onSubmit={(e) => handleSubmit(e)}>
			<input type="text" className="search-input" placeholder="Search" value={searchValue} onChange={(e) => handleChange(e.target.value)} />

			<div
				className={`search-button ${refreshing ? 'reload-animation' : ''}`}
				onClick={(e) => handleRefresh(e)}
				style={{ right: 40 }}
				onAnimationEnd={() => setRefreshing(false)}
			>
				<IoReload size={18} color="#6b7280" />
			</div>

			<button className="search-button" type="submit" onClick={(e) => handleSubmit(e)}>
				<IoSearch size={18} color="#6b7280" />
			</button>
		</form>
	);
}
